import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import lunarisLogo from '../assets/images/Lunaris-management-logo.png';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="min-h-screen relative overflow-hidden" style={{background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #1e293b 100%)'}}>
      {/* Complex curved background that matches the design */}
      <div className="absolute inset-0">
        {/* Main curved section from bottom right */}
        <div className="absolute bottom-0 right-0 w-full h-full">
          <svg viewBox="0 0 1000 1000" className="w-full h-full absolute inset-0">
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 0.08}} />
                <stop offset="50%" style={{stopColor: '#1d4ed8', stopOpacity: 0.12}} />
                <stop offset="100%" style={{stopColor: '#1e40af', stopOpacity: 0.15}} />
              </linearGradient>
            </defs>
            <path
              d="M300,0 C400,100 500,200 600,150 C700,100 800,50 1000,100 L1000,500 C900,400 800,450 700,500 C600,550 500,600 400,550 C300,500 200,450 100,500 L0,800 L0,200 C100,150 200,100 300,0 Z"
              fill="url(#curveGradient)"
            />
          </svg>
        </div>

        {/* Secondary curved overlay for more depth */}
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <svg viewBox="0 0 800 1000" className="w-full h-full">
            <path
              d="M200,0 C300,150 400,300 500,250 C600,200 700,150 800,200 L800,600 C700,500 600,550 500,600 C400,650 300,700 200,650 L200,0 Z"
              fill="rgba(59, 130, 246, 0.05)"
            />
          </svg>
        </div>

        {/* Bottom wave section */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 300" className="w-full h-auto">
            <path
              d="M0,100 C200,50 400,150 600,120 C800,90 1000,110 1200,100 L1200,300 L0,300 Z"
              fill="rgba(59, 130, 246, 0.1)"
            />
            <path
              d="M0,150 C300,100 500,200 800,170 C900,160 1100,150 1200,160 L1200,300 L0,300 Z"
              fill="rgba(99, 179, 237, 0.08)"
            />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Using actual logo image */}
          <div className="flex items-center space-x-3">
            <img 
              src={lunarisLogo} 
              alt="Lunaris Management & Co." 
              className="h-16 w-32 sm:h-20 sm:w-40 lg:h-20 lg:w-48"
            />
          </div>

          {/* Navigation Links - Exact match to design */}
          <div className="hidden md:flex items-center space-x-8 text-white text-sm">
            <Link to="/" className="hover:text-blue-300 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-300 transition-colors font-medium">
              About
            </Link>
            <Link to="/book" className="hover:text-blue-300 transition-colors font-medium">
              Book your stay
            </Link>
            <Link to="/contact" className="hover:text-blue-300 transition-colors font-medium">
              Contact us
            </Link>
            <a 
              href="https://calendly.com/lunarismanagement14/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white/60 px-5 py-2 rounded-full hover:bg-white hover:text-slate-900 transition-all font-medium"
            >
              Book a Meeting
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2 relative z-50"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-sm transition-all duration-300 z-40 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-white text-lg">
            <Link 
              to="/" 
              className="hover:text-blue-300 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="hover:text-blue-300 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/book" 
              className="hover:text-blue-300 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book your stay
            </Link>
            <Link 
              to="/contact" 
              className="hover:text-blue-300 transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact us
            </Link>
            <a 
              href="https://calendly.com/lunarismanagement14/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white/60 px-5 py-2 rounded-full hover:bg-white hover:text-slate-900 transition-all font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Meeting
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-8 pt-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
            {/* Left Content - Exact match to design */}
            <div className="text-white space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  FIND YOUR<br />
                  PLACE<br />
                  <span className="text-yellow-400">OF DREAM</span>
                </h1>
              </div>
              
              <p className="text-base lg:text-lg opacity-80 max-w-md leading-relaxed">
                We are glad to have you around. Feel free to browse our website.
              </p>
              
              {/* Search bar - matching design exactly */}
              <div className="pt-4">
                <div className="bg-white rounded-full px-2 py-2 flex items-center max-w-sm shadow-lg">
                  <input 
                    type="text" 
                    placeholder="" 
                    className="bg-transparent text-slate-900 placeholder-slate-400 outline-none flex-1 px-4 py-1 text-sm"
                  />
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Modern House matching design */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-lg">
                {/* House container with exact design styling */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Modern house structure exactly like in design */}
                  <div className="absolute inset-0 p-6">
                    {/* Main house structure */}
                    <div className="relative w-full h-full">
                      {/* Lower level - main structure */}
                      <div className="absolute bottom-0 left-0 w-full h-3/5 bg-white rounded-t-lg shadow-md"></div>
                      
                      {/* Upper level - offset structure */}
                      <div className="absolute top-0 right-0 w-2/3 h-2/5 bg-gray-100 rounded-lg shadow-lg border border-gray-200"></div>
                      
                      {/* Large windows on main structure */}
                      <div className="absolute bottom-8 left-4 w-8 h-16 bg-slate-700 rounded opacity-60"></div>
                      <div className="absolute bottom-8 right-12 w-8 h-16 bg-slate-700 rounded opacity-60"></div>
                      
                      {/* Windows on upper structure */}
                      <div className="absolute top-2 right-2 w-6 h-8 bg-slate-700 rounded opacity-60"></div>
                      <div className="absolute top-2 right-10 w-6 h-8 bg-slate-700 rounded opacity-60"></div>
                      
                      {/* Central large window */}
                      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-12 h-10 bg-slate-700 rounded opacity-60"></div>
                      
                      {/* Entrance door */}
                      <div className="absolute bottom-0 left-1/3 w-6 h-20 bg-amber-700 rounded-t-md"></div>
                      <div className="absolute bottom-8 left-1/3 transform translate-x-4 w-1 h-1 bg-yellow-400 rounded-full"></div>
                      
                      {/* Roof accents */}
                      <div className="absolute top-0 right-1/3 w-16 h-1 bg-slate-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Landscaping - yellow decorative elements like in design */}
                  <div className="absolute bottom-4 left-8">
                    <div className="w-6 h-10 bg-yellow-400 rounded-full opacity-90"></div>
                    <div className="w-8 h-3 bg-green-500 rounded-full -mt-2 opacity-80"></div>
                  </div>
                  <div className="absolute bottom-6 right-12">
                    <div className="w-4 h-8 bg-yellow-500 rounded-full opacity-80"></div>
                    <div className="w-6 h-2 bg-green-500 rounded-full -mt-1 opacity-70"></div>
                  </div>
                </div>
                
                {/* Floating decorative elements matching design */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400 rounded-full opacity-60"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-yellow-300 rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional decorative elements matching design */}
      <div className="absolute bottom-32 left-16 w-12 h-12 bg-yellow-400/30 rounded-full blur-sm"></div>
      <div className="absolute top-24 right-24 w-6 h-6 bg-yellow-400/50 rounded-full"></div>
      <div className="absolute bottom-48 right-32 w-8 h-8 bg-blue-400/30 rounded-full blur-sm"></div>
      <div className="absolute top-1/3 left-8 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
    </div>
  );
};

export default LandingPage;
