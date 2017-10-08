import React from 'react';
import PropTypes from 'prop-types';
import Submit from 'app/components/fields/submit';
import FormError from 'app/components/fields/form-error';
import FieldError from 'app/components/fields/field-error';
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
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-value">Email</label>
          <input
            id="login-value"
            type="email"
            className={`form-control-lg ${fieldClassName('value', this.props.login.error)}`}
            name="value"
            disabled={this.props.login.status === 'saving'}
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
    );
  }
}

Login.propTypes = {
  set: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired,
  login: PropTypes.instanceOf(LoginEntity).isRequired,
};
