import { LOAD_DATA, FETCH_DATA, DELETE_SIGNATURE } from './types';
import Signature from '../../components/blocks/signature/Signature';

const signatureReducer = (
  store = { isLoading: false, signatures: [], title: '' },
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

    default:
      return store;
  }
};

export default signatureReducer;
