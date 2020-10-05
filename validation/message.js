import Validator from "validator"
import isEmpty from "is-empty"

module.exports = function validateMessageInput(data) {
  let errors = {}

  data.title = !isEmpty(data.title) ? data.title : ""
  data.message = !isEmpty(data.message) ? data.message : ""

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is required"
  }
  if (Validator.isEmpty(data.message)) {
    errors.message = "Message is required"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
