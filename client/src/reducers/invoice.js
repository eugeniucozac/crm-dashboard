import { invoices } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case invoices.GET_INVOICES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case invoices.GET_INVOICES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case invoices.ADD_INVOICE_FAILURE:
    case invoices.GET_INVOICES_FAILURE:
    case invoices.REMOVE_INVOICE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case invoices.ADD_INVOICE_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case invoices.REMOVE_INVOICE_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(invoice => invoice.id !== action.payload),
      }
    default:
      return state
  }
}
