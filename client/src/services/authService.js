import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Set auth token
const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }
};

// Remove auth token
const removeAuthToken = () => {
  delete api.defaults.headers.common['Authorization'];
};

// Login user
const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};

// Register user
const register = async (name, email, password) => {
  const response = await api.post('/auth/register', { name, email, password });
  return response.data;
};

// Get current user
const getCurrentUser = async () => {
  const response = await api.get('/auth/me');
  return response.data;
};

export const authService = {
  login,
  register,
  getCurrentUser,
  setAuthToken,
  removeAuthToken
};

export default api;
