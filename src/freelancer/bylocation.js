import React from 'react';
import './bylocation.scss';

const Location = () => {
    return (
        <div className="location-page">
            {/* Top section with heading and buttons */}
            <div className="top-section">
                <h1 className="page-title">Browse By Location</h1>
                <div className="button-group">
                    <button className="post-project">Post a Project</button>
                    <button className="sign-up">Sign up for work</button>
                </div>
            </div>
            
            <hr className="divider" />

            {/* Location list and card section side by side */}
            <div className="content-section">
                <div className="location-list">
                    <h2>Choose from millions of freelancers worldwide.</h2>
                    <ul>
                        <li>Bengaluru</li>
                        <li>Hyderabad</li>
                        <li>Pune</li>
                        <li>Chennai</li>
                        <li>Delhi NCR</li>
                        <li>Mumbai</li>
                        <li>Kolkata</li>
                        <li>Ahmedabad</li>
                        <li>Jaipur</li>
                        <li>Indore</li>
                        <li className="view-more">View more &gt;</li>
                    </ul>
                </div>

                <div className="cards-section">
                    <div className="card">
                        <img src={require('F:/NEOJOBS/neojobs/src/assets/freelancer/location-1.webp')} alt="International freelancers" />
                        <div className="card-content">
                            <h3>Working with international freelancers</h3>
                            <a href="#">Find out more &gt;</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={require('F:/NEOJOBS/neojobs/src/assets/freelancer/location-2.webp')} alt="Best developers" />
                        <div className="card-content">
                            <h3>Where to find the best developers</h3>
                            <a href="#">Find out more &gt;</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={require('F:/NEOJOBS/neojobs/src/assets/freelancer/location-3.webp')} alt="Local freelancer" />
                        <div className="card-content">
                            <h3>Do you need a local freelancer?</h3>
                            <a href="#">Find out more &gt;</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={require('F:/NEOJOBS/neojobs/src/assets/freelancer/location-4.webp')} alt="International team" />
                        <div className="card-content">
                            <h3>Building an international team</h3>
                            <a href="#">Find out more &gt;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
