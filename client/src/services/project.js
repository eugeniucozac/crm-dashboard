import { http } from "@utils/http"

export const getProjects = async () => {
  return await http({
    url: "/api/project",
    method: "GET",
  })
}

export const addProject = async body => {
  return await http({
    url: "/api/project",
    method: "POST",
    data: body,
  })
}

export const updateProject = async (id, body) => {
  return await http({
    url: `/api/project/${id}`,
    method: "PUT",
    data: body,
  })
}

export const removeProject = async id => {
  return await http({
    url: `/api/project/${id}`,
    method: "DELETE",
  })
}

export const getSites = async id => {
  return await http({
    url: `/api/project/${id}/site`,
    method: "GET",
  })
}

export const addSite = async (id, body) => {
  return await http({
    url: `/api/project/${id}/site`,
    method: "POST",
    data: body,
  })
}

export const removeSite = async (projectId, siteId) => {
  return await http({
    url: `/api/project/${projectId}/site/${siteId}`,
    method: "DELETE",
  })
}

export const getComments = async id => {
  return await http({
    url: `/api/project/${id}/comment`,
    method: "GET",
  })
}

export const addComment = async (id, body) => {
  return await http({
    url: `/api/project/${id}/comment`,
    method: "POST",
    data: body,
  })
}

export const removeComment = async (projectId, commentId) => {
  return await http({
    url: `/api/project/${projectId}/comment/${commentId}`,
    method: "DELETE",
  })
}

export const listHistory = async id => {
  return await http({
    url: `/api/project/${id}/history`,
    method: "GET",
  })
}

export const addHistory = async (projectId, body) => {
  return await http({
    url: `/api/project/${projectId}/history`,
    method: "POST",
    data: body,
  })
}
