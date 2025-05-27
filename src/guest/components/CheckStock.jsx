import React, { useState } from 'react';
import products from '../json/products.json';

const CheckStock = () => {
  const [kodeProduk, setKodeProduk] = useState('');
  const [result, setResult] = useState(null);

  const handleCheckStock = () => {
    // Validasi dulu
    if (!kodeProduk || kodeProduk.length < 4) {
      setResult({ type: 'error', message: '❌ Kode produk tidak ditemukan.' });
      return;
    }

    const product = products.find(p => p.kode_produk.toLowerCase() === kodeProduk.toLowerCase());

    if (!product) {
      setResult({ type: 'error', message: '❌ Kode produk tidak ditemukan.' });
    } else if (product.stok > 0) {
      setResult({
        type: 'available',
        message: `Produk ${product.nama_produk} tersedia dengan harga Rp${product.harga}.`,
        stok: product.stok
      });
    } else {
      setResult({ type: 'outOfStock', message: `Produk ${product.nama_produk} saat ini sedang habis.` });
    }
  };

  return (
    <div className="container mx-auto py-16 text-center max-w-lg px-4">
      <h2 className="text-3xl font-bold mb-8">Cek Ketersediaan Produk</h2>
      <input
        type="text"
        className="border-2 border-gray-300 px-4 py-2 rounded-lg mb-4 w-full"
        placeholder="Masukkan Kode Produk"
        value={kodeProduk}
        onChange={(e) => setKodeProduk(e.target.value)}
      />
      <button
        onClick={handleCheckStock}
        className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg text-lg hover:bg-yellow-400 transition"
      >
        Cek Ketersediaan
      </button>

      {/* Tampilan pesan */}
      <div className="mt-8 text-left">
        {result && result.type === 'available' && (
          <div className="border-l-4 border-green-500 bg-green-100 text-green-900 p-4 rounded">
            <p className="text-xl mb-1">✅ {result.message}</p>
            <p className="text-lg">Stok tersedia: {result.stok}</p>
          </div>
        )}

        {result && result.type === 'outOfStock' && (
          <div className="border-l-4 border-yellow-500 bg-yellow-100 text-yellow-900 p-4 rounded text-xl">
            ⚠️ {result.message}
          </div>
        )}

        {result && result.type === 'error' && (
          <div className="border-l-4 border-red-500 bg-red-100 text-red-900 p-4 rounded text-xl">
            {result.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckStock;
