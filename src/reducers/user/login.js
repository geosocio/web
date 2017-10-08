import Login from 'app/entities/user/login';

export default function login(state = new Login(), action) {
  switch (action.type) {
    case 'LOGIN_SET_VALUE':
      if (!action.value) {
        return state.set('status', 'clean').set('value', action.value);
      }

      return state.set('status', 'dirty').set('value', action.value);
    case 'LOGIN_SEND':
      return state.set('status', 'saving');
    case 'LOGIN_RESET':
      return new Login();
    default:
      return state;
  }
}
