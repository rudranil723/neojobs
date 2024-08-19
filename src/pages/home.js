import React from 'react';
import '../sass/home.scss';
import '../sass/popularcategories.scss';
import qmImage from '../assets/home/qm.png';


const categories = [
  { name: "Category 1", link: "/popularcategories/accounting" },
  { name: "Category 2", link: "/popularcategories/automotive" },
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
        </div>
      </div>
    </div>
  );
};

export default Home;
