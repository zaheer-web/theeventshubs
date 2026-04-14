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
      desc: "Romantic and beautiful setups to celebrate your special moments 💛",
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
    <section className="relative bg-black py-16 px-4 sm:px-6 overflow-hidden">

      {/* 🎉 CONFETTI (TOP + MID + BOTTOM BOTH SIDE) */}
      {["top-0", "top-1/2 -translate-y-1/2", "bottom-0"].map((pos, idx) => (
        <React.Fragment key={idx}>

          {/* LEFT */}
          <div className={`absolute left-0 ${pos} z-10 pointer-events-none`}>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: idx === 1 ? 200 : Math.random() * 100,
                  y: idx === 2 ? -200 : 200,
                  opacity: [1, 0],
                }}
                transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                className={`absolute w-2 h-2 ${
                  i % 3 === 0 ? "bg-yellow-400" : i % 3 === 1 ? "bg-pink-400" : "bg-white"
                }`}
              />
            ))}
          </div>

          {/* RIGHT */}
          <div className={`absolute right-0 ${pos} z-10 pointer-events-none`}>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: idx === 1 ? -200 : -Math.random() * 100,
                  y: idx === 2 ? -200 : 200,
                  opacity: [1, 0],
                }}
                transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                className={`absolute w-2 h-2 ${
                  i % 3 === 0 ? "bg-yellow-400" : i % 3 === 1 ? "bg-pink-400" : "bg-white"
                }`}
              />
            ))}
          </div>

        </React.Fragment>
      ))}

      {/* 🎈 BALLOONS */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [-10, -120], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, delay: i * 1, repeat: Infinity }}
            className="absolute bottom-0 text-3xl"
            style={{ left: `${25 + i * 25}%` }}
          >
            🎈
          </motion.div>
        ))}
      </div>

      {/* 🌸 FLOWERS */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -200],
              opacity: [0, 1, 0],
              x: [0, i % 2 === 0 ? 30 : -30],
            }}
            transition={{ duration: 7, delay: i * 0.7, repeat: Infinity }}
            className="absolute bottom-0 text-2xl"
            style={{ left: `${15 + i * 20}%` }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* 💎 HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-20"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Why Choose Us 🎈
        </h2>

        <p className="text-yellow-400 mt-3 text-lg">
          We Make Your Moments Beautiful & Memorable
        </p>
      </motion.div>

      {/* 💎 GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-20">

        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="text-center"
          >

            <motion.div
              whileHover={{ scale: 1.15 }}
              className="w-14 h-14 bg-yellow-500 text-black flex items-center justify-center 
              rounded-full text-lg font-bold mx-auto shadow-lg shadow-yellow-500/40"
            >
              {item.num}
            </motion.div>

            <div className="w-[2px] h-6 bg-yellow-500 mx-auto"></div>

            <motion.div
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0px 20px 40px rgba(212,175,55,0.4)",
              }}
              className="bg-white rounded-xl p-5 shadow-lg border border-yellow-500/20"
            >
              <h3 className="font-semibold text-lg text-black mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </motion.div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}