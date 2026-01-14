"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
} from "lucide-react";
import SmartForm from "./SmartForm";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "muhammadhassanakram87@gmail.com",
      description: "Response within 2 hours",
      action: "mailto:muhammadhassanakram87@gmail.com",
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      details: "+92 3202190049",
      description: "Quick chat for urgent inquiries",
      action: "https://wa.me/+92 320219004978900",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Book a Call",
      details: "30 min strategy session",
      description: "Free consultation call",
      action: "#booking",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Availability",
      details: "Mon-Fri, 9AM-6PM EST",
      description: "Response within 24 hours",
      action: "#availability",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Build</span> Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can turn your vision
              into reality
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  I'm currently available for new projects. Whether you need a
                  full-scale application or technical consultation, I'd love to
                  hear about your project.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.action}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">{method.title}</h4>
                      <p className="text-gray-900 dark:text-gray-100 font-medium">
                        {method.details}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {method.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Response Time Guarantee */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-bold">Response Time Guarantee</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      I respond to all inquiries within 24 hours
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Working Hours */}
              <div className="p-6 rounded-xl glass-effect">
                <h4 className="font-bold mb-4">Working Hours</h4>
                <div className="space-y-2">
                  {[
                    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM EST" },
                    { day: "Saturday", time: "10:00 AM - 2:00 PM EST" },
                    { day: "Sunday", time: "Emergency Only" },
                  ].map((schedule) => (
                    <div
                      key={schedule.day}
                      className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-800 last:border-0"
                    >
                      <span className="text-gray-700 dark:text-gray-300">
                        {schedule.day}
                      </span>
                      <span className="font-medium">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="p-8 rounded-2xl glass-effect">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and I'll get back to you with a
                  detailed proposal
                </p>
              </div>

              <SmartForm />
            </div>

            {/* What Happens Next */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
            >
              <h4 className="font-bold text-lg mb-4">
                What Happens After You Submit:
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    step: "1",
                    title: "Initial Review",
                    desc: "I review your project within 24 hours",
                  },
                  {
                    step: "2",
                    title: "Strategy Call",
                    desc: "Free 30-minute consultation call",
                  },
                  {
                    step: "3",
                    title: "Detailed Proposal",
                    desc: "Custom proposal with timeline & pricing",
                  },
                ].map((step) => (
                  <div key={step.step} className="text-center">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                      {step.step}
                    </div>
                    <div className="font-medium mb-1">{step.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {step.desc}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl glass-effect">
            {[
              { icon: "🔒", text: "100% Confidential" },
              { icon: "💰", text: "No Hidden Fees" },
              { icon: "⚖️", text: "Clear Contracts" },
              { icon: "🔄", text: "Flexible Engagement" },
            ].map((indicator, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3"
              >
                <span className="text-2xl">{indicator.icon}</span>
                <span className="font-medium">{indicator.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
