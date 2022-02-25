import apiClient from '../api'

const fetchAllSettings = async () => { 
  return await apiClient.get('/admin/settings/general');
}

const updateSettings = async (payload) => {
  return await apiClient.post('/admin/settings/updateSettings', payload);
}

const fetchAllDashboardAnalytics = async () => {
  return await apiClient.get('/admin/reports/general');
}

const settingsService = {
  fetchAllSettings,
  updateSettings,
  fetchAllDashboardAnalytics,
}

export default settingsService