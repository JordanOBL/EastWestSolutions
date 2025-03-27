import { NextResponse } from 'next/server';
import stripe from '../../lib/stripe';

// ✅ Correct Next.js API format for App Router
export async function POST(req: Request)
{
  try
  {
    const { productId, service_name, service_tier } = await req.json(); // Get Product ID from frontend
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"], // Accepts credit cards, Apple Pay, Google Pay
      line_items: [
        {
          price: productId, // Stripe Price ID (NOT Product ID)
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://${process.env.URL}/thank-you`,
      cancel_url: `http://${process.env.URL}/career-development`,
      metadata: {
        service: service_name,
        tier: service_tier,
      }

    });

    return NextResponse.json({ url: session.url , session: session });
  } catch (error)
  {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
