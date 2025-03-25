import { NextResponse } from 'next/server';

import { sendOTPClientEmail } from '../../utils/sendEmails/toClient';
import { sendInternalOTPEmail } from '../../utils/sendEmails/toInternal';
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
      const receipt = checkoutSession.receipt_ur
      const paymentIntent = checkoutSession.payment_intent
      // Then define and call a method to handle the successful payment intent.
      console.log('checkoutSession', checkoutSession)
      const sendEmail = await sendOTPClientEmail(customerName, customerEmail, service, tier)

      await sendInternalOTPEmail(customerName, customerEmail, service.split('_').join(' '), tier, checkoutSession.amount_total / 100, receipt, paymentIntent)
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  return NextResponse.json({ recieved: true });
}
