import React, { useEffect, useState } from "react";
import { Image, Video, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../../api/axios";

export default function Portfolio() {
  const navigate = useNavigate();

  const [galleryItems, setGalleryItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const response = await api.get("/gallery");

      if (response.data.status) {
        setGalleryItems((response.data.data || []).slice(0, 6));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-black py-16 px-4">

      {/* 🔥 HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          The Events Hubs 🎈
        </h2>

        <p className="text-red-500 mt-3 text-lg">
          Our Beautiful Decoration Work
        </p>
      </div>

      {/* 🔥 GALLERY */}
      <div className="max-w-7xl mx-auto space-y-6">

        {/* IMAGES (only if available) */}
        {galleryItems.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <Card
                key={i}
                item={item}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>
        )}

        {/* 🔥 ALWAYS SHOW BUTTON */}
        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/our-gallery")}
            className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold 
            shadow-lg shadow-red-500/40 hover:bg-red-400 transition"
          >
            View Projects
          </motion.button>
        </div>

      </div>

      {/* FULL SCREEN PREVIEW */}
      {currentIndex !== null && galleryItems[currentIndex] && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setCurrentIndex(null)}
          >
            ✕
          </button>

          <button className="absolute left-6 text-white" onClick={prevImage}>
            <ChevronLeft size={35} />
          </button>

          {galleryItems[currentIndex].type === "video" ? (
            <video
              src={galleryItems[currentIndex].file_url}
              controls
              autoPlay
              className="max-w-[90%] max-h-[80%] rounded-xl"
            />
          ) : (
            <img
              src={galleryItems[currentIndex].file_url}
              className="max-w-[90%] max-h-[80%] rounded-xl"
            />
          )}

          <button className="absolute right-6 text-white" onClick={nextImage}>
            <ChevronRight size={35} />
          </button>

        </div>
      )}
    </section>
  );
}

/* CARD */
function Card({ item, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden rounded-xl cursor-pointer group h-[250px]"
    >
      {item.type === "video" ? (
        <video
          src={item.file_url}
          className="w-full h-full object-cover group-hover:scale-110 transition"
          muted
        />
      ) : (
        <img
          src={item.file_url}
          className="w-full h-full object-cover group-hover:scale-110 transition"
        />
      )}

      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition"></div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
          {item.type === "video" ? (
            <Video className="text-black" />
          ) : (
            <Image className="text-black" />
          )}
        </div>
      </div>
    </div>
  );
}