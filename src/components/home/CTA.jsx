import React from "react";
import { Link } from "react-router-dom";
import cta from "../../assets/cta.jpg";

export default function CTA() {
  return (
    <section className="relative h-[260px] sm:h-[320px] md:h-[360px] flex items-center justify-center text-center text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={cta}
        alt="event"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* 💎 DARK + GOLD OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-yellow-500/30"></div>

      {/* 🎈 FLOATING BALLOONS */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl animate-bounce"
            style={{
              left: `${20 + i * 20}%`,
              bottom: `${10 + i * 5}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            🎈
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-20 px-4 max-w-2xl mx-auto">

        <p className="text-yellow-400 text-sm sm:text-base md:text-lg font-semibold mb-2">
          Let’s Celebrate Together 🎉
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-5 leading-tight">
          Make Your Moments Special <br /> With Beautiful Balloon Decorations
        </h2>

        <Link to="/contact">
          <button
            className="bg-yellow-500 text-black px-6 sm:px-8 py-3 rounded-full font-semibold 
            hover:bg-yellow-400 hover:scale-105 active:scale-95 transition 
            shadow-lg shadow-yellow-500/30"
          >
            Book Your Event Now
          </button>
        </Link>

      </div>
    </section>
  );
}