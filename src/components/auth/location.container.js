import { connect } from 'react-redux';
import * as UserActions from 'app/actions/user/user';
import Location from './location';

export default connect(
  undefined,
  dispatch => ({
    update: user => dispatch(UserActions.updateUser(user)),
    save: user => dispatch(UserActions.saveUser(user)),
  }),
)(Location);
