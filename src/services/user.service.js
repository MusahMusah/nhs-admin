import apiClient from '../api'

const fetchAllUsers = async () => { 
  return await apiClient.get('/admin/users/all');
}