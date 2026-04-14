import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import s1 from "../../assets/s1.jpeg";
import s2 from "../../assets/s2.jpeg";
import s3 from "../../assets/s3.jpeg";
import s4 from "../../assets/s4.jpeg";
import s5 from "../../assets/s5.jpeg";

export default function Service() {

  const services = [
    {
      image: s1,
      title: "Balloon Decoration",
      desc: "Creative balloon setups for all types of events and celebrations.",
      path: "/services",
    },
    {
      image: s2,
      title: "Birthday Decoration",
      desc: "Make birthdays special with unique balloon themes & surprises 🎈",
      path: "/services",
    },
    {
      image: s3,
      title: "Anniversary Decoration",
      desc: "Romantic anniversary setups to create unforgettable memories 💛",
      path: "/services",
    },
    {
      image: s4,
      title: "Haldi Decoration",
      desc: "Traditional Haldi decor with modern balloon styling & colors.",
      path: "/services",
    },
    {
      image: s5,
      title: "Special Event Setups",
      desc: "Bridal entry, couple entry, proposal & surprise decorations ✨",
      path: "/services",
    },
  ];

  const loopServices = [...services, ...services];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const visibleCards = 3;

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  useEffect(() => {
    if (currentIndex >= services.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, services.length]);

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );

  return (
    <section className="relative bg-black py-16 px-4 overflow-hidden">

      {/* 🎉 CONFETTI (TOP + MID + BOTTOM BOTH SIDE) */}
      {["top-0", "top-1/2 -translate-y-1/2", "bottom-0"].map((pos, idx) => (
        <React.Fragment key={idx}>

          {/* LEFT */}
          <div className={`absolute left-0 ${pos} z-10 pointer-events-none`}>
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: idx === 1 ? 200 : Math.random() * 100,
                  y: idx === 2 ? -200 : 200,
                  opacity: [1, 0],
                }}
                transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                className={`absolute w-2 h-2 ${
                  i % 3 === 0 ? "bg-yellow-400" : i % 3 === 1 ? "bg-pink-400" : "bg-white"
                }`}
              />
            ))}
          </div>

          {/* RIGHT */}
          <div className={`absolute right-0 ${pos} z-10 pointer-events-none`}>
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: idx === 1 ? -200 : -Math.random() * 100,
                  y: idx === 2 ? -200 : 200,
                  opacity: [1, 0],
                }}
                transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                className={`absolute w-2 h-2 ${
                  i % 3 === 0 ? "bg-yellow-400" : i % 3 === 1 ? "bg-pink-400" : "bg-white"
                }`}
              />
            ))}
          </div>

        </React.Fragment>
      ))}

      {/* 🎈 BALLOONS */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [-10, -120], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, delay: i * 1, repeat: Infinity }}
            className="absolute bottom-0 text-3xl"
            style={{ left: `${20 + i * 20}%` }}
          >
            🎈
          </motion.div>
        ))}
      </div>

      {/* 🌸 FLOWERS */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -200],
              opacity: [0, 1, 0],
              x: [0, i % 2 === 0 ? 30 : -30],
            }}
            transition={{ duration: 7, delay: i * 0.7, repeat: Infinity }}
            className="absolute bottom-0 text-2xl"
            style={{ left: `${10 + i * 18}%` }}
          >
            🌸
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
          className="flex transition-transform duration-500"
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
          className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition active:scale-90 shadow-lg shadow-yellow-500/30"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          onClick={nextSlide}
          className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition active:scale-90 shadow-lg shadow-yellow-500/30"
        >
          <ArrowRight size={18} />
        </button>

      </div>

    </section>
  );
}