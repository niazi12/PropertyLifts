'use server';

import nodemailer from 'nodemailer';
import { z } from 'zod'; // For validation

// Define the form validation schema
const ContactFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(2, 'Message must be at least 10 characters'),
});

export async function sendContactEmail(prevState, formData) {
  try {
    // Extract form data
    const rawFormData = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    // Validate form data
    const validatedFields = ContactFormSchema.safeParse(rawFormData);

    // Return early if validation fails
    if (!validatedFields.success) {
      return {
        message: validatedFields.error.errors[0].message,
        error: true,
        success: false,
      };
    }

    // Configure SMTP transporter for Gmail using app password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER, // your Gmail address
        pass: process.env.SMTP_PASS, // your app-specific password
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // Prepare email content
    const mailOptions = {
      from: `"${validatedFields.data.name}" <${process.env.SMTP_USER}>`, // Use your SMTP user as sender
      replyTo: validatedFields.data.email, // Set reply-to as the form submitter's email
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Recipient email
      subject: `Contact Form: ${validatedFields.data.subject}`,
      text: `
        New Contact Form Submission
        
        Name: ${validatedFields.data.name}
        Email: ${validatedFields.data.email}
        Subject: ${validatedFields.data.subject}
        
        Message:
        ${validatedFields.data.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedFields.data.name}</p>
        <p><strong>Email:</strong> ${validatedFields.data.email}</p>
        <p><strong>Subject:</strong> ${validatedFields.data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedFields.data.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success state
    return {
      message: "Thank you! Your message has been sent successfully.",
      success: true,
      error: false,
    };

  } catch (error) {
    // Handle errors
    console.error('Contact form error:', error);
    return {
      message: "Sorry, something went wrong. Please try again later.",
      success: false,
      error: true,
    };
  }
}

