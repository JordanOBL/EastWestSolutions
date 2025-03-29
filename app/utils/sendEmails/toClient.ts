'use server'
import nodemailer from 'nodemailer';
import {clientOTPTemplateResponseData} from '../clientOTPTemplateResponseData'
import path from 'path'
export async function sendOTPClientEmail(clientName, clientEmail, purchasedService, purchasedTier) {
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

    const response = clientOTPTemplateResponseData[purchasedService][purchasedTier]

    const mailOptions = {
      from: 'India - EastWest Solutions <india@eastwestsolutions.us>',
      to: clientEmail,
      replyTo: 'india@eastwestsolutions.us',
      subject: 'Action Required: Resume Information Needed',
      html: `<p style={{color: 'black'}}>Hi ${clientName},</p>` + response,
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

export async function sendRecievedQuoteClientEmail(clientName, clientEmail) {
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
      from:'India - EastWest Solutions <india@eastwestsolutions.us>',
      to: clientEmail,
      replyTo: 'india@eastwestsolutions.us',
      subject: 'Quote Request Received.',
      html: `<p style={{color: 'black'}}>Hi ${clientName},</p>
<p style={{color: 'black'}} >Thank you for choosing EastWest Solutions! I have received your request for a quote
and appreciate the opportunity to assist you.</p>

<p style={{color: 'black'}}>I am currently reviewing your details and will provide a tailored quote within 2 – 4
business days. If I need any additional information to refine your quote, I will reach out.</p>

<p style={{color: 'black'}}>In the meantime, if you have any specific preferences, questions, or updates regarding
your request, please feel free to reply to this email.</p>

<p style={{color: 'black'}}>I look forward to working with you!</p>
<p>Best regards,</p>

<p style={{color: 'black'}}>India</p>

<br/><br/>
<img src="cid:signatureImage" style="max-width: 50px; margin-top: 10px;" />
<p style={{color: 'black'}}>India Rolfe | Founder, EastWest Solutions</p>
<p style={{color: 'black'}}>India@EastWestSolutions.us | (509) 592-5381</p>
<a href="https://www.EastWestSolutions.us">www.EastWestSolutions.us</a>`,
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
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.log(error);
  }
};



