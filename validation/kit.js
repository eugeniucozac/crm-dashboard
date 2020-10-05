import Validator from "validator"
import isEmpty from "is-empty"

module.exports = function validateKitInput(data) {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ""
  data.calibrationNumber = !isEmpty(data.calibrationNumber) ? data.calibrationNumber : ""
  data.calibrationCurDate = !isEmpty(data.calibrationCurDate) ? data.calibrationCurDate : ""
  data.calibrationDueDate = !isEmpty(data.calibrationDueDate) ? data.calibrationDueDate : ""

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required"
  }
  if (Validator.isEmpty(data.calibrationNumber)) {
    errors.calibrationNumber = "Calibration number is required"
  }
  if (Validator.isEmpty(data.calibrationCurDate)) {
    errors.calibrationCurDate = "Current calibation date is required"
  }
  if (Validator.isEmpty(data.calibrationDueDate)) {
    errors.calibrationDueDate = "Choose next calibration"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
