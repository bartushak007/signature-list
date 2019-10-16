import { LOAD_DATA, FETCH_DATA } from './types';

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
