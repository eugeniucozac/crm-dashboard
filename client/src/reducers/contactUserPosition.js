import { addressBooks } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const contactUserPositionReducer = (state = initialState, action) => {
  switch (action.type) {
    case addressBooks.GET_POSITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case addressBooks.GET_POSITIONS_FAILURE:
    case addressBooks.ADD_POSITION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case addressBooks.ADD_POSITION_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    default:
      return state
  }
}
