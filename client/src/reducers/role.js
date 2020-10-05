import { consultants } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case consultants.GET_ROLES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case consultants.GET_ROLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
