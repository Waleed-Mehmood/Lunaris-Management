import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { user, token, isLoading } = useSelector((state) => state.auth);
  const isAuthenticated = !!user && !!token;

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/adminlogin" />;
};

export default PrivateRoute;
