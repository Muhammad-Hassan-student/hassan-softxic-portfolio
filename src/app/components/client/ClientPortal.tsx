"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  FileText,
  DollarSign,
  Clock,
  CheckCircle,
  MessageSquare,
  Download,
  Settings,
  Bell,
  Shield,
  Calendar,
  BarChart,
  Package,
  Users as UsersIcon,
  CreditCard,
  HelpCircle,
  LogOut,
} from "lucide-react";

const ClientPortal = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [client] = useState({
    name: "TechCorp Inc.",
    contact: "Sarah Johnson",
    email: "sarah@techcorp.com",
    plan: "Enterprise Plan",
    since: "Jan 2024",
    status: "active",
  });

  const tabs = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <BarChart className="h-4 w-4" />,
    },
    {
      id: "projects",
      label: "Projects",
      icon: <Package className="h-4 w-4" />,
    },
    {
      id: "documents",
      label: "Documents",
      icon: <FileText className="h-4 w-4" />,
    },
    {
      id: "billing",
      label: "Billing",
      icon: <CreditCard className="h-4 w-4" />,
    },
    { id: "team", label: "Team", icon: <UsersIcon className="h-4 w-4" /> },
    {
      id: "support",
      label: "Support",
      icon: <HelpCircle className="h-4 w-4" />,
    },
  ];

  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      status: "in-progress",
      progress: 75,
      dueDate: "Mar 15, 2024",
    },
    {
      id: 2,
      name: "Mobile App Redesign",
      status: "review",
      progress: 90,
      dueDate: "Feb 28, 2024",
    },
    {
      id: 3,
      name: "Marketing Website",
      status: "completed",
      progress: 100,
      dueDate: "Jan 20, 2024",
    },
    {
      id: 4,
      name: "API Integration",
      status: "planning",
      progress: 20,
      dueDate: "Apr 30, 2024",
    },
  ];

  const documents = [
    { name: "Project Proposal.pdf", date: "Jan 5, 2024", size: "2.4 MB" },
    { name: "Contract Agreement.pdf", date: "Jan 10, 2024", size: "1.8 MB" },
    { name: "Design Mockups.zip", date: "Feb 1, 2024", size: "45.2 MB" },
    { name: "Invoice #001.pdf", date: "Feb 5, 2024", size: "0.8 MB" },
  ];

  const teamMembers = [
    {
      name: "Hassan (Lead)",
      role: "Project Manager",
      email: "hassan@softxic.com",
    },
    { name: "Alex", role: "Frontend Developer", email: "alex@softxic.com" },
    { name: "Sarah", role: "UI/UX Designer", email: "sarah@softxic.com" },
    { name: "Mike", role: "Backend Developer", email: "mike@softxic.com" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Client Portal</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Welcome, {client.contact}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <Settings className="h-5 w-5" />
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                <LogOut className="h-4 w-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              {/* Client Info */}
              <div className="text-center mb-8">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {client.name.charAt(0)}
                </div>
                <h3 className="font-bold text-lg">{client.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {client.contact}
                </p>
                <div className="mt-4">
                  <span className="inline-flex px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-medium">
                    {client.status.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Tabs */}
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all ${
                      activeTab === tab.id
                        ? "bg-blue-50 -900/20 text-blue-600 dark:text-blue-400"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {tab.icon}
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Client Since
                    </span>
                    <span className="font-medium">{client.since}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Current Plan
                    </span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      {client.plan}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      Support Level
                    </span>
                    <span className="font-medium">24/7 Priority</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Dashboard Tab */}
            {activeTab === "dashboard" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                {/* Welcome Card */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">
                    Welcome to Your Client Portal
                  </h2>
                  <p className="mb-6 opacity-90">
                    Track project progress, access documents, and manage your
                    account all in one place.
                  </p>
                  <div className="flex space-x-4">
                    <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-medium">
                      View Projects
                    </button>
                    <button className="px-6 py-3 bg-white/20 rounded-lg hover:bg-white/30 font-medium">
                      Contact Support
                    </button>
                  </div>
                </div>

                {/* Projects Overview */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                    <h3 className="text-lg font-bold mb-6 flex items-center">
                      <Package className="h-5 w-5 mr-2" />
                      Active Projects
                    </h3>
                    <div className="space-y-6">
                      {projects.map((project) => (
                        <div key={project.id} className="space-y-3">
                          <div className="flex justify-between items-center">
                            <div className="font-medium">{project.name}</div>
                            <span
                              className={`text-sm px-3 py-1 rounded-full ${
                                project.status === "completed"
                                  ? "bg-green-100 text-green-800"
                                  : project.status === "in-progress"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{project.progress}%</span>
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${
                                  project.progress === 100
                                    ? "bg-green-500"
                                    : project.progress >= 50
                                      ? "bg-blue-500"
                                      : "bg-yellow-500"
                                }`}
                                style={{ width: `${project.progress}%` }}
                              />
                            </div>
                          </div>
                          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                            <span>Due: {project.dueDate}</span>
                            <button className="text-blue-600 dark:text-blue-400 hover:underline">
                              View Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                      <h3 className="text-lg font-bold mb-6">Quick Actions</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          {
                            icon: <MessageSquare className="h-5 w-5" />,
                            label: "Send Message",
                            color: "blue",
                          },
                          {
                            icon: <FileText className="h-5 w-5" />,
                            label: "Upload File",
                            color: "green",
                          },
                          {
                            icon: <Calendar className="h-5 w-5" />,
                            label: "Schedule Call",
                            color: "purple",
                          },
                          {
                            icon: <DollarSign className="h-5 w-5" />,
                            label: "Make Payment",
                            color: "orange",
                          },
                        ].map((action, index) => (
                          <button
                            key={index}
                            className={`p-4 rounded-xl border border-${action.color}-300 dark:border-${action.color}-700 hover:bg-${action.color}-50 dark:hover:bg-${action.color}-900/20 transition-colors`}
                          >
                            <div
                              className={`inline-flex p-2 rounded-lg bg-${action.color}-100 dark:bg-${action.color}-900/30 text-${action.color}-600 dark:text-${action.color}-400 mb-3`}
                            >
                              {action.icon}
                            </div>
                            <div className="font-medium text-sm">
                              {action.label}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Team Access */}
                    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                      <h3 className="text-lg font-bold mb-6">Your Team</h3>
                      <div className="space-y-4">
                        {teamMembers.map((member, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center text-white font-bold">
                                {member.name.charAt(0)}
                              </div>
                              <div>
                                <div className="font-medium">{member.name}</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                  {member.role}
                                </div>
                              </div>
                            </div>
                            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                              <MessageSquare className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Projects Tab */}
            {activeTab === "projects" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Projects Table */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                  <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                    <h3 className="text-xl font-bold">All Projects</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200 dark:border-gray-800">
                          <th className="text-left py-4 px-6 font-medium">
                            Project
                          </th>
                          <th className="text-left py-4 px-6 font-medium">
                            Status
                          </th>
                          <th className="text-left py-4 px-6 font-medium">
                            Progress
                          </th>
                          <th className="text-left py-4 px-6 font-medium">
                            Due Date
                          </th>
                          <th className="text-left py-4 px-6 font-medium">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {projects.map((project) => (
                          <tr
                            key={project.id}
                            className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                          >
                            <td className="py-4 px-6">
                              <div className="font-medium">{project.name}</div>
                            </td>
                            <td className="py-4 px-6">
                              <span
                                className={`px-3 py-1 rounded-full text-sm ${
                                  project.status === "completed"
                                    ? "bg-green-100 text-green-800"
                                    : project.status === "in-progress"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {project.status}
                              </span>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center space-x-3">
                                <div className="w-32 h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full ${
                                      project.progress === 100
                                        ? "bg-green-500"
                                        : project.progress >= 50
                                          ? "bg-blue-500"
                                          : "bg-yellow-500"
                                    }`}
                                    style={{ width: `${project.progress}%` }}
                                  />
                                </div>
                                <span className="text-sm">
                                  {project.progress}%
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="text-sm">{project.dueDate}</div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex space-x-2">
                                <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                                  <FileText className="h-4 w-4" />
                                </button>
                                <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                                  <MessageSquare className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Documents Tab */}
            {activeTab === "documents" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Documents List */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Documents</h3>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Upload New
                    </button>
                  </div>
                  <div className="space-y-4">
                    {documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-lg bg-blue-100 -900/30">
                            <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <div className="font-medium">{doc.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Uploaded on {doc.date} • {doc.size}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <Download className="h-4 w-4" />
                          </button>
                          <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <MessageSquare className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Billing Tab */}
            {activeTab === "billing" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Billing Overview */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                    <h3 className="font-bold mb-4">Current Balance</h3>
                    <div className="text-3xl font-bold mb-2">$4,250.00</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Due on Mar 15, 2024
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                    <h3 className="font-bold mb-4">Monthly Recurring</h3>
                    <div className="text-3xl font-bold mb-2">$1,499.00</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Enterprise Plan
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                    <h3 className="font-bold mb-4">Total Spent</h3>
                    <div className="text-3xl font-bold mb-2">$18,750.00</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Since {client.since}
                    </div>
                  </div>
                </div>

                {/* Invoices */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                  <h3 className="text-xl font-bold mb-6">Recent Invoices</h3>
                  <div className="space-y-4">
                    {[
                      {
                        id: "INV-001",
                        date: "Feb 1, 2024",
                        amount: "$4,250.00",
                        status: "pending",
                      },
                      {
                        id: "INV-002",
                        date: "Jan 1, 2024",
                        amount: "$4,250.00",
                        status: "paid",
                      },
                      {
                        id: "INV-003",
                        date: "Dec 1, 2023",
                        amount: "$4,250.00",
                        status: "paid",
                      },
                    ].map((invoice) => (
                      <div
                        key={invoice.id}
                        className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      >
                        <div>
                          <div className="font-medium">{invoice.id}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {invoice.date}
                          </div>
                        </div>
                        <div className="text-xl font-bold">
                          {invoice.amount}
                        </div>
                        <div className="flex items-center space-x-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm ${
                              invoice.status === "paid"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {invoice.status}
                          </span>
                          <button className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
                            <Download className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Team Tab */}
            {activeTab === "team" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Team Members */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Team Members</h3>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Add Member
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl border border-gray-200 dark:border-gray-800"
                      >
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 flex items-center justify-center text-white font-bold text-xl">
                            {member.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold">{member.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {member.role}
                            </div>
                            <div className="text-sm text-blue-600 dark:text-blue-400">
                              {member.email}
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm">
                            <MessageSquare className="h-4 w-4 inline mr-2" />
                            Message
                          </button>
                          <button className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-sm">
                            <Calendar className="h-4 w-4 inline mr-2" />
                            Schedule
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Support Tab */}
            {activeTab === "support" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                {/* Support Options */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                    <h3 className="text-lg font-bold mb-4">Contact Support</h3>
                    <div className="space-y-4">
                      <button className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-left">
                        <div className="font-medium mb-1">Live Chat</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Get instant help from our team
                        </div>
                      </button>
                      <button className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-left">
                        <div className="font-medium mb-1">Schedule Call</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Book a meeting with your PM
                        </div>
                      </button>
                      <button className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-left">
                        <div className="font-medium mb-1">Email Support</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          support@softxic.com
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
                    <h3 className="text-lg font-bold mb-4">Knowledge Base</h3>
                    <div className="space-y-4">
                      {[
                        "Getting Started Guide",
                        "Project Management Process",
                        "Billing & Payments FAQ",
                        "Technical Documentation",
                        "Best Practices",
                        "Troubleshooting",
                      ].map((article, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                          <div className="font-medium">{article}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            Read article →
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
