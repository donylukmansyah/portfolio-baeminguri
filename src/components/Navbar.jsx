import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Link } from "react-router-dom";
import { RiCloseLine, RiGlobalLine } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const translations = {
    en: { menu: "Menu", home: "Home", gear: "Gear", lang: "English" },
    id: { menu: "Menu", home: "Beranda", gear: "Peralatan", lang: "Indonesia" },
  };

  const t = translations[language];

  return (
    <nav className="relative w-full flex justify-end  py-4">
      <button
        onClick={() => setMenuOpen(true)}
        className="text-lg font-bold transition-colors duration-300 hover:text-blue-500"
      >
        ☰ {t.menu}
      </button>

      {/* Overlay hitam transparan dengan transition */}
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-30 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Panel menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 flex flex-col p-8 shadow-lg transition-transform duration-500 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } w-full sm:max-w-[400px]`}
      >
        {/* Tombol close */}
        <button
          onClick={() => setMenuOpen(false)}
          className="text-2xl self-end mb-4 text-black transition-colors duration-300 hover:text-red-500"
        >
          <RiCloseLine />
        </button>

        <h2 className="text-2xl font-bold mb-4">{t.menu}</h2>

        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="mb-2 transition-colors duration-300 hover:text-blue-500"
        >
          {t.home}
        </Link>
        <Link
          to="/gear"
          onClick={() => setMenuOpen(false)}
          className="mb-2 transition-colors duration-300 hover:text-blue-500"
        >
          {t.gear}
        </Link>

        {/* Tombol ganti bahasa (tidak menutup menu) */}
        <div className="mt-auto flex justify-center">
          <button
            onClick={() => {
              toggleLanguage();
            }}
            className="text-sm flex items-center transition-colors duration-300 hover:text-blue-500"
          >
            <RiGlobalLine className="mr-2" />
            {t.lang}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
