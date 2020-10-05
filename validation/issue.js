import Validator from "validator"
import isEmpty from "is-empty"

module.exports = function validateSingleInput(data) {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ""

  if (Validator.isEmpty(data.name)) {
    errors.name = "This field is required"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
