/* eslint-env browser */

export default (state = '', action) => {
  switch (action.type) {
    case 'TOKEN_ADD':
      return action.token;
    case 'TOKEN_SET':
      if (window) {
        window.localStorage.setItem('token', action.token);
      }
      return action.token;
    case 'TOKEN_REMOVE':
      if (window) {
        window.localStorage.removeItem('token');
      }
      return '';
    default:
      if (!state && window) {
        return window.localStorage.getItem('token') || '';
      }
      return state;
  }
};
