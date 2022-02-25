import apiClient from '../api'

const fetchAllPosts = async () => { 
  return await apiClient.get('/admin/posts/all');
}

const fetchAllSponsoredPosts = async (payload) => { 
  return await apiClient.get(`/admin/posts/sponsored/${payload}`);
}

const fetchSinglePost = async (payload) => {
  return await apiClient.get(`/admin/posts/single/${payload}`);
}

const postService = {
  fetchAllPosts,
  fetchAllSponsoredPosts,
  fetchSinglePost,
}

export default postService