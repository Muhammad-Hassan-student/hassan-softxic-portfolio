"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Users,
  Zap,
  Clock,
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";

const ClientResults = () => {
  const caseStudies = [
    {
      company: "FinTech Startup",
      problem: "Slow MVP development with high costs",
      solution: "Built scalable platform in 3 months",
      results: [
        "40% faster development",
        "$50k saved in first year",
        "1000+ active users",
        "4.9/5 client satisfaction",
      ],
      metrics: { revenue: "+300%", users: "+250%", speed: "2x faster" },
    },
    {
      company: "E-commerce Brand",
      problem: "Poor mobile experience losing sales",
      solution: "Redesigned mobile-first PWA",
      results: [
        "35% increase in mobile conversions",
        "60% faster page load",
        "25% reduced bounce rate",
        "40% more repeat customers",
      ],
      metrics: { revenue: "+45%", conversions: "+35%", speed: "+60%" },
    },
    {
      company: "Healthcare Platform",
      problem: "HIPAA compliance challenges",
      solution: "Secure, compliant architecture",
      results: [
        "100% HIPAA compliance",
        "99.9% uptime",
        "50% faster data processing",
        "Zero security incidents",
      ],
      metrics: { compliance: "100%", uptime: "99.9%", speed: "+50%" },
    },
  ];

  return (
    <section id="client-results" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 mb-4">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              <span className="font-medium ml-2">Proven Results</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real <span className="text-gradient">Client Results</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See measurable outcomes and ROI from actual client projects
            </p>
          </motion.div>
        </div>

        {/* Results Summary */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
            <DollarSign className="h-12 w-12 mb-4" />
            <div className="text-3xl font-bold mb-2">$2M+</div>
            <div className="opacity-90">Revenue Generated</div>
            <div className="text-sm opacity-75 mt-2">
              For clients through digital solutions
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-500 text-white">
            <Users className="h-12 w-12 mb-4" />
            <div className="text-3xl font-bold mb-2">50K+</div>
            <div className="opacity-90">Users Impacted</div>
            <div className="text-sm opacity-75 mt-2">
              Across all deployed applications
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 text-white">
            <Zap className="h-12 w-12 mb-4" />
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="opacity-90">Success Rate</div>
            <div className="text-sm opacity-75 mt-2">
              Projects delivered on time & budget
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                {/* Left - Problem & Solution */}
                <div className="lg:w-2/3">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">{study.company}</h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-500 fill-current mr-1" />
                      <span className="font-bold">4.9/5</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30">
                      <h4 className="font-bold text-red-700 dark:text-red-400 mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2" />
                        The Challenge
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {study.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800/30">
                      <h4 className="font-bold text-green-700 dark:text-green-400 mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        My Solution
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="font-bold mb-4 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                      Measurable Results
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="h-2 w-2 rounded-full bg-green-500" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Metrics */}
                <div className="lg:w-1/3">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black text-white">
                    <h4 className="font-bold mb-6 text-center">
                      Performance Metrics
                    </h4>

                    <div className="space-y-6">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-3xl font-bold text-green-400 mb-1">
                            {value}
                          </div>
                          <div className="text-sm text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-800">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Timeline</span>
                        <span>3-4 months</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2">
                        <span className="text-gray-400">Team Size</span>
                        <span>3-5 developers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold mb-4">
              Ready for Similar Results?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's work together to achieve outstanding results for your
              business
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-bold hover:shadow-xl transition-all"
            >
              <ArrowRight className="h-5 w-5 mr-2" />
              Get Your Free Strategy Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientResults;
