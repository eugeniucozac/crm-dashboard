import { addressBooks } from "@actions/actionTypes"
import * as addressbookService from "@services/addressbook"

export const getAddressBooks = () => async dispatch => {
  dispatch({ type: addressBooks.GET_ADDRESS_BOOKS_REQUEST })
  try {
    const data = await addressbookService.getAddressBooks()
    dispatch({
      type: addressBooks.GET_ADDRESS_BOOKS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: addressBooks.GET_ADDRESS_BOOKS_FAILURE,
      payload: error,
    })
  }
}

export const addAddressBook = body => async dispatch => {
  try {
    const data = await addressbookService.addAddressBook(body)
    dispatch({
      type: addressBooks.ADD_ADDRESS_BOOK_SUCCESS,
      payload: data,
    })
    return data
  } catch (error) {
    dispatch({
      type: addressBooks.ADD_ADDRESS_BOOK_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const updateAddressBook = (id, body) => async dispatch => {
  try {
    const data = await addressbookService.updateAddressBook(id, body)
    dispatch({
      type: addressBooks.UPDATE_ADDRESS_BOOK_SUCCESS,
      payload: { data, id },
    })
  } catch (error) {
    dispatch({
      type: addressBooks.UPDATE_ADDRESS_BOOK_FAILURE,
      payload: error,
    })
    throw error
  }
}

export const removeAddressBook = id => async dispatch => {
  try {
    await addressbookService.removeAddressBook(id)
    dispatch({
      type: addressBooks.REMOVE_ADDRESS_BOOK_SUCCESS,
      payload: id,
    })
  } catch (error) {
    dispatch({
      type: addressBooks.REMOVE_ADDRESS_BOOK_FAILURE,
      payload: error,
    })
  }
}

export const getUsers = id => async dispatch => {
  dispatch({ type: addressBooks.GET_USERS_REQUEST })
  try {
    const data = await addressbookService.getUsers()
    dispatch({
      type: addressBooks.GET_USERS_SUCCESS,
      payload: { data, id },
    })
  } catch (error) {
    dispatch({
      type: addressBooks.GET_USERS_FAILURE,
      payload: error,
    })
  }
}

export const addUser = (id, body) => async dispatch => {
  try {
    const data = await addressbookService.addUser(body)
    dispatch({
      type: addressBooks.ADD_USER_SUCCESS,
      payload: { data, id },
    })
  } catch (error) {
    dispatch({
      type: addressBooks.ADD_USER_FAILURE,
      payload: error,
    })
  }
}

export const removeUser = (addressBookId, contactUserId) => async dispatch => {
  try {
    await addressbookService.removeUser(addressBookId, contactUserId)
    dispatch({
      type: addressBooks.REMOVE_USER_SUCCESS,
      payload: { addressBookId, contactUserId },
    })
  } catch (error) {
    dispatch({
      type: addressBooks.REMOVE_USER_FAILURE,
      payload: error,
    })
  }
}

export const getPositions = () => async dispatch => {
  dispatch({ type: addressBooks.GET_POSITIONS_REQUEST })
  try {
    const data = await addressbookService.getPositions()
    dispatch({
      type: addressBooks.GET_POSITIONS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: addressBooks.GET_POSITIONS_FAILURE,
      payload: error,
    })
  }
}

export const addPosition = body => async dispatch => {
  try {
    const data = await addressbookService.addPosition(body)
    dispatch({
      type: addressBooks.ADD_POSITION_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: addressBooks.ADD_POSITION_FAILURE,
      payload: error,
    })
  }
}

export const resetAddressBooksErrors = () => dispatch => {
  dispatch({
    type: addressBooks.RESET_ERRORS_SUCCESS,
  })
}

export const getLastAddressBook = () => dispatch => {
  dispatch({
    type: addressBooks.GET_LAST_ADDRESS_BOOK,
  })
}
