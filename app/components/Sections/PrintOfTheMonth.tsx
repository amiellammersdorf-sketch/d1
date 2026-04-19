"use client";

import { useState } from "react";

const images = [
  "/potm/april/potm_april_1.jpg",
  "/potm/april/potm_april_2.jpg",
  "/potm/april/potm_april_3.jpg",
  "/potm/april/potm_april_4.jpg",
];

export default function PrintOfTheMonth() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="w-full max-w-5xl">
      {/* SECTION TITLE */}
      <h1 className="text-[38px] font-bold text-[#1d4ed8] mb-6">
        PRINT OF THE MONTH
      </h1>

      {/* PRODUCT TITLE */}
      <h2 className="text-[22px] font-semibold mb-4">
        DARUMA SHIRT
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
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 text-lg"
        >
          ←
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 px-3 py-1 text-lg"
        >
          →
        </button>
      </div>

      {/* DESCRIPTION */}
      <p className="text-[18px] leading-[26px] max-w-2xl mb-6">
        Der Daruma steht für Ausdauer und Zielstrebigkeit. Setze dir ein Ziel,
        male ein Auge – und wenn du es erreichst, das zweite. Von Hand bei D1
        in St. Gallen gedruckt.
      </p>

      {/* BUY BUTTON */}
      <button className="bg-black text-white px-6 py-3 text-[16px] hover:opacity-80 transition">
        Jetzt kaufen
      </button>
    </div>
  );
}
