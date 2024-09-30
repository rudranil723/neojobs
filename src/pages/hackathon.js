import React from 'react';
import '../sass/hackathon.scss';

const HackathonPage = () => {
    return (
        <div className='hackathonpage'>
            <div className="top-section">
                <h1 className="page-title">Sign up!</h1>
                <div className="button-group">
                    <button className="post-project">Post a Project</button>
                    <button className="sign-up">Sign up for work</button>
                </div>
            </div>
            <hr className="divider" />
            <br></br>
            <div className='commingsoon'>
                <h1>
                    COMMING SOON!
                </h1>
            </div>
        </div>

        
    );
};

export default HackathonPage;
