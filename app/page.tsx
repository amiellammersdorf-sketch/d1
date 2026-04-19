"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import SectionPane from "./components/SectionPane";
import { SECTIONS } from "./data/sections";
import LegalAccordion from "./components/LegalAccordion";
import Gallery from "./components/Gallery";
import MobileLayout from "./components/MobileLayout";
import LogoButton from "./components/LogoButton";

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

export default function Page() {
  const [activeId, setActiveId] = useState(SECTIONS[0]?.id ?? "");

  // ✅ CLEAN HASH HANDLING (supports hidden sections like potm)
  useEffect(() => {
    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");

      if (!hash) return;

      if (
        SECTIONS.some(section => section.id === hash) ||
        hash === "potm"
      ) {
        setActiveId(hash);
      }
    };

    // run once on load
    updateFromHash();

    // listen for changes
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, []);

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
            {/* Logo */}
            <div className="border-b-[6px] border-brand px-6 py-4 flex items-center">
              <div
                onClick={() => {
                  if (activeId === "siebdruck") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    setActiveId("siebdruck");
                    window.history.pushState(null, "", "#siebdruck");
                  }
                }}
                className="cursor-pointer"
              >
                <div className="-ml-[-18px]">
                  <LogoButton />
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="flex-1 p-6 overflow-y-auto">
              <Menu activeId={activeId} onSelect={setActiveId} />
            </div>
          </aside>

          {/* RIGHT column */}
          <section className="flex flex-col min-h-0 relative">
            {activeId !== "kontakt" && activeId !== "faq" && (
              <div className="fixed top-12 right-6 flex items-center gap-4 z-50">
                <a href="mailto:info@d1studio.ch">
                  <Image
                    src="/icons/icon_Mail_4px.svg"
                    alt="Mail"
                    width={60}
                    height={40}
                  />
                </a>
                <a
                  href="https://www.instagram.com/d1_print_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/icon_IG_4px.svg"
                    alt="Instagram"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
            )}

            <div className="flex-1 overflow-y-auto">
              <div className="p-6">
                <SectionPane activeId={activeId} />
              </div>
            </div>
          </section>
        </div>

        {/* Gallery */}
        <div className="relative w-full h-screen overflow-hidden border-t-[6px] border-brand">
          <Gallery
            section={gallerySlugFor(activeId)}
            count={
              gallerySlugFor(activeId) === "siebdruck" ? 4 :
              gallerySlugFor(activeId) === "about" ? 4 :
              gallerySlugFor(activeId) === "faq" ? 4 :
              gallerySlugFor(activeId) === "workshops" ? 4 : 3
            }
            className="w-full h-full"
          />

          <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4">
            <LegalAccordion />
          </div>
        </div>
      </main>

      {/* Mobile */}
      <div className="block md:hidden">
        <MobileLayout />
      </div>
    </>
  );
}
