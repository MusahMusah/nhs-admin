import apiClient from '../api'

const fetchAllUsers = async () => { 
  return await apiClient.get('/admin/users/all');
}

const toggleUserStatus = async (payload) => { 
  return await apiClient.post(`/admin/users/suspend/${payload}`);
}

const userService = {
  fetchAllUsers,
  toggleUserStatus,
}

export default userService