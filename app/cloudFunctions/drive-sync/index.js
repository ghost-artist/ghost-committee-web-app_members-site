const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { defineSecret, defineString } = require('firebase-functions/params');
const { onDocumentWritten } = require('firebase-functions/v2/firestore');
const { onCall, HttpsError } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');

initializeApp();
const db = getFirestore();
const appsScriptUrl = defineString('GHOST_DRIVE_SYNC_URL');
const appsScriptSecret = defineSecret('GHOST_DRIVE_SYNC_SECRET');

const artistColumns = [
  ['First Name', 'firstName'], ['Last Name', 'lastName'],
  ['Personal Email', 'personalEmail'], ['Business Email', 'businessEmail'],
  ['Phone', 'phone'], ['Mailing Address', 'mailingAddress'],
  ['Studio Address', 'studioAddress'], ['Medium', 'medium'],
  ['Artist Tagline', 'artistTagline'], ['Artist Statement', 'artistStatement'],
  ['Website', 'website'], ['Facebook', 'facebook'], ['Instagram', 'instagram'],
];

const headers = [
  'GHOST Member Id', ...artistColumns.map(([label]) => label), 'Membership Paid:',
  'Committee Role(s)', 'Studio Sharing Answer', 'Artistic Demonstration',
  'Mentorship Requested', 'Signature',
];

function parseYear(value) {
  if (!/^20\d{2}$/.test(String(value))) throw new Error('Invalid Ghost event year');
  return Number(value);
}

async function activeYear() {
  const setting = await db.doc('app-settings/activeYear').get();
  return parseYear(setting.get('data'));
}

async function sendToAppsScript(payload) {
  const response = await fetch(appsScriptUrl.value(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, headers, secret: appsScriptSecret.value() }),
    signal: AbortSignal.timeout(45000),
  });
  if (!response.ok) throw new Error('Apps Script HTTP status ' + response.status);
  const result = await response.json();
  if (!result.ok) throw new Error(result.error || 'Apps Script rejected the sync request');
  return result;
}

async function artistRow(contract, contractId) {
  const roles = Array.isArray(contract.committeeRoleId) ? contract.committeeRoleId : [];
  const docs = await Promise.all(roles.map(id => db.collection('committee-roles').doc(String(id)).get()));
  const roleTitles = docs.map(doc => doc.get('title')).filter(Boolean).join(', ');
  return [
    contract.userId || contractId,
    ...artistColumns.map(([, key]) => contract.artistDetails[key]),
    true, roleTitles, contract.StudioSharingAnswer, contract.artisticDemonstration,
    contract.artistMentor ?? false, contract.signature,
  ].map(value => {
    const cell = value ?? '';
    return ['string', 'number', 'boolean'].includes(typeof cell) ? cell : '';
  });
}

exports.syncPaidGhostContract = onDocumentWritten({
  document: 'ghost-contracts/{contractId}',
  retry: true,
  secrets: [appsScriptSecret],
}, async event => {
  const saved = event.data?.after;
  if (!saved?.exists) return;
  const contract = saved.data();
  const receipt = contract.artistDetails?.membershipReceipt;
  // The existing checkout flow records the receipt after capture.
  if (contract.artistDetails?.membershipPaid !== true ||
      receipt?.status !== 'COMPLETED' || !receipt.transactionId) return;

  const contractId = event.params.contractId;
  if (receipt.eventYear == null) {
    // Pin the receipt to an event year once. The resulting Firestore write
    // triggers the normal export and keeps later edits in the same folder.
    await db.runTransaction(async transaction => {
      const current = await transaction.get(saved.ref);
      const currentReceipt = current.get('artistDetails.membershipReceipt');
      if (current.get('artistDetails.membershipPaid') !== true ||
          currentReceipt?.status !== 'COMPLETED' ||
          currentReceipt.transactionId !== receipt.transactionId || currentReceipt.eventYear != null) return;
      const setting = await transaction.get(db.doc('app-settings/activeYear'));
      transaction.update(saved.ref, 'artistDetails.membershipReceipt.eventYear', parseYear(setting.get('data')));
    });
    return;
  }
  const year = parseYear(receipt.eventYear);
  const timestamp = saved.updateTime;
  const revision = String(timestamp.seconds).padStart(11, '0') +
    String(timestamp.nanoseconds).padStart(9, '0');
  try {
    const row = await artistRow(contract, contractId);
    await sendToAppsScript({ action: 'upsert', year, contractId, revision, row });
    logger.info('Ghost master contract synced', { year, contractId });
  } catch (error) {
    logger.error('Ghost master contract sync failed', { year, contractId, reason: error.message });
    throw error;
  }
});

exports.scaffoldGhostDrive = onCall({ secrets: [appsScriptSecret] }, async request => {
  // Member-site role documents are client writable. Authorize this operation with
  // a Firebase custom claim issued by an administrator.
  if (request.auth?.token.ghostDriveAdmin !== true) {
    throw new HttpsError('permission-denied', 'Google Drive scaffolding requires developer access.');
  }
  try {
    const year = await activeYear();
    const result = await sendToAppsScript({ action: 'scaffold', year });
    return { year, sheetUrl: result.sheetUrl };
  } catch (error) {
    logger.error('Ghost Drive scaffold failed', { reason: error.message });
    throw new HttpsError('internal', 'Could not scaffold Google Drive. Check the sync logs.');
  }
});
