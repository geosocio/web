import Verify from 'app/entities/user/verify';

export default (state = new Verify(), action) => {
  switch (action.type) {
    case 'VERIFY_UPDATE':
      return action.verify;
    case 'VERIFY_SET_ERROR':
      return state.set('status', 'error').set('error', action.error);
    case 'VERIFY_SET_CODE':
      if (!action.code) {
        return state.set('status', 'clean').set('error', undefined).set('code', action.code);
      }

      return state.set('status', 'dirty').set('error', undefined).set('code', action.code);
    case 'VERIFY_SEND':
      return state.set('status', 'saving').set('error', undefined);
    case 'VERIFY_RESET':
      return new Verify();
    default:
      return state;
  }
};
