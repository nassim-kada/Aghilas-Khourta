import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email interface matching the form data
interface EmailRequest {
  fullName: string;
  email: string;
  phone: string;
  package: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: EmailRequest = await request.json();
    const { fullName, email, phone, package: selectedPackage } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !selectedPackage) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use app password, not regular password
      },
    });

    // Email content
    const mailOptions = {
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to yourself
      replyTo: email,
      subject: `New Service Inquiry - ${selectedPackage} Package`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 15px; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #667eea; }
              .label { font-weight: bold; color: #667eea; display: block; margin-bottom: 5px; }
              .value { color: #333; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Service Inquiry</h1>
                <p>Package: ${selectedPackage}</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Client Name:</span>
                  <span class="value">${fullName}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value">${email}</span>
                </div>
                <div class="field">
                  <span class="label">Phone/WhatsApp:</span>
                  <span class="value">${phone}</span>
                </div>
                <div class="field">
                  <span class="label">Selected Package:</span>
                  <span class="value">${selectedPackage}</span>
                </div>
                <div class="field">
                  <span class="label">Submission Time:</span>
                  <span class="value">${new Date().toLocaleString()}</span>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Service Inquiry Received:

Client Name: ${fullName}
Email: ${email}
Phone/WhatsApp: ${phone}
Selected Package: ${selectedPackage}
Submission Time: ${new Date().toLocaleString()}

Please respond within 24 hours.
      `.trim(),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Optional: Add GET method for testing
export async function GET() {
  return NextResponse.json(
    { message: 'Email API is working' },
    { status: 200 }
  );
}