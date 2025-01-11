import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './About';
import Resources from './Resources';
import FundDetails from './components/FundDetails';
import Team from './components/Team';
import SmeExchange from './components/SmeExchange';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/fund-details" element={<FundDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/sme-exchange" element={<SmeExchange />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;