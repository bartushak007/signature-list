import {
  LOAD_DATA,
  FETCH_DATA,
  DELETE_SIGNATURE,
  DELETE_REMOVAL_SIGNATURES,
  ADD_REMOVAL_SIGNATURE,
  REMOVE_REMOVAL_SIGNATURE,
  REFRESH_REMOVAL_SIGNATURE
} from './types';

import { resolvePath } from '../../helpers/index';

export const setLoadData = isLoading => ({ type: LOAD_DATA, isLoading });

export const fetchData = () => dispatch => {
  dispatch(setLoadData(true));

  fetch(resolvePath('data.json'))
    .then(j => j.json())
    .then(data => {
      dispatch({ type: FETCH_DATA, data });
      dispatch(setLoadData(false));
    });
};

export const deleteSignature = id => ({ type: DELETE_SIGNATURE, id });

export const refreshRemovalSignatureId = id => ({
  type: REFRESH_REMOVAL_SIGNATURE
});

export const deleteRemovalSignatures = () => dispatch => {
  dispatch({
    type: DELETE_REMOVAL_SIGNATURES
  });
  dispatch(refreshRemovalSignatureId());
};

export const addRemovalSignatureId = id => ({
  type: ADD_REMOVAL_SIGNATURE,
  id
});

export const removeRemovalSignatureId = id => ({
  type: REMOVE_REMOVAL_SIGNATURE,
  id
});
