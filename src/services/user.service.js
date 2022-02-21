import apiClient from '../api'

const fetchAllUsers = async () => { 
  return await apiClient.get('/admin/posts/all');
}

const userService = {
  fetchAllUsers,
}

export default userService