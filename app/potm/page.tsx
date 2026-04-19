import Image from "next/image";

export default function PrintOfTheMonth() {
  const SHOW_POTM = true;

  if (!SHOW_POTM) {
    return <div className="text-[#021695]">POTM not live</div>;
  }

  const month = "april";

  return (
    <div className="text-[#021695] space-y-4">

      {/* TITLE */}
      <h2 className="hidden md:block text-[38px] font-bold tracking-wide">
        PRINT OF THE MONTH
      </h2>

      {/* TEXT BLOCK */}
      <div className="space-y-6 text-[18px] leading-[26px] md:text-2xl md:leading-snug">

        <p>
          Jeden Monat ein neues Motiv – exklusiv im D1 Studio in St. Gallen gedruckt.
        </p>

        <p>
          <strong>April Drop — Studio Tee</strong><br />
          CHF 45.–
        </p>

        <p>
          Limitierter Siebdruck auf hochwertigem Shirt. Von Hand gedruckt im D1 Studio.
        </p>

      </div>

      {/* IMAGE */}
      <div>
        <Image
          src={`/potm/potm_${month}_1.jpg`}
          alt="POTM"
          width={1200}
          height={1200}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* DETAILS */}
      <div className="space-y-6 text-[18px] leading-[26px] md:text-2xl md:leading-snug">

        <p>
          1–2 Farben Siebdruck<br />
          Gedruckt in St. Gallen<br />
          Nur diesen Monat erhältlich
        </p>

        <p>
          →{" "}
          <a
            href="YOUR_STRIPE_LINK"
            target="_blank"
            className="hover:font-bold transition-all duration-200"
          >
            Jetzt bestellen
          </a>
        </p>

        <p className="text-[14px]">
          ⏳ Nur bis Ende Monat verfügbar
        </p>

      </div>

    </div>
  );
}
