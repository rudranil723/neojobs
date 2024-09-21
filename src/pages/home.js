import React, { useState } from 'react';
import '../sass/home.scss';
import '../sass/popularcategories.scss';
import '../css/home.css';
import qmImage from '../assets/home/qm.png';
import img1 from '../assets/home/img1.jpg';
import img2 from '../assets/home/img2.jpg';
import bgg from '../assets/home/bgg.png';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = 6; // Total number of reviews
  const reviewsToShow = 3; // Number of reviews to display at once

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalReviews - reviewsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalReviews - reviewsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='home-page'>
      <div className='home-searchbar'>
        <div className='search-form'>
          <h2>Find Job</h2>
          <p>Hire Experts or be hired in sales & marketing</p>
          <input type="text" placeholder="Job title, Skill, Industry" />
          <input type="text" placeholder="City, State or Zip" />
          <select>
            <option>All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category.name}>{category.name}</option>
            ))}
          </select>
          <button className='search-button'>Search</button>
          <p className="advanced-search">Need more search options? <a href="/advancedsearch">Advanced Search</a></p>
        </div>
        <div className='search-image'>
        <img src={bgg} alt="Blog 2" />
        </div>
      </div>


      <div className="popular-categories">
        <h2>Popular Categories</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <a key={index} href={category.link} className="category-box">
              <img src={qmImage} alt="Question Mark" />
              <p>{category.name}</p>
            </a>
          ))}
        </div>
        <div className='pcbtn'>
          <button className="all-categories-btn">All Categories</button> 
        </div>
      </div>



      
      <hr></hr>
      <div className="our-blog-section">
        <h1 className="blog-heading">Our Blog</h1>
        <h2 className="blog-subheading">See how you can up your career status</h2>

        <div className="blog-cards">
          <div className="blog-card">
            <img src={img1} alt="Blog 1" />
            <h3>Blog Post Title 1</h3>
            <p>A short description of Blog Post 1. Learn more about how to advance your career with these tips.</p>
            <button className="read-more-btn">Read More</button>
          </div>
          <div className="blog-card">
            <img src={img2} alt="Blog 2" />
            <h3>Blog Post Title 2</h3>
            <p>A short description of Blog Post 2. Discover new ways to improve your job search strategies.</p>
            <button className="read-more-btn">Read More</button>
          </div>
          <div className="blog-card">
            <img src={img1} alt="Blog 3" />
            <h3>Blog Post Title 3</h3>
            <p>A short description of Blog Post 3. Enhance your career prospects with these proven methods.</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
