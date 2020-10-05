import { issues } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const issueMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case issues.GET_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case issues.GET_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case issues.GET_MESSAGES_FAILURE:
    case issues.ADD_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case issues.ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
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
