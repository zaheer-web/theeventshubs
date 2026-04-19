import React from "react";
import { motion } from "framer-motion";

export default function Highlights() {

  const highlights = [
    { num: "01", title: "Balloon Decoration Experts", desc: "Creative balloon setups for birthdays, weddings & all celebrations 🎈" },
    { num: "02", title: "Birthday Surprise Setup", desc: "Make your loved ones feel special with surprise balloon decorations 🎉" },
    { num: "03", title: "Anniversary Decoration", desc: "Romantic and beautiful setups to celebrate your special moments 💛" },
    { num: "04", title: "Haldi & Wedding Decor", desc: "Traditional + modern balloon decor for Haldi & wedding events ✨" },
    { num: "05", title: "Bridal & Couple Entry", desc: "Grand entry setups with balloons, lights & stylish decor 💫" },
    { num: "06", title: "Proposal Decorations", desc: "Perfect romantic setups to make your proposal unforgettable 💍" },
    { num: "07", title: "Customized Themes", desc: "Personalized decoration themes based on your ideas & style 🎨" },
    { num: "08", title: "Affordable Packages", desc: "Premium decoration services at budget-friendly prices 💰" },
  ];

  return (
    <section className="relative bg-black py-20 px-4 sm:px-6 overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/10 blur-[120px] rounded-full" />

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Why Choose Us
        </h2>

        <p className="text-yellow-400 mt-4 text-lg">
          We Make Your Moments Beautiful & Memorable
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 relative z-10">

        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center group"
          >

            {/* NUMBER */}
            <motion.div
              whileHover={{ scale: 1.3, rotate: 8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-14 h-14 bg-yellow-500 text-black flex items-center justify-center 
              rounded-full text-lg font-bold shadow-lg shadow-yellow-500/40 mb-4 relative z-10"
            >
              {item.num}
            </motion.div>

            {/* LINE */}
            <div className="w-[2px] h-6 bg-yellow-500 mb-4"></div>

            {/* CARD */}
            <motion.div
              whileHover={{
                y: -12,
                scale: 1.05,
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative bg-white/90 backdrop-blur-md rounded-xl p-6 
              border border-yellow-500/20 flex flex-col h-full w-full max-w-[260px] mx-auto overflow-hidden"
            >

              {/* 🔥 GLOW EFFECT ON HOVER */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
              bg-gradient-to-br from-yellow-400/20 via-transparent to-yellow-600/20"></div>

              <h3 className="font-semibold text-lg text-black mb-3 relative z-10">
                {item.title}
              </h3>

              <p className="text-gray-700 text-sm flex-grow relative z-10">
                {item.desc}
              </p>

            </motion.div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}