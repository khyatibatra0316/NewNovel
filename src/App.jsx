// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';
import Chapter1 from './components/Chapter1'
import Chapter2 from './components/Chapter2';
import Chapter3 from './components/Chapter3';
import Start from './components/Start';
import StoryPage1 from './components/StoryPage1';

// import Bound from './components/Bound';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        
        <Route path="/c4" element={<Start />} />
        <Route path="/c1" element={<Chapter1 />} />
        <Route path="/c2" element={<Chapter2 />} />
        <Route path="/c3" element={<Chapter3 />} />
        <Route path="/story/:id" element={<StoryPage1/>} />
        {/* <Route path="/story/:id" element={<Bound/>} /> */}


      </Routes>
    </Router>
  );
}

export default App;
