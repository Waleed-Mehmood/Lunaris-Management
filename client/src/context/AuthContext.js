import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { authReducer, initialState } from './authReducer';
import { authService } from '../services/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check for token in localStorage on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authService.setAuthToken(token);
      getCurrentUser();
    } else {
      dispatch({ type: 'AUTH_LOADED' });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Login user
  const login = async (email, password) => {
    try {
      dispatch({ type: 'AUTH_LOADING' });
      const response = await authService.login(email, password);
      
      if (response.success) {
        localStorage.setItem('token', response.token);
        authService.setAuthToken(response.token);
        dispatch({ 
          type: 'AUTH_SUCCESS', 
          payload: { user: response.user, token: response.token }
        });
        return { success: true };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Login failed';
      dispatch({ type: 'AUTH_ERROR', payload: message });
      return { success: false, message };
    }
  };

  // Register user
  const register = async (name, email, password) => {
    try {
      dispatch({ type: 'AUTH_LOADING' });
      const response = await authService.register(name, email, password);
      
      if (response.success) {
        localStorage.setItem('token', response.token);
        authService.setAuthToken(response.token);
        dispatch({ 
          type: 'AUTH_SUCCESS', 
          payload: { user: response.user, token: response.token }
        });
        return { success: true };
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed';
      dispatch({ type: 'AUTH_ERROR', payload: message });
      return { success: false, message };
    }
  };

  // Get current user
  const getCurrentUser = async () => {
    try {
      const response = await authService.getCurrentUser();
      if (response.success) {
        dispatch({ 
          type: 'GET_USER_SUCCESS', 
          payload: response.user 
        });
      }
    } catch (error) {
      dispatch({ type: 'AUTH_ERROR', payload: 'Failed to get user data' });
      logout();
    } finally {
      dispatch({ type: 'AUTH_LOADED' });
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('token');
    authService.removeAuthToken();
    dispatch({ type: 'LOGOUT' });
  };

  // Clear errors
  const clearErrors = () => {
    dispatch({ type: 'CLEAR_ERRORS' });
  };

  const value = {
    ...state,
    login,
    register,
    logout,
    clearErrors,
    getCurrentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
