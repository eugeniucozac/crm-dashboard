import { projects } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const projectCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case projects.GET_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case projects.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case projects.ADD_COMMENT_FAILURE:
    case projects.GET_COMMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case projects.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    default:
      return state
  }
}
