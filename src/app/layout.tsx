import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import { ThemeProvider } from "@/app/components/ui/ThemeProvider";
import FloatingWhatsApp from "@/app/components/ui/FloatingWhatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Hassan | Senior Full-Stack Developer & Founder @ SOFTXIC",
  description:
    "Building scalable web & mobile products using MERN, Next.js, Flutter & React Native. 8+ years delivering production-ready applications.",
  keywords:
    "Full-Stack Developer, MERN, Next.js, Flutter, React Native, SaaS Development, MVP Development",
  authors: [{ name: "Muhammad Hassan" }],
  openGraph: {
    type: "website",
    url: "https://hassan.dev",
    title: "Muhammad Hassan | Senior Full-Stack Developer",
    description: "Transform your ideas into scalable digital products",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hassan | Senior Full-Stack Developer",
    description: "Building the future, one line of code at a time",
    images: ["/twitter-image.jpg"],
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
            <FloatingWhatsApp />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
