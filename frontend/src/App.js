import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      <div className="left-section">
        <img src="./images/bmw-logo.png" alt="BMW Logo" className="bmw-logo" />
        <h1 className="performance-text">THE <span className="highlight">PERFORMANCE</span> <br></br>TO GO <span className="highlight">FAST.</span></h1>
        <h1 className="technology-text">THE TECHNOLOGY <br></br><span className="highlight">TO GO FAR.</span></h1>
      </div>
      <div className="right-section">
        <blockquote className="quote">
          "BMW technology pushes the limits of the future, blending unmatched performance, innovation, and sustainability for a smarter, more efficient driving experience."
        </blockquote>
        <img src="./images/bmw-i8.png" alt="BMW i8" className="bmw-i8" />
        <h2>BMW i8</h2>
      </div>
    </div>
  );
}

export default App;