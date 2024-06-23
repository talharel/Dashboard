import apiClient from '../utils/axios';

const employeeService = {
  async getEmployeesSize() {
    try {
      const response = await apiClient.get('/employees/', {});
      return response.data.count;
    } catch (error) {
      throw error;
    }
  },
};

export default employeeService;
