import { quotes } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const quoteSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case quotes.GET_SECTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case quotes.GET_SECTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case quotes.ADD_SECTION_FAILURE:
    case quotes.GET_SECTIONS_FAILURE:
    case quotes.REMOVE_SECTION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case quotes.ADD_SECTION_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case quotes.REMOVE_SECTION_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(section => section.id !== action.payload),
      }
    default:
      return state
  }
}
