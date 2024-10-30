import React from 'react';

import './applepage.scss';
import applehead from '../../assets/companies/applehead.jpg';
import applelogo from '../../assets/companies/logo3.jpg';

import apple1 from '../../assets/companies/ip1.jpg';
import apple2 from '../../assets/companies/ip2.jpg';
import apple3 from '../../assets/companies/ip3.jpg';

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";




const Applepage = () => {
    return (
        <div className="apple-page">
            <div className="header">
                <img src={applehead} alt="Apple Header" className="header-image" />
                <div className="header-content">
                    <img src={applelogo} alt="Apple Logo" className="logo" />
                    <h1>Apple</h1>
                    <button className="follow-button">Follow</button>
                </div>
            </div>
            <nav className="navbar">
                <span>Snapshot</span>
                <span>Why join us</span>
                <span>News</span>
                <span>2.7K Reviews</span>
                <span>1.6K Salaries</span>
                <span>519 Jobs</span>
                <span>Q&A</span>
            </nav>
            <div className="content">
                <div className="text-section">
                    <h2>You are why we <span>innovate</span></h2>
                    <button className="learn-more-button">Learn more</button>
                </div>
                <div className="images-section">
                    <img src={apple1} alt="Apple Image 1" className="image1" />
                    <img src={apple2} alt="Apple Image 2" className="image2" />
                    <img src={apple3} alt="Apple Image 3" className="image3" />
                </div>
            </div>
            <div className="info-section">
                <div className="main-info">
                    <div className="info-box">
                        <p>Founded</p>
                        <p>1976</p>
                    </div>
                    <div className="info-box">
                        <p>Headquarters</p>
                        <p>Cupertino, CA</p>
                    </div>
                    <div className="info-box">
                        <p>Company size</p>
                        <p>147,000+ people</p>
                    </div>
                    <div className="info-box">
                        <p>Website</p>
                        <p>www.apple.com</p>
                    </div>
                    <div className="info-box">
                        <p>Company type</p>
                        <p>Public</p>
                    </div>
                    <div className="info-box">
                        <p>Revenue</p>
                        <p>$394.3 billion (2022)</p>
                    </div>
                </div>
                <div className="social-box">
                    <p>Follow us</p>
                    <div className="social-media-icons">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Applepage;
