import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Phone } from "lucide-react";

import img1 from "../../assets/a1.jpeg";
import img2 from "../../assets/a1.jpeg";
import img3 from "../../assets/a1.jpeg";

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

function About1() {
  // 🎈 Mouse interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const floatX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const floatY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-24 bg-black text-white overflow-hidden"
    >

      {/* 🔴 MOVING LIGHT */}
      <motion.div
        animate={{ x: ["-20%", "120%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[300px] h-full bg-red-500/10 blur-[120px]"
      />

      {/* 🔴 RED GLOW */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-red-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/20 blur-[160px] rounded-full" />

      {/* 🎈 FLOATING BALLOONS */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            style={{ x: floatX, y: floatY }}
            animate={{
              y: [-10, -80],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 6,
              delay: i * 1.5,
              repeat: Infinity
            }}
            className="absolute text-2xl md:text-3xl"
            style={{
              left: `${20 + i * 20}%`,
              bottom: `${10 + i * 5}%`
            }}
          >
            🎈
          </motion.div>
        ))}
      </div>

      {/* BG TEXT */}
      <h1 className="absolute text-[160px] md:text-[240px] font-extrabold text-white/5 left-6 top-6 -z-10">
        ABOUT
      </h1>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-4xl md:text-6xl font-extrabold">
            <span className="text-red-500">About </span>The Events Hubs
          </h2>

          <p className="mt-6 text-lg text-red-500 font-semibold">
            Turning Celebrations Into Magical Moments 🎈
          </p>

          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            <span className="font-semibold text-white">The Events Hubs</span> is a trusted balloon decoration company with <span className="text-red-500 font-bold">5+ years</span> of experience.  
            Founded by <span className="text-white font-semibold">Mannat Sood</span>, we create unforgettable event setups.
          </p>

          <p className="mt-5 text-gray-400 text-lg leading-relaxed">
            Serving across <span className="text-red-500">Delhi NCR, Noida, Gurugram & Ghaziabad</span> with a professional team of <span className="text-white font-semibold">50+ members</span>.
          </p>

          {/* 🔥 COUNTERS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">

            <div className="text-center">
              <h3 className="text-3xl font-bold text-red-500">
                <Counter end={5}/>+
              </h3>
              <p className="text-gray-400 text-sm">Years</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-red-500">
                <Counter end={2000}/>+
              </h3>
              <p className="text-gray-400 text-sm">Clients</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-red-500">
                <Counter end={50}/>+
              </h3>
              <p className="text-gray-400 text-sm">Workers</p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-red-500">
                <Counter end={4}/>+
              </h3>
              <p className="text-gray-400 text-sm">Cities</p>
            </div>

          </div>

          {/* CONTACT */}
          <div className="flex items-center gap-4 mt-12">

            <div className="bg-red-500 p-4 rounded-xl shadow-lg shadow-red-500/40">
              <Phone size={20}/>
            </div>

            <div>
              <p className="font-semibold text-lg">Call Anytime</p>
              <p className="text-gray-400">78887-35541</p>
            </div>

          </div>

        </motion.div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-6">

          <div className="col-span-2 relative group rounded-2xl overflow-hidden">
            <img src={img1} className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-700"/>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white text-lg">Luxury Event Setup</p>
            </div>
          </div>

          <div className="relative group rounded-2xl overflow-hidden">
            <img src={img2} className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-700"/>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p>Birthday Decoration 🎈</p>
            </div>
          </div>

          <div className="relative group rounded-2xl overflow-hidden">
            <img src={img3} className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-700"/>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p>Wedding Setup ❤️</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About1;