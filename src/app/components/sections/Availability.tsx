"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

const Availability = () => {
  const [availability, setAvailability] = useState({
    status: "available",
    nextSlot: "Next week",
    currentProjects: 2,
    maxProjects: 4,
    nextAvailableDate: "Jan 25, 2026",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // In real implementation, fetch from API
      setAvailability({
        status: "available",
        nextSlot: "Next week",
        currentProjects: 2,
        maxProjects: 4,
        nextAvailableDate: "Jan 25, 2026",
      });
    }, 1000);
  }, []);

  const calculateAvailability = () => {
    const percentage =
      (availability.currentProjects / availability.maxProjects) * 100;
    if (percentage >= 90)
      return {
        status: "limited",
        color: "text-yellow-600",
        bg: "bg-yellow-100",
      };
    if (percentage >= 75)
      return { status: "busy", color: "text-orange-600", bg: "bg-orange-100" };
    return { status: "available", color: "text-green-600", bg: "bg-green-100" };
  };

  const avail = calculateAvailability();

  const timeSlots = [
    { day: "Monday", slots: ["9:00 AM", "2:00 PM", "4:30 PM"] },
    { day: "Tuesday", slots: ["10:00 AM", "3:00 PM"] },
    { day: "Wednesday", slots: ["9:30 AM", "1:00 PM", "5:00 PM"] },
    { day: "Thursday", slots: ["11:00 AM", "4:00 PM"] },
    { day: "Friday", slots: ["9:00 AM", "2:30 PM"] },
  ];

  return (
    <section id="availability" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Current <span className="text-gradient">Availability</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real-time availability status and booking information
            </p>
          </motion.div>
        </div>

        {/* Availability Status */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div className="mb-6 md:mb-0">
                <div className="flex items-center space-x-3 mb-4">
                  <div
                    className={`h-4 w-4 rounded-full ${avail.color.replace(
                      "text",
                      "bg"
                    )} animate-pulse`}
                  />
                  <h3 className="text-2xl font-bold">Availability Status</h3>
                </div>
                <div
                  className={`inline-flex items-center px-4 py-2 rounded-full ${avail.bg} ${avail.color}`}
                >
                  {avail.status === "available" && (
                    <CheckCircle className="h-4 w-4 mr-2" />
                  )}
                  {avail.status === "limited" && (
                    <AlertCircle className="h-4 w-4 mr-2" />
                  )}
                  {avail.status === "busy" && (
                    <XCircle className="h-4 w-4 mr-2" />
                  )}
                  <span className="font-medium capitalize">{avail.status}</span>
                </div>
              </div>

              <div className="text-center md:text-right">
                <div className="text-4xl font-bold mb-2">
                  {availability.currentProjects}/{availability.maxProjects}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Active Projects
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Current Capacity</span>
                <span>
                  {Math.round(
                    (availability.currentProjects / availability.maxProjects) *
                      100
                  )}
                  %
                </span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${
                      (availability.currentProjects /
                        availability.maxProjects) *
                      100
                    }%`,
                  }}
                  className={`h-full ${
                    avail.status === "available"
                      ? "bg-gradient-to-r from-green-500 to-emerald-500"
                      : avail.status === "limited"
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                      : "bg-gradient-to-r from-orange-500 to-red-500"
                  }`}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-white/50 dark:bg-gray-900/50">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  <div>
                    <div className="font-medium">Next Available Slot</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {availability.nextSlot}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/50 dark:bg-gray-900/50">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-500" />
                  <div>
                    <div className="font-medium">Estimated Start Date</div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {availability.nextAvailableDate}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="p-8 rounded-2xl glass-effect">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Calendar className="h-6 w-6 mr-3" />
              Available Booking Slots
            </h3>

            <div className="grid md:grid-cols-5 gap-4">
              {timeSlots.map((day) => (
                <div key={day.day} className="text-center">
                  <div className="font-bold mb-3">{day.day}</div>
                  <div className="space-y-2">
                    {day.slots.map((slot) => (
                      <motion.button
                        key={slot}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-3 py-2 text-sm rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        {slot}
                      </motion.button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3" />
              Recommendations Based on Availability
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-white/70 dark:bg-gray-900/70">
                <h4 className="font-bold mb-3 text-green-600 dark:text-green-400">
                  🚀 For Urgent Projects
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Start with discovery call next week</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Reserve slot with 20% deposit</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Expedited timeline available</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white/70 dark:bg-gray-900/70">
                <h4 className="font-bold mb-3 text-blue-600 dark:text-blue-400">
                  📅 For Planning Ahead
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Book slot 2-4 weeks in advance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Extended planning phase available</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Staggered payment options</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Your Free Strategy Call
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                30-minute call • No commitment • Custom proposal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Availability;
