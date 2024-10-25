import React from 'react';
import '../sass/freelancer.scss';
import bgg from '../assets/home/bgg.png';

const categories = [
    { name: "Accounting", link: "/popularcategories/accounting" },
    { name: "Automotive", link: "/popularcategories/automotive" },
    { name: "Grphic designing", link: "/category3" },
    { name: "Marketing", link: "/category4" },
    { name: "UI/UX", link: "/category5" },
    { name: "Web devlopment", link: "/category6" },
    { name: "App devlopment", link: "/category7" },
    { name: "AIML", link: "/category8" },
  ];
  

const FreelancerPage = () => {
    return (
        <div>
            <div className='home-searchbar'>
                <div className='search-form'>
                    <h2>Find Freelancers</h2>
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
