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

  async getAges() {
    try {
      const response = await apiClient.get('/users/ages', {});
      const data = response.data;
      const ages = Object.keys(data);
      const counts = Object.values(data);
      return { ages, counts };
    } catch (error) {
      throw error;
    }
  },
};

export default userService;
