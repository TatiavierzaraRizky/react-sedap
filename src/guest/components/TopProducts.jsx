import React from 'react';

const TopProducts = () => {
  return (
    <section className="py-24 bg-white" id="products">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif italic">Welcome to SEDAP</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Sedap is proud to offer you authentic Indonesian cuisine with a modern twist. From rich spices to creative chefs, we bring unforgettable dining experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Product 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="/img/nasi.jpeg"
              alt="Nasi Kuning"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Nasi Kuning</h3>
            <p className="text-teks-samping text-lg">Rp 15,000</p>

              <div className="text-center">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 text-sm font-medium rounded">
                  View More
                </button>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="/img/soto.jpg"
              alt="Soto Banjar"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Soto Banjar</h3>
                <p className="text-teks-samping text-lg">Rp 15,000</p>

              <div className="text-center">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 text-sm font-medium rounded">
                  View More
                </button>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="/img/rendang.png"
              alt="Rendang"
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Rendang</h3>
              <p className="text-teks-samping text-lg">Rp 10,000</p>
              <div className="text-center">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 text-sm font-medium rounded">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
