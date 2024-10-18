import React from 'react';
import '../sass/aboutus.scss';
import officeimg from '../assets/aboutus/office.jpg';
import ceoImage from '../assets/aboutus/ceo.jpg';
import employee1 from '../assets/aboutus/em1.jpeg';
import employee2 from '../assets/aboutus/em2.jpg';
import employee3 from '../assets/aboutus/em3.jpg';
import employee4 from '../assets/aboutus/em4.jpg';

const Aboutus = () => {
    return (
        <div className="aboutus-page">
            <div className="aboutus-content">
                <div className="text-section">
                    <h1>We build bridges <br />between <span>companies and customers</span></h1>
                    <p>
                        To build software that gives customer-facing teams at 
                        small- and medium-sized businesses the ability to create 
                        fruitful and enduring relationships with customers.
                    </p>
                </div>
                <div className="image-section">
                    <img src={officeimg} alt="Office Team" />
                </div>
            </div>
            {/* New Section */}
            <div className="aboutus-details">
                <hr className="divider" />
                <div className="details-grid">
                    <div className="left-column">
                        <h2>Together we are strong</h2>
                        <div className="ceo-info">
                            <img src={ceoImage} alt="Brandon Shaw - CEO" />
                            <p>Rakesh Jha <br /><span>Founder & CEO</span></p>
                        </div>
                    </div>
                    <div className="right-column">
                        <p>
                            Our crew is always getting bigger, but we all work toward one goal: 
                            to make sales success not only possible but inevitable for teams everywhere.
                        
                            In 2022, at vero eos et accusamus et iusto odio dignissimos ducimus 
                            qui blanditiis praesentium voluptatum deleniti atque corrupti quos 
                            dolores et quas molestias excepturi sint occaecati cupiditate non 
                            provident, similique sunt in culpa qui officia deserunt mollitia animi, 
                            id est laborum et dolorum fuga.
                        </p>
                        <blockquote>
                            "Our goal is to build software that gives customer-facing teams at SMBs 
                            the ability to create fruitful and enduring relationships with customers."
                        </blockquote>
                    </div>
                </div>
                <hr className="divider" />
            </div>
            {/* New Section - Company Stats */}
            <div className="company-stats">
                <div className="stats-grid">
                    <div className="stat-item">
                        <h3>290+</h3>
                        <p>Team member vero eos et accusamus ut iusto odio dignissimos ducimus qui blanditiis.</p>
                    </div>
                    <div className="stat-item">
                        <h3>12+</h3>
                        <p>Year experience vero eos et accusamus dignissimos ducimus qui blanditiis praesentium.</p>
                    </div>
                    <div className="stat-item">
                        <h3>20K+</h3>
                        <p>Lovely customers vero eos et accusamus et iusto odio qui blanditiis praesentium.</p>
                    </div>
                </div>
            </div>

            {/* New Section - Meet Our Team */}
            <div className="meet-team">
                <h2>Meet our <span>Current partners</span></h2>
                <hr className="team-divider" />
                <div className="team-grid">
                    <div className="team-member">
                        <img src={ceoImage} alt="Brandon Shaw - Founder & CEO" />
                        <p>Rakesh Jha<br /><span>Founder & CEO</span></p>
                    </div>
                    <div className="team-member">
                        <img src={employee1} alt="Floyd Stephens - CTO" />
                        <p>Rudranil Shil<br /><span>Chief Technology Officer</span></p>
                    </div>
                    <div className="team-member">
                        <img src={employee2} alt="Kate Clark - Director of People" />
                        <p>Kate Clark<br /><span>Director of People</span></p>
                    </div>
                    <div className="team-member">
                        <img src={employee3} alt="Eunice Doyle - Software Engineer" />
                        <p>Eunice Doyle<br /><span>Software Engineer</span></p>
                    </div>
                </div>
                <hr className="team-divider" />
            </div>
            <div className="join-team">
                <div className="join-team-text">
                    <h2>Join Our Team</h2>
                    <p>
                        We are always on the lookout for passionate individuals who want to make a difference. 
                        Come and be a part of our growing family.
                    </p>
                    <a href="#" className="open-positions-link">See Open Positions</a>
                </div>
            </div>

            {/* New Section - Employee Spotlight */}
            <div className="employee-spotlight">
                <div className="spotlight-content">
                    <img src={employee4} alt="Employee Spotlight" />
                    <div className="spotlight-text">
                        <p>
                            “Working at this company has been an incredible journey of growth and learning. 
                            The collaborative environment encourages us to push boundaries and achieve excellence.”
                        </p>
                        <button onClick={() => window.location.href='/contact'}>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;




