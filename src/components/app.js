import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginContainer from './auth/login.container';


export default () => (
  <div className="container h-100">
    <Switch>
      <Route exact path="/" component={LoginContainer} />
      <Route exact path="/login" component={LoginContainer} />
    </Switch>
  </div>
);
