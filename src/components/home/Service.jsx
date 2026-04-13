import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import s1 from "../../assets/s1.jpeg";
import s2 from "../../assets/s2.jpeg";
import s3 from "../../assets/s3.jpeg";
import s4 from "../../assets/s4.jpeg";
import s5 from "../../assets/s5.jpeg";

export default function Service() {

  const services = [
    {
      image: s1,
      title: "Balloon Decoration",
      desc: "Creative balloon setups for all types of events and celebrations.",
      path: "/services",
    },
    {
      image: s2,
      title: "Birthday Decoration",
      desc: "Make birthdays special with unique balloon themes & surprises 🎈",
      path: "/services",
    },
    {
      image: s3,
      title: "Anniversary Decoration",
      desc: "Romantic anniversary setups to create unforgettable memories ❤️",
      path: "/services",
    },
    {
      image: s4,
      title: "Haldi Decoration",
      desc: "Traditional Haldi decor with modern balloon styling & colors.",
      path: "/services",
    },
    {
      image: s5,
      title: "Special Event Setups",
      desc: "Bridal entry, couple entry, proposal & surprise decorations ✨",
      path: "/services",
    },
  ];

  const loopServices = [...services, ...services];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const visibleCards = 3;

  // AUTO SLIDE
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // RESET LOOP
  useEffect(() => {
    if (currentIndex >= services.length) {
      setCurrentIndex(0);
    }
  }, [currentIndex, services.length]);

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );

  return (
    <section className="bg-black py-16 px-4">

      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-white">
          Our Services
        </h2>
        <p className="text-red-500 mt-3 text-lg">
          Making Every Celebration Special 🎈
        </p>
      </div>

      {/* SLIDER */}
      <div
        className="max-w-7xl mx-auto overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / visibleCards
            }%)`,
          }}
        >
          {loopServices.map((service, i) => (
            <Link
              to={service.path}
              key={i}
              className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-3"
            >
              <div className="relative rounded-xl overflow-hidden group shadow-lg">

                {/* IMAGE */}
                <img
                  src={service.image}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
                />

                {/* DARK OVERLAY */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition"></div>

                {/* CARD */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[80%] bg-white rounded-xl p-3 text-center shadow-md group-hover:bg-red-500 transition">

                  <h3 className="font-semibold text-lg text-black group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-700 mt-1 group-hover:text-white">
                    {service.desc}
                  </p>

                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-center gap-4 mt-8">

        <button
          onClick={prevSlide}
          className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-400 transition active:scale-90"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          onClick={nextSlide}
          className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-400 transition active:scale-90"
        >
          <ArrowRight size={18} />
        </button>

      </div>

    </section>
  );
}