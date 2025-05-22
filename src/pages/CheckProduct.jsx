import { CgDanger } from "react-icons/cg";
import { AiFillCheckSquare } from "react-icons/ai";
import { BiX } from "react-icons/bi";
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
        <p className="text-red-600 flex items-center gap-2">
          <BiX className="text-2xl" />
          Kode produk tidak ditemukan.
        </p>
      );
      setProduct(null);
    } else if (ketemu.stok > 0) {
      setMessage(
        <p className="text-green-600 flex items-center gap-2">
          <AiFillCheckSquare className="text-2xl" />
          Produk {ketemu.nama_produk} tersedia dengan harga Rp{ketemu.harga}.
          Stok Tersedia: {ketemu.stok}
        </p>
      );
      setProduct(ketemu);
    } else {
      setMessage(
        <p className="text-yellow-600 flex items-center gap-2">
          <CgDanger className="text-2xl" />
          Produk {ketemu.nama_produk} sedang habis.
        </p>
      );
      setProduct(ketemu);
    }
  };

  return (
    <section className="bg-[url('/img/bg.jpg')] bg-cover bg-center text-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded shadow">
        <h2 className="text-xl font-RethinkSans-SemiBold mb-4 text-center">
          Cek Ketersediaan Produk
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Masukkan kode produk"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={kode}
            onChange={(e) => setKode(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-700"
          >
            Cek Produk
          </button>
        </form>

        {message && (
          <div className="mt-6 p-4 rounded bg-gray-100">
            <p>{message}</p>
            {product && (
              <div className="mt-4">
                <img
                  src={product.gambar}
                  alt={product.nama_produk}
                  className="w-full h-40 object-cover rounded mb-2"
                />
                <p>
                  <strong>Nama:</strong> {product.nama_produk}
                </p>
                <p>
                  <strong>Harga:</strong> Rp{product.harga}
                </p>
                <p>
                  <strong>Stok:</strong> {product.stok}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
