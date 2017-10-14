import { connect } from 'react-redux';
import makeGetAuthUser from 'app/selectors/user/auth';
import Auth from './auth';

export default connect(() => {
  const getAuthUser = makeGetAuthUser();
  return (state, props) => ({
    user: getAuthUser(state, props),
    verify: state.user.auth.verify,
    token: state.user.auth.token,
  });
})(Auth);
