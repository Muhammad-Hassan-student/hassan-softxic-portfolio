"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Users,
  DollarSign,
  Clock,
  Mail,
  Phone,
  Globe,
  Star,
  AlertCircle,
  CheckCircle,
  Filter,
  MessageSquare,
  Calendar,
  UserPlus,
  Zap,
} from "lucide-react";

const LeadScoring = () => {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      score: 95,
      status: "hot",
      source: "Website Form",
      budget: "$25k-$50k",
      timeline: "1-2 months",
      lastContact: "2 hours ago",
      actions: ["send_proposal", "schedule_call"],
    },
    {
      id: 2,
      name: "Mike Chen",
      company: "StartupXYZ",
      score: 78,
      status: "warm",
      source: "LinkedIn",
      budget: "$10k-$25k",
      timeline: "2-3 months",
      lastContact: "1 day ago",
      actions: ["send_followup"],
    },
    {
      id: 3,
      name: "David Wilson",
      company: "Enterprise Solutions",
      score: 65,
      status: "warm",
      source: "Referral",
      budget: "$50k+",
      timeline: "3-6 months",
      lastContact: "3 days ago",
      actions: ["send_info"],
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      company: "HealthTech",
      score: 45,
      status: "cold",
      source: "Email",
      budget: "$5k-$10k",
      timeline: "6+ months",
      lastContact: "1 week ago",
      actions: ["nurture"],
    },
    {
      id: 5,
      name: "James Kim",
      company: "E-commerce Store",
      score: 88,
      status: "hot",
      source: "Website Chat",
      budget: "$15k-$30k",
      timeline: "1 month",
      lastContact: "5 hours ago",
      actions: ["schedule_call"],
    },
  ]);

  const [filters, setFilters] = useState({
    status: "all",
    score: "all",
    source: "all",
  });

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 bg-green-100 dark:bg-green-900/30";
    if (score >= 60)
      return "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30";
    return "text-red-600 bg-red-100 dark:bg-red-900/30";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "hot":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case "warm":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "cold":
        return "bg-blue-100 text-blue-800 -900/30 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const scoringCriteria = [
    {
      factor: "Budget Match",
      weight: 30,
      description: "Alignment with service pricing",
    },
    {
      factor: "Timeline Urgency",
      weight: 25,
      description: "Project start date",
    },
    {
      factor: "Decision Maker",
      weight: 20,
      description: "Contact authority level",
    },
    {
      factor: "Project Clarity",
      weight: 15,
      description: "Clear requirements",
    },
    {
      factor: "Communication",
      weight: 10,
      description: "Response time & quality",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 mb-4"
        >
          <Target className="h-5 w-5 text-orange-600 mr-2" />
          <span className="font-medium">Intelligent Lead Scoring</span>
        </motion.div>
        <h2 className="text-3xl font-bold mb-4">
          Prioritize Your Best Opportunities
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          AI-powered lead scoring to focus on high-value prospects
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Leads List */}
        <div className="lg:col-span-2">
          {/* Filters */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <h3 className="text-xl font-bold mb-4 md:mb-0">Leads Pipeline</h3>
              <div className="flex space-x-3">
                <select
                  value={filters.status}
                  onChange={(e) =>
                    setFilters({ ...filters, status: e.target.value })
                  }
                  className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="hot">Hot</option>
                  <option value="warm">Warm</option>
                  <option value="cold">Cold</option>
                </select>
                <select
                  value={filters.score}
                  onChange={(e) =>
                    setFilters({ ...filters, score: e.target.value })
                  }
                  className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-sm"
                >
                  <option value="all">All Scores</option>
                  <option value="high">High (80+)</option>
                  <option value="medium">Medium (60-79)</option>
                  <option value="low">Low (Below 60)</option>
                </select>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                  <Filter className="h-4 w-4 inline mr-2" />
                  Filter
                </button>
              </div>
            </div>

            {/* Leads Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-800">
                    <th className="text-left py-3 px-4 text-sm font-medium">
                      Lead
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium">
                      Score
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium">
                      Budget
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <motion.tr
                      key={lead.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium">{lead.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {lead.company}
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            {lead.source} • {lead.lastContact}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full ${getScoreColor(
                            lead.score,
                          )}`}
                        >
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {lead.score}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            lead.status,
                          )}`}
                        >
                          {lead.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium">{lead.budget}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          {lead.timeline}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex space-x-2">
                          {lead.actions.includes("schedule_call") && (
                            <button className="p-2 rounded-lg bg-blue-100 -900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                              <Phone className="h-4 w-4" />
                            </button>
                          )}
                          {lead.actions.includes("send_proposal") && (
                            <button className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50">
                              <Mail className="h-4 w-4" />
                            </button>
                          )}
                          <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <MessageSquare className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Stats Summary */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">5</div>
                <div className="text-sm text-gray-600">Total Leads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">2</div>
                <div className="text-sm text-gray-600">Hot Leads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">$90k</div>
                <div className="text-sm text-gray-600">Potential Value</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">68%</div>
                <div className="text-sm text-gray-600">Avg. Score</div>
              </div>
            </div>
          </div>

          {/* Lead Details */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="text-xl font-bold mb-6">Lead Scoring Criteria</h3>
            <div className="space-y-4">
              {scoringCriteria.map((criteria) => (
                <div
                  key={criteria.factor}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                >
                  <div>
                    <div className="font-medium">{criteria.factor}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {criteria.description}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold">{criteria.weight}%</div>
                    <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-red-500"
                        style={{ width: `${criteria.weight}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Insights & Actions */}
        <div className="space-y-6">
          {/* Priority Insights */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="font-bold mb-4 flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-orange-500" />
              Priority Insights
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
                <div className="font-bold mb-2">🏆 Top Lead</div>
                <div className="text-sm">Sarah Johnson (95 score)</div>
                <div className="text-xs text-gray-600 mt-2">
                  Should be contacted within 24 hours
                </div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                <div className="font-bold mb-2">📈 Trend</div>
                <div className="text-sm">
                  Lead quality improved by 15% this month
                </div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <div className="font-bold mb-2">🎯 Best Source</div>
                <div className="text-sm">Website forms convert at 35%</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="font-bold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              {[
                {
                  icon: <UserPlus className="h-4 w-4" />,
                  label: "Add New Lead",
                  color: "blue",
                },
                {
                  icon: <Mail className="h-4 w-4" />,
                  label: "Bulk Email",
                  color: "green",
                },
                {
                  icon: <Calendar className="h-4 w-4" />,
                  label: "Schedule Follow-ups",
                  color: "purple",
                },
                {
                  icon: <Zap className="h-4 w-4" />,
                  label: "Run Lead Report",
                  color: "orange",
                },
              ].map((action, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg border border-${action.color}-300 dark:border-${action.color}-700 hover:bg-${action.color}-50 dark:hover:bg-${action.color}-900/20 transition-colors`}
                >
                  <div
                    className={`p-2 rounded-lg bg-${action.color}-100 dark:bg-${action.color}-900/30 text-${action.color}-600 dark:text-${action.color}-400`}
                  >
                    {action.icon}
                  </div>
                  <span className="font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Conversion Prediction */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
            <h3 className="font-bold mb-4">Conversion Prediction</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>This Month</span>
                  <span className="font-medium">68% predicted</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                    style={{ width: "68%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Next Month</span>
                  <span className="font-medium">72% predicted</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    style={{ width: "72%" }}
                  />
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Based on current lead quality and response times
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadScoring;
