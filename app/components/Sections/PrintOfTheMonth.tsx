import Image from "next/image";

export default function PrintOfTheMonth() {
  return (
    <div className="p-6 md:p-12">

      {/* HEADER */}
      <div className="mb-16 max-w-xl">
        <h1 className="text-d1-blue text-[32px] leading-tight mb-4">
          Print of the Month
        </h1>

        <p className="text-d1-blue text-[16px] mb-4">
          Jeden Monat ein neues Motiv – exklusiv im D1 Studio in St. Gallen gedruckt.
        </p>

        <a href="/potm" className="text-d1-blue text-[16px] underline">
          Zum Print →
        </a>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

        {/* LEFT: IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/shirt-main.jpg"
            alt="Print of the Month"
            width={1200}
            height={1200}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/shirt-detail.jpg"
            alt="Detail"
            width={1200}
            height={1200}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/shirt-back.jpg"
            alt="Back print"
            width={1200}
            height={1200}
            className="w-full h-auto object-cover"
          />
          <Image
            src="/shirt-extra.jpg"
            alt="Extra view"
            width={1200}
            height={1200}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* RIGHT: INFO */}
        <div className="flex flex-col gap-6">

          {/* TITLE + PRICE */}
          <div className="flex justify-between items-start">
            <h2 className="text-d1-blue text-[20px]">
              April Drop — Studio Tee
            </h2>
            <p className="text-d1-blue text-[16px]">
              CHF 45.–
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="text-d1-blue text-[16px] max-w-md">
            Limitierter Siebdruck auf hochwertigem Shirt.
            Von Hand gedruckt im D1 Studio.
          </p>

          {/* SIZES */}
          <div className="flex gap-2">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="border border-d1-blue px-3 py-1 text-d1-blue text-[14px] hover:bg-d1-blue hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>

          {/* DETAILS */}
          <ul className="text-d1-blue text-[14px] space-y-1">
            <li>1–2 Farben Siebdruck</li>
            <li>Gedruckt in St. Gallen</li>
            <li>Nur diesen Monat erhältlich</li>
          </ul>

          {/* CTA */}
          <a
            href="YOUR_STRIPE_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-d1-blue text-[16px] underline mt-2"
          >
            Jetzt bestellen →
          </a>

          {/* URGENCY */}
          <p className="text-d1-blue text-[14px]">
            ⏳ Nur bis Ende Monat verfügbar
          </p>

        </div>
      </div>

    </div>
  );
}
