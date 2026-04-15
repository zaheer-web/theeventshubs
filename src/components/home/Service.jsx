import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import s1 from "../../assets/ba-1.jpg";
import s2 from "../../assets/b-2.jpg";
import s3 from "../../assets/ad-1.jpg";
import s4 from "../../assets/hd-1.webp";
import s5 from "../../assets/p-2.jpg";

export default function Service() {

  const services = [
    { image: s1, title: "Balloon Decoration", desc: "Creative balloon setups for all events.", path: "/services" },
    { image: s2, title: "Birthday Decoration", desc: "Unique birthday themes & surprises 🎈", path: "/services" },
    { image: s3, title: "Anniversary Decoration", desc: "Romantic setups 💛", path: "/services" },
    { image: s4, title: "Haldi Decoration", desc: "Traditional + modern decor", path: "/services" },
    { image: s5, title: "Special Event Setups", desc: "Proposal & entry decorations ✨", path: "/services" },
  ];

  const loopServices = [...services, ...services];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const visibleCards = 3;

  /* 🔥 ULTRA SMOOTH AUTO SLIDE */
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500); // smooth speed

    return () => clearInterval(interval);
  }, [isHovered]);

  /* 🔥 NO JUMP RESET */
  useEffect(() => {
    if (currentIndex >= services.length) {
      setTimeout(() => {
        setCurrentIndex(0);
      }, 0);
    }
  }, [currentIndex]);

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );

  return (
    <section className="relative bg-black py-16 px-4 overflow-hidden">

      {/* 🎈 BALLOONS ALL SIDES */}
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
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Our Services
        </h2>
        <p className="text-yellow-400 mt-3 text-lg">
          Making Every Celebration Special 🎈
        </p>
      </div>

      {/* 💎 SLIDER */}
      <div
        className="max-w-7xl mx-auto overflow-hidden relative z-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-linear"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / visibleCards
            }%)`,
          }}
        >
          {loopServices.map((service, i) => (
            <Link
              to={service.path}
              key={i}
              className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-3"
            >
              <div className="relative rounded-xl overflow-hidden group shadow-lg">

                <img
                  src={service.image}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition"></div>

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[80%] 
                bg-white rounded-xl p-3 text-center shadow-md 
                group-hover:bg-yellow-500 transition">

                  <h3 className="font-semibold text-lg text-black">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-700 mt-1">
                    {service.desc}
                  </p>

                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 💎 BUTTONS */}
      <div className="flex justify-center gap-4 mt-8 relative z-20">

        <button
          onClick={prevSlide}
          className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          onClick={nextSlide}
          className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition"
        >
          <ArrowRight size={18} />
        </button>

      </div>

    </section>
  );
}