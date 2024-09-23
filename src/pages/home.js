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
     
    </div>
  );
};

export default Home;
