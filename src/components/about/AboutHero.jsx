import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/aboutus.jpeg";

export default function AboutHero() {
  return (
    <div className="relative h-[80vh] sm:h-[90vh] w-full overflow-hidden bg-black">

      {/* 🔥 BACKGROUND IMAGE (CLEAR) */}
      <motion.img
        src={aboutImg}
        alt="about"
        className="absolute w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10 }}
      />

      {/* 🔴 LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 🔥 LEFT GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />

      {/* 🎈 BALLOONS */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 120, opacity: 0 }}
            animate={{
              y: [-30, -220],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              delay: i * 0.8,
              repeat: Infinity,
            }}
            className="absolute flex flex-col items-center"
            style={{ left: `${10 + i * 15}%` }}
          >
            <div className="w-6 h-8 bg-red-500 rounded-full shadow-lg shadow-red-500/40"></div>
            <div className="w-[2px] h-10 bg-white/40"></div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 CONTENT (LEFT ALIGN) */}
      <div className="relative z-40 flex items-center h-full px-6 sm:px-16">

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            About <span className="text-red-500">The Events Hubs</span>
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            We are passionate event decorators dedicated to turning your
            celebrations into unforgettable experiences with creativity,
            perfection, and love.
          </p>
        </motion.div>

      </div>
    </div>
  );
}