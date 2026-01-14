"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { useTheme } from "../ui/ThemeProvider";

const Footer = () => {
  const { theme } = useTheme();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/hassan-dev",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/hassan-dev",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/hassan_dev",
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:muhammadhassanakram87@gmail.com",
    },
  ];

  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "#services" },
        { label: "Mobile Apps", href: "#services" },
        { label: "SaaS Development", href: "#services" },
        { label: "API Development", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About SOFTXIC", href: "#about" },
        { label: "Our Process", href: "#process" },
        { label: "Case Studies", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
        {theme === "cyber-neon" && (
          <div className="absolute inset-0 bg-cyber-grid bg-[size:100px_100px] opacity-10" />
        )}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Muhammad Hassan</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Senior Full-Stack Developer
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Building scalable web & mobile products that solve real business
              problems. Founder of SOFTXIC Agency.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Muhammad Hassan & SOFTXIC Agency. All rights
              reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using Next.js & Tailwind</span>
            </div>

            <div className="text-sm text-gray-500">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Available for new projects
              </span>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          {[
            "Next.js Certified",
            "TypeScript Expert",
            "AWS Certified",
            "GitHub Pro",
            "Vercel Edge",
          ].map((badge) => (
            <span
              key={badge}
              className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
