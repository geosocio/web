import { Observable } from 'rxjs';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';
import Verify from 'app/entities/user/verify';
import EntityError from 'app/entities/error';
import * as LoginActions from 'app/actions/user/login';
import * as VerifyActions from 'app/actions/user/verify';

export default (action$, store) => (
  action$.ofType('LOGIN_SEND')
    .flatMap(() => {
      let { login } = store.getState().user.auth;

      // Prepare takedown for saving.
      login = login.set('status', undefined).set('error', undefined);

      return Observable.ajax({
        url: '/api/login',
        method: 'POST',
        body: JSON.stringify(login.toJS()),
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json',
        },
      }).flatMap(ajaxResponse => (
        Observable.concat(
          Observable.of(VerifyActions.updateVerify(new Verify(ajaxResponse.response))),
          Observable.of(LoginActions.resetLogin()),
        )
      )).catch(ajaxError => (
        Observable.of(LoginActions.setLoginError(new EntityError(ajaxError.xhr.response)))
      ));
    })
);
