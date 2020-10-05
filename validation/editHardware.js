import Validator from "validator"
import isEmpty from "is-empty"

module.exports = function validateEditHardwareInput(data) {
  let errors = {}

  data.serialNumber = !isEmpty(data.serialNumber) ? data.serialNumber : ""

  if (Validator.isEmpty(data.serialNumber)) {
    errors.serialNumber = "Serial number is required"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
