import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://codez-stack.vercel.app/"),
  title: {
    default: "The Code Stack - Transform Your Business with AI-Powered Solutions",
    template: "%s | Unicodez",
  },
  description:
    "Revolutionize your workflow with our cutting-edge SaaS platform. Boost productivity by 300% with AI-powered automation, real-time analytics, and seamless integrations.",
  keywords: [
    "SaaS",
    "AI",
    "automation",
    "productivity",
    "business tools",
    "analytics",
  ],
  authors: [{ name: "Unicodez Team" }],
  creator: "Unicodez",
  publisher: "Unicodez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codez-stack.vercel.app/",
    title: "The Code Stack - Transform Your Business with AI-Powered Solutions",
    description:
      "Unleashing the future of technology with intelligent systems, decentralized platforms, cloud-native tools, and reality‑bending experiences, all under one stack.",
    siteName: "The Code Stack",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "The Code Stack - AI-Powered Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Code Stack - Transform Your Business with AI-Powered Solutions",
    description:
      "Unleashing the future of technology with intelligent systems, decentralized platforms, cloud-native tools, and reality‑bending experiences, all under one stack.",
    images: ["/og-image.jpg"],
    creator: "@unicodez",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
