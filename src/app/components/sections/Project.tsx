"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  BarChart,
  Zap,
  TrendingUp,
  Filter,
} from "lucide-react";
import projectsData from "@/data/projects.json";
import Image from "next/image";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "saas", label: "SaaS Platforms" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "enterprise", label: "Enterprise" },
    { id: "dashboard", label: "Dashboards" },
    { id: "education", label: "EdTech" },
    { id: "backend", label: "Backend Systems" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const selectedProjectData = selectedProject
    ? projectsData.find((p) => p.id === selectedProject)
    : null;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Case <span className="text-gradient">Studies</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real projects with measurable results — not just pretty interfaces
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project.id)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:shadow-xl transition-all duration-300">
                {/* Project Image Container */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                  {/* Background gradient fallback */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-300 dark:text-gray-700">
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  {/* Main Project Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                    priority={index < 3}
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex space-x-2 z-10">
                    {project.githubUrl && (
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-900/80 text-white backdrop-blur-sm">
                        <Github className="h-3 w-3 inline mr-1" />
                        Open Source
                      </span>
                    )}
                    <span
                      className={`px-2 py-1 text-xs rounded-full backdrop-blur-sm ${
                        project.complexity === "High"
                          ? "bg-red-500/80 text-white"
                          : project.complexity === "Medium"
                            ? "bg-yellow-500/80 text-white"
                            : "bg-green-500/80 text-white"
                      }`}
                    >
                      {project.complexity}
                    </span>
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 transition-colors duration-300 rounded-2xl pointer-events-none" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <ExternalLink className="h-5 w-5 text-gray-400" />
                      )}
                      {project.githubUrl && (
                        <Github className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                      <Zap className="h-4 w-4 text-yellow-500 mx-auto mb-1" />
                      <div className="text-xs font-medium">
                        {project.metrics.performance}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                      <TrendingUp className="h-4 w-4 text-green-500 mx-auto mb-1" />
                      <div className="text-xs font-medium">
                        {project.metrics.speed}
                      </div>
                    </div>
                    <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                      <BarChart className="h-4 w-4 text-blue-500 mx-auto mb-1" />
                      <div className="text-xs font-medium">
                        {project.metrics.scale}
                      </div>
                    </div>
                  </div>

                  {/* View Details */}
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 text-center">
                    <button className="text-sm text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
                      View Case Study →
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        {selectedProjectData && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black/50"
                onClick={() => setSelectedProject(null)}
              />

              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">
                        {selectedProjectData.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {selectedProjectData.client} •{" "}
                        {selectedProjectData.duration}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      ×
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 max-h-[70vh] overflow-y-auto">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Project Image in Modal */}
                      <div className="relative h-64 rounded-xl overflow-hidden">
                        <Image
                          src={selectedProjectData.image}
                          alt={selectedProjectData.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 66vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>

                      {/* Problem & Solution */}
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-lg mb-2 text-red-600 dark:text-red-400">
                            The Problem
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300">
                            {selectedProjectData.problem}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-2 text-green-600 dark:text-green-400">
                            The Solution
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300">
                            {selectedProjectData.solution}
                          </p>
                        </div>
                      </div>

                      {/* Results */}
                      <div>
                        <h4 className="font-semibold text-lg mb-4">
                          Key Results
                        </h4>
                        <div className="space-y-3">
                          {selectedProjectData.results.map((result, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                            >
                              <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                                <span className="text-green-600 dark:text-green-400 font-bold">
                                  ✓
                                </span>
                              </div>
                              <span>{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      {/* Tech Stack */}
                      <div>
                        <h4 className="font-semibold text-lg mb-3">
                          Tech Stack
                        </h4>
                        <div className="space-y-2">
                          {selectedProjectData.techStack.map((tech) => (
                            <div
                              key={tech}
                              className="px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div>
                        <h4 className="font-semibold text-lg mb-3">
                          Performance Metrics
                        </h4>
                        <div className="space-y-3">
                          {Object.entries(selectedProjectData.metrics).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                              >
                                <div className="text-sm text-gray-500 mb-1 capitalize">
                                  {key}
                                </div>
                                <div className="font-semibold">{value}</div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex space-x-3">
                        {selectedProjectData.liveUrl && (
                          <a
                            href={selectedProjectData.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-center font-medium"
                          >
                            <ExternalLink className="h-4 w-4 inline mr-2" />
                            Live Demo
                          </a>
                        )}
                        {selectedProjectData.githubUrl && (
                          <a
                            href={selectedProjectData.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition-colors text-center font-medium"
                          >
                            <Github className="h-4 w-4 inline mr-2" />
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all hover:scale-105">
            <Eye className="h-5 w-5 mr-2" />
            View More Case Studies
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
