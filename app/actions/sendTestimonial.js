'use server';

import { z } from 'zod';
import { sendNotification } from '@/lib/mailer';

const TestimonialSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name'),
  email: z.string().trim().email('Please enter a valid email address'),
  role: z.string().trim().min(2, 'Please enter your role or company'),
  location: z.string().trim().optional(),
  service: z.string().trim().min(1, 'Please choose the service we provided'),
  rating: z.coerce.number().int().min(1, 'Please choose a star rating').max(5),
  testimonial: z.string().trim().min(10, 'Please write a few words about your experience'),
  displayName: z.enum(['full', 'initial', 'anonymous']),
  consent: z.literal('yes', { errorMap: () => ({ message: 'Please confirm we can publish your testimonial' }) }),
});

const displayNameLabels = {
  full: 'Full name',
  initial: 'First name and initial',
  anonymous: 'Anonymous',
};

export async function sendTestimonial(prevState, formData) {
  // Hidden field that only bots fill in.
  if (formData.get('website')) {
    return { message: 'Thank you for your feedback!', success: true, error: false };
  }

  const validatedFields = TestimonialSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    role: formData.get('role') ?? '',
    location: formData.get('location') ?? undefined,
    service: formData.get('service') ?? '',
    rating: formData.get('rating'),
    testimonial: formData.get('testimonial'),
    displayName: formData.get('displayName'),
    consent: formData.get('consent') ?? '',
  });

  if (!validatedFields.success) {
    return { message: validatedFields.error.errors[0].message, error: true, success: false };
  }

  const data = validatedFields.data;

  try {
    await sendNotification({
      subject: `New Testimonial: ${'★'.repeat(data.rating)} from ${data.name}`,
      heading: 'New Client Testimonial',
      fromName: data.name,
      replyTo: data.email,
      fields: [
        ['Rating', `${data.rating} / 5`],
        ['Testimonial', data.testimonial],
        ['Name', data.name],
        ['Email', data.email],
        ['Role / company', data.role],
        ['Location', data.location],
        ['Service', data.service],
        ['Show name as', displayNameLabels[data.displayName]],
        ['Permission to publish', 'Yes'],
      ],
    });

    return {
      message: 'Thank you! We really appreciate you taking the time to share your experience.',
      success: true,
      error: false,
    };
  } catch (error) {
    console.error('Testimonial form error:', error);
    return {
      message: 'Sorry, something went wrong. Please try again later.',
      success: false,
      error: true,
    };
  }
}
