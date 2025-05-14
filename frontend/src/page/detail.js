import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./detail.css";

export default function Main() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "./images/gambar1ungu.png",
    "./images/gambar2ungu.png",
    "./images/gambar3ungu.png",
    "./images/gambar4ungu.png"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleProfileClick = () => {
    navigate("/");
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="offering-container">
      <div className="header">
        <h1>An unreal drive, every time.</h1>
        <div className="models">
          <h2>Models</h2>
        </div>
      </div>

      <div className="content-container">
        <div className="carousel-container">
          <div id="carouselExampleIndicators" className="carousel">
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={currentImageIndex === index ? "active" : ""}
                  onClick={() => goToImage(index)}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={images[currentImageIndex]} className="d-block w-100" alt="BMW Z4 Roadster" />
              </div>
            </div>
            
            <button 
              className="carousel-control-prev" 
              type="button" 
              onClick={prevImage}
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button 
              className="carousel-control-next" 
              type="button" 
              onClick={nextImage}
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="text-content">
          {/* Rest of your content remains the same */}
          <div className="title-section">
            <h1 className="unreal-title">BMW Z4 ROADSTER</h1>
          </div>

          <p className="description">
            Bring incredible power to life with the precision only BMW Z4 can deliver. The 2025 BMW Z4 Roadster Competition Gran Coupe embodies your ultimate driving desires.
          </p>

          <div className="specs">
            <div className="spec-item">
              <div className="spec-value">382</div>
              <div className="spec-label">MAXIMUM HP</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">3.9 s</div>
              <div className="spec-label">0-100 km/h</div>
            </div>
            
            <div className="spec-item">
              <div className="spec-value">369</div>
              <div className="spec-label">TORQUE</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">8-Speed</div>
              <div className="spec-label">SPORT AUTOMATIC TRANSMISSION</div>
            </div>
          </div>

          <div className="price-section">
            <h3 className="price">Start From Rp.1.843.000.000</h3>
            <div className="buttons">
              <button className="buy-btn">Buy</button>
              <button className="test-drive-btn">Test Drive</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}