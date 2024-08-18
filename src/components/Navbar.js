import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo1.png'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <nav className="navbar-center">
        <ul className="navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/freelancers">Freelancers</Link></li>
          <li><Link to="/companies">Companies</Link></li>
          <li><Link to="/hackathon">Hackathon</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="navbar-right">
        <button>Login</button>
      </div>
    </header>
  );
};

export default Navbar;
