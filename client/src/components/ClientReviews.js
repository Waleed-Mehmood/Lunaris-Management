import React, { useState, useEffect, useRef } from 'react';

const ClientReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [screenSize, setScreenSize] = useState('desktop');
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const prevScreenSize = screenSize;
      const width = window.innerWidth;
      
      let newScreenSize;
      if (width < 768) {
        newScreenSize = 'mobile'; // 1 card
      } else if (width < 992) {
        newScreenSize = 'tablet'; // 2 cards
      } else {
        newScreenSize = 'desktop'; // 3 cards
      }
      
      setScreenSize(newScreenSize);
      
      // Reset slide when switching between screen sizes
      if (prevScreenSize !== newScreenSize) {
        setCurrentSlide(0);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [screenSize]);

  // Sample review data based on the image
  const reviews = [
    {
      id: 1,
      name: 'Leo',
      location: 'Hanibad, Pakistan',
      rating: 4,
      title: 'Excellent Property Management Service',
      review: 'Lunaris provided exceptional property management services. The team was professional, responsive, and helped me find the perfect property within my budget. Their attention to detail and customer service exceeded my expectations. I would definitely recommend them to anyone looking for reliable property solutions.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Usman',
      location: 'Islamabad, Pakistan',
      rating: 5,
      title: 'Outstanding Investment Guidance',
      review: 'Working with Lunaris was a game-changer for my real estate investments. Their market knowledge and strategic insights helped me make informed decisions. The entire process was smooth, transparent, and profitable. I couldn\'t have asked for better guidance in the property market.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Bilal',
      location: 'Islamabad, Pakistan',
      rating: 4,
      title: 'Professional and Reliable Team',
      review: 'The Lunaris team demonstrated exceptional professionalism throughout my property buying journey. They were always available to answer questions, provided honest advice, and made the complex process seem effortless. Their market expertise and commitment to client satisfaction is truly impressive.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 4,
      name: 'Sara', 
      location: 'Karachi, Pakistan',
      rating: 5,
      title: 'Seamless Property Transaction',
      review: 'From start to finish, Lunaris made my property purchase incredibly smooth. Their team handled all the paperwork, negotiations, and legal requirements with utmost care. The transparency in their process and their commitment to finding properties that match my needs was remarkable.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 5,
      name: 'Ahmed',
      location: 'Lahore, Pakistan',
      rating: 4,
      title: 'Trusted Property Advisor',
      review: 'Lunaris has been my trusted property advisor for multiple transactions. Their deep understanding of market trends and honest approach to business has saved me both time and money. They always prioritize client interests and deliver beyond expectations.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 6,
      name: 'Fatima',
      location: 'Multan, Pakistan',
      rating: 5,
      title: 'Exceptional Customer Service',
      review: 'The level of customer service provided by Lunaris is exceptional. They took time to understand my requirements, showed me relevant properties, and provided valuable insights about each location. Their post-purchase support has been equally impressive.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
    }
  ];

  // Calculate max slides based on screen size
  const getCardsToShow = () => {
    switch (screenSize) {
      case 'mobile': return 1;  // <768px
      case 'tablet': return 2;  // 768px-992px
      case 'desktop': return 3; // ≥992px
      default: return 3;
    }
  };
  
  const cardsToShow = getCardsToShow();
  const maxSlide = Math.max(0, reviews.length - cardsToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlide));
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
    setDragOffset(0);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grabbing';
      carouselRef.current.style.userSelect = 'none';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    e.preventDefault();
    setCurrentX(e.clientX);
    const offset = e.clientX - startX;
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
      carouselRef.current.style.userSelect = 'auto';
    }

    const dragThreshold = 50; // Minimum drag distance to trigger slide change
    const dragDistance = currentX - startX;

    if (Math.abs(dragDistance) > dragThreshold) {
      if (dragDistance > 0) {
        // Dragged right - go to previous slide
        prevSlide();
      } else {
        // Dragged left - go to next slide
        nextSlide();
      }
    }

    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Add global mouse event listeners
  useEffect(() => {
    const handleGlobalMouseMove = (e) => handleMouseMove(e);
    const handleGlobalMouseUp = () => handleMouseUp();

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, startX, currentX, handleMouseMove, handleMouseUp]);

  // Calculate transform with drag offset
  const getTransform = () => {
    const baseTransform = -currentSlide * (100 / cardsToShow);
    const dragTransform = isDragging ? (dragOffset / carouselRef.current?.offsetWidth) * 100 : 0;
    return `translateX(${baseTransform + dragTransform}%)`;
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-orange-400 fill-current' : 'text-gray-300'}`}
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <div className="client-reviews-section bg-gray-50 py-16">
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
            <h2 className="text-[#1A2A49] font-bold text-2xl md:text-3xl tracking-wide" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>CLIENT REVIEW</h2>
            {/* Right Line */}
            <div className="flex-1 ml-2 h-0.5 rounded-full" style={{minWidth: '32px', background: '#CBE9FF'}}></div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div 
            className="overflow-hidden"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div 
              className={`flex ${isDragging ? '' : 'transition-transform duration-300 ease-in-out'}`}
              style={{ transform: getTransform() }}
            >
              {reviews.map((review, index) => (
                <div key={review.id} className={`${
                  screenSize === 'mobile' ? 'w-full' : 
                  screenSize === 'tablet' ? 'w-1/2' : 
                  'w-1/3'
                } flex-shrink-0 px-4`}>
                  <div className={`review-card bg-white rounded-lg p-6 border transition-all duration-300 ${
                    // Highlight logic for different screen sizes
                    (screenSize === 'mobile' && index === currentSlide) || 
                    (screenSize === 'tablet' && (index === currentSlide || index === currentSlide + 1)) ||
                    (screenSize === 'desktop' && index === currentSlide + 1)
                      ? 'shadow-md border-gray-200 transform scale-105' 
                      : 'shadow-sm border-gray-100'
                  }`}>
                    {/* User Info */}
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-3 overflow-hidden">
                        <img 
                          src={review.avatar}
                          alt={review.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
                        <p className="text-xs text-gray-500">{review.location}</p>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      {renderStars(review.rating)}
                    </div>
                    
                    {/* Review Title */}
                    <h5 className="font-semibold text-gray-900 mb-3 text-sm">
                      {review.title}
                    </h5>
                    
                    {/* Review Text */}
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {review.review}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          

          {/* Pagination Dots with Arrows */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg 
                className="w-4 h-4 text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {[...Array(maxSlide + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-gray-800' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg 
                className="w-4 h-4 text-gray-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
