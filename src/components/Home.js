// src/pages/Home.js
import React, { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import "./Home.css";
import { Link, Navigate } from "react-router";

// import React, { useState } from 'react';

const Home = () => {
  const [code, setCode] = useState("");

  const handleSubmitCode = () => {
    if (code) {
      Navigate(`/play/${code}`);
    }
  };
  return (
    <div className="home-page">
      <header className="header">
        <div className="header-buttons">
          <button className="login-button">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </header>

      <div className="center-box">
        <h1 className="center-title">GameZone</h1>
        <div className="game-pin-box">
          <input
            type="text"
            placeholder="Game PIN"
            value={code}
            className="game-pin-input"
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={handleSubmitCode} className="enter-button">
            Enter
          </button>
        </div>
      </div>

      <footer className="footer">
        <p>
          <Link to="/login">Login</Link> to Create your own GameZone for FREE
        </p>
        <p>© GameZone 2025</p>
      </footer>
    </div>
  );
};

export default Home;
