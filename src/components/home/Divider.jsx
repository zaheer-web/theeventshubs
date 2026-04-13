import React from "react";
import { motion } from "framer-motion";

export default function Divider() {
  return (
    <div className="relative flex items-center justify-center py-3 bg-black overflow-hidden">

      {/* 🔥 RED GLOW LINE */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent"
      />

      {/* OPTIONAL CENTER DOT */}
      <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.8)]"></div>

    </div>
  );
}