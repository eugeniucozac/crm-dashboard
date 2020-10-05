import Validator from "validator"
import isEmpty from "is-empty"

module.exports = function validateServiceInput(data) {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ""
  data.price = !isEmpty(data.price) ? data.price : ""
  data.content = !isEmpty(data.content) ? data.content : ""

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required"
  }
  if (Validator.isEmpty(data.price)) {
    errors.price = "Price field is required"
  } else if (!Validator.isNumeric(data.price)) {
    errors.price = "Price is invalid"
  }
  if (Validator.isEmpty(data.content)) {
    errors.content = "Content field is required"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
