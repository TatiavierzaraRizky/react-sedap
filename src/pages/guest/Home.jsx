import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductsData from '../json/products.json';

const Menu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductsData);
  }, []);

  return (
    <section className="py-24 bg-gray-50" id="menu">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-yellow-500 mb-12">Menu Kami</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center"
            >
              <img
                src={item.image || '/img/default-image.jpg'}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-5"
                loading="lazy"
              />
              <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 my-3">
                {item.description || 'Deskripsi tidak tersedia'}
              </p>
              <div className="text-lg font-semibold text-yellow-600 mb-4">
                Rp{item.price ? item.price.toLocaleString('id-ID') : '0'}
              </div>
              <Link to="/order">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-full text-sm font-medium transition">
                  Pesan Sekarang
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
