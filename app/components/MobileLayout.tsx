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

/* ---------------- GALLERY MAP ---------------- */

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

const getGalleryImages = (section: string) => {
  const slug = SECTION_TO_GALLERY[section] || section;

  const count =
    slug === "siebdruck" ? 4 :
    slug === "about" ? 4 :
    slug === "faq" ? 4 :
    slug === "workshops" ? 4 :
    3;

  return Array.from({ length: count }, (_, i) => `/${slug}/${i + 1}.jpg`);
};

/* ---------------- MAIN ---------------- */

export default function MobileLayout() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? null : id));
  };

  const images = openSection ? getGalleryImages(openSection) : [];

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
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
        {SECTIONS.map((section, index) => (
          <AccordionItem
            key={section.id}
            id={section.id}
            title={section.title}
            isOpen={openSection === section.id}
            onToggle={() => toggleSection(section.id)}
            index={index}
            scrollContainerRef={scrollContainerRef}
          >
            {CONTENT[section.id] ?? null}
          </AccordionItem>
        ))}
      </div>

      {/* 🔥 MOBILE GALLERY */}
      {images.length > 0 && (
        <div className="border-t-[3px] border-[#021695] bg-white py-3">
          <div className="flex gap-3 px-4 overflow-x-auto snap-x snap-mandatory">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-[70%] max-w-[280px] aspect-square object-cover flex-shrink-0 snap-start"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- ACCORDION ---------------- */

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
  index: number;
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
    } else {
      el.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <div ref={sectionRef} className="border-b-[3px] border-[#021695] bg-white">
      <button
        onClick={onToggle}
        className={`w-full text-left text-[32px] leading-[1.2] px-4 py-5 ${
          isOpen ? "font-bold" : "hover:font-bold"
        }`}
      >
        {title}
      </button>

      <div ref={contentRef} className="overflow-hidden px-4">
        <div className="pt-2 pb-6 text-[14px] leading-[22px]">
          {children}
        </div>
      </div>
    </div>
  );
}
