"use client";

import Gallery from "../Gallery";

export default function ArbeitskleidungCorporateWear() {
  return (
    <div className="text-[#021695] space-y-10">
      <h2 className="block text-[28px] md:text-[38px] font-bold tracking-wide">
        ARBEITSKLEIDUNG & CORPORATE WEAR
      </h2>

      <div className="space-y-6 text-[18px] leading-[26px] md:text-2xl md:leading-snug">
        <p>
          Gute Workwear ist mehr als funktional – sie stärkt den Teamspirit und
          macht eure Marke sichtbar. Bei D1 produzieren wir hochwertige Corporate
          Workwear, die langlebig ist, gut aussieht und im Alltag funktioniert.
        </p>

        <p>
          Ob T-Shirts, Hoodies, Softshelljacken, Schürzen oder individuelle
          Sonderanfertigungen: Wir gestalten und bedrucken eure Workwear direkt
          bei uns im Studio in St. Gallen.
        </p>

        <p>
          Von kleinen Auflagen bis zu grösseren Serien realisieren wir Workwear,
          die zu eurem Unternehmen passt und nach aussen überzeugt.
        </p>

        <p>
          →{" "}
          <a
            href="mailto:info@d1studio.ch"
            className="hover:font-bold transition-all"
          >
            Lasst uns zusammenarbeiten
          </a>
        </p>
      </div>

      {/* ✅ Reuse Siebdruck gallery */}
      <Gallery slug="siebdruck" />
    </div>
  );
}
