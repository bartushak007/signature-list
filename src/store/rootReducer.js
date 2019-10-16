import { combineReducers } from 'redux';
import signatureReducer from './signature/signatureReducer';

export default combineReducers({
  signaturePage: signatureReducer
});
