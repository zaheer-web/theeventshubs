import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/b-2.jpg";

export default function GalleryHero() {
  return (
    <div className="relative h-[90vh] sm:h-screen w-full overflow-hidden bg-black">

      {/* 💎 BACKGROUND IMAGE */}
      <motion.img
        src={heroImg}
        alt="gallery"
        className="absolute w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 10 }}
      />

      {/* 💎 LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 💎 GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-transparent z-10" />

      {/* 🎉 CONFETTI */}
      <div className="absolute left-0 top-0 z-20 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, x: 0, opacity: 1 }}
            animate={{
              y: 200,
              x: Math.random() * 100,
              opacity: [1, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
            className={`absolute w-2 h-2 ${
              i % 3 === 0 ? "bg-yellow-400" : i % 3 === 1 ? "bg-pink-400" : "bg-white"
            }`}
          />
        ))}
      </div>

      {/* 🎈 BALLOONS */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 120, opacity: 0 }}
            animate={{
              y: [-20, -180],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              delay: i * 1,
              repeat: Infinity,
            }}
            className="absolute bottom-0 text-3xl"
            style={{ left: `${15 + i * 15}%` }}
          >
            🎈
          </motion.div>
        ))}
      </div>

      {/* 🌸 FLOWERS */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 150, opacity: 0 }}
            animate={{
              y: [-30, -220],
              opacity: [0, 1, 0],
              x: [0, i % 2 === 0 ? 20 : -20],
            }}
            transition={{
              duration: 7,
              delay: i * 0.8,
              repeat: Infinity,
            }}
            className="absolute bottom-0 text-2xl"
            style={{ left: `${10 + i * 15}%` }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* 💎 CONTENT */}
      <div className="relative z-30 flex items-center h-full px-6 sm:px-16">
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl"
        >

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Our <span className="text-yellow-400">Gallery</span>
          </h1>

          <p className="mt-6 text-gray-200 text-lg">
            Explore our beautiful decorations, creative setups, and unforgettable
            moments crafted for our clients.
          </p>

        </motion.div>
      </div>
    </div>
  );
}