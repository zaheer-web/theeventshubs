import React from "react";
import { motion } from "framer-motion";

export default function GallerySection() {
  const events = [
    {
      title: "Luxury Wedding Setup",
      desc: "Royal stage design with floral elegance and premium lighting.",
    },
    {
      title: "Birthday Decoration",
      desc: "Creative balloon themes with vibrant and joyful vibes.",
    },
    {
      title: "Engagement Ceremony",
      desc: "Romantic setups crafted to capture unforgettable moments.",
    },
    {
      title: "Corporate Events",
      desc: "Professional and elegant decor for business occasions.",
    },
  ];

  return (
    <div className="bg-black px-4 sm:px-10 py-20">

      {/* 💎 HEADING */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-white mb-12">
        Our <span className="text-yellow-400">Decorations</span>
      </h1>

      {/* 💎 CARDS */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="border border-yellow-500/20 rounded-xl p-6 bg-black/60 backdrop-blur-md 
            hover:border-yellow-500 transition shadow-lg shadow-yellow-500/10"
          >
            {/* NUMBER */}
            <h2 className="text-yellow-400 text-4xl font-bold mb-4">
              0{index + 1}
            </h2>

            {/* TITLE */}
            <h3 className="text-white text-xl font-semibold mb-2">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 💎 CTA */}
     <div className="text-center mt-14">
  <a
    href="https://wa.me/917888735541?text=Hello%20I%20want%20to%20book%20decoration%20service"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      className="bg-yellow-500 px-8 py-3 rounded-lg text-black font-semibold 
      hover:bg-yellow-400 transition shadow-md shadow-yellow-500/30"
    >
      Book Your Decoration
    </button>
  </a>
</div>

    </div>
  );
}