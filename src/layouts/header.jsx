import { useState, useEffect } from "react";
import { Menu, X, Plus } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/a1.jpeg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
      : "text-gray-200 hover:text-yellow-400 transition duration-300";

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500
      ${
        scrolled
          ? "bg-black shadow-lg shadow-yellow-500/10"
          : "bg-gradient-to-r from-black via-black/90 to-black/80 backdrop-blur-xl border-b border-yellow-500/10"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5 md:py-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="h-12 md:h-14 w-auto object-contain"
          />

          {/* Brand Name */}
          <div className="flex flex-col leading-none">
            <span className="text-white text-lg md:text-xl font-extrabold tracking-widest uppercase">
              The Events
            </span>
            <span className="text-yellow-400 text-base md:text-lg font-bold tracking-[4px] uppercase">
              Hubs
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 font-bold items-center text-lg tracking-wide">
          <NavLink to="/" className={navLinkClass}>HOME</NavLink>
          <NavLink to="/services" className={navLinkClass}>SERVICES</NavLink>
          <NavLink to="/about" className={navLinkClass}>ABOUT</NavLink>
          <NavLink to="/our-gallery" className={navLinkClass}>GALLERY</NavLink>
          <NavLink to="/contact" className={navLinkClass}>CONTACT</NavLink>
        </ul>

        {/* Button */}
        <a
          href="https://wa.me/7888735541"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 
            bg-yellow-500 text-black px-7 py-3 rounded-xl font-bold text-lg
            hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/30"
          >
            GET STARTED <Plus size={20} />
          </motion.button>
        </a>

        {/* Mobile Icon */}
        <div className="md:hidden text-white">
          {menuOpen ? (
            <X size={30} onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu size={30} onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 backdrop-blur-lg border-t border-yellow-500/10"
        >
          <ul className="flex flex-col gap-6 p-6 font-bold text-lg">
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>HOME</NavLink>
            <NavLink to="/services" onClick={() => setMenuOpen(false)} className={navLinkClass}>SERVICES</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={navLinkClass}>ABOUT</NavLink>
            <NavLink to="/our-gallery" onClick={() => setMenuOpen(false)} className={navLinkClass}>GALLERY</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass}>CONTACT</NavLink>

            {/* Mobile Button */}
            <a
              href="https://wa.me/7888735541"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <button className="mt-4 w-full flex justify-center items-center gap-2 
              bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold 
              hover:bg-yellow-400 transition shadow-md shadow-yellow-500/30">
                GET STARTED
              </button>
            </a>
          </ul>
        </motion.div>
      )}
    </nav>
  );
}