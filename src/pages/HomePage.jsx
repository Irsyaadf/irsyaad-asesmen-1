import React from "react";
import { FaQuoteLeft, FaSmile, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-6 py-16">
      <main className="flex flex-col items-center justify-center text-center w-full">
        <section className="max-w-2xl mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Selamat Datang di <span className="text-blue-400">MyQuotesApp</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Sebuah aplikasi sederhana untuk membaca dan berbagi{" "}
            <span className="text-yellow-400 font-semibold">
              quotes inspiratif
            </span>{" "}
            yang bisa menyemangati harimu.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-3 w-full max-w-4xl mb-12">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <FaQuoteLeft className="text-4xl text-blue-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Baca Quotes</h3>
            <p className="text-gray-400 text-sm">
              Nikmati koleksi quotes penuh inspirasi setiap hari.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <FaSmile className="text-4xl text-yellow-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Bagikan Semangat</h3>
            <p className="text-gray-400 text-sm">
              Sebarkan quotes favoritmu ke teman dan orang terdekat.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <FaLightbulb className="text-4xl text-green-400 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-2">Temukan Inspirasi</h3>
            <p className="text-gray-400 text-sm">
              Temukan ide & motivasi baru dari kata-kata bermakna.
            </p>
          </div>
        </section>

        <Link
          to="/quoteList"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Mulai Sekarang 🚀
        </Link>
      </main>
    </div>
  );
};

export default HomePage;
