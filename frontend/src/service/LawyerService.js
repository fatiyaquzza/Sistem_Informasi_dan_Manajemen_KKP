// Service/LawyerService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/lawyers';

export const getLawyers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching lawyers:', error);
        throw error;
    }
};
