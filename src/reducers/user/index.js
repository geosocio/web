import { combineReducers } from 'redux';
import login from './login';
import verify from './verify';

export default combineReducers({
  login,
  verify,
});
