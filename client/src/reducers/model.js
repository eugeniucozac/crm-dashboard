import { models } from "@actions/actionTypes"

const initialState = {
  data: [],
  loading: false,
  error: false,
}

export const modelReducer = (state = initialState, action) => {
  switch (action.type) {
    case models.GET_MODELS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case models.GET_MODELS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }
    case models.ADD_MODEL_FAILURE:
    case models.GET_MODELS_FAILURE:
    case models.REMOVE_MODEL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case models.ADD_MODEL_SUCCESS:
      return {
        ...state,
        error: false,
        data: [...state.data, action.payload],
      }
    case models.REMOVE_MODEL_SUCCESS:
      return {
        ...state,
        error: false,
        data: state.data.filter(model => model.id !== action.payload),
      }
    default:
      return state
  }
}
