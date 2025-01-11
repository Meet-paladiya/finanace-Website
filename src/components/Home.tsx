import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Target, Award, Briefcase } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1ac8ed] to-blue-600 opacity-90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-6xl font-bold mb-6">Building Tomorrow's Success Stories</h1>
            <p className="text-xl max-w-2xl mb-8">Strategic investments in innovative companies that are shaping the future.</p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#1ac8ed] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Link to="/fund-details" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-[#1ac8ed] transition-colors">
                <Briefcase className="h-12 w-12 text-[#1ac8ed] mb-4" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1ac8ed]">Fund Details</h3>
                <p className="text-gray-600">Explore our investment strategy and portfolio.</p>
              </div>
            </Link>
            <Link to="/team" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-[#1ac8ed] transition-colors">
                <Target className="h-12 w-12 text-[#1ac8ed] mb-4" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1ac8ed]">Our Team</h3>
                <p className="text-gray-600">Meet our experienced investment professionals.</p>
              </div>
            </Link>
            <Link to="/resources" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-[#1ac8ed] transition-colors">
                <Award className="h-12 w-12 text-[#1ac8ed] mb-4" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1ac8ed]">Resources</h3>
                <p className="text-gray-600">Access insights and research reports.</p>
              </div>
            </Link>
            <Link to="/sme-exchange" className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-[#1ac8ed] transition-colors">
                <TrendingUp className="h-12 w-12 text-[#1ac8ed] mb-4" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1ac8ed]">SME Exchange</h3>
                <p className="text-gray-600">Connect with growing businesses.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;