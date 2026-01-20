"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Play,
  Zap,
  Cpu,
  Database,
  Smartphone,
  Cloud,
  Settings,
} from "lucide-react";

const InteractiveDemo = () => {
  const [selectedDemo, setSelectedDemo] = useState<
    "saas" | "mobile" | "api" | "dashboard"
  >("saas");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const demos = [
    {
      id: "saas",
      title: "SaaS Architecture Builder",
      icon: <Cloud className="h-6 w-6" />,
      description: "Build a scalable SaaS architecture in minutes",
      steps: [
        "User Authentication Setup",
        "Database Schema Design",
        "API Layer Creation",
        "Payment Integration",
        "Admin Dashboard",
        "Analytics & Reporting",
      ],
    },
    {
      id: "mobile",
      title: "Mobile App Prototype",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Create a production-ready mobile app",
      steps: [
        "UI/UX Design System",
        "State Management",
        "API Integration",
        "Push Notifications",
        "App Store Deployment",
        "Analytics Setup",
      ],
    },
    {
      id: "api",
      title: "API Development",
      icon: <Database className="h-6 w-6" />,
      description: "Design and deploy robust APIs",
      steps: [
        "Endpoint Design",
        "Authentication Layer",
        "Rate Limiting",
        "Caching Strategy",
        "Documentation",
        "Monitoring",
      ],
    },
    {
      id: "dashboard",
      title: "Real-time Dashboard",
      icon: <Settings className="h-6 w-6" />,
      description: "Build interactive analytics dashboards",
      steps: [
        "Data Pipeline Setup",
        "Chart Implementation",
        "Real-time Updates",
        "User Permissions",
        "Export Functionality",
        "Performance Optimization",
      ],
    },
  ];

  const startDemo = () => {
    setIsPlaying(true);
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsPlaying(false);
          setProgress(0);
        }, 1000);
      }
    }, 300);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
              <Zap className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">INTERACTIVE DEMO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Live{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Development
              </span>{" "}
              Simulator
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience how I build production-ready applications in real-time
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Demo Selector */}
          <div className="lg:col-span-1 space-y-4">
            {demos.map((demo) => (
              <motion.button
                key={demo.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedDemo(demo.id as any)}
                className={`w-full p-6 rounded-xl text-left transition-all ${
                  selectedDemo === demo.id
                    ? "bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border-2 border-blue-500"
                    : "bg-gray-800/50 border border-gray-700 hover:border-gray-600"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-3 rounded-lg ${
                      selectedDemo === demo.id
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {demo.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{demo.title}</h3>
                    <p className="text-sm text-gray-400">{demo.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Demo Visualizer */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg border border-gray-700">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold">
                    {demos.find((d) => d.id === selectedDemo)?.title}
                  </h3>
                  <p className="text-gray-400">
                    {demos.find((d) => d.id === selectedDemo)?.description}
                  </p>
                </div>
                <button
                  onClick={startDemo}
                  disabled={isPlaying}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold ${
                    isPlaying
                      ? "bg-green-600 text-white"
                      : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white"
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Building...</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      <span>Start Demo</span>
                    </>
                  )}
                </button>
              </div>

              {/* Progress Visualization */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span>Build Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-500 to-cyan-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: "spring" }}
                  />
                </div>
              </div>

              {/* Code Visualization */}
              <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="h-3 w-3 bg-red-500 rounded-full" />
                  <div className="h-3 w-3 bg-yellow-500 rounded-full" />
                  <div className="h-3 w-3 bg-green-500 rounded-full" />
                  <span className="text-gray-400 ml-4">development.js</span>
                </div>

                <div className="space-y-1">
                  {isPlaying && (
                    <>
                      <div className="text-green-400">
                        <span className="text-gray-500">1 | </span>Building{" "}
                        {selectedDemo.toUpperCase()} application...
                      </div>
                      <div className="text-cyan-400">
                        <span className="text-gray-500">2 | </span>✓
                        Architecture setup complete
                      </div>
                      <div className="text-cyan-400">
                        <span className="text-gray-500">3 | </span>✓ Database
                        schema created
                      </div>
                      <div className="text-cyan-400">
                        <span className="text-gray-500">4 | </span>✓ API
                        endpoints deployed
                      </div>
                      <div className="text-cyan-400">
                        <span className="text-gray-500">5 | </span>✓
                        Authentication configured
                      </div>
                      <div className="text-cyan-400">
                        <span className="text-gray-500">6 | </span>✓ Frontend
                        components built
                      </div>
                      <div className="text-green-400">
                        <span className="text-gray-500">7 | </span>🚀
                        Application ready for deployment
                      </div>
                    </>
                  )}
                  {!isPlaying && (
                    <div className="text-gray-400">
                      <span className="text-gray-500">1 | </span>// Click "Start
                      Demo" to see the development process
                    </div>
                  )}
                </div>
              </div>

              {/* Development Steps */}
              <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {demos
                  .find((d) => d.id === selectedDemo)
                  ?.steps.map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`p-4 rounded-lg border ${
                        index * 20 <= progress
                          ? "border-green-500/30 bg-green-500/10"
                          : "border-gray-700 bg-gray-800/50"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            index * 20 <= progress
                              ? "bg-green-500 text-white"
                              : "bg-gray-700 text-gray-400"
                          }`}
                        >
                          {index * 20 <= progress ? "✓" : index + 1}
                        </div>
                        <span className="font-medium">{step}</span>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              value: "4.2s",
              label: "Average Build Time",
              icon: <Zap className="h-6 w-6" />,
            },
            {
              value: "98.7%",
              label: "Success Rate",
              icon: <Cpu className="h-6 w-6" />,
            },
            {
              value: "200+",
              label: "Components Generated",
              icon: <Code2 className="h-6 w-6" />,
            },
            {
              value: "24/7",
              label: "Live Monitoring",
              icon: <Settings className="h-6 w-6" />,
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700"
            >
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
