import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

import img1 from "../../assets/a1.jpeg";
import img2 from "../../assets/a1.jpeg";
import img3 from "../../assets/a1.jpeg";

/* COUNTER */
function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}</span>;
}

export default function About1() {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">

      {/* 💎 GOLD GLOW */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-yellow-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-400/20 blur-[160px] rounded-full" />

      {/* 🎉 CONFETTI FUNCTION */}
      {[ "top-0", "top-1/2 -translate-y-1/2", "bottom-0" ].map((pos, idx) => (
        <React.Fragment key={idx}>

          {/* LEFT */}
          <div className={`absolute left-0 ${pos} z-10 pointer-events-none`}>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0 }}
                animate={{
                  x: idx === 1 ? 200 : Math.random() * 100,
                  y: idx === 2 ? -200 : 200,
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

          {/* RIGHT */}
          <div className={`absolute right-0 ${pos} z-10 pointer-events-none`}>
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0 }}
                animate={{
                  x: idx === 1 ? -200 : -Math.random() * 100,
                  y: idx === 2 ? -200 : 200,
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

        </React.Fragment>
      ))}

      {/* 🎈 BALLOONS */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [-10, -120], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, delay: i * 1, repeat: Infinity }}
            className="absolute bottom-0 text-3xl"
            style={{ left: `${20 + i * 20}%` }}
          >
            🎈
          </motion.div>
        ))}
      </div>

      {/* 🌸 FLOWERS */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -200],
              opacity: [0, 1, 0],
              x: [0, i % 2 === 0 ? 30 : -30],
            }}
            transition={{ duration: 7, delay: i * 0.7, repeat: Infinity }}
            className="absolute bottom-0 text-2xl"
            style={{ left: `${10 + i * 18}%` }}
          >
            🌸
          </motion.div>
        ))}
      </div>

      {/* 💎 CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold">
            <span className="text-yellow-400">About </span>
            The Events Hubs
          </h2>

          <p className="mt-6 text-yellow-400 font-semibold">
            Turning Celebrations Into Magical Moments 🎈
          </p>

          <p className="mt-6 text-gray-300">
            The Events Hubs is a trusted event decoration company with 5+ years
            of experience. We create beautiful and unforgettable decorations for
            birthdays, weddings, anniversaries, and special occasions.
          </p>

          {/* COUNTER */}
          <div className="grid grid-cols-3 gap-6 mt-10">
            <h3 className="text-3xl text-yellow-400"><Counter end={5}/>+</h3>
            <h3 className="text-3xl text-yellow-400"><Counter end={2000}/>+</h3>
            <h3 className="text-3xl text-yellow-400"><Counter end={50}/>+</h3>
          </div>

          {/* CONTACT */}
          <div className="flex items-center gap-4 mt-10">
            <Phone />
            <p>78887-35541</p>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-6">
          <img src={img1} className="rounded-xl"/>
          <img src={img2} className="rounded-xl"/>
          <img src={img3} className="rounded-xl"/>
        </div>

      </div>
    </section>
  );
}