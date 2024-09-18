import React from 'react';
import './bylocation.scss';

const Location = () => {
    return (
        <div className="location-page">
            <div className='top-section'>
                <h1 className='page-title'>Browse by location</h1>
                <div className="button-group">
                    <button className='postaproject'>Post a Project</button>
                    <button className='signup'>Sign up for work</button>
                </div>
            </div>
            <hr className="divider" />
             <div className="location-list">
                <h2>Explore Metro Cities</h2>
                <ul>
                    <li><span className="dot"></span> Delhi</li>
                    <li><span className="dot"></span> Mumbai</li>
                    <li><span className="dot"></span> Bangalore</li>
                    <li><span className="dot"></span> Kolkata</li>
                    <li><span className="dot"></span> Chennai</li>
                    <li><span className="dot"></span> Hyderabad</li>
                    <li><span className="dot"></span> Pune</li>
                    <li><span className="dot"></span> Ahmedabad</li>
                    <li><span className="dot"></span> Jaipur</li>
                    <li><span className="dot"></span> Lucknow</li>
                    <li className="view-more">View more &gt;</li>
                </ul>
            </div>
            <div className="cards-section">
                <div className="card">
                    <img src={require('F:/NEOJOBS/neojobs/src/assets/freelancer/location-1.webp')} alt="International freelancers"/>
                    <div className="card-content">
                        <h3>Working with international freelancers</h3>
                        <a href="#">Find out more &gt;</a>
                    </div>
                </div>
                <div className="card">
                    <img src={require('F:/NEOJOBS/neojobs/src/assets/freelancer/location-2.webp')} alt="Best developers"/>
                    <div className="card-content">
                        <h3>Where to find the best developers</h3>
                        <a href="#">Find out more &gt;</a>
                    </div>
                </div>
                <div className="card">
                    <img src={require('F:/NEOJOBS/neojobs/src/assets/freelancer/location-3.webp')} alt="Local freelancer"/>
                    <div className="card-content">
                        <h3>Do you need a local freelancer?</h3>
                        <a href="#">Find out more &gt;</a>
                    </div>
                </div>
                <div className="card">
                    <img src={require('F:/NEOJOBS/neojobs/src/assets/freelancer/location-4.webp')} alt="International team"/>
                    <div className="card-content">
                        <h3>Building an international team</h3>
                        <a href="#">Find out more &gt;</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
