import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure Link is imported
import logo from '../assets/logo/logo1.png';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <nav className="navbar-center">
        <ul className="navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li 
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <Link to="/freelancers">Freelancers</Link>
            {dropdownVisible && (
              <ul className="dropdown-menu">
                <li><Link to="/freelancer/byskills">By Skills</Link></li>
                <li><Link to="/freelancer/bylocation">By Locations</Link></li>
                {/* Uncomment the following lines if you want to include more dropdown items */}
                {/* <li><Link to="/freelancer/bycategories">By Categories</Link></li> */}
                {/* <li><Link to="/freelancers/view-more">View More</Link></li> */}
              </ul>
            )}
          </li>
          <li><Link to="/companies">Companies</Link></li>
          <li><Link to="/hackathon">Hackathon</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="navbar-right">
        <Link to="/loginregister">
          <button>Login</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
