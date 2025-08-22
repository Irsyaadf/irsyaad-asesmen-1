import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({value, onChange}) => {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="px-28 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold text-blue-400 tracking-wide">
          Quotes App
        </Link>

        <nav className="flex space-x-6 text-sm font-medium">
          <Link
            to="/home"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/quoteList"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Quotes
          </Link>
        </nav>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Cari Quote..."
          className=" px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
      </div>
    </header>
  );
};

export default Navbar;
