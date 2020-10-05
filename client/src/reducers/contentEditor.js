import { quotes } from "@actions/actionTypes"

const initialState = {
  data: "",
}

export const contentEditorReducer = (state = initialState, action) => {
  switch (action.type) {
    case quotes.GET_CONTENT_EDITOR:
      return state
    case quotes.ADD_CONTENT_EDITOR:
      return {
        ...state,
        data: action.payload,
      }
    case quotes.RESET_CONTENT_EDITOR:
      return {
        ...state,
        data: "",
      }
    default:
      return state
  }
}
