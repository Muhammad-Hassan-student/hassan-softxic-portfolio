"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  DollarSign,
  Target,
  Zap,
  Code,
  Smartphone,
  Database,
  Cloud,
  CheckCircle,
  Calculator,
  FileText,
  Download,
} from "lucide-react";

const ProjectPlanner = () => {
  const [projectType, setProjectType] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");

  const projectTypes = [
    {
      id: "web-app",
      name: "Web Application",
      icon: <Code className="h-5 w-5" />,
    },
    {
      id: "mobile-app",
      name: "Mobile App",
      icon: <Smartphone className="h-5 w-5" />,
    },
    { id: "saas", name: "SaaS Platform", icon: <Cloud className="h-5 w-5" /> },
    {
      id: "ecommerce",
      name: "E-commerce Store",
      icon: <DollarSign className="h-5 w-5" />,
    },
    {
      id: "api",
      name: "API & Backend",
      icon: <Database className="h-5 w-5" />,
    },
    { id: "mvp", name: "MVP Development", icon: <Zap className="h-5 w-5" /> },
  ];

  const featureOptions = [
    "User Authentication",
    "Payment Integration",
    "Admin Dashboard",
    "Real-time Features",
    "Mobile Responsive",
    "SEO Optimization",
    "Analytics Dashboard",
    "Email Notifications",
    "File Upload",
    "API Integration",
    "Multi-language",
    "Dark Mode",
  ];

  const calculateEstimate = () => {
    let baseCost = 0;
    let baseTime = 0;

    // Base cost by project type
    switch (projectType) {
      case "web-app":
        baseCost = 3000;
        baseTime = 6;
        break;
      case "mobile-app":
        baseCost = 5000;
        baseTime = 8;
        break;
      case "saas":
        baseCost = 8000;
        baseTime = 12;
        break;
      case "ecommerce":
        baseCost = 4000;
        baseTime = 8;
        break;
      case "api":
        baseCost = 2000;
        baseTime = 4;
        break;
      case "mvp":
        baseCost = 2500;
        baseTime = 6;
        break;
    }

    // Add cost for features
    const featureCost = features.length * 500;
    const featureTime = features.length * 0.5;

    // Adjust for timeline
    let timelineMultiplier = 1;
    if (timeline === "urgent") timelineMultiplier = 1.5;
    if (timeline === "flexible") timelineMultiplier = 0.9;

    const totalCost = (baseCost + featureCost) * timelineMultiplier;
    const totalTime = (baseTime + featureTime) * timelineMultiplier;

    return {
      estimatedCost: `$${totalCost.toLocaleString()}`,
      estimatedTime: `${Math.round(totalTime)} weeks`,
      confidence: features.length > 0 ? "High" : "Medium",
    };
  };

  const estimate = calculateEstimate();

  const generateProposal = () => {
    const proposal = {
      projectType,
      features,
      timeline,
      budget,
      estimate,
      date: new Date().toISOString(),
      contact: "hassan@softxic.com",
    };

    // Download as JSON
    const dataStr = JSON.stringify(proposal, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = `project-proposal-${new Date().getTime()}.json`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  return (
    <section id="project-planner" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 mb-4">
              <Calculator className="h-5 w-5 text-purple-600" />
              <span className="font-medium ml-2">
                Interactive Project Planner
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Plan Your <span className="text-gradient">Project</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Get instant estimates, timelines, and recommendations for your
              project
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Project Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Type Selection */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Target className="h-5 w-5 mr-2" />
                What type of project do you need?
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setProjectType(type.id)}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      projectType === type.id
                        ? "border-blue-500 bg-blue-50 -900/20"
                        : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div
                        className={`p-2 rounded-lg ${
                          projectType === type.id
                            ? "bg-blue-100 -900/30 text-blue-600 dark:text-blue-400"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        }`}
                      >
                        {type.icon}
                      </div>
                      <span className="font-semibold">{type.name}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Features Selection */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                Select required features
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {featureOptions.map((feature) => (
                  <motion.button
                    key={feature}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (features.includes(feature)) {
                        setFeatures(features.filter((f) => f !== feature));
                      } else {
                        setFeatures([...features, feature]);
                      }
                    }}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      features.includes(feature)
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{feature}</span>
                      {features.includes(feature) && (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Timeline & Budget */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Timeline
                </h3>
                <div className="space-y-4">
                  {["urgent", "standard", "flexible"].map((option) => (
                    <button
                      key={option}
                      onClick={() => setTimeline(option)}
                      className={`w-full p-3 rounded-lg text-left transition-all ${
                        timeline === option
                          ? "bg-white dark:bg-gray-900 shadow-md"
                          : "hover:bg-white/50 dark:hover:bg-gray-900/50"
                      }`}
                    >
                      <div className="font-medium capitalize">{option}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {option === "urgent" && "1-3 months (Priority)"}
                        {option === "standard" && "3-6 months (Normal)"}
                        {option === "flexible" && "6+ months (No rush)"}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Budget Range
                </h3>
                <div className="space-y-4">
                  {["$1k-$5k", "$5k-$10k", "$10k-$25k", "$25k+"].map(
                    (range) => (
                      <button
                        key={range}
                        onClick={() => setBudget(range)}
                        className={`w-full p-3 rounded-lg text-left transition-all ${
                          budget === range
                            ? "bg-white dark:bg-gray-900 shadow-md"
                            : "hover:bg-white/50 dark:hover:bg-gray-900/50"
                        }`}
                      >
                        <div className="font-medium">{range}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {range === "$1k-$5k" && "Small project / MVP"}
                          {range === "$5k-$10k" && "Medium project"}
                          {range === "$10k-$25k" && "Large project"}
                          {range === "$25k+" && "Enterprise / Complex"}
                        </div>
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Estimate & Proposal */}
          <div className="space-y-8">
            {/* Estimate Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black text-white">
              <h3 className="text-xl font-bold mb-6">Project Estimate</h3>

              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-400 mb-2">
                    Estimated Cost
                  </div>
                  <div className="text-3xl font-bold text-green-400">
                    {estimate.estimatedCost}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-2">
                    Estimated Timeline
                  </div>
                  <div className="text-2xl font-bold">
                    {estimate.estimatedTime}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-400 mb-2">
                    Confidence Level
                  </div>
                  <div className="flex items-center">
                    <div
                      className={`h-2 flex-1 rounded-full ${
                        estimate.confidence === "High"
                          ? "bg-gradient-to-r from-green-500 to-emerald-500"
                          : "bg-gradient-to-r from-yellow-500 to-orange-500"
                      }`}
                    />
                    <span className="ml-3 font-medium">
                      {estimate.confidence}
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <div className="text-sm text-gray-400 mb-3">
                    What's included:
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Complete source code
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      30 days free support
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Documentation & training
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Deployment assistance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Generate Proposal */}
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Get Detailed Proposal
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Generate a detailed proposal with exact specifications, timeline
                breakdown, and next steps.
              </p>

              <button
                onClick={generateProposal}
                disabled={!projectType}
                className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-all ${
                  projectType
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600"
                    : "bg-gray-300 dark:bg-gray-800 text-gray-500 cursor-not-allowed"
                }`}
              >
                <Download className="h-5 w-5 mr-2" />
                Download Proposal
              </button>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                No email required • Instant download
              </p>
            </div>

            {/* Quick Contact */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
              <h4 className="font-bold mb-4">Want to discuss details?</h4>
              <a
                href="#contact"
                className="block w-full py-3 px-6 bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-center transition-colors"
              >
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPlanner;
