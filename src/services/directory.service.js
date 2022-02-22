import apiClient from '../api'

const fetchAllDirectories = async () => { 
  return await apiClient.get('/admin/directory/all');
}

const directoryService = {
  fetchAllDirectories,
}

export default directoryService