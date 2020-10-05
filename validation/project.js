import Validator from "validator"
import isEmpty from "is-empty"

module.exports = function validateProjectInput(data) {
  let errors = {}

  data.siteAddressName = !isEmpty(data.siteAddressName) ? data.siteAddressName : ""
  data.sitePhoneNumber = !isEmpty(data.sitePhoneNumber) ? data.sitePhoneNumber : ""
  data.description = !isEmpty(data.description) ? data.description : ""

  if (Validator.isEmpty(data.siteAddressName)) {
    errors.siteAddressName = "Site Address field is required"
  }
  if (Validator.isEmpty(data.sitePhoneNumber)) {
    errors.sitePhoneNumber = "Site Phone number is required"
  } else if (!Validator.isNumeric(data.sitePhoneNumber)) {
    errors.sitePhoneNumber = "Site Phone number is invalid"
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required"
  }
  if (data.consultants.length === 0) {
    errors.consultants = "You should have atleast one consultant"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
