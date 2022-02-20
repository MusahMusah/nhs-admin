import apiClient from '../api'

const registerUser = async (payload) => {
  return await apiClient.post('/register', payload);
}

const loginUser = async (payload) => {
  return await apiClient.post('/auth/login', payload)
                .then(res => {
                  localStorage.setItem('user', JSON.stringify(res.data.success))
                  return res.data.success
                });
}

const logoutUser = () => {
  localStorage.removeItem("user");
};

const AuthService = {
  loginUser,
  registerUser,
  logoutUser,
}

export default AuthService


// export default {
//   async login(payload) {
//     return await apiClient.post('/login', payload);
//   }
// }