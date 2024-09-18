import React, { useState } from 'react';
import './byskills.scss';
import heroImage from '../assets/freelancer/Hero Marketing images.webp'; 
import graphicDesign from '../assets/freelancer/graphic-design.webp';
import mobileDev from '../assets/freelancer/mobile.webp';
import softwareDev from '../assets/freelancer/sd.webp';
import websiteDesign from '../assets/freelancer/website.webp';
import threeDArtist from '../assets/freelancer/3d.webp';
const Skills = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
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
                                <li>Translation</li>
                                <li>Editing</li>
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
                                <li>2D/3D Animation</li>
                                <li>Motion Graphics</li>
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
                                <li>Audio Production</li>
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
                                <li>Financial Planning</li>
                                <li>Market Research</li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('consulting')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Consulting
                        {activeMenu === 'consulting' && (
                            <ul className="dropdown-menu">
                                <li>Strategy Consulting</li>
                                <li>HR Consulting</li>
                                <li>IT Consulting</li>
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
                                <li>Data Entry</li>
                                <li>Data Analysis</li>
                                <li>Data Visualization</li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('ai')}
                        onMouseLeave={handleMouseLeave}
                    >
                        AI Services
                        {activeMenu === 'ai' && (
                            <ul className="dropdown-menu">
                                <li>AI Development</li>
                                <li>Chatbot Development</li>
                                <li>Machine Learning</li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('programmingTech')}
                        onMouseLeave={handleMouseLeave}
                    >
                        Programming & Tech
                        {activeMenu === 'programmingTech' && (
                            <ul className="dropdown-menu">
                                <li>Web Development</li>
                                <li>Mobile App Development</li>
                                <li>Software Development</li>
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
                    <img src={require('F:/NEOJOBS/neojobs/src/assets/freelancer/categories.72379ee.svg')} alt="categories icon" />
                    <h3>Over 700 categories</h3>
                    <p>Get results from skilled freelancers from all over the world, for every task, at any price point.</p>
                    </div>

                    <div className="skill-card">
                    <img src={require('F:/NEOJOBS/neojobs/src/assets/freelancer/handshake.287b5d3.svg')} alt="handshake icon" />
                    <h3>Clear, transparent pricing</h3>
                    <p>Pay per project or by the hour (Pro). Payments only get released when you approve.</p>
                    </div>

                    <div className="skill-card">
                    <img src={require('F:/NEOJOBS/neojobs/src/assets/freelancer/lightning.2cded3f.svg')} alt="lightning icon" />
                    <h3>Quality work done faster</h3>
                    <p>Filter to find the right freelancers quickly and get great work delivered in no time, every time.</p>
                    </div>

                    <div className="skill-card">
                    <img src={require('F:/NEOJOBS/neojobs/src/assets/freelancer/support.660ad7f.svg')} alt="support icon" />
                    <h3>24/7  support</h3>
                    <p>Chat with our team to get your questions answered or resolve any issues with your orders.</p>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Skills;
