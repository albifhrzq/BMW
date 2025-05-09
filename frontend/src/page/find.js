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
      <div className="header">
        <h1 className="title">Find Your BMW.</h1>
      </div>


      <div className="category">
        <h1>Z4</h1>
        <div className="car-group">
          <div className="car">
            <img src="./images/bmw_z4_roadster.png" alt="BMW Z4 Roadster" />
            <p>
              BMW Z4 Roadster<br />
              Gasoline<br />
              Start From Rp.1.843.000.000
            </p>
          </div>
          <div className="car">
            <img src="./images/bmw_z4_m401.png" alt="BMW Z4 M40i Roadster" />
            <p>
              BMW Z4 M40i Roadster<br />
              Gasoline<br />
              Start From Rp.2.067.000.000
            </p>
          </div>
        </div>
      </div>

      <hr className="divider" />
      <div className="category">
        <h1>BMW i</h1>
        <div className="car-group">
          <div className="car">
            <img src="./images/bmw_ix.png" alt="BMW iX" />
            <p>
              BMW iX<br />
              Full-Electric<br />
              Start From Rp.2.545.000.000
            </p>
          </div>
          <div className="car">
            <img src="./images/bmw_i7.png" alt="BMW i7" />
            <p>
              BMW i7<br />
              Full-Electric<br />
              Start From Rp.3.415.000.000
            </p>
          </div>
          <div className="car">
            <img src="./images/bmw_i5.png" alt="BMW i5" />
            <p>
              BMW i5<br />
              Full-Electric<br />
              Start From Rp.2.225.000.000
            </p>
          </div>
          <div className="car">
            <img src="./images/bmw_i5_m60.png" alt="BMW i5 M60 xDrive" />
            <p>
              BMW i5 M60 xDrive<br />
              Full-Electric<br />
              Start From Rp.2.830.000.000
            </p>
          </div>
          <div className="car">
            <img src="./images/bmw_i4.png" alt="BMW i4" />
            <p>
              BMW i4<br />
              Full-Electric<br />
              Start From Rp.1.841.000.000
            </p>
          </div>
          <div className="car">
            <img src="./images/bmw_ix1.png" alt="BMW iX1" />
            <p>
              BMW iX1<br />
              Full-Electric<br />
              Start From Rp.2.225.000.000
            </p>
          </div>
        </div>
      </div>

      <hr className="divider" />
      <div className="category">
        <h1>BMW X</h1>
        <div className="car-group">
          <div className="car">
            <img src="./images/bmw_xm.png" alt="BMW XM" />
            <p>
              BMW XM<br />
              Plug-in-Hybrid<br />
              Start From Rp.8.472.000.000
            </p>
          </div>
          <div className="car">
            <img src="./images/bmw_x1.png" alt="BMW X7" />
            <p>
              BMW X1<br />
              Full-Electric<br />
              Start From Rp.1.025.000.000
            </p>
          </div>
          <div className="car">
            <img src="./images/bmw_x3.png" alt="BMW X3" />
            <p>
              BMW X3<br />
              Full-Electric<br />
              Start From Rp.1.375.000.000
            </p>
          </div>
          <div className="car">
            <img src="./images/bmw_ix.png" alt="BMW iX" />
            <p>
              BMW iX<br />
              Full-Electric<br />
              Start From Rp.2.545.000.000
            </p>
          </div>
          <div className="car">
            <img src="./images/bmw_ix1.png" alt="BMW iX1" />
            <p>
              BMW iX1<br />
              Full-Electric<br />
              Start From Rp.1.379.000.000
            </p>
          </div>
          <div className="car">
            <img src="./images/bmw_x5.png" alt="BMW X5" />
            <p>
              BMW X5<br />
              Full-Electric<br />
              Start From Rp.2.050.000.000
            </p>
          </div>
        </div>
      </div>

      <hr className="divider" />
      <div className="category">
        <h1>BMW M</h1>
        <div className="car-group">
          <div className="car">
            <img src="./images/bmw_m2_coupe.png" alt="BMW m2" />
            <p>
              BMW M2 Coupe<br />
              Gasoline<br />
              Start From Rp.2.080.000.000
            </p>
          </div>
          <div className="car">
            <img src="./images/bmw_m3.png" alt="BMW m3" />
            <p>
              BMW M3 Comp Touring<br />
              Gasoline<br />
              Start From Rp.2.885.000.000
            </p>
          </div>
          <div className="car">
            <img src="./images/bmw_m4.png" alt="BMW m4" />
            <p>
              BMW M4 CS<br />
              Gasoline<br />
              Start From Rp.3.499.000.000
            </p>
          </div>
          <div className="car">
            <img src="./images/bmw_4.png" alt="BMW 4" />
            <p>
              BMW M4 Coupe<br />
              Gasoline<br />
              Start From Rp.2.864.000.000
            </p>
          </div>
          <div className="car">
            <img src="path/to/x3.jpg" alt="BMW iX1" />
            <p>
              BMW i5 M60 xDrive<br />
              Full-Electric<br />
              Start From Rp.2.830.000.000
            </p>
          </div>
          <div className="car">
            <img src="path/to/x3.jpg" alt="BMW X5" />
            <p>
              BMW M4 Convertible<br />
              Gasolinel<br />
              Start From Rp.3.251.000.000
            </p>
          </div>
        </div>
      </div>

      <hr className="divider" />
      <div className="category">
        <h1>BMW 7 Series</h1>
        <div className="car-group">
          <div className="car">
            <img src="path/to/xm.jpg" alt="BMW XM" />
            <p>
              BMW 7 Series Sedan<br />
              Gasoline<br />
              Start From Rp.2.741.000.000
            </p>
          </div>
        </div>
      </div>

      <hr className="divider" />
<div className="category">
  <h1>BMW 5 Series</h1>
  <div className="car-group">
    <div className="car">
      <img src="path/to/xm.jpg" alt="BMW XM" />
      <p>
        BMW 5 Series Sedan<br />
        Gasoline<br />
        Start From Rp.1.507.000.000
      </p>
    </div>
  </div>
</div>

<hr className="divider" />
<div className="category">
        <h1>BMW 4 Series</h1>
        <div className="car-group">
          <div className="car">
            <img src="path/to/z4-roadster.jpg" alt="BMW Z4 Roadster" />
            <p>
              BMW 4 Series Coupe<br />
              Gasoline<br />
              Start From Rp.1.771.000.000
            </p>
          </div>
          <div className="car">
            <img src="path/to/z4-m40i-roadster.jpg" alt="BMW Z4 M40i Roadster" />
            <p>
              BMW 4 Series Convertible<br />
              Gasoline<br />
              Start From Rp.1.934.000.000
            </p>
          </div>
        </div>
      </div>

<hr className="divider" />
<div className="category">
  <h1>BMW 3 Series</h1>
  <div className="car-group">
    <div className="car">
      <img src="path/to/xm.jpg" alt="BMW XM" />
      <p>
        BMW 3 Series Sedan<br />
        Gasoline<br />
        Start From Rp.1.205.000.000
      </p>
    </div>
  </div>
</div>

<hr className="divider" />
<div className="category">
        <h1>BMW 2 Series</h1>
        <div className="car-group">
          <div className="car">
            <img src="path/to/z4-roadster.jpg" alt="BMW Z4 Roadster" />
            <p>
              BMW M2 Coupe<br />
              Gasoline<br />
              Start From Rp.1.423.000.000
            </p>
          </div>
          <div className="car">
            <img src="path/to/z4-m40i-roadster.jpg" alt="BMW Z4 M40i Roadster" />
            <p>
              BMW M2 Gran Coupe<br />
              Gasoline<br />
              Start From Rp.935.000.000
            </p>
          </div>
        </div>
      </div>
      <hr className="divider" />

    </div>

    
  );
}