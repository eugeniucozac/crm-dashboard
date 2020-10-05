import { projects } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case projects.GET_PROJECTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case projects.GET_PROJECTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.map(item => ({
          ...item,
          id: Array(Math.max(5 - String(item.id).length + 1, 0)).join(0) + item.id,
          customId: item.id,
        })),
      }
    case projects.ADD_PROJECT_FAILURE:
    case projects.GET_PROJECTS_FAILURE:
    case projects.REMOVE_PROJECT_FAILURE:
    case projects.UPDATE_PROJECT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case projects.ADD_PROJECT_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case projects.REMOVE_PROJECT_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(project => project.id !== action.payload),
      }
    default:
      return state
  }
}
