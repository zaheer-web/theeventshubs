import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import heroImg from "../../assets/wed1.jpeg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative h-[90vh] sm:h-screen w-full overflow-hidden bg-black">

      {/* 🔥 BACKGROUND IMAGE */}
      <motion.img
        src={heroImg}
        className="absolute w-full h-full object-cover opacity-40"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10 }}
      />

      {/* 🔴 BLACK + RED OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black to-black z-10" />

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

      {/* 🔥 CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-30 px-6">

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-white max-w-3xl"
        >

          {/* 🔴 TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Celebrate with{" "}
            <span className="text-red-500">

              <Typewriter
                words={[
                  "Balloon Magic 🎈",
                  "Grand Decorations ✨",
                  "Perfect Events ❤️",
                ]}
                loop
                cursor
              />

            </span>
          </h1>

          {/* TEXT */}
          <p className="mt-6 text-lg text-gray-300">
            We design beautiful balloon decorations for birthdays, weddings,
            and special celebrations.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4 justify-center flex-wrap">

            {/* 🔴 PRIMARY BUTTON */}
            <a
              href="https://wa.me/917888735541"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-red-500 text-white px-8 py-3 rounded-xl font-bold 
              hover:bg-red-400 transition shadow-lg shadow-red-500/40">
                Book Now
              </button>
            </a>

            {/* ⚪ SECOND BUTTON */}
            <button
              onClick={() => navigate("/our-gallery")}
              className="border border-white px-8 py-3 rounded-xl text-white 
              hover:bg-white hover:text-black transition"
            >
              View Gallery
            </button>

          </div>
        </motion.div>
      </div>
    </div>
  );
}