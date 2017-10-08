import { Observable } from 'rxjs';
import 'rxjs/add/observable/dom/ajax';
import 'rxjs/add/operator/map';
import { matchPath } from 'react-router';
import { push } from 'react-router-redux';
import EntityError from 'app/entities/error';
import Verify from 'app/entities/user/verify';
import * as TokenActions from 'app/actions/user/token';
import * as VerifyActions from 'app/actions/user/verify';

export function verifySend(action$, store) {
  return action$.ofType('VERIFY_SEND')
    .flatMap(() => {
      let { verify } = store.getState().user;

      // Prepare takedown for saving.
      verify = verify.set('status', undefined).set('error', undefined);

      return Observable.ajax({
        url: '/api/login/email',
        method: 'POST',
        body: JSON.stringify(verify.toJS()),
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json',
        },
      }).flatMap(ajaxResponse => (
        Observable.concat(
          Observable.of(push('/')),
          Observable.of(TokenActions.setToken(ajaxResponse.response.token)),
          Observable.of(VerifyActions.resetVerify()),
        )
      )).catch(ajaxError => (
        Observable.of(VerifyActions.setVerifyError(new EntityError(ajaxError.xhr.response)))
      ));
    });
}

export function verifyGetFromRoute(action$) {
  return action$.ofType('@@router/LOCATION_CHANGE')
    .flatMap(action =>
      Observable.of({
        ...action,
        match: matchPath(action.payload.pathname, {
          path: '/login/:token/:code',
          exact: true,
          strict: false,
        }),
      }))
    .filter(action => !!action.match)
    .flatMap(action =>
      Observable.concat(
        Observable.of(VerifyActions.updateVerify(new Verify(action.match.params))),
        Observable.of(VerifyActions.sendVerify()),
      ));
}
