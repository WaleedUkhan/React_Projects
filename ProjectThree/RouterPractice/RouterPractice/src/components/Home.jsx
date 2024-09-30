// src/components/Home.jsx
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1>WALEED KHAN</h1>
        <h2>MERN STACK ENTHUSIAST</h2>
        <p>My Name is Waleed khan and I am the Student of Computer Science, Looking for Internship</p>
      </div>
      <div className="image-section">
        <img src="img1.JPG" alt="Description" />
      </div>
    </div>
  );
};

export default Home;
