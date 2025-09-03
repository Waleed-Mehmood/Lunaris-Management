import React, { useState, useEffect } from 'react';
import lunarisLogo from '../assets/images/Lunaris-management-logo.png';
import { Link } from 'react-router-dom';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram,
  FaPaperPlane,
  FaCheckCircle,
  FaBuilding,
  FaUsers,
  FaHeadset,
  FaArrowRight,
  FaQuoteLeft
} from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone, MdAccessTime } from 'react-icons/md';
import Footer from '../components/Footer';
import '../assets/styles/ContactUs.css';

const ContactUs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setIsLoading(false);
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MdPhone,
      title: 'Phone',
      details: ['+92 3199911931'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MdEmail,
      title: 'Email',
      details: ['lunarismanagement14@gmail.com'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MdLocationOn,
      title: 'Address',
      details: ['Al Ghurair Giga Westria road', 'Plaza No #34 2nd Floor', 'DHA phase 2, Islamabad'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MdAccessTime,
      title: 'Business Hours',
      details: ['Mon - Fri: 10:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const features = [
    {
      icon: FaBuilding,
      title: 'Property Management',
      description: 'Comprehensive property management solutions tailored to your needs.'
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Our experienced professionals are here to guide you every step of the way.'
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'Round-the-clock support for all your real estate inquiries and concerns.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="relative z-20 px-4 sm:px-6 lg:px-8 py-3 sm:py-4" style={{backgroundColor: '#121b2d'}}>
        <div className="flex items-center justify-between">
          {/* Logo - Using actual logo image */}
          <div className="flex items-center space-x-3">
            <Link to="/">
              <img 
                src={lunarisLogo} 
                alt="Lunaris Management & Co." 
                className="h-12 w-24 sm:h-16 sm:w-32 lg:h-20 lg:w-48"
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

      {/* Hero Section */}
      <section className="relative hero-bg text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              Ready to turn your real estate dreams into reality? We're here to guide you every step of the way with expert advice and personalized service.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="animate-bounce">
                <FaArrowRight className="text-blue-300 text-2xl rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 ${isVisible ? 'animate-fade-in-up' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full mb-6">
                  <feature.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Ready to start your real estate journey? Our expert team is here to provide personalized solutions 
                  for all your property needs. Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index}
                    className={`group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 transform hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : ''}`}
                    style={{ animationDelay: `${(index + 3) * 200}ms` }}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${item.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="text-xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <div className="space-y-1">
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className={`bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8 rounded-2xl transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ animationDelay: '1400ms' }}>
                <FaQuoteLeft className="text-3xl text-blue-200 mb-4" />
                <p className="text-lg mb-4 italic">
                  "Lunaris Management transformed our property investment experience. Their professional approach and attention to detail is unmatched."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sm font-bold">AK</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ahmed Khan</p>
                    <p className="text-blue-200 text-sm">Property Investor</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ animationDelay: '1600ms' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: FaFacebookF, color: 'from-blue-600 to-blue-700', href: 'https://www.facebook.com/share/1788zGSvND/?mibextid=wwXIfr' },
                    { icon: FaInstagram, color: 'from-pink-500 to-purple-600', href: 'https://www.instagram.com/lunaris_management?igsh=cXMwZnY5azNkYWE1' },
                    { icon: FaLinkedinIn, color: 'from-blue-700 to-blue-800', href: 'https://www.linkedin.com/company/lunaris-management' }
                  ].map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className={`group flex items-center justify-center w-12 h-12 bg-gradient-to-r ${social.color} text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    >
                      <social.icon className="text-lg group-hover:animate-pulse" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} style={{ animationDelay: '800ms' }}>
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>
                
                {isSubmitted && (
                  <div className="mb-6 p-6 bg-gradient-to-r from-green-50 to-green-100 border border-green-200 text-green-800 rounded-2xl flex items-center animate-fade-in">
                    <FaCheckCircle className="text-green-500 text-2xl mr-4" />
                    <div>
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-sm text-green-600">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                <form className="space-y-6" action="https://formsubmit.co/lunarismanagement14@gmail.com" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${errors.name ? 'border-red-500' : 'border-gray-200'} hover:border-gray-300`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${errors.email ? 'border-red-500' : 'border-gray-200'} hover:border-gray-300`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300"
                        placeholder="+92 300 1234567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${errors.subject ? 'border-red-500' : 'border-gray-200'} hover:border-gray-300`}
                      >
                        <option value="">Select a subject</option>
                        <option value="property-inquiry">🏠 Property Inquiry</option>
                        <option value="property-management">🏢 Property Management</option>
                        <option value="investment">💰 Investment Opportunities</option>
                        <option value="consultation">💼 Consultation</option>
                        <option value="support">🎧 Support</option>
                        <option value="other">📋 Other</option>
                      </select>
                      {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none ${errors.message ? 'border-red-500' : 'border-gray-200'} hover:border-gray-300`}
                      placeholder="Tell us about your requirements, questions, or how we can help you..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Ready to Make Your Move?
          </h2>
          <p className="text-xl text-blue-200 mb-10 leading-relaxed">
            Whether you're buying your first home, expanding your portfolio, or seeking expert property management, 
            we're here to turn your real estate goals into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/properties" 
              className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              <FaBuilding className="mr-2 group-hover:animate-pulse" />
              Explore Properties
            </Link>
            <a
              href="https://calendly.com/lunarismanagement14/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
            >
              <FaHeadset className="mr-2 group-hover:animate-pulse" />
              Book a Meeting
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
