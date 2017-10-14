import { connect } from 'react-redux';
import * as LoginActions from 'app/actions/user/login';
import Login from './login';

export default connect(
  state => ({
    login: state.user.auth.login,
  }),
  dispatch => ({
    set: value => dispatch(LoginActions.setLogin(value)),
    send: () => dispatch(LoginActions.sendLogin()),
  }),
)(Login);
