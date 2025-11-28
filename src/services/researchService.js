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
};

export default researchService;
