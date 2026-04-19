import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
// import heroImg from "../../assets/ah-2.avif";
// import heroImg from "../../assets/za-3.jpeg";
import heroImg from "../../assets/fa-1.jpeg";



export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative h-[90vh] sm:h-screen w-full overflow-hidden bg-black">

      {/* 💎 BACKGROUND IMAGE (FIXED) */}
      <motion.img
        src={heroImg}
        className="absolute w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 10 }}
      />

      {/* 💎 LIGHT OVERLAY (FIXED) */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-black/40 z-10" />

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
      <div className="absolute inset-0 flex items-center justify-center text-center z-30 px-6">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-white max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
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

          <p className="mt-6 text-lg text-white">
            We design beautiful balloon decorations for birthdays, weddings,
            and special celebrations.
          </p>

          <div className="mt-8 flex gap-4 justify-center flex-wrap">

            <a
              href="https://wa.me/917888735541"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-yellow-500 text-black px-8 py-3 rounded-xl font-bold 
              hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/30">
                Book Now
              </button>
            </a>

            <button
              onClick={() => navigate("/our-gallery")}
              className="border border-yellow-400 px-8 py-3 rounded-xl text-yellow-400 
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