import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import JobsPage from './pages/jobs'; 
import CompaniesPage from './pages/companies';
import JobProfilePage from './pages/jobprofilepage/jobprofile';
import FreelancerPage from './pages/freelancer';
import Skills from './freelancer/byskills'; 
import Location from './freelancer/bylocation';
import Categories from './freelancer/bycategories';
import Aboutus from './pages/Aboutus';
import ContactPage from './pages/contact';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Presspage from './components/presspage';
import FreelancerProfile from './pages/freelancerprofile/freelancerprofile';
import Login from './components/login';
import Register from './components/register';  
import GetStarted from './components/getstarted';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/jobs/:id" element={<JobProfilePage />} /> 
        <Route path="/freelancers" element={<FreelancerPage />} />
        <Route path="/freelancer/byskills" element={<Skills />} /> 
        <Route path="/freelancer/bylocation" element={<Location />} /> 
        <Route path="/freelancer/bycategories" element={<Categories />} /> 
        <Route path="/about-us" element={<Aboutus />} /> 
        <Route path="/presspage" element={<Presspage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/freelancerprofile" element={<FreelancerProfile />} /> 
        <Route path="/login" element={<Login />} />   
        <Route path="/register" element={<Register />} /> 
        <Route path="/GetStarted" element={<GetStarted />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
