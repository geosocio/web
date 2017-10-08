import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AuthContainer from './auth/auth.container';

export default () => (
  <div className="container h-100">
    <Switch>
      <Route exact path="/" component={AuthContainer} />
      <Route path="/login" component={AuthContainer} />
    </Switch>
  </div>
);
