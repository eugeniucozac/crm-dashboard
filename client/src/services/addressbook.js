import { http } from "@utils/http"

export const getAddressBooks = async () => {
  return await http({
    url: "/api/addressbook",
    method: "GET",
  })
}

export const addAddressBook = async body => {
  return await http({
    url: "/api/addressbook",
    method: "POST",
    data: body,
  })
}

export const updateAddressBook = async (id, body) => {
  return await http({
    url: `/api/addressbook/${id}`,
    method: "PUT",
    data: body,
  })
}

export const removeAddressBook = async id => {
  return await http({
    url: `/api/addressbook/${id}`,
    method: "DELETE",
  })
}

export const getUsers = async id => {
  return await http({
    url: `/api/addressbook/${id}/users`,
    method: "GET",
  })
}

export const addUser = async (id, body) => {
  return await http({
    url: `/api/addressbook/${id}/users`,
    method: "POST",
    data: body,
  })
}

export const removeUser = async (addressBookId, contactUserId) => {
  return await http({
    url: `/api/addressbook/${addressBookId}/users/${contactUserId}`,
    method: "DELETE",
  })
}

export const getPositions = async () => {
  return await http({
    url: "/api/addressbook/roles",
    method: "GET",
  })
}

export const addPosition = async body => {
  return await http({
    url: "/api/addressbook/roles",
    method: "POST",
    data: body,
  })
}
