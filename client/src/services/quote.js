import { http } from "@utils/http"

export const getQuotes = async id => {
  return await http({
    url: `/api/project/${id}/quote`,
    method: "GET",
  })
}

export const addQuote = async (id, body) => {
  return await http({
    url: `/api/project/${id}/quote`,
    method: "POST",
    data: body,
  })
}

export const removeQuote = async id => {
  return await http({
    url: `/api/quote/${id}`,
    method: "DELETE",
  })
}

export const getSections = async quoteId => {
  return await http({
    url: `/api/quote/${quoteId}/section`,
    method: "GET",
  })
}

export const addSection = async (body, quoteId) => {
  return await http({
    url: `/api/quote/${quoteId}/section`,
    method: "POST",
    data: body,
  })
}

export const removeSection = async (quoteId, sectionId) => {
  return await http({
    url: `/api/quote/${quoteId}/section/${sectionId}`,
    method: "DELETE",
  })
}

export const getExercises = async (quoteId, sectionId) => {
  return await http({
    url: `/api/quote/${quoteId}/section/${sectionId}/exercise`,
    method: "GET",
  })
}

export const addExercise = async (body, quoteId, sectionId) => {
  return await http({
    url: `/api/quote/${quoteId}/section/${sectionId}/exercise`,
    method: "POST",
    data: body,
  })
}

export const removeExercise = async (quoteId, sectionId, exerciseId) => {
  return await http({
    url: `/api/quote/${quoteId}/section/${sectionId}/exercise/${exerciseId}`,
    method: "DELETE",
  })
}

export const getServices = async () => {
  return await http({
    url: "/api/quote/serviceprice",
    method: "GET",
  })
}

export const addService = async body => {
  return await http({
    url: "/api/quote/serviceprice",
    method: "POST",
    data: body,
  })
}

export const removeService = async id => {
  return await http({
    url: `/api/quote/serviceprice/${id}`,
    method: "DELETE",
  })
}

export const updateService = async (id, body) => {
  return await http({
    url: `/api/quote/serviceprice/${id}`,
    method: "PUT",
    data: body,
  })
}

export const saveHtml = async (name, data) => {
  return await http({
    url: `/api/quote/savehtml/${name}`,
    method: "POST",
    data: { content: data },
  })
}

export const getHtml = async name => {
  return await http({
    url: `/api/quote/gethtml/${name}`,
    method: "GET",
  })
}

export const htmltopdf = async (name, data) => {
  return await http({
    url: `/api/quote/htmltopdf/${name}`,
    method: "POST",
    data,
  })
}

export const quoteTemplates = async () => {
  return await http({
    url: "/api/quote/templates",
    method: "GET",
  })
}
