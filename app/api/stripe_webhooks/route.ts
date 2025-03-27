import { NextResponse } from 'next/server';

import { sendOTPClientEmail } from '../../utils/sendEmails/toClient';
import { sendInternalEmail } from '../../utils/sendEmails/toInternal';
export async function POST(req: Request) {
  const event = await req.json()

  let customerName, customerEmail, subject

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const checkoutSession = event.data.object;
      customerEmail = checkoutSession.customer_details.email
      customerName = checkoutSession.customer_details.name
      const tier = checkoutSession.metadata.tier
      const service = checkoutSession.metadata.service
      const receipt = checkoutSession.receipt_url
      const paymentIntent = checkoutSession.payment_intent
      // Then define and call a method to handle the successful payment intent.
      const sendEmail = await sendOTPClientEmail(customerName, customerEmail, service, tier)
      subject = `New ${service} ${tier} Purchase`

      await sendInternalEmail(subject, customerName, customerEmail, service.split('_').join(' '), tier, checkoutSession.amount_total / 100, receipt, paymentIntent)
      break;
    // ... handle other event types
    case 'invoice.payment_succeeded':
      const invoice = event.data.object;
      customerEmail = invoice.customer_email; 
      customerName = invoice.customer_name;
      subject = 'Invoice Payment Succeeded'
      // Then define and call a method to handle the successful payment intent.
      await sendInternalEmail(subject, customerName, customerEmail, invoice.lines.data[0].description.split('-')[0], invoice.lines.data[0].description.split('-')[1], invoice.amount_paid / 100, null, invoice.payment_intent)
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a response to acknowledge receipt of the event
  return NextResponse.json({ recieved: true });
}
