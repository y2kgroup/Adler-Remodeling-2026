"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDP2uyh2eD4Gc-JIcxZeuSoVwK10pEzmcnX0VmwTcOvjihsZaTg_Zs-9MB4BDEVvPWAGB37w-G8XLRjqSeuRKQRWNL5URBi6h6EX9lwk1CTU5mK1o4kER4Qj1Dbv8uMY_P1679qKLrgdxGW3aVk8aw2EcCY6k4t-EPywN3xKZSL68Bfne5wysnzSfuQIJb6hKdFaJ0hoouddNLDABoJIMPxpSMCKGt4W0x7DNgVfzj5Mp63blS89QqUeQSIpNSiY4ZGQRdCMnrTJAY",
    title: "Complete Home Remodeling",
    subtitle: "Crafting Excellence",
    description: "Upgrade your home with our premium services. From concept to completion, we deliver unmatched quality and design."
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZivK1z528ePjmTaELFHE9Te32BVIxX3zGpNWoadxoo3ncE-8A8U2fm83pV8acqYk67RTAhw2s08h25O36iu_a5psd6mX8M-aZZ1phZb1qY-pzsQ6w8wRYmaBhuzrio_gnc6eEqZYzxl2NJ4nSNAhdux9sm_Miztt8Ca8pK30rv0LBMFL7lmp4SxhOZQyeZglz4qKVTjIswh8-ru1GVlofihAuj6rCT6wpwBtXq5D9JYS5uIIUGCWXHJeyK1KpAhjcMtXzbUZpJRo",
    title: "Premium Windows",
    subtitle: "Energy Efficiency",
    description: "Eliminate drafts and maximize energy savings with premium retrofit solutions. Engineered for total thermal efficiency."
  },
  {
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80",
    title: "Durable Roofing",
    subtitle: "Weather Protection",
    description: "Protect your home with premium, weather-resistant roofing systems built for absolute durability and peace of mind."
  },
  {
    image: "/hvac-slider.png",
    title: "Advanced HVAC",
    subtitle: "Ultimate Comfort",
    description: "Experience ultimate indoor comfort and superior energy efficiency with advanced heating and cooling installations."
  },
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
    title: "Modern Plumbing",
    subtitle: "Reliable Infrastructure",
    description: "Upgrade your home's infrastructure with state-of-the-art repiping and high-quality fixture replacements."
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            alt={slide.title}
            className="w-full h-full object-cover"
            src={slide.image}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
      ))}

      {/* Slider Controls */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Dynamic Content Overlay */}
      <div className="absolute inset-0 flex items-center z-10 pointer-events-none">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 absolute top-1/2 -translate-y-1/2 ${
                  index === currentSlide 
                    ? "opacity-100 translate-x-0" 
                    : "opacity-0 -translate-x-8 pointer-events-none"
                }`}
              >
                <span className="inline-block text-[#fcb900] drop-shadow-md font-headline font-bold tracking-widest text-sm md:text-base uppercase mb-4 tracking-[0.2em]">
                  {slide.subtitle}
                </span>
                <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] tracking-tighter mb-6 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl text-zinc-200 font-body leading-relaxed mb-10 max-w-xl drop-shadow-md">
                  {slide.description}
                </p>
                <button className="pointer-events-auto bg-primary text-white px-8 py-4 rounded-lg font-headline font-bold text-sm uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all shadow-xl hover:-translate-y-1">
                  Get a Free Estimate
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
