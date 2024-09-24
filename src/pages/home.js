import React from 'react';
import '../sass/home.scss';
import '../sass/popularcategories.scss';
import '../css/home.css';

import networkIcon from '../assets/home/tech-icon-network.svg';
import screeningIcon from '../assets/home/tech-icon-screening.svg';
import timezoneIcon from '../assets/home/tech-icon-timezone.svg';
import readinessIcon from '../assets/home/tech-icon-readiness.svg';

import foodImage from '../assets/home/food.jpg';
import healthcareImage from '../assets/home/healthcare.jpg';
import prImage from '../assets/home/PR.jpg';
import statsImage from '../assets/home/stats.jpg';
import uiuxImage from '../assets/home/uiux.jpg';
import actimage from '../assets/home/act.jpg';

const popularCategoriesData = [
  { name: "Food & Beverage", image: foodImage, link: "/jobs", listings: 120 },
  { name: "Healthcare", image: healthcareImage, link: "/jobs", listings: 95 },
  { name: "PR & Marketing", image: prImage, link: "/jobs", listings: 80 },
  { name: "Data & Analytics", image: statsImage, link: "/jobs", listings: 60 },
  { name: "UI/UX Design", image: uiuxImage, link: "/jobs", listings: 45 },
  { name: "Accounting", image: actimage, link: "/jobs", listings: 110 },
];

const categories = [
  { name: "accounting", link: "/popularcategories/accounting" },
  { name: "automotive", link: "/popularcategories/automotive" },
  { name: "Category 3", link: "/category3" },
  { name: "Category 4", link: "/category4" },
  { name: "Category 5", link: "/category5" },
  { name: "Category 6", link: "/category6" },
  { name: "Category 7", link: "/category7" },
  { name: "Category 8", link: "/category8" },
];

const Home = () => {

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    // Use the selectedCategory value for further actions
    console.log('Selected Category:', selectedCategory);
    // You can navigate or use the selected value in any way you want here
  };

  return (
    <div className='home-page'>
      <div className="search-container">
        <div className="search-left">
          <h1>Find the right fit</h1>
          <p>Hire Experts or be hired in sales & marketing</p>
          <div className="search-bar">
            <input type="text" placeholder="Job Title" />
            <input type="text" placeholder="Location" />
            <select onChange={handleCategoryChange}>
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>{category.name}</option>
              ))}
            </select>
            <button className="search-button">Search</button>
          </div>
          <a href="/" className="advanced-search">Need more search options? Advanced Search</a>
        </div>
        <div className="search-right">
          <h2>Post a job and hire a pro!</h2>
          <p>We’re ready to work with you to help you reach your hiring goals.</p>
          <button className="get-started-btn">Let’s Get Started</button>
        </div>
      </div>
      <div className="category-buttons">
        <button className="category-btn">Automotive Jobs</button>
        <button className="category-btn">Design, Art & Multimedia</button>
        <button className="category-btn">Healthcare</button>
      </div>
      <div className='indiatop'>
        <h2>India’s top tech and digital talents</h2>
        <div className="card-container">
          <div className="card">
            <img src={networkIcon} alt="Network Icon" />
            <p>Network of 1 Million talents</p>
          </div>
          <div className="card">
            <img src={screeningIcon} alt="Screening Icon" />
            <p>Top 3.5% of Indian talents vetted through in-depth AI-enabled screening</p>
          </div>
          <div className="card">
            <img src={timezoneIcon} alt="Timezone Icon" />
            <p>Talents available to work in all time zones</p>
          </div>
          <div className="card">
            <img src={readinessIcon} alt="Readiness Icon" />
            <p>Technical Proficiency, English language skills, Cross-cultural effectiveness, Remote readiness</p>
          </div>
        </div>
      </div>
      <div className="popularcategories">
        <h2>Explore Popular Categories</h2>
        <div className="category-cards">
          {popularCategoriesData.map((category, index) => (
            <a key={index} href={category.link} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={`${category.name} category`} />
              </div>
              <div className="category-overlay"></div>
              <div className="category-name">
                <h3>{category.name}</h3>
                <p>{category.listings} listings</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;