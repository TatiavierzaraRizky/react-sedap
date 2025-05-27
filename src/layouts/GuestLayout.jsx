// src/layouts/GuestLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';  
import HeroSection from '../guest/components/HeroSection';
import AboutSection from '../guest/components/AboutSection';
import TopProducts from '../guest/components/TopProducts';
import Testimonials from '../guest/components/Testimonials';
import Footer from '../guest/components/Footer';
import Navbar from '../guest/components/Navbar';

const GuestLayout = () => {
  return (
    <div className="bg-latar text-teks">
      <Navbar />

      <HeroSection />
      <AboutSection />
      <TopProducts />
      <Testimonials />
      <Outlet />  
      <Footer />
    </div>
  );
};

export default GuestLayout;
