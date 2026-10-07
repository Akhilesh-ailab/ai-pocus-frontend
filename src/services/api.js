import axios from 'axios';

// Replace with your actual FastAPI backend URL when ready
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Automatically inject the auth token into every request
apiClient.interceptors.request.use((config) => {
  const sessionString = localStorage.getItem('aipocus_session');
  if (sessionString) {
    const session = JSON.parse(sessionString);
    if (session.token) {
      config.headers.Authorization = `Bearer ${session.token}`;
    }
  }
  return config;
});

// Centralized API calls to swap out your mock data later
export const crfService = {
  
  // Fetch all cases for the Dashboard / Cases Table
  getAllCases: async () => {
    const response = await apiClient.get('/cases');
    return response.data;
  },

  // Submit the text-based CRF form data (Cards 1, 2, 4, 5)
  submitCRFForm: async (crfData) => {
    const response = await apiClient.post('/cases', crfData);
    return response.data;
  },

  // Upload an image/video to a specific case (Card 3)
  uploadMedia: async (caseId, viewName, file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('viewName', viewName);
    
    const response = await apiClient.post(`/cases/${caseId}/media`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // Fetch the AI Analysis results for a specific case
  getAiAnalysis: async (caseId) => {
    const response = await apiClient.get(`/cases/${caseId}/analysis`);
    return response.data;
  }
};

export default apiClient;