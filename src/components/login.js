import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';  // Importing icons
import './login.scss';  // Import the SCSS file

const Login = () => {
    return (
        <div className="login-container">
            {/* <div className="login-header">
                <button className="active">Login</button>
                <button>Register</button>
            </div> */}
            <form className="login-form">
                <div className="input-group">
                    <FaUser className="icon" />
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input-group">
                    <FaLock className="icon" />
                    <input type="password" placeholder="Password" />
                </div>
                <div className="options">
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                </div>
                <button className="login-button">Login</button>
            </form>
            <div className="form-footer">
                <p>Don’t have an account? <a href="#">Sign up now</a></p>
                <a href="#">Lost Password?</a>
            </div>
        </div>
    );
};

export default Login;
