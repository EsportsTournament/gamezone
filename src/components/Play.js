// src/pages/Play.js
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';


const socket = io('http://localhost:5000', { transports: ['websocket'] });
const Play = () => {
    const { code } = useParams();
    const userName = "pookie"
    const [selectedWord, setSelectedWord] = useState('');
    const [words, setWords] = useState(['Apple', 'Banana', 'Cherry']); // Example words

    useEffect(() => {
        console.log("use effect working", code);
        
        // Join room
        socket.emit('join_room', { code, userName });

        // Listen for updates
        socket.on('word_selected', ({ selectedWord }) => {
            setSelectedWord(selectedWord);
        });

        socket.on('user_joined', ({ userName }) => {
            console.log(`${userName} joined the room.`);
        });

        return () => {
            socket.disconnect();
        };
    }, [code]);

    const handleWordSelect = (word) => {
        setSelectedWord(word);
        socket.emit('word_selected', { code, selectedWord: word });
    };

    return (
        <div>
            <h1>Room Code: {code}</h1>
            <h2>Selected Word: {selectedWord}</h2>
            <div>
                {words.map((word) => (
                    <button key={word} onClick={() => handleWordSelect(word)}>
                        {word}
                    </button>
                ))}
            </div>
        </div>
    );
};


export default Play;

