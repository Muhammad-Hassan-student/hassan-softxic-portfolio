"use client";

import React from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Palette, Monitor } from "lucide-react";
import { useTheme } from "../ui/ThemeProvider";
import { Theme } from "@/types/index";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const themes = [
    {
      id: "dark-pro" as Theme,
      label: "Dark Pro",
      icon: <Moon className="h-4 w-4" />,
    },
    {
      id: "light-clean" as Theme,
      label: "Light Clean",
      icon: <Sun className="h-4 w-4" />,
    },
    {
      id: "cyber-neon" as Theme,
      label: "Cyber Neon",
      icon: <Palette className="h-4 w-4" />,
    },
    {
      id: "minimal-mono" as Theme,
      label: "Minimal Mono",
      icon: <Monitor className="h-4 w-4" />,
    },
  ];

  const currentTheme = themes.find((t) => t.id === theme);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        {currentTheme?.icon}
        <span className="hidden sm:inline">{currentTheme?.label}</span>
      </motion.button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 mt-2 py-2 w-48 rounded-xl shadow-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 z-50"
          >
            {themes.map((themeOption) => (
              <button
                key={themeOption.id}
                onClick={() => {
                  setTheme(themeOption.id);
                  setIsOpen(false);
                }}
                className={`flex items-center space-x-3 w-full px-4 py-3 text-left transition-colors ${
                  theme === themeOption.id
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {themeOption.icon}
                <span>{themeOption.label}</span>
                {theme === themeOption.id && (
                  <div className="ml-auto h-2 w-2 bg-blue-500 rounded-full" />
                )}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ThemeToggle;
