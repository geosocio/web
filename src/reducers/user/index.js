import { combineReducers } from 'redux';
import auth from './auth/index';
import list from './list';

export default combineReducers({
  auth,
  list,
});
