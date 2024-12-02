// src/pages/Home.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Link } from "react-router";

import React from 'react';


const Home = () => {
  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="header">
        <div className="header-buttons">
          <button className="login-button"><Link to='/login'>Login</Link></button>
        </div>
      </header>

      {/* Center Section */}
      <div className="center-box">
        <h1 className="center-title">GameZone</h1>
        <div className="game-pin-box">
          <input
            type="text"
            placeholder="Game PIN"
            className="game-pin-input"
          />
          <button className="enter-button">Enter</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
         <Link to='/login'>Login</Link> to Create your own GameZone for FREE
        </p>
        <p>© GameZone 2025</p>
      </footer>
    </div>
  );
};









// const Home = () => {
//     const [name, setName] = useState('');
//     const [showInput, setShowInput] = useState(false);
//     const [code, setCode] = useState('');
//     const navigate = useNavigate();

//     const generateCode = () => {
//         const newCode = Math.floor(100000 + Math.random() * 900000).toString();
//         navigate(`/play/${newCode}`);
//     };

//     const handleEnterCode = () => {
//         setShowInput(true);
//     };

//     const handleSubmitCode = () => {
//         if (code) {
//             navigate(`/play/${code}`);
//         }
//     };

//     return (
//         <div className="home-container">
//             <h1>Welcome to Antarakshari</h1>
//             <input
//                 type="text"
//                 placeholder="Enter your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="name-input"
//             />
//             <button
//                 onClick={handleEnterCode}
//                 disabled={!name}
//                 className="enter-code-button"
//             >
//                 Enter Code
//             </button>
//             {showInput && (
//                 <div className="code-input-container">
//                     <input
//                         type="text"
//                         placeholder="Enter Code"
//                         value={code}
//                         onChange={(e) => setCode(e.target.value)}
//                         className="code-input"
//                     />
//                     <button onClick={handleSubmitCode} className="submit-code-button">
//                         &#x27A4;
//                     </button>
//                 </div>
//             )}
//             <button
//                 onClick={generateCode}
//                 disabled={!name}
//                 className="generate-code-button"
//             >
//                 Generate Code
//             </button>
//         </div>
//     );
// };

export default Home;