"use client";

import Image from "next/image";
import { useState } from "react";

export default function PrintOfTheMonth() {
  const month = "april";
  const imageCount = 2;

  const images = Array.from({ length: imageCount }, (_, i) =>
    `/potm/${month}/potm_${month}_${i + 1}.jpg`
  );

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="text-[#021695] space-y-8">

      {/* TITLE */}
      <h2 className="hidden md:block text-[38px] font-bold tracking-wide">
        PRINT OF THE MONTH
      </h2>

      {/* INTRO TEXT */}
      <div className="space-y-6 text-[18px] leading-[26px] md:text-2xl md:leading-snug max-w-xl">
        <p>
          Jeden Monat ein neues Motiv – exklusiv im D1 Studio in St. Gallen gedruckt.
        </p>

        <p>
          →{" "}
          <a
            href="/potm"
            className="hover:font-bold transition-all duration-200"
          >
            Zum Print
          </a>
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT: IMAGE */}
        <div className="relative">

          <Image
            src={images[index]}
            alt="POTM"
            width={1200}
            height={1200}
            className="w-full h-auto object-cover aspect-square"
          />

          {/* ARROWS */}
          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-[24px]"
              >
                ←
              </button>

              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-[24px]"
              >
                →
              </button>
            </>
          )}
        </div>

        {/* RIGHT: TEXT */}
        <div className="space-y-6 text-[18px] leading-[26px] md:text-2xl md:leading-snug max-w-md">

          <div>
            <p>
              <strong>April Drop — Studio Tee</strong>
            </p>
            <p>CHF 45.–</p>
          </div>

          <p>
            Limitierter Siebdruck auf hochwertigem Shirt. Von Hand gedruckt im D1 Studio.
          </p>

          {/* SIZES */}
          <div className="flex gap-3 text-[16px]">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="border border-[#021695] px-3 py-1 hover:bg-[#021695] hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>

          <div className="text-[16px] space-y-1">
            <p>1–2 Farben Siebdruck</p>
            <p>Gedruckt in St. Gallen</p>
            <p>Nur diesen Monat erhältlich</p>
          </div>

          <p>
            →{" "}
            <a
              href="YOUR_STRIPE_LINK"
              target="_blank"
              className="hover:font-bold transition-all duration-200"
            >
              Jetzt bestellen
            </a>
          </p>

          <p className="text-[14px]">
            ⏳ Nur bis Ende Monat verfügbar
          </p>

        </div>
      </div>
    </div>
  );
}
