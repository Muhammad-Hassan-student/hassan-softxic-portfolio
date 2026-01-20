"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Target,
  CheckCircle,
  XCircle,
  TrendingUp,
  Star,
  Zap,
  Code2,
  Database,
  Smartphone,
  Cloud,
  Wrench,
} from "lucide-react";

const SkillMatcher = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [matchPercentage, setMatchPercentage] = useState(0);
  const [recommendedTech, setRecommendedTech] = useState<string[]>([]);

  const allSkills = [
    { id: "nextjs", name: "Next.js 14", category: "frontend", level: 95 },
    { id: "react", name: "React", category: "frontend", level: 98 },
    { id: "typescript", name: "TypeScript", category: "frontend", level: 90 },
    { id: "nodejs", name: "Node.js", category: "backend", level: 92 },
    { id: "mongodb", name: "MongoDB", category: "backend", level: 88 },
    { id: "postgresql", name: "PostgreSQL", category: "backend", level: 85 },
    { id: "flutter", name: "Flutter", category: "mobile", level: 87 },
    { id: "react-native", name: "React Native", category: "mobile", level: 85 },
    { id: "aws", name: "AWS", category: "devops", level: 82 },
    { id: "docker", name: "Docker", category: "devops", level: 80 },
    { id: "graphql", name: "GraphQL", category: "backend", level: 78 },
    { id: "redis", name: "Redis", category: "backend", level: 75 },
  ];

  const projectTemplates = [
    {
      id: "saas",
      name: "SaaS Platform",
      requiredSkills: ["nextjs", "nodejs", "postgresql", "aws", "graphql"],
      description: "Multi-tenant subscription platform",
    },
    {
      id: "ecommerce",
      name: "E-commerce Store",
      requiredSkills: ["nextjs", "nodejs", "mongodb", "react"],
      description: "Full-featured online store",
    },
    {
      id: "mobile-app",
      name: "Mobile App",
      requiredSkills: ["flutter", "react-native", "nodejs", "mongodb"],
      description: "Cross-platform mobile application",
    },
    {
      id: "dashboard",
      name: "Analytics Dashboard",
      requiredSkills: ["react", "typescript", "nodejs", "postgresql"],
      description: "Real-time data visualization",
    },
  ];

  useEffect(() => {
    // Calculate match percentage
    if (selectedSkills.length === 0) {
      setMatchPercentage(0);
      setRecommendedTech([]);
      return;
    }

    // Find best matching project template
    let bestMatch = { percentage: 0, tech: [] as string[] };

    projectTemplates.forEach((template) => {
      const matched = template.requiredSkills.filter((skill) =>
        selectedSkills.includes(skill),
      ).length;

      const percentage = (matched / template.requiredSkills.length) * 100;

      if (percentage > bestMatch.percentage) {
        bestMatch = {
          percentage,
          tech: template.requiredSkills.filter(
            (skill) => !selectedSkills.includes(skill),
          ),
        };
      }
    });

    setMatchPercentage(Math.round(bestMatch.percentage));
    setRecommendedTech(bestMatch.tech);
  }, [selectedSkills]);

  const toggleSkill = (skillId: string) => {
    if (selectedSkills.includes(skillId)) {
      setSelectedSkills(selectedSkills.filter((id) => id !== skillId));
    } else {
      setSelectedSkills([...selectedSkills, skillId]);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "frontend":
        return <Code2 className="h-4 w-4" />;
      case "backend":
        return <Database className="h-4 w-4" />;
      case "mobile":
        return <Smartphone className="h-4 w-4" />;
      case "devops":
        return <Cloud className="h-4 w-4" />;
      default:
        return <Wrench className="h-4 w-4" />;
    }
  };

  return (
    <section id="skill-matcher" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 mb-4">
              <Target className="h-5 w-5 text-purple-600" />
              <span className="font-medium ml-2">Skill Matching System</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Match with <span className="text-gradient">My Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Select your project requirements and see how perfectly I match
              with your needs
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Skill Selection */}
          <div className="lg:col-span-2">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
              <h3 className="text-xl font-bold mb-6">
                Select Required Technologies
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {allSkills.map((skill) => (
                  <motion.button
                    key={skill.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleSkill(skill.id)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedSkills.includes(skill.id)
                        ? "border-blue-500 bg-blue-100 -900/20"
                        : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {getCategoryIcon(skill.category)}
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      {selectedSkills.includes(skill.id) ? (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      ) : (
                        <div className="h-5 w-5" />
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                        {skill.category}
                      </div>
                      <div className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                        <span className="text-sm font-medium">
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    {/* Skill Level Bar */}
                    <div className="mt-2 h-1 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Project Templates */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-6">
                Or Choose a Project Template
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {projectTemplates.map((template) => (
                  <motion.button
                    key={template.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedSkills(template.requiredSkills)}
                    className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 hover:bg-gray-50 dark:hover:bg-gray-800 text-left"
                  >
                    <div className="font-semibold mb-2">{template.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {template.description}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {template.requiredSkills.map((skillId) => {
                        const skill = allSkills.find((s) => s.id === skillId);
                        return skill ? (
                          <span
                            key={skillId}
                            className="px-2 py-1 text-xs rounded-full bg-blue-100 -900/30 text-blue-800 dark:text-blue-300"
                          >
                            {skill.name}
                          </span>
                        ) : null;
                      })}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Match Results */}
          <div className="space-y-8">
            {/* Match Score */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-black text-white">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-400 mb-2">
                  SKILL MATCH SCORE
                </div>
                <div className="relative inline-block">
                  <div className="text-5xl font-bold text-gradient">
                    {matchPercentage}%
                  </div>
                  {matchPercentage > 80 && (
                    <div className="absolute -top-2 -right-2">
                      <Zap className="h-6 w-6 text-yellow-500 fill-current animate-pulse" />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 mb-2">
                    Selected Skills
                  </div>
                  <div className="text-xl font-bold">
                    {selectedSkills.length} / {allSkills.length}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <div className="text-sm text-gray-400 mb-3">
                    Match Analysis
                  </div>
                  <div className="space-y-3">
                    {matchPercentage === 100 && (
                      <div className="flex items-center text-green-400">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>Perfect match! All requirements covered</span>
                      </div>
                    )}
                    {matchPercentage >= 80 && matchPercentage < 100 && (
                      <div className="flex items-center text-green-400">
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>Excellent match - minor learning curve</span>
                      </div>
                    )}
                    {matchPercentage >= 60 && matchPercentage < 80 && (
                      <div className="flex items-center text-yellow-400">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        <span>Good match - some new technologies needed</span>
                      </div>
                    )}
                    {matchPercentage < 60 && matchPercentage > 0 && (
                      <div className="flex items-center text-orange-400">
                        <XCircle className="h-5 w-5 mr-2" />
                        <span>
                          Partial match - significant learning required
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            {recommendedTech.length > 0 && (
              <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <h4 className="font-bold mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Recommended Additions
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  For an even better match, consider adding:
                </p>
                <div className="space-y-2">
                  {recommendedTech.map((skillId) => {
                    const skill = allSkills.find((s) => s.id === skillId);
                    return skill ? (
                      <div
                        key={skillId}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/50 dark:bg-gray-900/50"
                      >
                        <div className="flex items-center space-x-3">
                          {getCategoryIcon(skill.category)}
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <button
                          onClick={() => toggleSkill(skillId)}
                          className="px-3 py-1 text-sm rounded-lg bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50"
                        >
                          Add
                        </button>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
              <h4 className="font-bold mb-4">Ready to Work Together?</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {matchPercentage > 80
                  ? "Perfect match! Let's discuss your project details."
                  : matchPercentage > 60
                    ? "Good match! I can quickly learn any additional requirements."
                    : "Let's discuss how I can help with your project requirements."}
              </p>
              <a
                href="#contact"
                className="block w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 text-center transition-all"
              >
                {matchPercentage > 80
                  ? "Start Project Now"
                  : "Discuss Requirements"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillMatcher;
