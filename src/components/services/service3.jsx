import React from "react";
import { motion } from "framer-motion";

function Service3() {
  return (
    <section className="bg-black text-white py-24 px-6 relative overflow-hidden">

      {/* 🔴 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black" />

      {/* 🔥 Heading */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold">
          Creating <span className="text-red-500">Unforgettable Moments</span>
        </h2>
        <p className="text-gray-400 mt-6 text-lg">
          At <span className="text-white font-semibold">The Events Hubs</span>, 
          we don’t just decorate events — we create memories that last forever. 
          Your trust is our biggest achievement, and every celebration is handled 
          with passion, creativity, and perfection.
        </p>
      </div>

      {/* 🔥 SERVICES GRID */}
      <div className="relative z-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {[
          "Balloon Decoration 🎈",
          "Birthday Celebration 🎂",
          "Anniversary Decoration ❤️",
          "Haldi Decoration 🌼",
          "All Types of Decorations ✨",
          "Bridal Entry 👰",
          "Couple Entry 💑",
          "Birthday Surprise 🎁",
          "Proposal Decoration 💍",
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#111] border border-white/10 hover:border-red-500 rounded-2xl p-6 text-center transition shadow-lg"
          >
            <h3 className="text-xl font-semibold group-hover:text-red-500">
              {item}
            </h3>
          </motion.div>
        ))}

      </div>

      {/* 🔥 TRUST SECTION */}
      <div className="relative z-10 mt-20 max-w-5xl mx-auto text-center">

        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Why Clients <span className="text-red-500">Trust Us?</span>
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed">
          We understand that every event is special and emotional. That’s why we focus on 
          quality, creativity, and timely execution. From small birthday surprises to grand 
          wedding setups, we ensure everything is perfect. Our team listens to your ideas, 
          adds professional creativity, and delivers beyond expectations.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-[#111] p-6 rounded-xl border border-white/10 hover:border-red-500 transition">
            <h4 className="text-xl font-bold text-red-500 mb-2">100% Satisfaction</h4>
            <p className="text-gray-400 text-sm">
              We don’t stop until you are fully happy with the decoration.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl border border-white/10 hover:border-red-500 transition">
            <h4 className="text-xl font-bold text-red-500 mb-2">Creative Designs</h4>
            <p className="text-gray-400 text-sm">
              Unique themes and ideas for every celebration.
            </p>
          </div>

          <div className="bg-[#111] p-6 rounded-xl border border-white/10 hover:border-red-500 transition">
            <h4 className="text-xl font-bold text-red-500 mb-2">On-Time Setup</h4>
            <p className="text-gray-400 text-sm">
              We respect your time and deliver everything before your event starts.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="https://wa.me/917888735541"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-red-500 px-8 py-3 rounded-xl font-bold text-white hover:bg-red-400 transition shadow-lg shadow-red-500/40">
              Book Your Event Now 🎉
            </button>
          </a>
        </div>

      </div>

    </section>
  );
}

export default Service3;