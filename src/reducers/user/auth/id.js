import User from 'app/entities/user/user';
import parseJwt from 'app/utils/parse-jwt';

export default (state = '', action) => {
  switch (action.type) {
    case 'TOKEN_ADD':
    case 'TOKEN_SET':
      return new User(parseJwt(action.token)).id;
    case 'TOKEN_REMOVE':
      return '';
    default:
      return state;
  }
};
