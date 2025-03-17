import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51R33cKRWgljsp4ndn6imemHP718Y5hUWMf2zDrZho6GdF1Bsrzs76X9ew6LxaRrw3ZiTHGMA1BSXbFhetLpxqfth00DT86SMhN');

// ✅ Correct Next.js API format for App Router
export async function GET() {
  try {
    const products = await stripe.products.search({
      query: "active:'true' AND metadata['service']:'resume_build'",
      expand: ["data.default_price"], // Ensures pricing details are included
    });

    return NextResponse.json(products.data.sort((a, b) => a.default_price?.unit_amount - b.default_price?.unit_amount)); // ✅ Correct Next.js JSON response
  } catch (error) {
    console.error("Stripe API Error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

