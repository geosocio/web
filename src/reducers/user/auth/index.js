import { combineReducers } from 'redux';
import id from './id';
import login from './login';
import verify from './verify';
import token from './token';

export default combineReducers({
  id,
  login,
  verify,
  token,
});
