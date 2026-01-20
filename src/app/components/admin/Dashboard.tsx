"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Package,
  Settings,
  Download,
  Filter,
  RefreshCw,
  MessageSquare,
  Calendar,
  FileText,
  Shield,
} from "lucide-react";

const AgencyDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [stats, setStats] = useState({
    totalRevenue: 0,
    activeProjects: 0,
    newLeads: 0,
    clientSatisfaction: 0,
    pendingTasks: 0,
    teamPerformance: 0,
  });

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: <BarChart3 className="h-4 w-4" />,
    },
    { id: "clients", label: "Clients", icon: <Users className="h-4 w-4" /> },
    {
      id: "projects",
      label: "Projects",
      icon: <Package className="h-4 w-4" />,
    },
    {
      id: "finance",
      label: "Finance",
      icon: <DollarSign className="h-4 w-4" />,
    },
    { id: "team", label: "Team", icon: <Users className="h-4 w-4" /> },
    {
      id: "automation",
      label: "Automation",
      icon: <RefreshCw className="h-4 w-4" />,
    },
  ];

  const quickActions = [
    {
      label: "Create Proposal",
      icon: <FileText className="h-5 w-5" />,
      color: "blue",
    },
    {
      label: "Schedule Meeting",
      icon: <Calendar className="h-5 w-5" />,
      color: "green",
    },
    {
      label: "Send Invoice",
      icon: <DollarSign className="h-5 w-5" />,
      color: "purple",
    },
    {
      label: "Add Team Member",
      icon: <Users className="h-5 w-5" />,
      color: "orange",
    },
    {
      label: "Update Services",
      icon: <Settings className="h-5 w-5" />,
      color: "red",
    },
    {
      label: "View Analytics",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "cyan",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      action: "New lead from website",
      time: "5 min ago",
      priority: "high",
    },
    {
      id: 2,
      action: "Proposal accepted by Client X",
      time: "1 hour ago",
      priority: "medium",
    },
    {
      id: 3,
      action: "Project milestone completed",
      time: "2 hours ago",
      priority: "low",
    },
    {
      id: 4,
      action: "Payment received for Project Y",
      time: "5 hours ago",
      priority: "high",
    },
    {
      id: 5,
      action: "Team meeting scheduled",
      time: "1 day ago",
      priority: "medium",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Dashboard Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Agency Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Welcome back, Hassan! Here's what's happening with your agency.
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          {[
            {
              label: "Total Revenue",
              value: "$48,560",
              change: "+12.5%",
              icon: <DollarSign className="h-6 w-6" />,
              color: "green",
            },
            {
              label: "Active Projects",
              value: "24",
              change: "+3",
              icon: <Package className="h-6 w-6" />,
              color: "blue",
            },
            {
              label: "New Leads",
              value: "18",
              change: "+5",
              icon: <Users className="h-6 w-6" />,
              color: "purple",
            },
            {
              label: "Client Satisfaction",
              value: "96%",
              change: "+2%",
              icon: <CheckCircle className="h-6 w-6" />,
              color: "green",
            },
            {
              label: "Pending Tasks",
              value: "7",
              change: "-2",
              icon: <Clock className="h-6 w-6" />,
              color: "orange",
            },
            {
              label: "Team Performance",
              value: "89%",
              change: "+4%",
              icon: <TrendingUp className="h-6 w-6" />,
              color: "cyan",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-800"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/30`}
                >
                  {React.cloneElement(stat.icon, {
                    className: `h-6 w-6 text-${stat.color}-600 dark:text-${stat.color}-400`,
                  })}
                </div>
                <span
                  className={`text-sm font-medium text-${stat.color}-600 dark:text-${stat.color}-400`}
                >
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs Navigation */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="flex border-b border-gray-200 dark:border-gray-800">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-4 flex items-center justify-center space-x-2 text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    {/* Revenue Chart */}
                    <div>
                      <h3 className="text-lg font-bold mb-4">Revenue Trend</h3>
                      <div className="h-48 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-4">
                        {/* Chart would go here */}
                        <div className="flex items-end h-32 space-x-2">
                          {[40, 60, 80, 65, 90, 75, 95].map((height, index) => (
                            <div
                              key={index}
                              className="flex-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t"
                              style={{ height: `${height}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div>
                      <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {quickActions.map((action, index) => (
                          <motion.button
                            key={action.label}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-${action.color}-300 dark:hover:border-${action.color}-700 transition-all`}
                          >
                            <div
                              className={`inline-flex p-2 rounded-lg bg-${action.color}-100 dark:bg-${action.color}-900/30 mb-2`}
                            >
                              {React.cloneElement(action.icon, {
                                className: `h-5 w-5 text-${action.color}-600 dark:text-${action.color}-400`,
                              })}
                            </div>
                            <div className="font-medium text-sm">
                              {action.label}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Other tab contents would go here */}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold">Recent Activities</h3>
                <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter
                </button>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          activity.priority === "high"
                            ? "bg-red-500"
                            : activity.priority === "medium"
                              ? "bg-yellow-500"
                              : "bg-green-500"
                        }`}
                      />
                      <span>{activity.action}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Upcoming Meetings */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Meetings
              </h3>
              <div className="space-y-4">
                {[
                  {
                    time: "10:00 AM",
                    title: "Client Kickoff",
                    client: "TechCorp Inc.",
                  },
                  {
                    time: "2:30 PM",
                    title: "Design Review",
                    client: "StartupXYZ",
                  },
                  {
                    time: "4:00 PM",
                    title: "Strategy Session",
                    client: "Enterprise Co.",
                  },
                ].map((meeting) => (
                  <div
                    key={meeting.title}
                    className="p-3 rounded-lg bg-blue-50 -900/20"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">{meeting.time}</div>
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-100 -900/30 text-blue-800 dark:text-blue-300">
                        Google Meet
                      </span>
                    </div>
                    <div className="font-bold">{meeting.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      with {meeting.client}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6">Performance Metrics</h3>
              <div className="space-y-4">
                {[
                  { label: "Lead Conversion", value: "68%", target: "70%" },
                  { label: "Project Delivery", value: "94%", target: "95%" },
                  { label: "Client Retention", value: "89%", target: "85%" },
                  { label: "Team Utilization", value: "82%", target: "80%" },
                ].map((metric) => {
                  const percentage =
                    (parseInt(metric.value) / parseInt(metric.target)) * 100;
                  return (
                    <div key={metric.label} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{metric.label}</span>
                        <span className="font-medium">
                          {metric.value} / {metric.target}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            percentage >= 100
                              ? "bg-green-500"
                              : percentage >= 90
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                          style={{ width: `${Math.min(percentage, 100)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                System Status
              </h3>
              <div className="space-y-3">
                {[
                  { service: "Website", status: "online", uptime: "99.9%" },
                  {
                    service: "Email Server",
                    status: "online",
                    uptime: "99.8%",
                  },
                  { service: "Database", status: "online", uptime: "100%" },
                  {
                    service: "Payment Gateway",
                    status: "online",
                    uptime: "99.7%",
                  },
                ].map((sys) => (
                  <div
                    key={sys.service}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          sys.status === "online"
                            ? "bg-green-500 animate-pulse"
                            : "bg-red-500"
                        }`}
                      />
                      <span>{sys.service}</span>
                    </div>
                    <div className="text-sm text-gray-500">
                      {sys.uptime} uptime
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyDashboard;
