import { kits } from "@actions/actionTypes"
import { objectInArray } from "@utils/hooks"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const kitReducer = (state = initialState, action) => {
  switch (action.type) {
    case kits.GET_KITS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case kits.GET_KITS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case kits.ADD_KIT_FAILURE:
    case kits.GET_KITS_FAILURE:
    case kits.REMOVE_KIT_FAILURE:
    case kits.UPDATE_KIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case kits.ADD_KIT_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case kits.UPDATE_KIT_SUCCESS:
      const index = state.data.findIndex(item => item.id === action.payload.id)
      return {
        ...state,
        error: false,
        data: objectInArray(state.data, index, action.payload.data),
      }
    case kits.REMOVE_KIT_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(kit => kit.id !== action.payload),
      }
    default:
      return state
  }
}
