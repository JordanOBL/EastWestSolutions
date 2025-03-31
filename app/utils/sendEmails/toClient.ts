'use server'
import nodemailer from 'nodemailer';
import {clientOTPTemplateResponseData} from '../clientOTPTemplateResponseData'
import path from 'path'
export async function sendOTPClientEmail(clientName, clientEmail, purchasedService, purchasedTier) {
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

    const response = clientOTPTemplateResponseData[purchasedService][purchasedTier]
    console.debug('response email to client', response)
    console.debug('client email', clientEmail)
    console.debug('client name', clientName)
    console.debug('purchased service', purchasedService)
    console.debug('purchased tier', purchasedTier)



    const mailOptions = {
      from: process.env.CLIENT_EMAIL_FROM_OPTION,
      to: clientEmail,
      replyTo: process.env.CLIENT_EMAIL_REPLY_TO_OPTION,
      subject: 'Action Required: Information Needed',
      text: `Hi ${clientName},` + response.text,
      html: `<p style={{color: 'black'}}>Hi ${clientName},</p>` + response.html,
      attachments: [
        {
          filename: 'signature.png',
          path: path.join(process.cwd(), 'public/logo/IconOnly_Transparent_NoBuffer.png'),
          cid: 'signatureImage'
        }
      ]

    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info);
        console.log('Email sent: ' + info.response);
      }
    })

  } catch (error) {
    console.log(error);
  }
};

export async function sendRecievedQuoteClientEmail(clientName, clientEmail) {
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
  from: process.env.CLIENT_EMAIL_FROM_OPTION, // e.g., 'India - EastWest Solutions <india@eastwestsolutions.us>'
  to: clientEmail,
  replyTo: process.env.CLIENT_EMAIL_USER,
  subject: 'Quote Request Received',
  html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Quote Request</title>
  </head>
  <body style="font-family: Arial, sans-serif; color: #000; line-height: 1.6;">
    <p>Hi ${clientName},</p>

    <p>
      Thank you for choosing <strong>EastWest Solutions</strong>! I’ve received your request for a quote
      and appreciate the opportunity to assist you.
    </p>

    <p>
      I’m currently reviewing your details and will provide a tailored quote within <strong>2–4 business days</strong>.
      If I need any additional information, I’ll reach out.
    </p>

    <p>
      In the meantime, if you have any specific preferences, questions, or updates regarding your request,
      feel free to reply to this email.
    </p>

    <p>I look forward to working with you!</p>

    <p>Best regards,</p>
    <p><strong>India</strong></p>

    <br/>
    <img src="cid:signatureImage" alt="Signature" style="max-width: 50px; margin-top: 10px;" />
    <p><strong>India Rolfe</strong> | Founder, EastWest Solutions</p>
    <p>
      <a href="mailto:India@EastWestSolutions.us">India@EastWestSolutions.us</a> |
      <a href="tel:+15095925381">(509) 592-5381</a>
    </p>
    <p>
      <a href="https://www.eastwestsolutions.us" target="_blank">www.EastWestSolutions.us</a>
    </p>
  </body>
  </html>
  `,
  attachments: [
    {
      filename: 'signature.png',
      path: path.join(process.cwd(), 'public/logo/IconOnly_Transparent_NoBuffer.png'),
      cid: 'signatureImage'
    }
  ]
};

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })
  } catch (error) {
    console.log(error);
  }
};



