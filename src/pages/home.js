import React from 'react'; 
import '../sass/home.scss';

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="home-content">
        <h1>Find Jobs</h1>
        <p>Hire Experts or be hired in sales & marketing|</p>
        <div className="search-bar">
          <input type="text" placeholder="Tell us what you are looking for?" />
        </div>
      </div>
    </div>
  );
};

export default Home;
