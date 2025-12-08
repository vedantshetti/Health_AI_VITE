import api from './api';

const researchService = {
  getTasks: async () => {
    const response = await api.get('/research/tasks');
    return response.data;
  },

  createTask: async (data) => {
    const response = await api.post('/research/task', data);
    return response.data;
  },

  updateTask: async (id, data) => {
    const response = await api.put(`/research/task/${id}`, data);
    return response.data;
  },

  submitEvidence: async (data) => {
    const response = await api.post('/research/evidence', data);
    return response.data;
  },

  getEvidence: async (claimId) => {
    const response = await api.get(`/research/evidence/${claimId}`);
    return response.data;
  },

  // Research Report methods
  generateReport: async (data) => {
    const response = await api.post('/research/report', data);
    return response.data;
  },

  getReports: async (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    const response = await api.get(`/research/reports?${params}`);
    return response.data;
  },

  getReport: async (id) => {
    const response = await api.get(`/research/report/${id}`);
    return response.data;
  },

  deleteReport: async (id) => {
    const response = await api.delete(`/research/report/${id}`);
    return response.data;
  },
};

export default researchService;
