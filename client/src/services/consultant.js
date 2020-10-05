import { http } from "@utils/http"

export const getConsultants = async () => {
  return await http({
    url: "/api/consultants",
    method: "GET",
  })
}

export const getRoles = async () => {
  return await http({
    url: "/api/roles",
    method: "GET",
  })
}

export const addConsultant = async body => {
  return await http({
    url: "/api/consultants/register",
    method: "POST",
    data: body,
  })
}

export const removeConsultant = async id => {
  return await http({
    url: `/api/consultants/${id}`,
    method: "DELETE",
  })
}

export const updateConsultant = async (id, body) => {
  return await http({
    url: `/api/consultants/${id}/role`,
    method: "PUT",
    data: body,
  })
}
