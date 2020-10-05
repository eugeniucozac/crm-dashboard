import { quotes } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case quotes.GET_QUOTES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case quotes.GET_QUOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case quotes.ADD_QUOTE_FAILURE:
    case quotes.GET_QUOTES_FAILURE:
    case quotes.REMOVE_QUOTE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case quotes.ADD_QUOTE_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case quotes.REMOVE_QUOTE_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(quote => quote.id !== action.payload),
      }
    default:
      return state
  }
}
