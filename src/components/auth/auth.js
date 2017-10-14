import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Verify from 'app/entities/user/verify';
import User from 'app/entities/user/user';
import logo from 'images/geosocio-center.png';
import LocationContainer from './location.container';
import LoginContainer from './login.container';
import VerifyContainer from './verify.container';

const Auth = ({ user, verify }) => {
  let step;

  if (user) {
    if (!user.location) {
      step = <LocationContainer user={user} />;
    }
  } else if (verify.token) {
    step = <VerifyContainer />;
  } else {
    step = <LoginContainer />;
  }

  return (
    <div className="row align-items-center justify-content-center h-100">
      <div className="col col-md-5">
        <div className="row justify-content-center mb-3">
          <div className="col-6">
            <Link to="/">
              <img src={logo} className="img-fluid mx-auto d-block" alt="GeoSoc.io" />
            </Link>
          </div>
        </div>
        {step}
      </div>
    </div>
  );
};

Auth.propTypes = {
  user: PropTypes.instanceOf(User),
  verify: PropTypes.instanceOf(Verify).isRequired,
};

Auth.defaultProps = {
  user: undefined,
};

export default Auth;
