import fieldErrors from './field-errors';

export default (path, error) => {
  const errors = fieldErrors(path, error);

  if (errors.size === 0) {
    return true;
  }

  return false;
};
