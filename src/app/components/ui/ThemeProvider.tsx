"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Theme } from "@/types";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("dark-pro");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
    if (
      savedTheme &&
      ["dark-pro", "light-clean", "cyber-neon", "minimal-mono"].includes(
        savedTheme
      )
    ) {
      setTheme(savedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark-pro" : "light-clean");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Save to localStorage
    localStorage.setItem("portfolio-theme", theme);

    // Apply theme class to html element
    const html = document.documentElement;

    // Remove all theme classes
    html.classList.remove(
      "dark-pro",
      "light-clean",
      "cyber-neon",
      "minimal-mono"
    );

    // Add current theme class
    html.classList.add(theme);

    // Set data-theme attribute for CSS variables
    html.setAttribute("data-theme", theme);
  }, [theme, mounted]);

  const value = {
    theme,
    setTheme,
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return <div className="hidden" />;
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
