"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Palette,
  Brush,
  Layers,
  Type,
  Image,
  Smartphone,
  Globe,
  Package,
  CheckCircle,
  Clock,
  Users,
  Zap,
  TrendingUp,
} from "lucide-react";

const DesignServices = () => {
  const [selectedCategory, setSelectedCategory] = useState("branding");

  const designCategories = [
    {
      id: "branding",
      title: "Brand Identity",
      icon: <Palette className="h-6 w-6" />,
      services: [
        {
          name: "Logo Design",
          description: "Memorable logo that represents your brand",
          deliverables: [
            "3 Logo Concepts",
            "Color Palette",
            "Logo Variations",
            "Brand Guidelines",
          ],
          timeline: "7-10 days",
          price: "$499",
        },
        {
          name: "Complete Brand Identity",
          description: "Full brand system including all assets",
          deliverables: [
            "Logo Suite",
            "Typography",
            "Color System",
            "Brand Guidelines",
            "Social Media Kit",
          ],
          timeline: "3-4 weeks",
          price: "$1499",
        },
        {
          name: "Brand Strategy",
          description: "Strategic foundation for your brand",
          deliverables: [
            "Brand Positioning",
            "Voice & Tone",
            "Competitor Analysis",
            "Brand Architecture",
          ],
          timeline: "2-3 weeks",
          price: "$899",
        },
      ],
    },
    {
      id: "web",
      title: "Web & UI/UX Design",
      icon: <Globe className="h-6 w-6" />,
      services: [
        {
          name: "Website Design",
          description: "Modern, responsive website design",
          deliverables: [
            "Wireframes",
            "Mockups",
            "Responsive Design",
            "Developer Handoff",
          ],
          timeline: "2-3 weeks",
          price: "$1299",
        },
        {
          name: "UI/UX Design",
          description: "User-centered interface design",
          deliverables: [
            "User Research",
            "User Flows",
            "Prototypes",
            "Usability Testing",
          ],
          timeline: "3-4 weeks",
          price: "$1999",
        },
        {
          name: "Landing Page Design",
          description: "High-converting landing pages",
          deliverables: [
            "3 Design Concepts",
            "Mobile Responsive",
            "A/B Testing Ready",
          ],
          timeline: "5-7 days",
          price: "$699",
        },
      ],
    },
    {
      id: "print",
      title: "Print & Marketing",
      icon: <Image className="h-6 w-6" />,
      services: [
        {
          name: "Business Cards",
          description: "Professional business card design",
          deliverables: [
            "3 Design Concepts",
            "Print-Ready Files",
            "Digital Versions",
          ],
          timeline: "3-5 days",
          price: "$299",
        },
        {
          name: "Brochure Design",
          description: "Informative and engaging brochures",
          deliverables: ["Layout Design", "Content Integration", "Print Files"],
          timeline: "7-10 days",
          price: "$599",
        },
        {
          name: "Marketing Collateral",
          description: "Complete marketing material suite",
          deliverables: [
            "Flyers",
            "Posters",
            "Presentations",
            "Email Templates",
          ],
          timeline: "2-3 weeks",
          price: "$1199",
        },
      ],
    },
    {
      id: "social",
      title: "Social Media Graphics",
      icon: <Smartphone className="h-6 w-6" />,
      services: [
        {
          name: "Social Media Kit",
          description: "Complete set of social media graphics",
          deliverables: [
            "Profile & Cover Images",
            "Post Templates",
            "Story Templates",
            "Icon Set",
          ],
          timeline: "5-7 days",
          price: "$499",
        },
        {
          name: "Content Creation",
          description: "Monthly social media graphics",
          deliverables: [
            "15 Posts/Month",
            "10 Stories/Month",
            "Content Calendar",
          ],
          timeline: "Ongoing",
          price: "$799/mo",
        },
        {
          name: "Ad Creative",
          description: "High-performing ad designs",
          deliverables: [
            "5 Ad Variations",
            "A/B Testing",
            "Performance Analysis",
          ],
          timeline: "3-5 days",
          price: "$399",
        },
      ],
    },
    {
      id: "package",
      title: "Design Packages",
      icon: <Package className="h-6 w-6" />,
      services: [
        {
          name: "Startup Package",
          description: "Everything a startup needs to launch",
          deliverables: [
            "Logo Design",
            "Brand Guidelines",
            "Business Cards",
            "Social Media Kit",
          ],
          timeline: "3 weeks",
          price: "$1999",
        },
        {
          name: "Growth Package",
          description: "Complete design system for growing businesses",
          deliverables: [
            "Full Brand Identity",
            "Website Design",
            "Marketing Collateral",
            "Social Media Kit",
          ],
          timeline: "6 weeks",
          price: "$3999",
        },
        {
          name: "Enterprise Package",
          description: "Comprehensive design solution",
          deliverables: [
            "Complete Rebrand",
            "Website Redesign",
            "All Marketing Materials",
            "Ongoing Support",
          ],
          timeline: "8-12 weeks",
          price: "$8999",
        },
      ],
    },
  ];

  const selectedData = designCategories.find(
    (cat) => cat.id === selectedCategory,
  );

  return (
    <section
      id="design-services"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 mb-6">
              <Brush className="h-5 w-5 text-pink-600 mr-2" />
              <span className="font-medium">Professional Design Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Creative <span className="text-gradient">Design</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Transform your vision into stunning visual designs that engage and
              convert
            </p>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {designCategories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {category.icon}
              <span className="font-medium">{category.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Services Grid */}
        {selectedData && (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {selectedData.services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-all group"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-pink-100 to-rose-100 dark:from-pink-900/30 dark:to-rose-900/30 text-pink-600 dark:text-pink-400 mb-4">
                    {selectedData.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-sm text-gray-700 dark:text-gray-300">
                      Deliverables:
                    </h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Timeline</div>
                      <div className="font-medium flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-blue-500" />
                        {service.timeline}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">
                        Investment
                      </div>
                      <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                        {service.price}
                      </div>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white font-medium hover:from-pink-600 hover:to-rose-600 transition-all group-hover:scale-105">
                  Select This Service
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Our Design Process
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-1 w-3/4 bg-gradient-to-r from-purple-500 to-pink-500 top-12" />

              <div className="grid md:grid-cols-5 gap-8">
                {[
                  {
                    step: "1",
                    title: "Discovery",
                    description: "Understand your goals and requirements",
                    icon: <Users className="h-6 w-6" />,
                  },
                  {
                    step: "2",
                    title: "Research",
                    description: "Market and competitor analysis",
                    icon: <TrendingUp className="h-6 w-6" />,
                  },
                  {
                    step: "3",
                    title: "Concept",
                    description: "Create initial design concepts",
                    icon: <Brush className="h-6 w-6" />,
                  },
                  {
                    step: "4",
                    title: "Refine",
                    description: "Feedback and revisions",
                    icon: <Layers className="h-6 w-6" />,
                  },
                  {
                    step: "5",
                    title: "Deliver",
                    description: "Final files and support",
                    icon: <Package className="h-6 w-6" />,
                  },
                ].map((step, index) => (
                  <div key={step.step} className="text-center relative">
                    <div className="h-24 w-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 relative z-10">
                      {step.step}
                    </div>
                    <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Design Portfolio
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: "Brand Identity",
                project: "TechStart Rebrand",
                results: "+40% brand recognition",
              },
              {
                category: "Web Design",
                project: "E-commerce Redesign",
                results: "+35% conversions",
              },
              {
                category: "Social Media",
                project: "Fitness App Graphics",
                results: "+300% engagement",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800"
              >
                <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-400 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold">D{index + 1}</div>
                      <div className="text-sm opacity-90">Design Showcase</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                    {item.category}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.project}</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Complete design solution delivered in 4 weeks
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                      {item.results}
                    </span>
                    <button className="text-sm text-purple-600 dark:text-purple-400 hover:underline">
                      View Case Study →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignServices;
