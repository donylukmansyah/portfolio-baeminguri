import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import bestCC from "../assets/img/best-cc.jpg";
import favCC from "../assets/img/fav-cc.jpg";

const Gear = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Gear",
      description:
        "All the gear I use to edit my videos including presets, CC, quality settings, transitions, and sound effects. Personal favorites are marked, with affiliate links if you want to grab them too.",
      clearFilters: "✖ Clear all filters",
      buyNow: "Buy now",
      recommended: "Recommended",
      filters: {
        video: "Video",
        sound: "Sound Effect",
        recommended: "Recommended",
        subfilters: {
          CC: "CC",
          Quality: "Quality",
        },
      },
    },
    id: {
      title: "Peralatan",
      description:
        "Semua peralatan yang saya gunakan untuk mengedit video saya termasuk preset, CC, pengaturan kualitas, transisi, dan efek suara. Favorit pribadi ditandai, dengan tautan afiliasi jika Anda ingin mendapatkannya juga.",
      clearFilters: "✖ Hapus semua filter",
      buyNow: "Beli sekarang",
      recommended: "Rekomendasi",
      filters: {
        video: "Video",
        sound: "Efek Suara",
        recommended: "Rekomendasi",
        subfilters: {
          CC: "CC",
          Quality: "Kualitas",
        },
      },
    },
  };

  const t = content[language];

  const [activeFilter, setActiveFilter] = useState("");
  const [activeSubfilter, setActiveSubfilter] = useState("");

  const filters = [
    { key: "video", label: t.filters.video, icon: "ri-video-line" },
    { key: "sound", label: t.filters.sound, icon: "ri-mic-line" },
    { key: "recommended", label: t.filters.recommended, icon: "ri-check-line" },
  ];

  const subfilters = {
    video: ["CC", "Quality"],
    sound: [],
    recommended: [],
  };

  const handleFilterClick = (key) => {
    setActiveSubfilter("");
    setActiveFilter((prev) => (prev === key ? "" : key));
  };

  const handleSubfilterClick = (sub) => {
    setActiveSubfilter((prev) => (prev === sub ? "" : sub));
  };

  const products = [
    {
      id: 1,
      name: "Bundle (My Best CC + Topaz Setting)",
      brand: "CC",
      description: "Upgrade your videos with my top CC and Topaz settings for a quality look.",
      image: bestCC,
      link: "https://lynk.id/baeminguri/wjz8jxwy8k7z",
      category: "video",
      subcategory: "cc",
      recommended: true,
    },
    {
      id: 2,
      name: "My Favorite CC",
      brand: "CC",
      description: "Perfect CC for a natural, polished look in every video.",
      image: favCC,
      link: "https://lynk.id/baeminguri/kwm00w8k6me3",
      category: "video",
      subcategory: "cc",
      recommended: false,
    },
  ];

  const filteredProducts = products.filter((product) => {
    if (!activeFilter) return true;
    if (activeFilter === "recommended") return product.recommended;
    if (activeSubfilter) {
      return (
        product.category === activeFilter &&
        product.subcategory?.toLowerCase() === activeSubfilter.toLowerCase()
      );
    }
    return product.category === activeFilter;
  });

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Navbar />
      <div className="py-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{t.title}</h1>
        <p className="text-base sm:text-lg mb-6">{t.description}</p>
        <hr />

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mt-7 mb-6">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => handleFilterClick(filter.key)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium flex items-center gap-2 border transition ${
                activeFilter === filter.key
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              <i className={`${filter.icon} text-lg`}></i>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Subfilters */}
        {activeFilter && subfilters[activeFilter]?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {subfilters[activeFilter].map((sub) => (
              <button
                key={sub}
                onClick={() => handleSubfilterClick(sub)}
                className={`px-4 py-1 border rounded-lg text-sm font-semibold transition ${
                  activeSubfilter === sub
                    ? "bg-gray-800 text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {t.filters.subfilters[sub]}
              </button>
            ))}
          </div>
        )}

        {/* Clear Filter */}
        {activeFilter && (
          <button
            onClick={() => {
              setActiveFilter("");
              setActiveSubfilter("");
            }}
            className="text-sm text-red-600 font-medium mb-4"
          >
            {t.clearFilters}
          </button>
        )}

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-xl border border-gray-200 bg-white flex flex-col overflow-hidden"
            >
              <div className="relative bg-white flex justify-center items-center h-60">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain max-h-full"
                />
                {product.recommended && (
                  <span className="absolute top-4 left-4 bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-md">
                    {t.recommended}
                  </span>
                )}
              </div>
              <div className="bg-gray-50 p-4 flex flex-col justify-between flex-1">
                <p className="text-sm text-gray-500">{product.brand}</p>
                <h3 className="font-bold text-md text-gray-900 mt-1 mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-blue-600 text-blue-600 font-medium text-sm py-2 px-4 rounded-lg hover:bg-blue-50 transition"
                >
                  <i className="ri-shopping-cart-line"></i>
                  {t.buyNow}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Gear;
