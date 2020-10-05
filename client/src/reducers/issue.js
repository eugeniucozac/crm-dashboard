import { issues } from "@actions/actionTypes"
import { objectInArray } from "@utils/hooks"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case issues.GET_ISSUES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case issues.GET_ISSUES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case issues.ADD_ISSUE_FAILURE:
    case issues.GET_ISSUES_FAILURE:
    case issues.REMOVE_ISSUE_FAILURE:
    case issues.CHANGE_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case issues.ADD_ISSUE_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case issues.CHANGE_STATUS_SUCCESS:
      const index = state.data.findIndex(issue => issue.id === action.payload.id)
      return {
        ...state,
        error: false,
        data: objectInArray(state.data, index, action.payload.data),
      }
    case issues.REMOVE_ISSUE_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(issue => issue.id !== action.payload),
      }
    case issues.RESET_ERRORS_SUCCESS:
      return {
        ...state,
        error: false,
      }
    default:
      return state
  }
}
