import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user/index';

export default combineReducers({
  router: routerReducer,
  user,
});
