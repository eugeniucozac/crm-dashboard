import jwtDecode from "jwt-decode"
import { authorization } from "@actions/actionTypes"
import * as authorizationService from "@services/authorization"

export const login = consultant => async dispatch => {
  try {
    const data = await authorizationService.login(consultant)
    await localStorage.setItem("authToken", data.token)
    dispatch({
      type: authorization.CONSULTANT_LOGIN_SUCCESS,
      payload: jwtDecode(data.token),
    })
  } catch (error) {
    dispatch({
      type: authorization.CONSULTANT_LOGIN_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const resetErrors = () => dispatch => {
  dispatch({
    type: authorization.RESET_ERRORS_SUCCESS,
  })
}

export const logout = () => dispatch => {
  localStorage.removeItem("authToken")
  dispatch({
    type: authorization.CONSULTANT_LOGOUT_SUCCESS,
  })
}

export const restoreSession = () => dispatch => {
  const token = localStorage.getItem("authToken")
  if (token) {
    dispatch({
      type: authorization.CONSULTANT_LOGIN_SUCCESS,
      payload: jwtDecode(token),
    })
  }
}

export const changePassword = (id, body) => async dispatch => {
  try {
    const data = await authorizationService.changePassword(id, body)
    dispatch({
      type: authorization.CHANGE_PASSWORD_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: authorization.CHANGE_PASSWORD_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const forgotPassword = body => async dispatch => {
  try {
    const data = await authorizationService.forgotPassword(body)
    dispatch({
      type: authorization.SENT_PASSWORD_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: authorization.SENT_PASSWORD_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const checkToken = token => async dispatch => {
  try {
    const data = await authorizationService.checkToken(token)
    dispatch({
      type: authorization.RESET_TOKEN_SUCCESS,
      payload: data.id,
    })
  } catch (error) {
    dispatch({
      type: authorization.RESET_TOKEN_FAILURE,
      payload: error,
    })
  }
}

export const resetPassword = (id, body) => async dispatch => {
  try {
    const data = await authorizationService.resetPassword(id, body)
    dispatch({
      type: authorization.RESET_PASSWORD_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: authorization.RESET_PASSWORD_FAILURE,
      payload: error,
    })
    throw error
  }
}
