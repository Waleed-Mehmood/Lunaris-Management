import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PropertyListings = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Sample property data with multiple images for slider
  const properties = [
    {
      id: 1,
      name: 'Luxury Villa Paradise',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      ],
      location: 'Islamabad, Pakistan',
      distance: '7.994 km away',
      rating: 4.93
    },
    {
      id: 2,
      name: 'Modern City Apartment',
      images: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      ],
      location: 'Islamabad, Pakistan',
      distance: '7.994 km away',
      rating: 4.93
    },
    {
      id: 3,
      name: 'Cozy Family Home',
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      ],
      location: 'Islamabad, Pakistan',
      distance: '7.994 km away',
      rating: 4.93
    },
    {
      id: 4,
      name: 'Executive Penthouse',
      images: [
        'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      ],
      location: 'Islamabad, Pakistan',
      distance: '7.994 km away',
      rating: 4.93
    }
  ];

  const nextImage = (propertyId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [propertyId]: ((prev[propertyId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (propertyId, totalImages) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [propertyId]: ((prev[propertyId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const goToImage = (propertyId, imageIndex) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [propertyId]: imageIndex
    }));
  };

  return (
    <div className="property-listings-section bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center mb-8 w-full justify-center">
            {/* Left Arrow */}
            <svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M12 6H0" stroke="#CBE9FF" strokeWidth="2"/>
              <path d="M6 1L0 6L6 11" stroke="#CBE9FF" strokeWidth="2"/>
            </svg>
            {/* Heading */}
            <h2 className="text-[#1A2A49] font-bold text-2xl md:text-3xl tracking-wide" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>RECENTLY ADDED</h2>
            {/* Right Line */}
            <div className="flex-1 ml-2 h-0.5 rounded-full" style={{minWidth: '32px', background: '#CBE9FF'}}></div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {properties.map((property) => {
            const currentIndex = currentImageIndex[property.id] || 0;
            return (
              <div key={property.id} className="property-card group">
                {/* Property Image Slider */}
                <div className="relative overflow-hidden rounded-xl mb-3">
                  <img
                    src={property.images[currentIndex]}
                    alt={property.location}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Navigation Arrows */}
                  {property.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage(property.id, property.images.length);
                        }}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                      >
                        <FaChevronLeft className="w-3 h-3 text-gray-800" />
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(property.id, property.images.length);
                        }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                      >
                        <FaChevronRight className="w-3 h-3 text-gray-800" />
                      </button>
                    </>
                  )}
                  
                  {/* Image Dots Indicator */}
                  {property.images.length > 1 && (
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
                      {property.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            goToImage(property.id, index);
                          }}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentIndex 
                              ? 'bg-white' 
                              : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Property Details */}
                <Link to={`/property/${property.id}`}>
                <div className="space-y-1 px-2 py-2 md:px-0 md:py-0">
                  {/* Property Name */}
                  <h2 className="font-bold text-gray-900 text-base mb-2">
                    {property.name}
                  </h2>
                  
                  {/* Location and Rating */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {property.location}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <svg
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-900">
                        {property.rating}
                      </span>
                    </div>
                  </div>

                  {/* Distance */}
                  <p className="text-sm text-gray-600">
                    {property.distance}
                  </p>
                </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <Link
            to="/properties"
            className="inline-block px-6 py-1.5 rounded-lg border"
            style={{
              background: '#CBE9FF',
              borderColor: '#1A2A49',
              color: '#1A2A49',
              fontWeight: 'bold',
              fontSize: '0.95rem',
              boxShadow: '0 1px 2px 0 rgba(26,42,73,0.04)',
              textDecoration: 'none'
            }}
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyListings;
