// Paste this entire script into the signed-in member site's browser console.
// It previews changes only. Then run: await migrateApplicationMediums({dryRun:false})
window.migrateApplicationMediums = async function ({ dryRun = true, applicationId = null } = {}) {
    const f = window.firebase;
    if (!f?.auth?.currentUser) throw new Error('Sign in with committee access first.');
    const { legacyApplicationPatch } = await import('/utils/application-mediums.mjs');
    const { runTransaction } = await import('https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js');
    if (applicationId !== null && (typeof applicationId !== 'string' || !applicationId.trim() || applicationId.includes('/'))) {
        throw new Error('applicationId must be a non-empty Firestore document ID without slashes.');
    }
    let entries;
    if (applicationId !== null) {
        const entry = await f.getDoc(f.doc(f.db, 'new-applications', applicationId));
        if (!entry.exists()) throw new Error(`Application ${applicationId} does not exist.`);
        entries = [entry];
    } else {
        entries = (await f.getDocs(f.collection(f.db, 'new-applications'))).docs;
    }
    const results = [];
    for (const entry of entries) {
        if (entry.id === 'configDocument') continue;
        try {
            const patch = legacyApplicationPatch(entry.data());
            if (!patch) {
                results.push({id:entry.id, status:'already current — skipped'});
                continue;
            }
            if (dryRun) {
                results.push({id:entry.id, status:'would migrate', medium:patch.mediums[0].medium});
                continue;
            }
            // Re-read inside a transaction to avoid overwriting a concurrently
            // updated application or recreating one that has been deleted.
            const status = await runTransaction(f.db, async transaction => {
                const current = await transaction.get(entry.ref);
                if (!current.exists()) return 'deleted — skipped';
                const latestPatch = legacyApplicationPatch(current.data());
                if (!latestPatch) return 'already current — skipped';
                transaction.update(entry.ref, latestPatch);
                return 'migrated';
            });
            results.push({id:entry.id, status});
        } catch (error) {
            results.push({id:entry.id, status:'failed', error:error.message});
        }
    }
    console.table(results);
    console.log(dryRun ? `Preview only. To apply this scope: await migrateApplicationMediums(${JSON.stringify({dryRun:false, applicationId})})`
        : 'Finished. Reload committee review. Failed records may be retried.');
    return results;
};
await window.migrateApplicationMediums();
