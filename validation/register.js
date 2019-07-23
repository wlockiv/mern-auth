const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
  let { name, email, password, password2 } = data;
  const errors = {};

  // convert empty fields to emptry string
  name = !isEmpty(name) ? name : '';
  email = !isEmpty(email) ? email : '';
  password = !isEmpty(password) ? password : '';
  password2 = !isEmpty(password2) ? password2 : '';

  // Name check
  if (Validator.isEmpty(name)) {
    errors.name = 'Name field is required';
  }

  // Email check
  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid';
  }

  // Password checks
  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required';
  }

  if (Validator.isEmpty(password2)) {
    errors.password2 = 'Confirm password field is required';
  }

  if (!Validator.isLength(password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters';
  }

  if (!Validator.equals(password, password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
