import React, { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  // Cek posisi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gray-800 text-white p-3 rounded-full text-xl hover:bg-gray-600 transition-colors duration-300 z-50"
        aria-label="Scroll to top"
      >
        <RiArrowUpSLine />
      </button>
    )
  );
};

export default ScrollToTop;
