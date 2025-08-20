import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash, FaEye, FaImage, FaStar, FaMapMarkerAlt, FaHome, FaBed, FaBath, FaUsers, FaWifi, FaCar, FaSwimmingPool, FaUtensils, FaTv, FaSnowflake, FaLeaf, FaWater, FaVideo, FaBicycle, FaDumbbell, FaShieldAlt, FaTimes, FaKey, FaHandSparkles, FaCalendarTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import lunarisLogo from '../assets/images/Lunaris-management-logo.png';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('properties');
  const [showAddPropertyModal, setShowAddPropertyModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [properties, setProperties] = useState([
    {
      id: 1,
      name: "PROPERTY NAME",
      location: 'Islamabad',
      distance: 5.2,
      rating: 4.93,
      reviewCount: 9,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80'
      ]
    }
  ]);

  const [newProperty, setNewProperty] = useState({
    name: '',
    location: '',
    distance: '',
    guests: '',
    bedrooms: '',
    bathrooms: '',
    fullDescription: '',
    images: [],
    features: [],
    customFeatures: [],
    amenities: [],
    customAmenities: [],
    reviews: []
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [customAmenityInput, setCustomAmenityInput] = useState('');
  const [customFeatureInput, setCustomFeatureInput] = useState('');
  const [customFeatureName, setCustomFeatureName] = useState('');
  const [customFeatureDescription, setCustomFeatureDescription] = useState('');
  
  // Review form state
  const [reviewForm, setReviewForm] = useState({
    username: '',
    userphoto: null,
    userphotoPreview: '',
    review: '',
    rating: 3
  });
  
  const availableFeatures = [
    { icon: FaHome, name: 'Entire home', description: "You'll have the apartment to yourself", id: 'entire_home' },
    { icon: FaHandSparkles, name: 'Enhanced Clean', description: "This Host committed to Airbnb's 5-step enhanced cleaning process", id: 'enhanced_clean' },
    { icon: FaKey, name: 'Self check-in', description: 'Check yourself in with the keypad', id: 'self_checkin' },
    { icon: FaCalendarTimes, name: 'Free cancellation', description: 'Flexible cancellation policy', id: 'free_cancellation' }
  ];

  const availableAmenities = [
    { icon: FaWifi, name: 'WiFi', id: 'wifi' },
    { icon: FaCar, name: 'Free parking', id: 'parking' },
    { icon: FaSwimmingPool, name: 'Pool', id: 'pool' },
    { icon: FaUtensils, name: 'Kitchen', id: 'kitchen' },
    { icon: FaTv, name: 'TV', id: 'tv' },
    { icon: FaSnowflake, name: 'Air conditioning', id: 'ac' },
    { icon: FaLeaf, name: 'Garden view', id: 'garden' },
    { icon: FaWater, name: 'Free washer - in building', id: 'washer' },
    { icon: FaUtensils, name: 'Refrigerator', id: 'refrigerator' },
    { icon: FaVideo, name: 'Dryer', id: 'dryer' },
    { icon: FaShieldAlt, name: 'Security cameras on property', id: 'security' },
    { icon: FaBicycle, name: 'Bicycles', id: 'bicycles' },
    { icon: FaUsers, name: 'Pets allowed', id: 'pets' },
    { icon: FaDumbbell, name: 'Gym/Fitness center', id: 'gym' },
    { icon: FaWifi, name: 'High-speed internet', id: 'highspeed_wifi' },
    { icon: FaCar, name: 'Garage parking', id: 'garage' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProperty(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    // Combine existing images with new ones
    const combinedImages = [...selectedImages, ...files];
    
    // Limit to maximum 10 images
    if (combinedImages.length > 10) {
      alert(`You can upload maximum 10 images. ${combinedImages.length - 10} images will not be added.`);
      const limitedFiles = combinedImages.slice(0, 10);
      setSelectedImages(limitedFiles);
      
      // Create URLs for preview
      const imageUrls = limitedFiles.map(file => URL.createObjectURL(file));
      setNewProperty(prev => ({
        ...prev,
        images: imageUrls
      }));
    } else {
      setSelectedImages(combinedImages);
      
      // Create URLs for preview
      const imageUrls = combinedImages.map(file => URL.createObjectURL(file));
      setNewProperty(prev => ({
        ...prev,
        images: imageUrls
      }));
    }
    
    // Clear the input so same files can be selected again if needed
    e.target.value = '';
  };

  const removeImage = (index) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
    
    const imageUrls = updatedImages.map(file => URL.createObjectURL(file));
    setNewProperty(prev => ({
      ...prev,
      images: imageUrls
    }));
  };

  const handleFeatureToggle = (feature) => {
    setNewProperty(prev => {
      const isSelected = prev.features.some(f => f.id === feature.id);
      if (isSelected) {
        return {
          ...prev,
          features: prev.features.filter(f => f.id !== feature.id)
        };
      } else {
        return {
          ...prev,
          features: [...prev.features, feature]
        };
      }
    });
  };

  const handleAddCustomFeature = () => {
    if (customFeatureName.trim() !== '' && customFeatureDescription.trim() !== '') {
      const customFeature = {
        icon: FaPlus,
        name: customFeatureName.trim(),
        description: customFeatureDescription.trim(),
        id: `custom_feature_${Date.now()}`,
        isCustom: true
      };
      
      setNewProperty(prev => ({
        ...prev,
        customFeatures: [...prev.customFeatures, customFeature]
      }));
      
      setCustomFeatureName('');
      setCustomFeatureDescription('');
    }
  };

  const handleRemoveCustomFeature = (customFeatureId) => {
    setNewProperty(prev => ({
      ...prev,
      customFeatures: prev.customFeatures.filter(f => f.id !== customFeatureId)
    }));
  };

  const handleAmenityToggle = (amenity) => {
    setNewProperty(prev => {
      const isSelected = prev.amenities.some(a => a.id === amenity.id);
      if (isSelected) {
        return {
          ...prev,
          amenities: prev.amenities.filter(a => a.id !== amenity.id)
        };
      } else {
        return {
          ...prev,
          amenities: [...prev.amenities, amenity]
        };
      }
    });
  };

  const handleAddCustomAmenity = () => {
    if (customAmenityInput.trim() !== '') {
      const customAmenity = {
        icon: FaPlus,
        name: customAmenityInput.trim(),
        id: `custom_${Date.now()}`,
        isCustom: true
      };
      
      setNewProperty(prev => ({
        ...prev,
        customAmenities: [...prev.customAmenities, customAmenity]
      }));
      
      setCustomAmenityInput('');
    }
  };

  const handleRemoveCustomAmenity = (customAmenityId) => {
    setNewProperty(prev => ({
      ...prev,
      customAmenities: prev.customAmenities.filter(a => a.id !== customAmenityId)
    }));
  };

  // Review handlers
  const handleReviewInputChange = (field, value) => {
    setReviewForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleReviewPhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setReviewForm(prev => ({
        ...prev,
        userphoto: file,
        userphotoPreview: previewUrl
      }));
    }
  };

  const handleAddReview = () => {
    if (reviewForm.username.trim() && reviewForm.userphoto && reviewForm.review.trim()) {
      const newReview = {
        id: `review_${Date.now()}`,
        username: reviewForm.username.trim(),
        userphoto: reviewForm.userphotoPreview, // Use preview URL for display
        review: reviewForm.review.trim(),
        rating: reviewForm.rating
      };
      
      setNewProperty(prev => ({
        ...prev,
        reviews: [...prev.reviews, newReview]
      }));
      
      // Reset form
      setReviewForm({
        username: '',
        userphoto: null,
        userphotoPreview: '',
        review: '',
        rating: 3
      });
    }
  };

  const handleRemoveReview = (reviewId) => {
    setNewProperty(prev => ({
      ...prev,
      reviews: prev.reviews.filter(r => r.id !== reviewId)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!newProperty.name || !newProperty.location || !newProperty.distance) {
      alert('Please fill in all required fields');
      return;
    }

    const property = {
      ...newProperty,
      id: Date.now(), // Simple ID generation
      rating: 0,
      reviewCount: 0,
      status: 'active',
      distance: parseFloat(newProperty.distance),
      guests: parseInt(newProperty.guests),
      bedrooms: parseInt(newProperty.bedrooms),
      bathrooms: parseInt(newProperty.bathrooms),
      reviews: []
    };

    setProperties([...properties, property]);
    
    // Reset form
    setNewProperty({
      name: '',
      location: '',
      distance: '',
      guests: '',
      bedrooms: '',
      bathrooms: '',
      fullDescription: '',
      images: [],
      features: [],
      customFeatures: [],
      amenities: [],
      customAmenities: []
    });
    setSelectedImages([]);
    setCustomAmenityInput('');
    setCustomFeatureInput('');
    setCustomFeatureName('');
    setCustomFeatureDescription('');
    setReviewForm({
      username: '',
      userphoto: null,
      userphotoPreview: '',
      review: '',
      rating: 3
    });
    setShowAddPropertyModal(false);
    
    alert('Property added successfully!');
  };

  const deleteProperty = (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      setProperties(properties.filter(prop => prop.id !== id));
    }
  };

  // Image slider functions
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="shadow-sm border-b border-gray-200 py-2 sm:py-3" style={{backgroundColor: '#121b2d'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src={lunarisLogo} 
                alt="Lunaris Management & Co." 
                className="h-10 w-28 sm:h-14 sm:w-36 lg:h-16 lg:w-40"
              />
              <span className="ml-2 sm:ml-4 text-lg sm:text-xl font-semibold text-white hidden sm:block">Admin Dashboard</span>
              <span className="ml-2 text-sm font-semibold text-white sm:hidden">Admin</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-white px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium"
              >
                <span className="hidden sm:inline">View Site</span>
                <span className="sm:hidden">Site</span>
              </Link>
              <button className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium">
                <span className="hidden sm:inline">Logout</span>
                <span className="sm:hidden">Exit</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Property Management</h1>
          <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">Manage your properties and listings</p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6 sm:mb-8">
          <nav className="-mb-px flex space-x-4 sm:space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('properties')}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'properties'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Properties ({properties.length})
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'analytics'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Analytics
            </button>
          </nav>
        </div>

        {/* Properties Tab */}
        {activeTab === 'properties' && (
          <div>
            {/* Add Property Button */}
            <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">All Properties</h2>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm w-fit">
                  {properties.length} total
                </span>
              </div>
              <button
                onClick={() => setShowAddPropertyModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-medium text-sm sm:text-base w-full sm:w-auto"
              >
                <FaPlus className="w-4 h-4" />
                Add Property
              </button>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {properties.map((property) => {
                const currentIndex = currentImageIndex[property.id] || 0;
                return (
                  <div key={property.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
                    <div className="h-40 sm:h-48 bg-gray-200 relative overflow-hidden">
                      {property.images && property.images.length > 0 ? (
                        <>
                          <img
                            src={property.images[currentIndex]}
                            alt={property.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
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
                        </>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FaImage className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
                        </div>
                      )}
                    </div>
                    
                    <div className="p-3 sm:p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 truncate text-sm sm:text-base">{property.name}</h3>
                      
                      <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-2">
                        <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        <span className="truncate">{property.location}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="flex items-center">
                            <FaUsers className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            <span>{property.guests}</span>
                          </div>
                          <div className="flex items-center">
                            <FaBed className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            <span>{property.bedrooms}</span>
                          </div>
                          <div className="flex items-center">
                            <FaBath className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                            <span>{property.bathrooms}</span>
                          </div>
                        </div>
                        {property.rating > 0 && (
                          <div className="flex items-center">
                            <FaStar className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 mr-1" />
                            <span>{property.rating}</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-lg font-bold text-gray-900">{property.distance || 0} km</span>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <Link
                            to={`/property/${property.id}`}
                            className="p-1.5 sm:p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="View Property"
                          >
                            <FaEye className="w-3 h-3 sm:w-4 sm:h-4" />
                          </Link>
                          <button
                            className="p-1.5 sm:p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            title="Edit Property"
                          >
                            <FaEdit className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <button
                            onClick={() => deleteProperty(property.id)}
                            className="p-1.5 sm:p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Property"
                          >
                            <FaTrash className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {properties.length === 0 && (
              <div className="text-center py-8 sm:py-12">
                <FaHome className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No properties yet</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4">Get started by adding your first property.</p>
                <button
                  onClick={() => setShowAddPropertyModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base"
                >
                  Add Your First Property
                </button>
              </div>
            )}
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="text-center py-8 sm:py-12 px-4">
            <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">Analytics Coming Soon</h3>
            <p className="text-sm sm:text-base text-gray-600">Property analytics and insights will be available here.</p>
          </div>
        )}
      </div>

      {/* Add Property Modal */}
      {showAddPropertyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Add New Property</h2>
                <button
                  onClick={() => setShowAddPropertyModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Basic Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={newProperty.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter property name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={newProperty.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter location"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Distance (km) *
                  </label>
                  <input
                    type="number"
                    name="distance"
                    value={newProperty.distance}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter distance in km"
                    min="0"
                    step="0.1"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Guests
                  </label>
                  <input
                    type="number"
                    name="guests"
                    value={newProperty.guests}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Number of guests"
                    min="1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    name="bedrooms"
                    value={newProperty.bedrooms}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Number of bedrooms"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    name="bathrooms"
                    value={newProperty.bathrooms}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Number of bathrooms"
                    min="0"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Description
                </label>
                <textarea
                  name="fullDescription"
                  value={newProperty.fullDescription}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter detailed description of the property"
                />
              </div>

              {/* Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Images
                  <span className="text-gray-500 text-xs ml-2">
                    ({selectedImages.length}/10 images selected)
                  </span>
                </label>
                <div className="space-y-3">
                  <div className="flex flex-col space-y-2">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      disabled={selectedImages.length >= 10}
                    />
                    <p className="text-xs text-gray-600">
                      Select images one by one or multiple at once. Supported formats: JPG, PNG, GIF, WebP
                    </p>
                    {selectedImages.length >= 10 ? (
                      <p className="text-xs text-orange-600 font-medium">
                        Maximum limit reached. Remove some images to add new ones.
                      </p>
                    ) : (
                      <p className="text-xs text-blue-600">
                        You can add {10 - selectedImages.length} more images.
                      </p>
                    )}
                  </div>
                  
                  {/* Image Preview */}
                  {selectedImages.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Images:</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {selectedImages.map((file, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={URL.createObjectURL(file)}
                              alt={`Preview ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg border border-gray-300 transition-transform group-hover:scale-105"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 transition-colors"
                              title="Remove image"
                            >
                              ×
                            </button>
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg">
                              <p className="truncate">{file.name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedImages.length === 0 && (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <FaImage className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">No images selected yet</p>
                      <p className="text-xs text-gray-500 mt-1">Click above to select images</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Property Features
                </label>
                
                {/* Predefined Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Select key features:</h4>
                  <div className="space-y-3">
                    {availableFeatures.map((feature) => (
                      <label
                        key={feature.id}
                        className={`flex items-start space-x-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                          newProperty.features.some(f => f.id === feature.id)
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={newProperty.features.some(f => f.id === feature.id)}
                          onChange={() => handleFeatureToggle(feature)}
                          className="sr-only"
                        />
                        {React.createElement(feature.icon, { className: "w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" })}
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-900 block">{feature.name}</span>
                          <span className="text-xs text-gray-600">{feature.description}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Custom Features */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Add custom features:</h4>
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        value={customFeatureName}
                        onChange={(e) => setCustomFeatureName(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Feature name (e.g., Pet-friendly, Business center)"
                      />
                      <input
                        type="text"
                        value={customFeatureDescription}
                        onChange={(e) => setCustomFeatureDescription(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleAddCustomFeature()}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Feature description (e.g., Pets are welcome, Full business facilities)"
                      />
                      <button
                        type="button"
                        onClick={handleAddCustomFeature}
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium flex items-center gap-1 whitespace-nowrap"
                      >
                        <FaPlus className="w-3 h-3" />
                        Add
                      </button>
                    </div>
                  </div>
                  
                  {/* Display Custom Features */}
                  {newProperty.customFeatures.length > 0 && (
                    <div className="mt-3">
                      <h5 className="text-xs font-medium text-gray-500 mb-2">Custom features added:</h5>
                      <div className="flex flex-wrap gap-2">
                        {newProperty.customFeatures.map((feature) => (
                          <div
                            key={feature.id}
                            className="flex items-center space-x-2 bg-purple-50 border border-purple-200 rounded-lg px-3 py-2"
                          >
                            <FaPlus className="w-4 h-4 text-purple-600" />
                            <span className="text-sm text-purple-800">{feature.name}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveCustomFeature(feature.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <FaTimes className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Amenities
                </label>
                
                {/* Predefined Amenities */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Select from available amenities:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {availableAmenities.map((amenity) => (
                      <label
                        key={amenity.id}
                        className={`flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 border rounded-lg cursor-pointer transition-colors ${
                          newProperty.amenities.some(a => a.id === amenity.id)
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={newProperty.amenities.some(a => a.id === amenity.id)}
                          onChange={() => handleAmenityToggle(amenity)}
                          className="sr-only"
                        />
                        {React.createElement(amenity.icon, { className: "w-5 h-5 text-gray-600" })}
                        <span className="text-sm font-medium text-gray-700">{amenity.name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Custom Amenities */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">Add custom amenities:</h4>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="text"
                      value={customAmenityInput}
                      onChange={(e) => setCustomAmenityInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddCustomAmenity()}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="Enter custom amenity (e.g., Rooftop terrace, Hot tub, etc.)"
                    />
                    <button
                      type="button"
                      onClick={handleAddCustomAmenity}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium flex items-center gap-1 whitespace-nowrap"
                    >
                      <FaPlus className="w-3 h-3" />
                      Add
                    </button>
                  </div>
                  
                  {/* Display Custom Amenities */}
                  {newProperty.customAmenities.length > 0 && (
                    <div className="mt-3">
                      <h5 className="text-xs font-medium text-gray-500 mb-2">Custom amenities added:</h5>
                      <div className="flex flex-wrap gap-2">
                        {newProperty.customAmenities.map((amenity) => (
                          <div
                            key={amenity.id}
                            className="flex items-center space-x-2 bg-green-50 border border-green-200 rounded-lg px-3 py-2"
                          >
                            <FaPlus className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-green-800">{amenity.name}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveCustomAmenity(amenity.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <FaTimes className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Reviews Section */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-600 mb-3">Add Reviews:</h4>
                  
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        value={reviewForm.username}
                        onChange={(e) => handleReviewInputChange('username', e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        placeholder="Username (e.g., John Doe)"
                      />
                      <div className="space-y-2">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleReviewPhotoUpload}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm w-full"
                        />
                        {reviewForm.userphotoPreview && (
                          <div className="flex items-center gap-2">
                            <img
                              src={reviewForm.userphotoPreview}
                              alt="Preview"
                              className="w-10 h-10 rounded-full object-cover border border-gray-300"
                            />
                            <span className="text-xs text-gray-600">Photo selected</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <textarea
                      value={reviewForm.review}
                      onChange={(e) => handleReviewInputChange('review', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      placeholder="Review text (e.g., Amazing place to stay! Very clean and comfortable.)"
                      rows="3"
                    />
                    
                    <div className="flex items-center gap-3">
                      <label className="text-sm font-medium text-gray-600">Rating:</label>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleReviewInputChange('rating', star)}
                            className={`w-6 h-6 ${star <= reviewForm.rating ? 'text-yellow-400' : 'text-gray-300'} hover:text-yellow-400 transition-colors`}
                          >
                            <FaStar className="w-full h-full" />
                          </button>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">({reviewForm.rating}/5)</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleAddReview}
                        className="ml-auto px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium flex items-center gap-1"
                      >
                        <FaPlus className="w-3 h-3" />
                        Add Review
                      </button>
                    </div>
                  </div>
                  
                  {/* Display Added Reviews */}
                  {newProperty.reviews.length > 0 && (
                    <div className="mt-4">
                      <h5 className="text-xs font-medium text-gray-500 mb-3">Reviews added ({newProperty.reviews.length}):</h5>
                      <div className="space-y-3 max-h-48 overflow-y-auto">
                        {newProperty.reviews.map((review) => (
                          <div
                            key={review.id}
                            className="bg-gray-50 border border-gray-200 rounded-lg p-3"
                          >
                            <div className="flex items-start gap-3">
                              <img
                                src={review.userphoto}
                                alt={review.username}
                                className="w-10 h-10 rounded-full object-cover"
                                onError={(e) => {
                                  e.target.src = 'https://via.placeholder.com/40x40/gray/white?text=U';
                                }}
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <h6 className="font-medium text-gray-900 text-sm">{review.username}</h6>
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveReview(review.id)}
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <FaTimes className="w-4 h-4" />
                                  </button>
                                </div>
                                <div className="flex items-center gap-1 mt-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                      key={star}
                                      className={`w-3 h-3 ${star <= review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                    />
                                  ))}
                                  <span className="text-xs text-gray-600 ml-1">({review.rating}/5)</span>
                                </div>
                                <p className="text-sm text-gray-700 mt-2">{review.review}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowAddPropertyModal(false)}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm sm:text-base"
                >
                  Add Property
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
