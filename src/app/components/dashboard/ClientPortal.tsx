"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FolderOpen,
  MessageSquare,
  FileText,
  Calendar,
  DollarSign,
  Settings,
  Bell,
  Search,
  TrendingUp,
  Download,
  Eye,
  Edit,
  Share,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

const ClientPortal = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      status: "In Progress",
      progress: 75,
      dueDate: "2024-03-15",
    },
    {
      id: 2,
      name: "Mobile Banking App",
      status: "Completed",
      progress: 100,
      dueDate: "2024-02-28",
    },
    {
      id: 3,
      name: "CRM System",
      status: "Planning",
      progress: 20,
      dueDate: "2024-04-30",
    },
    {
      id: 4,
      name: "Analytics Dashboard",
      status: "In Progress",
      progress: 50,
      dueDate: "2024-03-31",
    },
  ];

  const documents = [
    {
      id: 1,
      name: "Project Proposal.pdf",
      type: "PDF",
      size: "2.4 MB",
      date: "2024-01-15",
    },
    {
      id: 2,
      name: "Wireframes.fig",
      type: "Design",
      size: "5.7 MB",
      date: "2024-01-20",
    },
    {
      id: 3,
      name: "API Documentation.md",
      type: "Markdown",
      size: "1.2 MB",
      date: "2024-02-01",
    },
    {
      id: 4,
      name: "Final Invoice.pdf",
      type: "Invoice",
      size: "1.8 MB",
      date: "2024-02-28",
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "Hassan",
      message: "Updated the login flow as discussed",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      sender: "You",
      message: "The design looks great!",
      time: "1 day ago",
      unread: false,
    },
    {
      id: 3,
      sender: "Hassan",
      message: "Need feedback on the new feature",
      time: "2 days ago",
      unread: false,
    },
  ];

  return (
    <section id="client-portal" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 mb-4">
              <FolderOpen className="h-5 w-5 text-purple-600" />
              <span className="font-medium ml-2">Client Portal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your <span className="text-gradient">Dashboard</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Manage projects, access documents, and communicate seamlessly
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Dashboard Header */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg mb-8 overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-800">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">Client Dashboard</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Welcome back! Here's your project overview
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent w-full"
                    />
                  </div>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                    <Bell className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                    <Settings className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">4</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Active Projects
                    </div>
                  </div>
                  <FolderOpen className="h-8 w-8 text-blue-500" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">75%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Avg. Progress
                    </div>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-500" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Documents
                    </div>
                  </div>
                  <FileText className="h-8 w-8 text-purple-500" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      New Messages
                    </div>
                  </div>
                  <MessageSquare className="h-8 w-8 text-orange-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Projects */}
            <div className="lg:col-span-2 space-y-8">
              {/* Projects Table */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold flex items-center">
                    <FolderOpen className="h-5 w-5 mr-2" />
                    Your Projects
                  </h4>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-700 hover:to-cyan-600">
                    New Project
                  </button>
                </div>

                <div className="space-y-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h5 className="font-semibold">{project.name}</h5>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                            <span>Due: {project.dueDate}</span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                project.status === "Completed"
                                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                                  : project.status === "In Progress"
                                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                                  : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="mb-2">
                        <div className="flex justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Documents & Files
                </h4>

                <div className="space-y-3">
                  {documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                          <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <div className="font-medium">{doc.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {doc.type} • {doc.size} • {doc.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                          <Download className="h-4 w-4" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                          <Share className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Messages & Quick Actions */}
            <div className="space-y-8">
              {/* Messages */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Recent Messages
                </h4>

                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`p-4 rounded-xl border ${
                        msg.unread
                          ? "border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-900/10"
                          : "border-gray-200 dark:border-gray-800"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`h-8 w-8 rounded-full flex items-center justify-center ${
                              msg.sender === "Hassan"
                                ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
                                : "bg-gray-200 dark:bg-gray-800"
                            }`}
                          >
                            {msg.sender.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold">{msg.sender}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {msg.time}
                            </div>
                          </div>
                        </div>
                        {msg.unread && (
                          <div className="h-2 w-2 rounded-full bg-blue-500" />
                        )}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                  View All Messages
                </button>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-6">Quick Actions</h4>

                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-3" />
                      <span>Schedule Meeting</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <button className="w-full flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 mr-3" />
                      <span>View Invoices</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <button className="w-full flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 mr-3" />
                      <span>Download Reports</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <button className="w-full flex items-center justify-between p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <div className="flex items-center">
                      <Settings className="h-5 w-5 mr-3" />
                      <span>Portal Settings</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white rounded-2xl p-6">
                <h4 className="text-xl font-bold mb-4">Need Help?</h4>
                <p className="mb-6 text-blue-100">
                  Get instant support for your projects
                </p>
                <div className="space-y-3">
                  <button className="w-full py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
                    Live Chat Support
                  </button>
                  <button className="w-full py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10">
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortal;
