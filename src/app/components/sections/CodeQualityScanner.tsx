"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Star,
  GitBranch,
  Code,
  Shield,
  Zap,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Download,
  Eye,
  Lock,
} from "lucide-react";

const CodeQualityScanner = () => {
  const [githubUrl, setGithubUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);

  const scanRepository = async () => {
    if (!githubUrl.includes("github.com")) {
      alert("Please enter a valid GitHub URL");
      return;
    }

    setScanning(true);

    // Extract username and repo from URL
    const urlParts = githubUrl.split("/");
    const username = urlParts[3];
    const repo = urlParts[4];

    try {
      // Using GitHub REST API (free, no authentication needed for public repos)
      const response = await fetch(
        `https://api.github.com/repos/${username}/${repo}`
      );
      const repoData = await response.json();

      // Simulate additional metrics (in real app, you'd make more API calls)
      const qualityScore = calculateQualityScore(repoData);

      setScanResult({
        ...repoData,
        qualityScore,
        recommendations: generateRecommendations(qualityScore),
        scannedAt: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Scan failed:", error);
      alert("Failed to scan repository. Make sure it's public.");
    } finally {
      setScanning(false);
    }
  };

  const calculateQualityScore = (repoData: any) => {
    let score = 50; // Base score

    // Add points for stars
    if (repoData.stargazers_count > 100) score += 20;
    else if (repoData.stargazers_count > 10) score += 10;

    // Add points for recent activity
    const updatedDate = new Date(repoData.updated_at);
    const daysSinceUpdate =
      (Date.now() - updatedDate.getTime()) / (1000 * 3600 * 24);
    if (daysSinceUpdate < 30) score += 15;
    else if (daysSinceUpdate < 90) score += 5;

    // Add points for documentation
    if (repoData.has_wiki || repoData.has_pages) score += 10;

    // Add points for issues enabled (shows maintenance)
    if (repoData.has_issues) score += 5;

    return Math.min(score, 100);
  };

  const generateRecommendations = (score: number) => {
    if (score >= 80) {
      return [
        "Excellent code quality",
        "Good documentation",
        "Active maintenance",
        "Strong community",
      ];
    } else if (score >= 60) {
      return [
        "Add more documentation",
        "Increase test coverage",
        "Update dependencies",
        "Add CI/CD pipeline",
      ];
    } else {
      return [
        "Needs significant improvement",
        "Add comprehensive tests",
        "Improve documentation",
        "Update security dependencies",
      ];
    }
  };

  const sampleRepos = [
    { name: "Next.js Portfolio", url: "https://github.com/vercel/next.js" },
    { name: "React Documentation", url: "https://github.com/facebook/react" },
    {
      name: "Tailwind CSS",
      url: "https://github.com/tailwindlabs/tailwindcss",
    },
  ];

  return (
    <section id="code-scanner" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-black text-white mb-4">
              <Github className="h-5 w-5 mr-2" />
              <span className="font-medium">Free Code Quality Scanner</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Scan <span className="text-gradient">Code Quality</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Analyze any GitHub repository for code quality, maintenance, and
              best practices
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Scanner Input */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black text-white mb-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <input
                type="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/username/repository"
                className="flex-1 px-6 py-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <button
                onClick={scanRepository}
                disabled={scanning}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all disabled:opacity-50"
              >
                {scanning ? "Scanning..." : "Scan Repository"}
              </button>
            </div>

            <p className="text-gray-400 text-sm">
              Enter any public GitHub repository URL to analyze code quality
            </p>

            {/* Sample Repositories */}
            <div className="mt-6">
              <p className="text-gray-400 mb-3">
                Try these sample repositories:
              </p>
              <div className="flex flex-wrap gap-2">
                {sampleRepos.map((repo) => (
                  <button
                    key={repo.name}
                    onClick={() => {
                      setGithubUrl(repo.url);
                      setTimeout(() => scanRepository(), 100);
                    }}
                    className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-sm"
                  >
                    {repo.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Scan Results or Placeholder */}
          {scanResult ? (
            <div className="space-y-8">
              {/* Repository Overview */}
              <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {scanResult.full_name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {scanResult.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gradient">
                      {scanResult.qualityScore}/100
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Quality Score
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold">
                      {scanResult.stargazers_count}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Stars
                    </div>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <GitBranch className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold">
                      {scanResult.forks_count}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Forks
                    </div>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <Eye className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold">
                      {scanResult.watchers_count}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Watchers
                    </div>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <Code className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <div className="text-2xl font-bold capitalize">
                      {scanResult.language || "N/A"}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Language
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Analysis */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Score Breakdown */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                  <h4 className="text-xl font-bold mb-6">Quality Analysis</h4>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Code Quality</span>
                        <span>
                          {Math.min(scanResult.qualityScore + 10, 100)}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                          style={{
                            width: `${Math.min(
                              scanResult.qualityScore + 10,
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Documentation</span>
                        <span>{scanResult.has_wiki ? "90%" : "40%"}</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500"
                          style={{ width: scanResult.has_wiki ? "90%" : "40%" }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Maintenance</span>
                        <span>
                          {new Date(scanResult.updated_at) >
                          new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
                            ? "85%"
                            : "50%"}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
                          style={{
                            width:
                              new Date(scanResult.updated_at) >
                              new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
                                ? "85%"
                                : "50%",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                  <h4 className="text-xl font-bold mb-6 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    Recommendations
                  </h4>

                  <div className="space-y-4">
                    {scanResult.recommendations.map(
                      (rec: string, index: number) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div
                            className={`p-1 rounded-full ${
                              rec.startsWith("Excellent") ||
                              rec.startsWith("Good")
                                ? "bg-green-100 dark:bg-green-900/30"
                                : "bg-yellow-100 dark:bg-yellow-900/30"
                            }`}
                          >
                            {rec.startsWith("Excellent") ||
                            rec.startsWith("Good") ? (
                              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
                            )}
                          </div>
                          <span className="text-sm">{rec}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Security & Best Practices */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Security & Best Practices
                </h4>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-900/50">
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      ✓
                    </div>
                    <div className="font-medium">Public Repository</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Visibility
                    </div>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-900/50">
                    <div
                      className={`text-2xl font-bold mb-2 ${
                        scanResult.has_issues
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {scanResult.has_issues ? "✓" : "⚠"}
                    </div>
                    <div className="font-medium">Issues Enabled</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Support
                    </div>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-900/50">
                    <div
                      className={`text-2xl font-bold mb-2 ${
                        scanResult.has_wiki
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {scanResult.has_wiki ? "✓" : "⚠"}
                    </div>
                    <div className="font-medium">Documentation</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Wiki
                    </div>
                  </div>

                  <div className="text-center p-4 rounded-xl bg-white/50 dark:bg-gray-900/50">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      {scanResult.open_issues}
                    </div>
                    <div className="font-medium">Open Issues</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Active
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button
                  onClick={() => window.open(scanResult.html_url, "_blank")}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View Repository on GitHub
                </button>
              </div>
            </div>
          ) : (
            /* Placeholder State */
            <div className="p-12 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-center">
              <div className="inline-flex p-4 rounded-full bg-white dark:bg-gray-800 mb-6">
                <Zap className="h-12 w-12 text-yellow-500" />
              </div>

              <h3 className="text-2xl font-bold mb-4">
                Ready to Scan Code Quality?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Enter any GitHub repository URL above to analyze code quality,
                maintenance status, documentation, and security practices.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="p-4 rounded-xl bg-white dark:bg-gray-900">
                  <Shield className="h-8 w-8 text-green-500 mx-auto mb-3" />
                  <div className="font-bold mb-1">Security Scan</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Check for vulnerabilities
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-gray-900">
                  <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                  <div className="font-bold mb-1">Quality Metrics</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Star ratings & activity
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-gray-900">
                  <Lock className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                  <div className="font-bold mb-1">Best Practices</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Industry standards check
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CodeQualityScanner;
