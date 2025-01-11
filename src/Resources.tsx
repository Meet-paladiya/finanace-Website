import React from 'react';
import { TrendingUp, BookOpen, FileText, Newspaper, Video, Podcast, Download, ExternalLink } from 'lucide-react';

function Resources() {
  const resources = [
    {
      category: "Research Reports",
      icon: <FileText className="h-8 w-8 text-[#1ac8ed] mb-4" />,
      items: [
        {
          title: "State of SaaS in 2024",
          description: "Comprehensive analysis of the SaaS landscape and emerging trends",
          date: "March 2024"
        },
        {
          title: "FinTech Market Overview",
          description: "Deep dive into the evolving financial technology sector",
          date: "February 2024"
        }
      ]
    },
    {
      category: "Blog Posts",
      icon: <BookOpen className="h-8 w-8 text-[#1ac8ed] mb-4" />,
      items: [
        {
          title: "Building Resilient Startups",
          description: "Key strategies for startup success in uncertain times",
          date: "March 15, 2024"
        },
        {
          title: "Fundraising Best Practices",
          description: "Essential tips for early-stage fundraising",
          date: "March 1, 2024"
        }
      ]
    },
    {
      category: "News & Updates",
      icon: <Newspaper className="h-8 w-8 text-[#1ac8ed] mb-4" />,
      items: [
        {
          title: "Q1 2024 Investment Highlights",
          description: "Overview of our recent investments and portfolio updates",
          date: "March 2024"
        }
      ]
    },
    {
      category: "Video Content",
      icon: <Video className="h-8 w-8 text-[#1ac8ed] mb-4" />,
      items: [
        {
          title: "Founder Stories Series",
          description: "Interviews with successful startup founders",
          date: "Ongoing"
        }
      ]
    },
    {
      category: "Podcasts",
      icon: <Podcast className="h-8 w-8 text-[#1ac8ed] mb-4" />,
      items: [
        {
          title: "VentureFund Insights",
          description: "Weekly discussions on venture capital and startups",
          date: "Weekly"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-[#1ac8ed]" />
              <span className="ml-2 text-xl font-bold text-gray-800">VentureFund</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-[#1ac8ed]">Home</a>
              <a href="/about" className="text-gray-700 hover:text-[#1ac8ed]">About</a>
              <a href="/resources" className="text-[#1ac8ed]">Resources</a>
              <a href="#" className="text-gray-700 hover:text-[#1ac8ed]">Portfolio</a>
              <a href="#" className="text-gray-700 hover:text-[#1ac8ed]">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative h-[300px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1ac8ed] to-blue-600 opacity-90 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80"
            alt="Resources"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <h1 className="text-5xl font-bold mb-6">Resources</h1>
              <p className="text-xl max-w-2xl">Insights, research, and knowledge to help founders build exceptional companies.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((category, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                {category.icon}
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <div className="space-y-6">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="group">
                      <a href="#" className="block hover:text-[#1ac8ed]">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-[#1ac8ed] flex items-center">
                          {item.title}
                          <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <p className="text-sm text-gray-400">{item.date}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-gray-600 mb-8">Subscribe to our newsletter to receive the latest insights, reports, and updates directly in your inbox.</p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1ac8ed]"
              />
              <button className="bg-[#1ac8ed] text-white px-6 py-3 rounded-r-lg hover:bg-[#15b5d8] transition-colors flex items-center">
                Subscribe
                <Download className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-[#1ac8ed]" />
                <span className="ml-2 text-xl font-bold">VentureFund</span>
              </div>
              <p className="text-gray-400">Building tomorrow's success stories through strategic investments and partnerships.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Resources</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Portfolio</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Research Reports</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog Posts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Podcasts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Videos</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#1ac8ed]"
                />
                <button className="bg-[#1ac8ed] px-4 py-2 rounded-r-md hover:bg-[#15b5d8] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 VentureFund. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Resources;