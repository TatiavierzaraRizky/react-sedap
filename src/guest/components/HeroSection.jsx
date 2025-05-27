import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('public/img/pic1.jpg')" }} 
    >

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight font-poppins-extrabold">
          Discover the <span className="text-yellow-400">Best Food</span> in Town
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 font-poppins">
          Freshly made meals, fast delivery, and unforgettable flavors.
        </p>
        <a
          href="#products"
          className="bg-yellow-400 hover:bg-yellow-500 transition px-8 py-4 rounded-full font-semibold text-gray-900 text-lg shadow-lg"
        >
          Explore Our Menu
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
