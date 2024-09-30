// File: src/components/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/footer.scss';
import '../css/footer.css';
import logo from '../assets/logo/logo1.png'; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>For Candidates</h4>
            <ul>
              <li><Link to="#">Browse Jobs</Link></li>
              <li><Link to="#">Browse Categories</Link></li>
              <li><Link to="#">Candidate Dashboard</Link></li>
              <li><Link to="#">Job Alerts</Link></li>
              <li><Link to="#">My Bookmarks</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>For Employers</h4>
            <ul>
              <li><Link to="#">Browse Candidates</Link></li>
              <li><Link to="#">Employer Dashboard</Link></li>
              <li><Link to="#">Add Job</Link></li>
              <li><Link to="#">Job Packages</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Terms of Use</Link></li>
              <li><Link to="#">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-column newsletter">
            <h4>Sign Up For a Newsletter</h4>
            <p>Weekly breaking news, analysis, and cutting-edge advice on job searching.</p>
            <form>
              <input type="email" placeholder="Enter your email here" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
        <ul className="social-icons">
          <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
