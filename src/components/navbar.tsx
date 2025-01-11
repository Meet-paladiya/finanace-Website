import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <TrendingUp className="h-8 w-8 text-[#1ac8ed]" />
            <span className="ml-2 text-xl font-bold text-gray-800">VentureFund</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={`${isActive('/') ? 'text-[#1ac8ed]' : 'text-gray-700 hover:text-[#1ac8ed]'}`}>
              Home
            </Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-[#1ac8ed]' : 'text-gray-700 hover:text-[#1ac8ed]'}`}>
              About
            </Link>
            <Link to="/resources" className={`${isActive('/resources') ? 'text-[#1ac8ed]' : 'text-gray-700 hover:text-[#1ac8ed]'}`}>
              Resources
            </Link>
            <Link to="/fund-details" className={`${isActive('/fund-details') ? 'text-[#1ac8ed]' : 'text-gray-700 hover:text-[#1ac8ed]'}`}>
              Fund Details
            </Link>
            <Link to="/team" className={`${isActive('/team') ? 'text-[#1ac8ed]' : 'text-gray-700 hover:text-[#1ac8ed]'}`}>
              Team
            </Link>
            <Link to="/sme-exchange" className={`${isActive('/sme-exchange') ? 'text-[#1ac8ed]' : 'text-gray-700 hover:text-[#1ac8ed]'}`}>
              SME Exchange
            </Link>
            <Link to="/contact" className={`${isActive('/contact') ? 'text-[#1ac8ed]' : 'text-gray-700 hover:text-[#1ac8ed]'}`}>
              Contact
            </Link>
            <Link to="/login" className="bg-[#1ac8ed] text-white px-4 py-2 rounded-md hover:bg-[#15b5d8] transition-colors">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}