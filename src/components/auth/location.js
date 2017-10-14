import React from 'react';
import PropTypes from 'prop-types';
import Submit from 'app/components/fields/submit';
import FormError from 'app/components/fields/form-error';
import UserEntity from 'app/entities/user/user';

export default class Location extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.update(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.save();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="login-value">Location</label>
          <small className="text-muted">
            &nbsp;Where do you live?
          </small>
          <h1>@TODO Location Search From!</h1>
        </div>
        <FormError error={this.props.user.error} />
        <Submit
          className="btn-primary btn-block btn-lg"
          status={this.props.user.status}
          value="Continue"
        />
      </form>
    );
  }
}

Location.propTypes = {
  update: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  user: PropTypes.instanceOf(UserEntity).isRequired,
};
