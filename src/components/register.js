import React from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';  // Importing icons
import './register.scss';  

const Register = () => {
    return (
        <div className="register-container">
            <div className="button-group">
                <button className="candidate active">Candidate</button>
                <button className="employer">Employer</button>
            </div>
            <form className="register-form">
                <div className="input-group">
                    <FaUser className="icon" />
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                    <FaLock className="icon" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className="input-group">
                    <FaEnvelope className="icon" />
                    <input type="email" placeholder="Email" />
                </div>
                <button className="register-button">Register Your Account</button>
            </form>
        </div>
    );
};

export default Register;
