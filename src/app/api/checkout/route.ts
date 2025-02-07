import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Define the type for the item object
interface Item {
  name: string;
  price: number;
  quantity: number;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16" as unknown as "2025-01-27.acacia", // Force the type
});

export async function POST(req: NextRequest) {
  try {
    const { items }: { items: Item[] } = await req.json(); // Specify the type for items

    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: { name: item.name },
        unit_amount: item.price * 100, // Convert to cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:3000/Shopping?payment=success`,  // Success URL with payment query param
      cancel_url: `http://localhost:3000/Shopping`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Error during checkout:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
