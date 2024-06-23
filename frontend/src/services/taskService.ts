import apiClient from '../utils/axios';

const taskService = {
  async getTasksSize() {
    try {
      const response = await apiClient.get('/tasks/', {});
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default taskService;
