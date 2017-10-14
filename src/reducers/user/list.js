import { Set } from 'immutable';
import User from 'app/entities/user/user';
import parseJwt from 'app/utils/parse-jwt';

export default (state = new Set(), action) => {
  switch (action.type) {
    case 'USER_ADD':
      return state.add(action.user).sortBy(user => user.id);
    case 'USER_ADD_MULTIPLE':
      return state.union(action.users).sortBy(user => user.id);
    case 'USER_UPDATE':
      return state.remove(action.user).add(action.user).sortBy(user => user.id);
    case 'TOKEN_ADD':
    case 'TOKEN_SET':
      return state.add(new User(parseJwt(action.token))).sortBy(user => user.id);
    default:
      return state;
  }
};
