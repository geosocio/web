import React from 'react';
import PropTypes from 'prop-types';
import ErrorEntity from 'app/entities/error';
import fieldErrors from 'app/utils/field-errors';

const FieldError = ({
  path,
  error,
}) => {
  const errors = fieldErrors(path, error);

  if (errors.size === 0) {
    return null;
  }

  return errors.map(violation => (
    <div className="invalid-feedback" key={violation.code}>
      {violation.message}
    </div>
  )).toArray();
};

FieldError.propTypes = {
  path: PropTypes.string.isRequired,
  error: PropTypes.instanceOf(ErrorEntity),
};

FieldError.defaultProps = {
  error: undefined,
};

export default FieldError;
