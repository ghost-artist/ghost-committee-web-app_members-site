const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { defineSecret, defineString } = require('firebase-functions/params');
const { onDocumentWritten } = require('firebase-functions/v2/firestore');
const { onCall, HttpsError } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');
const { committeeAssignments, syncCommitteeRoster } = require('./committee-roster');
const { syncArtistImages } = require('./artist-images');

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

function revisionOf(timestamp) {
  return String(timestamp.seconds).padStart(11, '0') +
    String(timestamp.nanoseconds).padStart(9, '0');
}

async function sendToAppsScript(payload) {
  const response = await fetch(appsScriptUrl.value(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, headers, secret: appsScriptSecret.value() }),
    signal: AbortSignal.timeout(payload.action === 'syncArtistImages' ? 150000 : 45000),
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
  const revision = revisionOf(saved.updateTime);
  try {
    const row = await artistRow(contract, contractId);
    await sendToAppsScript({ action: 'upsert', year, contractId, revision, row });
    logger.info('Ghost master contract synced', { year, contractId });
  } catch (error) {
    logger.error('Ghost master contract sync failed', { year, contractId, reason: error.message });
    throw error;
  }
});

exports.syncGhostArtistImages = onDocumentWritten({
  document: 'ghost-contracts/{contractId}',
  retry: true,
  timeoutSeconds: 180,
  secrets: [appsScriptSecret],
}, async event => {
  try {
    await syncArtistImages(event, sendToAppsScript, parseYear, revisionOf);
  } catch (error) {
    logger.error('Ghost artist image sync failed', { contractId: event.params.contractId, reason: error.message });
    throw error;
  }
});

async function refreshCommitteeRoster() {
  try {
    return await syncCommitteeRoster(db, sendToAppsScript, parseYear, revisionOf);
  } catch (error) {
    logger.error('Ghost committee roster sync failed', { reason: error.message });
    throw error;
  }
}

function onCommitteeRosterChange(document, handler = refreshCommitteeRoster) {
  return onDocumentWritten({ document, retry: true, secrets: [appsScriptSecret] }, handler);
}

exports.syncGhostCommitteeAssignments = onCommitteeRosterChange('ghost-contracts/{contractId}', async event => {
  const before = event.data?.before?.data();
  const after = event.data?.after?.data();
  // Compare visible assignments and the year marker before fetching the roster.
  const rosterFields = contract => [
    committeeAssignments(contract, contract?.artistDetails?.membershipReceipt?.eventYear),
    contract?.artistDetails?.membershipReceipt?.eventYear ?? null,
  ];
  if (JSON.stringify(rosterFields(before)) !== JSON.stringify(rosterFields(after))) {
    await refreshCommitteeRoster();
  }
});
exports.syncGhostCommitteeRoles = onCommitteeRosterChange('committee-roles/{roleId}');
exports.syncGhostCommitteeCatalog = onCommitteeRosterChange('app-settings/committees');
exports.syncGhostCommitteeYear = onCommitteeRosterChange('app-settings/activeYear');

exports.scaffoldGhostDrive = onCall({ secrets: [appsScriptSecret] }, async request => {
  if (!request.auth) throw new HttpsError('unauthenticated', 'Sign in to scaffold Google Drive.');

  // Follow the committee workflow: payment or an administrative pre-assignment
  // confirms roles. Read permissions from current role documents on every call.
  const contract = (await db.collection('ghost-contracts').doc(request.auth.uid).get()).data();
  const artist = contract?.artistDetails;
  const roleIds = contract?.committeeRoleId;
  const confirmed = artist?.membershipPaid === true || artist?.committeePreAssignment === true;
  const roles = confirmed && Array.isArray(roleIds) ? await Promise.all(
    [...new Set(roleIds.map(String))].map(id => db.collection('committee-roles').doc(id).get()),
  ) : [];
  const permitted = roles.some(role => {
    const privileges = role.get('privileges');
    return Array.isArray(privileges) && privileges.includes('scaffoldGoogleDrive');
  });
  if (!permitted) {
    throw new HttpsError('permission-denied', 'Your committee role does not grant Google Drive scaffolding.');
  }
  try {
    const committee = await refreshCommitteeRoster();
    const result = await sendToAppsScript({ action: 'scaffold', year: committee.year });
    const images = await sendToAppsScript({ action: 'scaffoldImages', year: committee.year });
    return {
      year: committee.year,
      sheetUrl: result.sheetUrl,
      committeeSheetUrl: committee.sheetUrl,
      imagesFolderUrl: images.folderUrl,
    };
  } catch (error) {
    logger.error('Ghost Drive scaffold failed', { reason: error.message });
    throw new HttpsError('internal', 'Could not scaffold Google Drive. Check the sync logs.');
  }
});
