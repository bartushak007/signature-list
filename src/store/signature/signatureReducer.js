import { LOAD_DATA, FETCH_DATA } from './types';

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

    default:
      return store;
  }
};

export default signatureReducer;
