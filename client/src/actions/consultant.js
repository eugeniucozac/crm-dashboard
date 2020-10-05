import { consultants } from "@actions/actionTypes"
import * as consultantService from "@services/consultant"

export const getConsultants = () => async dispatch => {
  dispatch({ type: consultants.GET_CONSULTANTS_REQUEST })
  try {
    const data = await consultantService.getConsultants()
    dispatch({
      type: consultants.GET_CONSULTANTS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: consultants.GET_CONSULTANTS_FAILURE,
      payload: error,
    })
  }
}

export const getRoles = () => async dispatch => {
  try {
    const data = await consultantService.getRoles()
    dispatch({
      type: consultants.GET_ROLES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: consultants.GET_ROLES_FAILURE,
      payload: error,
    })
  }
}

export const addConsultant = body => async dispatch => {
  try {
    const data = await consultantService.addConsultant(body)
    dispatch({
      type: consultants.ADD_CONSULTANT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: consultants.ADD_CONSULTANT_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const removeConsultant = id => async dispatch => {
  try {
    await consultantService.removeConsultant(id)
    dispatch({
      type: consultants.REMOVE_CONSULTANT_SUCCESS,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: consultants.REMOVE_CONSULTANT_FAILURE,
      payload: error,
    })
  }
}

export const updateConsultant = (id, body) => async dispatch => {
  try {
    await consultantService.updateConsultant(id, body)
    dispatch({
      type: consultants.UPDATE_CONSULTANT_SUCCESS,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: consultants.UPDATE_CONSULTANT_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const resetErrors = () => dispatch => {
  dispatch({
    type: consultants.RESET_ERRORS_SUCCESS,
  })
}
