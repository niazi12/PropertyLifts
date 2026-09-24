'use server';

import { z } from 'zod'; // For validation
import { sendNotification } from '@/lib/mailer';

// Define the form validation schema
const ContactFormSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  email: z.string().trim().email('Please enter a valid email address'),
  subject: z.string().trim().min(2, 'Please enter a subject'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters'),
});

export async function sendContactEmail(prevState, formData) {
  const validatedFields = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return { message: validatedFields.error.errors[0].message, error: true, success: false };
  }

  const { name, email, subject, message } = validatedFields.data;

  try {
    await sendNotification({
      subject: `Contact Form: ${subject}`,
      heading: 'New Contact Form Submission',
      fromName: name,
      replyTo: email,
      fields: [
        ['Name', name],
        ['Email', email],
        ['Subject', subject],
        ['Message', message],
      ],
    });

    return {
      message: "Thank you! Your message has been sent successfully.",
      success: true,
      error: false,
    };
  } catch (error) {
    console.error('Contact form error:', error);
    return {
      message: "Sorry, something went wrong. Please try again later.",
      success: false,
      error: true,
    };
  }
}
