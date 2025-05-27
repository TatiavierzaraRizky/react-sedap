import React from 'react';

const Footer = () => {
  return (
    <footer
      className="text-white pt-20 pb-10"
      style={{
        backgroundImage: "url('https://on3-step.com/tf/dbento/dbento/images/bg/footer-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#111',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Our Address */}
          <div className="bg-black bg-opacity-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold font-cursive mb-4 text-white">Our Address</h3>
            <p className="text-sm text-gray-300 mb-2">249 Bueno Porto Building, 2rd floor</p>
            <p className="text-sm text-gray-300 mb-4">Gatot Subroto, Semarang</p>
            <a href="#" className="text-yellow-500 hover:underline font-medium">VIEW ON MAP</a>
          </div>

          {/* Make Reservation */}
          <div className="bg-black bg-opacity-50 rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-semibold font-cursive text-white text-center mb-5">Make Reservation</h3>
            <div className="space-y-3 text-sm text-gray-200">
              <div className="flex justify-between">
                <span>Week Days</span>
                <span>09:00 AM – 09:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>12:00 AM – 12:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>11:00 AM – 10:00 PM</span>
              </div>
            </div>
            <div className="text-center mt-6">
              <button className="bg-yellow-500 text-black font-semibold px-5 py-2 rounded hover:bg-yellow-400 transition">BOOK NOW</button>
            </div>
          </div>

          {/* Contact Us */}
          <div className="bg-black bg-opacity-50 rounded-lg p-6">
            <h3 className="text-2xl font-semibold font-cursive mb-4 text-white">Contact Us</h3>
            <p className="text-sm text-gray-300 mb-2">
              Email: <a href="mailto:enquiries@dbento.com" className="text-yellow-500 hover:underline">enquiries@sedap.com</a>
            </p>
            <p className="text-sm text-gray-300 mb-4">
              Phone: <a href="tel:04987654321" className="text-yellow-500 hover:underline">04 987654321</a>
            </p>
            <a href="#" className="text-yellow-500 hover:underline font-medium">SEND MESSAGE</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
          &copy; 2025 Sedap. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
