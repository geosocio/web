import React from 'react';
import PropTypes from 'prop-types';
import { Set } from 'immutable';

const Submit = ({ status, value, className }) => {
  let classes = className ? new Set(className.split(' ')) : new Set();
  let disabled = false;

  classes = classes.add('btn');

  switch (status) {
    case 'error':
      classes = classes.add('btn-danger');
      break;
    case 'captcha':
      classes = classes.add('btn-warning');
      break;
    case 'saving':
      disabled = true;
      break;
    case 'pending':
      disabled = true;
      break;
    case 'clean':
      disabled = true;
      break;
    default:
      break;
  }

  return (
    <input type="submit" className={classes.join(' ')} disabled={disabled} value={value} />
  );
};

Submit.propTypes = {
  value: PropTypes.string.isRequired,
  status: PropTypes.string,
  className: PropTypes.string,
};

Submit.defaultProps = {
  status: 'clean',
  className: '',
};

export default Submit;
