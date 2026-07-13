import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";

import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import FloatingWhatsApp from "@/app/components/ui/FloatingWhatsapp";
import { ThemeProvider } from "@/app/components/ui/ThemeProvider";
import ExternalScript from "./components/ExternalScript";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Muhammad Hassan | Senior Full-Stack Developer & Founder @ SOFTXIC",
  description:
    "Building scalable web & mobile products using MERN, Next.js, Flutter & React Native. Creating modern digital experiences for startups and enterprises.",
  keywords: [
    "Muhammad Hassan",
    "SOFTXIC",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Flutter",
    "Node.js",
    "MERN",
    "Software Engineer",
  ],
  authors: [{ name: "Muhammad Hassan" }],
  creator: "Muhammad Hassan",
  publisher: "SOFTXIC",
  metadataBase: new URL("https://www.softxic.com"),

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.softxic.com",
    siteName: "SOFTXIC",
    title: "Muhammad Hassan | Senior Full-Stack Developer",
    description:
      "Building premium web, mobile and AI-powered digital products.",
    images: [
      {
        url: "/images/softxic.jpg",
        width: 1200,
        height: 630,
        alt: "SOFTXIC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hassan | Full Stack Developer",
    description: "Building premium digital experiences.",
    images: ["/images/twitter.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={`${inter.variable} ${inter.className} antialiased selection:bg-blue-600 selection:text-white`}
      >
        <ThemeProvider>
          <div className="relative isolate min-h-screen overflow-x-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">

            {/* Background */}
            <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,#60a5fa20,transparent_45%),radial-gradient(circle_at_bottom_right,#8b5cf620,transparent_40%)]" />

            <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-slate-200/[0.04] dark:bg-grid-white/[0.03]" />

            <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

            <div className="pointer-events-none absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[140px]" />

            {/* Header */}
            <Header />

            {/* Main */}
            <main className="relative z-10 pt-16">
              {children}
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating WhatsApp */}
            <FloatingWhatsApp />

            {/* External Scripts */}
            <ExternalScript />

            <Script
              src="https://nexus-widget.softxic.com/widget.js"
              strategy="afterInteractive"
              data-organization-id="org_3CaOEbHunjnaszpUygiJHiO4mf1"
              data-position="bottom-left"
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
