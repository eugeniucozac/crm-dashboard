import { projects } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const projectHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case projects.GET_PROJECT_HISTORY_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case projects.GET_PROJECT_HISTORY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case projects.GET_PROJECT_HISTORY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
