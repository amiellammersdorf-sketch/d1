"use client";

import { useState, useEffect, useRef } from "react";

type ItemId = "agb" | "datenschutz" | "impressum";

export default function LegalAccordion() {
  const [openId, setOpenId] = useState<ItemId | null>(null);
  const [height, setHeight] = useState(0);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Animate panel height
  useEffect(() => {
    if (openId) setHeight(window.innerHeight * 0.8);
    else setHeight(0);
  }, [openId]);

  // Close when clicking outside the panel
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpenId(null);
      }
    }
    if (openId) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openId]);

  const items: { id: ItemId; title: string; content: JSX.Element }[] = [

    {
      id: "agb",
      title: "AGB",
      content: (
        <div className="space-y-4 leading-relaxed">
          <p>
            <strong>1. Geltungsbereich</strong><br />
            Diese AGB gelten für alle Leistungen von <strong>D1 Print Studio</strong>,
            Einzelfirma von <strong>Amiel Lammersdorf</strong>, Demutstrasse 1, 9000 St. Gallen.
            Siebdruck, Grafik, Workshops, offene Werkstatt – vor Ort und online.
          </p>
          <p>
            <strong>2. Leistungen</strong><br />
            Sorgfältige, termingerechte Ausführung. Produktionsbedingte Abweichungen
            (z. B. Farbtöne) sind möglich und kein Mangel.
          </p>
          <p>
            <strong>3. Preise & Zahlung</strong><br />
            Preise in CHF, exkl. MwSt., sofern nicht anders angegeben.
            Workshops / Online in der Regel im Voraus; Druckaufträge nach Vereinbarung / Rechnung.
          </p>
          <p>
            <strong>4. Workshops & Buchungen</strong><br />
            Buchungen verbindlich. <em>Kostenlose Stornierung bis 7 Tage vor Beginn</em>;
            danach keine Rückerstattung / Nichterscheinen.
            Absage durch D1 (z. B. Krankheit, zu wenige Teilnehmende):
            Rückerstattung oder Ersatztermin.
          </p>
          <p>
            <strong>5. Offene Werkstatt</strong><br />
            Nutzung auf eigene Verantwortung; sorgfältiger Umgang erforderlich.
            Schäden durch unsachgemässe Nutzung: Verursacher:in.
          </p>
          <p>
            <strong>6. Haftung</strong><br />
            Haftung nur bei Vorsatz / grober Fahrlässigkeit.
            Keine Haftung für mitgebrachte Materialien / Gegenstände.
          </p>
          <p>
            <strong>7. Urheberrechte</strong><br />
            Kund:innen besitzen Rechte an ihren Motiven; D1 haftet nicht für Rechtsverletzungen.
          </p>
          <p>
            <strong>8. Datenschutz</strong><br />
            Siehe{" "}
            <a className="underline" href="/datenschutz">
              Datenschutzerklärung
            </a>.
          </p>
          <p>
            <strong>9. Recht & Gerichtsstand</strong><br />
            Schweizer Recht, Gerichtsstand St. Gallen.
          </p>
        </div>
      ),
    },
    {
      id: "datenschutz",
      title: "DATENSCHUTZERKLÄRUNG",
      content: (
        <div className="space-y-4 leading-relaxed">
          <p>
            <strong>Verantwortlich</strong><br />
            D1 Print Studio – Amiel Lammersdorf, Demutstrasse 1, 9000 St. Gallen<br />
            <a className="underline" href="mailto:info@d1studio.ch">
              info@d1studio.ch
            </a>
          </p>
          <p>
            <strong>Daten</strong><br />
            Erhebung nur, soweit nötig für Auftragsabwicklung, Workshops und Anfragen
            (Name, E-Mail, Telefon, Rechnungsadresse).
          </p>
          <p>
            <strong>Online-Buchungen</strong><br />
            Via <em>Acuity Scheduling (Squarespace)</em>;
            Datenverarbeitung zur Terminverwaltung.
          </p>
          <p>
            <strong>Kommunikation & Newsletter</strong><br />
            Nutzung nur zur Kommunikation; Abmeldung jederzeit möglich.
          </p>
          <p>
            <strong>Cookies & Statistik</strong><br />
            Es können Cookies / Statistiken eingesetzt werden; im Browser deaktivierbar.
          </p>
          <p>
            <strong>Weitergabe an Dritte</strong><br />
            Nur wenn zur Vertragserfüllung nötig (z. B. Zahlungsanbieter, Versand).
          </p>
          <p>
            <strong>Auskunft & Löschung</strong><br />
            Anfragen an{" "}
            <a className="underline" href="mailto:info@d1studio.ch">
              info@d1studio.ch
            </a>.
          </p>
        </div>
      ),
    },
    {
      id: "impressum",
      title: "IMPRESSUM",
      content: (
        <div className="space-y-4 leading-relaxed">
          <p>
            <strong>D1 Print Studio</strong><br />
            Inhaber: Amiel Lammersdorf<br />
            Demutstrasse 1, 9000 St. Gallen, Schweiz<br />
            E-Mail:{" "}
            <a className="underline" href="mailto:info@d1studio.ch">
              info@d1studio.ch
            </a><br />
            Web: d1studio.ch<br />
            Rechtsform: Einzelfirma
          </p>
          <p>
            <strong>Haftungsausschluss</strong><br />
            Inhalte sorgfältig erstellt; keine Gewähr für Aktualität / Vollständigkeit / Richtigkeit.
            Keine Haftung für externe Links.
          </p>
          <p>
            <strong>Urheberrecht</strong><br />
            Inhalte, Bilder und Grafiken sind urheberrechtlich geschützt; Nutzung nur mit Zustimmung.
          </p>
          <p>
            <strong>Webdesign</strong><br />
            by D1 Print Studio
          </p>
          <p>
  <strong>Photos</strong><br />
  <a
    href="https://www.zoomer-agency.ch/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Zoomer Agency
  </a>
</p>
          <p>
            <strong>Texte</strong><br />
            Roger Berhalter
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="relative text-[#021695] font-akkurat">
      {/* clickable titles bar */}
      <div className="flex justify-center gap-8 text-[18px] md:text-[20px] uppercase">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className={`transition-all ${
              openId === item.id ? "font-bold" : "font-normal"
            } hover:opacity-70`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* expanding overlay panel */}
      <div
        className="absolute bottom-full left-0 w-full z-50 overflow-hidden transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ height }}
      >
        {openId && (
          <div
            ref={panelRef}
            className="h-full bg-white/95 backdrop-blur-md border-[6px] border-[#021695] p-6 md:p-10 overflow-y-auto"
          >
            <div className="max-w-3xl mx-auto text-[16px] md:text-[18px]">
              <div className="flex justify-between items-start mb-6">
                <h3 className="uppercase font-bold text-[20px] md:text-[24px]">
                  {items.find((i) => i.id === openId)?.title}
                </h3>
                <button
                  onClick={() => setOpenId(null)}
                  className="text-sm underline hover:no-underline"
                >
                  Schliessen
                </button>
              </div>
              {items.find((i) => i.id === openId)?.content}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
