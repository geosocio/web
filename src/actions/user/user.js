export function addUser(user) {
  return {
    type: 'USER_ADD',
    user,
  };
}

export function addUsers(users) {
  return {
    type: 'USER_ADD_MULTIPLE',
    users,
  };
}

export function updateUser(user) {
  return {
    type: 'USER_UPDATE',
    user,
  };
}

export function removeUser(user) {
  return {
    type: 'USER_REMOVE',
    user,
  };
}
