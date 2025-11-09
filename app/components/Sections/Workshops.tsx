"use client";
import { useEffect, useState } from "react";

type Workshop = {
  id: string;
  title: string;
  image: string;
  date: string;
  time?: string;
  price?: string;
  description?: string;
  bring?: string;
  included?: string;
  available: string | boolean;
};

export default function Workshops() {
  // ✅ tell TS what’s in each state
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_SHEETDB_URL!);
        const data: Workshop[] = await res.json();

        // ✅ type parameter on str
        const decodeHTML = (str: string): string => {
          if (!str) return "";
          const txt = document.createElement("textarea");
          txt.innerHTML = str;
          const decoded = txt.value;
          return decoded
            .split(/\n{2,}/)
            .map((p) => `<p>${p.replace(/\n/g, "<br />")}</p>`)
            .join("");
        };

        const filtered: Workshop[] = data
          .filter((w: Workshop) => String(w.available).toLowerCase() === "true")
          .map((w: Workshop) => ({
            ...w,
            description: decodeHTML(w.description || ""),
          }));

        setWorkshops(filtered);
      } catch (err) {
        console.error("Error fetching workshops:", err);
      }
    }
    fetchData();
  }, []);

  // ✅ typed parameter
  async function handleBook(workshopId: string) {
    setLoading(workshopId);
    try {
      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workshopId }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert(data.error || "Fehler bei der Buchung");
    } catch (err) {
      console.error(err);
      alert("Es gab ein Problem mit der Buchung.");
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="space-y-4 text-[#021695] w-full">
      <h2 className="hidden md:block text-[38px] font-bold tracking-wide">
        Workshops
      </h2>

      <p className="text-[18px] leading-[26px] md:text-2xl md:leading-snug max-w-[75ch]">
        Lerne Siebdruck von Grund auf – in unseren Workshops zeigen wir dir alle
        Schritte vom Design bis zum fertigen Druck. Du lernst, wie du dein Motiv
        vorbereitest, das Sieb beschichtest, belichtest und druckst. Unsere Kurse
        sind ideal für Einsteiger:innen und Kreative, die selbst Hand anlegen wollen.
        Nach dem Workshop kannst du selbständig im Studio drucken und eigene Projekte
        umsetzen.
      </p>

      <p className="text-[18px] leading-[26px] md:text-2xl md:leading-snug max-w-[75ch]">
        <strong>Buche deinen Termin hier:</strong>
      </p>

      {workshops.length === 0 ? (
        <p className="text-[18px] leading-[26px] md:text-xl pl-[4px]">
          Momentan sind keine Workshops verfügbar.
        </p>
      ) : (
        <div className="space-y-16 w-full">
          {workshops.map((w) => (
            <div key={w.id} className="w-full">
              {/* MOBILE */}
              <div className="md:hidden flex flex-col space-y-3 text-[#021695]">
                <h3 className="text-[22px] font-semibold">{w.title}</h3>
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div className="text-[16px] font-bold leading-tight">
                  <p>{w.date}</p>
                  {w.time && <p>{w.time}</p>}
                </div>

                <p className="text-[16px]">CHF {w.price}</p>
                <p className="text-[16px] leading-[24px]">{w.description}</p>

                {w.bring && (
                  <p className="text-[16px] text-[#021695]">
                    <strong>Mitbringen:</strong> {w.bring}
                  </p>
                )}
                {w.included && (
                  <p className="text-[16px] text-[#021695]">
                    <strong>Im Kurs inbegriffen:</strong> {w.included}
                  </p>
                )}

                {String(w.available).toLowerCase() === "true" ? (
                  <button
                    onClick={() => handleBook(w.id)}
                    disabled={loading === w.id}
                    className="bg-[#021695] text-white px-6 py-3 text-[16px] mt-4 hover:opacity-80 transition w-fit"
                  >
                    {loading === w.id ? "Lädt..." : "Jetzt buchen"}
                  </button>
                ) : (
                  <div className="text-[16px] text-gray-500 mt-2">
                    Ausgebucht
                  </div>
                )}
              </div>

              {/* DESKTOP */}
              <div className="hidden md:grid md:grid-cols-[2fr_3fr] items-start gap-8">
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-semibold mb-2">{w.title}</h3>
                    <div className="text-xl mb-2 font-bold leading-tight">
                      <p>{w.date}</p>
                      {w.time && <p>{w.time}</p>}
                    </div>
                    <p className="text-xl mb-4">CHF {w.price}</p>

                    <button
                      onClick={() => toggleExpand(w.id)}
                      className={`text-[18px] font-akkurat transition-all duration-200 ${
                        expandedId === w.id ? "font-bold" : "font-normal"
                      } hover:font-bold`}
                    >
                      {expandedId === w.id
                        ? "Weniger Info"
                        : "Mehr Info zum Kurs"}
                    </button>

                    {expandedId === w.id && (
                      <div className="mt-4 space-y-4 text-[18px] leading-[28px]">
                        <div
                          className="text-[18px] leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: w.description || "" }}


                        />
                        {w.bring && (
                          <p>
                            <strong>Mitbringen:</strong> {w.bring}
                          </p>
                        )}
                        {w.included && (
                          <p>
                            <strong>Im Kurs inbegriffen:</strong> {w.included}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {String(w.available).toLowerCase() === "true" ? (
                    <button
                      onClick={() => handleBook(w.id)}
                      disabled={loading === w.id}
                      className="bg-[#021695] text-white px-8 py-4 text-lg mt-8 hover:opacity-80 transition w-fit"
                    >
                      {loading === w.id ? "Lädt..." : "Jetzt buchen"}
                    </button>
                  ) : (
                    <div className="text-[18px] text-gray-500 mt-6">
                      Ausgebucht
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
