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
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Pause auto-loop animation while dragging
  useEffect(() => {
    if (!trackRef.current) return;
    trackRef.current.style.animationPlayState = isDragging ? "paused" : "running";
  }, [isDragging]);

  // Mouse drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  // Mouse drag move
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.clientX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch drag
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].clientX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => setIsDragging(false);

  // Build image list
  const images = Array.from(
    { length: count },
    (_, i) => `/galleries/${section}/img_${i + 1}.jpg`
  );

  // duplicate images for smooth infinite loop
  const looped = [...images, ...images];

  return (
    <div className={`relative w-full h-full overflow-hidden bg-white ${className}`}>
      {/* DRAG CONTAINER */}
      <div
        ref={containerRef}
        className="absolute top-0 left-0 w-full h-full overflow-x-scroll overflow-y-hidden scrollbar-hide"
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* AUTO-SCROLLING TRACK */}
        <div
          ref={trackRef}
          className="flex animate-gallery-loop"
          style={{ width: `${looped.length * 100}vw` }}
        >
          {looped.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 h-full border-r-[6px] border-[#021695]"
            >
              <Image
                src={src}
                alt={alts[i % images.length] ?? `${section} ${i + 1}`}
                width={2400}
                height={1200}
                className="h-full w-auto object-contain select-none pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
