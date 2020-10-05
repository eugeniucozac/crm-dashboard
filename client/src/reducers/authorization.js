import { authorization } from "@actions/actionTypes"

const initialState = {
  data: {},
  loading: false,
  error: false,
  success: false,
  isAuthorized: false,
  passwordRecovery: false,
}

export const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case authorization.RESET_TOKEN_SUCCESS:
    case authorization.CONSULTANT_LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isAuthorized: true,
      }
    case authorization.CONSULTANT_LOGIN_FAILURE:
    case authorization.CHANGE_PASSWORD_FAILURE:
    case authorization.SENT_PASSWORD_FAILURE:
    case authorization.RESET_PASSWORD_FAILURE:
    case authorization.RESET_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case authorization.CONSULTANT_LOGOUT_SUCCESS:
      return initialState
    case authorization.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        error: false,
        success: true,
      }
    case authorization.SENT_PASSWORD_SUCCESS:
      return {
        ...state,
        error: false,
        passwordRecovery: true,
      }
    case authorization.RESET_ERRORS_SUCCESS:
      return {
        ...state,
        error: false,
      }
    default:
      return state
  }
}
