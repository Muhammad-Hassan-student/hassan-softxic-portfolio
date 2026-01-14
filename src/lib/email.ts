import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendEmail(to: string, subject: string, html: string) {
  try {
    const info = await transporter.sendMail({
      from: `"SOFTXIC Agency" <${process.env.EMAIL_FROM}>`,
      to,
      subject,
      html,
    });

    console.log("Message sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error };
  }
}

export async function sendContactEmail(formData: any) {
  const { name, email, projectType, budget, timeline, message } = formData;

  // Email to admin
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">New Contact Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${name}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${email}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Project Type:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${projectType}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Budget:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${budget}</td></tr>
        <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Timeline:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${timeline}</td></tr>
        <tr><td style="padding: 8px;"><strong>Message:</strong></td><td style="padding: 8px;">${message}</td></tr>
      </table>
    </div>
  `;

  // Email to client
  const clientHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">Thank You for Contacting SOFTXIC!</h2>
      <p>Hi ${name},</p>
      <p>I've received your inquiry about "${projectType}" and will review it personally.</p>
      <p><strong>What happens next:</strong></p>
      <ol>
        <li>I'll review your requirements within 24 hours</li>
        <li>If it's a good fit, I'll send a detailed proposal</li>
        <li>We can schedule a free strategy call to discuss further</li>
      </ol>
      <p>Best regards,<br>Muhammad Hassan<br>Founder & Senior Developer<br>SOFTXIC Agency</p>
      <hr>
      <p style="font-size: 12px; color: #6b7280;">
        This is an automated response. For urgent matters, reply directly to this email.
      </p>
    </div>
  `;

  // Send both emails
  await sendEmail(
    process.env.ADMIN_EMAIL!,
    `New Contact: ${name} - ${projectType}`,
    adminHtml
  );
  await sendEmail(email, `Thank you for contacting SOFTXIC!`, clientHtml);
}
