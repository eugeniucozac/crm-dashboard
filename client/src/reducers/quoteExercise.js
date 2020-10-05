import { quotes } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const quoteExerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case quotes.GET_EXERCISES_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case quotes.GET_EXERCISES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case quotes.ADD_EXERCISE_FAILURE:
    case quotes.GET_EXERCISES_FAILURE:
    case quotes.REMOVE_EXERCISE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case quotes.ADD_EXERCISE_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case quotes.REMOVE_EXERCISE_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(exercise => exercise.id !== action.payload),
      }
    default:
      return state
  }
}
