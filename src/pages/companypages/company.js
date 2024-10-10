import React from 'react';
import { useParams } from 'react-router-dom';
import './company.scss';

const CompanyPage = () => {
  const { id } = useParams(); // Get the company ID from the URL

  // Company details hardcoded for now
  const companyData = {
    1: {
      name: 'Tesla',
      description: 'Tesla is an American electric vehicle and clean energy company.',
      location: 'London, UK',
      jobsAvailable: 5,
      logo: 'path_to_tesla_logo', // Replace with actual logo path
    },
    2: {
      name: 'Burger King',
      description: 'Burger King is an American multinational chain of fast food restaurants.',
      location: 'Munich, Germany',
      jobsAvailable: 3,
      logo: 'path_to_burger_king_logo', // Replace with actual logo path
    },
    3: {
      name: 'KFC',
      description: 'KFC is a fast-food restaurant chain known for its fried chicken.',
      location: 'New York, USA',
      jobsAvailable: 2,
      logo: 'path_to_kfc_logo', // Replace with actual logo path
    },
    4: {
      name: 'Apple',
      description: 'Apple Inc. is an American multinational technology company.',
      location: 'Cupertino, CA, USA',
      jobsAvailable: 10,
      logo: 'path_to_apple_logo', // Replace with actual logo path
    },
    5: {
      name: 'Google',
      description: 'Google LLC is an American multinational technology company.',
      location: 'Mountain View, CA, USA',
      jobsAvailable: 8,
      logo: 'path_to_google_logo', // Replace with actual logo path
    },
    6: {
      name: 'Microsoft',
      description: 'Microsoft Corporation is an American multinational technology company.',
      location: 'Redmond, WA, USA',
      jobsAvailable: 12,
      logo: 'path_to_microsoft_logo', // Replace with actual logo path
    },
  };

  const company = companyData[id]; // Get company details based on the ID

  return (
    <div className="company-container">
      <div className="company-header">
        <img src={company.logo} alt={`${company.name} logo`} className="company-logo" />
        <h1>{company.name}</h1>
        <p>{company.description}</p>
        <p><strong>Location:</strong> {company.location}</p>
        <p><strong>Jobs Available:</strong> {company.jobsAvailable}</p>
      </div>
    </div>
  );
};

export default CompanyPage;
