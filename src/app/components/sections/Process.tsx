"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Layout,
  Code,
  TestTube,
  Rocket,
  Users,
  CheckCircle,
  Clock,
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      step: 1,
      title: "Discovery",
      icon: <Search className="h-6 w-6" />,
      description:
        "Deep dive into your business goals and technical requirements",
      duration: "1-2 weeks",
      deliverables: [
        "Project Requirements Document",
        "Technical Feasibility Analysis",
        "Project Timeline Estimate",
        "Initial Architecture Proposal",
      ],
      activities: [
        "Stakeholder interviews",
        "Market research",
        "Competitor analysis",
        "Technical assessment",
      ],
    },
    {
      step: 2,
      title: "Planning",
      icon: <Layout className="h-6 w-6" />,
      description: "Detailed project planning and architecture design",
      duration: "1-2 weeks",
      deliverables: [
        "System Architecture Design",
        "Technical Specification Document",
        "Development Roadmap",
        "Milestone Definitions",
      ],
      activities: [
        "System design sessions",
        "Technology stack selection",
        "Database design",
        "API specification",
      ],
    },
    {
      step: 3,
      title: "Design",
      icon: <Layout className="h-6 w-6" />,
      description: "User experience and interface design",
      duration: "2-3 weeks",
      deliverables: [
        "Wireframes & Prototypes",
        "UI/UX Design System",
        "Style Guide",
        "Design Mockups",
      ],
      activities: [
        "User flow mapping",
        "Wireframing",
        "Visual design",
        "Prototype testing",
      ],
    },
    {
      step: 4,
      title: "Development",
      icon: <Code className="h-6 w-6" />,
      description: "Agile development with continuous integration",
      duration: "Project dependent",
      deliverables: [
        "Weekly Progress Reports",
        "Code Repository",
        "Test Coverage Reports",
        "Deployment Pipeline",
      ],
      activities: [
        "Sprint planning",
        "Daily standups",
        "Code reviews",
        "Continuous integration",
      ],
    },
    {
      step: 5,
      title: "Testing",
      icon: <TestTube className="h-6 w-6" />,
      description: "Comprehensive quality assurance",
      duration: "1-2 weeks",
      deliverables: [
        "Test Results Report",
        "Bug Fix Log",
        "Performance Audit",
        "Security Assessment",
      ],
      activities: [
        "Unit testing",
        "Integration testing",
        "Performance testing",
        "User acceptance testing",
      ],
    },
    {
      step: 6,
      title: "Launch",
      icon: <Rocket className="h-6 w-6" />,
      description: "Deployment and post-launch support",
      duration: "1 week",
      deliverables: [
        "Production Deployment",
        "Documentation",
        "Training Materials",
        "Support Plan",
      ],
      activities: [
        "Production deployment",
        "Monitoring setup",
        "Team training",
        "Launch support",
      ],
    },
  ];

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A structured approach that ensures quality, transparency, and
              successful delivery
            </p>
          </motion.div>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 hidden md:block" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step Content */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-2xl glass-effect ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="h-4 w-4" />
                          <span>{step.duration}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {step.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-gray-600 dark:text-gray-400"
                            >
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Users className="h-4 w-4 mr-2 text-blue-500" />
                          Activities
                        </h4>
                        <ul className="space-y-2">
                          {step.activities.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-gray-600 dark:text-gray-400"
                            >
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Step Indicator */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why This Process Works</h3>
            <p className="text-gray-600 dark:text-gray-400">
              A methodology built on industry best practices and 8+ years of
              experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description:
                  "Weekly updates, clear communication, and full visibility into progress",
                icon: "👁️",
              },
              {
                title: "Quality",
                description:
                  "Rigorous testing, code reviews, and best practices ensure top quality",
                icon: "🏆",
              },
              {
                title: "Flexibility",
                description:
                  "Adaptable approach that evolves with your changing requirements",
                icon: "🔄",
              },
              {
                title: "Efficiency",
                description:
                  "Optimized workflows and proven methodologies deliver faster results",
                icon: "⚡",
              },
              {
                title: "Collaboration",
                description:
                  "Close partnership with regular feedback and collaboration sessions",
                icon: "🤝",
              },
              {
                title: "Scalability",
                description:
                  "Architecture designed for future growth and changing needs",
                icon: "📈",
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's discuss how my structured process can bring your vision to
              life with quality, speed, and transparency.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all"
            >
              <Rocket className="h-5 w-5 mr-2" />
              Start Your Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
