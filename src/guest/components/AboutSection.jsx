import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Gambar */}
        <div className="w-full lg:w-1/2">
          <img
            src="/img/gambar.jpg"  
            alt="About Sedap"
            className="rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
          />
        </div>

        {/* Konten */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-extrabold text-yellow-500 mb-6 leading-snug">
            About <span className="text-yellow-500">Sedap</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Sedap is a food delivery service that brings the authentic taste of Indonesia right to your doorstep. 
            We specialize in dishes made with the finest Indonesian spices and herbs, passed down through generations. 
            From the fragrant turmeric to the bold chilies, our meals celebrate the richness of Nusantara's culinary heritage.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At Sedap, we believe in the power of spices to create unforgettable flavors. 
            Each dish is carefully crafted to bring you the warmth and depth of Indonesia's diverse culinary traditions, 
            made with love and delivered with care.
          </p>
          <a
            href="#menu"
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-yellow-600 transition"
          >
            Discover Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
