import React, { useState } from 'react';
import './bycategories.scss';
import Login from '../components/login';
import Register from '../components/register';

const Categories = () => {
    const [activeForm, setActiveForm] = useState('login');

    return (
        <div className='category-page'>
            <div className="top-section">
                <h1 className="page-title">sign up!</h1>
                <div className="button-group">
                    <button className="post-project">Post a Project</button>
                    <button className="sign-up">Sign up for work</button>
                </div>
            </div>
            <hr className="divider" />

            <div className="form-toggle">
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
                {activeForm === 'login' ? <Login /> : <Register />}
            </div>
        </div>
    );
};

export default Categories;
