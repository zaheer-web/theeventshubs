import React from "react";
import { motion } from "framer-motion";
import img from '../../assets/a1.jpeg'

function ServiceOne() {
  return (
    <div className="relative h-[90vh] sm:h-screen w-full overflow-hidden bg-black">

      {/* 🔥 BACKGROUND IMAGE */}
      <img
        src={img}
        className="absolute w-full h-full object-cover opacity-40"
        alt="service"
      />

      {/* 🔴 DARK + RED OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-black" />

      {/* 🎈 FLOATING BALLOONS */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: [-20, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              delay: i * 1,
              repeat: Infinity,
            }}
            className="absolute text-3xl"
            style={{ left: `${15 + i * 15}%` }}
          >
            🎈
          </motion.div>
        ))}
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-20 flex items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Balloon Decoration{" "}
            <span className="text-red-500">Services 🎈</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg text-gray-300">
            Transform your celebrations into unforgettable moments with our
            creative balloon decoration and event styling services.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/917888735541"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-red-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-400 transition shadow-lg">
                Book Now
              </button>
            </a>

            <button
              onClick={() => window.location.href = "/our-gallery"}
              className="border border-white/30 px-8 py-3 rounded-xl text-white hover:bg-white hover:text-black transition"
            >
              View Gallery
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServiceOne;