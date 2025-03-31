'use server'
import {NextResponse} from 'next/server'
import nodemailer from 'nodemailer';
export async function sendInternalQuoteEmail(response: string, service: string) {
  try {
    let subject

    switch(service) {
      case 'leadership_strategy':
        subject = 'Leadership Strategy Quote Request'
        break
      case 'business_planning':
        subject = 'Business Planning Quote Request'
        break
      case 'operational_review':
        subject = 'Operational Review Quote Request'
        break
      case 'strategy_deck':
        subject = 'Strategy Deck Quote Request'
        break
      case 'team_structure':
        subject = 'Team Structure Quote Request'
        break
      default:
        subject = 'Quote Request'
        break
    }

     const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      requireTLS: true,
      secure: false,// true for port 465, false for other ports
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.CLIENT_EMAIL_AUTH_USER,
        pass: process.env.NODEMAILER_APP_PASS,
      },
    }); 


    const mailOptions = {
      from: process.env.CLIENT_QUOTES_EMAIL,
      to: process.env.CLIENT_QUOTES_EMAIL,
      subject: subject,
      text: response.text,
      html: response.html,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        return NextResponse.json({ success: true }, {
          status: 200,
        });
      }
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, {
      status: 500,
    });
  }
}




export async function sendInternalEmail(subject: string, clientName: string, clientEmail: string, service: string, tier: string, price: number, receipt: string, paymentIntent: string) {
  try {
    
     const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      requireTLS: true,
      secure: false,// true for port 465, false for other ports
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.CLIENT_EMAIL_AUTH_USER,
        pass: process.env.NODEMAILER_APP_PASS,
      },
    }); 


    const mailOptions = {
      from: process.env.CLIENT_RECEIPTS_EMAIL,
      to: process.env.CLIENT_RECEIPTS_EMAIL,
      subject:  subject,
      text: `
Client Name: ${clientName}
Client Email: ${clientEmail}
Service: ${service}
Tier: ${tier}
Receipt URL: ${receipt}
Stripe Payment Intent: ${paymentIntent}
Total Price: ${price}
`,
      html: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Payment Confirmation</title>
  </head>
  <body style="font-family: Arial, sans-serif; color: #000000; line-height: 1.5;">
    <p><strong>Client Name:</strong> ${clientName}</p>
    <p><strong>Client Email:</strong> ${clientEmail}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Tier:</strong> ${tier}</p>
    <p><strong>Receipt URL:</strong> <a href="${receipt}" target="_blank">${receipt}</a></p>
    <p><strong>Stripe Payment Intent:</strong> ${paymentIntent}</p>
    <p><strong>Total Price:</strong> ${price}</p>
  </body>
</html>
`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        return NextResponse.json({ success: true }, {
          status: 200,
        });
      }
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, {
      status: 500,
    });
  }
}

