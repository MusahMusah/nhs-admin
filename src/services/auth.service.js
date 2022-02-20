import apiClient from '../api'

const registerUser = async (payload) => {
  return await apiClient.post('/register', payload);
}

const loginUser = async (payload) => {
  return await apiClient.post('/login', payload);
}

const AuthService = {
  loginUser,
  registerUser,
}

export default AuthService


// export default {
//   async login(payload) {
//     return await apiClient.post('/login', payload);
//   }
// }