import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import lunarisLogo from '../assets/images/Lunaris-management-logo.png';

import { HiLocationMarker } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="col-span-1 lg:col-span-2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center mb-4">
              <Link to="/">
                <motion.img 
                  src={lunarisLogo} 
                  alt="Lunaris Management" 
                  className="h-20 w-48 mr-3"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              </Link>
            </div>
            <motion.p
              className="text-gray-300 mb-4 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Your trusted partner in real estate management. We provide comprehensive 
              property management solutions with excellence and integrity.
            </motion.p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {/* Facebook */}
              <motion.button
                type="button"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                onClick={() => window.open('https://www.facebook.com/share/1788zGSvND/?mibextid=wwXIfr', '_blank')}
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.button>
              {/* Instagram */}
              <motion.button
                type="button"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                onClick={() => window.open('https://www.instagram.com/lunaris_management?igsh=cXMwZnY5azNkYWE1', '_blank')}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.button>
              {/* LinkedIn */}
              <motion.button
                type="button"
                className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                onClick={() => window.open('https://www.linkedin.com/company/lunaris-management', '_blank')}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/properties" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                    Contact Us
                  </Link>
                </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <HiLocationMarker size={20} className="mr-2 flex-shrink-0 min-w-[20px] min-h-[20px]" />
                Al Ghurair Giga Westria road, Plaza No #34 2nd Floor, DHA phase 2, Islamabad
              </li>
              <li className="flex items-center text-gray-300">
                <BsTelephoneFill size={20} className="mr-2 flex-shrink-0 min-w-[20px] min-h-[20px]" />
                (+92)3199911931
              </li>
              <li className="flex items-center text-gray-300">
                <MdEmail size={20} className="mr-2 flex-shrink-0 min-w-[20px] min-h-[20px]" />
                <a href="mailto:lunarismanagement14@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
                  lunarismanagement14@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 mt-8 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Lunaris Management. All rights reserved.
            </div>
            {/* Developer Credit */}
            <motion.div
              className="flex items-center space-x-2 text-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="text-gray-400">Developed by</span>
              <a 
                href="https://techxserve.co/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300"
              >
                Techxserve
              </a>
              <motion.div
                className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
