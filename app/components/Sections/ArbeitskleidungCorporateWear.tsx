"use client";

export default function ArbeitskleidungCorporateWear() {
  return (
    <div className="text-[#021695] space-y-10">
      {/* Section title */}
      <h2 className="hidden md:block text-[38px] font-bold tracking-wide">
        ARBEITSKLEIDUNG & CORPORATE WEAR
      </h2>

      {/* Text content */}
      <div className="space-y-6 text-[18px] leading-[26px] md:text-2xl md:leading-snug relative z-10">
        <p>
          Gute Workwear ist mehr als funktional – sie stärkt den Teamspirit und
          macht eure Marke sichtbar. Bei D1 produzieren wir hochwertige Corporate
          Workwear, die langlebig ist, gut aussieht und im Alltag funktioniert.
        </p>

        <p>
          Ob T-Shirts, Hoodies, Softshelljacken, Schürzen oder individuelle
          Sonderanfertigungen: Wir gestalten und bedrucken eure Workwear direkt
          bei uns im Studio in St. Gallen. Dank lokaler Produktion sind kurze Wege
          und schnelle Lieferzeiten möglich – auch bei kurzfristigen Projekten.
        </p>

        <p>
          Von kleinen Auflagen bis zu grösseren Serien realisieren wir Workwear,
          die zu eurem Unternehmen passt und nach aussen überzeugt.
        </p>

        <p>
          →{" "}
          <a
            href="mailto:info@d1studio.ch"
            className="hover:font-bold text-[#021695] transition-all duration-200"
          >
            Lasst uns zusammenarbeiten
          </a>
        </p>
      </div>
    </div>
  );
}
