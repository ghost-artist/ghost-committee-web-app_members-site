function committeeAssignments(contract, year) {
  const artist = contract?.artistDetails;
  const receiptYear = artist?.membershipReceipt?.eventYear;
  if (!(artist?.membershipPaid || artist?.committeePreAssignment) ||
      (receiptYear != null && String(receiptYear) !== String(year))) return null;

  const roles = Array.isArray(contract.committeeRoleId)
    ? [...new Set(contract.committeeRoleId.map(String))].sort() : [];
  if (!roles.length) return null;
  return {
    roles,
    name: [artist.firstName, artist.lastName].filter(Boolean).join(' '),
    email: String(artist.personalEmail || artist.businessEmail || ''),
    phone: String(artist.phone || ''),
  };
}

function buildCommitteeRoster(committeeSettings, roleDocs, contractDocs, year) {
  const order = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });
  const groups = new Map();
  for (const [id, committee] of Object.entries(committeeSettings || {})) {
    if (typeof committee?.committee !== 'string' || !committee.committee.trim()) continue;
    groups.set(String(committee.id ?? id), { name: committee.committee, assignments: [] });
  }

  const roles = new Map(roleDocs.map(doc => [doc.id, doc.data()]));
  for (const doc of contractDocs) {
    const assignment = committeeAssignments(doc.data(), year);
    if (!assignment) continue;
    for (const id of assignment.roles) {
      const role = roles.get(id);
      const group = groups.get(String(role?.committeeId ?? role?.committee));
      if (!group || typeof role.title !== 'string') continue;

      group.assignments.push({
        contractId: doc.id,
        member: { name: assignment.name, role: role.title },
        email: assignment.email,
        phone: assignment.phone,
        chairPriority: chairPriority(role),
      });
    }
  }

  return [...groups.entries()].sort(([left], [right]) => order.compare(left, right)).map(([, group]) => {
    group.assignments.sort((a, b) => order.compare(a.member.name, b.member.name) ||
      order.compare(a.member.role, b.member.role));
    const primary = group.assignments.reduce((chair, assignment) =>
      assignment.chairPriority > (chair?.chairPriority ?? 0) ? assignment : chair, null);
    return {
      name: group.name,
      chair: primary ? { ...primary.member, email: primary.email, phone: primary.phone } : null,
      members: group.assignments.filter(assignment => assignment.contractId !== primary?.contractId).map(assignment => assignment.member),
    };
  });
}

function chairPriority(role) {
  if (typeof role.isChair === 'boolean') return role.isChair ? 2 : 0;
  // Secondary leadership roles stay in the member list unless explicitly designated.
  if (/\b(?:co|vice|assistant|deputy|acting)[\s-]*chair/i.test(role.title)) return 0;
  return /\bchair(?:person|man|woman)?\b/i.test(role.title) ? 1 : 0;
}

async function syncCommitteeRoster(db, send, parseYear, revisionOf) {
  const payload = await db.runTransaction(async tx => {
    const [settings, catalog, roles, contracts] = await Promise.all([
      tx.get(db.doc('app-settings/activeYear')),
      tx.get(db.doc('app-settings/committees')),
      tx.get(db.collection('committee-roles')),
      tx.get(db.collection('ghost-contracts')),
    ]);
    const year = parseYear(settings.get('data'));
    return {
      action: 'committee',
      year,
      revision: revisionOf(settings.readTime),
      committees: buildCommitteeRoster(catalog.get('data'), roles.docs, contracts.docs, year),
    };
  }, { readOnly: true });
  const result = await send(payload);
  return { year: payload.year, sheetUrl: result.sheetUrl };
}

module.exports = { committeeAssignments, syncCommitteeRoster };
