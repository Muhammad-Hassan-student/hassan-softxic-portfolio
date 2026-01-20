"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Code2,
  ChevronDown,
  Calendar,
  Phone,
  Home,
  Briefcase,
  Award,
  Crown,
  Building,
  Zap,
  Sparkles,
  Star,
  Target,
  Users,
  Rocket,
  Lightbulb,
  Mail,
  MessageCircle,
  User,
  CheckCircle,
  Shield,
  FileText,
} from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const router = useRouter();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "profile",
        "client-results",
        "services",
        "skills",
        "projects",
        "process",
        "testimonials",
        "booking-cta",
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // 4 Main Navigation Tabs with Sub-Menu Items
  const mainNavTabs = [
    {
      id: "home",
      label: "Home",
      icon: <Home className="h-4 w-4" />,
      action: () => scrollToSection("home"),
    },
    {
      id: "services",
      label: "Services",
      icon: <Briefcase className="h-4 w-4" />,
      hasDropdown: true,
      subItems: [
        { id: "web-development", label: "Web Development", section: "services" },
        { id: "mobile-apps", label: "Mobile Apps", section: "services" },
        { id: "ui-ux-design", label: "UI/UX Design", section: "services" },
        { id: "ecommerce", label: "E-commerce", section: "services" },
        { id: "saas", label: "SaaS Solutions", section: "services" },
        { id: "digital-marketing", label: "Digital Marketing", section: "services" },
      ]
    },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: <Award className="h-4 w-4" />,
      hasDropdown: true,
      subItems: [
        { id: "projects", label: "Case Studies", section: "projects" },
        { id: "client-work", label: "Client Work", section: "projects" },
        { id: "skills", label: "My Skills", section: "skills" },
        { id: "testimonials", label: "Testimonials", section: "testimonials" },
        { id: "process", label: "Work Process", section: "process" },
        { id: "results", label: "Client Results", section: "client-results" },
      ]
    },
    {
      id: "contact",
      label: "Contact",
      icon: <Phone className="h-4 w-4" />,
      action: () => scrollToSection("contact"),
    },
  ];

  // Tools & Resources
  const toolsItems = [
    { id: "idea-clarity", label: "Idea Clarity Session", icon: <Lightbulb className="h-4 w-4" />, section: "idea-clarity" },
    { id: "skill-matcher", label: "Skill Matcher", icon: <Target className="h-4 w-4" />, section: "skill-matcher" },
    { id: "project-planner", label: "Project Planner", icon: <FileText className="h-4 w-4" />, section: "project-planner" },
    { id: "code-scanner", label: "Code Scanner", icon: <Shield className="h-4 w-4" />, section: "code-scanner" },
  ];

  const scrollToSection = useCallback((sectionId: string) => {
    if (sectionId === "idea-clarity" || sectionId === "skill-matcher" || 
        sectionId === "project-planner" || sectionId === "code-scanner") {
      router.push(`/${sectionId}`);
      setIsMenuOpen(false);
      setOpenDropdown(null);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
      setOpenDropdown(null);
    }
  }, [router]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("home");
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const getNavItemStyle = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return isActive
      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800";
  };

  const toggleDropdown = (dropdownId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  const renderDropdown = (items: any[], dropdownId: string) => {
    return (
      <AnimatePresence>
        {openDropdown === dropdownId && (
          <>
            <div
              className="fixed inset-0 z-[99]"
              onClick={() => setOpenDropdown(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 mt-2 min-w-64 py-2 rounded-xl shadow-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 z-[101]"
            >
              <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {dropdownId === "services" ? "Our Services" : "My Portfolio"}
                  </span>
                  {dropdownId === "services" ? (
                    <Briefcase className="h-4 w-4 text-blue-500" />
                  ) : (
                    <Award className="h-4 w-4 text-purple-500" />
                  )}
                </div>
              </div>
              <div className="py-2">
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.section || item.id);
                      setOpenDropdown(null);
                    }}
                    className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
                  >
                    <span>{item.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-xl"
            : "bg-transparent"
        }`}
        style={{ height: "72px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo with Agency Branding - Enhanced */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={handleLogoClick}
            >
              <div className="relative">
                <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg group-hover:shadow-lg transition-shadow relative">
                  <Code2 className="h-6 w-6 text-white" />
                  <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse" />
                </div>
              </div>
              
              <div className="hidden lg:flex items-center space-x-4">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                      Muhammad Hassan
                    </h1>
                    <div className="px-2 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold text-white flex items-center space-x-1">
                      <Crown className="h-3 w-3" />
                      <span>Founder & CEO</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 mt-1">
                    <div className="flex items-center space-x-1">
                      <Building className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        SOFTXIC
                      </span>
                    </div>
                    <span className="text-xs text-gray-400 dark:text-gray-500">•</span>
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      Premium Digital Agency
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">•</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                        Top 1% Developer
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile/Tablet View */}
              <div className="lg:hidden">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2">
                    <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Hassan
                    </h1>
                    <div className="px-2 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold text-white flex items-center space-x-1">
                      <Crown className="h-3 w-3" />
                      <span>Founder</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    <Building className="h-3 w-3 text-blue-500" />
                    <span className="text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      SOFTXIC
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation - 4 Main Tabs with Sub-Menus */}
            <nav className="hidden xl:flex items-center space-x-1">
              {mainNavTabs.map((item) => {
                if (item.hasDropdown && item.subItems) {
                  return (
                    <div key={item.id} className="relative">
                      <motion.button
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => toggleDropdown(item.id, e)}
                        className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                          ["services", "portfolio"].includes(activeSection)
                            ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-3 w-3 transition-transform ${
                            openDropdown === item.id ? "rotate-180" : ""
                          }`}
                        />
                      </motion.button>
                      {renderDropdown(item.subItems, item.id)}
                    </div>
                  );
                }

                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => item.action?.()}
                    className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${getNavItemStyle(
                      item.id,
                    )}`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}

              {/* Tools Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => toggleDropdown("tools", e)}
                  className="flex items-center space-x-2 px-6 py-2.5 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Zap className="h-4 w-4" />
                  <span>Tools</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform ${
                      openDropdown === "tools" ? "rotate-180" : ""
                    }`}
                  />
                </motion.button>

                <AnimatePresence>
                  {openDropdown === "tools" && (
                    <>
                      <div
                        className="fixed inset-0 z-[99]"
                        onClick={() => setOpenDropdown(null)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full right-0 mt-2 w-64 py-2 rounded-xl shadow-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 z-[101]"
                      >
                        <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
                          <div className="flex items-center space-x-2">
                            <Zap className="h-4 w-4 text-yellow-500" />
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                              Interactive Tools
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            Free tools for your projects
                          </p>
                        </div>
                        <div className="py-2">
                          {toolsItems.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => {
                                scrollToSection(item.section);
                                setOpenDropdown(null);
                              }}
                              className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 group"
                            >
                              {item.icon}
                              <span>{item.label}</span>
                              <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
                                →
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Book Call Button */}
              <AnimatedButton
                onClick={() => scrollToSection("booking-cta")}
                variant="primary"
                size="md"
                icon={<Calendar className="h-4 w-4" />}
                className="ml-4"
              >
                Book Strategy Call
              </AnimatedButton>
            </nav>

            {/* Tablet Navigation (for medium screens) */}
            <nav className="hidden lg:flex xl:hidden items-center space-x-1">
              {mainNavTabs.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => item.action?.()}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${getNavItemStyle(
                    item.id,
                  )}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </motion.button>
              ))}
              
              <AnimatedButton
                onClick={() => scrollToSection("booking-cta")}
                variant="primary"
                size="sm"
                icon={<Calendar className="h-4 w-4" />}
                className="ml-2"
              >
                Book Call
              </AnimatedButton>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-3">
              <AnimatedButton
                onClick={() => scrollToSection("booking-cta")}
                variant="primary"
                size="sm"
                icon={<Calendar className="h-4 w-4" />}
                className="hidden sm:flex"
              >
                Book Call
              </AnimatedButton>
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
        </div>

        {/* Scroll Progress Bar */}
        <div className="h-1 w-full bg-gray-100 dark:bg-gray-800 absolute bottom-0 left-0">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600"
            initial={{ width: "0%" }}
            animate={{
              width: `${
                ((mainNavTabs.findIndex((s) => s.id === activeSection) + 1) /
                  mainNavTabs.length) *
                100
              }%`,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
          />
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[90] lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 max-w-full bg-white dark:bg-gray-900 shadow-2xl z-[95] overflow-y-auto"
              style={{ paddingTop: "72px" }}
            >
              <div className="p-6 h-full overflow-y-auto">
                {/* Agency Info */}
                <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-gray-200 flex items-center space-x-2">
                        <span>SOFTXIC Agency</span>
                        <Sparkles className="h-4 w-4 text-yellow-500" />
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Premium Digital Solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-lg bg-white/80 dark:bg-gray-900/80">
                    <User className="h-4 w-4 text-blue-500" />
                    <div>
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                        Muhammad Hassan
                      </span>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="px-2 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-xs font-bold text-white">
                          Founder & CEO
                        </div>
                        <div className="px-2 py-1 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 text-xs font-bold text-white">
                          Top 1% Developer
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book Call Button */}
                <div className="mb-6">
                  <AnimatedButton
                    onClick={() => {
                      scrollToSection("booking-cta");
                      setIsMenuOpen(false);
                    }}
                    variant="primary"
                    size="lg"
                    fullWidth
                    icon={<Calendar className="h-5 w-5" />}
                  >
                    Book Strategy Call
                  </AnimatedButton>
                </div>

                {/* Main Navigation */}
                <div className="space-y-1 mb-6">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-4 mb-2">
                    Main Navigation
                  </p>
                  {mainNavTabs.map((item) => (
                    <div key={item.id}>
                      <button
                        onClick={() => {
                          if (item.action) item.action();
                          setIsMenuOpen(false);
                        }}
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
                      
                      {/* Sub-items for mobile */}
                      {item.hasDropdown && item.subItems && (
                        <div className="pl-12 pr-4 space-y-1 mt-1">
                          {item.subItems.slice(0, 3).map((subItem) => (
                            <button
                              key={subItem.id}
                              onClick={() => {
                                scrollToSection(subItem.section);
                                setIsMenuOpen(false);
                              }}
                              className="w-full text-left py-2 px-3 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                            >
                              {subItem.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Tools */}
                <div className="space-y-2 mb-6">
                  <div className="px-4">
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                        Free Tools
                      </h4>
                    </div>
                  </div>
                  {toolsItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.section);
                        setIsMenuOpen(false);
                      }}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-8 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <h3 className="font-bold mb-3 flex items-center space-x-2 text-gray-800 dark:text-gray-200">
                    <Phone className="h-4 w-4" />
                    <span>Contact SOFTXIC</span>
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:info@softxic.com"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <Building className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-700 dark:text-gray-300">Business Email</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          info@softxic.com
                        </div>
                      </div>
                    </a>

                    <a
                      href="mailto:muhammadhassanakram87@gmail.com"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                        <User className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-700 dark:text-gray-300">Personal Email</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                          muhammadhassanakram87@gmail.com
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/+923202190043"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-700 dark:text-gray-300">WhatsApp</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          +92 320 2190043
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Rocket className="h-4 w-4 text-blue-500" />
                      <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        SOFTXIC Agency
                      </p>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Premium Digital Solutions
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      By Muhammad Hassan | Founder & CEO
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div style={{ height: "72px" }} />
    </>
  );
};

export default Header;