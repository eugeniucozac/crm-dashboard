import axios from "axios"

export const http = async (config, authenticated = true) => {
  axios.interceptors.request.use(config => {
    if (authenticated) {
      const token = localStorage.getItem("authToken")
      config.headers.common["Authorization"] = token
    }
    return config
  })

  const onSuccess = response => response.data
  const onError = error => Promise.reject(error.response || error.message)
  return axios(config).then(onSuccess).catch(onError)
}
