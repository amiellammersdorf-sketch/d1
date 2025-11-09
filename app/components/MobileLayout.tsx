"use client";

import { useState, useRef, useEffect } from "react";
import Siebdruck from "../components/Sections/Siebdruck";
import Workshops from "../components/Sections/Workshops";
import Events from "../components/Sections/Events";
import LivePrinting from "../components/Sections/LivePrinting";
import OffeneWerkstatt from "../components/Sections/OffeneWerkstatt";
import Kontakt from "../components/Sections/Kontakt";
import UeberUns from "../components/Sections/UeberUns";
import Faq from "../components/Sections/Faq";
import LogoButton from "../components/LogoButton";


const SECTIONS = [
  { id: "siebdruck", title: "SIEBDRUCK" },
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

const CONTENT: Record<string, React.ReactNode> = {

  siebdruck: <Siebdruck />,
  workshops: <Workshops />,
  events: <Events />,
  "live-printing": <LivePrinting />,
  "offene-werkstatt": <OffeneWerkstatt />,
  kontakt: <Kontakt />,
  "ueber-uns": <UeberUns />,
  faq: <Faq />,
  agb: (
    <div className="space-y-4 text-[#021695] text-[14px] leading-[22px]">
      <p><strong>1. Geltungsbereich</strong><br />Diese AGB gelten für alle Leistungen von <strong>D1 Print Studio</strong>, Einzelfirma von <strong>Amiel Lammersdorf</strong>, Demutstrasse 1, 9000 St. Gallen.</p>
      <p><strong>2. Leistungen</strong><br />Sorgfältige, termingerechte Ausführung. Produktionsbedingte Abweichungen (z. B. Farbtöne) sind möglich.</p>
      <p><strong>3. Preise & Zahlung</strong><br />Preise in CHF. Workshops im Voraus; Druckaufträge nach Vereinbarung.</p>
      <p><strong>4. Workshops & Buchungen</strong><br />Buchungen verbindlich. <em>Kostenlose Stornierung bis 7 Tage vor Beginn</em>; danach keine Rückerstattung.</p>
      <p><strong>5. Haftung</strong><br />Haftung nur bei Vorsatz/grober Fahrlässigkeit.</p>
      <p><strong>9. Recht & Gerichtsstand</strong><br />Schweizer Recht, Gerichtsstand St. Gallen.</p>
    </div>
  ),
  datenschutz: (
    <div className="space-y-4 text-[#021695] text-[14px] leading-[22px]">
      <p><strong>Verantwortlich</strong><br />D1 Print Studio – Amiel Lammersdorf, Demutstrasse 1, 9000 St. Gallen<br /><a href="mailto:info@d1studio.ch" className="underline">info@d1studio.ch</a></p>
      <p><strong>Daten</strong><br />Nur, soweit nötig für Auftragsabwicklung oder Anfragen.</p>
      <p><strong>Online-Buchungen</strong><br />Via Acuity Scheduling (Squarespace).</p>
      <p><strong>Cookies & Statistik</strong><br />Es können Cookies/Statistiken genutzt werden.</p>
      <p><strong>Auskunft & Löschung</strong><br />Anfragen an <a href="mailto:info@d1studio.ch" className="underline">info@d1studio.ch</a>.</p>
    </div>
  ),
  impressum: (
    <div className="space-y-4 text-[#021695] text-[14px] leading-[22px]">
      <p><strong>D1 Print Studio</strong><br />Inhaber: Amiel Lammersdorf<br />Demutstrasse 1, 9000 St. Gallen<br /><a href="mailto:info@d1studio.ch" className="underline">info@d1studio.ch</a></p>
      <p><strong>Haftungsausschluss</strong><br />Inhalte sorgfältig erstellt; keine Gewähr für Vollständigkeit.</p>
      <p><strong>Urheberrecht</strong><br />Inhalte und Bilder sind geschützt.</p>
      <p><strong>Webdesign</strong><br />by D1</p>
    </div>
  ),
};


export default function MobileLayout() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="md:hidden border-[3px] border-[#021695] text-[#021695] font-akkurat h-screen flex flex-col overflow-hidden">
      {/* Fixed logo header */}
      <div
        id="logo-bar"
        className="border-b-[3px] border-[#021695] pl-0 flex items-center justify-start bg-white sticky top-0 z-50"
      >
        <div className="ml-2 scale-90">
          <LogoButton
            onLogoTap={() => {
              setOpenSection(null);
              scrollContainerRef.current?.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        </div>
      </div>

      {/* Scrollable accordion */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto pb-[50vh]">
        {SECTIONS.map((section, index) => (
          <AccordionItem
            key={section.id}
            title={section.title}
            id={section.id}
            isOpen={openSection === section.id}
            onToggle={() => toggleSection(section.id)}
            index={index}
            scrollContainerRef={scrollContainerRef}
          >
            {CONTENT[section.id] || null}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}

function AccordionItem({
  id,
  title,
  isOpen,
  onToggle,
  children,
  index,
  scrollContainerRef,
}: {
  id: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  index: number;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const TARGET_Y = 136; // 👈 your perfect alignment spot

  const scrollToFixedPosition = () => {
    const container = scrollContainerRef.current;
    const section = sectionRef.current;
    if (!container || !section) return;

    // simple, reliable offset-based scroll
    const sectionTop = section.offsetTop - TARGET_Y;
    container.scrollTo({ top: sectionTop, behavior: "smooth" });
  };

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isOpen) {
      // expand animation
      el.style.transition = "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)";
      el.style.height = el.scrollHeight + "px";

      // 🟢 trigger scroll just after the height starts animating (so they move together)
      if (id !== "siebdruck") {
        requestAnimationFrame(() => scrollToFixedPosition());
      }
    } else {
      // collapse animation
      const fullHeight = el.scrollHeight + "px";
      el.style.height = fullHeight;
      el.style.transition = "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)";
      requestAnimationFrame(() => {
        el.style.height = "0px";
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={sectionRef}
      data-section-index={index}
      className="border-b-[3px] border-[#021695] bg-white"
    >
      <button
        onClick={onToggle}
        className={`w-full text-left text-[38px] leading-tight font-normal px-4 py-3 transition-all ${
          isOpen ? "font-bold" : "hover:font-bold"
        }`}
      >
        {title}
      </button>

      <div ref={contentRef} className="overflow-hidden px-4">
  <div className="pt-2 pb-8 text-[12px] leading-[24px]">{children}</div>
</div>
    </div>
  );
}


