// Integration coverage using the compiled components and real CRUD adapter.
// Firebase is replaced in memory; no production writes or outbound emails occur.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const tick = () => new Promise(resolve => setTimeout(resolve, 10));

async function setup(page, records) {
    const html = read(page).replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
    const dom = new JSDOM(html, { url: 'http://localhost/', runScripts: 'dangerously' });
    const w = dom.window;
    w.console = { ...console, log() {}, error() {} };
    w.sendMessageToParent = () => {};
    w.confirm = () => true;
    w.URL.createObjectURL = () => 'blob:test';
    w.URL.revokeObjectURL = () => {};
    w.uploads = [];
    w.firebase = {
        db: {}, collection: (_, name) => name,
        doc: (...args) => args.length === 3 ? {collection: args[1], id: args[2]} : {collection: args[0], id: args[1]}, query: value => value,
        serverTimestamp: () => ({ toDate: () => new Date('2026-10-30') }),
        getDocs: async collection => ({ forEach: callback => {
            Object.entries(records[collection] || {}).forEach(([id, data]) => callback({ id, data: () => ({ ...data }) }));
        }}),
        addDoc: async (collection, data) => {
            if (w.failSave) throw new Error('Simulated write failure');
            records[collection] ||= {};
            records[collection].saved = data;
            return {id: 'saved'};
        },
        setDoc: async ({collection, id}, data) => {
            records[collection][id] = {...records[collection][id], ...data};
        },
        deleteDoc: async ({collection, id}) => { delete records[collection][id]; },
        storage: {
            getStorage: () => ({}), ref: (_, name) => name,
            uploadBytesResumable: async (name, file) => { w.uploads.push({name, file}); },
            getDownloadURL: async name => `https://storage.example/${name}`
        }
    };
    w.eval(read('utils/logIf.js'));
    w.eval(read('dist/CRUD.js'));
    // The existing markdown component loses its slot when upgraded after parsing.
    // It is unrelated to application fields; omit it from this DOM harness.
    w.document.querySelectorAll('markdown-component').forEach(node => node.remove());
    w.eval(read('dist/components.js'));
    // Execute the exact shared module and page code without import statements:
    // jsdom does not yet execute browser ES modules.
    w.eval(read('utils/application-mediums.mjs').replace(/export /g, ''));
    if (page.includes('new-application/')) {
        w.sendNewApplicationClientConfirmationEmail = async () => {};
        w.eval(read('app/pages/new-application/index.js').replace(/^import .*;?\n/gm, ''));
    } else {
        const script = [...read(page).matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)]
            .map(match => match[1]).find(code => code.includes("CRUD.readAll('new-applications')"));
        w.eval(script);
    }
    await tick();
    return dom;
}

test('add/remove groups, save nested image URLs, read back old/new records, approve and delete', async () => {
    const records = {};
    const dom = await setup('app/pages/new-application/index.html', records);
    const w = dom.window;
    const d = w.document;
    try {
        const groups = () => [...d.querySelectorAll('[data-medium-group]')];
        const add = d.querySelector('#add-medium');
        assert.equal(groups().length, 1);
        assert.equal(groups()[0].querySelector('input').value, '');
        assert.equal(groups()[0].querySelector('input').hasAttribute('placeholder'), false);
        assert.ok(d.querySelector('#application-mediums').compareDocumentPosition(d.querySelector('input[name="digitalImage4"]')) & w.Node.DOCUMENT_POSITION_FOLLOWING);
        add.click(); add.click();
        groups()[1].querySelector('button').click();
        add.click();
        const ids = [...d.querySelectorAll('[data-medium-group] [id]')].map(node => node.id);
        assert.equal(new Set(ids).size, ids.length);
        groups()[2].querySelector('button').click();
        assert.equal(groups()[1].querySelector('legend').textContent, 'Medium 2');
        groups().forEach((group, i) => {
            group.querySelector('[data-medium-name]').value = ['Watercolor', 'Ceramics'][i];
            group.querySelector('[data-medium-description]').value = `Demo ${i} < & "`;
            group.querySelectorAll('[data-medium-image]').forEach((image, j) => {
                const input = image.querySelector('input');
                Object.defineProperty(input, 'files', {value: [new w.File(['image'], `art-${i}-${j}.jpg`, {type:'image/jpeg'})]});
                input.dispatchEvent(new w.Event('change'));
                image.querySelector('textarea').value = `Caption ${i}-${j}`;
            });
        });
        assert.equal(d.querySelectorAll('[data-medium-group] img:not([hidden])').length, 6);
        const form = d.querySelector('form');
        // All repeated controls must participate in native required validation.
        assert.equal(groups()[0].querySelectorAll('[required]').length, 8);
        assert.equal(groups()[0].querySelector('[data-medium-name]').checkValidity(), true);
        groups()[0].querySelector('[data-medium-name]').value = '';
        assert.equal(groups()[0].querySelector('[data-medium-name]').checkValidity(), false);
        groups()[0].querySelector('[data-medium-name]').value = 'Watercolor';
        d.querySelector('input[name="firstName"]').value = 'Test';
        d.querySelector('input[name="lastName"]').value = 'Artist';
        w.failSave = true;
        form.dispatchEvent(new w.Event('submit', {cancelable:true}));
        await tick();
        assert.match(d.querySelector('#application-error').textContent, /could not be submitted/);
        assert.equal(d.querySelector('button[type="submit"]').disabled, false);
        assert.equal(groups()[0].querySelector('input').value, 'Watercolor');
        w.failSave = false;
        form.dispatchEvent(new w.Event('submit', {cancelable:true}));
        await tick();
        const saved = records['new-applications'].saved;
        assert.equal(saved.schemaVersion, 2);
        assert.deepEqual(Array.from(saved.mediums, item => item.medium), ['Watercolor', 'Ceramics']);
        assert.equal(saved.mediums[1].images[2].description, 'Caption 1-2');
        assert.equal(new Set(saved.mediums.flatMap(item => item.images.map(image => image.url))).size, 6);
        assert.match(saved.digitalImage4, /studio-image/);
        assert.equal(saved.medium, undefined);
        assert.equal(saved.digitalImage1, undefined);
        assert.equal(d.querySelector('button[type="submit"]').innerText, 'Application Submitted!');
        assert.ok(saved.mediums.every(item => item.images.every(image => !('file' in image))));
        records['new-applications'].legacy = {
            firstName:'Legacy', lastName:'Artist', medium:'Oil, ink', 'art-demo':'Legacy demo',
            digitalImage1:'https://storage.example/legacy.jpg', digitalImage1Info:'Legacy caption',
            hasBeenReviewed:false
        };
        const review = await setup('app/pages/new-applications/index.html', records);
        try {
            const components = [...review.window.document.querySelectorAll('application-component')];
            assert.equal(components.length, 2);
            const modern = components.find(component => component.textContent.includes('Test Artist:'));
            const legacy = components.find(component => component.textContent.includes('Legacy Artist:'));
            assert.equal(modern.querySelectorAll('.application-mediums fieldset').length, 2);
            assert.equal(modern.querySelectorAll('.application-mediums textarea')[3].value, 'Demo 1 < & "');
            assert.equal(modern.querySelectorAll('figcaption')[5].textContent, 'Caption 1-2');
            assert.equal(legacy.querySelector('.application-mediums textarea').value, 'Oil, ink');
            assert.equal(legacy.querySelectorAll('.application-mediums textarea')[1].value, 'Legacy demo');
            assert.equal(legacy.querySelector('.application-mediums img').src, 'https://storage.example/legacy.jpg');
            modern.querySelector('.approve-btn').click();
            await tick();
            assert.equal(records['new-applications'].saved.approved, true);
            assert.equal(records['new-applications'].saved.hasBeenReviewed, true);
            assert.deepEqual(records['new-applications'].saved.mediums, saved.mediums);
            modern.querySelector('.delete-btn').click();
            await tick();
            assert.equal(records['new-applications'].saved, undefined);
            assert.equal(review.window.document.querySelectorAll('application-component').length, 1);
        } finally { review.window.close(); }
    } finally { dom.window.close(); }
});

test('missing image and upload failures reject before Firestore persistence', async () => {
    const dom = await setup('app/pages/new-application/index.html', {});
    try {
        const w = dom.window;
        const medium = { medium:'Ink', description:'Demo', images:[{description:'Missing'}] };
        await assert.rejects(w.uploadMediums([medium], async () => 'url'), /select all three/);
        medium.images[0].file = new w.File(['image'], 'test.jpg');
        await assert.rejects(w.uploadMediums([medium], async () => { throw new Error('Upload failed'); }), /Upload failed/);
    } finally { dom.window.close(); }
});


test('local switch suppresses every application email without changing deployed behavior', async () => {
    for (const host of ['localhost', '127.0.0.1', 'members.example.com']) {
        const dom = new JSDOM('', {url: `http://${host}`, runScripts:'dangerously'});
        const w = dom.window;
        try {
            w.TESTING = {};
            w.console.log = () => {};
            let sends = 0;
            w.sendMessageToParent = () => sends++;
            w.CRUD = {read: async () => ({date:'2026-10-30'})};
            w.getEmailAddresses = async () => ['board@example.com'];
            w.eval(read('app/outbound-emails/local-email-settings.js').replace(/export /g, ''));
            const names = ['newApplicationClientConfirmation', 'newApplicationReceived', 'approvedNewArtist', 'notApprovedNewArtist'];
            for (const name of names) {
                w.eval(read(`app/outbound-emails/${name}.js`).replace(/^import .*;?\n/gm, '').replace(/export /g, ''));
            }
            const sendAll = async () => {
                await w.sendNewApplicationClientConfirmationEmail({email:'test@example.com'});
                await w.sendNewApplicationEmail({email:'test@example.com',firstName:'Test',lastName:'Artist'});
                w.sendApprovedNewArtistEmail('test@example.com');
                w.sendNotApprovedNewArtistEmail('test@example.com');
            };
            w.localStorage.setItem('ghost.suppressApplicationEmails', 'true');
            await sendAll();
            assert.equal(sends, host === 'members.example.com' ? 4 : 0);
            sends = 0;
            w.localStorage.removeItem('ghost.suppressApplicationEmails');
            await sendAll();
            assert.equal(sends, 4);
        } finally { w.close(); }
    }
});
