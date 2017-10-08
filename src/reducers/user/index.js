import { combineReducers } from 'redux';
import login from './login';
import verify from './verify';
import token from './token';

export default combineReducers({
  login,
  verify,
  token,
});
