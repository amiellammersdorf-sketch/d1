"use client";

import { useState } from "react";

const images = [
  "/potm/mai/potm_mai_1.jpg",
  "/potm/mai/potm_mai_2.jpg",
  "/potm/mai/potm_mai_3.jpg",
  "/potm/mai/potm_mai_4.jpg",
];

const STRIPE_LINKS: Record<string, string> = {
  S: "https://buy.stripe.com/cNi8wR0JZgbtd498674Vy08",
  M: "https://buy.stripe.com/cNi7sNfET5wPfchaef4Vy09",
  L: "https://buy.stripe.com/8x24gBfET3oHe8d4TV4Vy07",
  XL: "https://buy.stripe.com/bJedRbdwL7EXaW17234Vy0a",
};

export default function PrintOfTheMonth() {
  const [index, setIndex] = useState(0);
  const [size, setSize] = useState<string | null>(null);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  const handleBuy = () => {
    if (!size) return;
    const link = STRIPE_LINKS[size];
    window.open(link, "_blank", "noopener,noreferrer");
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
          <strong>“Some are hot and some are not”</strong><br />
          T-Shirt<br />
          CHF 45.–
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
          Inspiriert von Pimientos de Padrón – kleinen grünen Paprikaschoten aus Galicien, bei denen man nie weiss, welche scharf ist.
        </p>

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

        <p>
          2-farbiger Siebdruck, vorne und hinten bedruckt.
        </p>

        <p>
          Von Hand gedruckt im D1 auf hochwertigen Stanley/Stella Sparker 2.0 – ein schweres, robustes Shirt mit moderner Passform aus Bio-Baumwolle.
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
        className={`mt-4 px-6 py-3 text-[16px] transition ${
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
