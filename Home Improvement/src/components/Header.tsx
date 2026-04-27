"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import EstimateModal from "./EstimateModal";

export default function Header() {
  const pathname = usePathname();
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Windows", href: "/windows" },
    { name: "Doors", href: "/doors" },
    { name: "Roofing", href: "/roofing" },
    { name: "HVAC", href: "/hvac" },
    { name: "Plumbing", href: "/plumbing" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu gracefully on route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 w-full z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm dark:shadow-none transition-colors duration-300">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center z-50">
            <img src="/logo.svg" alt="Adler Remodeling Logo" className="h-14 md:h-20 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={
                  pathname === link.href
                    ? "text-primary dark:text-primary-container border-b-2 border-primary dark:border-primary-container pb-1 font-headline font-bold tracking-tight"
                    : "text-zinc-600 dark:text-zinc-400 font-medium font-headline hover:text-primary dark:hover:text-primary-container transition-all"
                }
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-primary dark:text-primary-container font-bold font-headline">
              <span>Licence # 1051596</span>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-primary text-white px-6 py-2.5 rounded-lg font-headline font-bold tracking-tight shadow-sm hover:bg-primary-container hover:text-on-primary-container transition-all scale-95 active:scale-90 duration-200"
            >
              Get a Free Estimate
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden z-50 p-2 text-zinc-900 dark:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

      </header>

      {/* Mobile Dropdown Overlay Dashboard */}
      <div 
        className={`fixed inset-0 bg-surface dark:bg-zinc-950 z-30 flex flex-col pt-32 px-8 transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6 text-2xl mt-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-primary dark:text-primary-container font-headline font-bold border-l-4 border-primary pl-4"
                  : "text-zinc-600 dark:text-zinc-400 font-medium font-headline pl-4"
              }
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <div className="mt-12 flex flex-col gap-6">
          <div className="text-zinc-500 dark:text-zinc-400 font-bold font-headline text-lg pl-4 border-l-4 border-transparent">
            <span>Licence # 1051596</span>
          </div>
          <button 
            onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
            className="w-full bg-primary text-white py-4 rounded-xl font-headline font-bold tracking-widest uppercase shadow-md active:scale-95 transition-all text-center mt-4 text-sm"
          >
            Get a Free Estimate
          </button>
        </div>
      </div>

      {/* Interactive Free Estimate Modal */}
      <EstimateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
