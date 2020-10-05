import { http } from "@utils/http"

export const sendCalibrationNotification = async body => {
  return await http({
    url: "/api/calibrationNotification",
    method: "POST",
    data: body,
  })
}

export const getTypes = async () => {
  return await http({
    url: "/api/inventory/type",
    method: "GET",
  })
}

export const addType = async body => {
  return await http({
    url: "/api/inventory/type",
    method: "POST",
    data: body,
  })
}

export const removeType = async id => {
  return await http({
    url: `/api/inventory/type/${id}`,
    method: "DELETE",
  })
}

export const getManufactures = async () => {
  return await http({
    url: "/api/inventory/manufacture",
    method: "GET",
  })
}

export const addManufacture = async body => {
  const data = await http({
    url: "/api/inventory/manufacture",
    method: "POST",
    data: body,
  })
  return data
}

export const removeManufacture = async id => {
  const data = await http({
    url: `/api/inventory/manufacture/${id}`,
    method: "DELETE",
  })
  return data
}

export const getModels = async () => {
  return await http({
    url: "/api/inventory/model",
    method: "GET",
  })
}

export const addModel = async body => {
  const data = await http({
    url: "/api/inventory/model",
    method: "POST",
    data: body,
  })
  return data
}

export const removeModel = async id => {
  const data = await http({
    url: `/api/inventory/model/${id}`,
    method: "DELETE",
  })
  return data
}

export const getHardwares = async () => {
  return await http({
    url: "/api/inventory/hardware",
    method: "GET",
  })
}

export const addHardware = async body => {
  return await http({
    url: "/api/inventory/hardware",
    method: "POST",
    data: body,
  })
}

export const updateHardware = async (id, body) => {
  return await http({
    url: `/api/inventory/hardware/${id}`,
    method: "PUT",
    data: body,
  })
}

export const removeHardware = async id => {
  return await http({
    url: `/api/inventory/hardware/${id}`,
    method: "DELETE",
  })
}

export const getKits = async () => {
  return await http({
    url: "/api/inventory/kit",
    method: "GET",
  })
}

export const addKit = async body => {
  return await http({
    url: "/api/inventory/kit",
    method: "POST",
    data: body,
  })
}

export const updateKit = async (id, body) => {
  return await http({
    url: `/api/inventory/kit/${id}`,
    method: "PUT",
    data: body,
  })
}

export const removeKit = async id => {
  return await http({
    url: `/api/inventory/kit/${id}`,
    method: "DELETE",
  })
}
