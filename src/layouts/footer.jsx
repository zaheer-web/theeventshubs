// based on your uploaded file :contentReference[oaicite:0]{index=0}

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Plus
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/a1.jpeg";

export default function Footer() {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FLOATING BUTTON */}
      <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-3">

        {open && (
          <>
            <a
              href="https://wa.me/917888735541"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <MessageCircle size={22}/>
            </a>

            <a className="bg-gradient-to-tr from-yellow-500 to-yellow-300 text-black p-3 rounded-full shadow-lg hover:scale-110 transition">
              <Instagram size={22}/>
            </a>

            <a className="bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:scale-110 transition">
              <Facebook size={22}/>
            </a>
          </>
        )}

        <button
          onClick={()=>setOpen(!open)}
          className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black p-4 rounded-full shadow-xl shadow-yellow-500/40 hover:scale-110 transition"
        >
          <Plus size={22}/>
        </button>

      </div>


      {/* FOOTER */}
      <footer className="relative bg-black text-gray-300 pt-16 pb-10 overflow-hidden">

        {/* 🔥 GOLD GLOW */}
        <div className="absolute -top-32 left-0 w-[500px] h-[500px] bg-yellow-500/20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/20 blur-[180px] rounded-full"></div>

        {/* 🔥 GRADIENT LINE TOP */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">

          {/* COMPANY */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
          >

            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              <img src={logo} alt="logo" className="h-14"/>

              <div>
                <h2 className="text-xl font-extrabold text-white tracking-wide">
                  The Events
                </h2>
                <span className="text-yellow-400 text-sm font-bold tracking-widest">
                  HUBS
                </span>
              </div>
            </div>

            <p className="leading-relaxed max-w-sm mx-auto md:mx-0 text-gray-400">
              We specialize in creative balloon decorations for birthdays,
              weddings and surprise events. Turning your celebrations into unforgettable memories 🎈
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a className="bg-white/10 p-3 rounded-lg hover:bg-yellow-500 hover:text-black transition shadow-md hover:shadow-yellow-500/40">
                <Instagram size={18}/>
              </a>

              <a className="bg-white/10 p-3 rounded-lg hover:bg-yellow-500 hover:text-black transition shadow-md hover:shadow-yellow-500/40">
                <Facebook size={18}/>
              </a>

              <a className="bg-white/10 p-3 rounded-lg hover:bg-yellow-500 hover:text-black transition shadow-md hover:shadow-yellow-500/40">
                <Linkedin size={18}/>
              </a>
            </div>

          </motion.div>


          {/* LINKS */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.7 }}
          >

            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-yellow-500 pl-3">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
              <li><Link to="/services" className="hover:text-yellow-400">Services</Link></li>
              <li><Link to="/our-gallery" className="hover:text-yellow-400">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>

          </motion.div>


          {/* SERVICES */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
          >

            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-yellow-500 pl-3">
              Our Services
            </h3>

            <ul className="space-y-3">
              <li className="hover:text-yellow-400">Birthday Decoration</li>
              <li className="hover:text-yellow-400">Anniversary Setup</li>
              <li className="hover:text-yellow-400">Wedding Decoration</li>
              <li className="hover:text-yellow-400">Baby Shower Decor</li>
              <li className="hover:text-yellow-400">Balloon Backdrops</li>
            </ul>

          </motion.div>


          {/* CONTACT */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.9 }}
          >

            <h3 className="text-white font-bold text-lg mb-6 border-l-4 border-yellow-500 pl-3">
              Contact Us
            </h3>

            <div className="space-y-4">

              <a href="tel:7888735541" className="flex gap-3 hover:text-yellow-400">
                <Phone size={18}/>
                <span>78887-35541</span>
              </a>

              <a
                href="mailto:Soodmannat902@gmail.com"
                className="flex gap-3 hover:text-yellow-400"
              >
                <Mail size={18}/>
                <span>Soodmannat902@gmail.com</span>
              </a>

              <div className="flex gap-3 hover:text-yellow-400">
                <MapPin size={18}/>
                <span>
                  K-A Block 415, Rahul Vihar 2nd <br/>
                  Near Santosh Medical, India
                </span>
              </div>

            </div>

          </motion.div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-6 text-center text-gray-500">
          <p className="hover:text-yellow-400 transition">
            © {new Date().getFullYear()} The Events Hubs. All Rights Reserved.
          </p>
        </div>

      </footer>
    </>
  );
}