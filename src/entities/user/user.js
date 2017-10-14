import { Record } from 'immutable';

export default class User extends Record({
  id: undefined,
  locationId: undefined,
  status: 'clean',
}, 'User') {
  equals(other) {
    if (!(other instanceof User)) {
      return super.equals(other);
    }

    if (typeof other.id === 'undefined' || typeof this.id === 'undefined') {
      return super.equals(other);
    }

    return other.id === this.id;
  }
}
