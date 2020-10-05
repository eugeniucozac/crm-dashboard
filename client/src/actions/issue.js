import { issues } from "@actions/actionTypes"
import * as issueService from "@services/issue"

export const getIssues = () => async dispatch => {
  dispatch({ type: issues.GET_ISSUES_REQUEST })
  try {
    const data = await issueService.getIssues()
    dispatch({
      type: issues.GET_ISSUES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: issues.GET_ISSUES_FAILURE,
      payload: error,
    })
  }
}

export const addIssue = body => async dispatch => {
  try {
    const data = await issueService.addIssue(body)
    dispatch({
      type: issues.ADD_ISSUE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: issues.ADD_ISSUE_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const changeIssueStatus = (id, body) => async dispatch => {
  try {
    const data = await issueService.changeIssueStatus(id, body)
    dispatch({
      type: issues.CHANGE_STATUS_SUCCESS,
      payload: { data, id },
    })
  } catch (error) {
    dispatch({
      type: issues.CHANGE_STATUS_FAILURE,
      payload: error,
    })
  }
}

export const getIssueMessages = id => async dispatch => {
  dispatch({ type: issues.GET_MESSAGES_REQUEST })
  try {
    const data = await issueService.getIssueMessages(id)
    dispatch({
      type: issues.GET_MESSAGES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: issues.GET_MESSAGES_FAILURE,
      payload: error,
    })
  }
}

export const addIssueMessage = (id, body) => async dispatch => {
  try {
    const data = await issueService.addIssueMessage(id, body)
    dispatch({
      type: issues.ADD_MESSAGE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: issues.ADD_MESSAGE_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const resetIssueErrors = () => dispatch => {
  dispatch({
    type: issues.RESET_ERRORS_SUCCESS,
    payload: {},
  })
}
