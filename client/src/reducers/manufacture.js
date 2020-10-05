import { manufactures } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const manufactureReducer = (state = initialState, action) => {
  switch (action.type) {
    case manufactures.GET_MANUFACTURES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case manufactures.GET_MANUFACTURES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case manufactures.ADD_MANUFACTURE_FAILURE:
    case manufactures.GET_MANUFACTURES_FAILURE:
    case manufactures.REMOVE_MANUFACTURE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case manufactures.ADD_MANUFACTURE_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case manufactures.REMOVE_MANUFACTURE_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(manufacture => manufacture.id !== action.payload),
      }
    default:
      return state
  }
}
