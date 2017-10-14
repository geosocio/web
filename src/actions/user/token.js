export function setToken(token) {
  return {
    type: 'TOKEN_SET',
    token,
  };
}

export function addToken(token) {
  return {
    type: 'TOKEN_ADD',
    token,
  };
}

export function removeToken() {
  return {
    type: 'TOKEN_REMOVE',
  };
}
