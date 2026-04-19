"use client";

import { useState } from "react";

const images = [
  "/potm/april/potm_april_1.jpg",
  "/potm/april/potm_april_2.jpg",
];

export default function PrintOfTheMonth() {
  const [index, setIndex] = useState(0);

  // ✅ LOOPING CAROUSEL (robust for any number of images)
  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };

  const prev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-5xl">
      {/* SECTION TITLE */}
      <h1 className="text-[38px] font-bold text-[#021695] mb-6">
        PRINT OF THE MONTH
      </h1>

      {/* PRODUCT TITLE */}
      <h2 className="space-y-6 text-[18px] leading-[26px] md:text-2xl md:leading-snug relative z-10">
        Daruma T-Shirt
      </h2>

      {/* IMAGE + ARROWS */}
      <div className="relative w-full max-w-md mb-6">
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={images[index]}
            alt="Daruma Shirt"
            className="w-full h-full object-cover"
          />
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-3xl text-[#021695] transition duration-150 ease-out active:opacity-50"
        >
          ←
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-3xl text-[#021695] transition duration-150 ease-out active:opacity-50"
        >
          →
        </button>
      </div>

      {/* DESCRIPTION */}
      <p className="space-y-6 text-[18px] leading-[26px] md:text-2xl md:leading-snug relative z-10">
        Der Daruma steht für Ausdauer und Zielstrebigkeit. Setze dir ein Ziel,
        male ein Auge – und wenn du es erreichst, das zweite. Von Hand bei D1
        in St. Gallen gedruckt.
      </p>

      {/* BUY BUTTON */}
      <button className="mt-6 bg-[#021695] text-white px-6 py-3 text-[16px] transition active:opacity-70 hover:brightness-110">
  Jetzt kaufen
</button>
    </div>
  );
}
