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
    </div>
  );
};

export default JobsPage;
