import Validator from "validator"
import isEmpty from "is-empty"

module.exports = function validateRegisterInput(data) {
  let errors = {}

  data.firstName = !isEmpty(data.firstName) ? data.firstName : ""
  data.lastName = !isEmpty(data.lastName) ? data.lastName : ""
  data.email = !isEmpty(data.email) ? data.email : ""
  data.telNo = !isEmpty(data.telNo) ? data.telNo : ""
  data.mobNo = !isEmpty(data.mobNo) ? data.mobNo : ""
  data.password = !isEmpty(data.password) ? data.password : ""
  data.password2 = !isEmpty(data.password2) ? data.password2 : ""

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First name field is required"
  }
  if (!Validator.isLength(data.firstName, { min: 3, max: 30 })) {
    errors.firstName = "First name must be at least 3 characters"
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name field is required"
  }
  if (!Validator.isLength(data.lastName, { min: 3, max: 30 })) {
    errors.lastName = "Last name must be at least 3 characters"
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required"
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid"
  }
  if (Validator.isEmpty(data.telNo)) {
    errors.telNo = "Phone number field is required"
  }
  if (Validator.isEmpty(data.telNo)) {
    errors.telNo = "Phone number field is required"
  } else if (!Validator.isNumeric(data.telNo)) {
    errors.telNo = "Phone number is invalid"
  }

  if (Validator.isEmpty(data.mobNo)) {
    errors.mobNo = "Mobile number field is required"
  } else if (!Validator.isNumeric(data.mobNo)) {
    errors.mobNo = "Mobile number is invalid"
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required"
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required"
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters"
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match"
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
