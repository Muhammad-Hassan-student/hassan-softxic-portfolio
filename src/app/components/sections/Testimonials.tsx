"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Building,
  User,
  Calendar,
} from "lucide-react";
import testimonialsData from "@/data/testimonials.json";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<string | null>(
    null
  );

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const selectedData = selectedTestimonial
    ? testimonialsData.find((t) => t.id === selectedTestimonial)
    : null;

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Don't just take my word for it — hear from those who've worked
              with me
            </p>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="w-full"
            >
              <div className="max-w-4xl mx-auto">
                <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                  <Quote className="h-12 w-12 text-blue-300 dark:text-blue-700 mb-6" />

                  <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-8 italic">
                    "{testimonialsData[currentIndex].content}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                          {testimonialsData[currentIndex].name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-lg">
                            {testimonialsData[currentIndex].name}
                          </div>
                          <div className="text-gray-600 dark:text-gray-400">
                            {testimonialsData[currentIndex].role},{" "}
                            {testimonialsData[currentIndex].company}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonialsData[currentIndex].rating
                                ? "text-yellow-500 fill-current"
                                : "text-gray-300 dark:text-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedTestimonial(testimonial.id)}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 cursor-pointer transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-yellow-500 fill-current"
                          : "text-gray-300 dark:text-gray-700"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                {testimonial.content}
              </p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2 text-gray-500">
                  <Building className="h-4 w-4" />
                  <span>{testimonial.company}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span>{testimonial.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Details Modal */}
        {selectedData && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/50"
                onClick={() => setSelectedTestimonial(null)}
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl">
                        {selectedData.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">
                          {selectedData.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {selectedData.role} at {selectedData.company}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedTestimonial(null)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      ×
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Quote className="h-8 w-8 text-blue-300 dark:text-blue-700 mb-4" />
                      <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                        "{selectedData.content}"
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                        <div className="flex items-center space-x-3 mb-2">
                          <Building className="h-5 w-5 text-blue-500" />
                          <div>
                            <div className="font-medium">Project</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {selectedData.project}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                        <div className="flex items-center space-x-3 mb-2">
                          <Calendar className="h-5 w-5 text-green-500" />
                          <div>
                            <div className="font-medium">Duration</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {selectedData.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-6 w-6 ${
                              i < selectedData.rating
                                ? "text-yellow-500 fill-current"
                                : "text-gray-300 dark:text-gray-700"
                            }`}
                          />
                        ))}
                        <span className="ml-2 font-medium">
                          {selectedData.rating}.0/5.0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl glass-effect">
            {[
              { value: "100%", label: "Client Satisfaction" },
              { value: "50+", label: "Projects Delivered" },
              { value: "0", label: "Projects Abandoned" },
              { value: "4.9/5.0", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
