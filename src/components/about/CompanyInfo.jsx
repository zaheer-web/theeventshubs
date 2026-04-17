import React from "react";
import { motion } from "framer-motion";

// Images
// import img1 from "../../assets/ah-2.avif";
// import img2 from "../../assets/ah-2.jpg";
// import img3 from "../../assets/ah-3.jpg";
// import img4 from "../../assets/aa-2.webp";
import img1 from "../../assets/za-17.jpeg";
import img2 from "../../assets/za-8.jpeg";
import img3 from "../../assets/za-21.jpeg";
import img4 from "../../assets/za-12.jpeg";

export default function CompanyInfo() {
  return (
    <section className="bg-[#111] text-white py-24 px-6 relative overflow-hidden">

      {/* 💎 GOLD BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-black to-black" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* 💎 TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              About <span className="text-yellow-400">Mannat Luxury events</span>
            </h2>

            <p className="text-gray-400 leading-8 mb-6 text-lg">
              Mannat Luxury events is a trusted and growing event decoration company with over 
              <span className="text-white font-semibold"> 5 years of experience</span>. 
              Founded by <span className="text-white font-semibold"> Mannat Sood</span>, 
              we create unforgettable celebrations with creativity and perfection.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              We specialize in balloon decorations, birthday setups, anniversary celebrations, 
              haldi functions, proposal decorations, and customized event designs.
            </p>

            <p className="text-gray-400 leading-8">
              With <span className="text-white font-semibold">50+ workers</span> and 
              <span className="text-white font-semibold"> 2000+ happy customers</span>, 
              we proudly serve Delhi NCR, Noida, Gurugram, and Ghaziabad.
            </p>

            {/* 💎 STATS */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-black p-4 rounded-lg border border-yellow-500/10">
                <h3 className="text-yellow-400 font-bold text-xl">5+</h3>
                <p className="text-gray-400 text-sm">Years</p>
              </div>
              <div className="bg-black p-4 rounded-lg border border-yellow-500/10">
                <h3 className="text-yellow-400 font-bold text-xl">50+</h3>
                <p className="text-gray-400 text-sm">Workers</p>
              </div>
              <div className="bg-black p-4 rounded-lg border border-yellow-500/10">
                <h3 className="text-yellow-400 font-bold text-xl">2000+</h3>
                <p className="text-gray-400 text-sm">Clients</p>
              </div>
            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={img4}
              alt="event"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg 
              hover:scale-105 transition duration-500 border border-yellow-500/20"
            />
          </motion.div>

        </div>

        {/* 💎 IMAGE STRIP */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[img1, img2, img3].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt="event"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="w-full h-[220px] object-cover rounded-2xl shadow-lg 
              hover:scale-105 transition duration-500 border border-yellow-500/20"
            />
          ))}
        </div>

        {/* 💎 CONTACT */}
        <div className="mt-16 text-left text-gray-300 space-y-3">
          <p>📍 K-A Block 415, Rahul Vihar 2nd, near Santosh Medical</p>
          <p>📧 Soodmannat902gmail.com</p>
          <p>📞 78887-35541</p>
        </div>

        {/* 💎 BUTTON */}
        <div className="mt-8 text-left">
          <a
            href="https://wa.me/917888735541"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-yellow-500 px-8 py-3 rounded-xl font-bold text-black 
            hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/30">
              Contact Us Now
            </button>
          </a>
        </div>

      </div>
    </section>
  );
}