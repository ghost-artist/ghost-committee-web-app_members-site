const photoSlots = [
  'digitalImage1', 'digitalImage2', 'digitalImage3', 'brochureImage', 'artistInStudioImage',
];

function artistImageState(contract) {
  const artist = contract?.artistDetails;
  const receipt = artist?.membershipReceipt;
  if (artist?.membershipPaid !== true || receipt?.status !== 'COMPLETED' ||
      !receipt.transactionId || receipt.eventYear == null) return null;

  return {
    year: receipt.eventYear,
    artistName: [artist.firstName, artist.lastName]
      .filter(part => typeof part === 'string' && part.trim()).map(part => part.trim()).join(' ') || 'Unnamed Artist',
    photos: Object.fromEntries(photoSlots.map(slot => [
      slot, typeof contract.images?.[slot] === 'string' ? contract.images[slot] : '',
    ])),
  };
}

async function syncArtistImages(event, send, parseYear, revisionOf) {
  const saved = event.data?.after;
  if (!saved?.exists) return;
  const after = artistImageState(saved.data());
  if (!after) return;
  const before = artistImageState(event.data.before?.data());
  const containsPhoto = state => Object.values(state?.photos ?? {}).some(Boolean);
  if (!containsPhoto(after) && !containsPhoto(before)) return;
  if (JSON.stringify(after) === JSON.stringify(before)) return;

  await send({
    action: 'syncArtistImages',
    ...after,
    year: parseYear(after.year),
    contractId: event.params.contractId,
    revision: revisionOf(saved.updateTime),
  });
}

module.exports = { syncArtistImages };
