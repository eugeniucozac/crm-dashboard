import Validator from "validator"
import isEmpty from "is-empty"

module.exports = function validateHardwareInput(data) {
  let errors = {}

  data.typeId = !isEmpty(data.typeId) ? data.typeId : ""
  data.manufactureId = !isEmpty(data.manufactureId) ? data.manufactureId : ""
  data.modelId = !isEmpty(data.modelId) ? data.modelId : ""
  data.serialNumber = !isEmpty(data.serialNumber) ? data.serialNumber : ""

  if (Validator.isEmpty(data.typeId)) {
    errors.typeId = "Choose type name"
  }
  if (Validator.isEmpty(data.manufactureId)) {
    errors.manufactureId = "Choose manufacture name"
  }
  if (Validator.isEmpty(data.modelId)) {
    errors.modelId = "Choose model name"
  }
  if (Validator.isEmpty(data.serialNumber)) {
    errors.serialNumber = "Serial number is required"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
