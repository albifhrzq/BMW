import React from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css"; // Menggunakan CSS sendiri daripada index.css

export default function Navbar() {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/login");
  };

  const handleFindClick = () => {
    navigate("/find");
  };

  const handleAdminClick = () => {
    navigate("/more");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="flex-row">
      <div className="regroup">
        <div className="profile-bold" onClick={handleProfileClick} style={{ cursor: 'pointer' }} />
        <div className="location-outline" />
      </div>
      <div className="rectangle">
        <span className="contact-us">Contact Us</span>
      </div>
      <div className="rectangle-1">
        <span className="models" onClick={handleFindClick} style={{ cursor: 'pointer' }}>Models</span>
      </div>
      <div className="rectangle-2">
        <span className="more" onClick={handleAdminClick} style={{ cursor: 'pointer' }}>More</span>
      </div>
      <div className="image" onClick={handleHomeClick} style={{ cursor: 'pointer' }} />
    </div>
  );
}
