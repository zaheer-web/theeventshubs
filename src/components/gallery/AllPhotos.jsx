import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Image } from "lucide-react";

// Images
import img1 from "../../assets/aa-1.jpg";
import img2 from "../../assets/aa-2.webp";
import img3 from "../../assets/aa-3.webp";
import img4 from "../../assets/aa-4.webp";
import img5 from "../../assets/ad-1.jpg";
import img6 from "../../assets/ah-1.jpg";
import img7 from "../../assets/ad-2.webp";
import img8 from "../../assets/ah-2.avif";
import img9 from "../../assets/ah-2.jpg";
import img10 from "../../assets/gs-1.webp";
import img11 from "../../assets/ann-1.webp";
import img12 from "../../assets/b-1.jpg";
import img13 from "../../assets/ba-2.webp";
import img14 from "../../assets/b-2.jpg";
import img15 from "../../assets/bs-1.webp";
import img16 from "../../assets/bs-2.jpg";
import img17 from "../../assets/c-1.jpg";
import img18 from "../../assets/h-1.jpg";
import img19 from "../../assets/hd-1.webp";
import img20 from "../../assets/sh-1.jpg";

export default function AllPhotos() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const galleryItems = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15,
    img16, img17, img18, img19, img20,
  ];

  const visibleItems =
    window.innerWidth < 640 && !showAll
      ? galleryItems.slice(0, 6)
      : galleryItems;

  const nextItem = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevItem = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-black px-4 sm:px-10 py-28">

      {/* 💎 HEADING */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-white mb-12">
        Our <span className="text-yellow-400">Gallery</span>
      </h1>

      {/* 💎 GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {visibleItems.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl relative group cursor-pointer 
            border border-yellow-500/10 hover:border-yellow-500 transition"
            onClick={() => setCurrentIndex(index)}
          >
            {/* IMAGE */}
            <img
              src={img}
              alt={`Event ${index}`}
              className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-xl"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <div className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/40">
                <Image className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 💎 VIEW MORE */}
      {!showAll && (
        <div className="text-center mt-10 sm:hidden">
          <button
            onClick={() => setShowAll(true)}
            className="bg-yellow-500 px-6 py-2 rounded-lg text-black font-semibold hover:bg-yellow-400 transition shadow-md shadow-yellow-500/30"
          >
            View More
          </button>
        </div>
      )}

      {/* 💎 FULLSCREEN */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 px-4">

          {/* CLOSE */}
          <button
            className="absolute top-6 right-6 text-yellow-400 text-2xl"
            onClick={() => setCurrentIndex(null)}
          >
            ✕
          </button>

          {/* PREV */}
          <button className="absolute left-4 text-yellow-400" onClick={prevItem}>
            <ChevronLeft size={40} />
          </button>

          {/* IMAGE */}
          <img
            src={galleryItems[currentIndex]}
            className="max-w-[90%] max-h-[85%] rounded-xl border border-yellow-500/30"
          />

          {/* NEXT */}
          <button className="absolute right-4 text-yellow-400" onClick={nextItem}>
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
}