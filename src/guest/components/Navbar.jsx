import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-10 py-6 relative">
        {/* Logo - Kiri */}
        <div className="text-3xl font-extrabold tracking-wide text-white">
          SEDAP<span className="text-white-400">'</span>
        </div>

        {/* Menu Desktop - Tengah */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-8 items-center text-white font-bold text-sm uppercase">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#pages" className="hover:text-yellow-400 transition">Pages ▾</a>
          <a href="#menu" className="hover:text-yellow-400 transition">Menu ▾</a>
          <a href="#gallery" className="hover:text-yellow-400 transition">Gallery ▾</a>
          <a href="#blog" className="hover:text-yellow-400 transition">Blog ▾</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
          <Link
            to="/reservation"
            className="border border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
          >
            RESERVATION
          </Link>
        </div>

        {/* Mobile Menu Icon - Kanan */}
        <div className="md:hidden text-white">
          <Menu size={28} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
