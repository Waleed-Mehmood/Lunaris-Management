import React from 'react';
import LandingPage from '../components/LandingPage';
import PropertyListings from '../components/PropertyListings';
import ClientReviews from '../components/ClientReviews';
import RealEstateBanner from '../components/RealEstateBanner';
import Footer from '../components/Footer';
import PropertyHero from '../components/PropertyHero';
import AboutUs from '../components/AboutUs';

const Home = () => {
  return (
    <>
      <LandingPage />
      <AboutUs/>
      <PropertyListings />
      <PropertyHero/>
      <ClientReviews/>
      <RealEstateBanner/>
      <Footer />
    </>
  );
};

export default Home;
