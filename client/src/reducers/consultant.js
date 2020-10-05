import { consultants } from "@actions/actionTypes"
import { objectInArray } from "@utils/hooks"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const consultantReducer = (state = initialState, action) => {
  switch (action.type) {
    case consultants.GET_CONSULTANTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case consultants.GET_CONSULTANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case consultants.GET_CONSULTANTS_FAILURE:
    case consultants.ADD_CONSULTANT_FAILURE:
    case consultants.UPDATE_CONSULTANT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case consultants.ADD_CONSULTANT_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case consultants.UPDATE_CONSULTANT_SUCCESS:
      const index = state.data.findIndex(item => item.id === action.payload.id)
      return {
        ...state,
        error: false,
        data: objectInArray(state.data, index, action.payload.data),
      }

    case consultants.REMOVE_CONSULTANT_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(consultant => consultant.id !== action.payload),
      }
    case consultants.RESET_ERRORS_SUCCESS:
      return {
        ...state,
        error: false,
      }
    default:
      return state
  }
}
