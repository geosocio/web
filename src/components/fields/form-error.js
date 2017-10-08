import React from 'react';
import PropTypes from 'prop-types';
import ErrorEntity from 'app/entities/error';

const FormError = ({ error }) => {
  let code;

  if (!error || !error.message) {
    return null;
  }

  if (error.code) {
    code = (
      <strong>{error.code}</strong>
    );
  }

  return (
    <div className="alert alert-danger" role="alert">
      {code} {error.message}
    </div>
  );
};

FormError.propTypes = {
  error: PropTypes.instanceOf(ErrorEntity),
};

FormError.defaultProps = {
  error: undefined,
};

export default FormError;
