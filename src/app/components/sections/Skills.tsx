"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  Wrench,
  TrendingUp,
} from "lucide-react";
import skillsData from "@/data/skills.json";

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    { id: "frontend", label: "Frontend", icon: <Code2 className="h-5 w-5" /> },
    { id: "backend", label: "Backend", icon: <Database className="h-5 w-5" /> },
    { id: "mobile", label: "Mobile", icon: <Smartphone className="h-5 w-5" /> },
    { id: "devops", label: "DevOps", icon: <Cloud className="h-5 w-5" /> },
    { id: "tools", label: "Tools", icon: <Wrench className="h-5 w-5" /> },
  ];

  const [activeCategory, setActiveCategory] = useState("frontend");

  const filteredSkills = skillsData.filter(
    (skill) => skill.category === activeCategory
  );

  const getSkillIcon = (skillName: string) => {
    const icons: Record<string, string> = {
      React: "⚛️",
      "Next.js": "▲",
      TypeScript: "TS",
      "Node.js": "🟢",
      MongoDB: "🍃",
      Flutter: "📱",
      AWS: "☁️",
      Docker: "🐳",
    };
    return icons[skillName] || "⚡";
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills With <span className="text-gradient">Proof</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Not just a list — every skill is battle-tested in production with
            real metrics
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="relative p-6 rounded-2xl glass-effect"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="text-2xl">{getSkillIcon(skill.name)}</span>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {skill.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gradient">
                    {skill.experience}+
                  </div>
                  <div className="text-sm text-gray-500">years</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span>Expertise Level</span>
                  <span>{skill.level}/10</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level * 10}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  />
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {skill.projects}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projects
                  </div>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {skill.productionUsage}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Production Apps
                  </div>
                </div>
              </div>

              {/* Hover Overlay with Example */}
              {hoveredSkill === skill.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl z-10"
                >
                  <h4 className="font-bold mb-2">Real Example:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {skill.example}
                  </p>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">
                      Improved performance by {skill.impact}%
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
          <h4 className="font-bold mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            How to read these metrics:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
              <div>
                <div className="font-medium">Expertise Level</div>
                <div className="text-sm text-gray-600">
                  Practical mastery, not just theory
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-blue-600">8+</div>
              <div>
                <div className="font-medium">Years Experience</div>
                <div className="text-sm text-gray-600">
                  Real-world production experience
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div>
                <div className="font-medium">Production Ready</div>
                <div className="text-sm text-gray-600">
                  Tested in live applications
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
