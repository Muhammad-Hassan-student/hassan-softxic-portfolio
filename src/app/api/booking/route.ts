import { NextRequest, NextResponse } from "next/server";
import { createCalendarEvent } from "@/lib/calender";
import { sendEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();

    // Validate required fields
    const requiredFields = ["name", "email", "slot", "projectType"];
    for (const field of requiredFields) {
      if (!bookingData[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Create calendar event
    const calendarResult = await createCalendarEvent({
      summary: `Consultation with ${bookingData.name}`,
      description: `Project Type: ${bookingData.projectType}\nNotes: ${
        bookingData.notes || "No additional notes"
      }\nPhone: ${bookingData.phone || "Not provided"}`,
      startTime: `${bookingData.slot.date}T${bookingData.slot.startTime}:00`,
      endTime: `${bookingData.slot.date}T${bookingData.slot.endTime}:00`,
      timeZone: "America/New_York", // Adjust based on your timezone
      attendees: [bookingData.email],
    });

    if (!calendarResult.success) {
      throw new Error("Failed to create calendar event");
    }

    // Send confirmation email to client
    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Consultation Confirmed! 🎉</h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Meeting Details:</h3>
          <table style="width: 100%;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Date:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${bookingData.slot.date}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Time:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${bookingData.slot.startTime} - ${bookingData.slot.endTime} (EST)</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Duration:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">30 minutes</td>
            </tr>
            <tr>
              <td style="padding: 8px 0;"><strong>Meeting Link:</strong></td>
              <td style="padding: 8px 0;">
                <a href="https://meet.google.com/your-meeting-link" style="color: #2563eb;">
                  Join Google Meet
                </a>
              </td>
            </tr>
          </table>
        </div>

        <div style="margin: 20px 0;">
          <h4>What to prepare:</h4>
          <ul>
            <li>Project requirements & goals</li>
            <li>Any existing designs or documents</li>
            <li>Questions about technology stack</li>
            <li>Budget & timeline expectations</li>
          </ul>
        </div>

        <p>Looking forward to our conversation!</p>
        
        <p>Best regards,<br>
        <strong>Muhammad Hassan</strong><br>
        Senior Full-Stack Developer<br>
        SOFTXIC Agency</p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        
        <p style="font-size: 12px; color: #6b7280;">
          Need to reschedule? Reply to this email or WhatsApp at +92 3202190049
        </p>
      </div>
    `;

    // Send email to client
    await sendEmail(
      bookingData.email,
      "Consultation Confirmed with Muhammad Hassan",
      clientEmailHtml
    );

    // Send notification to admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Consultation Booking</h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Client Details:</h3>
          <table style="width: 100%;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${
                bookingData.name
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${
                bookingData.email
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${
                bookingData.phone || "Not provided"
              }</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Project Type:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${
                bookingData.projectType
              }</td>
            </tr>
          </table>
          
          <h3 style="margin-top: 20px;">Meeting Time:</h3>
          <table style="width: 100%;">
            <tr>
              <td style="padding: 8px 0;"><strong>Date & Time:</strong></td>
              <td style="padding: 8px 0;">${bookingData.slot.date} at ${
      bookingData.slot.startTime
    }</td>
            </tr>
          </table>
          
          <h3 style="margin-top: 20px;">Project Notes:</h3>
          <p style="background: white; padding: 10px; border-radius: 4px;">
            ${bookingData.notes || "No additional notes provided."}
          </p>
        </div>
        
        <p>
          <a href="${calendarResult.eventLink}" style="color: #2563eb;">
            View in Google Calendar
          </a>
        </p>
      </div>
    `;

    await sendEmail(
      process.env.ADMIN_EMAIL!,
      `New Consultation: ${bookingData.name} - ${bookingData.projectType}`,
      adminEmailHtml
    );

    return NextResponse.json({
      success: true,
      message: "Booking confirmed successfully",
      calendarEventId: calendarResult.eventId,
      calendarLink: calendarResult.eventLink,
    });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 }
    );
  }
}
