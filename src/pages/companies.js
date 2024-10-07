import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../sass/companies.scss';
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import logo1 from '../assets/jobs/company-logo-06-150x150.webp';
import logo2 from '../assets/jobs/company-logo-03-150x150.webp';


const CompaniesPage = () => {
    return (
        <div className="jobs-container">
          <div className="jobs-list">
            <h2>Find Company</h2>
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
                title="Tesla" 
                company="King" 
                location="London, UK" 
                salary="$55,000.00 - $70,000.00"
                type="Full Time"
                id="1"
              />
              <JobCard 
                logo={logo2} 
                title="Burger king" 
                company="Moore & Kavinsky" 
                location="Munich, Germany" 
                salary="$35,000.00 - $38,000.00"
                type="Internship"
                id="2"
              />
              <JobCard 
                logo={logo2} 
                title="Burger King" 
                company="Moore & Kavinsky" 
                location="Munich, Germany" 
                salary="$35,000.00 - $38,000.00"
                type="Internship"
                id="2"
              />
              <JobCard 
                logo={logo2} 
                title="KFC" 
                company="Moore & Kavinsky" 
                location="Munich, Germany" 
                salary="$35,000.00 - $38,000.00"
                type="Internship"
                id="2"
              />
              <JobCard 
                logo={logo2} 
                title="Apple" 
                company="Moore & Kavinsky" 
                location="Munich, Germany" 
                salary="$35,000.00 - $38,000.00"
                type="Internship"
                id="2"
              />
              <JobCard 
                logo={logo2} 
                title="Google" 
                company="Moore & Kavinsky" 
                location="Munich, Germany" 
                salary="$35,000.00 - $38,000.00"
                type="Internship"
                id="2"
              />
              {/* Additional job cards */}
            </div>
          </div>
    
          <div className="jobs-map">
            <h2>Job Locations</h2>
            <div id="map-container">
              <iframe
                title="India Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15921724.330819353!2d70.57928355973683!3d20.74800097962157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bf03fc1aee2792d%3A0x3679f9b71e3db500!2sIndia!5e0!3m2!1sen!2sin!4v1631681457825!5m2!1sen!2sin"
                width="100%"
                height="400px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
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
      
      export default CompaniesPage;
      