import React from 'react';
import { Link } from 'react-router-dom';
import landingPageImage from '../assets/images/landing-page.png';

const RealEstateBanner = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen py-8 sm:py-12 lg:py-16">
      {/* Main Container with responsive width, centered, and background */}
      <div className="w-full max-w-[1200px] mx-auto bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl sm:rounded-2xl lg:rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 p-6 sm:p-8 md:p-12 lg:p-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              FIND YOUR BEST
              <br />
              <span className="text-gray-900">REAL ESTATE</span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-md leading-relaxed">
              We provide a complete service for the sale, 
              purchase or rental of real estate.
            </p>
            
            <Link 
              to="/contact"
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg text-sm sm:text-base text-center"
            >
              CONTACT US
            </Link>
          </div>
          
          {/* Right Content - House Image */}
          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="relative z-10">
              <div>
                <img 
                  src={landingPageImage} 
                  alt="Modern Real Estate Property" 
                  className="w-full h-auto object-contain rounded-lg sm:rounded-xl"
                />
              </div>
            </div>
            
            {/* Decorative Elements - Hidden on very small screens */}
            <div className="hidden sm:block absolute top-4 right-4 w-8 h-8 sm:w-12 sm:h-12 bg-yellow-300 rounded-full opacity-60 animate-pulse"></div>
            <div className="hidden sm:block absolute bottom-8 left-8 w-6 h-6 sm:w-8 sm:h-8 bg-green-300 rounded-full opacity-40 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstateBanner;