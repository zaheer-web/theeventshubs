import React from "react";
import Divider from "../../components/home/Divider";
import { motion } from "framer-motion";

// Images
import img1 from "../../assets/wed1.jpeg";
import img2 from "../../assets/wed2.jpeg";
import img3 from "../../assets/wed3.jpeg";
import img4 from "../../assets/wed4.jpeg";
import img5 from "../../assets/wed5.jpeg";


const services = [
  { title: "Balloon Decoration 🎈", img: img1 },
  { title: "Birthday Decoration 🎂", img: img2 },
  { title: "Anniversary Decoration ❤️", img: img3 },
  { title: "Haldi Decoration 🌼", img: img4 },
  { title: "All Type Decoration ✨", img: img5 },
  { title: "Bridal Entry 👰", img: img2 },
  { title: "Couple Entry 💑", img: img3 },
  { title: "Birthday Surprise 🎁", img: img4 },
  { title: "Proposal Decoration 💍", img: img1 },
];

export default function ServicesMain() {
  return (
    <>
      <section className="bg-black py-28 px-6 text-white relative overflow-hidden">

        {/* 🔴 BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-black z-0" />

        {/* 🎆 FIREWORK / CONFETTI EFFECT */}
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
              className="absolute w-2 h-2 bg-red-500 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* 🔥 HEADING */}
        <div className="relative z-10 text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold">
            Our <span className="text-red-500">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg">
            Making every celebration grand with creative decoration and unforgettable moments.
          </p>
        </div>

        {/* 🔥 BIG CARDS GRID */}
        <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group bg-[#111] rounded-3xl overflow-hidden shadow-xl border border-white/10 hover:border-red-500 transition"
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
                <h3 className="text-2xl font-bold mb-3 group-hover:text-red-500 transition">
                  {service.title}
                </h3>

                <button className="mt-3 px-6 py-2 border border-red-500 text-white rounded-full hover:bg-red-500 transition">
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