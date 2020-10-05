import Validator from "validator"
import isEmpty from "is-empty"

module.exports = function validateClientInput(data) {
  let errors = {}

  data.companyName = !isEmpty(data.companyName) ? data.companyName : ""
  data.addressName = !isEmpty(data.addressName) ? data.addressName : ""

  if (Validator.isEmpty(data.companyName)) {
    errors.companyName = "Company name is required"
  }
  if (Validator.isEmpty(data.addressName)) {
    errors.addressName = "Address name is required"
  }

  if (data.users.length) {
    data.users.forEach((user, item) => {
      user.firstName = !isEmpty(user.firstName) ? user.firstName : ""
      user.lastName = !isEmpty(user.lastName) ? user.lastName : ""
      user.email1 = !isEmpty(user.email1) ? user.email1 : ""
      user.phoneNumber1 = !isEmpty(user.phoneNumber1) ? user.phoneNumber1 : ""
      user.roleId = !isEmpty(user.roleId) ? user.roleId : ""

      if (Validator.isEmpty(user.firstName)) {
        errors[`firstName${item}`] = "First name is required"
      }
      if (Validator.isEmpty(user.lastName)) {
        errors[`lastName${item}`] = "Last name is required"
      }
      if (Validator.isEmpty(user.email1)) {
        errors[`email${item}`] = "Email is required"
      } else if (!Validator.isEmail(user.email1)) {
        errors[`email${item}`] = "Email is invalid"
      }
      if (Validator.isEmpty(user.phoneNumber1)) {
        errors[`phoneNumber${item}`] = "Phone number is required"
      } else if (!Validator.isNumeric(user.phoneNumber1)) {
        errors[`phoneNumber${item}`] = "Phone number is invalid"
      }
    })
  }

  return {
    errors,
    isValid: isEmpty(errors),
  }
}
