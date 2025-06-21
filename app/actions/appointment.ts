'use server';

import nodemailer from 'nodemailer';

// Define the appointment data interface
interface AppointmentData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  department: string;
  notes?: string;
}

// Create nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER, // Your company Gmail address
    pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not regular password)
  },
});

export async function bookAppointment(formData: FormData) {
  try {
    // Extract form data
    const appointmentData: AppointmentData = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      date: formData.get('date') as string,
      department: formData.get('department') as string,
      notes: formData.get('notes') as string || '',
    };

    // Validate required fields
    if (!appointmentData.firstName || !appointmentData.lastName || !appointmentData.email || !appointmentData.phone || !appointmentData.date || !appointmentData.department) {
      return {
        success: false,
        error: 'Please fill in all required fields',
      };
    }

    // Format the date for better readability
    const formattedDate = new Date(appointmentData.date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Email content for the company
    const companyEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <div style="background-color: #2563eb; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0;">🏥 New Appointment Booking</h1>
        </div>
        
        <div style="padding: 20px; background-color: #f8fafc;">
          <h2 style="color: #1e40af; margin-bottom: 20px;">Patient Information</h2>
          
          <div style="background-color: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <p><strong>Name:</strong> ${appointmentData.firstName} ${appointmentData.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${appointmentData.email}">${appointmentData.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${appointmentData.phone}">${appointmentData.phone}</a></p>
          </div>

          <div style="background-color: white; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
            <p><strong>Preferred Date:</strong> ${formattedDate}</p>
            <p><strong>Department:</strong> ${appointmentData.department}</p>
          </div>

          ${appointmentData.notes ? `
          <div style="background-color: white; padding: 15px; border-radius: 8px;">
            <p><strong>Additional Notes:</strong></p>
            <p style="background-color: #f1f5f9; padding: 10px; border-radius: 5px; margin: 10px 0;">${appointmentData.notes}</p>
          </div>
          ` : ''}
        </div>

        <div style="background-color: #e2e8f0; padding: 15px; border-radius: 0 0 10px 10px; text-align: center; color: #64748b;">
          <p style="margin: 0; font-size: 12px;">This appointment request was submitted through your website booking form.</p>
          <p style="margin: 5px 0 0 0; font-size: 12px;">Please contact the patient to confirm the appointment.</p>
        </div>
      </div>
    `;

    

    // Send email to company
    await transporter.sendMail({
      from: `"${appointmentData.firstName} ${appointmentData.lastName}" <${process.env.SMTP_USER}>`,
      to: process.env.COMPANY_EMAIL || process.env.GMAIL_USER, // Company email to receive notifications
      subject: `New Appointment Booking - ${appointmentData.firstName} ${appointmentData.lastName}`,
      html: companyEmailHtml,
    });

    

    return {
      success: true,
      message: 'Appointment booked successfully! You will receive a confirmation email shortly.',
    };

  } catch (error) {
    console.error('Error booking appointment:', error);
    return {
      success: false,
      error: 'Failed to book appointment. Please try again later.',
    };
  }
}