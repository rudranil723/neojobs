import React, { useState } from 'react';
import './byskills.scss';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import heroImage from '../assets/freelancer/Hero Marketing images.webp'; 
import graphicDesign from '../assets/freelancer/graphic-design.webp';
import mobileDev from '../assets/freelancer/mobile.webp';
import softwareDev from '../assets/freelancer/sd.webp';
import websiteDesign from '../assets/freelancer/website.webp';
import threeDArtist from '../assets/freelancer/3d.webp';

import handshake from '../assets/freelancer/icon1.jpg';
import bulb from '../assets/freelancer/icon2.jpg';
import support from '../assets/freelancer/icon3.jpg';
import search from '../assets/freelancer/icon4.jpg';



const Skills = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const navigate = useNavigate();  // Initialize useNavigate

    const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    // Updated the navigate route to freelancerprofile
    const handleGetStartedClick = () => {
        console.log('Get Started button clicked');
        navigate('/LoginRegister');  // Navigate to the freelancer profile page
    };

    return (
        <div>
            {/* New Dropdown Navbar */}
            <div className="navbar-container">
                <ul className="main-menu">
                    <li
                        onMouseEnter={() => handleMouseEnter('design')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Graphic Designer
                        {activeMenu === 'design' && (
                            <ul className="dropdown-menu">
                                <li>Logo Design</li>
                                <li>Website Design</li>
                                <li>UI/UX Design</li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('writing')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Writing & Translation
                        {activeMenu === 'writing' && (
                            <ul className="dropdown-menu">
                                <li>Copywriting</li>
                                <li>Content Writing</li>
                                <li>Translation</li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('programming')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Programming & Tech
                        {activeMenu === 'programming' && (
                            <ul className="dropdown-menu">
                                <li>Web Development</li>
                                <li>Mobile App Development</li>
                                <li>Software Development</li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('digitalMarketing')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Digital Marketing
                        {activeMenu === 'digitalMarketing' && (
                            <ul className="dropdown-menu">
                                <li>SEO</li>
                                <li>Social Media Marketing</li>
                                <li>Email Marketing</li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('videoAnimation')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Video & Animation
                        {activeMenu === 'videoAnimation' && (
                            <ul className="dropdown-menu">
                                <li>Video Editing</li>
                                <li>Animation</li>
                                <li>3D Animation</li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('voiceAudio')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Voice & Audio
                        {activeMenu === 'voiceAudio' && (
                            <ul className="dropdown-menu">
                                <li>Voice Over</li>
                                <li>Podcast Editing</li>
                                <li>Music Production</li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('business')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Business
                        {activeMenu === 'business' && (
                            <ul className="dropdown-menu">
                                <li>Business Consulting</li>
                                <li>Project Management</li>
                                <li>Virtual Assistant</li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('finance')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Finance
                        {activeMenu === 'finance' && (
                            <ul className="dropdown-menu">
                                <li>Financial Consulting</li>
                                <li>Accounting</li>
                                <li>Tax Preparation</li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('data')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Data
                        {activeMenu === 'data' && (
                            <ul className="dropdown-menu">
                                <li>Data Analysis</li>
                                <li>Data Entry</li>
                                <li>Data Visualization</li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('aiServices')}
                        onMouseLeave={handleMouseLeave}
                    >
                        AI Services
                        {activeMenu === 'aiServices' && (
                            <ul className="dropdown-menu">
                                <li>AI Development</li>
                                <li>Chatbot Development</li>
                                <li>Machine Learning</li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>

            <div className="skills-page">
                <div className="skills-content">
                    <h1>A premium business solution for trusted talent, guaranteed.</h1>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search for skills or services"
                        />
                        <button>Search</button>
                    </div>
                    <p className="talk-to-us">Talk to us for tailored hiring services →</p>
                </div>
                <div className="hero-section">
                    <img src={heroImage} alt="Hero Marketing" />
                </div>
            </div>
            <div className="skills-cards">
                <div className="card">
                    <img src={graphicDesign} alt="Graphic Designers" />
                    <p>Graphic Designers</p>
                </div>
                <div className="card">
                    <img src={websiteDesign} alt="Website Designers" />
                    <p>Website Designers</p>
                </div>
                <div className="card">
                    <img src={mobileDev} alt="Mobile App Developers" />
                    <p>Mobile App Developers</p>
                </div>
                <div className="card">
                    <img src={softwareDev} alt="Software Developers" />
                    <p>Software Developers</p>
                </div>
                <div className="card">
                    <img src={threeDArtist} alt="3D Artists" />
                    <p>3D Artists</p>
                </div>
                <div className="card">
                    <img src={graphicDesign} alt="Illustrators" />
                    <p>Illustrators</p>
                </div>
            </div>
            <div className="skills-info">
            <h2>A whole world of freelance talent at your fingertips</h2>
            <div className="skills-cards">
                <div className="skill-card">
                    <img src={search} alt="categories icon" />
                    <h3>Over 700 categories</h3>
                    <p>Get results from skilled freelancers from all over the world, for every task, at any price point.</p>
                </div>

                <div className="skill-card">
                    <img src={handshake} alt="handshake icon" />
                    <h3>Clear, transparent pricing</h3>
                    <p>Pay per project or by the hour (Pro). Payments only get released when you approve.</p>
                </div>

                <div className="skill-card">
                    <img src={bulb} alt="lightning icon" />
                    <h3>Quality work done faster</h3>
                    <p>Filter to find the right freelancers quickly and get great work delivered in no time, every time.</p>
                </div>

                <div className="skill-card">
                    <img src={support} alt="support icon" />
                    <h3>24/7 support</h3>
                    <p>Chat with our team to get your questions answered or resolve any issues with your orders.</p>
                </div>
            </div>
        </div>

        <div className="get-started-container">
            <button className="get-started-button" onClick={handleGetStartedClick}>
                Get Started
            </button>
        </div>
        </div>
    );
};

export default Skills;
