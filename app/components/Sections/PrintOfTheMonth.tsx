export default function PrintOfTheMonth() {
  return (
    <div className="p-6 md:p-12">

      {/* HEADER */}
      <div className="mb-16 max-w-xl">
        <h1 className="text-3xl font-medium mb-4">
          Print of the Month
        </h1>

        <p className="text-neutral-600 mb-4">
          Jeden Monat ein neues Motiv – exklusiv im D1 Studio in St. Gallen gedruckt.
        </p>

        {/* LINK TO FULL PAGE */}
        <a href="/potm" className="text-sm underline">
          Zum Print →
        </a>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT: IMAGE */}
        <div className="space-y-6">
          <img src="/shirt-main.jpg" className="w-full" />

          <div className="grid grid-cols-2 gap-4">
            <img src="/shirt-detail.jpg" className="w-full" />
            <img src="/shirt-back.jpg" className="w-full" />
          </div>
        </div>

        {/* RIGHT: INFO */}
        <div className="flex flex-col gap-6">

          {/* TITLE + PRICE */}
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-medium">
              April Drop — Studio Tee
            </h2>
            <p>CHF 45.–</p>
          </div>

          {/* SIZES */}
          <div className="flex gap-2">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="border px-4 py-2 text-sm hover:bg-black hover:text-white transition"
              >
                {size}
              </button>
            ))}
          </div>

          {/* DESCRIPTION */}
          <p className="text-neutral-700 max-w-md">
            Limitierter Siebdruck auf hochwertigem Shirt.
            Von Hand gedruckt im D1 Studio.
          </p>

          {/* DETAILS */}
          <ul className="text-sm text-neutral-600 space-y-1">
            <li>1–2 Farben Siebdruck</li>
            <li>Gedruckt in St. Gallen</li>
            <li>Nur diesen Monat erhältlich</li>
          </ul>

          {/* CTA */}
          <a
            href="YOUR_STRIPE_LINK"
            target="_blank"
            className="border px-6 py-3 w-fit hover:bg-black hover:text-white transition mt-2"
          >
            Jetzt bestellen
          </a>

          {/* URGENCY */}
          <p className="text-sm">
            ⏳ Nur bis Ende Monat verfügbar
          </p>

        </div>
      </div>

    </div>
  );
}
