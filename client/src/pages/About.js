import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import lunarisLogo from '../assets/images/Lunaris-management-logo.png';
import aboutUsImg from '../assets/images/aboutus.png';
import landingBgJpeg from '../assets/images/landing-bg.jpeg';
import Footer from '../components/Footer';

const About = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat h-96"
        style={{
          backgroundImage: `url(${landingBgJpeg})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Navigation */}
        <nav className="relative z-20 px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={lunarisLogo} 
                alt="Lunaris Management & Co." 
                className="h-12 w-24 sm:h-16 sm:w-32 lg:h-20 lg:w-40"
              />
            </Link>

            {/* Mobile Menu Button */}
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

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 bg-slate-900/95 backdrop-blur-sm transition-all duration-300 z-40 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}> 
              <div className="flex flex-col items-center justify-center h-full space-y-8 text-white text-lg">
                <Link to="/" className="hover:text-blue-300 transition-colors font-medium" onClick={closeMobileMenu}>Home</Link>
                <Link to="/about" className="hover:text-blue-300 transition-colors font-medium" onClick={closeMobileMenu}>About</Link>
                <Link to="/properties" className="hover:text-blue-300 transition-colors font-medium" onClick={closeMobileMenu}>Properties</Link>
                <Link to="/contact" className="hover:text-blue-300 transition-colors font-medium" onClick={closeMobileMenu}>Contact us</Link>
                <a href="https://calendly.com/lunarismanagement14/30min" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-white/60 px-5 py-2 rounded-full hover:bg-white hover:text-slate-900 transition-all font-medium" onClick={closeMobileMenu}>Book a Meeting</a>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-white text-sm">
              <Link to="/" className="hover:text-blue-300 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-blue-300 font-medium">
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
                className="bg-transparent border border-white/60 px-3 lg:px-5 py-2 rounded-full hover:bg-white hover:text-slate-900 transition-all font-medium text-xs lg:text-sm"
              >
                Book a Meeting
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About <span style={{ color: '#CBE9FF' }}>Lunaris</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-2xl mx-auto px-4">
              Transforming Property Management with Excellence
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        {/* About Us Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center mb-6 sm:mb-8 w-full">
                  {/* Left Arrow */}
                  <svg width="24" height="10" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 sm:w-8 sm:h-3">
                    <path d="M12 6H0" stroke="#CBE9FF" strokeWidth="2"/>
                    <path d="M6 1L0 6L6 11" stroke="#CBE9FF" strokeWidth="2"/>
                  </svg>
                  {/* Heading */}
                  <h2 className="text-[#192937] font-bold text-xl sm:text-2xl md:text-3xl tracking-wide" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>OUR STORY</h2>
                  {/* Right Line */}
                  <div className="flex-1 ml-2 h-0.5 rounded-full" style={{minWidth: '32px', background: '#CBE9FF'}}></div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    At Lunaris, we understand that your property is more than just an asset — it's an investment that deserves expert care and proven results. We transform short-term rental management into a seamless, reliable, and scalable system, where owners gain confidence, guests enjoy exceptional experiences, and properties perform at their highest potential.
                  </p>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Our commitment is simple: We protect your property, elevate your returns, and build partnerships based on trust and transparency.
                  </p>
                  
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Lunaris provides comprehensive management solutions that take the pressure off owners and deliver measurable results. From precise pricing strategies and professional upkeep to world-class guest communication, our services are designed to be effortless for owners, exceptional for guests, and profitable for investors.
                  </p>
                </div>
              </div>
              
              {/* Right Content - Interior Image */}
              <div className="flex justify-center items-center mt-8 lg:mt-0">
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3] w-full max-w-lg bg-white">
                  <img
                    src={aboutUsImg}
                    alt="About Us Interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-br from-[#192937] via-blue-800 to-[#192937]">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-16 h-16 sm:w-32 sm:h-32 border border-white rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-12 h-12 sm:w-24 sm:h-24 border border-white rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 border border-white rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-10 h-10 sm:w-20 sm:h-20 border border-white rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#CBE9FF] rounded-full mb-6 mx-auto">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#192937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl mb-4" style={{fontFamily: 'Orbitron, sans-serif'}}>
                OUR MISSION
              </h2>
              <div className="w-24 sm:w-32 h-1 bg-[#CBE9FF] mx-auto rounded-full mb-6"></div>
              <p className="text-blue-100 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
                Empowering property owners through innovative management solutions while creating exceptional experiences for every guest
              </p>
            </div>
            
            {/* Mission Cards - New Design */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Mission Card 1 - Excellence */}
              <div className="group relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <div className="relative">
                    {/* Floating Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#CBE9FF] to-blue-300 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 mx-auto transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#192937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 group-hover:text-[#CBE9FF] transition-colors">
                        Excellence
                      </h3>
                      <div className="w-12 sm:w-16 h-1 bg-[#CBE9FF] mx-auto mb-4 sm:mb-6 rounded-full"></div>
                      <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                        We strive for excellence in every aspect of property management, ensuring the highest standards of service for our clients and their guests through meticulous attention to detail.
                      </p>
                    </div>
                    
                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#CBE9FF] transition-colors duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Mission Card 2 - Trust */}
              <div className="group relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <div className="relative">
                    {/* Floating Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#CBE9FF] to-blue-300 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 mx-auto transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#192937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 group-hover:text-[#CBE9FF] transition-colors">
                        Trust
                      </h3>
                      <div className="w-12 sm:w-16 h-1 bg-[#CBE9FF] mx-auto mb-4 sm:mb-6 rounded-full"></div>
                      <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                        Building lasting relationships through transparency, reliability, and consistent communication with property owners and guests alike, creating a foundation of mutual respect and confidence.
                      </p>
                    </div>
                    
                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#CBE9FF] transition-colors duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Mission Card 3 - Innovation */}
              <div className="group relative md:col-span-2 lg:col-span-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                  <div className="relative">
                    {/* Floating Icon */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#CBE9FF] to-blue-300 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 mx-auto transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#192937]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 group-hover:text-[#CBE9FF] transition-colors">
                        Innovation
                      </h3>
                      <div className="w-12 sm:w-16 h-1 bg-[#CBE9FF] mx-auto mb-4 sm:mb-6 rounded-full"></div>
                      <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                        Leveraging cutting-edge technology and innovative strategies to maximize property performance and guest satisfaction, staying ahead of industry trends and market demands.
                      </p>
                    </div>
                    
                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#CBE9FF] transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-12 sm:mt-16">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-white/20">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#CBE9FF] rounded-full animate-pulse"></div>
                <span className="text-white font-medium text-sm sm:text-base">Transforming Properties, Building Futures</span>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#CBE9FF] rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="flex items-center mb-6 sm:mb-8 w-full">
                  <svg width="24" height="10" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 sm:w-8 sm:h-3">
                    <path d="M12 6H0" stroke="#CBE9FF" strokeWidth="2"/>
                    <path d="M6 1L0 6L6 11" stroke="#CBE9FF" strokeWidth="2"/>
                  </svg>
                  <h2 className="text-[#192937] font-bold text-xl sm:text-2xl md:text-3xl tracking-wide" style={{fontFamily: 'Orbitron, sans-serif', letterSpacing: '0.05em'}}>OUR VALUES</h2>
                  <div className="flex-1 ml-2 h-0.5 rounded-full" style={{minWidth: '32px', background: '#CBE9FF'}}></div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#CBE9FF] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-[#192937] font-semibold text-base sm:text-lg mb-2">Client-Centric Approach</h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        Every decision we make is guided by what's best for our clients and their investment goals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#CBE9FF] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-[#192937] font-semibold text-base sm:text-lg mb-2">Operational Excellence</h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        We maintain the highest standards in property maintenance, guest services, and business operations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-[#CBE9FF] rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-[#192937] font-semibold text-base sm:text-lg mb-2">Continuous Growth</h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        We constantly evolve our services and strategies to stay ahead in the dynamic hospitality market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Content - Stats */}
              <div className="bg-gradient-to-br from-[#192937] to-blue-600 rounded-xl p-6 sm:p-8 text-white mt-8 lg:mt-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Our Impact</h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#CBE9FF' }}>50+</div>
                    <div className="text-xs sm:text-sm opacity-90">Properties Managed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#CBE9FF' }}>95%</div>
                    <div className="text-xs sm:text-sm opacity-90">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#CBE9FF' }}>1000+</div>
                    <div className="text-xs sm:text-sm opacity-90">Happy Guests</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#CBE9FF' }}>24/7</div>
                    <div className="text-xs sm:text-sm opacity-90">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 sm:py-16" style={{ backgroundColor: '#CBE9FF' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-[#192937] font-bold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6" style={{fontFamily: 'Orbitron, sans-serif'}}>
              Ready to Transform Your Property?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Join the growing number of property owners who trust Lunaris to maximize their investment returns while providing exceptional guest experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/lunarismanagement14/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#192937] text-white px-6 sm:px-8 py-3 rounded-full hover:bg-blue-600 transition-all font-medium text-base sm:text-lg"
              >
                Book a Meeting
              </a>
              <Link 
                to="/contact"
                className="bg-transparent border-2 border-[#192937] text-[#192937] px-6 sm:px-8 py-3 rounded-full hover:bg-[#192937] hover:text-white transition-all font-medium text-base sm:text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
