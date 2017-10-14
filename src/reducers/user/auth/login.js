import Login from 'app/entities/user/login';

export default (state = new Login(), action) => {
  switch (action.type) {
    case 'LOGIN_SET_VALUE':
      if (!action.value) {
        return state.set('status', 'clean').set('error', undefined).set('value', action.value);
      }

      return state.set('status', 'dirty').set('error', undefined).set('value', action.value);
    case 'LOGIN_SET_ERROR':
      return state.set('status', 'error').set('error', action.error);
    case 'LOGIN_SEND':
      return state.set('status', 'saving').set('error', undefined);
    case 'LOGIN_RESET':
      return new Login();
    default:
      return state;
  }
};
