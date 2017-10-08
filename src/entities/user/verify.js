import { Record } from 'immutable';

export default class Verify extends Record({
  token: undefined,
  code: undefined,
  error: undefined,
  status: 'clean',
}, 'Verify') {}
