import { createSelector } from 'reselect';

export default () => (createSelector(
  state => state.user.auth.id,
  state => state.user.list,
  (id, users) => {
    if (!id) {
      return undefined;
    }

    if (!users.size) {
      return undefined;
    }

    return users.find(user => user.id === id);
  },
));
