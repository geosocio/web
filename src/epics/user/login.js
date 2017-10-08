import 'rxjs/add/operator/map';
import * as LoginActions from 'app/actions/user/login';

export default action$ => (
  action$.ofType('LOGIN_SEND')
    .map(() => LoginActions.resetLogin())
);
