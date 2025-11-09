"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type FAQItem = { question: string; answer: string };

const FAQS: FAQItem[] = [
  {
    question: "Was ist Siebdruck?",
  answer: `
    Siebdruck ist ein Druckverfahren, bei dem Farbe mit einem Rakel durch ein feinmaschiges Gewebe auf Textilien, Papier oder andere Materialien aufgetragen wird. 
    Für jedes Motiv braucht es ein belichtetes Sieb, das wie eine Schablone funktioniert – und für jede einzelne Farbe des Designs wird ein eigenes Sieb benötigt.<br /><br />
    Die Technik eignet sich besonders für klare Formen, kräftige Farben und mittlere Auflagen. 
    Im Vergleich zu anderen Druckverfahren bietet Siebdruck mehrere Vorteile:
    <ul>
      <li>Leuchtende, deckende Farben – auch auf dunklen Stoffen</li>
      <li>Lange Haltbarkeit – der Druck bleibt auch nach vielen Waschdurchgängen schön</li>
      <li>Vielseitig – geeignet für Textilien, Papier, Karton, Holz und mehr</li>
      <li>Umweltfreundlich – durch langlebige Materialien, wasserbasierte Farben und wenig Abfall</li>
    </ul>
    Siebdruck verbindet Handwerk, Qualität und Nachhaltigkeit – und macht jedes Stück zu etwas Besonderem.
  `,
},
{
    question: "Kann ich auch nur ein einziges T-Shirt drucken?",
  answer: `
    Ein einzelnes T-Shirt zu siebdrucken, ist grundsätzlich möglich – aber der Aufwand für das Einrichten, Belichten und Auswaschen der Siebe ist recht gross. 
    Siebdruck lohnt sich daher erst ab einer Auflage von etwa 10–20 Stück, weil sich die Einrichtungskosten dann besser verteilen.<br /><br />
    Für kleinere Mengen oder Einzelstücke bieten wir alternative Druckmethoden, die sich besser eignen.<br /><br />
    <a href="mailto:info@d1studio.ch">
  →Melde dich einfach bei uns und wir finden gemeinsam die passende Lösung für dein Projekt.
</a>
  `,
},
  {
    question: "Ich habe bereits Erfahrung mit Siebdruck. Kann ich einfach die Werkstatt nutzen?",
    answer:
      "Ja, wenn du Grundkenntnisse mitbringst und selbstständig arbeiten kannst, kannst du die Werkstatt nach kurzer Absprache nutzen. Für neue Nutzer:innen ist ein Check-In oder eine kurze Einweisung obligatorisch.",
  },
   {
    question: "Belichtet ihr Siebe auf Anfrage?",
    answer:
      "Ja. Wir belichten dein Design auf ein Sieb – entweder auf eines deiner eigenen oder eines aus unserem Bestand. Die Druckdatei (am besten als PDF oder Vektordatei) sollte mindestens 1–2 Tage vorher bei uns eingehen.",
  },
   {
    question: "Was ist im Offene-Werkstatt-Angebot inbegriffen?",
  answer: `
    Inbegriffen ist die Nutzung der Infrastruktur (4 Farben Karusell, Drucktisch für paper (100x70cm), Siebbelichter, Waschanlage, Trockner, Rakel).<br /><br />
    Nicht inbegriffen sind:
    <ul>
      <li>Siebe (müssen mitgebracht, gekauft oder gemietet werden)</li>
      <li>Textilien (bitte selbst mitbringen oder vor Ort kaufen)</li>
      <li>Verbrauchsmaterial wie Farben, Emulsion oder Reinigungsmittel</li>
</ul>
    
  `,
},{
    question: "Kann ich ein Foto auf einen Kissenbezug drucken?",
    answer: `
    Nicht direkt. Fotos müssen für den Siebdruck vorbereitet (z. B. gerastert oder vektorisiert) werden.<br /><br />
    <a href="mailto:info@d1studio.ch">
  →Wir beraten dich gerne, ob dein Motiv geeignet ist - und wenn nicht, dann finden wir die passende Lösung.
</a>
  `,
},{
    question: "Bietet ihr Praktikumsplätze an?",
    answer:
      "Ja, gelegentlich. Wenn du Interesse an Gestaltung, Druck oder handwerklicher Arbeit hast und dich aktiv einbringen willst, melde dich gerne mit ein paar Infos zu deiner Person.",
  },{
    question: "Kann ich mein Material im D1 lagern?",
    answer:
      "Wenn du regelmässig druckst: Ja. Wenn du jedoch länger als 3 Monate nicht erscheinst, bitten wir dich, dein Material abzuholen. Wenn das nicht geschieht, behalten wir uns vor, es für Workshops oder zur gemeinsamen Nutzung weiterzugeben.",
    
    },{
      question: "Ich bringe eigene Shirts zum Bedrucken. Wer haftet bei Fehlern?",
    answer:
      "Wir drucken professionell, aber von Hand. Kleine Fehler können vorkommen. Bei mitgebrachten Textilien übernehmen wir keine Haftung für Schäden. Fehlerhaft bedruckte Stücke werden nicht verrechnet, aber auch nicht ersetzt.",
  },{
    question: "Kann ich meine Produkte im D1-Shop verkaufen?",
    answer:
      "Der Shop ist kuratiert. Wenn wir deine Arbeit spannend finden, melden wir uns bei dir. Bitte nicht aktiv anfragen – wir möchten unangenehme Situationen vermeiden.",
  },{
      question: "Verkauft ihr Siebdruck-Material wie Farben, Siebe, Emulsion...?",
    answer:
      "Nicht direkt. Wir führen kein grosses Lager mit Siebdruck-Materialien. Aber sag uns einfach, was du brauchst – vielleicht haben wir genau das bei uns im Studio. Und falls nicht, helfen wir dir gerne weiter.",
  },{
    question: "Ist D1 rund um die Uhr offen?",
    answer:
      "Nein. Die Nutzung ist an unsere Öffnungszeiten gebunden. In Ausnahmefällen kann für erfahrene Nutzer:innen eine individuelle Vereinbarung getroffen werden – das besprechen wir persönlich.",
  },{
    question: "Ich habe homophobe, sexistische oder tierverachtende Ansichten. Kann ich trotzdem hier drucken?",
    answer:
      "Nein. D1 ist ein sicherer Raum für alle. Inhalte oder Haltungen, die diskriminierend, homophob, sexistisch, rassistisch oder anderweitig menschenfeindlich sind, haben hier keinen Platz.",
  }
];


const ICON_SIZE = 48;
const TOP_MARGIN_PX = 8;
const BASELINE_ADJUST = -2;
const RAIL_GAP = 8;
const RAIL_WIDTH = ICON_SIZE + RAIL_GAP;
const MOVE_MS = 400;
const ROT_MS = 200;
const EASING = "cubic-bezier(0.3, 0.7, 0.2, 1)";
const TEXT_CH = 60;

export default function Faq2() {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <div className="space-y-12 text-[#021695]">
      {FAQS.map((faq, i) => (
        <FAQRow2
          key={i}
          faq={faq}
          isOpen={openSet.has(i)}
          requestToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}

function FAQRow2({
  faq,
  isOpen,
  requestToggle,
}: {
  faq: FAQItem;
  isOpen: boolean;
  requestToggle: () => void;
}) {
  const questionRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [qH, setQH] = useState(0);
  const [cH, setCH] = useState(0);
  const [phase, setPhase] = useState<"idle" | "pre" | "move" | "post">("idle");
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect mobile
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const q = questionRef.current;
    const c = contentRef.current;
    if (!q || !c) return;

    const measure = () => {
      setQH(q.offsetHeight || 0);
      setCH(c.scrollHeight || 0);
    };
    measure();

    const roQ = new ResizeObserver(measure);
    const roC = new ResizeObserver(measure);
    roQ.observe(q);
    roC.observe(c);
    window.addEventListener("resize", measure);

    return () => {
      roQ.disconnect();
      roC.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [faq.question, faq.answer]);

  const baseY = Math.max(0, qH - ICON_SIZE + BASELINE_ADJUST);
  const openY = baseY + cH + TOP_MARGIN_PX;
  const closedY = baseY;

  let y = isOpen ? openY : closedY;
  let rot = 0;
  let dur = MOVE_MS;

  if (isOpen) {
    if (phase === "pre") {
      y = openY;
      rot = 180;
      dur = ROT_MS;
    }
    if (phase === "move") {
      y = closedY;
      rot = 180;
      dur = MOVE_MS;
    }
    if (phase === "post") {
      y = closedY;
      rot = 180;
      dur = ROT_MS;
    }
  }

  const handleClick = () => {
    if (!isOpen) {
      requestToggle();
      return;
    }
    setPhase("pre");
    setTimeout(() => {
      setPhase("move");
      setTimeout(() => {
        setPhase("post");
        setTimeout(() => {
          setPhase("idle");
          requestToggle();
        }, ROT_MS);
      }, MOVE_MS);
    }, ROT_MS);
  };

  return (
    <div
      className="relative border-b-[0px] border-[#021695] pb-0"
      style={{ paddingRight: isMobile ? 0 : RAIL_WIDTH }}
    >
      {/* Question */}
      <div className="flex items-start justify-between">
       <button
  ref={questionRef}
  onClick={handleClick}
  className="w-full max-w-[50ch] text-left text-[24px] md:text-[30px] leading-tight bg-transparent p-0 outline-none focus:outline-none appearance-none"
>
  {faq.question}
</button>


        {/* ✅ Only show squeegee on desktop */}
        {!isMobile && (
          <button
            onClick={handleClick}
            className="absolute right-0 top-0"
            aria-label={isOpen ? "Antwort einklappen" : "Antwort ausklappen"}
            style={{
              width: ICON_SIZE,
              height: ICON_SIZE,
              transform: `translateY(${y}px) rotate(${rot}deg)`,
              transition: `transform ${dur}ms ${EASING}`,
              color: "#021695",
            }}
          >
            <Image
              src="/icons/squeegee.svg"
              alt=""
              width={ICON_SIZE}
              height={ICON_SIZE}
              className="block"
              priority={false}
            />
          </button>
        )}
      </div>

      {/* Answer */}
      <div
        className="overflow-hidden transition-[height] ease-in-out"
        style={{
          height:
            isOpen && phase !== "move" && phase !== "post"
              ? cH
              : 0,
          transitionDuration: `${MOVE_MS}ms`,
        }}
      >
        <div ref={contentRef} className="mt-0">
         <p
  className="faq-answer text-[18px] leading-[26px] md:text-2xl md:leading-snug"
  dangerouslySetInnerHTML={{ __html: faq.answer }}
/>

        </div>
      </div>
    </div>
  );
}
