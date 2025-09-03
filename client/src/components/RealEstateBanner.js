import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import landingPageImage from '../assets/images/landing-page.png';

const RealEstateBanner = () => {
  return (
    <motion.div
      className="px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen py-8 sm:py-12 lg:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Container with responsive width, centered, and background */}
      <motion.div
        className="w-full max-w-[1200px] mx-auto bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl sm:rounded-2xl lg:rounded-3xl"
        initial={{ scale: 0.95, y: 40 }}
        whileInView={{ scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-4 sm:space-y-6 p-6 sm:p-8 md:p-12 lg:p-16"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              FIND YOUR BEST
              <br />
              <span className="text-gray-900">REAL ESTATE</span>
            </motion.h1>
            <motion.p
              className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              We provide a complete service for the sale, 
              purchase or rental of real estate.
            </motion.p>
            <div>
              <Link 
                to="/contact"
                className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 sm:py-3 sm:px-8 rounded-lg text-sm sm:text-base text-center"
              >
                CONTACT US
              </Link>
            </div>
          </motion.div>
          {/* Right Content - House Image */}
          <motion.div
            className="relative p-4 sm:p-6 lg:p-8"
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div
              className="relative z-10"
              initial={{ scale: 0.9, rotate: -5 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5, type: 'spring', stiffness: 100 }}
            >
              <div>
                <motion.img 
                  src={landingPageImage} 
                  alt="Modern Real Estate Property" 
                  className="w-full h-auto object-contain rounded-lg sm:rounded-xl"
                  transition={{ type: 'spring', stiffness: 200 }}
                />
              </div>
            </motion.div>
            {/* Decorative Elements - Hidden on very small screens */}
            <motion.div
              className="hidden sm:block absolute top-4 right-4 w-8 h-8 sm:w-12 sm:h-12 bg-yellow-300 rounded-full opacity-60"
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2 }}
            ></motion.div>
            <motion.div
              className="hidden sm:block absolute bottom-8 left-8 w-6 h-6 sm:w-8 sm:h-8 bg-green-300 rounded-full opacity-40"
              animate={{ y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, delay: 1 }}
            ></motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RealEstateBanner;