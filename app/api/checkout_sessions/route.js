import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-09-30",
});

export async function POST(req) {
  try {
    const { workshopId } = await req.json();

    // Fetch workshop data from SheetDB
    const res = await fetch(process.env.NEXT_PUBLIC_SHEETDB_URL);
    const allWorkshops = await res.json();
    const workshop = allWorkshops.find((w) => w.id === workshopId);

    if (!workshop) {
      return new Response(JSON.stringify({ error: "Workshop not found" }), { status: 404 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "chf",
            product_data: {
              name: workshop.title,
              description: workshop.description,
              images: [workshop.image],
            },
            unit_amount: Number(workshop.price) * 100, // CHF → Rappen
          },
          quantity: 1,
        },
      ],
      success_url: `${req.headers.get("origin")}/workshops/success`,
      cancel_url: `${req.headers.get("origin")}/workshops/cancel`,
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (err) {
    console.error("Stripe error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
