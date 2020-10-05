import Validator from "validator"
import isEmpty from "is-empty"

module.exports = function validateForgotInput(data) {
  let errors = {}

  data.email = !isEmpty(data.email) ? data.email : ""

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email address field is required"
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email address is invalid"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
