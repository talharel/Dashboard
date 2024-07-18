import apiClient from '../utils/axios';

const taskService = {
  async getTasks() {
    try {
      const response = await apiClient.get('/tasks/', {});
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default taskService;
