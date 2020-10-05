import { quotes } from "@actions/actionTypes"

const initialState = {
  data: {},
}

export const quotePricesReducer = (state = initialState, action) => {
  switch (action.type) {
    case quotes.GET_QUOTE_PRICES:
      return state
    case quotes.ADD_QUOTE_PRICES:
      return {
        ...state,
        data: action.payload,
      }
    case quotes.RESET_QUOTE_PRICES:
      return {
        ...state,
        data: [],
      }
    default:
      return state
  }
}
