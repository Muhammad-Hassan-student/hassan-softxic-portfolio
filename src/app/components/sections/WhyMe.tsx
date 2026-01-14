"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Code2,
  Clock,
  Award,
} from "lucide-react";

const WhyMe = () => {
  const developerStrengths = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Clean Code Architecture",
      description:
        "Modular, maintainable code following industry best practices and design patterns",
      metrics: "95%+ test coverage",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description:
        "Expert in optimizing applications for speed, scalability, and user experience",
      metrics: "95+ Lighthouse scores",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security First Approach",
      description:
        "Built-in security measures and following OWASP guidelines from day one",
      metrics: "Zero security incidents",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Scalable Solutions",
      description:
        "Architecture designed for growth, handling from 100 to 1M+ users",
      metrics: "Handles 100x traffic spikes",
    },
  ];

  const agencyStrengths = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Leadership",
      description:
        "Managing and mentoring development teams for consistent quality delivery",
      metrics: "8+ team members",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On-Time Delivery",
      description:
        "Strict adherence to timelines with transparent progress tracking",
      metrics: "100% on-time delivery",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Assurance",
      description:
        "Comprehensive testing and quality checks at every development stage",
      metrics: "99.9% bug-free releases",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Business Alignment",
      description:
        "Focus on delivering business value, not just technical solutions",
      metrics: "40% average ROI",
    },
  ];

  return (
    <section id="why-me" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The unique combination of technical expertise and business
              understanding that sets me apart
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* As a Developer */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">As a Developer</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Technical excellence and architectural expertise
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {developerStrengths.map((strength, index) => (
                  <motion.div
                    key={strength.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex-shrink-0">
                        {strength.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-1">{strength.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {strength.description}
                        </p>
                        <div className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 inline-block">
                          {strength.metrics}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* As an Agency */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center space-x-3 mb-8">
                <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">As SOFTXIC Agency</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Reliable delivery and business partnership
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {agencyStrengths.map((strength, index) => (
                  <motion.div
                    key={strength.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex-shrink-0">
                        {strength.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-1">{strength.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          {strength.description}
                        </p>
                        <div className="text-xs font-medium px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 inline-block">
                          {strength.metrics}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Unique Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="p-8 rounded-2xl glass-effect">
            <h3 className="text-2xl font-bold mb-6 text-center">
              The <span className="text-gradient">Best of Both Worlds</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">
                  Founder's Perspective
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I understand business challenges and focus on ROI, not just
                  technical solutions
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <Code2 className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Technical Depth</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Hands-on expertise with modern technologies and best practices
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Team Scale</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Access to a full team when needed, with my personal oversight
                  on every project
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* What Others Get Wrong */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
            <h3 className="text-2xl font-bold mb-6 text-center">
              What Others <span className="text-red-600">Get Wrong</span> That I
              Get Right
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  wrong: "Focus on cheap hourly rates",
                  right: "Focus on delivering business value and ROI",
                  impact: "Higher long-term savings",
                },
                {
                  wrong: "Over-promise and under-deliver",
                  right: "Realistic timelines with contingency buffers",
                  impact: "100% on-time delivery rate",
                },
                {
                  wrong: "Technical complexity for show",
                  right: "Simple solutions that solve real problems",
                  impact: "Easier maintenance & scaling",
                },
                {
                  wrong: "One-size-fits-all approach",
                  right: "Custom solutions tailored to your needs",
                  impact: "Perfect product-market fit",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.wrong}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-white/70 dark:bg-gray-900/70"
                >
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 dark:text-red-400 font-bold">
                        ✗
                      </span>
                    </div>
                    <div className="text-sm font-medium">{item.wrong}</div>
                  </div>

                  <div className="flex items-start space-x-3 mb-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 dark:text-green-400 font-bold">
                        ✓
                      </span>
                    </div>
                    <div className="text-sm font-medium">{item.right}</div>
                  </div>

                  <div className="pl-9">
                    <div className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 inline-block">
                      Result: {item.impact}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMe;
