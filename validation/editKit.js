import Validator from "validator"
import isEmpty from "is-empty"

module.exports = function validateEditKitInput(data) {
  let errors = {}

  data.calibrationNumber = !isEmpty(data.calibrationNumber) ? data.calibrationNumber : ""
  data.calibrationCurDate = !isEmpty(data.calibrationCurDate) ? data.calibrationCurDate : ""

  if (Validator.isEmpty(data.calibrationNumber)) {
    errors.calibrationNumber = "Calibration number is required"
  }
  if (Validator.isEmpty(data.calibrationCurDate)) {
    errors.calibrationCurDate = "Current calibation date is required"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
