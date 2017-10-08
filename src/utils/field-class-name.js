import isValid from './valid-field';

export default (path, error) => (
  isValid(path, error) ? 'form-control' : 'form-control is-invalid'
);
