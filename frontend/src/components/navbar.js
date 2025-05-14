import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css"; // Menggunakan CSS sendiri daripada index.css

export default function Navbar() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk status login
  const dropdownRef = useRef(null);

  // Cek status login saat komponen dimuat
  useEffect(() => {
    // Anda bisa menggantinya dengan logika sesuai sistem autentikasi
    // Contoh sederhana: cek apakah ada token di localStorage
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  // Menutup dropdown ketika klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLoginClick = () => {
    navigate("/login");
    setShowDropdown(false);
  };

  const handleDashboardClick = () => {
    navigate("/admin");
    setShowDropdown(false);
  };

  const handleLogoutClick = () => {
    // Tambahkan logika logout di sini
    localStorage.removeItem('authToken'); // Hapus token auth
    setIsLoggedIn(false);
    alert("Logout berhasil");
    navigate("/");
    setShowDropdown(false);
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

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="flex-row">
      <div className="regroup" ref={dropdownRef}>
        <div className="profile-bold" onClick={toggleDropdown} style={{ cursor: 'pointer' }} />
        {showDropdown && (
          <div className="dropdown-menu">
            {isLoggedIn ? (
              <>
                <div className="dropdown-item" onClick={handleDashboardClick}>Dashboard</div>
                <div className="dropdown-item" onClick={handleLogoutClick}>Logout</div>
              </>
            ) : (
              <div className="dropdown-item" onClick={handleLoginClick}>Login</div>
            )}
          </div>
        )}
        <div className="location-outline" />
      </div>
      <div className="rectangle" onClick={handleContactClick} style={{ cursor: 'pointer' }}>
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
