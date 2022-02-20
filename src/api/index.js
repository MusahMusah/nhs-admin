import axios from "axios"

const authorizationHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken }
  } else {
    return {}
  }
}

export const apiClient = axios.create({
  // baseURL: process.env.BACKEND_API_URL,
  baseURL: "http://170.187.159.84:3001/api/v1",
  headers: authorizationHeader(),
})

export default apiClient
