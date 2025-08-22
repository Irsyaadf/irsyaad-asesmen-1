import React from "react";

const CardList = ({ quote }) => {
  const formattedDate = new Date(quote.inserted_at).toLocaleDateString(
      "id-ID",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  return (
    <article className="bg-gray-800 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col">
      <div className="overflow-hidden">
        <img
          src={quote.gambar}
          alt={`Gambar untuk ${quote.judul}`}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          {quote.judul}
        </h2>
        <p className="text-gray-300 mb-4">{quote.isi}</p>
        <p className="text-sm text-gray-500">
          Ditambahkan pada: {formattedDate}
        </p>
      </div>
    </article>
  );
};

export default CardList;
