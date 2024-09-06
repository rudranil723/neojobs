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
    </div>
  );
};

export default JobsPage;
