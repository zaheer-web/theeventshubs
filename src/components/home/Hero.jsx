import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import heroImg from "../../assets/sasa-2.jpeg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative h-[90vh] sm:h-screen w-full overflow-hidden bg-black">

      {/* 💎 BACKGROUND IMAGE */}
      <motion.img
        src={heroImg}
        className="absolute w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 10 }}
      />

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />

      {/* 🎉 CONFETTI */}
      <div className="absolute left-0 top-0 z-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
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
              i % 3 === 0
                ? "bg-yellow-400"
                : i % 3 === 1
                ? "bg-pink-400"
                : "bg-white"
            }`}
          />
        ))}
      </div>

      {/* 💎 CONTENT */}
      <div className="absolute inset-0 flex items-end md:items-center justify-start z-30 px-6 md:px-16 pb-10 md:pb-0">

        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-white max-w-lg text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Celebrate with{" "}
            <span className="text-yellow-400">
              <Typewriter
                words={[
                  "Balloon Magic 🎈",
                  "Grand Decorations ✨",
                  "Perfect Events 💛",
                ]}
                loop
                cursor
              />
            </span>
          </h1>

          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/90">
            We design beautiful balloon decorations for birthdays, weddings,
            and special celebrations.
          </p>

          <div className="mt-6 md:mt-8 flex gap-4 flex-wrap">

            <a
              href="https://wa.me/917888735541"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-yellow-500 text-black px-6 md:px-8 py-3 rounded-xl font-bold 
              hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/30">
                Book Now
              </button>
            </a>

            <button
              onClick={() => navigate("/our-gallery")}
              className="border border-yellow-400 px-6 md:px-8 py-3 rounded-xl text-yellow-400 
              hover:bg-yellow-400 hover:text-black transition"
            >
              View Gallery
            </button>

          </div>
        </motion.div>

      </div>
    </div>
  );
}