"use client";

export default function OffeneWerkstatt() {
  return (
    <div className="space-y-6 text-[#021695]">
      {/* 👇 Title hidden on mobile, visible on desktop */}
      <h2 className="hidden md:block text-[26px] md:text-[38px] font-bold tracking-wide">
        OFFENE WERKSTATT
      </h2>

      <p className="text-[18px] leading-[26px] md:text-2xl md:leading-snug">
        Willst du deine nächste T-Shirt-Kollektion selber drucken?
      </p>

      <p className="text-[18px] leading-[26px] md:text-2xl md:leading-snug">
        Mit deiner D1 PrintCard erhältst du Zugang zu unserem voll
        ausgestatteten Siebdruckatelier. Nach einem Einführungskurs kannst Du mit der Karte stundenweise Maschinen nutzen
        – ganz flexibel, wie mit einer Zehnerkarte für den ÖV.
      </p>

      <p className="text-[18px] leading-[26px] md:text-2xl md:leading-snug">
        →{" "}
        <a
          href="mailto:info@d1studio.ch"
          className="hover:font-bold text-[#021695] transition-all duration-200"
        >
          D1 PrintCard bestellen
        </a>
      </p>

      {/* ⭐ Stripe Buy Button */}
      <div
        className="mt-8"
        dangerouslySetInnerHTML={{
          __html: `
            <stripe-buy-button
              buy-button-id="buy_btn_1SVbsARuf2AabxVMW8LYmSbe"
              publishable-key="pk_live_51SEH5SRuf2AabxVMPVTpbMqGkIoaW4aih9ChvWG7RBoHqkuJ38ytFKSaOGoHMVl3HWM6nuJp0cQRmWQu9Z8lr43900tY63CIxp">
            </stripe-buy-button>
          `,
        }}
      />
    </div>
  );
}
