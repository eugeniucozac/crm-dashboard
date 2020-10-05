import { calibration, types, manufactures, kits, hardwares, models } from "@actions/actionTypes"
import * as inventoryService from "@services/inventory"

export const sendCalibrationNotification = body => async dispatch => {
  try {
    await inventoryService.sendCalibrationNotification(body)
    dispatch({
      type: calibration.SEND_NOTIFICATION_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: calibration.SEND_NOTIFICATION_FAILURE,
      payload: error,
    })
  }
}

export const getTypes = () => async dispatch => {
  dispatch({ type: types.GET_TYPES_REQUEST })
  try {
    const data = await inventoryService.getTypes()
    dispatch({
      type: types.GET_TYPES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: types.GET_TYPES_FAILURE,
      payload: error,
    })
  }
}

export const addType = name => async dispatch => {
  try {
    const data = await inventoryService.addType(name)
    dispatch({
      type: types.ADD_TYPE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: types.ADD_TYPE_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const removeType = id => async dispatch => {
  try {
    await inventoryService.removeType(id)
    dispatch({
      type: types.REMOVE_TYPE_SUCCESS,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: types.REMOVE_TYPE_FAILURE,
      payload: error,
    })
  }
}

export const getManufactures = () => async dispatch => {
  dispatch({ type: manufactures.GET_MANUFACTURES_REQUEST })
  try {
    const data = await inventoryService.getManufactures()
    dispatch({
      type: manufactures.GET_MANUFACTURES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: manufactures.GET_MANUFACTURES_FAILURE,
      payload: error,
    })
  }
}

export const addManufacture = name => async dispatch => {
  try {
    const data = await inventoryService.addManufacture(name)
    dispatch({
      type: manufactures.ADD_MANUFACTURE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: manufactures.ADD_MANUFACTURE_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const removeManufacture = id => async dispatch => {
  try {
    await inventoryService.removeManufacture(id)
    dispatch({
      type: manufactures.REMOVE_MANUFACTURE_SUCCESS,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: manufactures.REMOVE_MANUFACTURE_FAILURE,
      payload: error,
    })
  }
}

export const getModels = () => async dispatch => {
  dispatch({ type: models.GET_MODELS_REQUEST })
  try {
    const data = await inventoryService.getModels()
    dispatch({
      type: models.GET_MODELS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: models.GET_MODELS_FAILURE,
      payload: error,
    })
  }
}

export const addModel = body => async dispatch => {
  try {
    const data = await inventoryService.addModel(body)
    dispatch({
      type: models.ADD_MODEL_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: models.ADD_MODEL_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const removeModel = id => async dispatch => {
  try {
    await inventoryService.removeModel(id)
    dispatch({
      type: models.REMOVE_MODEL_SUCCESS,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: models.REMOVE_MODEL_FAILURE,
      payload: error,
    })
  }
}

export const getHardwares = () => async dispatch => {
  dispatch({ type: hardwares.GET_HARDWARES_REQUEST })
  try {
    const data = await inventoryService.getHardwares()
    dispatch({
      type: hardwares.GET_HARDWARES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: hardwares.GET_HARDWARES_FAILURE,
      payload: error,
    })
  }
}

export const addHardware = body => async dispatch => {
  try {
    const data = await inventoryService.addHardware(body)
    dispatch({
      type: hardwares.ADD_HARDWARE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: hardwares.ADD_HARDWARE_FAILURE,
      payload: error,
    })
  }
}

export const updateHardware = (id, body) => async dispatch => {
  try {
    const data = await inventoryService.updateHardware(id, body)
    dispatch({
      type: hardwares.UPDATE_HARDWARE_SUCCESS,
      payload: { data, id },
    })
  } catch (error) {
    dispatch({
      type: hardwares.UPDATE_HARDWARE_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const removeHardware = id => async dispatch => {
  try {
    await inventoryService.removeHardware(id)
    dispatch({
      type: hardwares.REMOVE_HARDWARE_SUCCESS,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: hardwares.REMOVE_HARDWARE_FAILURE,
      payload: error,
    })
  }
}

export const getKits = () => async dispatch => {
  dispatch({ type: kits.GET_KITS_REQUEST })
  try {
    const data = await inventoryService.getKits()
    dispatch({
      type: kits.GET_KITS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: kits.GET_KITS_FAILURE,
      payload: error,
    })
  }
}

export const addKit = body => async dispatch => {
  try {
    const data = await inventoryService.addKit(body)
    dispatch({
      type: kits.ADD_KIT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: kits.ADD_KIT_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const updateKit = (id, body) => async dispatch => {
  try {
    const data = await inventoryService.updateKit(id, body)
    dispatch({
      type: kits.UPDATE_KIT_SUCCESS,
      payload: { data, id },
    })
  } catch (error) {
    dispatch({
      type: kits.UPDATE_KIT_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const removeKit = id => async dispatch => {
  try {
    await inventoryService.removeKit(id)
    dispatch({
      type: kits.REMOVE_KIT_SUCCESS,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: kits.REMOVE_KIT_FAILURE,
      payload: error,
    })
  }
}

export const resetManufactureErrors = () => dispatch => {
  dispatch({
    type: manufactures.RESET_ERRORS_SUCCESS,
  })
}

export const resetModelErrors = () => dispatch => {
  dispatch({
    type: models.RESET_ERRORS_SUCCESS,
  })
}

export const resetTypeErrors = () => dispatch => {
  dispatch({
    type: types.RESET_ERRORS_SUCCESS,
  })
}

export const resetKitErrors = () => dispatch => {
  dispatch({
    type: kits.RESET_ERRORS_SUCCESS,
  })
}
