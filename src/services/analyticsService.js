import api from './api';

const analyticsService = {
  getLeaderboard: async (params = {}) => {
    const response = await api.get('/analytics/leaderboard', { params });
    return response.data;
  },

  getTrends: async (params = {}) => {
    const response = await api.get('/analytics/trends', { params });
    return response.data;
  },

  getCategories: async () => {
    const response = await api.get('/analytics/categories');
    return response.data;
  },

  getSummary: async () => {
    const response = await api.get('/analytics/summary');
    return response.data;
  },

  getInfluencerAnalytics: async (id) => {
    const response = await api.get(`/analytics/influencer/${id}`);
    return response.data;
  },
};

export default analyticsService;
