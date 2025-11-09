"use client";

import Gallery from "../Gallery"; // correct path

export default function Siebdruck() {
  return (
    <div className="text-[#021695] space-y-10">
      {/* Title */}
      <h2 className="hidden md:block text-[38px] font-bold tracking-wide">
        SIEBDRUCK
      </h2>

      

      {/* Text */}
      <div className="space-y-6 text-[18px] leading-[26px] md:text-2xl md:leading-snug relative z-10">
        <p>
          Bei D1 dreht sich alles um Siebdruck – von Einzelstücken bis zu
          Kleinauflagen. Wir drucken für dich auf Textilien, Papier oder andere
          Materialien – mit grosser Sorgfalt, hochwertigen Farben und viel
          Erfahrung. Ob Vereins-Shirts, Kunstdrucke oder Merch für dein Projekt –
          wir helfen dir, dein Motiv perfekt umzusetzen.
        </p>

        <p>
          →{" "}
          <a
            href="mailto:info@d1studio.ch"
            className="hover:font-bold text-[#021695] transition-all duration-200"
          >
            Du hast schon ein fertiges Design? Super!
          </a>
        </p>

        <p>
          →{" "}
          <a
            href="mailto:info@d1studio.ch"
            className="hover:font-bold text-[#021695] transition-all duration-200"
          >
            Du brauchst Unterstützung bei der Gestaltung? Auch das übernehmen wir
            gerne.
          </a>
        </p>
      </div>
    </div>
  );
}
