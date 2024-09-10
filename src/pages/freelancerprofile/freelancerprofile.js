import React from 'react';
import '../../sass/freelancerprofile.scss';
import profileImage from '../../assets/freelancer/worker.jpg';


const FreelancerProfile = () => {
    return (
        <div className="freelancer-page">
            <div className="top-section">
                <div className="profile-details">
                    <img 
                        src={profileImage}  // Use the imported local image
                        alt="Peter Waldow" 
                        className="profile-image" 
                    />
                    <div className="profile-info">
                        <h1>Rudranil Shil</h1>
                        <p>UX/UI Graphic Designer</p>
                        <div className="ratings">
                            <span className="rating">Not rated yet</span>
                            <span className="country">
                                <img 
                                    src="https://flagcdn.com/w40/in.png" 
                                    alt="India" 
                                /> India
                            </span>
                            <span className="location">Kolkata</span>
                        </div>
                    </div>
                </div>
                <div className="message-section">
                    <button className="login-button">
                        <span>📧 Login to Send Message</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default FreelancerProfile;