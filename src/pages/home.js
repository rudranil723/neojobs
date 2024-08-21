import React, { useState } from 'react';
import '../sass/home.scss';
import '../sass/popularcategories.scss';
import '../css/home.css';
import qmImage from '../assets/home/qm.png';
import img1 from '../assets/home/img1.jpg';
import img2 from '../assets/home/img2.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


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
    <div>
      <div className="home-content">
        <h1>Find Jobs</h1>
        <p>Hire Experts or be hired in sales & marketing</p>
        <div className="search-bar">
          <input type="text" placeholder="Tell us what you are looking for?" />
          <button type="button">Search</button>
        </div>
        <p className="more-options">
          Need more search options? <a href="/advanced-search">Advanced Search</a>
        </p>
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

      <div className="custom-section">
        <div className="text-content">
          <h1>Explore a faster, easier, and better job search</h1>
          <ul>
            <li>Unmatched quality of remote, hybrid, and flexible jobs</li>
            <li>Premium skills tests, remote courses, career coaching, and more</li>
            <li>Unmatched quality of remote, hybrid, and flexible jobs</li>
          </ul>
          <button className="browse-btn">Browse Jobs</button>
        </div>
        <div className="image-content">
          <img src={img1} alt="Image 1" className="img1" />
          <img src={img2} alt="Image 2" className="img2" />
        </div>
      </div>

      <div className="user-reviews">
        <h2>What Our Users Say 😍</h2>
        <p>Check honest reviews from our customers!</p>
        
        <div className="reviews-carousel">
          <div className="carousel-content">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / reviewsToShow)}%)`
              }}
            >
              <div className="review-box">
                <p>"This service has changed my life!"</p>
                <p>- User Name 1</p>
              </div>
              <div className="review-box">
                <p>"Absolutely amazing experience!"</p>
                <p>- User Name 2</p>
              </div>
              <div className="review-box">
                <p>"Highly recommend to everyone."</p>
                <p>- User Name 3</p>
              </div>
              <div className="review-box">
                <p>"Great customer support."</p>
                <p>- User Name 4</p>
              </div>
              <div className="review-box">
                <p>"User-friendly and effective."</p>
                <p>- User Name 5</p>
              </div>
              <div className="review-box">
                <p>"Exceeded my expectations!"</p>
                <p>- User Name 6</p>
              </div>
            </div>
          </div>
          <div className="carousel-buttons">
          <button className="carousel-btn left" onClick={handlePrev}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="carousel-btn right" onClick={handleNext}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
