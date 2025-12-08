import api from './api';

const claimService = {
  getAll: async (params = {}) => {
    const response = await api.get('/claims', { params });
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/claims/${id}`);
    return response.data;
  },

  create: async (data) => {
    const response = await api.post('/claims', data);
    return response.data;
  },

  update: async (id, data) => {
    const response = await api.put(`/claims/${id}`, data);
    return response.data;
  },

  verifyClaim: async (id, verificationData) => {
    const response = await api.post(`/claims/${id}/verify`, verificationData);
    return response.data;
  },

  verifyOnDemand: async (id) => {
    const response = await api.post(`/claims/verify-on-demand/${id}`);
    return response.data;
  },

  getOrVerifyClaim: async (data) => {
    const response = await api.post('/claims/get-or-verify', data);
    return response.data;
  },

  // NEW: Fetch all influencer posts and create claims
  fetchAllInfluencerPosts: async (maxPostsPerInfluencer = 50) => {
    const response = await api.post('/claims/fetch-all-posts', { maxPostsPerInfluencer });
    return response.data;
  },
};

export default claimService;
