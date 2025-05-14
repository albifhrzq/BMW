import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './loginpage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Untuk demo, langsung set token tanpa API call
      // Dalam implementasi sebenarnya, gunakan API endpoint /api/login
      /*
      const response = await axios.post('http://localhost:5000/api/login', formData);
      if (response.data.token) {
        localStorage.setItem('authToken', response.data.token);
        navigate('/');
      }
      */
      
      // Demo login - ganti dengan autentikasi asli nanti
      if (formData.email === 'admin@bmw.com' && formData.password === 'password') {
        localStorage.setItem('authToken', 'demo-token');
        alert('Login berhasil!');
        navigate('/');
      } else {
        setError('Email atau password salah');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Terjadi kesalahan saat login');
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigateFind = () => {
    navigate('/find');
  };

  const handleNavigateRegister = () => {
    navigate('/register');
  };

  return (
    <div className="landing-page">
      <div className="left-section">
        <img src="./images/bmw-logo.png" alt="BMW Logo" className="bmw-logo" onClick={handleNavigateHome} style={{ cursor: 'pointer' }} />
        <h1 className="performance-text">
          THE <span className="highlight">PERFORMANCE</span> <br />
          TO GO <span className="highlight">FAST.</span>
        </h1>
        <h1 className="technology-text">
          THE <span className="highlight">TECHNOLOGY</span> <br />
          <span>TO GO <span className="highlight">FAR.</span></span>
        </h1>
      </div>

      <div className="right-section">
        <div className="header-links">
          <span className="models" onClick={handleNavigateFind} style={{ cursor: 'pointer' }}>Models</span>
          <span className="shop-online">Shop Online</span>
        </div>

        <div className="login-container">
          <h2 className="login-title">Login to Your Account</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div className="login-footer">
            <p>Demo: email=admin@bmw.com, password=password</p>
            <p className="register-link">
              Belum memiliki akun? <span onClick={handleNavigateRegister}>Daftar di sini</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;