import React from "react";
import CalendarBooking from "@/app/components/booking/calenderBooking";

export const metadata = {
  title: "Book a Consultation | Muhammad Hassan",
  description:
    "Schedule a free 30-minute strategy call to discuss your project requirements and technical solutions.",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-12">
      <CalendarBooking />
    </div>
  );
}
