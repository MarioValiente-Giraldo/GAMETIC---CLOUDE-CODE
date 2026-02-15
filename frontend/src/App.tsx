import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Games from './pages/Games';
import './index.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </div>
  );
}

export default App;
