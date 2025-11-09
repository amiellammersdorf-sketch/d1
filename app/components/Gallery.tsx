"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

type GalleryProps = {
  section:
    | "siebdruck"
    | "workshops"
    | "events"
    | "liveprinting"
    | "offene"
    | "kontakt"
    | "about"
    | "faq"
    | (string & {});
  count?: number;
  alts?: string[];
  className?: string;
  framed?: boolean; // ✅ add this line
  aspectPercent?: string; // ✅ added
  intervalMs?: number;    // ✅ added
};


export default function Gallery({
  section,
  count = 3,
  alts = [],
  className = "",
  framed = false, // ✅ added line
}: GalleryProps) {

  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [dragging, setDragging] = useState(false);

  const images = useMemo(
    () =>
      Array.from(
        { length: count },
        (_, i) => `/galleries/${section}/img_${i + 1}.jpg`
      ),
    [section, count]
  );

  // --- drag to scroll ---
  const onMouseDown = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    isDragging.current = true;
    setDragging(true);
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el || !isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - startX.current;
    el.scrollLeft = scrollLeft.current - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
    setDragging(false);
  };

  // --- click to jump one image ---
  const onClick = (e: React.MouseEvent) => {
    if (dragging) return; // ignore clicks after drag
    const el = containerRef.current;
    if (!el) return;

    const images = el.querySelectorAll("img");
    const imgWidths = Array.from(images).map((img) => img.clientWidth + 6);
    const totalWidth = imgWidths.reduce((a, b) => a + b, 0);

    // find current index
    const currentScroll = el.scrollLeft;
    let currentIndex = 0;
    let accumulated = 0;
    for (let i = 0; i < imgWidths.length; i++) {
      accumulated += imgWidths[i];
      if (accumulated > currentScroll + 10) {
        currentIndex = i;
        break;
      }
    }

    // move one image forward
    let nextScroll = 0;
    for (let i = 0; i <= currentIndex; i++) nextScroll += imgWidths[i];
    if (nextScroll >= totalWidth - el.clientWidth) nextScroll = 0;

    el.scrollTo({ left: nextScroll, behavior: "smooth" });
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-x-auto overflow-y-hidden flex justify-start bg-white cursor-grab ${className}`}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
      onClick={onClick}
    >
      <div className="flex items-center h-[600px] md:h-[800px] lg:h-[1200px] select-none">
        {images.map((src, i) => (
          <div
            key={src}
            className={`relative flex-shrink-0 h-full ${
              i !== images.length - 1 ? "border-r-[6px] border-[#021695]" : ""
            }`}
          >
            <Image
              src={src}
              alt={alts[i] ?? `${section} ${i + 1}`}
              width={2400}
              height={1200}
              className="h-full w-auto object-contain"
              priority={i === 0}
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
