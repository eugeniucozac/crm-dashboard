import { addressBooks } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const contactUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case addressBooks.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case addressBooks.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case addressBooks.GET_USERS_FAILURE:
    case addressBooks.ADD_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case addressBooks.ADD_USER_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case addressBooks.REMOVE_USER_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(user => user.id !== action.payload),
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
