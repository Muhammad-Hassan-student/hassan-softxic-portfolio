"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  Database,
  Server,
  Network,
  Shield,
  Zap,
  GitBranch,
} from "lucide-react";

const Architecture = () => {
  const [selectedArchitecture, setSelectedArchitecture] =
    useState<string>("saas");

  const architectures = [
    {
      id: "saas",
      title: "SaaS Platform Architecture",
      icon: <Layers className="h-6 w-6" />,
      description: "Multi-tenant scalable architecture for SaaS applications",
      layers: [
        {
          name: "Presentation Layer",
          components: ["Next.js Frontend", "CDN", "Load Balancer"],
          color: "from-blue-400 to-cyan-400",
        },
        {
          name: "Application Layer",
          components: [
            "API Gateway",
            "Microservices",
            "Authentication Service",
          ],
          color: "from-purple-400 to-pink-400",
        },
        {
          name: "Business Layer",
          components: [
            "Business Logic Services",
            "Workflow Engine",
            "Payment Processing",
          ],
          color: "from-green-400 to-emerald-400",
        },
        {
          name: "Data Layer",
          components: ["PostgreSQL", "Redis Cache", "Message Queue"],
          color: "from-orange-400 to-red-400",
        },
      ],
      features: [
        "Row-level security for multi-tenancy",
        "Horizontal scaling capability",
        "99.9% uptime SLA",
        "Automated backup & recovery",
      ],
      bestFor: ["B2B SaaS", "Subscription platforms", "Enterprise software"],
    },
    {
      id: "microservices",
      title: "Microservices Architecture",
      icon: <GitBranch className="h-6 w-6" />,
      description: "Decoupled services for independent scaling and deployment",
      layers: [
        {
          name: "API Gateway",
          components: ["Kong/Nginx", "Rate Limiting", "Authentication"],
          color: "from-blue-400 to-cyan-400",
        },
        {
          name: "Service Mesh",
          components: [
            "Service Discovery",
            "Load Balancing",
            "Circuit Breaker",
          ],
          color: "from-purple-400 to-pink-400",
        },
        {
          name: "Business Services",
          components: ["User Service", "Order Service", "Payment Service"],
          color: "from-green-400 to-emerald-400",
        },
        {
          name: "Infrastructure",
          components: ["Docker", "Kubernetes", "Monitoring"],
          color: "from-orange-400 to-red-400",
        },
      ],
      features: [
        "Independent service deployment",
        "Fault isolation",
        "Technology diversity",
        "Continuous delivery",
      ],
      bestFor: [
        "Large-scale applications",
        "Complex domains",
        "Multiple teams",
      ],
    },
    {
      id: "serverless",
      title: "Serverless Architecture",
      icon: <Zap className="h-6 w-6" />,
      description:
        "Event-driven architecture with auto-scaling and pay-per-use",
      layers: [
        {
          name: "Frontend",
          components: ["Next.js (SSG)", "CDN", "Edge Functions"],
          color: "from-blue-400 to-cyan-400",
        },
        {
          name: "Serverless Functions",
          components: ["API Routes", "Background Jobs", "Webhook Handlers"],
          color: "from-purple-400 to-pink-400",
        },
        {
          name: "Managed Services",
          components: ["Auth0/Clerk", "Stripe", "SendGrid"],
          color: "from-green-400 to-emerald-400",
        },
        {
          name: "Database",
          components: ["PlanetScale", "Upstash Redis", "Blob Storage"],
          color: "from-orange-400 to-red-400",
        },
      ],
      features: [
        "Zero server management",
        "Automatic scaling",
        "Pay-per-execution",
        "High availability",
      ],
      bestFor: ["MVPs", "Variable workloads", "Cost-sensitive projects"],
    },
  ];

  const selectedData = architectures.find((a) => a.id === selectedArchitecture);

  return (
    <section id="architecture" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Architecture <span className="text-gradient">Blueprints</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Proven architecture patterns for scalable, maintainable
              applications
            </p>
          </motion.div>
        </div>

        {/* Architecture Selector */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {architectures.map((arch) => (
            <motion.button
              key={arch.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedArchitecture(arch.id)}
              className={`p-6 rounded-xl text-left transition-all ${
                selectedArchitecture === arch.id
                  ? "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-500"
                  : "bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700"
              }`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className={`p-2 rounded-lg ${
                    selectedArchitecture === arch.id
                      ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {arch.icon}
                </div>
                <h3 className="font-bold text-lg">{arch.title}</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {arch.description}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Architecture Details */}
        {selectedData && (
          <motion.div
            key={selectedArchitecture}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Architecture Diagram */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Network className="h-64 w-64 text-gray-200 dark:text-gray-800 opacity-20" />
              </div>

              <div className="relative space-y-4">
                {selectedData.layers.map((layer, index) => (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-6 rounded-2xl bg-gradient-to-r ${
                      layer.color
                    } bg-opacity-10 border border-${
                      layer.color.split("-")[1]
                    }-200 dark:border-${layer.color.split("-")[1]}-800`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`h-10 w-10 rounded-full bg-gradient-to-r ${layer.color} flex items-center justify-center text-white`}
                        >
                          {index + 1}
                        </div>
                        <h4 className="text-xl font-bold">{layer.name}</h4>
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Layer {index + 1}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-3">
                      {layer.components.map((component) => (
                        <div
                          key={component}
                          className="px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-800"
                        >
                          <div className="flex items-center space-x-2">
                            <div className="h-2 w-2 rounded-full bg-current" />
                            <span className="font-medium">{component}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features & Benefits */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-500" />
                  Key Features
                </h4>
                <ul className="space-y-4">
                  {selectedData.features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 dark:text-green-400 font-bold">
                          ✓
                        </span>
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <Cpu className="h-5 w-5 mr-2 text-blue-500" />
                  Best For
                </h4>
                <div className="space-y-4">
                  {selectedData.bestFor.map((useCase, index) => (
                    <motion.div
                      key={useCase}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                          <span className="text-blue-600 dark:text-blue-400 font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <span className="font-medium">{useCase}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="p-6 rounded-2xl glass-effect">
              <h4 className="text-xl font-bold mb-6">
                Technical Specifications
              </h4>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 rounded-xl bg-white dark:bg-gray-800/50">
                  <Database className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <div className="font-bold">Database</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    PostgreSQL + Redis
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white dark:bg-gray-800/50">
                  <Server className="h-8 w-8 text-green-500 mx-auto mb-2" />
                  <div className="font-bold">Infrastructure</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    AWS / Vercel / Docker
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white dark:bg-gray-800/50">
                  <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="font-bold">Performance</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    95+ Lighthouse
                  </div>
                </div>
                <div className="text-center p-4 rounded-xl bg-white dark:bg-gray-800/50">
                  <Shield className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <div className="font-bold">Security</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    SOC2 Compliant
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-cyan-500/10 dark:from-blue-900/20 dark:to-cyan-900/20 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold mb-4">
              Need Custom Architecture?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Every project has unique requirements. Let me design a custom
              architecture that perfectly fits your needs, budget, and growth
              plans.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all"
            >
              <Cpu className="h-5 w-5 mr-2" />
              Schedule Architecture Review
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;
