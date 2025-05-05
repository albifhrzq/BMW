import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Main() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/find");
  };

  return (
    <div className="main-container">
      <div className="flex-row">
        <div className="regroup">
          <div className="profile-bold" onClick={handleProfileClick} style={{ cursor: 'pointer' }} />
          <div className="location-outline" />
        </div>
        <div className="rectangle">
          <span className="contact-us">Contact Us</span>
        </div>
        <div className="rectangle-1">
          <span className="models">Models</span>
        </div>
        <div className="rectangle-2">
          <span className="more">More</span>
        </div>
        <div className="image" />
      </div>
      <span className="all-new-bmw">All New BMW Z4 M40i ROADSTER</span>
      <div className="flex-row-3">
        <div className="image-4" />
        <span className="build-your-drive">
          “Build Your Drive with the <br />
          Technology from new BMW vehicles that are currently avaible today at
          BMW Indonesia”
        </span>
        <div className="rectangle-5">
          <span className="find-your-bmw">Find Your BMW</span>
        </div>
      </div>
      <div className="rectangle-6">
        <span className="overview-bmw-m8">OVERVIEW OF THE BMW M8.</span>
        <div className="flex-row-c">
          <div className="zengine" />
          <div className="zsuspension" />
          <div className="zbrake" />
        </div>
        <div className="flex-row-c-7">
          <span className="adaptive-m-suspension">
            The lowered Adaptive M Suspension with variable shock absorber
            adjustment offers the choice between comfortable and sporty
            suspensions design.
          </span>
          <span className="m-sport-braking-system">
            The powerfull M Sport braking system features large brakes discs and
            exlusive blue-painted brake calipers with the M logo.{" "}
          </span>
          <span className="twinpower-turbo-engine">
            Commanding power, silky smooth running and a stirring sound are the
            hallmarks of the BMW TwinPower Turbo 3.0-littre inline 6-cylinder
            petrol engine
          </span>
        </div>
      </div>
      <div className="rectangle-8">
        <div className="flex-row-e">
          <span className="performance">Peformance</span>
          <div className="image-9" />
          <span className="handle-like-pro">Handle it like a pro</span>
          <span className="active-m-differential">
            The standard Active M Differential automatically reacts to driving
            conditions for more traction in real time. And the intelligent M
            xDrive allows you to adapt power distribution with distinct 4WD, 4WD
            Sport, and 2WD modes. The standard 6-piston front M compound brakes
            are connected to BMW’s Integrated Brake System for adjustable
            responsiveness and feel. Choose black or red calipers – or upgrade
            to gold-calipered Carbon Ceramic brakes. 
          </span>
        </div>
        <div className="flex-row-bb">
          <div className="image-a" />
          <span className="high-performance-engine">
            High-performance engine and transmission.
          </span>
          <span className="m-competition-gran-coupe">
            The M8 Competition Gran Coupe's 4.4-liter V-8 engine delivers 617
            horsepower and features track-ready cooling systems, a Twin Scroll
            Bi-Turbo, and a uniquely designed dual oil pan that maintains oil
            pressure during intense maneuvers.  An 8-speed M Sport Transmission
            adjusts from smooth to aggressive with the three-stage Drivelogic
            shifting system. Or take a hands-on approach with M gearshift
            paddles for manual shifting.
          </span>
        </div>
        <div className="line">
          <div className="vector" />
        </div>
        <div className="flex-row-cd">
          <span className="torque">TORQUE</span>
          <span className="sport-automatic-transmission">
            SPORT AUTOMATIC TRANSMISSION
          </span>
        </div>
        <div className="line-b">
          <div className="vector-c" />
        </div>
        <div className="image-d" />
        <div className="image-e" />
        <div className="image-f" />
        <div className="line-10">
          <div className="vector-11" />
        </div>
        <div className="flex-row-12">
          <span className="text-12">617</span>
          <span className="s">3.0 s</span>
          <span className="unreal-drive">An unreal drive, every time.</span>
        </div>
        <div className="flex-row-b">
          <div className="frame" />
          <span className="maximum-hp">MAXIMUM HP</span>
          <span className="mph">0-60 MPH</span>
          <span className="incredible-power">
            Bring incredible power to life with the precision only BMW M can
            deliver. The 2025 BMW Z4 Roadster Competition Gran Coupe embodies
            your ultimate driving desires.
          </span>
          <div className="line-13">
            <div className="vector-14" />
          </div>
          <span className="number-553">553</span>
          <span className="speed">8-Speed</span>
        </div>
      </div>
    </div>
  );
}
