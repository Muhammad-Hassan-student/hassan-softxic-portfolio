"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Lightbulb,
  Cpu,
  Database,
  Smartphone,
  Cloud,
  Zap,
  Lock,
} from "lucide-react";

const ProblemSolution = () => {
  const [selectedProblem, setSelectedProblem] = useState<string | null>("saas");

  const problems = [
    {
      id: "saas",
      title: "SaaS Platform",
      icon: <Cloud className="h-6 w-6" />,
      problem:
        "Need a scalable multi-tenant platform with subscription billing",
      solution:
        "Build with Next.js, Stripe, and PostgreSQL using row-level security",
      stack: ["Next.js 14", "PostgreSQL", "Stripe", "Tailwind", "AWS"],
      timeline: "8-12 weeks",
      architecture: "Microservices with API Gateway",
      metrics: {
        scalability: "100k+ users",
        performance: "< 100ms API response",
        cost: "$200-500/month",
      },
    },
    {
      id: "mobile",
      title: "Mobile App",
      icon: <Smartphone className="h-6 w-6" />,
      problem: "Cross-platform app with real-time features and offline support",
      solution: "React Native with Firebase and Redux for state management",
      stack: ["React Native", "Firebase", "Redux", "TypeScript"],
      timeline: "10-16 weeks",
      architecture: "MVVM with Clean Architecture",
      metrics: {
        scalability: "50k+ downloads",
        performance: "60 FPS smooth",
        cost: "$100-300/month",
      },
    },
    {
      id: "backend",
      title: "Backend System",
      icon: <Database className="h-6 w-6" />,
      problem: "High-traffic API with authentication and real-time updates",
      solution: "Node.js microservices with Redis caching and WebSockets",
      stack: ["Node.js", "Redis", "WebSockets", "Docker", "AWS"],
      timeline: "6-10 weeks",
      architecture: "Event-driven microservices",
      metrics: {
        scalability: "1M+ requests/day",
        performance: "< 50ms cache hit",
        cost: "$300-800/month",
      },
    },
    {
      id: "performance",
      title: "Performance Issues",
      icon: <Zap className="h-6 w-6" />,
      problem: "Slow application with poor Lighthouse scores",
      solution: "Comprehensive optimization strategy",
      stack: ["Webpack", "CDN", "Redis", "Monitoring"],
      timeline: "2-4 weeks",
      architecture: "Optimized delivery pipeline",
      metrics: {
        scalability: "Improved by 70%",
        performance: "95+ Lighthouse",
        cost: "Reduced by 40%",
      },
    },
  ];

  const selectedData = problems.find((p) => p.id === selectedProblem);

  return (
    <section id="problem-solution" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              From <span className="text-red-500">Problem</span> to{" "}
              <span className="text-green-500">Solution</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See how I approach real-world challenges with practical, scalable
              solutions
            </p>
          </motion.div>
        </div>

        {/* Problem Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {problems.map((problem) => (
            <motion.button
              key={problem.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedProblem(problem.id)}
              className={`p-6 rounded-xl text-left transition-all ${
                selectedProblem === problem.id
                  ? "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-500"
                  : "bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className={`p-2 rounded-lg ${
                    selectedProblem === problem.id
                      ? "bg-blue-100 -900/50 text-blue-600 dark:text-blue-400"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {problem.icon}
                </div>
                <h3 className="font-bold text-lg">{problem.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                {problem.problem}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Solution Details */}
        {selectedData && (
          <motion.div
            key={selectedProblem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Problem Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-1"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800/30">
                  <div className="flex items-center space-x-3 mb-6">
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                    <h3 className="text-2xl font-bold">The Challenge</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-white/50 dark:bg-gray-900/50 rounded-xl">
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        {selectedData.problem}
                      </p>
                    </div>
                    <div className="p-4 bg-white/50 dark:bg-gray-900/50 rounded-xl">
                      <h4 className="font-semibold mb-2">
                        Common Pain Points:
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start space-x-2">
                          <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Scalability limitations</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Performance bottlenecks</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>High maintenance costs</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>Technical debt accumulation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Solution Column */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-2"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800/30">
                  <div className="flex items-center space-x-3 mb-6">
                    <Lightbulb className="h-8 w-8 text-green-500" />
                    <h3 className="text-2xl font-bold">My Solution</h3>
                  </div>

                  <div className="space-y-6">
                    {/* Solution Overview */}
                    <div className="p-4 bg-white/50 dark:bg-gray-900/50 rounded-xl">
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        {selectedData.solution}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold mb-3">
                        Recommended Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedData.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-2 rounded-lg bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Architecture & Timeline */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 bg-white/50 dark:bg-gray-900/50 rounded-xl">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <Cpu className="h-4 w-4 mr-2" />
                          Architecture
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {selectedData.architecture}
                        </p>
                      </div>
                      <div className="p-4 bg-white/50 dark:bg-gray-900/50 rounded-xl">
                        <h4 className="font-semibold mb-2">Timeline</h4>
                        <div className="text-2xl font-bold text-gradient">
                          {selectedData.timeline}
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          From concept to production
                        </p>
                      </div>
                    </div>

                    {/* Expected Metrics */}
                    <div>
                      <h4 className="font-semibold mb-3">Expected Results:</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(selectedData.metrics).map(
                          ([key, value]) => (
                            <div
                              key={key}
                              className="p-3 bg-white/50 dark:bg-gray-900/50 rounded-xl text-center"
                            >
                              <div className="text-sm text-gray-500 mb-1 capitalize">
                                {key}
                              </div>
                              <div className="font-bold text-lg">{value}</div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* Why This Works */}
                    <div className="p-4 bg-white/50 dark:bg-gray-900/50 rounded-xl">
                      <h4 className="font-semibold mb-2">
                        Why This Approach Works:
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-start space-x-2">
                          <Lock className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Proven in production with similar scale</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Zap className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Optimized for performance from day one</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Cloud className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            Scalable architecture allows future growth
                          </span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Database className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>
                            Maintainable codebase reduces long-term costs
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <h3 className="text-2xl font-bold mb-4">
              Have a Different Challenge?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements
              and create a customized solution that perfectly fits your needs.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all"
            >
              <Lightbulb className="h-5 w-5 mr-2" />
              Get a Custom Solution Proposal
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
