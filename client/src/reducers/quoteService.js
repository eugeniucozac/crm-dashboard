import { quotes } from "@actions/actionTypes"
import { objectInArray } from "@utils/hooks"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const quoteServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case quotes.GET_SERVICEPRICES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case quotes.GET_SERVICEPRICES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case quotes.ADD_SERVICEPRICE_FAILURE:
    case quotes.GET_SERVICEPRICES_FAILURE:
    case quotes.REMOVE_SERVICEPRICE_FAILURE:
    case quotes.UPDATE_SERVICEPRICE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case quotes.ADD_SERVICEPRICE_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case quotes.UPDATE_SERVICEPRICE_SUCCESS:
      const index = state.data.findIndex(item => item.id === action.payload.id)
      return {
        ...state,
        error: false,
        data: objectInArray(state.data, index, action.payload.data),
      }
    case quotes.REMOVE_SERVICEPRICE_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(service => service.id !== action.payload),
      }
    default:
      return state
  }
}
