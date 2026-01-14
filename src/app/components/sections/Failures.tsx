"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  BookOpen,
  XCircle,
  CheckCircle,
} from "lucide-react";
import failuresData from "@/data/failures.json";

const Failures = () => {
  const [selectedFailure, setSelectedFailure] = useState<string | null>(null);

  const selectedData = selectedFailure
    ? failuresData.find((f) => f.id === selectedFailure)
    : null;

  return (
    <section id="failures" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-red-500">Failures</span> &{" "}
              <span className="text-green-500">Learnings</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Real growth comes from mistakes. Here's what I've learned the hard
              way.
            </p>
          </motion.div>
        </div>

        {/* Failures Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {failuresData.map((failure, index) => (
            <motion.div
              key={failure.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedFailure(failure.id)}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                selectedFailure === failure.id
                  ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                  : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-2 rounded-lg ${
                      selectedFailure === failure.id
                        ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{failure.title}</h3>
                    <div className="text-sm text-gray-500">{failure.year}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs px-2 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
                    Lesson #{index + 1}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                {failure.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Impact: {failure.impact.split(",")[0]}
                </div>
                <button className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  Learn more →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Failure Details */}
        {selectedData && (
          <motion.div
            key={selectedFailure}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedData.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {selectedData.year} • {selectedData.context}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedFailure(null)}
                  className="p-2 hover:bg-white/50 dark:hover:bg-gray-900/50 rounded-lg"
                >
                  Close
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Mistakes */}
                <div>
                  <h4 className="font-semibold text-lg mb-4 flex items-center text-red-600 dark:text-red-400">
                    <XCircle className="h-5 w-5 mr-2" />
                    What Went Wrong
                  </h4>
                  <div className="space-y-3">
                    {selectedData.mistakes.map((mistake, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-white/50 dark:bg-gray-900/50"
                      >
                        <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                          <span className="text-red-600 dark:text-red-400 font-bold">
                            ✗
                          </span>
                        </div>
                        <span>{mistake}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lessons & Now */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center text-green-600 dark:text-green-400">
                      <Lightbulb className="h-5 w-5 mr-2" />
                      The Lesson
                    </h4>
                    <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-900/50">
                      <p className="font-medium">{selectedData.lesson}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4 flex items-center text-blue-600 dark:text-blue-400">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      How I Do It Now
                    </h4>
                    <div className="p-4 rounded-lg bg-white/50 dark:bg-gray-900/50">
                      <p>{selectedData.now}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact */}
              <div className="mt-8 p-4 rounded-lg bg-white/70 dark:bg-gray-900/70">
                <div className="flex items-center space-x-3">
                  <BookOpen className="h-5 w-5 text-orange-500" />
                  <div>
                    <div className="font-medium">Impact:</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {selectedData.impact}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Growth Mindset */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <div className="inline-flex p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
              <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Growth Mindset in Action
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
              These failures weren't setbacks — they were accelerators for
              growth. Each mistake taught me more than any success ever could.
            </p>
            <div className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold">
              <TrendingUp className="h-5 w-5 mr-2" />
              Still Learning, Still Growing
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Failures;
