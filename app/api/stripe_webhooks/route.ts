import { NextResponse } from 'next/server';

import { sendOTPClientEmail } from '../../utils/sendEmails/toClient';
export async function POST(req: Request) {
  const event = await req.json()

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutSession = event.data.object;
      const customerEmail = checkoutSession.customer_details.email
      const customerName = checkoutSession.customer_details.name
      const tier = checkoutSession.metadata.tier
      const service = checkoutSession.metadata.service
      // Then define and call a method to handle the successful payment intent.
      console.log('checkoutSession', checkoutSession)
      const sendEmail = await sendOTPClientEmail(customerName, customerEmail, service, tier)
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  return NextResponse.json({ recieved: true });
}
