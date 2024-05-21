import apiClient from '../utils/axios';

const userService = {
  async getGender() {
    try {
      const response = await apiClient.get('/users/gender', {});
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default userService;
