// src/App.jsx
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Github from './components/Github';
import './App.css'

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
          <li><NavLink to="/github" className={({ isActive }) => isActive ? 'active' : ''}>Github</NavLink></li>
        </ul>
      </nav>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/github" element={<Github />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
