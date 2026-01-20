"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Zap,
  DollarSign,
  Clock,
  CheckCircle,
  Download,
  Send,
  RefreshCw,
  Users,
  Package,
  Calendar,
  Shield,
} from "lucide-react";

const AutoProposal = () => {
  const [proposalData, setProposalData] = useState({
    clientName: "",
    projectType: "",
    budget: "",
    timeline: "",
    services: [] as string[],
  });

  const [generatedProposal, setGeneratedProposal] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const serviceOptions = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
    "Social Media Management",
    "Brand Identity",
    "Content Creation",
    "E-commerce Development",
    "Maintenance & Support",
  ];

  const templateOptions = [
    { id: "standard", name: "Standard Proposal", price: "Free" },
    {
      id: "premium",
      name: "Premium Proposal",
      price: "$49",
      features: ["AI Writing", "Legal Review", "Custom Design"],
    },
    {
      id: "enterprise",
      name: "Enterprise Proposal",
      price: "$99",
      features: [
        "All Premium Features",
        "Brand Integration",
        "Unlimited Revisions",
      ],
    },
  ];

  const generateProposal = () => {
    setIsGenerating(true);

    // Simulate AI proposal generation
    setTimeout(() => {
      const proposal = {
        id: "PROP-" + Date.now(),
        date: new Date().toISOString().split("T")[0],
        client: proposalData.clientName || "New Client",
        services:
          proposalData.services.length > 0
            ? proposalData.services
            : ["Web Development", "UI/UX Design"],
        total: proposalData.budget || "$5,000 - $10,000",
        timeline: proposalData.timeline || "4-6 weeks",
        sections: [
          {
            title: "Executive Summary",
            content: `This proposal outlines our approach to delivering exceptional ${
              proposalData.projectType || "web development"
            } services for ${
              proposalData.clientName || "your company"
            }. Our team is committed to delivering high-quality results within the specified timeline and budget.`,
          },
          {
            title: "Project Overview",
            content:
              "Comprehensive solution including strategy, design, development, and deployment phases.",
          },
          {
            title: "Scope of Work",
            content:
              "Detailed breakdown of all services, deliverables, and milestones.",
          },
          {
            title: "Timeline & Milestones",
            content:
              "Phase-based delivery schedule with clear checkpoints and review periods.",
          },
          {
            title: "Investment",
            content:
              "Transparent pricing structure with payment schedule and terms.",
          },
        ],
        terms: [
          "30-day project kickoff",
          "Weekly progress meetings",
          "3 rounds of revisions included",
          "30-day post-launch support",
          "Source code ownership transfer",
        ],
      };

      setGeneratedProposal(proposal);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 mb-4"
        >
          <Zap className="h-5 w-5 text-green-600 mr-2" />
          <span className="font-medium">AI-Powered Proposal Generator</span>
        </motion.div>
        <h2 className="text-3xl font-bold mb-4">
          Generate Professional Proposals in Minutes
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Automatically create customized, winning proposals with AI assistance
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Form */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Proposal Details
            </h3>

            <div className="space-y-6">
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Client Name/Company *
                  </label>
                  <input
                    type="text"
                    value={proposalData.clientName}
                    onChange={(e) =>
                      setProposalData({
                        ...proposalData,
                        clientName: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                    placeholder="Enter client name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Type *
                  </label>
                  <select
                    value={proposalData.projectType}
                    onChange={(e) =>
                      setProposalData({
                        ...proposalData,
                        projectType: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="web-dev">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="design">UI/UX Design</option>
                    <option value="marketing">Digital Marketing</option>
                  </select>
                </div>
              </div>

              {/* Budget & Timeline */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Estimated Budget Range
                  </label>
                  <select
                    value={proposalData.budget}
                    onChange={(e) =>
                      setProposalData({
                        ...proposalData,
                        budget: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                  >
                    <option value="">Select budget</option>
                    <option value="$1k-$5k">$1,000 - $5,000</option>
                    <option value="$5k-$10k">$5,000 - $10,000</option>
                    <option value="$10k-$25k">$10,000 - $25,000</option>
                    <option value="$25k+">$25,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Project Timeline
                  </label>
                  <select
                    value={proposalData.timeline}
                    onChange={(e) =>
                      setProposalData({
                        ...proposalData,
                        timeline: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="2-4 weeks">2-4 weeks</option>
                    <option value="1-2 months">1-2 months</option>
                    <option value="2-4 months">2-4 months</option>
                    <option value="4-6 months">4-6 months</option>
                  </select>
                </div>
              </div>

              {/* Services Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Select Services
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      onClick={() => {
                        const updated = proposalData.services.includes(service)
                          ? proposalData.services.filter((s) => s !== service)
                          : [...proposalData.services, service];
                        setProposalData({ ...proposalData, services: updated });
                      }}
                      className={`p-3 rounded-lg border text-sm ${
                        proposalData.services.includes(service)
                          ? "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                          : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              {/* Template Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">
                  Proposal Template
                </label>
                <div className="grid md:grid-cols-3 gap-4">
                  {templateOptions.map((template) => (
                    <div
                      key={template.id}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        template.id === "premium"
                          ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                          : "border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600"
                      }`}
                    >
                      <div className="font-bold mb-2">{template.name}</div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                        {template.price}
                      </div>
                      {template.features && (
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          {template.features.map((feat) => (
                            <li key={feat}>• {feat}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={generateProposal}
                disabled={isGenerating}
                className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isGenerating ? (
                  <span className="flex items-center justify-center">
                    <RefreshCw className="h-5 w-5 mr-2 animate-spin" />
                    Generating Proposal...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Zap className="h-5 w-5 mr-2" />
                    Generate AI Proposal
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Preview & Actions */}
        <div className="space-y-6">
          {/* Proposal Preview */}
          {generatedProposal ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6"
            >
              <h3 className="text-xl font-bold mb-4">Generated Proposal</h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                  <div className="text-sm text-gray-500 mb-1">Proposal ID</div>
                  <div className="font-bold">{generatedProposal.id}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Client</div>
                    <div className="font-medium">
                      {generatedProposal.client}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      Total Value
                    </div>
                    <div className="text-xl font-bold text-green-600">
                      {generatedProposal.total}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-2">
                    Services Included
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {generatedProposal.services.map(
                      (service: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-xs rounded-full bg-blue-100 -900/30 text-blue-800 dark:text-blue-300"
                        >
                          {service}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex space-x-3">
                    <button className="flex-1 py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </button>
                    <button className="flex-1 py-3 px-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center">
                      <Send className="h-4 w-4 mr-2" />
                      Send to Client
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-xl font-bold mb-4">Proposal Preview</h3>
              <div className="text-center py-8">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  Fill in the details to generate your proposal
                </p>
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="font-bold mb-4">Benefits</h3>
            <ul className="space-y-3">
              {[
                "90% faster proposal creation",
                "Professional templates",
                "AI-powered content",
                "Legal compliance",
                "Brand consistency",
                "Higher win rates",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="font-bold mb-4">Proposal Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 rounded-lg bg-blue-50 -900/20">
                <div className="text-2xl font-bold text-blue-600">85%</div>
                <div className="text-xs text-gray-600">Win Rate</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                <div className="text-2xl font-bold text-green-600">2.3x</div>
                <div className="text-xs text-gray-600">Faster Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoProposal;
