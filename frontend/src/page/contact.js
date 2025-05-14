import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './contact.css';
import Navbar from '../components/navbar';

export default function ContactPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: '',
    carInterest: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Jika ada data mobil dari halaman Find
  useEffect(() => {
    if (location.state && location.state.carInfo) {
      const car = location.state.carInfo;
      setFormData(prev => ({
        ...prev,
        subject: `Pertanyaan tentang ${car.name}`,
        carInterest: car.name,
        message: `Saya tertarik dengan ${car.name} dan ingin informasi lebih lanjut.`
      }));
    }
  }, [location.state]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nama harus diisi';
    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'No. Telepon harus diisi';
    if (!formData.message.trim()) newErrors.message = 'Pesan harus diisi';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Di sini Anda bisa menambahkan logika untuk mengirim data ke server
      console.log('Form data submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form setelah beberapa saat
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          subject: '',
          carInterest: ''
        });
      }, 5000); // Reset setelah 5 detik
    }
  };

  return (
    <div className="contact-container">
      <Navbar />
      
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Hubungi kami untuk informasi lebih lanjut tentang produk BMW</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="form-success">
              <h2>Terima Kasih!</h2>
              <p>Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda.</p>
              <button onClick={() => navigate('/')}>Kembali ke Beranda</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">No. Telepon <span className="required">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subjek</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="carInterest">Model BMW yang Diminati</label>
                <select
                  id="carInterest"
                  name="carInterest"
                  value={formData.carInterest}
                  onChange={handleChange}
                >
                  <option value="">-- Pilih Model --</option>
                  <option value="BMW i4">BMW i4</option>
                  <option value="BMW iX">BMW iX</option>
                  <option value="BMW i7">BMW i7</option>
                  <option value="BMW X3">BMW X3</option>
                  <option value="BMW X5">BMW X5</option>
                  <option value="BMW X7">BMW X7</option>
                  <option value="BMW 3 Series">BMW 3 Series</option>
                  <option value="BMW 5 Series">BMW 5 Series</option>
                  <option value="BMW 7 Series">BMW 7 Series</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Pesan <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              <div className="form-actions">
                <button type="submit" className="submit-btn">Kirim Pesan</button>
                <button type="button" className="cancel-btn" onClick={() => navigate(-1)}>Batal</button>
              </div>
            </form>
          )}
        </div>
        
        <div className="contact-info">
          <div className="info-card">
            <h3>Alamat Kami</h3>
            <p>BMW Indonesia</p>
            <p>Jl. Sultan Iskandar Muda No. 99</p>
            <p>Jakarta Selatan, 12240</p>
          </div>
          
          <div className="info-card">
            <h3>Kontak Langsung</h3>
            <p>Telepon: +62 21 2555 7555</p>
            <p>Email: customercare@bmw.co.id</p>
            <p>Jam Layanan: 08.00 - 17.00 WIB</p>
          </div>
          
          <div className="info-card">
            <h3>Media Sosial</h3>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 