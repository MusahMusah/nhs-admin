import apiClient from '../api'

const fetchAllWallets = async () => { 
  return await apiClient.get('/admin/wallet/transactions/all');
}

const walletService = {
  fetchAllWallets,
}

export default walletService