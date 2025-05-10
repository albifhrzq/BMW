import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './find.css';

export default function Main() {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate("/");
  };

  // State untuk menyimpan status collapse setiap kategori
  const [collapsedCategories, setCollapsedCategories] = useState({});

  const toggleCollapse = (category) => {
    setCollapsedCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  // Data kategori mobil
  const carCategories = [
    { name: 'Z4', cars: [
      { img: "./images/bmw_z4_roadster.png", name: "BMW Z4 Roadster", type: "Gasoline", price: "Rp.1.843.000.000" },
      { img: "./images/bmw_z4_m401.png", name: "BMW Z4 M40i Roadster", type: "Gasoline", price: "Rp.2.067.000.000" }
    ]},
    { name: 'BMW i', cars: [
      { img: "./images/bmw_ix.png", name: "BMW iX", type: "Full-Electric", price: "Rp.2.545.000.000" },
      { img: "./images/bmw_i7.png", name: "BMW i7", type: "Full-Electric", price: "Rp.3.415.000.000" },
      { img: "./images/bmw_i5.png", name: "BMW i5", type: "Full-Electric", price: "Rp.2.225.000.000" },
      { img: "./images/bmw_i5_m60.png", name: "BMW i5 M60 xDrive", type: "Full-Electric", price: "Rp.2.830.000.000" }
    ]},
    { name: 'BMW X', cars: [
      { img: "./images/bmw_xm.png", name: "BMW XM", type: "Plug-in-Hybrid", price: "Rp.8.472.000.000" },
      { img: "./images/bmw_x1.png", name: "BMW X1", type: "Full-Electric", price: "Rp.1.025.000.000" },
      { img: "./images/bmw_x3.png", name: "BMW X3", type: "Full-Electric", price: "Rp.1.375.000.000" }
    ]},
    { name: 'BMW M', cars: [
      { img: "./images/bmw_m2_coupe.png", name: "BMW M2 Coupe", type: "Gasoline", price: "Rp.2.080.000.000" },
      { img: "./images/bmw_m3.png", name: "BMW M3 Comp Touring", type: "Gasoline", price: "Rp.2.885.000.000" },
      { img: "./images/bmw_m4.png", name: "BMW M4 CS", type: "Gasoline", price: "Rp.3.499.000.000" }
    ]},
    { name: 'BMW 7 Series', cars: [
      { img: "./images/bmw_7series_sedan.png", name: "BMW 7 Series Sedan", type: "Gasoline", price: "Rp.2.741.000.000" }
    ]},
    { name: 'BMW 5 Series', cars: [
      { img: "./images/bmw_5series_sedan.png", name: "BMW 5 Series Sedan", type: "Gasoline", price: "Rp.1.507.000.000" }
    ]},
    { name: 'BMW 4 Series', cars: [
      { img: "./images/bmw_4series_coupe.png", name: "BMW 4 Series Coupe", type: "Gasoline", price: "Rp.1.771.000.000" },
      { img: "./images/bmw_4series_convertible.png", name: "BMW 4 Series Convertible", type: "Gasoline", price: "Rp.1.934.000.000" }
    ]},
    { name: 'BMW 3 Series', cars: [
      { img: "./images/bmw_3series_sedan.png", name: "BMW 3 Series Sedan", type: "Gasoline", price: "Rp.1.205.000.000" }
    ]},
    { name: 'BMW 2 Series', cars: [
      { img: "./images/bmw_m2_coupe.png", name: "BMW M2 Coupe", type: "Gasoline", price: "Rp.1.423.000.000" },
      { img: "./images/bmw_m2_gran_coupe.png", name: "BMW M2 Gran Coupe", type: "Gasoline", price: "Rp.935.000.000" }
    ]}
  ];

  return (
    <div className="main-container">
      <div className="header">
        <h1 className="title">Find Your BMW.</h1>
      </div>

      {carCategories.map(category => (
        <div key={category.name} className="category">
          <h1 onClick={() => toggleCollapse(category.name)}>{category.name}</h1>
          {!collapsedCategories[category.name] && (
            <div className="car-group">
              {category.cars.map((car, index) => (
                <div key={index} className="car">
                  <img src={car.img} alt={car.name} />
                  <p>{car.name}<br />{car.type}<br />Start From {car.price}</p>
                </div>
              ))}
            </div>
          )}
          <hr className="divider" />
        </div>
      ))}
    </div>
  );
}