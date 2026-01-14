import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function calculateReadinessScore(formData: {
  budget: string;
  timeline: string;
  message: string;
}): number {
  let score = 0;

  // Budget scoring
  if (formData.budget === "$10k+") score += 30;
  else if (formData.budget === "$5k-$10k") score += 20;
  else if (formData.budget === "$1k-$5k") score += 10;

  // Timeline scoring
  if (formData.timeline === "1-2 months") score += 30;
  else if (formData.timeline === "3-6 months") score += 20;
  else if (formData.timeline === "6+ months") score += 10;

  // Message quality
  if (formData.message.length > 100) score += 20;
  else if (formData.message.length > 50) score += 10;

  return Math.min(score, 100);
}

export function getThemeColor(theme: string): {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
} {
  const themes: Record<string, any> = {
    "dark-pro": {
      primary: "#0a0a0a",
      secondary: "#111111",
      accent: "#2563eb",
      text: "#f8fafc",
    },
    "light-clean": {
      primary: "#ffffff",
      secondary: "#f8fafc",
      accent: "#3b82f6",
      text: "#1e293b",
    },
    "cyber-neon": {
      primary: "#0f0f23",
      secondary: "#1a1a2e",
      accent: "#8b5cf6",
      text: "#ffffff",
    },
    "minimal-mono": {
      primary: "#ffffff",
      secondary: "#f3f4f6",
      accent: "#000000",
      text: "#111827",
    },
  };

  return themes[theme] || themes["dark-pro"];
}
