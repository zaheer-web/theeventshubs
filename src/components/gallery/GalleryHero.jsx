import React from "react";
import { motion } from "framer-motion";
import heroImg from "../../assets/a1.jpeg";

export default function GalleryHero() {
  return (
    <div className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden bg-black">

      {/* 🔥 BACKGROUND IMAGE (CLEAR) */}
      <motion.img
        src={heroImg}
        alt="gallery"
        className="absolute w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10 }}
      />

      {/* 🔴 LIGHT OVERLAY (only for text readability) */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 🔥 LEFT GRADIENT ONLY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent z-10" />

      {/* 🔥 CONTENT */}
      <div className="relative z-20 flex items-center h-full px-6 sm:px-16">

        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl text-left"
        >

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Our <span className="text-red-500">Gallery</span>
          </h1>

          {/* SUBTITLE */}
          <p className="mt-6 text-gray-200 text-lg">
            Explore our beautiful decorations, creative setups, and unforgettable
            moments crafted for our clients.
          </p>

        </motion.div>

      </div>
    </div>
  );
}