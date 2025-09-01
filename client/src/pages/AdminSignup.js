import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { signUp, reset } from '../store/slices/authSlice';

const signupBgUrl = 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80';

const AdminSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useAppSelector((state) => state.auth);

  React.useEffect(() => {
    if (isSuccess && user) {
      toast.success(message || 'Signup successful!');
      setTimeout(() => {
        navigate('/admindashboard');
      }, 1200); // 1.2 seconds delay for toast visibility
    }
    if (isError) {
      toast.error(message || 'Signup failed!');
    }
    return () => {
      dispatch(reset());
    };
  }, [isSuccess, isError, user, message, navigate, dispatch]);

  const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(signUp({ name, email, password, passwordConfirm, role: 'admin' }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Go back to homepage link */}
      <div className="w-full max-w-4xl mt-6 mb-2 flex justify-start">
        <a href="/" className="text-blue-600 hover:underline font-medium text-lg">&larr; Go back to homepage</a>
      </div>
      <div className="flex w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Left Side - Image & Welcome */}
        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-blue-500 to-purple-500 p-10 relative">
          <img src={signupBgUrl} alt="Signup" className="rounded-xl shadow-lg mb-8 w-full h-64 object-cover" />
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Join as Admin!</h2>
          <p className="text-lg text-white opacity-90 text-center">Create your admin account to manage properties.</p>
        </div>
        {/* Right Side - Signup Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Admin Signup</h2>
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pr-12 pl-2 py-2 border rounded focus:outline-none"
                  style={{ paddingRight: '2.5rem' }}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                  onClick={() => setShowPassword((prev) => !prev)}
                  style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
                  className="w-full pr-12 pl-2 py-2 border rounded focus:outline-none"
                  style={{ paddingRight: '2.5rem' }}
                />
                <button
                  type="button"
                  tabIndex={-1}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            {isError && <div className="error-message">{message}</div>}
            {isLoading && <div className="loading">Signing up...</div>}
            <button
              type="submit"
              className="auth-button w-full"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
