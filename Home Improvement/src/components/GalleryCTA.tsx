"use client";

import { useState } from "react";
import EstimateModal from "./EstimateModal";

export default function GalleryCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="max-w-5xl mx-auto px-8 py-32 text-center">
        <div className="bg-surface-container-lowest p-12 md:p-20 rounded-2xl shadow-sm border border-outline-variant/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-8">Ready for your own transformation?</h2>
            <p className="text-xl text-secondary mb-12 max-w-2xl mx-auto">Join dozens of homeowners who have elevated their living experience through our architectural precision.</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              type="button" 
              className="inline-block bg-primary text-white font-headline font-bold text-sm tracking-widest uppercase hover:bg-primary-container hover:text-on-primary-container transition-all px-12 py-5 rounded-xl shadow-2xl hover:scale-[1.02] active:scale-95"
            >
              Get a Free Estimate
            </button>
          </div>
        </div>
      </section>
      <EstimateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
