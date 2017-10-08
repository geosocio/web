import { combineEpics } from 'redux-observable';
import user from './user/index';

export default combineEpics(user);
