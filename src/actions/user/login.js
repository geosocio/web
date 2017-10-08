export function setLogin(value) {
  return {
    type: 'LOGIN_SET_VALUE',
    value,
  };
}

export function setLoginError(error) {
  return {
    type: 'LOGIN_SET_ERROR',
    error,
  };
}

export function resetLogin() {
  return {
    type: 'LOGIN_RESET',
  };
}

export function sendLogin() {
  return {
    type: 'LOGIN_SEND',
  };
}
