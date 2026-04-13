import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import Divider from "../home/Divider";
import Swal from "sweetalert2";
import contactBg from "../../assets/contact.jpeg";

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
        confirmButtonColor: "#ef4444",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      {/* 🔥 HERO (HEIGHT INCREASED) */}
      <section
        className="relative h-[400px] sm:h-[500px] flex items-center px-6 sm:px-16"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

        <h1 className="relative text-white text-4xl md:text-6xl font-bold">
          Contact <span className="text-red-500">Us</span>
        </h1>
      </section>

      <Divider />

      {/* 🔥 CONTACT SECTION */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="bg-[#111] p-8 rounded-2xl border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">

              {/* PHONE */}
              <div className="flex gap-4">
                <Phone className="text-red-500" />
                <p className="text-gray-300">78887-35541</p>
              </div>

              {/* EMAIL */}
              <div className="flex gap-4">
                <Mail className="text-red-500" />
                <p className="text-gray-300 break-all">
                  Soodmannat902gmail.com
                </p>
              </div>

              {/* 🔥 UPDATED ADDRESS */}
              <div className="flex gap-4">
                <MapPin className="text-red-500" />
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
            className="bg-[#111] p-8 rounded-2xl border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Send Message
            </h2>

            <input
              placeholder="Your Name"
              className="bg-black border border-white/10 rounded-lg p-3 w-full text-white mb-4"
            />

            <input
              placeholder="Email"
              className="bg-black border border-white/10 rounded-lg p-3 w-full text-white mb-4"
            />

            <input
              placeholder="Phone"
              className="bg-black border border-white/10 rounded-lg p-3 w-full text-white mb-4"
            />

            <textarea
              placeholder="Message"
              className="bg-black border border-white/10 rounded-lg p-3 w-full text-white mb-4"
            />

            <button className="w-full bg-red-500 py-3 rounded-lg font-bold hover:bg-red-400 transition">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

        </div>
      </section>

      <Divider />

      {/* 🔥 MAP */}
      <section className="bg-black py-10 px-6">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/10">
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