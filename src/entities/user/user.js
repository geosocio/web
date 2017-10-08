import { Record } from 'immutable';

export default class User extends Record({
  id: undefined,
  code: undefined,
  error: undefined,
  status: 'clean',
}, 'User') {}
