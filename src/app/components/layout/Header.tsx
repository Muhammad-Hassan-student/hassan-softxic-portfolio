"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Code2,
  Smartphone,
  ChevronDown,
  Rocket,
  User,
  Briefcase,
  Target,
  Star,
  Phone,
  Calendar,
  Lightbulb,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import AnimatedButton from "../ui/AnimatedButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useRouter();
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = [
        "home",
        "profile",
        "services",
        "skills",
        "projects",
        "process",
        "testimonials",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation sections with better icons
  const navSections = [
    { id: "home", label: "Home", icon: <Rocket className="h-4 w-4" /> },
    { id: "profile", label: "Profile", icon: <User className="h-4 w-4" /> },
    {
      id: "services",
      label: "Services",
      icon: <Briefcase className="h-4 w-4" />,
    },
    { id: "skills", label: "Skills", icon: <Target className="h-4 w-4" /> },
    { id: "projects", label: "Projects", icon: <Code2 className="h-4 w-4" /> },
    { id: "process", label: "Process", icon: <Star className="h-4 w-4" /> },
    {
      id: "testimonials",
      label: "Reviews",
      icon: <Star className="h-4 w-4" />,
    },
    {
      id: "booking",
      label: "Book Call",
      icon: <Calendar className="h-4 w-4" />,
    },
    {
      id: "idea-clarity",
      label: "Idea Clarity",
      icon: <Lightbulb className="h-4 w-4" />,
    },
  ];

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
    }
  }, []);

  // Get active styles based on section
  const getNavItemStyle = (sectionId: string) => {
    const isActive = activeSection === sectionId;

    if (isActive) {
      return "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20";
    }

    return "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800";
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo - Professional & Clean */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg group-hover:shadow-lg transition-shadow">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                Muhammad Hassan
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Senior Full-Stack Developer
              </p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Hassan
              </h1>
            </div>
          </motion.div>

          {/* Desktop Navigation - Clean & Professional */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navSections.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${getNavItemStyle(
                  item.id,
                )}`}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.button>
            ))}
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate.push("idea-clarity")}
              className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all $`}
            >
              <span>Idea Clarity</span>
            </motion.button>

            {/* Contact CTA */}
            <div className="relative">
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium ${getNavItemStyle(
                  "contact",
                )}`}
              >
                <Phone className="h-4 w-4" />
                <span>Contact</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              {/* Contact Dropdown */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-48 py-2 rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 z-50"
                    >
                      <button
                        onClick={() => scrollToSection("contact")}
                        className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center space-x-3"
                      >
                        <Smartphone className="h-4 w-4" />
                        <span>Contact Form</span>
                      </button>
                      <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                          Quick Contact:
                        </p>
                        <div className="space-y-2">
                          <a
                            href="mailto:muhammadhassanakram87@gmail.com"
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline block"
                          >
                            muhammadhassanakram87@gmail.com
                          </a>
                          <a
                            href="https://wa.me/+923202190043"
                            className="text-sm text-green-600 dark:text-green-400 hover:underline block"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right side actions - Clean Layout */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* <ThemeToggle /> */}
            <AnimatedButton
              onClick={() => scrollToSection("contact")}
              variant="primary"
              size="sm"
              icon={<Smartphone className="h-4 w-4" />}
            >
              Book Call
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            {/* <ThemeToggle /> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Clean & Professional */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                className="fixed top-0 right-0 bottom-0 w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 lg:hidden overflow-y-auto"
              >
                {/* Mobile Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
                        <Code2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h2 className="font-bold text-lg">Navigation</h2>
                        <p className="text-sm text-gray-500">Browse sections</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <AnimatedButton
                    onClick={() => scrollToSection("contact")}
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<Smartphone className="h-5 w-5" />}
                  >
                    Book Strategy Call
                  </AnimatedButton>
                </div>

                {/* Mobile Navigation Items */}
                <div className="p-4">
                  <div className="space-y-1">
                    {navSections.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-lg text-left transition-all ${getNavItemStyle(
                          item.id,
                        )}`}
                      >
                        <div
                          className={`p-2 rounded-lg ${
                            activeSection === item.id
                              ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-medium">{item.label}</div>
                          {activeSection === item.id && (
                            <div className="text-xs text-blue-600 dark:text-blue-400">
                              • Active
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="mt-8 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <h3 className="font-bold mb-3">Quick Contact</h3>
                    <div className="space-y-3">
                      <a
                        href="mailto:muhammadhassanakram87@gmail.com"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">Email</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            muhammadhassanakram87@gmail.com
                          </div>
                        </div>
                      </a>

                      <a
                        href="https://wa.me/1234567890"
                        className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">WhatsApp</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            +92 3202190049
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-800 mt-auto">
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    © {new Date().getFullYear()} Hassan & SOFTXIC
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Scroll Progress Bar - Subtle & Professional */}
      <div className="h-0.5 w-full bg-gray-100 dark:bg-gray-800 absolute bottom-0 left-0">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
          initial={{ width: "0%" }}
          animate={{
            width: `${
              ((navSections.findIndex((s) => s.id === activeSection) + 1) /
                navSections.length) *
              100
            }%`,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        />
      </div>
    </motion.header>
  );
};

export default Header;
