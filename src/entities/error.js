import { Record, Set } from 'immutable';

export default class Error extends Record({
  message: undefined,
  code: undefined,
  constraintViolations: new Set(),
}, 'Error') {
  constructor(data = {}) {
    const props = {
      ...data,
      constraintViolations: new Set(data.constraintViolations || []),
    };

    super(props);
  }
}
