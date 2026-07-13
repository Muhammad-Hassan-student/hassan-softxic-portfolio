import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { ThemeProvider } from "@/app/components/ui/ThemeProvider";
import FloatingWhatsApp from "@/app/components/ui/FloatingWhatsapp";
import ExternalScript from "./components/ExternalScript";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Hassan | Senior Full-Stack Developer & Founder @ SOFTXIC",
  description:
    "Building scalable web & mobile products using MERN, Next.js, Flutter & React Native. 8+ years delivering production-ready applications.",
  keywords:
    "Full-Stack Developer, MERN, Next.js, Flutter, React Native, SaaS Development, MVP Development, SOFTXIC", // 'SOFTXIC' add kar diya
  authors: [{ name: "Muhammad Hassan" }],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  alternates: {
    canonical: "https://www.softxic.com", // SEO ke liye behtar hai
  },
  openGraph: {
    type: "website",
    url: "https://www.softxic.com",
    title: "Muhammad Hassan | Senior Full-Stack Developer & Founder @ SOFTXIC",
    description:
      "Transform your ideas into scalable digital products with Muhammad Hassan.",
    images: [
      {
        url: "/images/softxic.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Hassan - SOFTXIC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hassan | Senior Full-Stack Developer",
    description: "Building the future, one line of code at a time",
    images: ["/images/twitter.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <div className="min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
            <Header />
            <main className="pt-16">{children}</main>
            <Footer />
            <Script
        src="https://nexus-widget.softxic.com/widget.js"
        data-organization-id="org_3CaOEbHunjnaszpUygiJHiO4mf1"
        strategy="afterInteractive" data-position="bottom-left"
      />
            <FloatingWhatsApp />
            <ExternalScript />
            
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
