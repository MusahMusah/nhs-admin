import apiClient from '../api'

const fetchAllPosts = async () => { 
  return await apiClient.get('/admin/posts/all');
}

const fetchAllSponsoredPosts = async () => { 
  return await apiClient.get('/admin/posts/sponsored');
}

const postService = {
  fetchAllPosts,
  fetchAllSponsoredPosts,
}

export default postService