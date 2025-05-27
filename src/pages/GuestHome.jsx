// src/pages/guest/GuestHome.jsx
import React from 'react';
import HeroSection from '../guest/components/HeroSection';
import AboutSection from '../guest/components/AboutSection';
import TopProducts from '../guest/components/TopProducts';
import Testimonials from '../guest/components/Testimonials';
import Footer from '../guest/components/Footer';

const GuestHome = () => {
  return (
    <div className="bg-latar text-teks">
      <HeroSection />
      <AboutSection />
      <TopProducts />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default GuestHome;
