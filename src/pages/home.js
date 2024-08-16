import React from 'react';
import Navbar from '../components/Navbar';  

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-content">
        <h1>Welcome to My Website</h1>
        <p>This is the home page of my website.</p>
      </div>
    </div>
  );
};

export default Home;
