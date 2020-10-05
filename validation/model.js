import Validator from "validator"
import isEmpty from "is-empty"

module.exports = function validateModelInput(data) {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ""
  data.manufactureId = !isEmpty(data.manufactureId) ? data.manufactureId : ""

  if (Validator.isEmpty(data.name)) {
    errors.name = "This field is required"
  }
  if (Validator.isEmpty(data.manufactureId)) {
    errors.manufactureId = "Choose manufacture name"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
