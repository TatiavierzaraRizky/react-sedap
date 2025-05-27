import React from "react";
import { NavLink } from 'react-router-dom';

export default function ErrorPage({ judul, ket, desc, gambar }) {
  return (
    <div className="flex flex-row items-start justify-center bg-gray-100 px-10">
      <div className="bg-white w-full max-w-9xl p-20 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center gap-20">
        <div className="text-center lg:text-left flex-1">
          <div className="text-[160px] text-center font-poppins-extrabold text-gray-800 leading-none">{judul}</div>
          <div className="text-5xl text-gray-600 text-center mt-8 font-barlow ">{ket}</div>
          <div className="text-xl font-inter text-gray-500 text-center mt-6 max-w-3xl mx-auto">
            {desc}
          </div>

          <div className="flex justify-center mt-12">
            <NavLink 
                className="px-10 py-4 bg-merah text-black text-xl font-bold rounded-4xl hover:bg-hijau transition"
                to = "/">
                Back To Home
            </NavLink>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={gambar}
            alt="Page Not Found"
            className="w-[550px] h-[550px] object-contain"
          />
        </div>
      </div>
    </div>
  );
} 