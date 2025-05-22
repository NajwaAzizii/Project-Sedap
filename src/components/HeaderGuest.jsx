import React from "react";

export default function HeaderGuest() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white">
      <div className="container max-w-screen-xl mx-auto px-6 flex items-center justify-between py-5">
        <a
          href="/guest"
          className="font-poppins-extrabold text-[40px] text-gray-900"
        >
          Sedap<span className="text-orange-500 ml-1">.</span>
        </a>

       
        <nav className="flex space-x-9 pl-50">
          <a
            href="/guest"
            className="text-gray-800 hover:text-orange-500 font-RethinkSans-SemiBold text-base tracking-wide"
          >
            Home
          </a>
          <a
            href="/guest#about"
            className="text-gray-800 hover:text-orange-500 font-RethinkSans-SemiBold text-base tracking-wide"
          >
            About
          </a>
          <a
            href="/guest#topProduk"
            className="text-gray-800 hover:text-orange-500 font-RethinkSans-SemiBold text-base tracking-wide"
          >
            Produk
          </a>
          <a
            href="/cekProduk"
            className="text-gray-800 hover:text-orange-500 font-RethinkSans-SemiBold text-base tracking-wide"
          >
            Cek Stok
          </a>
          
          <a
            href="/guest#testi"
            className="text-gray-800 hover:text-orange-500 font-RethinkSans-SemiBold text-base tracking-wide"
          >
            Testimoni
          </a>
          <a
            href="/guest#kontak"
            className="text-gray-800 hover:text-orange-500 font-RethinkSans-SemiBold text-base tracking-wide"
          >
            Kontak
          </a>
        </nav>

     
        <div className="flex items-center space-x-5 ml-10">
          <a
            href="/login"
            className="px-5 py-2 bg-orange-500 text-white text-sm font-RethinkSans-SemiBold rounded-full hover:bg-orange-600 transition duration-300"
          >
            Login
          </a>
          <a
            href="/register"
            className="px-5 py-2 bg-orange-500 text-white text-sm font-RethinkSans-SemiBold rounded-full hover:bg-orange-600 transition duration-300"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
}
