import apiClient from '../api'

const fetchAllGolds = async () => { 
  return await apiClient.get('/admin/gold/transactions/all');
}

const goldService = {
  fetchAllGolds,
}

export default goldService