import React, { useRef, useState } from "react";

import reel1 from "../../assets/za-29.mp4";
import reel2 from "../../assets/za-31.mp4";
import reel3 from "../../assets/fa-10.mp4";
import reel4 from "../../assets/fa-13.mp4";

export default function ReelsSection() {

  const reels = [
    { video: reel1 },
    { video: reel2 },
    { video: reel3 },
    { video: reel4 },
  ];

  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const handlePlayPause = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      // 👉 pause all other videos
      if (i !== index) {
        video.pause();
      }
    });

    const currentVideo = videoRefs.current[index];

    if (currentVideo.paused) {
      currentVideo.play();
      setPlayingIndex(index);
    } else {
      currentVideo.pause();
      setPlayingIndex(null);
    }
  };

  return (
    <section className="bg-black py-16 px-4">

      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Our Reels
        </h2>
        <p className="text-yellow-400 mt-3 text-lg">
          देखें हमारे latest decoration moments 🎥
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {reels.map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => handlePlayPause(index)}
          >

            {/* VIDEO */}
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.video}
              loop
              muted
              playsInline
              preload="metadata"
              onLoadedData={(e) => {
                // 👉 ensures first frame shows (no black screen)
                e.target.currentTime = 0.1;
              }}
              className="w-full h-[450px] object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* PLAY / PAUSE BUTTON */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/80 text-black rounded-full w-14 h-14 flex items-center justify-center text-xl shadow-lg">
                {playingIndex === index ? "❚❚" : "▶"}
              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}