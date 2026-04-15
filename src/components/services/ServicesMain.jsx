import React from "react";
import Divider from "../../components/home/Divider";
import { motion } from "framer-motion";

// Images
import img1 from "../../assets/ah-2.avif";
import img2 from "../../assets/b-2.jpg";
import img3 from "../../assets/ad-1.jpg";
import img4 from "../../assets/hd-1.webp";
import img5 from "../../assets/ann-1.webp";
import img6 from "../../assets/br-1.jpg";

import img8 from "../../assets/ba-2.webp";
import img9 from "../../assets/p-2.jpg";



const services = [
  { title: "Balloon Decoration 🎈", img: img1 },
  { title: "Birthday Decoration 🎂", img: img2 },
  { title: "Anniversary Decoration 💛", img: img3 },
  { title: "Haldi Decoration 🌼", img: img4 },
  { title: "All Type Decoration ✨", img: img5 },
  
  { title: "Couple Entry 💑", img: img6 },
  { title: "Birthday Surprise 🎁", img: img8 },
  { title: "Proposal Decoration 💍", img: img9 },
];

export default function ServicesMain() {
  return (
    <>
      <section className="bg-black py-28 px-6 text-white relative overflow-hidden">

        {/* 💎 GOLD BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-black to-black z-0" />

        {/* 💎 GOLD PARTICLES */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 1 }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [1, 0.8, 0],
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
              className="absolute w-2 h-2 bg-yellow-500 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* 💎 HEADING */}
        <div className="relative z-10 text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold">
            Our <span className="text-yellow-400">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg">
            Making every celebration grand with creative decoration and unforgettable moments.
          </p>
        </div>

        {/* 💎 CARDS GRID */}
        <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group bg-[#111] rounded-3xl overflow-hidden shadow-xl border border-yellow-500/10 hover:border-yellow-500 transition"
            >
              {/* IMAGE */}
              <div className="overflow-hidden h-[300px]">
                <img
                  src={service.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition">
                  {service.title}
                </h3>

                <button className="mt-3 px-6 py-2 border border-yellow-500 text-yellow-400 rounded-full 
                hover:bg-yellow-500 hover:text-black transition shadow-md hover:shadow-yellow-500/30">
                  View Gallery →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider />
    </>
  );
}