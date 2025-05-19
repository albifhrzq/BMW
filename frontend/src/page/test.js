import React, { useState } from 'react';
import './test.css';

const TestDriveForm = () => {
  const [formData, setFormData] = useState({
    model: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    testDriveDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your request. Your preferred dealer will be in touch shortly.');
  };

  return (
    <div className="test-drive-container">
      <h1>Book a Test Drive</h1>
      <p className="intro-text">
        Simply complete the form below with the BMW of your choice and your preferred dealer will be in touch with you shortly.
      </p>
      <p className="required-text">Fields marked with * are required.</p>
      
      <div className="form-and-map-container">
        <form onSubmit={handleSubmit} className="test-drive-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="model">Which model are you interested in?</label>
              <select 
                id="model" 
                name="model" 
                value={formData.model} 
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select a model</option>
                <option value="1 Series">1 Series</option>
                <option value="2 Series">2 Series</option>
                <option value="3 Series">3 Series</option>
                <option value="4 Series">4 Series</option>
                <option value="5 Series">5 Series</option>
                <option value="7 Series">7 Series</option>
                <option value="X1">X1</option>
                <option value="X3">X3</option>
                <option value="X5">X5</option>
                <option value="X7">X7</option>
                <option value="Z4">Z4</option>
                <option value="i4">i4</option>
                <option value="i7">i7</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="mobile">Mobile*</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="testDriveDate">Preferred Test Drive date *</label>
              <input
                type="date"
                id="testDriveDate"
                name="testDriveDate"
                value={formData.testDriveDate}
                onChange={handleChange}
                className="form-control"
                required
              />
              <span className="date-format">dd/mm/yyyy</span>
            </div>
          </div>
          
          <button type="submit" className="submit-btn">Submit</button>
        </form>
        
        <div className="map-section">
          <h3>Maps @ALBI</h3>
          {/* Map integration would go here */}
          <div className="map-placeholder">
            [Map would be displayed here]
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestDriveForm;