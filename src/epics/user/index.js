import { combineEpics } from 'redux-observable';
import login from './login';
import * as VerifyEpics from './verify';

export default combineEpics(login, ...Object.values(VerifyEpics));
