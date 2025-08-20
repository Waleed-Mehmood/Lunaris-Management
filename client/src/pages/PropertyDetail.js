import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaStar, FaChevronLeft, FaChevronRight, FaWifi, FaCar, FaSwimmingPool, FaUtensils, FaTv, FaSnowflake, FaHeart, FaShare, FaMapMarkerAlt } from 'react-icons/fa';
import lunarisLogo from '../assets/images/Lunaris-management-logo.png';
import Footer from '../components/Footer';

const PropertyDetail = () => {
  const { id } = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedDates, setSelectedDates] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Sample property data
  const property = {
    id: 1,
    name: "PROPERTY NAME",
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
    ],
    location: 'Islamabad',
    superhost: true,
    rating: 4.93,
    reviewCount: 9,
    description: 'The best stay is the place and it is listed as the place to start. Let us begin!',
    fullDescription: 'Our beautiful property offers a unique experience with stunning views and modern amenities. Located in the heart of Australia, this guest favorite provides the perfect retreat for travelers seeking comfort and luxury. The space is thoughtfully designed with attention to detail, ensuring your stay is memorable and relaxing.',
    price: 180,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: [
      { icon: FaWifi, name: 'WiFi' },
      { icon: FaCar, name: 'Free parking' },
      { icon: FaSwimmingPool, name: 'Pool' },
      { icon: FaUtensils, name: 'Kitchen' },
      { icon: FaTv, name: 'TV' },
      { icon: FaSnowflake, name: 'Air conditioning' }
    ],
    reviews: [
      {
        id: 1,
        user: 'Sarah',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=150&q=80',
        rating: 5,
        date: 'October 2024',
        comment: 'Amazing property with beautiful views. The host was incredibly welcoming and the space was exactly as described.'
      },
      {
        id: 2,
        user: 'Michael',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&q=80',
        rating: 5,
        date: 'September 2024',
        comment: 'Perfect location and spotlessly clean. Would definitely stay here again!'
      },
      {
        id: 3,
        user: 'Emily',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&q=80',
        rating: 4,
        date: 'August 2024',
        comment: 'Great amenities and very comfortable. The kitchen was well-equipped for cooking.'
      }
    ]
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleBooking = () => {
    console.log('Booking details:', selectedDates);
    // Implement booking functionality
  };

  const handleShare = async () => {
    const shareData = {
      title: property.name,
      text: `Check out this amazing property: ${property.name} in ${property.location}`,
      url: window.location.href
    };

    try {
      // Check if Web Share API is supported
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Property link copied to clipboard!');
      }
    } catch (error) {
      // Additional fallback for older browsers
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Property link copied to clipboard!');
      } catch (clipboardError) {
        // Manual fallback - show the URL in a prompt
        prompt('Copy this link to share:', window.location.href);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="relative z-20 px-4 sm:px-6 lg:px-8 py-3 sm:py-4" style={{backgroundColor: '#121b2d'}}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={lunarisLogo} 
              alt="Lunaris Management & Co." 
              className="h-12 w-24 sm:h-16 sm:w-32 lg:h-20 lg:w-48"
            />
          </div>

          {/* Navigation Links */}
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

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/properties" className="hover:text-gray-800 transition-colors">Properties</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{property.name}</span>
        </div>
      </div>

      {/* Property Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              {property.name}
            </h1>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center">
                <FaStar className="w-4 h-4 text-black mr-1" />
                <span className="font-semibold">{property.rating}</span>
                <span className="text-gray-600 ml-1">({property.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                <span>{property.location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <FaShare className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <FaHeart className="w-4 h-4" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 relative z-10">
        {/* Desktop View - Grid Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-2 h-96 overflow-hidden rounded-lg">
            {/* Main Image */}
            <div className="relative col-span-2 row-span-2">
              <img
                src={property.images[0]}
                alt={property.name}
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
            
            {/* Grid Images */}
            {property.images.slice(1, 5).map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image}
                  alt={`${property.name} ${index + 2}`}
                  className={`w-full h-full object-cover ${
                    index === 1 ? 'rounded-tr-lg' : 
                    index === 3 ? 'rounded-br-lg' : ''
                  }`}
                />
                {index === 3 && property.images.length > 5 && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-br-lg z-20">
                    <span className="text-white font-semibold">+{property.images.length - 5} more</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet View - Single Image with Thumbnails */}
        <div className="lg:hidden">
          {/* Main Image */}
          <div className="relative h-64 md:h-80 mb-4">
            <img
              src={property.images[currentImageIndex]}
              alt={property.name}
              className="w-full h-full object-cover rounded-lg"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <FaChevronLeft className="w-4 h-4 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
            >
              <FaChevronRight className="w-4 h-4 text-gray-800" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {property.images.length}
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 relative ${
                  currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`${property.name} thumbnail ${index + 1}`}
                  className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg"
                />
                {currentImageIndex === index && (
                  <div className="absolute inset-0 bg-blue-500/20 rounded-lg"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Info */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Entire home</h2>
                  <p className="text-gray-600">{property.guests} guests • {property.bedrooms} bedrooms • {property.bathrooms} bathrooms</p>
                </div>
              </div>
              
              {/* Property Features */}
              <div className="space-y-6 my-8">
                {/* Entire home */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-700">
                      <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Entire home</h4>
                    <p className="text-gray-600 text-sm">You'll have the apartment to yourself</p>
                  </div>
                </div>

                {/* Enhanced Clean */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-700">
                      <path fill="currentColor" d="M9.5 2C8.67 2 8 2.67 8 3.5v17c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5V14h2.5c.83 0 1.5-.67 1.5-1.5v-9C20 2.67 19.33 2 18.5 2h-9z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Enhanced Clean</h4>
                    <p className="text-gray-600 text-sm">This Host committed to Airbnb's 5-step enhanced cleaning process. <span className="underline cursor-pointer">Show more</span></p>
                  </div>
                </div>

                {/* Self check-in */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-700">
                      <path fill="currentColor" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM12 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM15.1 8H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Self check-in</h4>
                    <p className="text-gray-600 text-sm">Check yourself in with the keypad.</p>
                  </div>
                </div>

                {/* Free cancellation */}
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-gray-700">
                      <path fill="currentColor" d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Free cancellation before Feb 2</h4>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{property.fullDescription}</p>
            </div>

            {/* What this place offers */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">What this place offers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <amenity.icon className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              {/* Reviews Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <FaStar className="w-6 h-6 text-yellow-400" />
                  <span className="text-2xl font-bold text-gray-900">{property.rating}</span>
                  <span className="text-xl font-semibold text-gray-700">• {property.reviewCount} reviews</span>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-semibold text-sm border border-blue-600 hover:border-blue-800 px-4 py-2 rounded-lg transition-colors">
                  Show all reviews
                </button>
              </div>
              
              {/* Reviews Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {property.reviews.map((review) => (
                  <div key={review.id} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-3 mb-4">
                      <img
                        src={review.avatar}
                        alt={review.user}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{review.user}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                    
                    {/* Read more functionality for longer reviews */}
                    {review.comment.length > 150 && (
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition-colors">
                        Read more
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Show More Reviews Button */}
              <div className="mt-8 text-center">
                <button className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-sm">
                  Show more reviews ({property.reviewCount - 3} more)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default PropertyDetail;
