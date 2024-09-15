import React from 'react';
import './byskills.scss';
import heroImage from '../assets/freelancer/Hero Marketing images.webp'; // Adjust path as necessary

const Skills = () => {
    return (
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
    );
};

export default Skills;
