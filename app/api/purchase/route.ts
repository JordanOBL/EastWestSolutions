import { NextResponse } from 'next/server';
import stripe from '../../lib/stripe';

// ✅ Correct Next.js API format for App Router
export async function POST(req: Request)
{
  try
  {
    const { productId } = await req.json(); // Get Product ID from frontend

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"], // Accepts credit cards, Apple Pay, Google Pay
      line_items: [
        {
          price: productId, // Stripe Price ID (NOT Product ID)
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:3000/`,
      cancel_url: `http://localhost:3000/career-development`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error)
  {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
