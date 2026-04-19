"use client";

import { useState } from "react";
import Siebdruck from "../components/Sections/Siebdruck";
import PrintOfTheMonth from "../components/Sections/PrintOfTheMonth";
import ArbeitskleidungCorporateWear from "../components/Sections/ArbeitskleidungCorporateWear";
import Workshops from "../components/Sections/Workshops";
import Events from "../components/Sections/Events";
import LivePrinting from "../components/Sections/LivePrinting";
import OffeneWerkstatt from "../components/Sections/OffeneWerkstatt";
import Kontakt from "../components/Sections/Kontakt";
import UeberUns from "../components/Sections/UeberUns";
import Faq from "../components/Sections/Faq";
import LogoButton from "../components/LogoButton";

// 🔁 TOGGLE POTM VISIBILITY
const SHOW_POTM = false;

/* ---------------- SECTIONS (menu) ---------------- */

const SECTIONS = [
  { id: "siebdruck", title: "SIEBDRUCK" },

  ...(SHOW_POTM
    ? [{ id: "potm", title: "PRINT OF THE MONTH" }]
    : []),

  { id: "arbeitskleidung-workwear", title: "ARBEITSKLEIDUNG & WORKWEAR" },
  { id: "workshops", title: "WORKSHOPS" },
  { id: "events", title: "EVENTS" },
  { id: "live-printing", title: "LIVE PRINTING" },
  { id: "offene-werkstatt", title: "OFFENE WERKSTATT" },
  { id: "kontakt", title: "KONTAKT" },
  { id: "ueber-uns", title: "ÜBER UNS" },
  { id: "faq", title: "FAQ" },
  { id: "agb", title: "AGB" },
  { id: "datenschutz", title: "DATENSCHUTZ" },
  { id: "impressum", title: "IMPRESSUM" },
];

/* ---------------- CONTENT (rendered sections) ---------------- */

const CONTENT: Record<string, React.ReactNode> = {
  siebdruck: <Siebdruck />,

  ...(SHOW_POTM ? { potm: <PrintOfTheMonth /> } : {}),

  "arbeitskleidung-workwear": <ArbeitskleidungCorporateWear />,
  workshops: <Workshops />,
  events: <Events />,
  "live-printing": <LivePrinting />,
  "offene-werkstatt": <OffeneWerkstatt />,
  kontakt: <Kontakt />,
  "ueber-uns": <UeberUns />,
  faq: <Faq />,

  agb: (
    <div className="space-y-4 text-[#021695] text-[14px] leading-[22px]">
      <p>
        <strong>1. Geltungsbereich</strong><br />
        Diese AGB gelten für alle Leistungen von <strong>D1 Print Studio</strong>,
        Einzelfirma von <strong>Amiel Lammersdorf</strong>, Demutstrasse 1, 9000 St. Gallen.
      </p>
      <p>
        <strong>2. Leistungen</strong><br />
        Sorgfältige, termingerechte Ausführung. Produktionsbedingte Abweichungen sind möglich.
      </p>
      <p>
        <strong>3. Preise & Zahlung</strong><br />
        Preise in CHF. Workshops im Voraus; Druckaufträge nach Vereinbarung.
      </p>
      <p>
        <strong>4. Workshops & Buchungen</strong><br />
        Kostenlose Stornierung bis 7 Tage vor Beginn; danach keine Rückerstattung.
      </p>
      <p>
        <strong>5. Haftung</strong><br />
        Haftung nur bei Vorsatz oder grober Fahrlässigkeit.
      </p>
    </div>
  ),

  datenschutz: (
    <div className="space-y-4 text-[#021695] text-[14px] leading-[22px]">
      <p>
        <strong>Verantwortlich</strong><br />
        D1 Print Studio – Amiel Lammersdorf<br />
        <a href="mailto:info@d1studio.ch" className="underline">
          info@d1studio.ch
        </a>
      </p>
      <p>
        <strong>Daten</strong><br />
        Nur soweit nötig für Auftragsabwicklung oder Anfragen.
      </p>
    </div>
  ),

  impressum: (
    <div className="space-y-4 text-[#021695] text-[14px] leading-[22px]">
      <p>
        <strong>D1 Print Studio</strong><br />
        Inhaber: Amiel Lammersdorf<br />
        Demutstrasse 1, 9000 St. Gallen
      </p>
    </div>
  ),
};

// 🔒 Safety: ensure POTM never renders if disabled
if (!SHOW_POTM) {
  delete CONTENT["potm"];
}

/* ---------------- COMPONENT ---------------- */

export default function MobileLayout() {
  const [activeSection, setActiveSection] = useState(
    SECTIONS[0]?.id || "siebdruck"
  );

  return (
    <div className="w-full">

      {/* LOGO */}
      <LogoButton onLogoTap={() => setActiveSection("siebdruck")} />

      {/* MENU */}
      <div className="flex flex-wrap gap-2 p-4">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`text-[14px] ${
              activeSection === section.id ? "font-bold" : ""
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="p-4">
        {CONTENT[activeSection] || <div>Section not found</div>}
      </div>
    </div>
  );
}
