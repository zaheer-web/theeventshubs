import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Plus
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/event.png";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔥 FLOATING BUTTON */}
      <div className="fixed bottom-20 right-6 z-50 flex flex-col items-end gap-3">

        {open && (
          <>
            {/* WhatsApp */}
            <a
              href="https://wa.me/917888735541"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <MessageCircle size={22} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mannatluxuryevents?igsh=cGkxNXpmYXN5ZzJt"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-pink-500 via-yellow-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <Instagram size={22} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61580287569524"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <Facebook size={22} />
            </a>
          </>
        )}

        {/* Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black p-4 rounded-full shadow-xl shadow-yellow-500/40 hover:scale-110 transition"
        >
          <Plus size={22} />
        </button>
      </div>

      {/* 🔥 FOOTER */}
      <footer className="relative bg-black text-gray-300 pt-16 pb-10 overflow-hidden">

        {/* Glow */}
        <div className="absolute -top-32 left-0 w-[500px] h-[500px] bg-yellow-500/20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/20 blur-[180px] rounded-full"></div>

        {/* Top Line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">

          {/* COMPANY */}
          <motion.div initial={{ opacity:0,y:40 }} whileInView={{ opacity:1,y:0 }}>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              <img src={logo} alt="logo" className="h-14"/>
              <div>
                <h2 className="text-xl font-extrabold text-white">Mannat Luxury</h2>
                <span className="text-yellow-400 text-sm font-bold">Event</span>
              </div>
            </div>

            <p className="text-gray-400">
              We specialize in creative balloon decorations for birthdays,
              weddings and surprise events 🎈
            </p>

            {/* SOCIAL */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">

              <a
                href="https://www.instagram.com/mannatluxuryevents?igsh=cGkxNXpmYXN5ZzJt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-pink-500 via-yellow-500 to-purple-500 text-white p-3 rounded-lg hover:scale-110 transition"
              >
                <Instagram size={18}/>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61580287569524"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-lg hover:scale-110 transition"
              >
                <Facebook size={18}/>
              </a>

            </div>
          </motion.div>

          {/* LINKS */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/our-gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Birthday Decoration</li>
              <li>Wedding Decoration</li>
              <li>Baby Shower</li>
              <li>Balloon Setup</li>
            </ul>
          </div>

          {/* 🔥 CONTACT (FIXED CENTER MOBILE) */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>

            <a
              href="tel:7888735541"
              className="flex items-center justify-center md:justify-start gap-2"
            >
              <Phone size={16}/> 78887-35541
            </a>

            <a
              href="mailto:Soodmannat902@gmail.com"
              className="flex items-center justify-center md:justify-start gap-2 mt-2"
            >
              <Mail size={16}/> Email
            </a>

            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <MapPin size={16}/> India
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center mt-10 text-gray-500">
          © {new Date().getFullYear()} Mannat Luxury Events
        </div>

      </footer>
    </>
  );
}