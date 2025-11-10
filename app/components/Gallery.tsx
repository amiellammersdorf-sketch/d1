"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

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
};

export default function Gallery({
  section,
  count = 3,
  alts = [],
  className = "",
}: GalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  // calculate dynamic height (equal to gallery width)
  useEffect(() => {
    const updateHeight = () => {
      const track = trackRef.current;
      const scroll = scrollRef.current;
      if (!track || !scroll) return;
      const totalWidth = track.scrollWidth;
      const viewportHeight = window.innerHeight;
      const height = totalWidth - window.innerWidth + viewportHeight;
      setScrollHeight(height);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [section, count]);

  // move horizontally while scrolling vertically
  useEffect(() => {
    const scroll = scrollRef.current;
    const track = trackRef.current;
    if (!scroll || !track) return;

    const handleScroll = () => {
      const rect = scroll.getBoundingClientRect();
      const start = rect.top * -1;
      const max = scroll.offsetHeight - window.innerHeight;
      const progress = Math.min(Math.max(start / max, 0), 1);
      track.style.transform = `translateX(-${progress * (track.scrollWidth - window.innerWidth)}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images = Array.from(
    { length: count },
    (_, i) => `/galleries/${section}/img_${i + 1}.jpg`
  );

  return (
    <section
      ref={scrollRef}
      style={{ height: `${scrollHeight}px` }}
      className={`relative w-full overflow-hidden bg-white ${className}`}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div
          ref={trackRef}
          className="flex will-change-transform transition-transform duration-75 ease-linear"
        >
          {images.map((src, i) => (
            <div
              key={src}
              className={`relative flex-shrink-0 h-screen border-r-[6px] border-[#021695]`}
            >
              <Image
                src={src}
                alt={alts[i] ?? `${section} ${i + 1}`}
                width={2400}
                height={1200}
                className="h-full w-auto object-contain select-none"
                unoptimized
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
