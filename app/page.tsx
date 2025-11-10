// app/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import Menu from "./components/Menu";
import SectionPane from "./components/SectionPane";
import { SECTIONS } from "./data/sections";
import LegalAccordion from "./components/LegalAccordion";
import Gallery from "./components/Gallery";
import MobileLayout from "./components/MobileLayout";
import animationData from "../animations/d1-logo.json";
import LogoButton from "./components/LogoButton";






const SECTION_TO_GALLERY: Record<string, string> = {
  siebdruck: "siebdruck",
  workshops: "workshops",
  events: "events",
  "live-printing": "liveprinting",   // ✅ wrapped in quotes
  "offene-werkstatt": "offene",
  kontakt: "kontakt",
  "ueber-uns": "about",
  faq: "faq",
};


const gallerySlugFor = (id: string) => SECTION_TO_GALLERY[id] ?? id;

export default function Page() {
  const [activeId, setActiveId] = useState(SECTIONS[0]?.id ?? "");

  return (
  <>
    {/* Desktop layout */}
    <main
  className="hidden md:block min-h-screen box-border bg-white text-brand border-[6px] border-brand"
  style={{ ["--gallery-h" as any]: "25vh" }}
>

      {/* Two columns */}
      <div
        className="
          grid md:grid-cols-[40%_auto]
          items-stretch
          h-[calc(100vh-var(--gallery-h))]
          min-h-0 overflow-hidden
          box-border
        "
      >
        {/* LEFT column */}
        <aside className="flex flex-col border-r-[6px] border-brand min-h-0">
          {/* Logo frame */}
          <div className="border-b-[6px] border-brand px-6 py-4 flex items-center">
            <div
  onClick={() => {
    if (activeId === "siebdruck") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setActiveId("siebdruck");
    }
  }}
  className="cursor-pointer transition-all"
  aria-label="Zurück zu Siebdruck (Startseite)"
>
  <div className="-ml-[-18px]">
    <LogoButton />
  </div>
</div>

          </div>

          {/* Menu frame */}
          <div className="flex-1 p-6 overflow-y-auto">
            <Menu activeId={activeId} onSelect={setActiveId} />
          </div>
        </aside>

        {/* RIGHT column */}
        <section className="flex flex-col min-h-0 relative">
          {activeId !== "kontakt" && activeId !== "faq" && (
            <div className="fixed top-12 right-6 flex items-center justify-end gap-4 p-6 z-50">
              <a
                href="mailto:info@d1studio.ch"
                aria-label="Email"
                className="hover:opacity-70 transition-opacity"
              >
                <Image
                  src="/icons/icon_Mail_4px.svg"
                  alt="Mail"
                  width={60}
                  height={40}
                  className="block w-[60px] h-10"
                />
              </a>
              <a
                href="https://www.instagram.com/d1_print_studio"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity"
              >
                <Image
                  src="/icons/icon_IG_4px.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="block w-10 h-10"
                />
              </a>
            </div>
          )}

          <div className="relative flex-1 overflow-y-auto min-h-0">
            <div
              id="animation-layer"
              className="pointer-events-none absolute inset-x-0 top-0 h-[120px] bg-transparent z-10"
            />
            <div className="p-6">
              <SectionPane activeId={activeId} />
            </div>
          </div>
        </section>
      </div>

      {/* Full-width gallery strip with floating LegalAccordion */}
<section className="relative box-border border-t-[6px] border-brand">
  {/* 🖼️ Gallery content — full height responsive */}
  <div className="overflow-hidden">
    <Gallery
  section={gallerySlugFor(activeId)}
  count={gallerySlugFor(activeId) === "siebdruck" ? 4 :
    gallerySlugFor(activeId) === "about" ? 4 :
gallerySlugFor(activeId) === "faq" ? 4 :
    gallerySlugFor(activeId) === "workshops" ? 4 : 3} // 👈 custom count for Siebdruck
  className="w-full h-auto"
  
/>

  </div>

  {/* 🧾 Floating Legal links overlay (no borders) */}
  <div className="absolute bottom-0 left-0 w-full z-40 flex justify-center bg-transparent pb-4">
    <LegalAccordion />
  </div>
</section>


    </main>

    {/* Mobile layout */}
    <div className="block md:hidden" suppressHydrationWarning>
      <MobileLayout />
    </div>
  </>
);

}
