import nodemailer from 'nodemailer';
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

export default transporter
