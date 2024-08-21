import React from 'react';
import '../sass/home.scss';
import '../sass/popularcategories.scss';
import qmImage from '../assets/home/qm.png';
import img1 from '../assets/home/img1.jpg';
import img2 from '../assets/home/img2.jpg';

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
          <div className='pcbtn'>
          <button className="all-categories-btn">All Categories</button> 
          </div>
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
      </div>
    </div>
  );
};

export default Home;
