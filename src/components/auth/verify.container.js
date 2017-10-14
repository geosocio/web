import { connect } from 'react-redux';
import * as VerifyActions from 'app/actions/user/verify';
import Verify from './verify';

export default connect(
  state => ({
    verify: state.user.auth.verify,
  }),
  dispatch => ({
    set: value => dispatch(VerifyActions.setVerifyCode(value)),
    send: () => dispatch(VerifyActions.sendVerify()),
  }),
)(Verify);
