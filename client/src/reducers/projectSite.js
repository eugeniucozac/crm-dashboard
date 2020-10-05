import { projects } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const projectSiteReducer = (state = initialState, action) => {
  switch (action.type) {
    case projects.GET_SITES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case projects.GET_SITES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case projects.ADD_SITE_FAILURE:
    case projects.GET_SITES_FAILURE:
    case projects.REMOVE_SITE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case projects.ADD_SITE_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case projects.REMOVE_SITE_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(site => site.id !== action.payload),
      }
    default:
      return state
  }
}
