import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Divider from "../home/Divider";
import Swal from "sweetalert2";
import contactBg from "../../assets/ad-1.jpg";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      Swal.fire({
        icon: "success",
        title: "Message Sent 🎉",
        text: "We will contact you soon!",
        confirmButtonColor: "#D4AF37",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* 💎 PREMIUM HERO */}
      <section className="relative h-[90vh] sm:h-screen w-full overflow-hidden bg-black">

        {/* BACKGROUND */}
        <motion.img
          src={contactBg}
          className="absolute w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 10 }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-transparent z-10" />

        {/* CONFETTI */}
        <div className="absolute left-0 top-0 z-20 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, x: 0, opacity: 1 }}
              animate={{
                y: 200,
                x: Math.random() * 100,
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

        {/* BALLOONS */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 120, opacity: 0 }}
              animate={{
                y: [-20, -180],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                delay: i * 1,
                repeat: Infinity,
              }}
              className="absolute bottom-0 text-3xl"
              style={{ left: `${15 + i * 15}%` }}
            >
              🎈
            </motion.div>
          ))}
        </div>

        {/* FLOWERS */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 150, opacity: 0 }}
              animate={{
                y: [-30, -220],
                opacity: [0, 1, 0],
                x: [0, i % 2 === 0 ? 20 : -20],
              }}
              transition={{
                duration: 7,
                delay: i * 0.8,
                repeat: Infinity,
              }}
              className="absolute bottom-0 text-2xl"
              style={{ left: `${10 + i * 15}%` }}
            >
              🌸
            </motion.div>
          ))}
        </div>

        {/* CONTENT */}
        <div className="relative z-30 flex items-center h-full px-6 sm:px-16">
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Contact <span className="text-yellow-400">Us</span>
            </h1>

            <p className="mt-6 text-gray-200 text-lg">
              Let’s plan your perfect celebration with stunning balloon decorations.
            </p>
          </motion.div>
        </div>

      </section>

      <Divider />

      {/* 💎 CONTACT SECTION */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-[#111] p-8 rounded-2xl border border-yellow-500/10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">

              <div className="flex gap-4">
                <Phone className="text-yellow-400" />
                <p className="text-gray-300">78887-35541</p>
              </div>

              <div className="flex gap-4">
                <Mail className="text-yellow-400" />
                <p className="text-gray-300 break-all">
                  Soodmannat902gmail.com
                </p>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-yellow-400" />
                <p className="text-gray-300">
                  K-A Block 415, Rahul Vihar 2nd <br />
                  Near Santosh Medical, Ghaziabad
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-[#111] p-8 rounded-2xl border border-yellow-500/10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Send Message
            </h2>

            <input
              placeholder="Your Name"
              className="bg-black border border-yellow-500/10 rounded-lg p-3 w-full text-white mb-4 focus:border-yellow-400 outline-none"
            />

            <input
              placeholder="Email"
              className="bg-black border border-yellow-500/10 rounded-lg p-3 w-full text-white mb-4 focus:border-yellow-400 outline-none"
            />

            <input
              placeholder="Phone"
              className="bg-black border border-yellow-500/10 rounded-lg p-3 w-full text-white mb-4 focus:border-yellow-400 outline-none"
            />

            <textarea
              placeholder="Message"
              className="bg-black border border-yellow-500/10 rounded-lg p-3 w-full text-white mb-4 focus:border-yellow-400 outline-none"
            />

            <button className="w-full bg-yellow-500 py-3 rounded-lg font-bold text-black hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/30">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

        </div>
      </section>

      <Divider />

      {/* 💎 MAP */}
      <section className="bg-black py-10 px-6">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-yellow-500/10">
          <iframe
            src="https://www.google.com/maps?q=Rahul%20Vihar%20Ghaziabad&z=15&output=embed"
            className="w-full h-[400px]"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <Divider />
    </>
  );
}