import { types } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const typeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TYPES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.GET_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case types.ADD_TYPE_FAILURE:
    case types.GET_TYPES_FAILURE:
    case types.REMOVE_TYPE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case types.ADD_TYPE_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case types.REMOVE_TYPE_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(type => type.id !== action.payload),
      }
    default:
      return state
  }
}
