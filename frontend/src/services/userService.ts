import apiClient from '../utils/axios';

const userService = {
  async getNumberMaleFemale() {
    try {
      const response = await apiClient.get(
        `http://localhost:5000/api/users`,
        {}
      );
      const { male: mal,female:f } = response.data;
      console.log(mal,f);
    } catch (error) {
      throw error;
    }
  },
};

export default userService;
