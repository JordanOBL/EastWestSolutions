'use server'
import {NextResponse} from 'next/server'
import nodemailer from 'nodemailer';
import {templateResponseData} from '../templateResponseData'
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

    const response = templateResponseData[purchasedService][purchasedTier]

    const mailOptions = {
      from: 'india@eastwestsolutions.us',
      to: clientEmail,
      replyTo: 'india@eastwestsolutions.us',
      subject: 'Action Required: Resume Information Needed',
      html: `<p>Hi ${clientName},</p>` + response,
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



