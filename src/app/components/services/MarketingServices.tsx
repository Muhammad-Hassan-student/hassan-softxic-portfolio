"use client";

import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Search,
  Video,
  Mail,
  MessageSquare,
  Target,
  BarChart,
  Users,
  CheckCircle,
  DollarSign,
  Clock,
  Zap,
  X,
  ArrowRight,
  ChevronRight,
  Shield,
  TrendingUp as TrendingUpIcon,
} from "lucide-react";

// Types
interface ServicePackage {
  name: string;
  price?: string;
  duration?: string;
  platforms?: number | string;
  budget?: string;
  management?: string;
  content?: string;
  subscribers?: string;
  videos?: string;
}

interface MarketingService {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  packages: ServicePackage[];
  results: string[];
}

const MarketingServices = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Use useMemo for static data to prevent unnecessary recalculations
  const marketingServices = useMemo<MarketingService[]>(
    () => [
      {
        id: "seo",
        title: "SEO Optimization",
        icon: <Search className="h-8 w-8" />,
        description: "Improve your website ranking and organic traffic",
        features: [
          "Keyword Research & Strategy",
          "On-page SEO Optimization",
          "Technical SEO Audit",
          "Content Optimization",
          "Backlink Building",
          "Monthly Performance Reports",
        ],
        packages: [
          { name: "Starter", price: "$499/mo", duration: "3 months min" },
          { name: "Pro", price: "$999/mo", duration: "6 months min" },
          { name: "Enterprise", price: "$1999/mo", duration: "12 months" },
        ],
        results: ["+300% organic traffic", "Top 3 rankings", "+150% conversions"],
      },
      {
        id: "smm",
        title: "Social Media Marketing",
        icon: <Users className="h-8 w-8" />,
        description: "Grow your brand presence across social platforms",
        features: [
          "Content Strategy & Calendar",
          "Platform Management (5 platforms)",
          "Community Engagement",
          "Paid Social Advertising",
          "Influencer Collaboration",
          "Analytics & Reporting",
        ],
        packages: [
          { name: "Basic", price: "$799/mo", platforms: 3 },
          { name: "Advanced", price: "$1499/mo", platforms: 5 },
          { name: "Premium", price: "$2499/mo", platforms: "All" },
        ],
        results: ["50% engagement increase", "10K+ followers/month", "5x ROI"],
      },
      {
        id: "ppc",
        title: "PPC Advertising",
        icon: <DollarSign className="h-8 w-8" />,
        description: "Instant results with targeted paid advertising",
        features: [
          "Campaign Strategy & Setup",
          "Google Ads Management",
          "Facebook/Instagram Ads",
          "LinkedIn Advertising",
          "Remarketing Campaigns",
          "ROI Optimization",
        ],
        packages: [
          { name: "Starter", budget: "$1000/mo", management: "15%" },
          { name: "Growth", budget: "$3000/mo", management: "12%" },
          { name: "Scale", budget: "$10000/mo", management: "10%" },
        ],
        results: ["3-5x ROAS", "50% lower CPA", "Instant traffic"],
      },
      {
        id: "content",
        title: "Content Marketing",
        icon: <MessageSquare className="h-8 w-8" />,
        description: "Build authority and engage your audience",
        features: [
          "Content Strategy Development",
          "Blog Posts & Articles (8/month)",
          "Email Newsletter Creation",
          "Whitepapers & Case Studies",
          "Video Content Production",
          "Content Distribution",
        ],
        packages: [
          { name: "Blog Focus", price: "$1299/mo", content: "8 articles" },
          { name: "Full Content", price: "$2499/mo", content: "Full suite" },
          { name: "Video Content", price: "$3999/mo", content: "+ videos" },
        ],
        results: ["3x more leads", "40% brand awareness", "Expert positioning"],
      },
      {
        id: "email",
        title: "Email Marketing",
        icon: <Mail className="h-8 w-8" />,
        description: "Convert leads with targeted email campaigns",
        features: [
          "Email Strategy Development",
          "List Building & Segmentation",
          "Automation Workflows",
          "A/B Testing & Optimization",
          "Weekly Campaign Management",
          "Performance Analytics",
        ],
        packages: [
          { name: "Essential", price: "$599/mo", subscribers: "10K" },
          { name: "Professional", price: "$1199/mo", subscribers: "50K" },
          { name: "Enterprise", price: "$2199/mo", subscribers: "Unlimited" },
        ],
        results: ["25% open rates", "5% click-through", "20x ROI"],
      },
      {
        id: "video",
        title: "Video Marketing",
        icon: <Video className="h-8 w-8" />,
        description: "Engage audience with compelling video content",
        features: [
          "Video Strategy & Planning",
          "Script Writing & Storyboarding",
          "Professional Video Production",
          "Animation & Motion Graphics",
          "Social Media Video Clips",
          "YouTube Channel Management",
        ],
        packages: [
          { name: "Social Videos", price: "$1499/mo", videos: "4/month" },
          { name: "Product Videos", price: "$2999/mo", videos: "2/month" },
          { name: "Full Production", price: "$4999/mo", videos: "Complete" },
        ],
        results: ["10x more engagement", "80% retention", "Viral potential"],
      },
    ],
    []
  );

  const selectedData = useMemo(
    () => marketingServices.find((s) => s.id === selectedService) || null,
    [selectedService, marketingServices]
  );

  const handleServiceSelect = useCallback((serviceId: string) => {
    setSelectedService((prev) => (prev === serviceId ? null : serviceId));
  }, []);

  const handleCloseDetails = useCallback(() => {
    setSelectedService(null);
  }, []);

  const getPackageDisplay = useCallback((pkg: ServicePackage) => {
    if (pkg.duration) return pkg.duration;
    if (pkg.platforms) return `${pkg.platforms} platform${pkg.platforms === 1 ? "" : "s"}`;
    if (pkg.content) return pkg.content;
    if (pkg.subscribers) return `Up to ${pkg.subscribers} subscribers`;
    if (pkg.management) return `${pkg.management} management fee`;
    if (pkg.videos) return `${pkg.videos}`;
    return "";
  }, []);

  const marketingProcessSteps = useMemo(
    () => [
      {
        step: "1",
        title: "Discovery & Audit",
        description: "Comprehensive analysis of your current marketing",
        icon: <Search className="h-6 w-6" />,
        color: "from-blue-500 to-cyan-500",
      },
      {
        step: "2",
        title: "Strategy Development",
        description: "Custom marketing plan with clear objectives",
        icon: <Target className="h-6 w-6" />,
        color: "from-purple-500 to-pink-500",
      },
      {
        step: "3",
        title: "Implementation",
        description: "Execution with regular optimizations",
        icon: <Zap className="h-6 w-6" />,
        color: "from-green-500 to-emerald-500",
      },
      {
        step: "4",
        title: "Analysis & Scaling",
        description: "Performance tracking and scaling successful campaigns",
        icon: <BarChart className="h-6 w-6" />,
        color: "from-orange-500 to-amber-500",
      },
    ],
    []
  );

  return (
    <section
      id="marketing-services"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300/10 dark:bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 mb-6 border border-purple-100 dark:border-purple-800/30">
              <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
              <span className="font-medium text-gray-800 dark:text-gray-200">
                Digital Marketing Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Data-Driven <span className="text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Marketing</span> Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive marketing strategies that deliver measurable results and ROI. 
              We combine creativity with analytics to drive growth.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {marketingServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => handleServiceSelect(service.id)}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`group p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                selectedService === service.id
                  ? "border-purple-500 bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-900 shadow-lg"
                  : "border-gray-200 dark:border-gray-800 hover:border-purple-300 dark:hover:border-purple-700 bg-white dark:bg-gray-900"
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleServiceSelect(service.id)}
              aria-label={`View details for ${service.title}`}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div
                  className={`p-3 rounded-xl transition-colors duration-300 ${
                    selectedService === service.id
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/20"
                  }`}
                >
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                    <DollarSign className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Starting at {service.packages[0].price || service.packages[0].budget}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <Clock className="h-4 w-4 text-blue-500 flex-shrink-0" />
                    <span>3-6 months</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.results.slice(0, 2).map((result, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 text-green-800 dark:text-green-300 font-medium"
                    >
                      {result}
                    </span>
                  ))}
                  {service.results.length > 2 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      +{service.results.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 group-hover:border-purple-200 dark:group-hover:border-purple-800 transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    View Details
                  </span>
                  <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Details Panel */}
        <AnimatePresence mode="wait">
          {selectedData && (
            <motion.div
              key={selectedService}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
              className="mb-12"
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-50/80 to-pink-50/80 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 backdrop-blur-sm">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start justify-between mb-8 gap-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      {selectedData.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedData.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {selectedData.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleCloseDetails}
                    className="p-2 rounded-lg hover:bg-white/50 dark:hover:bg-gray-900/50 transition-colors duration-200 self-start sm:self-center"
                    aria-label="Close service details"
                  >
                    <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                  {/* Features */}
                  <div className="lg:col-span-2">
                    <div className="bg-white/70 dark:bg-gray-900/70 rounded-xl p-6">
                      <h4 className="font-bold text-lg mb-4 flex items-center text-gray-900 dark:text-white">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                        What's Included
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {selectedData.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                          >
                            <div className="h-5 w-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-green-600 dark:text-green-400 text-xs font-bold">
                                ✓
                              </span>
                            </div>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Packages */}
                  <div>
                    <h4 className="font-bold text-lg mb-4 flex items-center text-gray-900 dark:text-white">
                      <DollarSign className="h-5 w-5 mr-2 text-blue-500" />
                      Service Packages
                    </h4>
                    <div className="space-y-4">
                      {selectedData.packages.map((pkg, index) => (
                        <div
                          key={pkg.name}
                          className={`p-4 rounded-xl transition-all duration-300 ${
                            index === 1
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white transform scale-105 shadow-lg"
                              : "bg-white dark:bg-gray-900 hover:shadow-md"
                          }`}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <div className={`font-bold ${index === 1 ? "text-white" : "text-gray-900 dark:text-white"}`}>
                              {pkg.name}
                            </div>
                            <div className={`text-2xl font-bold ${index === 1 ? "text-white" : "text-purple-600 dark:text-purple-400"}`}>
                              {(pkg.price || pkg.budget)?.replace("/mo", "")}
                              <span className="text-sm font-normal">/mo</span>
                            </div>
                          </div>
                          <div className={`text-sm ${index === 1 ? "text-purple-100" : "text-gray-600 dark:text-gray-400"}`}>
                            {getPackageDisplay(pkg)}
                          </div>
                          {index === 1 && (
                            <div className="mt-3 text-sm font-medium flex items-center">
                              <Shield className="h-4 w-4 mr-1" />
                              Most Popular
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Expected Results */}
                <div className="mb-8">
                  <h4 className="font-bold text-lg mb-4 flex items-center text-gray-900 dark:text-white">
                    <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                    Expected Results
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {selectedData.results.map((result, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl bg-white/70 dark:bg-gray-900/70 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="font-medium text-gray-900 dark:text-white">{result}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Guarantee & CTA */}
                <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200 dark:border-purple-800">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                        <div className="font-bold text-lg text-gray-900 dark:text-white">
                          Performance Guarantee
                        </div>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        30-day performance review with optimization adjustments. 
                        We're confident in our results - your success is our priority.
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                      <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl font-medium">
                        Request Proposal
                        <ArrowRight className="inline-block ml-2 h-4 w-4" />
                      </button>
                      <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-medium">
                        Book Strategy Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Marketing Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Proven 4-Step Process
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A systematic approach that ensures consistent results and maximum ROI
            </p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 -translate-y-1/2 z-0" />

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {marketingProcessSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div
                    className={`h-20 w-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    {step.step}
                  </div>
                  <div className="mb-3">
                    <div className="h-10 w-10 mx-auto mb-2 text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                      {step.icon}
                    </div>
                    <div className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-800 shadow-lg">
              <div className="text-left">
                <div className="font-bold text-xl text-gray-900 dark:text-white mb-1">
                  Ready to transform your marketing?
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Get started with a free strategy session
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl">
                  Get Started
                </button>
                <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-medium">
                  View Case Studies
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingServices;