import React from "react";

export default function Highlights() {

  const highlights = [
    {
      num: "01",
      title: "Balloon Decoration Experts",
      desc: "Creative balloon setups for birthdays, weddings & all celebrations 🎈",
    },
    {
      num: "02",
      title: "Birthday Surprise Setup",
      desc: "Make your loved ones feel special with surprise balloon decorations 🎉",
    },
    {
      num: "03",
      title: "Anniversary Decoration",
      desc: "Romantic and beautiful setups to celebrate your special moments 💛",
    },
    {
      num: "04",
      title: "Haldi & Wedding Decor",
      desc: "Traditional + modern balloon decor for Haldi & wedding events ✨",
    },
    {
      num: "05",
      title: "Bridal & Couple Entry",
      desc: "Grand entry setups with balloons, lights & stylish decor 💫",
    },
    {
      num: "06",
      title: "Proposal Decorations",
      desc: "Perfect romantic setups to make your proposal unforgettable 💍",
    },
    {
      num: "07",
      title: "Customized Themes",
      desc: "Personalized decoration themes based on your ideas & style 🎨",
    },
    {
      num: "08",
      title: "Affordable Packages",
      desc: "Premium decoration services at budget-friendly prices 💰",
    },
  ];

  return (
    <section className="bg-black py-16 px-4 sm:px-6">

      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Why Choose Us
        </h2>

        <p className="text-yellow-400 mt-3 text-lg">
          We Make Your Moments Beautiful & Memorable
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {highlights.map((item, i) => (
          <div
            key={i}
            className="h-full flex flex-col items-center text-center w-full"
          >

            {/* NUMBER */}
            <div className="w-14 h-14 bg-yellow-500 text-black flex items-center justify-center 
              rounded-full text-lg font-bold shadow-lg shadow-yellow-500/40 mb-4">
              {item.num}
            </div>

            {/* LINE */}
            <div className="w-[2px] h-6 bg-yellow-500 mb-4"></div>

            {/* CARD */}
            <div
              className="bg-white rounded-xl p-6 border border-yellow-500/20 
              shadow-lg flex flex-col h-full w-full max-w-[260px] mx-auto
              hover:shadow-[0px_25px_50px_rgba(212,175,55,0.35)]
              transition-all duration-300"
            >

              <h3 className="font-semibold text-lg text-black mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm flex-grow">
                {item.desc}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}