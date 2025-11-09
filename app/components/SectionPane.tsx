// app/components/SectionPane.tsx
"use client";

import Gallery from "./Gallery";
import React from "react";
import Faq from "./Sections/Faq";
import Siebdruck from "./Sections/Siebdruck";
import Workshops from "./Sections/Workshops";
import Events from "./Sections/Events";
import LivePrinting from "./Sections/LivePrinting";
import OffeneWerkstatt from "./Sections/OffeneWerkstatt";
import Kontakt from "./Sections/Kontakt";
import UeberUns from "./Sections/UeberUns";

const SECTION_TO_GALLERY: Record<string, string> = {
  siebdruck: "siebdruck",
  workshops: "workshops",
  events: "events",
  "live-printing": "liveprinting",  // ✅ correct one
  "offene-werkstatt": "offene",
  kontakt: "kontakt",
  "ueber-uns": "about",
  faq: "faq",
};
const gallerySlugFor = (id: string) => SECTION_TO_GALLERY[id] ?? id;

const COMPONENTS: Record<string, React.ComponentType> = {
  faq: Faq,
  siebdruck: Siebdruck,
  workshops: Workshops,
  events: Events,
  "live-printing": LivePrinting, // ✅ make sure no quotes here
  "offene-werkstatt": OffeneWerkstatt,
  kontakt: Kontakt,
  "ueber-uns": UeberUns,
};


    

export default function SectionPane({ activeId }: { activeId: string }) {
  const Active = COMPONENTS[activeId];
  if (!Active) {
    return <div className="p-6 text-xl text-[#021695]">Wähle links eine Sektion.</div>;
  }

  // Define which sections should be wider
const isFAQ = activeId === "faq" || activeId === "faq2";
const isMediumWide =
  activeId === "siebdruck" ||
  activeId === "events" ||
  activeId === "live-printing" ||
  activeId === "offene-werkstatt" ||
  activeId === "kontakt" ||
  activeId === "ueber-uns" ||
  activeId === "workshops";

// Apply different widths based on section
let widthClass = "max-w-[56ch] md:max-w-[56ch]";
if (isFAQ) widthClass = "max-w-[90ch] md:max-w-[90ch]";
else if (isMediumWide) widthClass = "max-w-[80ch] md:max-w-[80ch]";


  return (
    <div className="p-6">
      <div className={widthClass}>
        <Active />
      </div>
    </div>
  );
}