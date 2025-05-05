import React from 'react';
import { useNavigate } from "react-router-dom";
import './find.css';

export default function Main() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/");
  };

  return (
    <div className="main-container">
      <h1>Find Your BMW.</h1>
      <div className="category">
        <h2>Z4</h2>
        <div className="car">
          <img src="path/to/z4-roadster.jpg" alt="BMW Z4 Roadster" />
          <p>BMW Z4 Roadster<br />Gasoline<br />Start From Rp.1.843.000.000</p>
        </div>
        <div className="car">
          <img src="path/to/z4-m40i-roadster.jpg" alt="BMW Z4 M40i Roadster" />
          <p>BMW Z4 M40i Roadster<br />Gasoline<br />Start From Rp.2.067.000.000</p>
        </div>
      </div>

      <div className="category">
        <h2>BMW i</h2>
        <div className="car">
          <img src="path/to/ix.jpg" alt="BMW iX" />
          <p>BMW iX<br />Full-Electric<br />Start From Rp.2.545.000.000</p>
        </div>
        <div className="car">
          <img src="path/to/i7.jpg" alt="BMW i7" />
          <p>BMW i7<br />Full-Electric<br />Start From Rp.3.415.000.000</p>
        </div>
        <div className="car">
          <img src="path/to/i5.jpg" alt="BMW i5" />
          <p>BMW i5<br />Full-Electric<br />Start From Rp.2.225.000.000</p>
        </div>
        <div className="car">
          <img src="path/to/i5-m60-xdrive.jpg" alt="BMW i5 M60 xDrive" />
          <p>BMW i5 M60 xDrive<br />Full-Electric<br />Start From Rp.2.830.000.000</p>
        </div>
        <div className="car">
          <img src="path/to/i4.jpg" alt="BMW i4" />
          <p>BMW i4<br />Full-Electric<br />Start From Rp.1.841.000.000</p>
        </div>
        <div className="car">
          <img src="path/to/ix1.jpg" alt="BMW iX1" />
          <p>BMW iX1<br />Full-Electric<br />Start From Rp.2.225.000.000</p>
        </div>
      </div>

      <div className="category">
        <h2>BMW X</h2>
        <div className="car">
          <img src="path/to/xm.jpg" alt="BMW XM" />
          <p>BMW XM<br />Plug-in-Hybrid<br />Start From Rp.8.472.000.000</p>
        </div>
        <div className="car">
          <img src="path/to/x7.jpg" alt="BMW X7" />
          <p>BMW X7<br />Full-Electric<br />Start From Rp.1.025.000.000</p>
        </div>
        <div className="car">
          <img src="path/to/x3.jpg" alt="BMW X3" />
          <p>BMW X3<br />Full-Electric<br />Start From Rp.1.375.000.000</p>
        </div>
      </div>
    </div>
  );
}