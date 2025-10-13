"use server";
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, package: selectedPackage } = body;

    if (!fullName || !email || !phone || !selectedPackage) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
     host:'smtp.gmail.com',
     port:'587',
     auth:{
      user:'nassim.kada.13.14@gmail.com',
      pass:'nassimkada'
     }
    });

   
    const mailOptions = {
      from: 'nassim.kada.13.14@gmail.com',
      to: 'nassim.kada.13.14@gmail.com', 
      subject: `New Service Inquiry - ${selectedPackage} Package`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
                letter-spacing: 2px;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .info-row {
                background: white;
                padding: 15px;
                margin-bottom: 10px;
                border-radius: 5px;
                border-left: 4px solid #667eea;
              }
              .label {
                font-weight: bold;
                color: #667eea;
                text-transform: uppercase;
                font-size: 12px;
                letter-spacing: 1px;
                margin-bottom: 5px;
              }
              .value {
                font-size: 16px;
                color: #333;
              }
              .package-highlight {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 20px;
                border-radius: 5px;
                text-align: center;
                margin: 20px 0;
              }
              .package-highlight .value {
                color: white;
                font-size: 24px;
                font-weight: bold;
                letter-spacing: 2px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 2px solid #e0e0e0;
                color: #666;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>NEW SERVICE INQUIRY</h1>
            </div>
            <div class="content">
              <div class="package-highlight">
                <div class="label">Selected Package</div>
                <div class="value">${selectedPackage}</div>
              </div>
              
              <div class="info-row">
                <div class="label">Full Name</div>
                <div class="value">${fullName}</div>
              </div>
              
              <div class="info-row">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="info-row">
                <div class="label">Phone / WhatsApp</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              
              <div class="footer">
                <p>This inquiry was submitted from your services page.</p>
                <p>Response time: Within 24 hours</p>
              </div>
            </div>
          </body>
        </html>
      `,
      // Plain text version for email clients that don't support HTML
      text: `
        New Service Inquiry
        
        Selected Package: ${selectedPackage}
        
        Full Name: ${fullName}
        Email: ${email}
        Phone/WhatsApp: ${phone}
        
        ---
        This inquiry was submitted from your services page.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}