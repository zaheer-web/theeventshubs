import React, { useEffect, useState } from "react";
import { Image, Video, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    <section className="relative bg-black py-16 px-4 overflow-hidden">

      {/* 🎈 BALLOONS (4 SIDE) */}
      <div className="absolute inset-0 pointer-events-none z-10">

        {/* BOTTOM */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={"b" + i}
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: [-20, -180], opacity: [0, 1, 0] }}
            transition={{ duration: 6, delay: i * 0.8, repeat: Infinity }}
            className="absolute bottom-0 text-3xl"
            style={{ left: `${15 + i * 20}%` }}
          >
            🎈
          </motion.div>
        ))}

        {/* TOP */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={"t" + i}
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: [20, 180], opacity: [0, 1, 0] }}
            transition={{ duration: 6, delay: i * 0.8, repeat: Infinity }}
            className="absolute top-0 text-3xl"
            style={{ left: `${20 + i * 20}%` }}
          >
            🎈
          </motion.div>
        ))}

        {/* LEFT */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={"l" + i}
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: [20, 200], opacity: [0, 1, 0] }}
            transition={{ duration: 6, delay: i * 0.8, repeat: Infinity }}
            className="absolute left-0 text-3xl"
            style={{ top: `${30 + i * 20}%` }}
          >
            🎈
          </motion.div>
        ))}

        {/* RIGHT */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={"r" + i}
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: [-20, -200], opacity: [0, 1, 0] }}
            transition={{ duration: 6, delay: i * 0.8, repeat: Infinity }}
            className="absolute right-0 text-3xl"
            style={{ top: `${30 + i * 20}%` }}
          >
            🎈
          </motion.div>
        ))}

      </div>

      {/* 💎 HEADING */}
      <div className="text-center mb-12 relative z-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          mannat luxury event 🎈
        </h2>

        <p className="text-yellow-400 mt-3 text-lg">
          Our Beautiful Decoration Work
        </p>
      </div>

      {/* 💎 GALLERY */}
      <div className="max-w-7xl mx-auto space-y-6 relative z-20">

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

        {/* BUTTON */}
        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/our-gallery")}
            className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold 
            shadow-lg shadow-yellow-500/30 hover:bg-yellow-400 transition"
          >
            View Projects
          </motion.button>
        </div>

      </div>

      {/* FULLSCREEN */}
      {currentIndex !== null && galleryItems[currentIndex] && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">

          <button
            className="absolute top-6 right-6 text-yellow-400 text-2xl"
            onClick={() => setCurrentIndex(null)}
          >
            ✕
          </button>

          <button className="absolute left-6 text-yellow-400" onClick={prevImage}>
            <ChevronLeft size={35} />
          </button>

          {galleryItems[currentIndex].type === "video" ? (
            <video
              src={galleryItems[currentIndex].file_url}
              controls
              autoPlay
              className="max-w-[90%] max-h-[80%] rounded-xl border border-yellow-500/30"
            />
          ) : (
            <img
              src={galleryItems[currentIndex].file_url}
              className="max-w-[90%] max-h-[80%] rounded-xl border border-yellow-500/30"
            />
          )}

          <button className="absolute right-6 text-yellow-400" onClick={nextImage}>
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
        <div className="w-14 h-14 bg-yellow-500 text-black rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/40">
          {item.type === "video" ? <Video /> : <Image />}
        </div>
      </div>
    </div>
  );
}