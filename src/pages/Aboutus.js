import React from 'react';
import '../sass/aboutus.scss';

const Aboutus = () => {
    return (
        <div className="aboutus-page">
            {/* Banner Section */}
            <div className="banner-section">
                <div className="banner-content">
                    <h1>Connecting global companies and top Indian talent</h1>
                    <p>We are driven by the idea of creating opportunities.</p>
                </div>
            </div>

            {/* About Section */}
            <div className="about-section">
                <div className="about-content">
                    <img src={require('../assets/aboutus/about.png')} alt="Paper Planes" className="about-image" />
                    <div className="about-text">
                        <p>
                            Born in the difficult period of the pandemic, Uplers is a tech-enabled platform that makes hiring and getting hired reliable, simple, and fast.
                        </p>
                        <p>
                        Leveraging the transformative power of AI & ML and remote work, Uplers matches deeply-vetted Indian talents with top companies, offering multiple engagement models enabling flexibility and scalability for hiring companies, as well as freedom and rewarding careers for top Indian tech and digital professionals.
                        </p>
                        <p>Uplers is already leveraged by hundreds of top companies, from hot start-ups to multinational organizations, and has more than 1 Million vetted Indian talent on its platform.</p>
                    </div>
                </div>
            </div>

            {/* Awards Section */}
            <div className="awards-section">
                <div className="award-card">
                    <img src={require('../assets/aboutus/grat-work.jpg')} alt="Great Place to Work" />
                    <div className="award-content">
                        <h4>Great Place to Work Certified</h4>
                    </div>
                </div>
                <div className="award-card">
                    <img src={require('../assets/aboutus/indian-achive-logo.png')} alt="India Achievers' Award" />
                    <div className="award-content">
                        <h4>India Achievers' Award</h4>
                    </div>
                </div>
            </div>


            {/* Founders Section */}
            <div className="founders-section">
            <div className='heading'>
                <h2>Our Founders</h2>
            </div>
                {/* CEO Section */}
                <div className="founder">
                    <div className="founder-info">
                        <h3><spam className="foundername">Rakesh Jha</spam>, Founder & CEO</h3>
                        <p>
                        Our visionary leader is a serial entrepreneur who has built and scaled several businesses. Jaymin has a singular belief in the value of focus. He helps everyone at Uplers remain absorbed in our endeavor to solve somplex challenges of clients and talents. He is passionate about adopting innovative technologies to solve real-world challenges. Besides his strong belief in uplifting everyone the organization touches, it's his passion for actionable data and decisions thereof that embody the magical, positive, and transformative spirit of a Unicorn.
                        </p>
                    </div>
                    <div className="founder-img">
                        <img src={require('../assets/aboutus/JayminBhuptani.png')} alt="Rakesh Jha" />
                    </div>
                </div>

                {/* Co-Founder Section */}
                <div className="founder">
                <div className="founder-img">
                        <img src={require('../assets/aboutus/NitalShah.png')} alt="Nital Shah" />
                    </div>
                    <div className="founder-info">
                        <h3><spam className="foundername">Prabhat Jha</spam>, Co-Founder & COO</h3>
                        <p>
                        Nital embodies the much-needed structure, and decisiveness that enables Uplers to navigate complex and uncertain micro and macro environments, whilst keeping our eye on the mission. With a steadfast yet flexible approach, Nital anchors our teams and processes, fostering a people-centric, growth-focused culture built on trust and transparency.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
