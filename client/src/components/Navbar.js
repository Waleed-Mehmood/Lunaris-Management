import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../store/slices/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const isAuthenticated = !!user && !!token;

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Lunaris
        </Link>
        
        <div className="nav-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/properties" className="nav-link">
            Properties
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
              {user?.role === 'admin' && (
                <Link to="/admin" className="nav-link">
                  Admin
                </Link>
              )}
              <span className="nav-user">
                Welcome, {user?.name}
              </span>
              <button onClick={handleLogout} className="nav-button">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-button">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
