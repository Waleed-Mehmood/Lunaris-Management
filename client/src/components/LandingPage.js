import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import lunarisLogo from '../assets/images/Lunaris-management-logo.png';
import landingPageBg from '../assets/images/landing-page.svg';
import landingBgJpeg from '../assets/images/landing-bg.jpeg';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);
  const [searchLocation, setSearchLocation] = useState("");
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchLocation) params.append("location", searchLocation);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <div 
      className={`min-h-screen relative overflow-hidden ${
        isLargeScreen 
          ? '' 
          : ''
      }`}
      style={{
        backgroundImage: isLargeScreen ? `url(${landingPageBg})` : `url(${landingBgJpeg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      {/* Overlay for better text readability */}
      <div className={`absolute inset-0 ${
        isLargeScreen ? '' : 'bg-black/40'
      }`}></div>

      {/* Navigation */}
      <nav className="relative z-20 px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Using actual logo image */}
            <div className="flex items-center space-x-3">
              <Link to="/">
                <img 
                  src={lunarisLogo} 
                  alt="Lunaris Management & Co." 
                  className="h-16 w-32 sm:h-20 sm:w-40 lg:h-20 lg:w-48"
                />
              </Link>
            </div>

          {/* Navigation Links - Exact match to design */}
          <div className="hidden md:flex items-center space-x-8 text-white text-sm">
            <Link to="/" className="hover:text-blue-300 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-300 transition-colors font-medium">
              About
            </Link>
              <Link to="/properties" className="hover:text-blue-300 transition-colors font-medium">
                Properties
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
                to="/properties" 
                className="hover:text-blue-300 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Properties
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
      <div className="relative z-10 px-8 pt-8 md:pt-0 pb-24 xl:pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
            {/* Left Content - Exact match to design */}
            <div className="text-white space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  FIND YOUR<br />
                  PLACE<br />
                  OF DREAM
                </h1>
              </div>
              
              <p className="text-base lg:text-md opacity-80 max-w-sm leading-relaxed">
                We are glad to have you around. Feel free to browse our website.
              </p>
              
              {/* Search bar - matching design exactly */}
              <div>
                <div className="bg-white rounded-full px-2 py-1 flex items-center max-w-sm shadow-lg">
                  <input 
                    type="text" 
                    placeholder="Find a Location" 
                    className="bg-transparent text-slate-900 placeholder-slate-400 outline-none flex-1 px-4 py-1 text-sm"
                    value={searchLocation}
                    onChange={e => setSearchLocation(e.target.value)}
                  />
                  <button
                    className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors"
                    onClick={handleSearch}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;
