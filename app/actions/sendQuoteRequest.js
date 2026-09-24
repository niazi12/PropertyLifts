'use server';

import { z } from 'zod';
import { sendNotification } from '@/lib/mailer';

const QuoteSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z.string().trim().min(6, 'Please enter a phone number'),
  postcode: z.string().trim().min(2, 'Please enter the property postcode'),
  propertyType: z.string().trim().min(1, 'Please choose a property type'),
  service: z.string().trim().min(1, 'Please choose a service'),
  liftDetails: z.string().trim().optional(),
  message: z.string().trim().min(10, 'Please tell us a little about what you need (at least 10 characters)'),
});

export async function sendQuoteRequest(prevState, formData) {
  const validatedFields = QuoteSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    return { message: validatedFields.error.errors[0].message, error: true, success: false };
  }

  const data = validatedFields.data;

  try {
    await sendNotification({
      subject: `Quote Request: ${data.service} (${data.postcode})`,
      heading: 'New Quote Request',
      fromName: data.name,
      replyTo: data.email,
      fields: [
        ['Name', data.name],
        ['Email', data.email],
        ['Phone', data.phone],
        ['Property postcode', data.postcode],
        ['Property type', data.propertyType],
        ['Service', data.service],
        ['Lift details', data.liftDetails],
        ['Message', data.message],
      ],
    });

    return {
      message: "Thanks! We've received your request and will be in touch shortly.",
      success: true,
      error: false,
    };
  } catch (error) {
    console.error('Quote form error:', error);
    return {
      message: 'Sorry, something went wrong. Please call us or try again later.',
      success: false,
      error: true,
    };
  }
}
