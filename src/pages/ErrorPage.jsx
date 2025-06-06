import React from 'react';
import { useParams } from 'react-router-dom';

const defaultDescriptions = {
  400: "Ups! Permintaanmu nggak bisa diproses. Coba dicek lagi, ya!",
  401: "Hmm... Kamu belum login nih. Silakan masuk dulu untuk lanjut.",
  403: "Waduh! Kamu nggak punya izin buat akses halaman ini.",
  404: "Yah, halaman yang kamu cari nggak ditemukan. Mungkin udah pindah?",
};

const ErrorPage = () => {
  const { code } = useParams();
  const errorCode = parseInt(code) || 404;
  const description = defaultDescriptions[errorCode] || "Terjadi kesalahan";

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 via-yellow-50 to-slate-100">
      <div className="backdrop-blur-md bg-white/90 rounded-3xl shadow-2xl px-10 py-12 max-w-xl text-center animate-fade-in">
        <img
          src="/img/error.png"
          alt={`Error ${errorCode}`}
          className="w-90 mx-auto mb-3 drop-shadow-lg"
        />
        <h1 className="text-7xl font-extrabold text-orange-500 drop-shadow-sm animate-bounce">
          {errorCode}
        </h1>
        <p className="mt-4 text-xl text-gray-800 font-medium">{description}</p>
        <a
          href="/"
          className="mt-8 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-full shadow-lg transition duration-300"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
