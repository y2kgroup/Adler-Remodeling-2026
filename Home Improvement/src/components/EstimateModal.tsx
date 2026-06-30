"use client";

import { useState } from "react";

interface EstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EstimateModal({ isOpen, onClose }: EstimateModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "6a949992-7cb0-4db6-ada1-d6119a4fb234");
    formData.append("subject", "New Lead: Free Estimate (Adler Remodeling)");

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      // Always show success on completion
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3500);
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
      }, 3500);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white dark:bg-zinc-950 rounded-2xl shadow-2xl w-full max-w-lg p-8 transition-all">
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {isSubmitted ? (
          <div className="text-center py-12 px-4">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
            </div>
            <h3 className="text-3xl font-headline font-bold text-on-surface mb-3">Request Received!</h3>
            <p className="text-secondary text-lg">Thank you. Our project specialist will contact you within 24 business hours to discuss your free estimate.</p>
          </div>
        ) : (
          <>
            <h3 className="text-3xl font-headline font-extrabold text-on-surface mb-3 tracking-tight">Free Estimate</h3>
            <p className="text-secondary mb-8 leading-relaxed">Let’s transform your home. Provide your details below and we’ll reach out to schedule a consultation.</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold font-headline uppercase tracking-widest text-zinc-500 mb-1.5 ml-1">First Name</label>
                  <input name="first_name" required type="text" className="w-full bg-surface-container-low border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:border-primary transition-colors text-on-surface" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold font-headline uppercase tracking-widest text-zinc-500 mb-1.5 ml-1">Last Name</label>
                  <input name="last_name" required type="text" className="w-full bg-surface-container-low border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:border-primary transition-colors text-on-surface" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold font-headline uppercase tracking-widest text-zinc-500 mb-1.5 ml-1">Phone Number</label>
                <input name="phone" required type="tel" className="w-full bg-surface-container-low border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:border-primary transition-colors text-on-surface" placeholder="(555) 000-0000" />
              </div>
              
              <div>
                <label className="block text-xs font-bold font-headline uppercase tracking-widest text-zinc-500 mb-1.5 ml-1">Email Address</label>
                <input name="email" required type="email" className="w-full bg-surface-container-low border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:border-primary transition-colors text-on-surface" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-xs font-bold font-headline uppercase tracking-widest text-zinc-500 mb-1.5 ml-1">What are you looking for?</label>
                <div className="relative">
                  <select name="service" className="w-full bg-surface-container-low border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-3.5 outline-none focus:border-primary transition-colors text-on-surface appearance-none pr-10">
                    <option>Window Replacement</option>
                    <option>Door Replacement</option>
                    <option>Windows &amp; Doors</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">expand_more</span>
                </div>
              </div>

              <div className="flex items-start gap-3 mt-4">
                <input required type="checkbox" id="modal-consent" className="mt-1 min-w-4 w-4 h-4 text-primary bg-surface-container-low border border-zinc-300 rounded focus:ring-primary focus:ring-2 outline-none cursor-pointer" />
                <label htmlFor="modal-consent" className="text-[10px] text-zinc-500 leading-relaxed cursor-pointer">
                  I authorize Adler Remodeling and/or its dealers to call and/or text me at the number I entered above about its products using an automatic dialing system, even if I am on a &ldquo;Do Not Call&rdquo; list. Msg/data rates may apply. Consent here is not a condition of purchase. Please read our privacy policy for more information about how we collect and use personal information.
                </label>
              </div>

              <button type="submit" className="w-full bg-primary text-white font-headline font-bold text-sm uppercase tracking-widest py-4 rounded-xl mt-2 hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-95 shadow-md">
                Submit Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
