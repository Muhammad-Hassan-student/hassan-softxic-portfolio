"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Video, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";

const BookingCTA = () => {
  return (
    <section id="booking" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 mb-6">
                <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">Free Strategy Session</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Discuss Your{" "}
                <span className="text-gradient">Project</span>
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Schedule a free 30-minute consultation to discuss your project
                requirements, get technical insights, and receive a personalized
                development plan.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "No commitment or sales pitch",
                  "Technical feasibility assessment",
                  "Timeline & budget estimate",
                  "Architecture recommendations",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Booking Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/20">
                      <Video className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        30-Minute Consultation
                      </h3>
                      <p className="text-blue-100">
                        Video call via Google Meet
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-200" />
                      <div>
                        <div className="font-medium">30 Minutes</div>
                        <div className="text-sm text-blue-200">
                          Focused discussion
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-blue-200" />
                      <div>
                        <div className="font-medium">Flexible Scheduling</div>
                        <div className="text-sm text-blue-200">
                          Mon-Fri, 9AM-6PM EST
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  href="/booking"
                  className="block w-full py-4 px-6 bg-white text-blue-600 font-bold rounded-lg text-center hover:bg-gray-100 transition-colors"
                >
                  Book Free Session
                </Link>

                <p className="text-center text-blue-200 text-sm mt-4">
                  No credit card required • Cancel anytime
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 h-24 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 h-20 w-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-20 blur-xl" />
            </motion.div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100+", label: "Sessions Completed" },
              { value: "30 min", label: "Average Duration" },
              { value: "4.9/5.0", label: "Client Rating" },
              { value: "24h", label: "Response Time" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
