
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import JobsPage from './pages/jobs'; 
import JobProfilePage from './pages/jobprofilepage/jobprofile';
import FreelancerPage from './pages/freelancer';
// import Companies from './pages/companies';
// import Hackathon from './pages/hackathon';
import Aboutus from './pages/Aboutus';
import ContactPage from './pages/contact';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Presspage from './components/presspage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobProfilePage />} /> 
        <Route path="/freelancers" element={<FreelancerPage />} />
        <Route path="/about-us" element={<Aboutus />} /> 
        <Route path="/presspage" element={<Presspage />} />
        <Route path="/contact" element={<ContactPage  />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
