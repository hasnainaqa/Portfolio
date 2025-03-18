import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hasnain Afzal - Full-Stack Developer",
  description:
    "Portfolio of Hasnain Afzal, an aspiring Full-Stack Developer specializing in React.js and Next.js",
  generator: "H.A.Q.A",
  icons: {
    icon: "/myprofile.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="izgtRRs8JT532RzYiGBrt-V5m9aCeBs7mbUzEs4WIWc"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


import "./globals.css";
