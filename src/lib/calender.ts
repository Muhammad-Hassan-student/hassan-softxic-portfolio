import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

export async function createCalendarEvent(eventDetails: {
  summary: string;
  description: string;
  startTime: string;
  endTime: string;
  timeZone: string;
  attendees?: string[];
}) {
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CALENDAR_CLIENT_EMAIL,
      key: process.env.GOOGLE_CALENDAR_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: SCOPES,
    });

    const calendar = google.calendar({ version: "v3", auth });

    const event = {
      summary: eventDetails.summary,
      description: eventDetails.description,
      start: {
        dateTime: eventDetails.startTime,
        timeZone: eventDetails.timeZone,
      },
      end: {
        dateTime: eventDetails.endTime,
        timeZone: eventDetails.timeZone,
      },
      attendees: eventDetails.attendees?.map((email) => ({ email })),
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 24 * 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    };

    const response = await calendar.events.insert({
      calendarId: "primary",
      requestBody: event,
      sendUpdates: "all",
    });

    return {
      success: true,
      eventId: response.data.id,
      eventLink: response.data.htmlLink,
    };
  } catch (error) {
    console.error("Error creating calendar event:", error);
    return { success: false, error };
  }
}

export async function getAvailableSlots(durationMinutes: number = 30) {
  try {
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CALENDAR_CLIENT_EMAIL,
      key: process.env.GOOGLE_CALENDAR_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: SCOPES,
    });

    const calendar = google.calendar({ version: "v3", auth });

    // Get busy slots for the next 7 days
    const timeMin = new Date().toISOString();
    const timeMax = new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    ).toISOString();

    const busyResponse = await calendar.freebusy.query({
      requestBody: {
        timeMin,
        timeMax,
        items: [{ id: "primary" }],
      },
    });

    const busySlots = busyResponse.data.calendars?.primary?.busy || [];

    // Generate available slots (simple implementation)
    // In production, you'd want more sophisticated logic
    const availableSlots = [];
    const start = new Date(timeMin);
    const end = new Date(timeMax);

    // Generate slots for business hours (9 AM - 6 PM)
    for (let day = start; day < end; day.setDate(day.getDate() + 1)) {
      // Skip weekends
      if (day.getDay() === 0 || day.getDay() === 6) continue;

      for (let hour = 9; hour < 18; hour++) {
        const slotStart = new Date(day);
        slotStart.setHours(hour, 0, 0, 0);

        const slotEnd = new Date(slotStart);
        slotEnd.setMinutes(slotStart.getMinutes() + durationMinutes);

        // Check if slot overlaps with busy slots
        const isBusy = busySlots.some((busy: any) => {
          const busyStart = new Date(busy.start);
          const busyEnd = new Date(busy.end);
          return slotStart < busyEnd && slotEnd > busyStart;
        });

        if (!isBusy && slotStart > new Date()) {
          availableSlots.push({
            start: slotStart.toISOString(),
            end: slotEnd.toISOString(),
          });
        }
      }
    }

    return { success: true, slots: availableSlots.slice(0, 20) }; // Limit to 20 slots
  } catch (error) {
    console.error("Error getting available slots:", error);
    return { success: false, error };
  }
}
