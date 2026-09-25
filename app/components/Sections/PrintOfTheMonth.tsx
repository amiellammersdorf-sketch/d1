"use client";

import { useState } from "react";

const images = [
  "/potm/oct/potm_oct_1.jpg",
  "/potm/oct/potm_oct_2.jpg",
  "/potm/oct/potm_oct_3.jpg",
];

export default function PrintOfTheMonth() {
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState<string | null>(null);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  const handleBuy = () => {
    if (!size) return;

    const subject = "Bestellung Print des Monats";

    const body = `Hoi D1

Ich möchte den aktuellen Print des Monats bestellen.

Grösse: ${size}
Name:
Lieferadresse:

Liebe Grüsse`;

    window.location.href = `mailto:info@d1studio.ch?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="text-[#021695] space-y-4">
      {/* TITLE */}
      <h2 className="hidden md:block text-[38px] font-bold tracking-wide">
        PRINT DES MONATS
      </h2>

      {/* PRODUCT */}
      <div className="space-y-6 text-[18px] leading-[26px] md:text-2xl md:leading-snug">
        <p>
          <strong>Deewan</strong>
          <br />
          Longsleeve T-Shirt
          <br />
          CHF 70.–
        </p>
      </div>

      {/* IMAGE */}
      <div className="relative w-full mb-8">
        <div className="w-full aspect-square overflow-hidden">
          <img
            src={images[index]}
            alt="Some are hot and some are not T-Shirt"
            className="w-full h-full object-cover"
          />
        </div>

        {/* LEFT */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl md:text-3xl"
        >
          ←
        </button>

        {/* RIGHT */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl md:text-3xl"
        >
          →
        </button>
      </div>

      {/* DESCRIPTION */}
      <div className="space-y-6 text-[18px] leading-[26px] md:text-2xl md:leading-snug">
      

        <p>
          Design von{" "}
          <a
            href="https://d1studio.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:opacity-70 transition"
          >
            D1 Print Studio
          </a>
        </p>

        <p>2-farbiger Pocketprint, je ein 2-farbiger Druck auf beiden Ärmeln und ein 6-farbiger fotorealistischer Rückenprint.</p>

        <p>
          Von Hand gedruckt im D1 auf einem schweren Stanley/Stella Longsleeve aus Bio-Baumwolle mit Relaxed Fit.
        </p>
      </div>

      {/* CHOOSE SIZE */}
      <p className="text-[18px] leading-[26px] md:text-2xl md:leading-snug">
        Wähle deine Grösse
      </p>

      {/* SIZE BUTTONS */}
      <div className="flex gap-2">
        {["S", "M", "L", "XL"].map((s) => (
          <button
            key={s}
            onClick={() => setSize(s)}
            className={`border px-4 py-2 text-[18px] leading-[26px] md:text-2xl md:leading-snug transition ${
              size === s
                ? "bg-[#021695] text-white"
                : "hover:bg-[#021695] hover:text-white"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* BUY BUTTON */}
      <button
        onClick={handleBuy}
        disabled={!size}
        className={`mt-4 px-6 py-3 text-[18px] leading-[26px] md:text-2xl md:leading-snug transition ${
          size
            ? "bg-[#021695] text-white hover:brightness-110"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Bestellen
      </button>
    </div>
  );
}
