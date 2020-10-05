import { quotes } from "@actions/actionTypes"

const initialState = {
  data: [],
}

export const generatedQuoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case quotes.GET_GENERATED_QUOTE:
      return state
    case quotes.ADD_GENERATED_QUOTE:
      return {
        ...state,
        data: action.payload,
      }
    case quotes.RESET_GENERATED_QUOTE:
      return {
        ...state,
        data: [],
      }
    default:
      return state
  }
}
