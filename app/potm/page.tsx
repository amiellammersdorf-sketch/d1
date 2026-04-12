export default function POTMPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      
      <div className="mb-16">
        <h2 className="text-3xl font-medium mb-4">
          Print of the Month
        </h2>
        <p className="text-base text-neutral-600">
          Jeden Monat ein neues Motiv – gedruckt im D1 Studio in St. Gallen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        
        <div className="space-y-4">
          <img src="/shirt-main.jpg" className="w-full" />
          <img src="/shirt-detail.jpg" className="w-full" />
        </div>

        <div className="flex flex-col gap-6">
          
          <h3 className="text-2xl font-medium">
            April Drop — Studio Tee
          </h3>

          <p className="text-lg">CHF 45.–</p>

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

          <p className="text-neutral-700">
            Limitierter Siebdruck auf hochwertigem Shirt.
            Von Hand gedruckt im D1 Studio.
          </p>

          <a
            href="YOUR_STRIPE_LINK"
            target="_blank"
            className="border px-6 py-3 hover:bg-black hover:text-white transition w-fit"
          >
            Jetzt bestellen
          </a>

        </div>
      </div>
    </section>
  );
}
