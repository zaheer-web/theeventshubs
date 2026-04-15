import { useState, useEffect } from "react";
import { Menu, X, Plus } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/event.png";

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
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 md:py-5">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <img
            src={logo}
            alt="logo"
            className="h-10 md:h-12 w-auto object-contain"
          />

          {/* Brand Name */}
          <div className="flex flex-col leading-tight">
            <span className="text-white text-sm md:text-lg font-bold tracking-wide uppercase">
              Mannat Luxury
            </span>
            <span className="text-yellow-400 text-xs md:text-sm font-semibold tracking-[3px] uppercase">
              Events
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-semibold items-center text-base tracking-wide">
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
          <button
            className="hidden md:flex items-center gap-2 
            bg-yellow-500 text-black px-6 py-2.5 rounded-lg font-semibold text-base
            hover:bg-yellow-400 transition shadow-lg shadow-yellow-500/30"
          >
            GET STARTED <Plus size={18} />
          </button>
        </a>

        {/* Mobile Icon */}
        <div className="md:hidden text-white">
          {menuOpen ? (
            <X size={28} onClick={() => setMenuOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-yellow-500/10">
          <ul className="flex flex-col gap-6 p-6 font-semibold text-base">
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
              bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold 
              hover:bg-yellow-400 transition shadow-md shadow-yellow-500/30">
                GET STARTED
              </button>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}