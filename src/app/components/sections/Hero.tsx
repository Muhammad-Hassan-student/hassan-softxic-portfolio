"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket, Users } from "lucide-react";
import { useTheme } from "@/app/components/ui/ThemeProvider";
import AnimatedButton from "@/app/components/ui/AnimatedButton";
import ClientPathSelector from "@/app/components/layout/ClientPathSelector";

const Hero = () => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        {theme === "cyber-neon" && (
          <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px]" />
        )}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect mb-8"
          >
            <Sparkles className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">
              Senior Full-Stack Developer & Founder of SOFTXIC
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="block">Building Scalable</span>
            <span className="block text-gradient">Web & Mobile</span>
            <span className="block">Products</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl"
          >
            I transform complex business problems into elegant technical
            solutions using MERN, Next.js, Flutter & React Native. 8+ years
            delivering production-ready applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-16"
          >
            <AnimatedButton
              href="#contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="h-5 w-5" />}
            >
              Hire Me (Freelance)
            </AnimatedButton>
            <AnimatedButton
              href="#contact"
              variant="secondary"
              size="lg"
              icon={<Users className="h-5 w-5" />}
            >
              Work With SOFTXIC
            </AnimatedButton>
            <AnimatedButton
              href="#booking"
              variant="outline"
              size="lg"
              icon={<Rocket className="h-5 w-5" />}
            >
              Book Free Strategy Call
            </AnimatedButton>
          </motion.div>

          {/* Client Path Selector */}
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <ClientPathSelector />
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "8+", label: "Years Experience" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
