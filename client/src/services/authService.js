import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});


// Login user
const login = async (userData) => {
  const response = await api.post('/api/v1/user/log-in', userData);
  // Set token in axios header for future requests
  if (response.data.token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
  }
  return response.data;
};


// Register admin using /admin-signup endpoint
const adminSignup = async (userData) => {
  try {
    const response = await api.post('/api/v1/user/admin-signup', userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Backend error:', error.response.data);
      throw error.response.data;
    } else {
      console.error('Unknown error:', error);
      throw error;
    }
  }
};
const register = async (userData) => {
  try {
    const response = await api.post('/api/v1/user/sign-up', userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Backend error:', error.response.data);
      throw error.response.data;
    } else {
      console.error('Unknown error:', error);
      throw error;
    }
  }
};

// Log out user
const logOut = async () => {
  const response = await api.post('/api/v1/user/log-out');
  return response.data;
};

// Check auth
const checkAuth = async () => {
  // Set token from localStorage if available
  const token = localStorage.getItem('token');
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  const response = await api.get('/api/v1/user/check-auth', {
    headers: { 'Cache-Control': 'no-cache' }
  });
  return response.data;
};

export const authService = {
  login,
  register,
  adminSignup,
  logOut,
  checkAuth
};
