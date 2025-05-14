import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './find.css';
import Navbar from "../components/navbar";
import axios from 'axios';

export default function Find() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCars, setExpandedCars] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch categories
        console.log('Fetching categories...');
        const categoriesResponse = await axios.get('http://localhost:5000/api/categories');
        console.log('Categories response:', categoriesResponse.data);
        setCategories(categoriesResponse.data);
        
        // Fetch all cars
        console.log('Fetching cars...');
        const carsResponse = await axios.get('http://localhost:5000/api/cars');
        console.log('Cars response:', carsResponse.data);
        setCars(carsResponse.data);
        
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(`Failed to load data: ${err.message}`);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Group cars by category
  const carsByCategory = {};
  if (categories.length > 0 && cars.length > 0) {
    console.log('Grouping cars by category...');
    console.log('Categories:', categories);
    console.log('Cars:', cars);
    categories.forEach(category => {
      carsByCategory[category.id] = cars.filter(car => Number(car.categoryId) === Number(category.id));
      console.log(`Cars in category ${category.name} (${category.id}):`, carsByCategory[category.id]);
    });
  } else {
    console.log('Cannot group cars. Categories:', categories.length, 'Cars:', cars.length);
  }

  // Function to get proper image URL
  const getImageUrl = (url) => {
    if (!url) return '/images/cars/default-car.jpg';
    
    // Jika URL sudah lengkap (diawali dengan http:// atau https://)
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // Jika URL dimulai dengan /images/, ini adalah path dari backend
    if (url.startsWith('/images/')) {
      return `http://localhost:5000${url}`;
    }
    
    // Jika tidak ada awalan, tambahkan path dasar
    return `http://localhost:5000/images/cars/${url}`;
  };

  // Function to toggle car expansion
  const toggleCarExpand = (carId) => {
    setExpandedCars(prev => ({
      ...prev,
      [carId]: !prev[carId]
    }));
  };

  // Handle test drive and contact us buttons
  const handleTestDrive = (car) => {
    alert(`Anda akan mengatur test drive untuk ${car.name}`);
    // Implementasi lebih lanjut: redirect ke form test drive atau tampilkan modal
  };

  const handleContactUs = (car) => {
    // Redirect ke halaman contact dengan data mobil
    navigate('/contact', { state: { carInfo: car } });
  };

  if (loading) return <div className="main-container"><Navbar /><h2 style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</h2></div>;
  if (error) return <div className="main-container"><Navbar /><h2 style={{ textAlign: 'center', marginTop: '50px' }}>{error}</h2></div>;

  return (
    <div className="main-container">
      <Navbar />
      <div className="header">
        <h1 className="title">Find Your BMW.</h1>
      </div>

      {categories.map(category => (
        <React.Fragment key={category.id}>
          <div className="category">
            <h1>{category.name}</h1>
            <div className="car-group">
              {carsByCategory[category.id]?.map(car => (
                <div 
                  className={`car ${expandedCars[car.id] ? 'expanded' : ''}`} 
                  key={car.id}
                  onClick={() => toggleCarExpand(car.id)}
                >
                  <img 
                    src={getImageUrl(car.imageUrl)} 
                    alt={car.name} 
                    onError={(e) => {e.target.onerror = null; e.target.src = '/images/cars/default-car.jpg'}}
                  />
                  <div className="car-info">
                    <p className="car-name">{car.name}</p>
                    <p className="car-fuel">{car.fuelType}</p>
                    <p className="car-price">Start From Rp.{parseFloat(car.price).toLocaleString()}</p>
                  </div>
                  
                  {expandedCars[car.id] && (
                    <div className="car-actions" onClick={(e) => e.stopPropagation()}>
                      <button 
                        className="test-drive-btn"
                        onClick={() => handleTestDrive(car)}
                      >
                        Test Drive
                      </button>
                      <button 
                        className="contact-btn"
                        onClick={() => handleContactUs(car)}
                      >
                        Contact Us
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {category.id !== categories[categories.length - 1].id && <hr className="divider" />}
        </React.Fragment>
      ))}
    </div>
  );
}