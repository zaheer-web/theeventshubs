import React from "react";
import { motion } from "framer-motion";

export default function Divider() {
  return (
    <div className="relative flex items-center justify-center py-0 bg-black overflow-hidden">

      {/* 💎 GOLD GLOW LINE */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
      />

      {/* 💎 CENTER DOT */}
      <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.8)]"></div>

    </div>
  );
}