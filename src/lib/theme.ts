import { Theme } from "@/types";

export const themes: Record<Theme, any> = {
  "dark-pro": {
    primary: "bg-dark-primary text-dark-text",
    secondary: "bg-dark-secondary",
    accent: "text-dark-accent border-dark-accent",
    button: "bg-dark-accent hover:bg-blue-700 text-white",
    card: "bg-dark-secondary/80 border border-gray-800",
    gradient: "from-blue-900/20 to-cyan-900/20",
  },
  "light-clean": {
    primary: "bg-light-primary text-light-text",
    secondary: "bg-light-secondary",
    accent: "text-light-accent border-light-accent",
    button: "bg-light-accent hover:bg-blue-500 text-white",
    card: "bg-white/80 border border-gray-200",
    gradient: "from-blue-50 to-cyan-50",
  },
  "cyber-neon": {
    primary: "bg-cyber-primary text-white",
    secondary: "bg-cyber-secondary",
    accent: "text-cyber-accent-cyan border-cyber-accent-purple",
    button:
      "bg-gradient-to-r from-cyber-accent-purple to-cyber-accent-cyan hover:opacity-90 text-white",
    card: "bg-cyber-secondary/90 border border-cyber-accent-purple/30",
    gradient: "from-purple-900/20 to-cyan-900/20",
  },
  "minimal-mono": {
    primary: "bg-mono-primary text-mono-text",
    secondary: "bg-mono-secondary",
    accent: "text-mono-accent border-mono-accent",
    button: "bg-mono-accent hover:bg-gray-900 text-white",
    card: "bg-white border-2 border-gray-900",
    gradient: "from-gray-50 to-gray-100",
  },
};

export const getThemeClass = (
  theme: Theme,
  element: keyof (typeof themes)[Theme]
) => {
  return themes[theme][element];
};

export const themeColors: Record<Theme, string[]> = {
  "dark-pro": ["#0a0a0a", "#111111", "#2563eb", "#f8fafc"],
  "light-clean": ["#ffffff", "#f8fafc", "#3b82f6", "#1e293b"],
  "cyber-neon": ["#0f0f23", "#1a1a2e", "#8b5cf6", "#06b6d4"],
  "minimal-mono": ["#ffffff", "#f3f4f6", "#000000", "#111827"],
};
