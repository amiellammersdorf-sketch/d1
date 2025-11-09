"use client";

import { useState, useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

export default function Kontakt() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const D1 = { lat: 47.417908, lng: 9.381269 };

  const mapStyle = [
    { elementType: "geometry", stylers: [{ color: "#ffffff" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#021695" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#021695" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#021695" }] },
    { featureType: "poi", stylers: [{ visibility: "off" }] },
    { featureType: "transit", stylers: [{ visibility: "off" }] },
  ];

  const markerIcon = {
    url:
      "data:image/svg+xml;utf8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48">
          <path stroke="#ffffff" stroke-width="1" fill="#021695" 
            d="M24 3c-8.3 0-15 6.6-15 14.8 0 9.9 13.5 25 14.1 25.6.5.5 1.3.5 1.8 0 .6-.6 14.1-15.7 14.1-25.6C39 9.6 32.3 3 24 3z"/>
          <circle cx="24" cy="18" r="6.5" fill="#ffffff" stroke="#ffffff" stroke-width="1"/>
        </svg>
      `),
    scaledSize: { width: 40, height: 40 } as google.maps.Size,
    anchor: { x: 20, y: 38 } as google.maps.Point,
  };

  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const confirmationRef = useRef<HTMLDivElement | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setStatus("idle");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const FORM_ENDPOINT = "https://formspree.io/f/xpwylqkz";
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    } finally {
      setSubmitting(false);
    }
  }

  // 🟦 Scroll confirmation into view when status === "ok"
  useEffect(() => {
    if (status === "ok" && confirmationRef.current) {
      confirmationRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [status]);

  return (
    <div className="space-y-8 text-[#021695] text-[18px] leading-[26px] md:text-2xl md:leading-snug">
      <h2 className="hidden md:block text-[38px] font-bold tracking-wide">Kontakt</h2>

      <p>
        D1 Print Studio<br />
        Demutstrasse 1, 9000 St. Gallen
      </p>

      {/* Map */}
      {isLoaded && (
        <div className="overflow-hidden w-full h-[400px] md:h-[500px]">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={D1}
            zoom={18}
            options={{
              disableDefaultUI: true,
              clickableIcons: false,
              styles: mapStyle,
            }}
          >
            <Marker
              position={D1}
              icon={markerIcon}
              title="D1 Print Studio – Demutstrasse 1, 9000 St. Gallen"
            />
          </GoogleMap>
        </div>
      )}

      {/* Email Form */}
      {status === "ok" ? (
        // ✅ Confirmation replaces form
        <div
          ref={confirmationRef}
          className="flex flex-col items-center justify-center text-center py-12 space-y-6"
        >
          <img
            src="/icons/smiley.svg"
            alt="Nachricht gesendet"
            width={100}
            height={100}
            className="object-contain"
          />
          <p className="text-[#021695] text-[18px] md:text-2xl leading-snug max-w-md">
            Danke für deine Nachricht!<br />
            Wir melden uns so bald wie möglich.
          </p>
        </div>
      ) : (
        // ✅ Form (visible until submitted)
        <form onSubmit={onSubmit} className="space-y-6 pt-2">
          <input type="text" name="_gotcha" className="hidden" aria-hidden="true" tabIndex={-1} />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-bold">Name*</label>
              <input
                id="name"
                name="name"
                required
                className="w-full border-[3px] md:border-[6px] border-[#021695] bg-white px-3 py-2
                           focus:outline-none focus:ring-0 text-inherit placeholder:opacity-60 rounded-none"
                placeholder="Dein Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-bold">E-Mail*</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border-[3px] md:border-[6px] border-[#021695] bg-white px-3 py-2
                           focus:outline-none focus:ring-0 text-inherit placeholder:opacity-60 rounded-none"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 font-bold">Betreff</label>
            <input
              id="subject"
              name="subject"
              className="w-full border-[3px] md:border-[6px] border-[#021695] bg-white px-3 py-2
                         focus:outline-none focus:ring-0 text-inherit placeholder:opacity-60 rounded-none"
              placeholder="Worum geht’s?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-bold">Nachricht*</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full border-[3px] md:border-[6px] border-[#021695] bg-white px-3 py-2
                         focus:outline-none focus:ring-0 text-inherit placeholder:opacity-60 rounded-none resize-none"
              placeholder="Deine Nachricht…"
            />
          </div>

          {/* Send Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={submitting}
              className="bg-[#021695] text-white px-8 py-3 font-bold 
                         inline-flex items-center justify-center shrink-0
                         disabled:opacity-50 transition-all hover:opacity-90 active:scale-[0.98] rounded-none"
            >
              {submitting ? "Wird gesendet…" : "Senden"}
            </button>
          </div>

          {status === "err" && (
            <p className="text-red-600">
              Uups – etwas ist schiefgelaufen. Bitte versuche es erneut oder schreib direkt an{" "}
              <a href="mailto:info@d1studio.ch" className="underline">
                info@d1studio.ch
              </a>.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
