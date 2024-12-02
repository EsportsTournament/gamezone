import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Play from './components/Play';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/play/:code" element={<Play />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;
