import React from "react";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import donyProfile from "../assets/dony.jpg";
import YouTubeEmbed from "../components/YouTubeEmbed"; // Pastikan import sudah benar
import Footer from "../components/Footer"; 
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      name: "Dony Lukmansyah",
      description:
        "20 year old video editor 🎬 based in Bekasi 🇮🇩 editing and creating visual stories under the name Dony Lukmansyah.",
      contact: "Interested in working together? Email me!",
      latest: "Latest video",
    },
    id: {
      name: "Dony Lukmansyah",
      description:
        "Editor video berusia 20 tahun 🎬 yang berbasis di Bekasi 🇮🇩, mengedit dan membuat cerita visual dengan nama Dony Lukmansyah.",
      contact: "Tertarik untuk bekerja sama? Kirim email!",
      latest: "Video terbaru",
    },
  };

  const t = content[language];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Navbar />
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-6 py-6">
        <img
          src={donyProfile}
          alt="Dony Lukmansyah"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mb-4 sm:mb-0"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">{t.name}</h1>
          <p className="text-base sm:text-lg mb-3">{t.description}</p>
          <a
            href="mailto:donylkmnsyh@gmail.com"
            className="text-sm sm:text-base text-blue-600 hover:no-underline font-semibold"
          >
            {t.contact}
          </a>
        </div>
      </div>
      <hr />
      <h2 className="text-2xl sm:text-2xl font-bold mt-7 mb-4">{t.latest}</h2>
      <div className="space-y-6 mb-10">
        <YouTubeEmbed embedId="54a-L5TQp3A" />
        <YouTubeEmbed embedId="G_4T3UYWwI0" />
        <YouTubeEmbed embedId="ctr4R3z4WFU" />
      </div>
      <hr />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
