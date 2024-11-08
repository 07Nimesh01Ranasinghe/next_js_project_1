// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    // Only allow POST requests
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { firstName, lastName, email, phoneNumber, message } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  try {
    // Configure nodemailer transport using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
      port: Number(process.env.EMAIL_PORT), // e.g., 465 for SSL
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Prepare email data
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`, // Sender address
      to: 'nethumandakinidts@gmail.com', // Recipient address ///////////////////////////////////////////////////////////
      subject: 'New Contact Form Submission',
      html: `
        <p>You have a new contact form submission:</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
