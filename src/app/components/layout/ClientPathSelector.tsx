"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, User, Rocket, CheckCircle, XCircle } from "lucide-react";
import AnimatedButton from "@/app/components/ui/AnimatedButton";

type ClientType = "startup" | "company" | "individual" | null;

const ClientPathSelector = () => {
  const [selectedPath, setSelectedPath] = useState<ClientType>(null);

  const paths = [
    {
      id: "startup",
      title: "🚀 Startup Founder",
      icon: <Rocket className="h-8 w-8" />,
      description:
        "You need an MVP fast, with scalable architecture from day one.",
      features: [
        "Rapid MVP Development",
        "Scalable Architecture",
        "Fundraising-ready Code",
        "Equity-friendly Models",
      ],
      cta: "Build Your MVP",
    },
    {
      id: "company",
      title: "🏢 Company / CTO",
      icon: <Building2 className="h-8 w-8" />,
      description:
        "You need enterprise-grade solutions with maintainable code.",
      features: [
        "Enterprise Architecture",
        "Team Collaboration",
        "Maintainable Codebase",
        "Performance Optimization",
      ],
      cta: "Scale Your Tech",
    },
    {
      id: "individual",
      title: "👤 Individual Client",
      icon: <User className="h-8 w-8" />,
      description: "You have a specific idea that needs expert execution.",
      features: [
        "Custom Solutions",
        "Direct Communication",
        "Flexible Engagement",
        "Quick Turnaround",
      ],
      cta: "Start Your Project",
    },
  ];

  const getPathContent = (type: ClientType) => {
    switch (type) {
      case "startup":
        return {
          title: "Perfect for Startups",
          description:
            "I specialize in turning ideas into fundable MVPs with clean, scalable code that investors love.",
          benefits: [
            "MVP in 4-8 weeks",
            "Investor-ready documentation",
            "Scalable from day one",
            "Technical co-founder guidance",
          ],
          notForYou: [
            "If you want the cheapest solution",
            "If you have unlimited timeline",
            "If you want to micromanage tech decisions",
          ],
        };
      case "company":
        return {
          title: "Enterprise Partnership",
          description:
            "I provide senior-level expertise to scale your technology and mentor your team.",
          benefits: [
            "Architecture reviews",
            "Performance optimization",
            "Team training & mentoring",
            "Code quality audits",
          ],
          notForYou: [
            "If you need junior developers",
            "If you have rigid waterfall processes",
            "If you want offshore rates",
          ],
        };
      case "individual":
        return {
          title: "Personal Project Excellence",
          description:
            "I bring professional execution to your personal projects with transparent communication.",
          benefits: [
            "Fixed-price packages available",
            "Weekly progress updates",
            "Direct founder involvement",
            "Post-launch support",
          ],
          notForYou: [
            "If you have unrealistic budgets",
            "If you want to copy competitors exactly",
            "If you need it done yesterday",
          ],
        };
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Choose Your Path</h2>
        <p className="text-gray-600 dark:text-gray-400">
          I tailor my approach based on your specific needs
        </p>
      </div>

      {/* Path Selector Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {paths.map((path) => (
          <motion.button
            key={path.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedPath(path.id as ClientType)}
            className={`p-6 rounded-2xl border-2 transition-all ${
              selectedPath === path.id
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div
                className={`p-3 rounded-full ${
                  selectedPath === path.id
                    ? "bg-blue-100 dark:bg-blue-900/30"
                    : "bg-gray-100 dark:bg-gray-800"
                }`}
              >
                {path.icon}
              </div>
              <h3 className="text-xl font-semibold">{path.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {path.description}
              </p>
              <div className="space-y-2">
                {path.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Dynamic Content */}
      <AnimatePresence mode="wait">
        {selectedPath && getPathContent(selectedPath) && (
          <motion.div
            key={selectedPath}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-8 rounded-2xl glass-effect"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold mb-6">
                  {getPathContent(selectedPath)!.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {getPathContent(selectedPath)!.description}
                </p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Perfect for you if:</h4>
                  {getPathContent(selectedPath)!.benefits.map(
                    (benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Not For You */}
              <div>
                <h4 className="font-semibold text-lg mb-6 text-red-600 dark:text-red-400">
                  Might not be the best fit if:
                </h4>
                <div className="space-y-4">
                  {getPathContent(selectedPath)!.notForYou.map(
                    (item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <AnimatedButton
                    href="#contact"
                    variant="primary"
                    size="lg"
                    fullWidth
                    onClick={() => {
                      // Set form values based on selection
                      localStorage.setItem("client-type", selectedPath);
                    }}
                  >
                    {paths.find((p) => p.id === selectedPath)?.cta}
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClientPathSelector;
