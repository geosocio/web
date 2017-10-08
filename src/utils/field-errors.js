import EntityError from 'app/entities/error';
import { Set } from 'immutable';

export default (path, error) => {
  if (!error) {
    return new Set();
  }

  if (error instanceof EntityError === false) {
    throw new Error('Error must be an instance of EntityError');
  }

  if (error.constraintViolations.size === 0) {
    return new Set();
  }

  return error.constraintViolations.filter(violation => violation.propertyPath === path);
};
