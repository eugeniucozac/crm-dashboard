import { addressBooks } from "@actions/actionTypes"
import { objectInArray } from "@utils/hooks"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const addressBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case addressBooks.GET_ADDRESS_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case addressBooks.GET_ADDRESS_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case addressBooks.GET_ADDRESS_BOOKS_FAILURE:
    case addressBooks.ADD_ADDRESS_BOOK_FAILURE:
    case addressBooks.REMOVE_ADDRESS_BOOK_FAILURE:
    case addressBooks.UPDATE_ADDRESS_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case addressBooks.ADD_ADDRESS_BOOK_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case addressBooks.UPDATE_ADDRESS_BOOK_SUCCESS:
      const index = state.data.findIndex(item => item.id === action.payload.id)
      return {
        ...state,
        error: false,
        data: objectInArray(state.data, index, action.payload.data),
      }
    case addressBooks.REMOVE_ADDRESS_BOOK_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(addressBook => addressBook.id !== action.payload),
      }
    case addressBooks.RESET_ERRORS_SUCCESS:
      return {
        ...state,
        error: false,
      }
    default:
      return state
  }
}
