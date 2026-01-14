"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";

const Profile = () => {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 8; // 8 years experience

  const availability = {
    status: "available",
    nextSlot: "Next week",
    projects: 2,
    maxProjects: 4,
  };

  const strengths = [
    "Architecture Design",
    "Performance Optimization",
    "Team Leadership",
    "Client Communication",
    "Problem Solving",
    "Code Quality",
  ];

  return (
    <section id="profile" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Image & Basic Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                {/* Profile Image */}
                <div className="relative mb-8">
                  <div className="relative h-64 w-64 mx-auto rounded-2xl overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl">
                    {/* Placeholder - Replace with actual image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">MH</span>
                    </div>
                    <div className="absolute bottom-4 right-4 h-12 w-12 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Experience</div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {startYear} - {currentYear} ({currentYear - startYear}+
                        years)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-gray-600 dark:text-gray-400">
                        Available Worldwide (Remote)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Certifications</div>
                      <div className="text-gray-600 dark:text-gray-400">
                        Next.js, AWS, React Native
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-gray-600 dark:text-gray-400">
                        Within 2 hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="space-y-8">
                {/* Introduction */}
                <div>
                  <h2 className="text-4xl font-bold mb-6">
                    Hi, I'm{" "}
                    <span className="text-gradient">Muhammad Hassan</span>
                  </h2>
                  <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300">
                    <p>
                      I'm a Senior Full-Stack Developer with{" "}
                      {currentYear - startYear}+ years of experience building
                      scalable web and mobile applications. As the founder of
                      SOFTXIC Agency, I lead a team of talented developers to
                      deliver exceptional digital products.
                    </p>
                    <p>
                      My journey started with a Computer Science degree and
                      evolved through working with startups, enterprises, and
                      launching my own products. This diverse experience gives
                      me a unique perspective on both technical and business
                      challenges.
                    </p>
                    <p>
                      I believe in <strong>clean code</strong>,{" "}
                      <strong>scalable architecture</strong>, and{" "}
                      <strong>transparent communication</strong>. Every project
                      is an opportunity to solve meaningful problems and create
                      lasting value.
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        Current Availability
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="font-medium text-green-600 dark:text-green-400">
                          {availability.status === "available"
                            ? "Available for new projects"
                            : "Limited availability"}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">
                        {availability.projects}/{availability.maxProjects}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Active Projects
                      </div>
                    </div>
                  </div>

                  <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${
                          (availability.projects / availability.maxProjects) *
                          100
                        }%`,
                      }}
                      className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                    />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Next available slot:{" "}
                    <strong>{availability.nextSlot}</strong>
                  </p>
                </div>

                {/* Core Strengths */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Core Strengths</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {strengths.map((strength, index) => (
                      <motion.div
                        key={strength}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="font-medium">{strength}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Working Style */}
                <div className="p-6 rounded-2xl glass-effect">
                  <h3 className="text-2xl font-bold mb-4">My Working Style</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                        What I Do
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Focus on long-term maintainability</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Provide regular progress updates</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Offer architecture guidance</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                        What I Don't Do
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start space-x-2">
                          <div className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0">
                            ✗
                          </div>
                          <span>Cut corners for quick wins</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0">
                            ✗
                          </div>
                          <span>Work with unrealistic deadlines</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0">
                            ✗
                          </div>
                          <span>Use outdated technologies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
