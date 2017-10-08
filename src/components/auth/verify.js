import React from 'react';
import PropTypes from 'prop-types';
import Submit from 'app/components/fields/submit';
import FormError from 'app/components/fields/form-error';
import FieldError from 'app/components/fields/field-error';
import VerifyEntity from 'app/entities/user/verify';
import fieldClassName from 'app/utils/field-class-name';

export default class Verify extends React.Component {
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
          <label htmlFor="login-value">Code</label>
          <small className="text-muted">
            &nbsp;The code from the email you were just sent.
          </small>
          <input
            id="verify-code"
            type="number"
            className={`form-control-lg ${fieldClassName('code', this.props.verify.error)}`}
            name="code"
            disabled={this.props.verify.status === 'saving'}
            value={this.props.verify.code || ''}
            onChange={this.handleChange}
          />
          <FieldError path="code" error={this.props.verify.error} />
        </div>
        <FormError error={this.props.verify.error} />
        <Submit
          className="btn-primary btn-block btn-lg"
          status={this.props.verify.status}
          value="Continue"
        />
      </form>
    );
  }
}

Verify.propTypes = {
  set: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired,
  verify: PropTypes.instanceOf(VerifyEntity).isRequired,
};
