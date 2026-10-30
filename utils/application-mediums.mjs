// Application schema v2 keeps each medium's description, images and captions together.
// Legacy records remain readable without rewriting existing Firestore documents.
export function getApplicationMediums(application) {
    if (Array.isArray(application.mediums) && application.mediums.length) return application.mediums;
    return [{
        medium: application.medium || '',
        description: application['art-demo'] || '',
        images: [1, 2, 3].map(index => ({
            url: application[`digitalImage${index}`] || '',
            description: application[`digitalImage${index}Info`] || ''
        }))
    }];
}

export function collectMediums(container) {
    return [...container.querySelectorAll('[data-medium-group]')].map(group => ({
        medium: group.querySelector('[data-medium-name]').value,
        description: group.querySelector('[data-medium-description]').value,
        images: [...group.querySelectorAll('[data-medium-image]')].map(image => ({
            file: image.querySelector('input[type="file"]').files[0],
            description: image.querySelector('textarea').value
        }))
    }));
}

export async function uploadMediums(mediums, upload) {
    return Promise.all(mediums.map(async (medium, mediumIndex) => ({
        medium: medium.medium,
        description: medium.description,
        images: await Promise.all(medium.images.map(async (image, imageIndex) => {
            if (!image.file) throw new Error('Please select all three images for each medium.');
            const file = new File([image.file], `${crypto.randomUUID()}-medium-${mediumIndex + 1}-image-${imageIndex + 1}`, { type: image.file.type });
            return { url: await upload(file, 'new-applications'), description: image.description };
        }))
    })));
}

export function addMediumGroup(container) {
    const index = container.querySelectorAll('[data-medium-group]').length;
    const id = container.dataset.nextMediumId || '0';
    container.dataset.nextMediumId = String(Number(id) + 1);
    const group = document.createElement('fieldset');
    group.dataset.mediumGroup = '';
    group.style.cssText = 'margin: 24px 0; padding: 16px; min-width: 0; border: 1px solid #ccc;';
    group.innerHTML = `
        <legend>${index === 0 ? 'First Medium' : `Medium ${index + 1}`}</legend>
        <label for="medium-${id}">Medium *</label>
        <input id="medium-${id}" data-medium-name required style="width:100%;box-sizing:border-box;" />
        <label for="medium-description-${id}" style="display:block;margin-top:16px;">Describe how you will be demonstrating or educating the public about how your artwork was created *</label>
        <textarea id="medium-description-${id}" data-medium-description required style="width:100%;box-sizing:border-box;"></textarea>
        <h3>Three (3) digital images of your medium *</h3>
        <p>Make sure that your images look professional and are jpgs that are a minimum of 150 KB (No thumbnails). 2D art should only be of your art image (no background or frame.) 3D art and jewelry should have a plain background (ex, black or white) and have enough lighting to show good detail. Crop the image so that your art fills most of the image and make sure the image is crisp and does justice to your art.</p>
        <p>If you are having trouble figuring out how to submit your digital images, contact GHOpenStudioTour@gmail.com</p>
        <div style="display:flex;flex-wrap:wrap;gap:20px;">
        ${[1, 2, 3].map(image => `
            <div data-medium-image style="flex:1 1 200px;min-width:0;">
                <label for="medium-${id}-image-${image}">Digital Image ${image} *</label>
                <input id="medium-${id}-image-${image}" type="file" accept=".jpg,.jpeg,.png" required style="width:100%;box-sizing:border-box;" />
                <img hidden alt="Preview of digital image ${image}" style="max-width:100%;max-height:200px;object-fit:contain;" />
                <label for="medium-${id}-caption-${image}" style="display:block;">Describe medium and size of this artwork *</label>
                <textarea id="medium-${id}-caption-${image}" required style="width:100%;box-sizing:border-box;"></textarea>
            </div>`).join('')}
        </div>`;
    group.querySelectorAll('input[type="file"]').forEach(input => {
        let previewUrl;
        input.addEventListener('change', () => {
            const preview = input.parentElement.querySelector('img');
            if (previewUrl) URL.revokeObjectURL(previewUrl);
            const file = input.files[0];
            preview.hidden = !file;
            if (file) {
                previewUrl = URL.createObjectURL(file);
                preview.src = previewUrl;
            } else preview.removeAttribute('src');
        });
    });
    if (index > 0) {
        const remove = document.createElement('button');
        remove.type = 'button';
        remove.textContent = 'Remove this medium';
        remove.addEventListener('click', () => {
            group.querySelectorAll('img[src]').forEach(img => URL.revokeObjectURL(img.src));
            group.remove();
            container.querySelectorAll('legend').forEach((legend, i) => {
                legend.textContent = i === 0 ? 'First Medium' : `Medium ${i + 1}`;
            });
        });
        group.append(remove);
    }
    container.append(group);
    return group;
}

// Populate read-only form controls from Firestore; use DOM properties for user text.
export function renderApplicationMediums(container, application) {
    container.replaceChildren();
    getApplicationMediums(application).forEach((medium, index) => {
        const group = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = index === 0 ? 'First Medium' : `Medium ${index + 1}`;
        group.append(legend);
        for (const [labelText, value] of [['Medium', medium.medium], ['Demonstration / education description', medium.description]]) {
            const label = document.createElement('label');
            label.textContent = labelText;
            const input = document.createElement('textarea');
            input.disabled = true;
            input.value = value || '';
            input.style.cssText = 'display:block;width:100%;box-sizing:border-box;';
            label.append(input);
            group.append(label);
        }
        const heading = document.createElement('h3');
        heading.textContent = 'Three (3) digital images of your medium';
        group.append(heading);
        const images = document.createElement('div');
        images.style.cssText = 'display:flex;flex-wrap:wrap;gap:20px;';
        (medium.images || []).forEach((image, imageIndex) => {
            const figure = document.createElement('figure');
            const img = document.createElement('img');
            img.alt = `${medium.medium || 'Medium'} — artwork ${imageIndex + 1}`;
            // Only load web URLs returned by Storage (or existing records).
            if (/^https?:\/\//i.test(image.url || '')) img.src = image.url;
            img.style.cssText = 'width:200px;max-width:100%;height:200px;object-fit:contain;';
            const caption = document.createElement('figcaption');
            caption.textContent = image.description || '';
            figure.append(img, caption);
            images.append(figure);
        });
        group.append(images);
        container.append(group);
    });
}
