"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Clock,
  CheckCircle,
  Users,
  Code,
  Zap,
  BarChart3,
  Target,
  Calendar,
  DollarSign,
  Eye,
  MessageSquare,
} from "lucide-react";

const LiveProjectTracker = () => {
  const [activeProjects, setActiveProjects] = useState([
    { id: 1, name: "E-commerce Platform", progress: 85, daysLeft: 7, team: 3 },
    { id: 2, name: "FinTech Dashboard", progress: 45, daysLeft: 21, team: 2 },
    { id: 3, name: "Healthcare App", progress: 25, daysLeft: 45, team: 4 },
  ]);

  const [stats, setStats] = useState({
    completedProjects: 48,
    activeClients: 12,
    satisfactionRate: 98,
    avgDeliveryTime: "32 days",
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProjects((prev) =>
        prev.map((project) => ({
          ...project,
          progress: Math.min(project.progress + 0.1, 100),
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="live-tracker"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 mb-4">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="font-medium ml-2">Live Project Tracker</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See Projects <span className="text-gradient">Live in Action</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Watch real-time progress of current projects - transparency that
              builds trust
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">
                {stats.completedProjects}+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Projects Delivered
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">
                {stats.activeClients}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Active Clients
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">
                {stats.satisfactionRate}%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Satisfaction Rate
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">
                {stats.avgDeliveryTime}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Avg. Delivery Time
              </div>
            </div>
          </div>

          {/* Live Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {activeProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {project.daysLeft} days left
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {project.team} members
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">
                      {project.progress.toFixed(0)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Complete
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Development Progress</span>
                    <span>{project.progress.toFixed(1)}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress}%` }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                    />
                  </div>
                </div>

                {/* Project Phases */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Planning</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Design</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Development</span>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse mr-2" />
                      <span className="text-sm text-green-600">
                        In Progress
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Testing</span>
                    <span className="text-sm text-gray-500">Upcoming</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Live Activity Feed */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              Recent Activity
            </h3>

            <div className="space-y-4">
              {[
                {
                  action: "Code commit",
                  project: "E-commerce Platform",
                  time: "2 minutes ago",
                  user: "Hassan",
                },
                {
                  action: "Design approved",
                  project: "FinTech Dashboard",
                  time: "1 hour ago",
                  user: "Client",
                },
                {
                  action: "Feature deployed",
                  project: "Healthcare App",
                  time: "3 hours ago",
                  user: "Hassan",
                },
                {
                  action: "Bug fixed",
                  project: "E-commerce Platform",
                  time: "5 hours ago",
                  user: "Team",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 rounded-lg bg-white/50 dark:bg-gray-900/50"
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mr-4">
                    {activity.user.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{activity.action}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {activity.project} • {activity.time}
                    </div>
                  </div>
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Want your project to appear here? Let's build something amazing
              together!
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-bold hover:shadow-xl transition-all"
            >
              <Target className="h-5 w-5 mr-2" />
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveProjectTracker;
