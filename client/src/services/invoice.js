import { http } from "@utils/http"

export const getInvoices = async () => {
  return await http({
    url: "/api/invoice",
    method: "GET",
  })
}

export const getInvoice = async id => {
  return await http({
    url: `/api/invoice/${id}`,
    method: "GET",
  })
}

export const addInvoice = async body => {
  return await http({
    url: "/api/invoice",
    method: "POST",
    data: body,
  })
}

export const removeInvoice = async id => {
  return await http({
    url: `/api/invoice/${id}`,
    method: "DELETE",
  })
}

export const getServices = async id => {
  return await http({
    url: `/api/invoice/${id}/service`,
    method: "GET",
  })
}

export const addService = async (body, id) => {
  return await http({
    url: `/api/invoice/${id}/service`,
    method: "POST",
    data: body,
  })
}

export const removeService = async (invoiceId, serviceId) => {
  return await http({
    url: `/api/invoice/${invoiceId}/service/${serviceId}`,
    method: "DELETE",
  })
}
