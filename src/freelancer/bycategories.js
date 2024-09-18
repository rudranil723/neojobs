import React from 'react';
import './bycategories.scss';

const Categories = () => {
    return (
        <div className='category-page'>
            <div className="top-section">
                <h1 className="page-title">Browse By Location</h1>
                <div className="button-group">
                    <button className="post-project">Post a Project</button>
                    <button className="sign-up">Sign up for work</button>
                </div>
            </div>
            <hr className="divider" />
        </div>
    );
};

export default Categories;
