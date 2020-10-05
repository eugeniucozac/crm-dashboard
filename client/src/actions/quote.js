import { quotes } from "@actions/actionTypes"
import * as quoteService from "@services/quote"

export const getQuotes = id => async dispatch => {
  dispatch({ type: quotes.GET_QUOTES_REQUEST })
  try {
    const data = await quoteService.getQuotes(id)
    dispatch({
      type: quotes.GET_QUOTES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: quotes.GET_QUOTES_FAILURE,
      payload: error,
    })
  }
}

export const addQuote = (id, body) => async dispatch => {
  try {
    const data = await quoteService.addQuote(id, body)
    dispatch({
      type: quotes.ADD_QUOTE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: quotes.ADD_QUOTE_FAILURE,
      payload: error,
    })
  }
}

export const removeQuote = id => async dispatch => {
  try {
    await quoteService.removeQuote(id)
    dispatch({
      type: quotes.REMOVE_QUOTE_SUCCESS,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: quotes.REMOVE_QUOTE_FAILURE,
      payload: error,
    })
  }
}

export const getSections = quoteId => async dispatch => {
  dispatch({ type: quotes.GET_SECTIONS_REQUEST })
  try {
    const data = await quoteService.getSections(quoteId)
    dispatch({
      type: quotes.GET_SECTIONS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: quotes.GET_SECTIONS_FAILURE,
      payload: error,
    })
  }
}

export const addSection = (body, quoteId) => async dispatch => {
  try {
    const data = await quoteService.addQuote(body, quoteId)
    dispatch({
      type: quotes.ADD_SECTION_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: quotes.ADD_SECTION_FAILURE,
      payload: error,
    })
  }
}

export const removeSection = (quoteId, sectionId) => async dispatch => {
  try {
    await quoteService.removeSection(quoteId, sectionId)
    dispatch({
      type: quotes.REMOVE_SECTION_SUCCESS,
      payload: sectionId,
    })
  } catch (error) {
    dispatch({
      type: quotes.REMOVE_SECTION_FAILURE,
      payload: error,
    })
  }
}

export const getExercises = sectionId => async dispatch => {
  dispatch({ type: quotes.GET_EXERCISES_REQUEST })
  try {
    const data = await quoteService.getExercises(sectionId)
    dispatch({
      type: quotes.GET_EXERCISES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: quotes.GET_EXERCISES_FAILURE,
      payload: error,
    })
  }
}

export const addExercise = (body, sectionId) => async dispatch => {
  try {
    const data = await quoteService.addExercise(body, sectionId)
    dispatch({
      type: quotes.ADD_EXERCISE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: quotes.ADD_EXERCISE_FAILURE,
      payload: error,
    })
  }
}

export const removeExercise = exerciseId => async dispatch => {
  try {
    await quoteService.removeExercise(exerciseId)
    dispatch({
      type: quotes.REMOVE_EXERCISE_SUCCESS,
      payload: exerciseId,
    })
  } catch (error) {
    dispatch({
      type: quotes.REMOVE_EXERCISE_FAILURE,
      payload: error,
    })
  }
}

export const getServices = () => async dispatch => {
  dispatch({ type: quotes.GET_SERVICEPRICES_REQUEST })

  try {
    const data = await quoteService.getServices()
    dispatch({
      type: quotes.GET_SERVICEPRICES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: quotes.GET_SERVICEPRICES_FAILURE,
      payload: error,
    })
  }
}

export const addService = body => async dispatch => {
  try {
    const data = await quoteService.addService(body)
    dispatch({
      type: quotes.ADD_SERVICEPRICE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: quotes.ADD_SERVICEPRICE_FAILURE,
      payload: error,
    })
  }
}

export const removeService = id => async dispatch => {
  try {
    await quoteService.removeService(id)
    dispatch({
      type: quotes.REMOVE_SERVICEPRICE_SUCCESS,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: quotes.REMOVE_SERVICEPRICE_FAILURE,
      payload: error,
    })
  }
}

export const updateService = (id, body) => async dispatch => {
  try {
    const data = await quoteService.updateService(id, body)
    dispatch({
      type: quotes.UPDATE_SERVICEPRICE_SUCCESS,
      payload: { data, id },
    })
  } catch (error) {
    dispatch({
      type: quotes.UPDATE_SERVICEPRICE_FAILURE,
      payload: error,
    })
  }
}

export const resetQuotesErrors = () => dispatch => {
  dispatch({
    type: quotes.RESET_ERRORS_SUCCESS,
  })
}

export const getTemplates = () => async () => {
  try {
    return await quoteService.quoteTemplates()
  } catch (error) {
    console.error(error)
  }
}

export const getHtml = name => async () => {
  try {
    return await quoteService.getHtml(name)
  } catch (error) {
    console.error(error)
  }
}

export const addGeneratedQuote = data => dispatch => {
  dispatch({
    type: quotes.ADD_GENERATED_QUOTE,
    payload: data,
  })
}

export const getGeneratedQuote = () => dispatch => {
  dispatch({
    type: quotes.GET_GENERATED_QUOTE,
  })
}

export const resetGeneratedQuote = () => dispatch => {
  dispatch({
    type: quotes.RESET_GENERATED_QUOTE,
  })
}

export const addContentEditor = data => dispatch => {
  dispatch({
    type: quotes.ADD_CONTENT_EDITOR,
    payload: data,
  })
}

export const getContentEditor = () => dispatch => {
  dispatch({
    type: quotes.GET_CONTENT_EDITOR,
  })
}

export const resetContentEditor = () => dispatch => {
  dispatch({
    type: quotes.RESET_CONTENT_EDITOR,
  })
}

export const addQuotePrices = data => dispatch => {
  dispatch({
    type: quotes.ADD_QUOTE_PRICES,
    payload: data,
  })
}

export const getQuotePrices = () => dispatch => {
  dispatch({
    type: quotes.GET_QUOTE_PRICES,
  })
}
