import { CgDanger } from "react-icons/cg";
import { AiFillCheckSquare } from "react-icons/ai";
import { BiX, BiSearch } from "react-icons/bi";
import { FiPackage } from "react-icons/fi";
import React, { useState } from "react";
import data from "../data/products.json";

export default function CheckProduct() {
  const [kode, setKode] = useState("");
  const [message, setMessage] = useState("");
  const [product, setProduct] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (kode.trim() === "") {
      setMessage("Kode produk tidak boleh kosong.");
      setProduct(null);
      return;
    }

    if (kode.trim().length < 4) {
      setMessage("Kode produk harus minimal 4 karakter.");
      setProduct(null);
      return;
    }

    const ketemu = data.products?.find((p) => p.kode_produk === kode);

    if (!ketemu) {
      setMessage(
        <div className="flex items-center gap-3 text-red-600">
          <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
            <BiX className="text-xl" />
          </div>
          <span className="font-medium">Kode produk tidak ditemukan.</span>
        </div>
      );
      setProduct(null);
    } else if (ketemu.stok > 0) {
      setMessage(
        <div className="flex items-center gap-3 text-green-600">
          <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <AiFillCheckSquare className="text-xl" />
          </div>
          <div>
            <span className="font-medium">Produk {ketemu.nama_produk} tersedia!</span>
            <div className="text-sm text-green-500 mt-1">
              Harga: Rp{ketemu.harga.toLocaleString('id-ID')} • Stok: {ketemu.stok}
            </div>
          </div>
        </div>
      );
      setProduct(ketemu);
    } else {
      setMessage(
        <div className="flex items-center gap-3 text-amber-600">
          <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
            <CgDanger className="text-xl" />
          </div>
          <span className="font-medium">Produk {ketemu.nama_produk} sedang habis.</span>
        </div>
      );
      setProduct(ketemu);
    }
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 via-amber-25 to-yellow-50 min-h-screen flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 via-transparent to-amber-100/20"></div>
      
      <div className="relative max-w-lg w-full">
       
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-100/50 overflow-hidden transform hover:scale-105 transition-all duration-300">
         
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-8 text-white text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 animate-pulse">
              <FiPackage className="text-3xl" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Cek Ketersediaan Produk</h2>
            <p className="text-orange-100 text-sm">Masukkan kode produk untuk mengecek stok</p>
          </div>

       
          <div className="p-8">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <BiSearch className="text-orange-400 text-xl" />
                </div>
                <input
                  type="text"
                  placeholder="Masukkan kode produk"
                  className="w-full pl-12 pr-4 py-4 border-2 border-orange-200 rounded-2xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 text-gray-800 placeholder-gray-400 hover:border-orange-300"
                  value={kode}
                  onChange={(e) => setKode(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmit(e);
                    }
                  }}
                />
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-4 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-orange-600 hover:to-amber-600"
              >
                <div className="flex items-center justify-center gap-2">
                  <BiSearch className="text-xl" />
                  <span>Cek Produk</span>
                </div>
              </button>
            </div>

        
            {message && (
              <div className="mt-8 animate-fadeIn">
                <div className="p-6 rounded-2xl bg-orange-50 border border-orange-100 shadow-sm">
                  {message}
                </div>
                
                {product && (
                  <div className="mt-6 bg-white rounded-2xl border border-orange-100 shadow-lg overflow-hidden animate-slideUp">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={product.gambar}
                        alt={product.nama_produk}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-gray-800">
                        {product.nama_produk}
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-orange-50 p-4 rounded-xl hover:bg-orange-100 transition-colors duration-200">
                          <p className="text-sm text-orange-600 font-medium">Harga</p>
                          <p className="text-xl font-bold text-orange-800">
                            Rp{product.harga.toLocaleString('id-ID')}
                          </p>
                        </div>
                        
                        <div className={`p-4 rounded-xl transition-colors duration-200 ${
                          product.stok > 0 
                            ? 'bg-green-50 hover:bg-green-100' 
                            : 'bg-red-50 hover:bg-red-100'
                        }`}>
                          <p className={`text-sm font-medium ${
                            product.stok > 0 
                              ? 'text-green-600' 
                              : 'text-red-600'
                          }`}>
                            Stok
                          </p>
                          <p className={`text-xl font-bold ${
                            product.stok > 0 
                              ? 'text-green-800' 
                              : 'text-red-800'
                          }`}>
                            {product.stok > 0 ? product.stok : 'Habis'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 p-4 rounded-xl hover:bg-amber-100 transition-colors duration-200">
                        <p className="text-sm text-amber-600 font-medium">Kode Produk</p>
                        <p className="text-lg font-mono font-bold text-amber-800">
                          {product.kode_produk}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        
        <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-orange-300 rounded-full opacity-60 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-amber-300 rounded-full opacity-40 animate-bounce delay-1000"></div>
          <div className="absolute bottom-32 left-20 w-2 h-2 bg-orange-400 rounded-full opacity-50 animate-bounce delay-500"></div>
          <div className="absolute bottom-20 right-10 w-4 h-4 bg-yellow-300 rounded-full opacity-30 animate-bounce delay-1500"></div>
        </div>

      
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full opacity-15 animate-pulse delay-1000"></div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}