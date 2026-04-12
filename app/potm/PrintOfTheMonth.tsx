export default function PrintOfTheMonth() {
  return (
    <div className="p-12">

      <h1 className="text-3xl font-medium mb-6">
        Print of the Month
      </h1>

      <p className="mb-12 max-w-xl">
        Jeden Monat ein neues Motiv – exklusiv im D1 Studio in St. Gallen gedruckt.
      </p>

      <div className="grid grid-cols-2 gap-12">
        
        {/* LEFT: IMAGE */}
        <div>
          <img src="/shirt-main.jpg" className="w-full" />
        </div>

        {/* RIGHT: INFO */}
        <div className="flex flex-col gap-6">
          
          <div className="flex justify-between">
            <h2 className="text-2xl font-medium">
              April Drop — Studio Tee
            </h2>
            <p>CHF 45.–</p>
          </div>

          <div className="flex gap-2">
            {["S","M","L","XL"].map(size => (
              <button key={size} className="border px-4 py-2 text-sm">
                {size}
              </button>
            ))}
          </div>

          <p className="max-w-md">
            Limitierter Siebdruck auf hochwertigem Shirt.
            Von Hand gedruckt im D1 Studio.
          </p>

          <a
            href="YOUR_STRIPE_LINK"
            className="border px-6 py-3 w-fit"
          >
            Jetzt bestellen
          </a>

          <p className="text-sm">
            ⏳ Nur bis Ende Monat verfügbar
          </p>

        </div>
      </div>

    </div>
  );
}
