import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto w-full bg-gray-900 text-gray-300 px-28 py-6">
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between">
        <div className="text-lg font-semibold text-white mb-4 md:mb-0">
          MyQuotes App
        </div>

      <div className="text-center text-sm text-gray-500">
        © 2025 MyQuotes App. All rights reserved.
      </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
