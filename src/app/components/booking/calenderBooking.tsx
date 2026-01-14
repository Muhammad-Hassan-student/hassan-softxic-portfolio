"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  Video,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Loader2,
  AlertCircle,
} from "lucide-react";

interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  date: string;
  available: boolean;
}

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  notes: string;
}

const CalendarBooking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [currentStep, setCurrentStep] = useState<
    "date" | "time" | "details" | "confirmation"
  >("date");
  const [isLoading, setIsLoading] = useState(false);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [formData, setFormData] = useState<BookingForm>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    notes: "",
  });

  // Generate time slots for the selected date
  useEffect(() => {
    generateTimeSlots();
  }, [selectedDate]);

  const generateTimeSlots = () => {
    const slots: TimeSlot[] = [];
    const dateStr = selectedDate.toISOString().split("T")[0];

    // Business hours: 9 AM to 6 PM
    for (let hour = 9; hour < 18; hour++) {
      // Generate slots every 30 minutes
      for (let minute = 0; minute < 60; minute += 30) {
        const startTime = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        const endHour = minute === 30 ? hour + 1 : hour;
        const endMinute = minute === 30 ? 0 : 30;
        const endTime = `${endHour.toString().padStart(2, "0")}:${endMinute
          .toString()
          .padStart(2, "0")}`;

        // Random availability for demo (80% available)
        const available = Math.random() > 0.2;

        slots.push({
          id: `${dateStr}-${startTime}`,
          startTime,
          endTime,
          date: dateStr,
          available,
        });
      }
    }

    setTimeSlots(slots);
  };

  // Generate calendar dates
  const generateCalendarDates = () => {
    const dates = [];
    const today = new Date();
    const currentMonth = selectedDate.getMonth();
    const currentYear = selectedDate.getFullYear();

    // Get first day of month
    const firstDay = new Date(currentYear, currentMonth, 1);
    // Get last day of month
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    // Add previous month's trailing days
    const firstDayOfWeek = firstDay.getDay();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(firstDay);
      date.setDate(date.getDate() - i - 1);
      dates.push({ date, isCurrentMonth: false });
    }

    // Add current month's days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(currentYear, currentMonth, i);
      dates.push({ date, isCurrentMonth: true });
    }

    // Add next month's leading days
    const lastDayOfWeek = lastDay.getDay();
    for (let i = 1; i <= 6 - lastDayOfWeek; i++) {
      const date = new Date(lastDay);
      date.setDate(date.getDate() + i);
      dates.push({ date, isCurrentMonth: false });
    }

    return dates.slice(0, 42); // 6 weeks
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setCurrentStep("time");
  };

  const handleTimeSelect = (slot: TimeSlot) => {
    if (!slot.available) return;
    setSelectedSlot(slot);
    setCurrentStep("details");
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // In production, this would call your API
      // await fetch('/api/booking', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     ...formData,
      //     slot: selectedSlot
      //   })
      // });

      setCurrentStep("confirmation");
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetBooking = () => {
    setSelectedDate(new Date());
    setSelectedSlot(null);
    setCurrentStep("date");
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      notes: "",
    });
  };

  const projectTypes = [
    "Web Application",
    "Mobile App",
    "SaaS Platform",
    "E-commerce",
    "API Development",
    "Consultation",
    "Other",
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 mb-4"
        >
          <CalendarIcon className="h-5 w-5 text-blue-600" />
          <span className="font-medium">Book a Free Strategy Call</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Schedule Your Consultation
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          30-minute free consultation to discuss your project requirements and
          plan the best approach
        </p>
      </div>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center mb-4">
          {["date", "time", "details", "confirmation"].map((step, index) => (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center">
                <div
                  className={`h-10 w-10 rounded-full flex items-center justify-center border-2 ${
                    currentStep === step
                      ? "bg-blue-600 border-blue-600 text-white"
                      : ["confirmation", "details"].includes(currentStep) &&
                        index <
                          ["date", "time", "details", "confirmation"].indexOf(
                            currentStep
                          )
                      ? "bg-green-500 border-green-500 text-white"
                      : "border-gray-300 dark:border-gray-700 text-gray-500"
                  }`}
                >
                  {currentStep === step ? (
                    index + 1
                  ) : ["confirmation", "details"].includes(currentStep) &&
                    index <
                      ["date", "time", "details", "confirmation"].indexOf(
                        currentStep
                      ) ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span className="text-xs mt-2 capitalize">{step}</span>
              </div>
              {index < 3 && (
                <div
                  className={`h-1 w-16 md:w-24 ${
                    index <
                    ["date", "time", "details", "confirmation"].indexOf(
                      currentStep
                    )
                      ? "bg-green-500"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Booking Content */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Step 1: Date Selection */}
          {currentStep === "date" && (
            <motion.div
              key="date"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-6 md:p-8"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Calendar */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={() =>
                        setSelectedDate(
                          new Date(
                            selectedDate.getFullYear(),
                            selectedDate.getMonth() - 1,
                            1
                          )
                        )
                      }
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <h3 className="text-xl font-bold">
                      {selectedDate.toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </h3>
                    <button
                      onClick={() =>
                        setSelectedDate(
                          new Date(
                            selectedDate.getFullYear(),
                            selectedDate.getMonth() + 1,
                            1
                          )
                        )
                      }
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center font-medium text-gray-500 text-sm py-2"
                        >
                          {day}
                        </div>
                      )
                    )}
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {generateCalendarDates().map(({ date, isCurrentMonth }) => {
                      const isToday =
                        date.toDateString() === new Date().toDateString();
                      const isSelected =
                        date.toDateString() === selectedDate.toDateString();
                      const isPast =
                        date < new Date(new Date().setHours(0, 0, 0, 0));

                      return (
                        <motion.button
                          key={date.toISOString()}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => !isPast && handleDateSelect(date)}
                          disabled={isPast}
                          className={`
                            h-12 rounded-lg flex items-center justify-center text-sm font-medium transition-all
                            ${
                              isSelected
                                ? "bg-blue-600 text-white"
                                : isToday
                                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-2 border-blue-300 dark:border-blue-700"
                                : !isCurrentMonth || isPast
                                ? "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            }
                          `}
                        >
                          {date.getDate()}
                          {isToday && !isSelected && (
                            <div className="absolute -top-1 -right-1 h-2 w-2 bg-blue-500 rounded-full" />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Date Info */}
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                    <h4 className="font-bold text-lg mb-4 flex items-center">
                      <CalendarIcon className="h-5 w-5 mr-2" />
                      Selected Date
                    </h4>
                    <div className="text-2xl font-bold mb-2">
                      {selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Next available time slots will be shown
                    </p>
                  </div>

                  <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <h4 className="font-bold text-lg mb-4">Available Hours</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          Monday - Friday
                        </span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          Saturday
                        </span>
                        <span className="font-medium">10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          Timezone
                        </span>
                        <span className="font-medium">EST (UTC-5)</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setCurrentStep("time")}
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all"
                  >
                    Continue to Time Slots
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Time Selection */}
          {currentStep === "time" && (
            <motion.div
              key="time"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setCurrentStep("date")}
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Change Date</span>
                </button>
                <h3 className="text-xl font-bold">
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Time Slots */}
                <div>
                  <h4 className="font-bold text-lg mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Available Time Slots
                  </h4>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[400px] overflow-y-auto pr-2">
                    {timeSlots.map((slot) => (
                      <motion.button
                        key={slot.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleTimeSelect(slot)}
                        disabled={!slot.available}
                        className={`
                          p-3 rounded-lg border text-center transition-all
                          ${
                            selectedSlot?.id === slot.id
                              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                              : !slot.available
                              ? "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                              : "border-gray-300 dark:border-gray-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                          }
                        `}
                      >
                        <div className="font-medium">{slot.startTime}</div>
                        <div className="text-sm text-gray-500">
                          to {slot.endTime}
                        </div>
                        {!slot.available && (
                          <div className="text-xs text-red-500 mt-1">
                            Booked
                          </div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Selection Summary */}
                <div className="space-y-6">
                  {selectedSlot ? (
                    <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                      <h4 className="font-bold text-lg mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        Selected Time Slot
                      </h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Date:
                          </span>
                          <span className="font-medium">
                            {selectedSlot.date}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Time:
                          </span>
                          <span className="font-medium">
                            {selectedSlot.startTime} - {selectedSlot.endTime}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Duration:
                          </span>
                          <span className="font-medium">30 minutes</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                      <h4 className="font-bold text-lg mb-4">
                        Select a Time Slot
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Choose an available time slot to proceed with booking
                        your consultation.
                      </p>
                    </div>
                  )}

                  <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <h4 className="font-bold text-lg mb-4 flex items-center">
                      <Video className="h-5 w-5 mr-2" />
                      Meeting Details
                    </h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start space-x-3">
                        <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 dark:text-blue-400 text-xs">
                            ✓
                          </span>
                        </div>
                        <span>Google Meet video call</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 dark:text-blue-400 text-xs">
                            ✓
                          </span>
                        </div>
                        <span>Calendar invite with link</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-600 dark:text-blue-400 text-xs">
                            ✓
                          </span>
                        </div>
                        <span>Email confirmation</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => selectedSlot && setCurrentStep("details")}
                    disabled={!selectedSlot}
                    className={`w-full py-3 px-6 font-semibold rounded-lg transition-all ${
                      selectedSlot
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600"
                        : "bg-gray-300 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {selectedSlot
                      ? "Continue to Details"
                      : "Select a Time Slot"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Details Form */}
          {currentStep === "details" && selectedSlot && (
            <motion.div
              key="details"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="p-6 md:p-8"
            >
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setCurrentStep("time")}
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Change Time</span>
                </button>
                <h3 className="text-xl font-bold">Your Details</h3>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-2">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 flex items-center">
                          <User className="h-4 w-4 mr-2" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 flex items-center">
                          <Mail className="h-4 w-4 mr-2" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Phone Number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select a project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Project Details & Goals
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleFormChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Briefly describe your project, goals, and any specific requirements..."
                      />
                    </div>

                    <div className="flex items-center space-x-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep("time")}
                        className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center">
                            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                            Processing...
                          </span>
                        ) : (
                          "Confirm Booking"
                        )}
                      </button>
                    </div>
                  </form>
                </div>

                {/* Summary */}
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                    <h4 className="font-bold text-lg mb-4">Booking Summary</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          Date:
                        </span>
                        <span className="font-medium">{selectedSlot.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          Time:
                        </span>
                        <span className="font-medium">
                          {selectedSlot.startTime} - {selectedSlot.endTime}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          Duration:
                        </span>
                        <span className="font-medium">30 minutes</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">
                          Meeting:
                        </span>
                        <span className="font-medium">Google Meet</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <h4 className="font-bold text-lg mb-4">What to Expect</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start space-x-3">
                        <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 dark:text-green-400 text-xs">
                            1
                          </span>
                        </div>
                        <span>Project requirements discussion</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 dark:text-green-400 text-xs">
                            2
                          </span>
                        </div>
                        <span>Technical feasibility assessment</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 dark:text-green-400 text-xs">
                            3
                          </span>
                        </div>
                        <span>Timeline & budget estimate</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 dark:text-green-400 text-xs">
                            4
                          </span>
                        </div>
                        <span>Next steps planning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === "confirmation" && (
            <motion.div
              key="confirmation"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 text-center"
            >
              <div className="max-w-md mx-auto">
                <div className="h-20 w-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Booking Confirmed! 🎉
                </h3>

                <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 mb-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Your consultation has been scheduled successfully.
                  </p>

                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Date:
                      </span>
                      <span className="font-medium">{selectedSlot?.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Time:
                      </span>
                      <span className="font-medium">
                        {selectedSlot?.startTime} - {selectedSlot?.endTime}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        With:
                      </span>
                      <span className="font-medium">Muhammad Hassan</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-gray-600 dark:text-gray-400">
                    You'll receive a confirmation email with:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Google Meet link</span>
                    </li>
                    <li className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Calendar invitation</span>
                    </li>
                    <li className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Preparation notes</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={resetBooking}
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all"
                  >
                    Book Another Session
                  </button>
                  <button
                    onClick={() => (window.location.href = "/#contact")}
                    className="w-full py-3 px-6 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    Back to Contact
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer Info */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center">
          <div className="text-2xl font-bold text-blue-600 mb-2">30 min</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Free Consultation
          </div>
        </div>
        <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center">
          <div className="text-2xl font-bold text-green-600 mb-2">24/7</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Support Available
          </div>
        </div>
        <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-center">
          <div className="text-2xl font-bold text-purple-600 mb-2">100%</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            No Commitment
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarBooking;
