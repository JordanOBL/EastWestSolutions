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
      host: "smtp-mail.outlook.com",
      port: 587,
      requireTLS: true,
      secure: false,// true for port 465, false for other ports
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
      auth: {
        user: "india@eastwestsolutions.us",
        pass: process.env.NODEMAILER_APP_PASS,
      },
    }); 


    const mailOptions = {
      from: 'quotes@eastwestsolutions.us',
      to: 'quotes@eastwestsolutions.us',
      subject: subject,
      html: response,
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




export async function sendInternalOTPEmail(clientName: string, clientEmail: string, service: string, tier: string, price: number, receipt: string, paymentIntent: string) {
  try {
    
     const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      requireTLS: true,
      secure: false,// true for port 465, false for other ports
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
      auth: {
        user: "india@eastwestsolutions.us",
        pass: process.env.NODEMAILER_APP_PASS,
      },
    }); 


    const mailOptions = {
      from: 'receipts@eastwestsolutions.us',
      to: 'receipts@eastwestsolutions.us',
      subject: `New ${service} ${tier} Purchase`,
      html: `<p style={{color: 'black'}}>Client Name: ${clientName}</p>
<p style={{color: 'black'}}>Client Email: ${clientEmail}</p>
<p style={{color: 'black'}}>Service: ${service}</p>
<p style={{color: 'black'}}>Tier: ${tier}</p>
<p style={{color: 'black'}}>Receipt URL: <a href="${receipt}">${receipt}</a></p>
<p style={{color: 'black'}}>Stripe Payment Intent: ${paymentIntent}</p>
<p style={{color: 'black'}}>Total Price: ${price}</p>
`,
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

