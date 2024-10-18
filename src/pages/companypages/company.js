import React from 'react';
import { useParams } from 'react-router-dom';
import './company.scss';
import logo1 from '../../assets/jobs/company-logo-06-150x150.webp';
import logo3 from '../../assets/companies/logo1.jpg';
import logo4 from '../../assets/companies/logo2.jpg';
import logo5 from '../../assets/companies/logo3.jpg';
import logo6 from '../../assets/companies/logo4.jpg';
import logo7 from '../../assets/companies/logo5.jpg';

const CompanyPage = () => {
  const { id } = useParams(); // Get the company ID from the URL
  const companyData = {
    1: {
        name: 'Tesla',
        description: 'Tesla is an American electric vehicle and clean energy company.',
        location: 'London, UK',
        jobsAvailable: 5,
        logo: logo1, // Using logo1 for all logos
        detailedDescription: 'Tesla designs and manufactures electric vehicles and renewable energy products. It aims to accelerate the world’s transition to sustainable energy.',
        about: 'Founded in 2003 by a group of engineers, Tesla’s mission is to prove that people don’t need to compromise to drive electric – that electric vehicles can be better, quicker, and more fun to drive than gasoline cars.',
        additionalImages: [logo1, logo1], // Using logo1 for additional images
    },
    2: {
        name: 'Burger King',
        description: 'Burger King is an American multinational chain of fast food restaurants.',
        location: 'Munich, Germany',
        jobsAvailable: 3,
        logo: logo1, // Using logo1 for all logos
        detailedDescription: 'Burger King is known for its flame-grilled burgers, a wide variety of meals, and a family-friendly environment.',
        about: 'Founded in 1954, Burger King is the second largest fast food hamburger chain in the world. The company’s commitment to premium ingredients and signature recipes has defined its brand for over 60 years.',
        additionalImages: [logo1, logo1], // Using logo1 for additional images
    },
    3: {
        name: 'KFC',
        description: 'KFC is a fast-food restaurant chain known for its fried chicken.',
        location: 'New York, USA',
        jobsAvailable: 2,
        logo: logo1, // Using logo1 for all logos
        detailedDescription: 'KFC specializes in crispy, seasoned fried chicken, sandwiches, and meals with a unique taste.',
        about: 'Since its founding by Colonel Harland Sanders in 1952, KFC has grown into one of the world’s largest restaurant chains. The original recipe chicken is famous worldwide.',
        additionalImages: [logo1, logo1], // Using logo1 for additional images
    },
    4: {
        name: 'Apple',
        description: 'Apple is a multinational technology company focusing on e-commerce, cloud computing, and artificial intelligence.',
        location: 'Seattle, WA, USA',
        jobsAvailable: 10,
        logo: logo1, // Using logo1 for all logos
        detailedDescription: 'Amazon started as an online bookstore and has since expanded into various sectors, including cloud computing and streaming services.',
        about: 'Founded by Jeff Bezos in 1994, Amazon is now one of the largest online retailers and a prominent player in various industries, including technology and logistics.',
        additionalImages: [logo1, logo1], // Using logo1 for additional images
    },
    5: {
        name: 'Microsoft',
        description: 'Microsoft is a global leader in software, services, devices, and solutions that help individuals and businesses realize their full potential.',
        location: 'Redmond, WA, USA',
        jobsAvailable: 8,
        logo: logo1, // Using logo1 for all logos
        detailedDescription: 'Microsoft is known for its Windows operating system, Office suite, and Azure cloud services, among other products.',
        about: 'Founded in 1975 by Bill Gates and Paul Allen, Microsoft is committed to empowering every person and every organization on the planet to achieve more.',
        additionalImages: [logo1, logo1], // Using logo1 for additional images
    },
    6: {
        name: 'Google',
        description: 'Google is a multinational technology company specializing in Internet-related services and products, including a search engine, online advertising technologies, and cloud computing.',
        location: 'Mountain View, CA, USA',
        jobsAvailable: 12,
        logo: logo1, // Using logo1 for all logos
        detailedDescription: 'Google offers a wide range of services, including search, advertising, cloud computing, software, and hardware.',
        about: 'Founded in 1998 by Larry Page and Sergey Brin, Google is now part of Alphabet Inc., a holding company that encompasses various businesses beyond search and advertising.',
        additionalImages: [logo1, logo1], // Using logo1 for additional images
    },
};

  const company = companyData[id];

  if (!company) {
    return <p>Company not found.</p>;
  }

  return (
    <div className="company-page">
      <div className="company-header">
        <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
        <div className="company-info">
          <h1>{company.name}</h1>
          <p className="company-description">{company.description}</p>
          <p className="company-location"><strong>Location:</strong> {company.location}</p>
          <p className="company-jobs"><strong>Jobs Available:</strong> {company.jobsAvailable}</p>
        </div>
      </div>

      <div className="company-details">
        <h2>About {company.name}</h2>
        <p>{company.detailedDescription}</p>
        <p>{company.about}</p>

        <h3>Gallery</h3>
        <div className="company-gallery">
          {company.additionalImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${company.name} image ${index + 1}`}
              className="company-gallery-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
