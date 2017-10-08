export function setToken(token) {
  return {
    type: 'TOKEN_SET',
    token,
  };
}

export function removeToken() {
  return {
    type: 'TOKEN_REMOVE',
  };
}
