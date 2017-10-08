export function setLogin(value) {
  return {
    type: 'LOGIN_SET_VALUE',
    value,
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
