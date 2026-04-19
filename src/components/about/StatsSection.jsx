import React from "react";
import { motion } from "framer-motion";
// import statsImg from "../../assets/ba-2.webp";
import statsImg from "../../assets/fa-15.jpeg";


export default function StatsSection() {
  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden">

      {/* 💎 GOLD BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 💎 LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={statsImg}
            alt="stats"
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg border border-yellow-500/20"
          />

          {/* GOLD OVERLAY */}
          <div className="absolute inset-0 bg-yellow-500/10 rounded-2xl"></div>
        </motion.div>

        {/* 💎 RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our <span className="text-yellow-400">Achievements</span>
          </h2>

          <p className="text-gray-400 mb-10">
            We have successfully completed thousands of events with dedication,
            creativity, and trust. Our numbers reflect our experience and
            commitment to excellence.
          </p>

          {/* 💎 STATS GRID */}
          <div className="grid grid-cols-2 gap-6">

            {[
              { num: "5+", label: "Years Experience" },
              { num: "50+", label: "Expert Workers" },
              { num: "2000+", label: "Happy Customers" },
              { num: "Delhi NCR", label: "Working Area" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="bg-[#111] border border-yellow-500/10 hover:border-yellow-500 p-6 rounded-xl text-center transition shadow-lg"
              >
                <h3 className="text-3xl font-bold text-yellow-400 mb-2">
                  {item.num}
                </h3>
                <p className="text-gray-400 text-sm">{item.label}</p>
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}