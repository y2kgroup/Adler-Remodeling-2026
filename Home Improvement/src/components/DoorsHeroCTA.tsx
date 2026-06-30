"use client";

import { useState } from "react";
import EstimateModal from "./EstimateModal";

export default function DoorsHeroCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex gap-4 mt-2">
        <button 
          onClick={() => setIsModalOpen(true)}
          type="button"
          className="bg-primary text-white shadow-lg px-8 py-4 rounded-xl font-headline font-bold text-sm tracking-widest uppercase flex items-center gap-3 hover:bg-primary-container hover:text-on-primary-container hover:scale-[1.02] active:scale-95 transition-all"
        >
          Request Consultation
          <span className="material-symbols-outlined shrink-0" aria-hidden="true">arrow_forward</span>
        </button>
      </div>
      <EstimateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
