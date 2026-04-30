"use client";

import { useState, useRef, useEffect } from "react";
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
import LogoButton from "./LogoButton";
import Gallery from "./Gallery"; // ✅ ADD

/* ---------------- GALLERY MAPPING ---------------- */

const SECTION_TO_GALLERY: Record<string, string> = {
  siebdruck: "siebdruck",
  potm: "siebdruck",
  "arbeitskleidung-workwear": "siebdruck",
  workshops: "workshops",
  events: "events",
  "live-printing": "liveprinting",
  "offene-werkstatt": "offene",
  kontakt: "kontakt",
  "ueber-uns": "about",
  faq: "faq",
};

const gallerySlugFor = (id: string) => SECTION_TO_GALLERY[id] ?? id;

/* ---------------- SECTIONS ---------------- */

const SECTIONS = [
  { id: "siebdruck", title: "SIEBDRUCK" },
  { id: "arbeitskleidung-workwear", title: "ARBEITSKLEIDUNG & WORKWEAR" },
  { id: "workshops", title: "WORKSHOPS" },
  { id: "events", title: "EVENTS" },
  { id: "live-printing", title: "LIVE PRINTING" },
  { id: "potm", title: "PRINT DES MONATS" },
  { id: "offene-werkstatt", title: "OFFENE WERKSTATT" },
  { id: "kontakt", title: "KONTAKT" },
  { id: "ueber-uns", title: "ÜBER UNS" },
  { id: "faq", title: "FAQ" },
  { id: "agb", title: "AGB" },
  { id: "datenschutz", title: "DATENSCHUTZ" },
  { id: "impressum", title: "IMPRESSUM" },
];

/* ---------------- CONTENT ---------------- */

const CONTENT: Record<string, React.ReactNode> = {
  siebdruck: <Siebdruck />,
  potm: <PrintOfTheMonth />,
  "arbeitskleidung-workwear": <ArbeitskleidungCorporateWear />,
  workshops: <Workshops />,
  events: <Events />,
  "live-printing": <LivePrinting />,
  "offene-werkstatt": <OffeneWerkstatt />,
  kontakt: <Kontakt />,
  "ueber-uns": <UeberUns />,
  faq: <Faq />,
};

/* ---------------- MAIN ---------------- */

export default function MobileLayout() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  return (
    <div className="md:hidden border-[3px] border-[#021695] text-[#021695] font-akkurat h-screen flex flex-col overflow-hidden">
      {/* Logo */}
      <div className="border-b-[3px] border-[#021695] bg-white sticky top-0 z-50">
        <div className="ml-2 scale-90">
          <LogoButton
            onLogoTap={() => {
              setOpenSection(null);
              scrollContainerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      </div>

      {/* Accordion */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto pb-[50vh]">
        {SECTIONS.map((section, index) => (
          <AccordionItem
            key={section.id}
            id={section.id}
            title={section.title}
            isOpen={openSection === section.id}
            onToggle={() => toggleSection(section.id)}
            scrollContainerRef={scrollContainerRef}
          >
            {CONTENT[section.id] ?? null}

            {/* ✅ GALLERY */}
            <div className="mt-6 w-full h-[60vw] max-h-[420px] overflow-hidden">
              <Gallery
                section={gallerySlugFor(section.id)}
                count={
                  gallerySlugFor(section.id) === "siebdruck" ? 4 :
                  gallerySlugFor(section.id) === "about" ? 4 :
                  gallerySlugFor(section.id) === "faq" ? 4 :
                  gallerySlugFor(section.id) === "workshops" ? 4 : 3
                }
                className="w-full h-full"
              />
            </div>

          </AccordionItem>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ACCORDION ITEM ---------------- */

function AccordionItem({
  id,
  title,
  isOpen,
  onToggle,
  children,
  scrollContainerRef,
}: {
  id: string;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  scrollContainerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const TARGET_Y = 136;

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (isOpen) {
      el.style.height = el.scrollHeight + "px";

      if (id !== "siebdruck") {
        requestAnimationFrame(() => {
          const container = scrollContainerRef.current;
          const section = sectionRef.current;

          if (container && section) {
            container.scrollTo({
              top: section.offsetTop - TARGET_Y,
              behavior: "smooth",
            });
          }
        });
      }
    } else {
      el.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <div ref={sectionRef} className="border-b-[3px] border-[#021695] bg-white">
      <button
        onClick={onToggle}
        className={`w-full text-left text-[38px] leading-[1.15] px-4 py-5 ${
          isOpen ? "font-bold" : "hover:font-bold"
        }`}
      >
        {title}
      </button>

      <div ref={contentRef} className="overflow-hidden px-4">
        <div className="pt-2 pb-8 text-[12px] leading-[24px] space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
