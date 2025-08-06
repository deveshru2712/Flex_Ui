import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Flex UI | Modern UI Components for Developers & Designers",
  description:
    "Flex UI is a sleek, customizable component library to speed up your design and development workflow. Access responsive, accessible React & CSS components for stunning interfaces—flex your creativity!",
  keywords: [
    "Flex UI components",
    "UI component library",
    "React components",
    "CSS framework",
    "design system",
    "frontend toolkit",
    "responsive UI kits",
    "developer tools",
    "design-to-code",
    "open-source UI library",
  ],
  openGraph: {
    title: "Flex UI | Build Faster with Ready-to-Use Components",
    description:
      "Drag, drop, and deploy. Flex UI offers pre-built, customizable components for React and CSS to accelerate your projects.",
    url: "https://flexui.com",
    images: [
      {
        url: "https://flexui.com/og-flex-ui.jpg",
        width: 1200,
        height: 630,
        alt: "Flex UI: Your Go-To Component Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flex UI: The Ultimate Component Library for Devs",
    description:
      "Stop reinventing the wheel—use Flex UI’s production-ready components for React, Next.js, and more.",
    images: ["https://flexui.com/twitter-flex-ui.jpg"],
  },
  alternates: {
    canonical: "https://flexui.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Excon font family
const exconRegular = localFont({
  src: "../public/fonts/excon-regular.otf",
  display: "swap",
  variable: "--font-excon",
  weight: "400",
});

const exconMedium = localFont({
  src: "../public/fonts/excon-medium.otf",
  display: "swap",
  variable: "--font-excon-medium",
  weight: "500",
});

const exconBold = localFont({
  src: "../public/fonts/excon-bold.otf",
  display: "swap",
  variable: "--font-excon-bold",
  weight: "700",
});

// General Sans font family
const generalSansRegular = localFont({
  src: "../public/fonts/generalsans-regular.otf",
  display: "swap",
  variable: "--font-general-sans",
  weight: "400",
});

const generalSansMedium = localFont({
  src: "../public/fonts/generalsans-medium.otf",
  display: "swap",
  variable: "--font-general-sans-medium",
  weight: "500",
});

const generalSansBold = localFont({
  src: "../public/fonts/generalsans-bold.otf",
  display: "swap",
  variable: "--font-general-sans-bold",
  weight: "700",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${exconRegular.variable}
      ${exconMedium.variable}
      ${exconBold.variable}
        ${generalSansRegular.className}
      ${generalSansMedium.variable}
      ${generalSansBold.variable}
    `}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
