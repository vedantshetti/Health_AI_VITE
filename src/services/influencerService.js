import api from './api';

const influencerService = {
  getAll: async (params = {}) => {
    const response = await api.get('/influencers', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/influencers/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await api.post('/influencers', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/influencers/${id}`, data);
    return response.data;
  },

  getPosts: async (id) => {
    const response = await api.get(`/influencers/${id}/posts`);
    return response.data;
  },

  fetchAndStorePosts: async (id) => {
    const response = await api.post(`/influencers/${id}/fetch`);
    return response.data;
  },

  updateAllFromTwitter: async () => {
    const response = await api.post('/influencers/update-all-twitter');
    return response.data;
  },

  // NEW: Fetch health influencers from Twitter and store in database
  fetchAndStoreFromTwitter: async (keywords, category) => {
    const response = await api.post('/influencers/fetch-from-twitter', { keywords, category });
    return response.data;
  },

  // NEW: Fetch and analyze posts for an influencer
  fetchAndAnalyzePosts: async (id) => {
    const response = await api.post(`/influencers/${id}/analyze-posts`);
    return response.data;
  },
};

export default influencerService;
