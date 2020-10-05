import { invoices } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const invoiceServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case invoices.GET_SERVICES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case invoices.GET_SERVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case invoices.ADD_SERVICE_FAILURE:
    case invoices.GET_SERVICES_FAILURE:
    case invoices.REMOVE_SERVICE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case invoices.ADD_SERVICE_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case invoices.REMOVE_SERVICE_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(service => service.id !== action.payload),
      }
    default:
      return state
  }
}
