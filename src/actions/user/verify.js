export function updateVerify(verify) {
  return {
    type: 'VERIFY_UPDATE',
    verify,
  };
}

export function setVerifyCode(code) {
  return {
    type: 'VERIFY_SET_CODE',
    code,
  };
}

export function setLoginError(error) {
  return {
    type: 'VERIFY_SET_ERROR',
    error,
  };
}

export function resetVerify() {
  return {
    type: 'VERIFY_RESET',
  };
}

export function sendVerify() {
  return {
    type: 'VERIFY_SEND',
  };
}
