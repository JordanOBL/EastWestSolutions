import { NextResponse } from 'next/server';
import stripe from '../../../lib/stripe'
export async function GET(request: Request,
  { params }: { params: Promise<{ specialty: string }>}
) {

  try
  {
    const { specialty } = await params;
    const products = await stripe.products.search({
      query: `active:'true' AND metadata['specialty']:"${specialty}"`,
      expand: ["data.default_price"], // Ensures pricing details are included
    });

    return NextResponse.json(products.data.sort((a, b) => Number(a.metadata?.tier_num)  - Number(b.metadata?.tier_num))); // ✅ Correct Next.js JSON response
  } catch (error) {
    console.error("Stripe API Error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

