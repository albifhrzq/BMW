import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.css';

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
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

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validasi password
    if (formData.password !== formData.confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok');
      return;
    }
    
    // Validasi nomor telepon (hanya angka)
    if (!/^\d+$/.test(formData.phone)) {
      setError('Nomor telepon hanya boleh berisi angka');
      return;
    }

    setLoading(true);

    try {
      // Untuk demo, langsung set token tanpa API call
      // Dalam implementasi sebenarnya, gunakan API endpoint /api/register
      /*
      const response = await axios.post('http://localhost:5000/api/register', formData);
      if (response.data.success) {
        alert('Registrasi berhasil! Silakan login.');
        navigate('/login');
      }
      */
      
      // Demo register
      console.log('Registrasi berhasil dengan data:', formData);
      alert('Registrasi berhasil! Silakan login.');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Terjadi kesalahan saat registrasi');
    } finally {
      setLoading(false);
    }
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleNavigateLogin = () => {
    navigate('/login');
  };

  return (
    <div className="register-page">
      <div className="left-section-register">
        <img src="./images/bmw-logo.png" alt="BMW Logo" className="bmw-logo-register" onClick={handleNavigateHome} style={{ cursor: 'pointer' }} />
        <h1 className="register-heading">
          BECOME A <span className="highlight">BMW</span> <br />
          <span className="highlight">MEMBER</span> TODAY
        </h1>
        <div className="register-benefits">
          <p>✓ Exclusive access to BMW events</p>
          <p>✓ Personalized offers and discounts</p>
          <p>✓ Stay updated with latest BMW news</p>
          <p>✓ Schedule test drives easily</p>
        </div>
      </div>

      <div className="right-section-register">
        <div className="register-container">
          <h2 className="register-title">Create Your Account</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleRegister} className="register-form">
            <div className="form-group">
              <label htmlFor="fullName">Nama Lengkap</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
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
              <label htmlFor="phone">Nomor Telepon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
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
                minLength="6"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Konfirmasi Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength="6"
              />
            </div>
            <button type="submit" className="register-button" disabled={loading}>
              {loading ? 'Mendaftar...' : 'Daftar'}
            </button>
          </form>
          <div className="login-link">
            Sudah memiliki akun? <span onClick={handleNavigateLogin}>Login di sini</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage; 