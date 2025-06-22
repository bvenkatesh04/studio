'use server';

export async function sendContactMessage(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const message = formData.get('message');
  const course = formData.get('course');

  // Basic validation on the server
  if (!name || !email || !phone || !course || !message) {
    return { success: false, error: 'Please fill out all required fields.' };
  }

  // In a real app, you would integrate an email service like SendGrid, Resend, or Nodemailer here.
  // For this demonstration, we are logging the data to the server console.
  console.log('--- New Contact Form Submission ---');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  if (course) {
    console.log(`Course: ${course}`);
  }
  console.log(`Message: ${message}`);
  console.log('------------------------------------');

  // Simulate network delay to show loading state
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}
