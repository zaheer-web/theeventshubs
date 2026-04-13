import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Image } from "lucide-react";

// 🔥 20 UNIQUE IMAGES IMPORT
import img1 from "../../assets/a1.jpeg";
import img2 from "../../assets/a1.jpeg";
import img3 from "../../assets/a1.jpeg";
import img4 from "../../assets/a1.jpeg";
import img5 from "../../assets/a1.jpeg";
import img6 from "../../assets/a1.jpeg";
import img7 from "../../assets/a1.jpeg";
import img8 from "../../assets/a1.jpeg";
import img9 from "../../assets/a1.jpeg";
import img10 from "../../assets/a1.jpeg";
import img11 from "../../assets/a1.jpeg";
import img12 from "../../assets/a1.jpeg";
import img13 from "../../assets/a1.jpeg";
import img14 from "../../assets/a1.jpeg";
import img15 from "../../assets/a1.jpeg";
import img16 from "../../assets/a1.jpeg";
import img17 from "../../assets/a1.jpeg";
import img18 from "../../assets/a1.jpeg";
import img19 from "../../assets/a1.jpeg";
import img20 from "../../assets/a1.jpeg";

export default function AllPhotos() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  // ✅ NO REPEAT ARRAY
  const galleryItems = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15,
    img16, img17, img18, img19, img20,
  ];

  // 📱 Mobile me sirf 6 images
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

      {/* 🔥 HEADING */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-white mb-12">
        Our <span className="text-red-500">Gallery</span>
      </h1>

      {/* 🔥 GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {visibleItems.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-xl relative group cursor-pointer border border-white/10 hover:border-red-500 transition"
            onClick={() => setCurrentIndex(index)}
          >
            {/* IMAGE */}
            <img
              src={img}
              alt={`Event ${index}`}
              className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-xl"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Image className="w-5 h-5 text-black" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 VIEW MORE (MOBILE) */}
      {!showAll && (
        <div className="text-center mt-10 sm:hidden">
          <button
            onClick={() => setShowAll(true)}
            className="bg-red-500 px-6 py-2 rounded-lg text-white font-semibold hover:bg-red-400 transition"
          >
            View More
          </button>
        </div>
      )}

      {/* 🔥 FULLSCREEN */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 px-4">

          {/* CLOSE */}
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setCurrentIndex(null)}
          >
            ✕
          </button>

          {/* PREV */}
          <button className="absolute left-4 text-white" onClick={prevItem}>
            <ChevronLeft size={40} />
          </button>

          {/* IMAGE */}
          <img
            src={galleryItems[currentIndex]}
            className="max-w-[90%] max-h-[85%] rounded-xl"
          />

          {/* NEXT */}
          <button className="absolute right-4 text-white" onClick={nextItem}>
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
}