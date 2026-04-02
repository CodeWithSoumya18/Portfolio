import nodemailer from 'nodemailer';
import process from "process";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Portfolio Message
          </h2>

          <div style="background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>

          <div style="background: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <hr style="margin: 30px 0; border: none; border-top: 1px solid #dee2e6;">

          <p style="color: #666; font-size: 12px;">
            This message was sent from your portfolio website contact form.
          </p>
        </div>
      `,
      replyTo: email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({
      message: 'Message sent successfully! Thank you for contacting me.'
    });

  } catch (error) {
    console.error('Email sending error:', error);

    res.status(500).json({
      message: 'Failed to send message. Please try again or contact me directly at 8391soumyanayak@gmail.com'
    });
  }
}