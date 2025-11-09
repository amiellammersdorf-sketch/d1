"use client";

import { useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Lottie from "lottie-react";
import animationData from "../animations/d1-logo.json";

export default function LogoButton({ onLogoTap }: { onLogoTap?: () => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const lottieRef = useRef<any>(null);

  const handlePress = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (lottieRef.current) {
      lottieRef.current.playSegments([8, 12], true);
    }
  };

  const handleRelease = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (lottieRef.current) {
      lottieRef.current.playSegments([12, 16], true);
    }

    // 🟢 Call parent’s logo tap handler (for closing sections)
    if (onLogoTap) onLogoTap();

    // Navigate after release
    setTimeout(() => {
      if (pathname !== "/") router.push("/");
    }, 400);
  };

  return (
    <button
      onMouseDown={handlePress}
      onMouseUp={handleRelease}
      onTouchStart={handlePress}
      onTouchEnd={handleRelease}
      aria-label="Home"
      className="w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] flex items-center justify-center focus:outline-none transition-opacity hover:opacity-90"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        initialSegment={[0, 8]}
        style={{ width: "100%", height: "100%" }}
      />
    </button>
  );
}
