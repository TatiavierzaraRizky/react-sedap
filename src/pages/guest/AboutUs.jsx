import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Image Column */}
        <div className="flex justify-center">
          <img
            src="img/pic3.jpg"  
            alt="Culinary Illustration"
            className="w-full max-w-lg md:max-w-xl rounded-xl shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>

        {/* Text Column */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-500 mb-6 leading-tight font-poppins-extrabold">
            About Us
          </h2>
          <p className="text-lg text-gray-800 mb-6 leading-relaxed font-poppins">
            <strong className="font-semibold text-yellow-500">Sedap</strong> is a food platform that offers the authentic flavors of Indonesian cuisine. 
            We believe that the rich spices and authentic taste of Nusantara should be enjoyed by everyone.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed font-poppins">
            Using natural ingredients and traditional recipes, <span className="font-semibold text-yellow-500">Sedap</span> is here to provide a delicious, warm, 
            and unforgettable dining experience.
          </p>
          <a
            href="#menu" 
            className="inline-block bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-md 
            transform hover:scale-105 transition duration-300 ease-in-out hover:bg-teal-600"
          >
            View Our Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
