import React from "react";
import { motion } from "framer-motion";

export default function Highlights() {

  const highlights = [
    {
      num: "01",
      title: "Balloon Decoration Experts",
      desc: "Creative balloon setups for birthdays, weddings & all celebrations 🎈",
    },
    {
      num: "02",
      title: "Birthday Surprise Setup",
      desc: "Make your loved ones feel special with surprise balloon decorations 🎉",
    },
    {
      num: "03",
      title: "Anniversary Decoration",
      desc: "Romantic and beautiful setups to celebrate your special moments ❤️",
    },
    {
      num: "04",
      title: "Haldi & Wedding Decor",
      desc: "Traditional + modern balloon decor for Haldi & wedding events ✨",
    },
    {
      num: "05",
      title: "Bridal & Couple Entry",
      desc: "Grand entry setups with balloons, lights & stylish decor 💫",
    },
    {
      num: "06",
      title: "Proposal Decorations",
      desc: "Perfect romantic setups to make your proposal unforgettable 💍",
    },
    {
      num: "07",
      title: "Customized Themes",
      desc: "Personalized decoration themes based on your ideas & style 🎨",
    },
    {
      num: "08",
      title: "Affordable Packages",
      desc: "Premium decoration services at budget-friendly prices 💰",
    },
  ];

  return (
    <section className="bg-black py-16 px-4 sm:px-6">

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Why Choose Us 🎈
        </h2>

        <p className="text-red-500 mt-3 text-lg">
          We Make Your Moments Beautiful & Memorable
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="text-center"
          >

            {/* 🔴 NUMBER CIRCLE */}
            <motion.div
              whileHover={{ scale: 1.15 }}
              className="w-14 h-14 bg-red-500 text-white flex items-center justify-center 
              rounded-full text-lg font-bold mx-auto shadow-lg shadow-red-500/40"
            >
              {item.num}
            </motion.div>

            {/* LINE */}
            <div className="w-[2px] h-6 bg-red-500 mx-auto"></div>

            {/* CARD */}
            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0px 20px 40px rgba(255,0,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-xl p-5 shadow-lg border border-gray-200"
            >
              <h3 className="font-semibold text-lg text-black mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}