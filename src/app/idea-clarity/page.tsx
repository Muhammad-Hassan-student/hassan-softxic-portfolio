"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Users,
  Zap,
  Database,
  TrendingUp,
} from "lucide-react";
import IdeaClarityForm from "@/app/idea-clarity/components/IdeaClarityForm";

const IdeaClarityPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10" />

        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Free Tool</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your <span className="text-gradient">Idea</span>
              <br />
              Into a <span className="text-gradient">Clear Blueprint</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Confused about where to start? Get a detailed project blueprint
              with tech stack, timeline, and next steps — completely free.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Clarity",
                description: "Clear project vision and scope",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Strategy",
                description: "Step-by-step development plan",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Tech Stack",
                description: "Optimal technology recommendations",
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Risk Analysis",
                description: "Identify and mitigate potential risks",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 text-center"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-blue-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Form Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Answer These 5 Simple Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Takes about 5 minutes. Get instant results.
            </p>
          </div>

          <IdeaClarityForm />
        </div>
      </div>

      {/* Trust Section */}
      <div className="border-t border-gray-200 dark:border-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">
              Trusted by Founders & Entrepreneurs
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "500+", label: "Projects Planned" },
                { value: "95%", label: "Satisfaction Rate" },
                { value: "0$", label: "Completely Free" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaClarityPage;
