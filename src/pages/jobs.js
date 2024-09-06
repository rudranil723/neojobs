import React from 'react';
import '../sass/jobs.scss';
import briefcaseImage from '../assets/jobs/placeholder.webp';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaDollarSign } from 'react-icons/fa';

const JobsPage = () => {
  return (
    <div className="jobs-page">
      {/* Top Section */}
      <div className="top-section">
        <div className="job-category">
          <span>Construction / Facilities</span>
          <h1>Grader Operator <span className="internship-tag">Internship</span></h1>
        </div>
        <button className="bookmark-btn">Login to bookmark</button>
      </div>

      {/* Company Info Box */}
      <div className="company-info-box">
        <img src={briefcaseImage} alt="Company Briefcase" className="briefcase-img" />
        <div className="company-details">
          <p>Moore & Kavinsky</p>
          <div className="company-links">
            <a href="#">Website</a>
            <a href="#">test@example.com</a>
            <a href="#">Login to Send Message</a>
          </div>
        </div>
        <button className="apply-btn">Apply for Job</button>
      </div>

      <div className="content-grid">
        <div className="video-section">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/PFkzyLHiEPw"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="video-description">
            <p>The Heavy Equipment / Grader Operator is responsible for operating one or several types of power construction equipment, such as front end loader, roller, bulldozer, or excavator in order to move, excavate, and grade earth, erect structures, or pour concrete or other hard surface pavements.</p>
          </div>
        </div>

        <div className="job-overview">
          <h2>Job Overview</h2>
          <ul>
            <li>
              <FaCalendarAlt className="icon" /> Date Posted: <span>Posted 5 years ago</span>
            </li>
            <li>
              <FaCalendarAlt className="icon" /> Expiration Date: <span>April 15, 2027</span>
            </li>
            <li>
              <FaMapMarkerAlt className="icon" /> Location: <span>Munchen, Germany</span>
            </li>
            <li>
              <FaClock className="icon" /> Hours: <span>44h / week</span>
            </li>
            <li>
              <FaDollarSign className="icon" /> Rate: <span>$15 - $25 / hour</span>
            </li>
            <li>
              <FaDollarSign className="icon" /> Salary: <span>$35,000.00 - $38,000.00</span>
            </li>
          </ul>
          <button className="apply-btn">Apply for job</button>
        </div>
      </div>

      
      <div className="job-details-section" style={{ marginTop: '25px' }}>
        <div className="responsibilities">
          <h3>Primary Responsibilities:</h3>
          <ul>
            <li>✔️ Take action to avoid potential hazards and obstructions, such as utility lines, other equipment, other workers, and falling objects.</li>
            <li>✔️ Start engines, move throttles, switches, and levers, and depress pedals to operate such stated machines.</li>
            <li>✔️ Align machines with reference stakes and guidelines or ground or position equipment, following hand signals of other workers.</li>
            <li>✔️ Load and move dirt, rocks, equipment, and materials, using trucks, crawler tractors, shovels, graders, or related equipment.</li>
            <li>✔️ Coordinate machine actions with other activities, positioning or moving loads in response to hand or audio signals from crew members.</li>
          </ul>
          
          <h3>Requirements:</h3>
          <ul>
            <li>✔️ Must have a minimum of 3 years experience running, maneuvering, driving, and navigating equipment such as bulldozer, excavators, rollers, and front-end loaders.</li>
            <li>✔️ Strongly prefer candidates with a High School Diploma.</li>
            <li>✔️ Must be able to communicate with others to convey information effectively.</li>
            <li>✔️ Must be accustomed to working outdoors with exposure to all weather conditions.</li>
            <li>✔️ Must be able to perform physical activities that require considerable use of your arms and legs and moving your whole body, such as climbing, lifting, balancing, walking, stooping, and handling of materials.</li>
            <li>✔️ Must be knowledgeable of safety procedures and practices.</li>
          </ul>
        </div>

        {/* Map Section */}
        <div className="location-map">
          <h3>Job Location</h3>
          <iframe
            width="100%"
            height="315"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1769.6030915755363!2d88.3476023!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a9e9c8f9b9%3A0x67e201b1299e7e4!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1630495752003!5m2!1sen!2sin"
            title="Kolkata Location"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>


          <div className="search-section">
            <h3>Bookmarks & Share</h3>
            <div className="search-bar">
              <input type="text" placeholder="Search job title or location" className="search-input" />
              <button className="clear-btn"><i className="fas fa-search"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
