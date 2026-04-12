export default function POTMPage() {
  return (
    <div className="p-12">

      {/* Title */}
      <div className="mb-16">
        <h1 className="text-3xl font-medium mb-6">
          Print of the Month
        </h1>
        <p className="text-neutral-600 max-w-xl">
          Jeden Monat ein neues Motiv – exklusiv im D1 Studio in St. Gallen gedruckt.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-2 gap-12">
        
        {/* Images */}
        <div className="space-y-6">
          <img src="/shirt-main.jpg" className="w-full" />
          
          <div className="grid grid-cols-2 gap-4">
            <img src="/shirt-detail.jpg" className="w-full" />
            <img src="/shirt-back.jpg" className="w-full" />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-medium">
              April Drop — Studio Tee
            </h2>
            <p>CHF 45.–</p>
          </div>

          {/* Sizes */}
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

          {/* Description */}
          <p className="text-neutral-700 max-w-md">
            Limitierter Siebdruck auf hochwertigem Shirt.
            Von Hand gedruckt im D1 Studio.
          </p>

          {/* Details */}
          <ul className="text-sm text-neutral-600 space-y-1">
            <li>1–2 Farben Siebdruck</li>
            <li>Gedruckt in St. Gallen</li>
            <li>Nur diesen Monat erhältlich</li>
          </ul>

          {/* CTA */}
          <a
            href="YOUR_STRIPE_LINK"
            target="_blank"
            className="border px-8 py-3 hover:bg-black hover:text-white transition w-fit mt-4"
          >
            Jetzt bestellen
          </a>

          {/* Urgency */}
          <p className="text-sm">
            ⏳ Nur bis Ende Monat verfügbar
          </p>

        </div>
      </div>
    </div>
  );
}
