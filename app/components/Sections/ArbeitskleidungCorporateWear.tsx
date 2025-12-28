"use client";

import Gallery from "../Gallery";

export default function ArbeitskleidungCorporateWear() {
  return (
    <div className="text-[#021695] space-y-10">
      <h2 className="hidden md:block text-[38px] font-bold tracking-wide">
  ARBEITSKLEIDUNG & CORPORATE WEAR
</h2>

      <div className="space-y-6 text-[18px] leading-[26px] md:text-2xl md:leading-snug">
        <p>
          Funktionale und konsistente Arbeitskleidung ist ein wichtiger Bestandteil eines
          professionellen Unternehmensauftritts. Sie sorgt für Wiedererkennbarkeit, 
          unterstützt den Arbeitsalltag und gewährleistet ein einheitliches Erscheinungsbild 
          über Teams und Einsätze hinweg.
        </p>

        <p>
          Bei D1 bedrucken wir Arbeits- und Corporate Wear für Unternehmen, Vereine und 
          Organisationen. Wir arbeiten mit bewährten Textilien und setzen Logos, 
          Schriftzüge und Grafiken präzise und langlebig um – geeignet für den 
          täglichen Einsatz und häufiges Waschen.
        </p>

        <p>
          Durch die lokale Umsetzung in St. Gallen sind kurze Reaktionszeiten, 
          flexible Nachbestellungen und eine schnelle Abwicklung möglich – 
          auch bei zeitkritischen Projekten oder kleineren Serien.
        </p>

        <p>
          →{" "}
          <a
            href="mailto:info@d1studio.ch"
            className="hover:font-bold transition-all"
          >
            Kontakt aufnehmen
          </a>
        </p>
      </div>

      {/* ✅ Correct prop */}
      <Gallery section="siebdruck" />
    </div>
  );
}
