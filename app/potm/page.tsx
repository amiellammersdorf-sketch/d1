import Image from "next/image";

export default function POTMPage() {
  const SHOW_POTM = process.env.NEXT_PUBLIC_SHOW_POTM === "true";

  if (!SHOW_POTM) {
    return <div className="p-12 text-[#021695]">POTM not live</div>;
  }

  const month = "april";

  // 👉 adjust this number OR make it dynamic later
  const imageCount = 2;

  const images = Array.from({ length: imageCount }, (_, i) =>
    `/potm/potm_${month}_${i + 1}.jpg`
  );

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Images */}
        <div>
          {images.length === 1 && (
            <Image
              src={images[0]}
              alt="POTM"
              width={1200}
              height={1200}
              className="w-full h-auto object-cover"
            />
          )}

          {images.length === 2 && (
            <div className="grid grid-cols-2 gap-4">
              {images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`POTM ${i}`}
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover aspect-square"
                />
              ))}
            </div>
          )}

          {images.length >= 3 && (
            <div className="grid grid-cols-2 gap-4">
              {images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`POTM ${i}`}
                  width={1200}
                  height={1200}
                  className="w-full h-auto object-cover aspect-square"
                />
              ))}
            </div>
          )}
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
            rel="noopener noreferrer"
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
