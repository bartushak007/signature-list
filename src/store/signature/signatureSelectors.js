export const selectIsLoading = state => state.signaturePage.isLoading;

export const selectSignatures = state => state.signaturePage.signatures;

export const selectTitle = state => state.signaturePage.title;

export const selectHasRemovedSignatures = state =>
  state.signaturePage.removalSignatureIds.length !== 0;
