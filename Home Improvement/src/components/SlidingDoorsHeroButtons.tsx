"use client";

import { useState } from "react";
import EstimateModal from "./EstimateModal";
import Link from "next/link";

export default function SlidingDoorsHeroButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => setIsModalOpen(true)}
          type="button"
          className="bg-primary text-white shadow-lg px-8 py-4 rounded-xl font-headline font-bold text-sm tracking-widest uppercase hover:bg-primary-container hover:text-on-primary-container hover:scale-[1.02] active:scale-95 transition-all"
        >
          Start Your Project
        </button>
        <Link 
          href="/gallery"
          className="bg-primary text-white shadow-lg px-8 py-4 rounded-xl font-headline font-bold text-sm tracking-widest uppercase hover:bg-primary-container hover:text-on-primary-container hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center text-center"
        >
          View Gallery
        </Link>
      </div>
      <EstimateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
