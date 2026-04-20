import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";

// import img1 from "../../assets/za-4.jpeg";
import img1 from "../../assets/sasa-3.jpeg";


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
  const ref = useRef(null);

  // 🔥 Scroll Progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🔥 Zoom Effect
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 0.8]);

  return (
    <section
      ref={ref}
      className="relative py-24 bg-black text-white overflow-hidden"
    >

      {/* GLOW */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-yellow-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-400/20 blur-[160px] rounded-full" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-yellow-400">About </span>
            Mannat Luxury Events
          </h2>

          <p className="mt-6 text-lg text-yellow-400 font-semibold">
            Turning Celebrations Into Magical Moments 🎈
          </p>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            <span className="text-white font-semibold">
              Mannat Luxury Events
            </span>{" "}
            is a trusted and fast-growing event decoration company with{" "}
            <span className="text-yellow-400 font-bold">5+ years</span> of experience.
            We specialize in creating unique and memorable decoration setups that
            transform ordinary spaces into extraordinary celebrations.
          </p>

          <p className="mt-5 text-gray-400 text-lg">
            From birthdays, anniversaries, and surprise parties to weddings, haldi
            functions, and grand entries — we bring creativity, elegance, and perfection
            to every event.
          </p>

          <p className="mt-5 text-gray-400 text-lg">
            Our team focuses on personalized themes, premium quality materials, and
            attention to detail to make your special moments truly unforgettable 💛
          </p>

          {/* COUNTERS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
            <div className="text-center">
              <h3 className="text-3xl text-yellow-400"><Counter end={5}/>+</h3>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl text-yellow-400"><Counter end={2000}/>+</h3>
              <p className="text-gray-400 text-sm">Happy Clients</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl text-yellow-400"><Counter end={50}/>+</h3>
              <p className="text-gray-400 text-sm">Team Members</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl text-yellow-400"><Counter end={4}/>+</h3>
              <p className="text-gray-400 text-sm">Cities Covered</p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="flex items-center gap-4 mt-12">
            <div className="bg-yellow-500 text-black p-4 rounded-xl shadow-lg">
              <Phone size={20}/>
            </div>

            <div>
              <p className="font-semibold text-lg">Call Anytime</p>
              <p className="text-gray-400">78887-35541</p>
            </div>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          style={{ scale, opacity }}
          className="rounded-xl overflow-hidden"
        >
          <motion.img
            src={img1}
            className="w-full h-[500px] object-cover rounded-xl"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

      </div>
    </section>
  );
}