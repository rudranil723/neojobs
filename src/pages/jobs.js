import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../sass/jobs.scss';
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import logo1 from '../assets/jobs/company-logo-06-150x150.webp';
import logo2 from '../assets/jobs/company-logo-03-150x150.webp';

const JobsPage = () => {
  return (
    <div className="jobs-container">
      <div className="jobs-list">
        <h2>Find Job</h2>
        <div className="job-filters">
          <input type="text" placeholder="Job title, keywords or company name" />
          <input type="text" placeholder="Location" />
          <select>
            <option>Choose a category</option>
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Internship</option>
          </select>
        </div>

        <div className="job-cards">
          <JobCard 
            logo={logo1} 
            title="Restaurant Dishwasher" 
            company="King" 
            location="London, UK" 
            salary="$55,000.00 - $70,000.00"
            type="Full Time"
            id="1"
          />
          <JobCard 
            logo={logo2} 
            title="Grader Operator" 
            company="Moore & Kavinsky" 
            location="Munich, Germany" 
            salary="$35,000.00 - $38,000.00"
            type="Internship"
            id="2"
          />
          <JobCard 
            logo={logo2} 
            title="Grader Operator" 
            company="Moore & Kavinsky" 
            location="Munich, Germany" 
            salary="$35,000.00 - $38,000.00"
            type="Internship"
            id="2"
          />
          <JobCard 
            logo={logo2} 
            title="Grader Operator" 
            company="Moore & Kavinsky" 
            location="Munich, Germany" 
            salary="$35,000.00 - $38,000.00"
            type="Internship"
            id="2"
          />
          <JobCard 
            logo={logo2} 
            title="Grader Operator" 
            company="Moore & Kavinsky" 
            location="Munich, Germany" 
            salary="$35,000.00 - $38,000.00"
            type="Internship"
            id="2"
          />
          <JobCard 
            logo={logo2} 
            title="Grader Operator" 
            company="Moore & Kavinsky" 
            location="Munich, Germany" 
            salary="$35,000.00 - $38,000.00"
            type="Internship"
            id="2"
          />
        </div>
      </div>

     
    </div>
  );
};

const JobCard = ({ logo, title, company, location, salary, type, id }) => {
  const navigate = useNavigate(); // Use useNavigate hook

  const handleCardClick = () => {
    navigate(`/jobs/${id}`); // Navigate to JobProfilePage with id
  };

  return (
    <div className="job-card" onClick={handleCardClick}> {/* Make the card clickable */}
      <img src={logo} alt={company} className="job-logo" />
      <div className="job-details">
        <h3>{title}</h3>
        <p>{company}</p>
        <div className="job-meta">
          <span><FaMapMarkerAlt /> {location}</span>
          <span><FaDollarSign /> {salary}</span>
        </div>
        <span className={`job-type ${type.replace(' ', '-').toLowerCase()}`}>{type}</span>
      </div>
    </div>
  );
};

export default JobsPage;
