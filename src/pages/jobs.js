import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import '../sass/jobs.scss';
import logo1 from '../assets/jobs/company-logo-06-150x150.webp';
import logo2 from '../assets/jobs/company-logo-03-150x150.webp';

const JobsPage = () => {
  const navigate = useNavigate();

  // Function to handle job card click
  const handleJobClick = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    <div className="jobs-page">
      <div className="top-section">
        <h1>Find your dream job</h1>
        <p>Looking for jobs? Browse our latest job openings to view & apply to the best jobs today!</p>
      </div>

      <div className="content-section">
        {/* Filter Section */}
        <div className="filter-section">
          <div className="filter-header">
            <h3>Filter</h3>
            <button className="clear-all">Clear all</button>
          </div>

          {/* Date Post Filter */}
          <div className="filter-item">
            <label className="filter-label">Date Post</label>
            <select className="filter-select">
              <option>Anytime</option>
              <option>Last 24 hours</option>
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          </div>

          {/* Job Type Filter */}
          <div className="filter-item">
            <label className="filter-label">Job type</label>
            <div className="checkbox-group">
              <label><input type="checkbox" /> Full-time</label>
              <label><input type="checkbox" /> Freelance</label>
              <label><input type="checkbox" /> Internship</label>
              <label><input type="checkbox" /> Volunteer</label>
            </div>
          </div>

          {/* Salary Range Filter */}
          <div className="filter-item">
            <label className="filter-label">Range Salary</label>
            <div className="salary-options">
              <label><input type="radio" name="salary" /> Under $1000</label>
              <label><input type="radio" name="salary" /> $1000 to $2500</label>
              <label><input type="radio" name="salary" /> $2500 to $5000</label>
              <label><input type="radio" name="salary" /> Custom</label>
            </div>
            <input type="range" min="500" max="5000" step="500" className="salary-range" />
            <div className="range-labels">
              <span>$500</span>
              <span>$5000</span>
            </div>
          </div>

          {/* On-site/Remote Filter */}
          <div className="filter-item">
            <label className="filter-label">On-site/remote</label>
            <div className="checkbox-group">
              <label><input type="checkbox" /> On-site</label>
              <label><input type="checkbox" /> Hybrid</label>
              <label><input type="checkbox" /> Remote</label>
            </div>
          </div>

          {/* Job Function Filter */}
          <div className="filter-item">
            <label className="filter-label">Job function</label>
            <div className="checkbox-group">
              <label><input type="checkbox" /> Public Relations</label>
              <label><input type="checkbox" /> Management</label>
              <label><input type="checkbox" /> Engineering</label>
              <label><input type="checkbox" /> Customer Service</label>
            </div>
          </div>
        </div>

        {/* Job Listings Section */}
        <div className="job-listings-section">
          <div className="search-bar">
            <input type="text" placeholder="Search job title or keyword" />
            <input type="text" placeholder="Country or timezone" />
            <button className="find-jobs-btn">Find jobs</button>
          </div>

          <div className="job-results">
            <p>250 Jobs results</p>

            {/* Job Card 1 */}
            <div className="job-card" onClick={handleJobClick}>
              <img src={logo1} alt="Company Logo 1" className="company-logo" />
              <div className="job-details">
                <h3>Product Designer <span className="urgently-hiring">Urgently hiring</span></h3>
                <p>Gojek • Full-time</p>
                <p className="job-location">
                  <FaMapMarkerAlt /> Marina East, Singapore
                </p>
                <p>Within this role, you will be creating content for a wide range of local and international clients.</p>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="job-card" onClick={handleJobClick}>
              <img src={logo2} alt="Company Logo 2" className="company-logo" />
              <div className="job-details">
                <h3>Copywriting Specialist</h3>
                <p>Odama Studio • Freelance</p>
                <p className="job-location">
                  <FaMapMarkerAlt /> Paris, France
                </p>
                <p className="job-salary">
                  <FaDollarSign /> $1,600 - $1,800 USD
                </p>
                <p>Collaborate with the marketing team to optimize conversion and develop persuasive copy.</p>
              </div>
            </div>

            {/* Additional Job Cards */}
            <div className="job-card" onClick={handleJobClick}>
              <img src={logo2} alt="Company Logo 2" className="company-logo" />
              <div className="job-details">
                <h3>Copywriting Specialist</h3>
                <p>Odama Studio • Freelance</p>
                <p className="job-location">
                  <FaMapMarkerAlt /> Paris, France
                </p>
                <p className="job-salary">
                  <FaDollarSign /> $1,600 - $1,800 USD
                </p>
                <p>Collaborate with the marketing team to optimize conversion and develop persuasive copy.</p>
              </div>
            </div>

            <div className="job-card" onClick={handleJobClick}>
              <img src={logo2} alt="Company Logo 2" className="company-logo" />
              <div className="job-details">
                <h3>Copywriting Specialist</h3>
                <p>Odama Studio • Freelance</p>
                <p className="job-location">
                  <FaMapMarkerAlt /> Paris, France
                </p>
                <p className="job-salary">
                  <FaDollarSign /> $1,600 - $1,800 USD
                </p>
                <p>Collaborate with the marketing team to optimize conversion and develop persuasive copy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
