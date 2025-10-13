import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, package: selectedPackage } = body;

    if (!fullName || !email || !phone || !selectedPackage) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: 'GHILES <onboarding@resend.dev>',
      to: ['nassim.kada.13.14@gmail.com'],
      subject: `🎬 New Video Service Inquiry - ${selectedPackage}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">NEW VIDEO SERVICE INQUIRY</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
              <div style="font-size: 14px; opacity: 0.9;">Selected Package</div>
              <div style="font-size: 24px; font-weight: bold;">${selectedPackage}</div>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #667eea;">
              <strong>Client Information:</strong><br>
              Name: ${fullName}<br>
              Email: <a href="mailto:${email}">${email}</a><br>
              Phone: <a href="tel:${phone}">${phone}</a><br>
              WhatsApp/phone Number: <a href="${phone})}">Click to chat</a>
            </div>

            <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <strong>⏰ Action Required:</strong> Please respond within 24 hours
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd; color: #666;">
              <p>Submitted: ${new Date().toLocaleString()}</p>
              <p>From GHILES Video Services Website</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Inquiry submitted successfully! We will contact you within 24 hours.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}