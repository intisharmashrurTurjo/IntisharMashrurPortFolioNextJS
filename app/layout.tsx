import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Helper/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Helper/Home/Footer/Footer";
import ScrollTopUp from "@/components/Helper/ScrollTopUp";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Intishar's Portfolio | Next.Js",
  description: "portfolio website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased bg-gradient-to-r from-[#0a0a18] via-[#000029] to-[#0c0c1d] `}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollTopUp />
      </body>
    </html>
  );
}




       