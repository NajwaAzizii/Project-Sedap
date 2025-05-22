import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="kontak" className="bg-blue-950 text-white pt-12 pb-8">
      <div className="mx-auto max-w-screen-lg px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
            <p className="mb-2 text-gray-400" >Jl. Makanan Enak No. 123</p>
            <p className="mb-2 text-gray-400">Pekanbaru, Indonesia 28748</p>
            <p className="mb-2 text-gray-400">Email: info@sedap.com</p>
            <p className="mb-2 text-gray-400">Telepon: +62 002 4568 6890</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Menu</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="/guest"
                  className="text-gray-400 hover:text-yellow-400 transition duration-200"
                >
                  Beranda
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/guest#about"
                  className="text-gray-400 hover:text-yellow-400 transition duration-200"
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/guest#topProduk"
                  className="text-gray-400 hover:text-yellow-400 transition duration-200"
                >
                  Top Produk
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/guest#testi"
                  className="text-gray-400 hover:text-yellow-400 transition duration-200"
                >
                  Testimoni
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/guest#kontak"
                  className="text-gray-400 hover:text-yellow-400 transition duration-200"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Media Sosial</h3>
            <div className="flex items-center space-x-4 mb-6">
              <a
                href="#"
                className="text-2xl hover:text-yellow-400 transition duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-yellow-400 transition duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-yellow-400 transition duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-yellow-400 transition duration-200"
              >
                <FaLinkedin />
              </a>
            </div>

            <h3 className="text-xl font-bold mb-4">Partner Kami</h3>
            <div className="grid grid-cols-3 gap-3">
           
              <div className="bg-white p-2 rounded">
                <img
                  src="public/img/pcr.png"
                  alt="Partner 1"
                  className="h-8 w-full object-contain rounded"
                />
              </div>

              <div className="bg-white p-2 rounded">
                <img
                  src="public/img/Partner2.png"
                  alt="Partner 2"
                  className="h-8 w-full object-contain rounded"
                />
              </div>

             
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Sedap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
