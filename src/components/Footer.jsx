import React from "react";
import { RiInstagramFill, RiTiktokFill, RiMailFill } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini

  return (
    <footer className="text-gray-600 py-6 ">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-10 mt-8">
          <a
            href="https://www.instagram.com/donylukmansyah/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition-colors duration-300"
          >
            <RiInstagramFill />
          </a>
          <a
            href="https://www.tiktok.com/@baeminguri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition-colors duration-300"
          >
            <RiTiktokFill />
          </a>
          <a
            href="mailto:donylkmnsyh@gmail.com"
            className="text-2xl hover:text-blue-500 transition-colors duration-300"
          >
            <RiMailFill />
          </a>
        </div>
        <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-10">
          © {currentYear} Dony Lukmansyah, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
