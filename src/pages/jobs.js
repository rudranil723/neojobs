import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../sass/jobs.scss';
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import logo1 from '../assets/jobs/company-logo-06-150x150.webp';
import logo2 from '../assets/jobs/company-logo-03-150x150.webp';

const JobsPage = () => {
  return (
    <div className="jobs-container">
     

      {/* Filter and Jobs Section */}
      <div className="content-section">
        {/* Filter Div */}
        <div className="job-filters">
          <div className="filter-header">
            <h3>Filter</h3>
            <button className="clear-all">Clear All</button>
          </div>
          <div className="filter-item">
            <label>Date Post</label>
            <select>
              <option>Recent</option>
              <option>One day</option>
              <option>One week</option>
              <option>One month</option>
            </select>
          </div>
          
          <div className="filter-item">
            <label>Job Type</label>
            <div className="checkbox-group">
              <label><input type="checkbox" /> Full Time</label>
              <label><input type="checkbox" /> Internship</label>
              <label><input type="checkbox" /> Freelance</label>
              <label><input type="checkbox" /> Volunteer</label>
            </div>
          </div>
          
          <div className="filter-item">
            <label>Range Salary</label>
            <div className="salary-options">
              <label><input type="checkbox" /> Under 5000</label>
              <label><input type="checkbox" /> 10,000 - 15,000</label>
              <label><input type="checkbox" /> 25,000 - 50,000</label>
              <label><input type="checkbox" /> 50,000 - 100,000</label>
            </div>
            <input type="range" min="5000" max="100000" step="5000" />
          </div>
        </div>

        {/* Job Ads Section */}
        <div className="job-cards">
          <JobCard 
            logo={logo1} 
            title="Product Designer" 
            company="Gojek" 
            location="Marina East, Singapore" 
            salary="$55,000.00 - $70,000.00"
            type="Full Time"
            id="1"
          />
          <JobCard 
            logo={logo2} 
            title="Copywriting Specialist" 
            company="Odama Studio" 
            location="Paris, France" 
            salary="$1,600.00 - $1,800.00"
            type="Freelance"
            id="2"
          />
          <JobCard 
            logo={logo2} 
            title="Full Stack Developer" 
            company="Twitter" 
            location="Malaga, Spain" 
            salary="$1000.00 - $2000.00"
            type="Full Time"
            id="3"
          />
          <JobCard 
            logo={logo2} 
            title="Full Stack Developer" 
            company="Twitter" 
            location="Malaga, Spain" 
            salary="$1000.00 - $2000.00"
            type="Full Time"
            id="3"
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
