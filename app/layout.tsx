import type { Metadata } from "next";
import { Geist, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export const geist = Geist({
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
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://flex-ui-rust.vercel.app"
      : "http://localhost:3000"
  ),
  title: "FlexUI | Showcase Your Frontend Masterpieces",
  description:
    "FlexUI is where frontend developers flex their skills. Showcase your UI components, websites, and interactive projects. Get inspired by others and build your developer portfolio.",
  keywords: [
    "frontend showcase",
    "UI component gallery",
    "developer portfolio",
    "web development showcase",
    "React projects",
    "frontend community",
    "design system examples",
    "CSS art gallery",
    "developer network",
    "UI inspiration",
  ],
  openGraph: {
    title: "FlexUI | The Frontend Developer Showcase Platform",
    description:
      "Display your UI creations, discover innovative components, and connect with top frontend talent. Flex your skills with FlexUI.",
    url: "https://flex-ui-rust.vercel.app",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "FlexUI: Frontend Developer Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlexUI: Where Developers Flex Their Frontend Skills",
    description:
      "Join the ultimate showcase for UI components, interactive designs, and frontend projects. Elevate your portfolio.",
    images: ["/open-graph.png"],
  },
  alternates: {
    canonical: "https://flex-ui-rust.vercel.app",
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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${jakarta_sans.className}`}
    >
      <body className="antialiased min-h-screen font-sans">
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
