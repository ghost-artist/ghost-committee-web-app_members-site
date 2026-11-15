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
    groups.set(String(committee.id ?? id), { name: committee.committee, chairs: [], members: [] });
  }

  const roles = new Map(roleDocs.map(doc => [doc.id, doc.data()]));
  for (const doc of contractDocs) {
    const assignment = committeeAssignments(doc.data(), year);
    if (!assignment) continue;
    for (const id of assignment.roles) {
      const role = roles.get(id);
      const group = groups.get(String(role?.committeeId ?? role?.committee));
      if (!group || typeof role.title !== 'string') continue;

      const person = { name: assignment.name, role: role.title };
      const isChair = role.isChair ?? /\bchair(?:person|man|woman)?\b/i.test(role.title);
      if (isChair) {
        group.chairs.push({ ...person, email: assignment.email, phone: assignment.phone });
      } else {
        group.members.push(person);
      }
    }
  }

  return [...groups.entries()].sort(([left], [right]) => order.compare(left, right)).map(([, group]) => {
    const compare = (a, b) => order.compare(a.name, b.name) || order.compare(a.role, b.role);
    group.chairs.sort(compare);
    group.members.sort(compare);
    return group;
  });
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
