import React from 'react';
import '../sass/freelancer.scss';
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
  

const FreelancerPage = () => {
    return (
        <div>
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
        </div>
    );
}

export default FreelancerPage;
