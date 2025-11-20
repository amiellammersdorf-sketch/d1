"use client";

export default function OffeneWerkstatt() {
  return (
    <div className="space-y-4 text-[#021695]">
      {/* 👇 Title hidden on mobile, visible on desktop */}
      <h2 className="hidden md:block text-[26px] md:text-[38px] font-bold tracking-wide">
        OFFENE WERKSTATT
      </h2>

      <p className="text-[18px] leading-[26px] md:text-2xl md:leading-snug">
        Willst du deine nächste T-Shirt-Kollektion selber drucken?
      </p>

      <p className="text-[18px] leading-[26px] md:text-2xl md:leading-snug">
        Mit deiner D1 PrintCard erhältst du Zugang zu unserem voll
        ausgestatteten Siebdruckatelier. Nach einem Einführungskurs kannst Du mit
        der Karte stundenweise Maschinen nutzen – ganz flexibel, wie mit einer
        Zehnerkarte für den ÖV.
      </p>

      <p className="text-[18px] leading-[26px] md:text-2xl md:leading-snug">
        →{" "}
        <a
          href="https://buy.stripe.com/eVq4gB9gv1gzd490DF4Vy00"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:font-bold text-[#021695] transition-all duration-200"
        >
          D1 PrintCard bestellen
        </a>
      </p>
    </div>
  );
}
