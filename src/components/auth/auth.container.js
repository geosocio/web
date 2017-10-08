import { connect } from 'react-redux';
import Auth from './auth';

export default connect(state => ({
  verify: state.user.verify,
  token: state.user.token,
}))(Auth);
