import React from "react";
import { motion } from "framer-motion";
import img from '../../assets/a1.jpeg';

function ServiceOne() {
  return (
    <div className="relative h-[90vh] sm:h-screen w-full overflow-hidden bg-black">

      {/* 💎 BACKGROUND IMAGE */}
      <motion.img
        src={img}
        className="absolute w-full h-full object-cover opacity-50"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10 }}
        alt="service"
      />

      {/* 💎 OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-black to-black z-10" />

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
              ease: "easeInOut",
            }}
            className="absolute bottom-0 text-3xl"
            style={{ left: `${15 + i * 15}%` }}
          >
            🎈
          </motion.div>
        ))}
      </div>

      {/* 🌸 FLOATING FLOWERS */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 150, opacity: 0 }}
            animate={{
              y: [-30, -220],
              opacity: [0, 1, 0],
              x: [0, i % 2 === 0 ? 20 : -20], // thoda side movement
            }}
            transition={{
              duration: 7,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 text-2xl"
            style={{ left: `${10 + i * 15}%` }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* 💎 CONTENT */}
      <div className="relative z-30 flex items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Balloon Decoration{" "}
            <span className="text-yellow-400">Services 🎈</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300">
            Transform your celebrations into unforgettable moments with our
            creative balloon decoration and event styling services.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 justify-center">

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
              onClick={() => window.location.href = "/our-gallery"}
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

export default ServiceOne;