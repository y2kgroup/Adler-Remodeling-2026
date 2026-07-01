"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import SocialSidebar from "./SocialSidebar";
import ScrollToTop from "./ScrollToTop";

export default function LayoutBody({
  children,
  plusJakartaVariable,
  interVariable,
}: {
  children: React.ReactNode;
  plusJakartaVariable: string;
  interVariable: string;
}) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  if (isStudio) {
    return (
      <body className={`${plusJakartaVariable} ${interVariable} antialiased bg-[#fbf9f8] text-[#1b1c1c] font-body min-h-screen flex flex-col relative overflow-hidden`}>
        <main className="flex-1 flex flex-col relative h-screen w-screen overflow-hidden">
          {children}
        </main>
      </body>
    );
  }

  return (
    <body className={`${plusJakartaVariable} ${interVariable} antialiased bg-background text-on-background font-body min-h-screen flex flex-col pt-20 relative overflow-x-hidden`}>
      <Header />
      <SocialSidebar />
      <main className="flex-1 flex flex-col relative">{children}</main>
      <Footer />
      <ScrollToTop />
    </body>
  );
}
