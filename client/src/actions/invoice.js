import { invoices } from "@actions/actionTypes"
import * as invoiceService from "@services/invoice"

export const getInvoices = () => async dispatch => {
  dispatch({ type: invoices.GET_INVOICES_REQUEST })
  try {
    const data = await invoiceService.getInvoices()
    dispatch({
      type: invoices.GET_INVOICES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: invoices.GET_INVOICES_FAILURE,
      payload: error,
    })
  }
}

export const addInvoice = body => async dispatch => {
  try {
    const data = await invoiceService.addInvoice(body)
    dispatch({
      type: invoices.ADD_INVOICE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: invoices.ADD_INVOICE_FAILURE,
      payload: error,
    })
  }
}

export const removeInvoice = id => async dispatch => {
  try {
    await invoiceService.removeInvoice(id)
    dispatch({
      type: invoices.REMOVE_INVOICE_SUCCESS,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: invoices.REMOVE_INVOICE_FAILURE,
      payload: error,
    })
  }
}

export const getServices = () => async dispatch => {
  dispatch({ type: invoices.GET_SERVICES_REQUEST })
  try {
    const data = await invoiceService.getServices()
    dispatch({
      type: invoices.GET_SERVICES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: invoices.GET_SERVICES_FAILURE,
      payload: error,
    })
  }
}

export const addService = (body, id) => async dispatch => {
  try {
    const data = await invoiceService.addService(body)
    dispatch({
      type: invoices.ADD_SERVICE_SUCCESS,
      payload: { data, id },
    })
  } catch (error) {
    dispatch({
      type: invoices.ADD_SERVICE_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const removeService = (invoiceId, serviceId) => async dispatch => {
  try {
    await invoiceService.removeService(invoiceId)
    dispatch({
      type: invoices.REMOVE_SERVICE_SUCCESS,
      payload: { invoiceId, serviceId },
    })
  } catch (error) {
    dispatch({
      type: invoices.REMOVE_SERVICE_FAILURE,
      payload: error,
    })
  }
}

export const resetInvoiceErrors = () => dispatch => {
  dispatch({
    type: invoices.RESET_ERRORS_SUCCESS,
  })
}
