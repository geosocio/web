import React from 'react';
import PropTypes from 'prop-types';
import Submit from 'app/components/fields/submit';
import FormError from 'app/components/fields/form-error';
import FieldError from 'app/components/fields/field-error';
import logo from 'images/geosocio-center.png';
import LoginEntity from 'app/entities/user/login';
import fieldClassName from 'app/utils/field-class-name';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.set(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.send();
  }

  render() {
    return (
      <div className="row align-items-center justify-content-center h-100">
        <div className="col col-md-5">
          <div className="row justify-content-center mb-3">
            <div className="col-6">
              <img src={logo} className="img-fluid mx-auto d-block" alt="GeoSoc.io" />
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="login-value">Email</label>
              <input
                id="login-value"
                type="email"
                className={`form-control-lg ${fieldClassName('value', this.props.login.error)}`}
                name="value"
                value={this.props.login.value || ''}
                onChange={this.handleChange}
              />
              <FieldError path="value" error={this.props.login.error} />
            </div>
            <FormError error={this.props.login.error} />
            <Submit
              className="btn-primary btn-block btn-lg"
              status={this.props.login.status}
              value="Continue"
            />
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  set: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired,
  login: PropTypes.instanceOf(LoginEntity).isRequired,
};
