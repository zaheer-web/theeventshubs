import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import areaImg from "../../assets/ba-1.jpg";

export default function WorkingAreas() {
  const areas = ["Delhi NCR", "Noida", "Gurugram", "Ghaziabad"];

  return (
    <section className="bg-[#111] py-24 px-6 text-white relative overflow-hidden">

      {/* 💎 GOLD BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* 💎 HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our <span className="text-yellow-400">Working Areas</span>
          </h2>
          <p className="text-gray-400 mt-4">
            We proudly provide our event decoration services across multiple cities.
          </p>
        </div>

        {/* 💎 CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* 🗺️ LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={areaImg}
              alt="areas"
              className="w-full h-[350px] object-cover rounded-2xl shadow-lg border border-yellow-500/20 hover:scale-105 transition duration-500"
            />
          </motion.div>

          {/* 📍 RIGHT AREA CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {areas.map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                className="bg-black border border-yellow-500/10 hover:border-yellow-500 p-6 rounded-xl text-center transition shadow-lg"
              >
                <MapPin className="mx-auto text-yellow-400 mb-2" />
                <h3 className="font-semibold text-lg">{area}</h3>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}