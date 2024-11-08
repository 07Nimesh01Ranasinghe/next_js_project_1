// // app/api/sendEmail/route.ts

// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// // Define the expected form data structure
// interface ContactFormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string;
//   message: string;
// }

// export async function POST(request: Request) {
//   try {
//     // Parse the incoming JSON data
//     const data: ContactFormData = await request.json();

//     // Destructure the data
//     const { firstName, lastName, email, phoneNumber, message } = data;

//     // Basic validation
//     if (!email || !message) {
//       return NextResponse.json(
//         { success: false, message: 'Email and message are required.' },
//         { status: 400 }
//       );
//     }

//     // Create a Nodemailer transporter using Gmail SMTP
//     const transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: process.env.EMAIL_USER, // Sender email
//         pass: process.env.EMAIL_PASS, // Sender email password or app-specific password
//       },
//     });

//     // Verify the transporter configuration
//     await transporter.verify();

//     // Compose the email
//     const mailOptions = {
//       from: `"${firstName} ${lastName}" <${email}>`, // Sender address
//       to: process.env.EMAIL_TO, // Recipient address
//       subject: 'New Contact Form Submission',
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone Number:</strong> ${phoneNumber}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     // Return a success response
//     return NextResponse.json(
//       { success: true, message: 'Email sent successfully.' },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json(
//       { success: false, message: 'Failed to send email.' },
//       { status: 500 }
//     );
//   }
// }


// app/api/sendEmail/route.ts

// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     console.log('Received form data:', body);
//     const { firstName, lastName, email, phoneNumber, message } = body;

//     // Basic validation
//     if (!firstName || !lastName || !email || !message) {
//       console.error('Validation error: Missing required fields');
//       return NextResponse.json(
//         { success: false, message: 'Missing required fields' },
//         { status: 400 }
//       );
//     }

//     // Configure nodemailer transport using environment variables
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
//       port: Number(process.env.EMAIL_PORT), // e.g., 465 for SSL
//       secure: true, // true for 465, false for other ports
//       auth: {
//         user: process.env.EMAIL_USER, // Your email address
//         pass: process.env.EMAIL_PASS, // Your email password or app-specific password
//       },
//     });

//     // Verify connection configuration
//     await transporter.verify();
//     console.log('Server is ready to take our messages');

//     // Prepare email data
//     const mailOptions = {
//       from: `"${firstName} ${lastName}" <${email}>`, // Sender address
//       to: 'dtslife21@gmail.com', // Recipient address
//       subject: 'New Contact Form Submission',
//       html: `
//         <p>You have a new contact form submission:</p>
//         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone Number:</strong> ${phoneNumber || 'N/A'}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     };

//     // Send email
//     const info = await transporter.sendMail(mailOptions);
//     console.log('Message sent: %s', info.messageId);


//     return NextResponse.json({ success: true, message: 'Email sent successfully' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return NextResponse.json(
//       { success: false, message: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }



// app/api/sendEmail/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received form data:', body);
    const { firstName, lastName, email, phoneNumber, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      console.error('Validation error: Missing required fields');
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure nodemailer transport using Gmail and App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Verify connection configuration
    await transporter.verify();

    console.log('SMTP server is ready to take our messages');

    // Prepare email data
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`, // Sender's email
      to: 'lahiru@dockyardsolution.lk', // Recipient's email
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
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent:', info.messageId);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
