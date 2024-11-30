// src/pages/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [name, setName] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    const generateCode = () => {
        const newCode = Math.floor(100000 + Math.random() * 900000).toString();
        navigate(`/play/${newCode}`);
    };

    const handleEnterCode = () => {
        setShowInput(true);
    };

    const handleSubmitCode = () => {
        if (code) {
            navigate(`/play/${code}`);
        }
    };

    return (
        <div className="home-container">
            <h1>Welcome to Antarakshari</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="name-input"
            />
            <button
                onClick={handleEnterCode}
                disabled={!name}
                className="enter-code-button"
            >
                Enter Code
            </button>
            {showInput && (
                <div className="code-input-container">
                    <input
                        type="text"
                        placeholder="Enter Code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="code-input"
                    />
                    <button onClick={handleSubmitCode} className="submit-code-button">
                        &#x27A4;
                    </button>
                </div>
            )}
            <button
                onClick={generateCode}
                disabled={!name}
                className="generate-code-button"
            >
                Generate Code
            </button>
        </div>
    );
};

export default Home;