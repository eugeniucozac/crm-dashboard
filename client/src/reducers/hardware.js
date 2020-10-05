import { hardwares } from "@actions/actionTypes"
import { objectInArray } from "@utils/hooks"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const hardwareReducer = (state = initialState, action) => {
  switch (action.type) {
    case hardwares.GET_HARDWARES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case hardwares.GET_HARDWARES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case hardwares.ADD_HARDWARE_FAILURE:
    case hardwares.GET_HARDWARES_FAILURE:
    case hardwares.REMOVE_HARDWARE_FAILURE:
    case hardwares.UPDATE_HARDWARE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case hardwares.ADD_HARDWARE_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case hardwares.UPDATE_HARDWARE_SUCCESS:
      const index = state.data.findIndex(hardware => hardware.id === action.payload.id)
      return {
        ...state,
        error: false,
        data: objectInArray(state.data, index, action.payload.data),
      }
    case hardwares.REMOVE_HARDWARE_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(hardware => hardware.id !== action.payload),
      }
    default:
      return state
  }
}
