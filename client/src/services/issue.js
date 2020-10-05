import { http } from "@utils/http"

export const getIssues = async () => {
  return await http({
    url: "/api/issue",
    method: "GET",
  })
}

export const addIssue = async body => {
  return await http({
    url: "/api/issue",
    method: "POST",
    data: body,
  })
}

export const changeIssueStatus = async (id, body) => {
  return await http({
    url: `/api/issue/${id}`,
    method: "PUT",
    data: body,
  })
}

export const removeIssue = async id => {
  return await http({
    url: `/api/issue/${id}`,
    method: "DELETE",
  })
}

export const getIssueMessages = async id => {
  return await http({
    url: `/api/issue/${id}/message`,
    method: "GET",
  })
}

export const addIssueMessage = async (id, body) => {
  return await http({
    url: `/api/issue/${id}/message`,
    method: "POST",
    data: body,
  })
}
