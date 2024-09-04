// File: src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/jobs" element={<Jobs />} />
        <Route path="/freelancers" element={<Freelancers />} />
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
