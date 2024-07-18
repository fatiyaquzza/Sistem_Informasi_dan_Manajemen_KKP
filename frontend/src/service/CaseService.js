// Service/LawyerService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/admin-cases';

export const getCases = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching lawyers:', error);
        throw error;
    }
};

export const getCaseById = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching case:', error);
      throw error;
    }
  };