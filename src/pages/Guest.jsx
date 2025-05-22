import { BiMoneyWithdraw } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import { MdFastfood } from "react-icons/md";
import React from "react";
import testi from "../data/testi.json";
import products from "../data/products.json";
import { AiFillStar } from "react-icons/ai";


export default function Guest() {
  return (
    <div className="guest-page">
      <section className="bg-[url('/img/bg.jpg')] bg-cover bg-center text-gray-900">
        <div className="container mx-auto px-2 py-16 flex flex-col md:flex-row items-center md:justify-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pl-5">
           <h1 className="text-20px md:text-xl font-RethinkSans-SemiBold mb-4">
             Ayo, Cobain dan rasakan pengalamannya
            </h1>
            <h1 className="text-40px md:text-4xl font-RethinkSans-SemiBold">
              Rasakan Kelezatan Masakan
            </h1>
             <h1 className="text-40px md:text-4xl font-RethinkSans-SemiBold mb-4 text-orange-500">
              Indonesia
            </h1>
            <p className="text-40px mb-6  text-gray-500">
              Pesan makanan favoritmu dengan mudah dan nikmati pengalaman yang
              tak terlupakan dengan Sedap. Nikmati kepraktisan makan enak dengan layanan pengiriman kami yang cepat dan bebas ribet.
            </p>
            <div className="flex items-center space-x-5">
            <a
              href="#topProduk"
              className="inline-block px-5 py-2 bg-orange-500 text-white text-sm font-RethinkSans-SemiBold rounded-full hover:bg-orange-600 transition duration-300"
            >
              Pesan Sekarang
            </a>
            <a
              href="/login"
              className="inline-block px-5 py-2 bg-blue-500 text-white text-sm font-RethinkSans-SemiBold rounded-full hover:bg-blue-600 transition duration-300"
            >
              Login
            </a>
            </div>
          </div>
          <div className="pl-5">
            <img src="/img/fotoawal.png" alt="Makanan Indonesian" />
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-2">
          <h2 className="text-3xl font-RethinkSans-SemiBold text-center mb-12">Tentang Kami</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">
              Sedap adalah aplikasi yang memudahkan Anda menemukan dan menikmati
              berbagai hidangan lezat dari berbagai tempat.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="text-3xl text-red-600 mb-4">
                  <center>
                    <MdFastfood />
                  </center>
                </div>
                <h3 className="font-RethinkSans-SemiBold text-xl mb-2">Makanan Berkualitas</h3>
                <p>
                  Kami bekerja sama dengan chef dan restoran terbaik untuk
                  menjamin kualitas makanan.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="text-3xl text-red-600 mb-4">
                  <center>
                    <AiOutlineCar />
                  </center>
                </div>
                <h3 className="font-RethinkSans-SemiBold text-xl mb-2">Pengiriman Cepat</h3>
                <p>
                  Sistem pengiriman kami memastikan makanan sampai dalam kondisi
                  hangat dan tepat waktu.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg shadow-md">
                <div className="text-3xl text-red-600 mb-4">
                  <center>
                    <BiMoneyWithdraw />
                  </center>
                </div>
                <h3 className="font-RethinkSans-SemiBold text-xl mb-2">Harga Terjangkau</h3>
                <p>Nikmati makanan lezat dengan harga yang bersahabat</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="topProduk"
        className="bg-[url('/img/bg.jpg')] bg-cover bg-center text-gray-900"
      >
        <div className="mx-auto max-w-screen-lg px-4">
          <h2 className="mt-26 text-4xl font-RethinkSans-SemiBold text-center text-gray-800 mb-16">
            Produk Unggulan
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {products.products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={product.gambar}
                  alt={product.nama_produk}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.nama_produk}
                  </h3>
                  <p className="text-lg text-red-500 font-RethinkSans-SemiBold">
                    Rp {product.harga.toLocaleString()}
                  </p>
                  <button className="mt-5 w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                    Pesan Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testi" className="py-16 bg-white">
        <div className="mx-auto max-w-screen-lg px-4">
          <h2 className="text-3xl font-RethinkSans-SemiBold text-center mb-12">
            Testimoni Pelanggan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testi.testi.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={`Avatar ${testimonial.name}`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <h3 className="font-RethinkSans-SemiBold">{testimonial.name}</h3>
                </div>
                <p className="italic">"{testimonial.review}"</p>
                <div className="flex items-center space-x-1 text-yellow-400 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
