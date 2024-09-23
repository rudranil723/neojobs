import React from 'react';
import '../sass/home.scss';
import '../sass/popularcategories.scss';
import '../css/home.css';
import qmImage from '../assets/home/qm.png';
import img1 from '../assets/home/img1.jpg';
import img2 from '../assets/home/img2.jpg';
import bgg from '../assets/home/bgg.png';

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
      
    </div>
  );
};

export default Home;
