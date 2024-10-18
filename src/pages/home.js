import React, { useState, useEffect } from "react";
import '../sass/home.scss';
import '../css/home.css';
import { useNavigate } from 'react-router-dom';

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

import officeimage from '../assets/home/office.jpg';

import mumbaiimage from '../assets/home/mumbai.jpg';
import bengaimage from '../assets/home/benga.jpg';
import hydimage from '../assets/home/hyd.jpg';
import guruimage from '../assets/home/guru.jpg';

import oneimage from "../assets/home/freelancerfaces/1.webp";
import twoimage from "../assets/home/freelancerfaces/2.webp";
import threeimage from "../assets/home/freelancerfaces/3.webp";
import fourimage from "../assets/home/freelancerfaces/4.webp";
import fiveimage from "../assets/home/freelancerfaces/5.webp";
import siximage from "../assets/home/freelancerfaces/6.webp";
import sevenimage from "../assets/home/freelancerfaces/7.webp";
import eightimage from "../assets/home/freelancerfaces/8.webp";
import nineimage from "../assets/home/freelancerfaces/9.webp";
import tenimage from "../assets/home/freelancerfaces/10.jpeg";
import eleveimage from "../assets/home/freelancerfaces/11.jpg";
import thirtenimage from "../assets/home/freelancerfaces/13.jpg";
import fortenimage from "../assets/home/freelancerfaces/14.jpg";


const images = [
  { src: oneimage, name: "XYZ 1", job: "Freelancer" },
  { src: twoimage, name: "XYZ 2", job: "Intern" },
  { src: threeimage, name: "XYZ 3", job: "SEO" },
  { src: fourimage, name: "XYZ 4", job: "Freelancer" },
  { src: fiveimage, name: "XYZ 5", job: "SEO" },
  { src: siximage, name: "XYZ 6", job: "Freelancer" },
  { src: sevenimage, name: "XYZ 7", job: "SEO" },
  { src: eightimage, name: "XYZ 8", job: "Freelancer" },
  { src: nineimage, name: "XYZ 9", job: "Intern" },
  { src: tenimage, name: "XYZ 10", job: "Freelancer" },
  { src: eleveimage, name: "XYZ 11", job: "Intern" },
  { src: thirtenimage, name: "XYZ 12", job: "Freelancer" },
  { src: fortenimage, name: "XYZ 13", job: "Intern" },
];


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
  { name: "UI&UX", link: "/category3" },
  { name: "AIML", link: "/category4" },
  { name: "graphic designing", link: "/category5" },
  { name: "SEO", link: "/category6" },
  { name: "Marketing", link: "/category7" },
  { name: "Devloper", link: "/category8" },
];

const Home = () => {
  const navigate = useNavigate(); 

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    // Use the selectedCategory value for further actions
    console.log('Selected Category:', selectedCategory);
    // You can navigate or use the selected value in any way you want here
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const imageCount = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imageCount - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [imageCount]);

  const handleGetStartedClick = () => {
    console.log('Get Started button clicked');
    navigate('/freelancerprofile');  // Navigate to freelancer profile page
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

      <div className='brousecompany'>
        <button>
        Browse Companies
        </button>
      </div>

      <div className="freelancerfaces">
        <div className="faces-slider">
          {images.map((image, index) => (
            <div key={index} className="freelancer-slide">
              <img src={image.src} alt={image.name} />
              <div className="freelancer-info">
                <p className="freelancer-name">{image.name}</p>
                <p className="freelancer-job">{image.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>



      <div className="enhancebussiness" style={{marginTop: "5%"}}>
        <div className="overlay">
          <img src={officeimage} alt="Office" />
          <div className="content">
            <h2>Enhance Your Business</h2>
            <p>Earn extra income and unlock new opportunities by advertising your company</p>
            <a href="F:/NEOJOBS/neojobs/src/components/getstarted.js" className="get-started-btn">Get Started</a>
          </div>
        </div>
      </div>
      
      <div className="popularcity-section">
      <div className="heading">
        <h2>Popular Cities</h2>
        <p>Browse job offers by popular locations</p>
      </div>
      <div className="popularcity-container">
        <div className="city-box large">
          <img src={mumbaiimage} alt="Mumbai" className="city-image" />
          <div className="city-info">
            <div className="city-name">Mumbai</div>
            <div className="city-listings">80 listings</div>
          </div>
        </div>
        <div className="city-box small">
          <img src={bengaimage} alt="Bengaluru" className="city-image" />
          <div className="city-info">
            <div className="city-name">Bengaluru</div>
            <div className="city-listings">123 listings</div>
          </div>
        </div>
        <div className="city-box small">
          <img src={hydimage} alt="Hyderabad" className="city-image" />
          <div className="city-info">
            <div className="city-name">Mumbai</div>
            <div className="city-listings">51 listings</div>
          </div>
        </div>
        <div className="city-box large">
          <img src={guruimage} alt="Gurugram" className="city-image" />
          <div className="city-info">
            <div className="city-name">Gurugram</div>
            <div className="city-listings">66 listings</div>
          </div>
        </div>
      </div>
    </div>
      <div className="get-started-container">
          <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
          </button>
      </div>
    </div>
  );
};

export default Home;