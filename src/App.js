// File: src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import JobsPage from './pages/jobs'; // Import the JobsPage component
// import Freelancers from './pages/freelancers';
// import Companies from './pages/companies';
// import Hackathon from './pages/hackathon';
// import AboutUs from './pages/about-us';
// import Contact from './pages/contact';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
        {/* <Route path="/freelancers" element={<Freelancers />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
