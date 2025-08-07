import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* <div className="h-screen w-screen fixed -z-50 pointer-events-none">
          <Overlay />
        </div> */}
        <div
          className={`${geist.variable} ${jakarta_sans.variable} relative z-10 min-h-screen`}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
