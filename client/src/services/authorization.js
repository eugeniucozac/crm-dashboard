import { http } from "@utils/http"

export const login = async body => {
  return await http(
    {
      url: "/api/consultants/login",
      method: "POST",
      data: body,
    },
    false
  )
}

export const changePassword = async (id, body) => {
  return await http({
    url: `/api/consultants/${id}`,
    method: "PUT",
    data: body,
  })
}

export const forgotPassword = async body => {
  return await http(
    {
      url: "/api/forgot",
      method: "POST",
      data: body,
    },
    false
  )
}

export const checkToken = async token => {
  return await http(
    {
      url: "/api/reset",
      method: "POST",
      data: { params: { resetPasswordToken: token } },
    },
    false
  )
}

export const resetPassword = async (id, body) => {
  return await http(
    {
      url: `/api/consultants/${id}`,
      method: "PUT",
      data: body,
    },
    false
  )
}
