"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Cloud,
  Database,
  Zap,
  Shield,
  Rocket,
  LineChart,
} from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "web-apps",
      title: "Web Applications",
      icon: <Code2 className="h-8 w-8" />,
      description:
        "Full-stack web applications with modern frameworks and best practices.",
      features: [
        "Next.js / React Applications",
        "TypeScript Development",
        "Real-time Features",
        "Progressive Web Apps",
        "SEO Optimization",
        "Performance Tuning",
      ],
      projects: 35,
      timeframe: "4-8 weeks",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind", "Node.js"],
    },
    {
      id: "mobile-apps",
      title: "Mobile Applications",
      icon: <Smartphone className="h-8 w-8" />,
      description: "Cross-platform mobile apps with native-like performance.",
      features: [
        "React Native Apps",
        "Flutter Development",
        "iOS & Android",
        "App Store Deployment",
        "Push Notifications",
        "Offline Support",
      ],
      projects: 18,
      timeframe: "6-12 weeks",
      technologies: ["React Native", "Flutter", "Firebase", "Redux"],
    },
    {
      id: "saas-platforms",
      title: "SaaS Platforms",
      icon: <Cloud className="h-8 w-8" />,
      description:
        "Scalable Software-as-a-Service platforms with subscription management.",
      features: [
        "Multi-tenancy Architecture",
        "Subscription Billing",
        "User Management",
        "Analytics Dashboard",
        "API Integration",
        "Scalable Infrastructure",
      ],
      projects: 12,
      timeframe: "8-16 weeks",
      technologies: ["Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
    },
    {
      id: "backend-apis",
      title: "Backend & APIs",
      icon: <Database className="h-8 w-8" />,
      description: "Robust backend systems and RESTful/GraphQL APIs.",
      features: [
        "RESTful APIs",
        "GraphQL Services",
        "Microservices",
        "Database Design",
        "Authentication",
        "Rate Limiting",
      ],
      projects: 25,
      timeframe: "2-6 weeks",
      technologies: ["Node.js", "Express", "GraphQL", "MongoDB", "Redis"],
    },
    {
      id: "mvp-development",
      title: "MVP Development",
      icon: <Rocket className="h-8 w-8" />,
      description: "Minimum Viable Products to validate ideas quickly.",
      features: [
        "Rapid Prototyping",
        "Core Features Only",
        "Investor-ready",
        "Scalable Foundation",
        "User Testing",
        "Iteration Support",
      ],
      projects: 22,
      timeframe: "4-8 weeks",
      technologies: ["Next.js", "Firebase", "Vercel", "Stripe"],
    },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      icon: <Zap className="h-8 w-8" />,
      description: "Improve existing applications speed and efficiency.",
      features: [
        "Lighthouse Optimization",
        "Database Tuning",
        "Caching Strategy",
        "Bundle Optimization",
        "CDN Integration",
        "Load Testing",
      ],
      projects: 15,
      timeframe: "1-4 weeks",
      technologies: ["Webpack", "Redis", "CDN", "Monitoring"],
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Services That <span className="text-gradient">Scale</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From concept to deployment and scaling — I handle the complete
              development lifecycle
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedService(service.id)}
              className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                selectedService === service.id
                  ? "border-blue-500 bg-blue-50 -900/20"
                  : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-lg"
              }`}
            >
              <div className="mb-4">
                <div
                  className={`inline-flex p-3 rounded-xl mb-4 ${
                    selectedService === service.id
                      ? "bg-blue-100 -900/30 text-blue-600 dark:text-blue-400"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Projects</span>
                  <span className="font-semibold">{service.projects}+</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Timeframe</span>
                  <span className="font-semibold">{service.timeframe}</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed View */}
        {selectedService && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="p-8 rounded-2xl glass-effect">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {services.find((s) => s.id === selectedService)?.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {
                      services.find((s) => s.id === selectedService)
                        ?.description
                    }
                  </p>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  Close
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {services
                      .find((s) => s.id === selectedService)
                      ?.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4">What You Get</h4>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white dark:bg-gray-800/50">
                      <div className="font-medium mb-2">Complete Package</div>
                      <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• Source code with documentation</li>
                        <li>• Deployment & hosting setup</li>
                        <li>• 30 days free support</li>
                        <li>• Training & handover</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-white dark:bg-gray-800/50">
                      <div className="font-medium mb-2">Success Metrics</div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">
                            {
                              services.find((s) => s.id === selectedService)
                                ?.projects
                            }
                            +
                          </div>
                          <div className="text-sm text-gray-600">Projects</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">
                            100%
                          </div>
                          <div className="text-sm text-gray-600">
                            Satisfaction
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              End-to-End Development Process
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Every project follows this structured approach for guaranteed
              success
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block" />

            {/* Steps */}
            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Discovery",
                  desc: "Understanding your goals and requirements",
                },
                {
                  step: "2",
                  title: "Planning",
                  desc: "Architecture design and tech stack selection",
                },
                {
                  step: "3",
                  title: "Design",
                  desc: "UI/UX design and prototype creation",
                },
                {
                  step: "4",
                  title: "Development",
                  desc: "Agile development with weekly updates",
                },
                {
                  step: "5",
                  title: "Testing",
                  desc: "Quality assurance and performance testing",
                },
                {
                  step: "6",
                  title: "Launch",
                  desc: "Deployment and post-launch support",
                },
              ].map((process, index) => (
                <div
                  key={process.step}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block w-1/2" />
                  <div className="relative w-full md:w-1/2">
                    <div
                      className={`p-6 rounded-2xl glass-effect ${
                        index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                      }`}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                          {process.step}
                        </div>
                        <h4 className="text-xl font-bold">{process.title}</h4>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {process.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper component
const CheckCircle = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default Services;
