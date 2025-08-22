import axios from "axios";
import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fecthData = async () => {
      try {
        const quotesResponse = await axios.get(
          "https://rbeulorfzjfbbhizwuqf.supabase.co/functions/v1/get-quotes"
        );
        setQuotes(quotesResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  }, []);

  const filteredQuotes = quotes.filter((quote) => {
    const formattedDate = new Date(quote.inserted_at).toLocaleDateString(
      "id-ID",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
    return (
      (searchTerm) ? 
      quote.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.isi.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formattedDate.toLowerCase().includes(searchTerm.toLowerCase()): true
    )
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar value={searchTerm} onChange={setSearchTerm} />
      <main className="flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 sm:px-10 lg:px-28 py-6">
          {filteredQuotes.map((quote) => (
            <CardList key={quote.id} quote={quote} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuotesPage;
