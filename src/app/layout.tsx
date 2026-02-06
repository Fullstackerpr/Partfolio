import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-portfolio-url.com"), // TODO: Update with actual URL
  title: "Bahodir Nabijanov | Full-Stack Developer",
  description: "Senior Full-Stack Developer specializing in React, Next.js, and modern web technologies. Building high-performance web applications.",
  keywords: ["Full-stack Developer", "Web Development", "React", "Next.js", "Uzbekistan", "Frontend", "Backend", "Portfolio"],
  authors: [{ name: "Bahodir Nabijanov", url: "https://github.com/Fullstackerpr" }],
  openGraph: {
    title: "Bahodir Nabijanov | Full-Stack Developer",
    description: "Senior Full-Stack Developer specializing in React, Next.js, and modern web technologies.",
    url: "https://your-portfolio-url.com", // TODO: Update with actual URL
    siteName: "Bahodir Nabijanov Portfolio",
    type: "website",
    images: [{
      url: "/myimg.jpg", // Using existing image for OG
      width: 800,
      height: 600,
      alt: "Bahodir Nabijanov",
    }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        data-js="simulateur-mobile-first"
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
