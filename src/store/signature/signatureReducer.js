import {
  LOAD_DATA,
  FETCH_DATA,
  DELETE_SIGNATURE,
  DELETE_REMOVAL_SIGNATURES,
  ADD_REMOVAL_SIGNATURE,
  REMOVE_REMOVAL_SIGNATURE,
  REFRESH_REMOVAL_SIGNATURE
} from './types';

const signatureReducer = (
  store = {
    isLoading: false,
    signatures: [],
    title: '',
    removalSignatureIds: []
  },
  action
) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...store,
        signatures: action.data.signatures,
        title: action.data.title
      };

    case LOAD_DATA:
      return { ...store, isLoading: action.isLoading };

    case DELETE_SIGNATURE:
      return {
        ...store,
        signatures: store.signatures.filter(
          signature => signature.id !== action.id
        )
      };

    case DELETE_REMOVAL_SIGNATURES:
      return {
        ...store,
        signatures: store.signatures.filter(
          ({ id }) => !store.removalSignatureIds.includes(id)
        )
      };

    case ADD_REMOVAL_SIGNATURE:
      return {
        ...store,
        removalSignatureIds: [...store.removalSignatureIds, action.id]
      };

    case REFRESH_REMOVAL_SIGNATURE:
      return {
        ...store,
        removalSignatureIds: []
      };

    case REMOVE_REMOVAL_SIGNATURE:
      return {
        ...store,
        removalSignatureIds: store.removalSignatureIds.filter(
          id => id !== action.id
        )
      };

    default:
      return store;
  }
};

export default signatureReducer;
