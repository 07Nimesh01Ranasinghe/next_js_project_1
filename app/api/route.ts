// app/api/sendEmail/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the expected form data structure
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON data
    const data: ContactFormData = await request.json();

    // Destructure the data
    const { firstName, lastName, email, phoneNumber, message } = data;

    // Basic validation
    if (!email || !message) {
      return NextResponse.json(
        { success: false, message: 'Email and message are required.' },
        { status: 400 }
      );
    }

    // Create a Nodemailer transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Sender email
        pass: process.env.EMAIL_PASS, // Sender email password or app-specific password
      },
    });

    // Verify the transporter configuration
    await transporter.verify();

    // Compose the email
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`, // Sender address
      to: process.env.EMAIL_TO, // Recipient address
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json(
      { success: true, message: 'Email sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email.' },
      { status: 500 }
    );
  }
}

