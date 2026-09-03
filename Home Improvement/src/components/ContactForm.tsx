"use client";

import { useState } from "react";

interface ContactFormProps {
  title?: string;
  className?: string;
  inputClassName?: string;
}

export default function ContactForm({ 
  title,
  className = "bg-white p-6 md:p-10 rounded-2xl text-on-surface shadow-2xl w-full max-w-lg",
  inputClassName = "w-full bg-surface-container-highest border-0 rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none"
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "6a949992-7cb0-4db6-ada1-d6119a4fb234");
    formData.append("subject", `New Lead from Adler Remodeling${title ? ` - ${title}` : ''}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 5000);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={`${className} flex flex-col items-center justify-center text-center py-12 min-h-[440px]`}>
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <span className="material-symbols-outlined text-primary text-5xl">check_circle</span>
        </div>
        <h3 className="text-3xl font-headline font-bold mb-3">Message Sent!</h3>
        <p className="text-secondary">Thank you. Our project specialist will contact you within 24 business hours.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {title && <h3 className="text-3xl font-headline font-bold mb-6">{title}</h3>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2">Full Name</label>
            <input name="name" required className={inputClassName} placeholder="John Doe" type="text" />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2">Email Address</label>
            <input name="email" required className={inputClassName} placeholder="john@example.com" type="email" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2">Phone Number</label>
          <input name="phone" required className={inputClassName} placeholder="(555) 000-0000" type="tel" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-2">Interested In</label>
          <div className="relative">
            <select name="service" required defaultValue="" className={`${inputClassName} appearance-none`}>
              <option value="" disabled>Select a service</option>
              <option value="Windows">Window Solutions</option>
              <option value="Doors">Door Replacements</option>
              <option value="HVAC">HVAC & Air Conditioning</option>
              <option value="Plumbing">Plumbing Upgrades</option>
              <option value="Consultation">General Remodeling / Consultation</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-secondary pointer-events-none">expand_more</span>
          </div>
        </div>
        <button disabled={isSubmitting} type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-headline font-bold py-4 rounded-xl uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2">
          {isSubmitting ? "Sending..." : "Request Call Back"}
        </button>
      </form>
    </div>
  );
}
