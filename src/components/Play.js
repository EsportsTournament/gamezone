// src/pages/Play.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Play = () => {
    const { code } = useParams();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Your Game Code: {code}</h1>
        </div>
    );
};

export default Play;