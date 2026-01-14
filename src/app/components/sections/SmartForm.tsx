"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, AlertCircle, CheckCircle, TrendingUp } from "lucide-react";

const SmartForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const calculateReadinessScore = () => {
    let score = 0;
    if (formData.budget === "$10k+") score += 30;
    if (formData.timeline === "1-2 months") score += 30;
    if (formData.message.length > 100) score += 20;
    return score;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        });
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const readinessScore = calculateReadinessScore();

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Readiness Score */}
        {readinessScore > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">Project Readiness Score</span>
              </div>
              <div className="text-2xl font-bold text-gradient">
                {readinessScore}/100
              </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${readinessScore}%` }}
                className="h-full bg-gradient-to-r from-green-500 to-blue-500"
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {readinessScore >= 70
                ? "🎯 Perfect! This looks like a well-defined project."
                : readinessScore >= 40
                ? "📝 Good start! Let's clarify some details."
                : "💡 Help me understand your project better."}
            </p>
          </motion.div>
        )}

        {/* Form Fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Project Type</label>
          <select
            required
            value={formData.projectType}
            onChange={(e) =>
              setFormData({ ...formData, projectType: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a project type</option>
            <option value="web-app">Web Application</option>
            <option value="mobile-app">Mobile Application</option>
            <option value="saas">SaaS Platform</option>
            <option value="ecommerce">E-commerce Store</option>
            <option value="api-backend">API & Backend</option>
            <option value="mvp">MVP Development</option>
            <option value="redesign">Redesign & Revamp</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Budget Range
            </label>
            <select
              required
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select budget</option>
              <option value="$1k-$5k">$1,000 - $5,000</option>
              <option value="$5k-$10k">$5,000 - $10,000</option>
              <option value="$10k+">$10,000+</option>
              <option value="custom">Custom/Enterprise</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Timeline</label>
            <select
              required
              value={formData.timeline}
              onChange={(e) =>
                setFormData({ ...formData, timeline: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select timeline</option>
              <option value="1-2 months">1-2 months (Urgent)</option>
              <option value="3-6 months">3-6 months (Standard)</option>
              <option value="6+ months">6+ months (Complex)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Project Details{" "}
            {formData.message.length > 0 && `(${formData.message.length}/500)`}
          </label>
          <textarea
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            rows={4}
            maxLength={500}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            placeholder="Describe your project goals, challenges, and requirements..."
          />
          <div className="text-right text-sm text-gray-500 mt-1">
            {500 - formData.message.length} characters remaining
          </div>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
          >
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800 dark:text-green-200">
                  Message sent successfully!
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  I'll review your project and get back to you within 24 hours.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {submitStatus === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
          >
            <div className="flex items-center space-x-3">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <div>
                <p className="font-medium text-red-800 dark:text-red-200">
                  Failed to send message
                </p>
                <p className="text-sm text-red-700 dark:text-red-300">
                  Please try again or contact me directly via WhatsApp.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Send Message & Get Proposal</span>
            </>
          )}
        </button>

        {/* Privacy Note */}
        <p className="text-center text-sm text-gray-500">
          Your information is secure. I never share your data with third
          parties.
        </p>
      </form>
    </div>
  );
};

export default SmartForm;
