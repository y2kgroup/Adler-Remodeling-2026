import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import ScrollToTop from "@/components/ScrollToTop";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Adler Remodeling | Premium Windows & Doors",
  description: "Premium remodeling services handling doors, windows, and customized solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} antialiased`} title="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body min-h-screen flex flex-col pt-20 relative overflow-x-hidden">
        <Header />
        <SocialSidebar />
        <main className="flex-1 flex flex-col relative">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
