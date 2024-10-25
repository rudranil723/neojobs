import React, { useState } from 'react';
import Login from './login'; // Make sure the paths are correct
import Register from './register';
import './loginregister.scss'; // Assuming you will style the page

const LoginRegister = () => {
    // State to toggle between login and register forms
    const [activeForm, setActiveForm] = useState('login');

    return (
        <div className="login-register-page">
            <div className="form-toggle">
                {/* Toggle buttons for Login and Register */}
                <button 
                    className={`toggle-button ${activeForm === 'login' ? 'active' : ''}`} 
                    onClick={() => setActiveForm('login')}
                >
                    Login
                </button>
                <button 
                    className={`toggle-button ${activeForm === 'register' ? 'active' : ''}`} 
                    onClick={() => setActiveForm('register')}
                >
                    Register
                </button>
            </div>

            <div className="form-container">
                {/* Conditionally rendering the forms */}
                {activeForm === 'login' ? <Login /> : <Register />}
            </div>
        </div>
    );
};

export default LoginRegister;
