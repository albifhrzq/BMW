import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './page/loginpage';
import RegisterPage from './page/register';
import MainPage from './page/index';
import FindPage from './page/find';
import AdminPage from './page/admin';
import ContactPage from './page/contact';
import DetailPage from './page/detail';
import TestPage from './page/test';


const AppRoutes = ({ isLoggedIn, setIsLoggedIn }) => {
  // Fungsi untuk menangani login
  const handleLogin = () => {
    setIsLoggedIn(true);
    // Redirect ke halaman utama setelah login
    return <Navigate to="/" />;
  };

  return (
    <Router>
      <Routes>
        {/* Landing page sebagai halaman utama */}
        <Route 
          path="/" 
          element={<MainPage />} 
        />
        
        {/* Rute untuk halaman Find Your BMW */}
        <Route 
          path="/find" 
          element={<FindPage />}
        />

        {/* Rute untuk halaman detail */}
        <Route 
          path="/detail" 
          element={<DetailPage />}
        />

        {/* Rute untuk halaman test */}
        <Route 
          path="/test" 
          element={<TestPage />}
        />

        {/* Rute untuk halaman login */}
        <Route 
          path="/login" 
          element={<LoginPage onLogin={handleLogin} />} 
        />

        {/* Rute untuk halaman register */}
        <Route 
          path="/register" 
          element={<RegisterPage />} 
        />

        {/* Rute untuk halaman contact */}
        <Route 
          path="/contact" 
          element={<ContactPage />}
        />

        {/* Rute untuk halaman admin */}
        <Route 
          path="/admin" 
          element={<AdminPage />}
        />

        {/* Rute fallback jika URL tidak ditemukan */}
        <Route 
          path="*" 
          element={<Navigate to="/" />} 
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes; 