import { Record } from 'immutable';

export default class Login extends Record({
  value: undefined,
  error: undefined,
  status: 'clean',
}, 'Login') {}
