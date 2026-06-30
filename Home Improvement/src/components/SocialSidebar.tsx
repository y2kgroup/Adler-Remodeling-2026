import React from 'react';

export default function SocialSidebar() {
  return (
    <div className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 p-2.5 bg-[#fcb900] shadow-[6px_0_20px_-5px_rgba(252,185,0,0.6)] rounded-r-2xl border border-l-0 border-[#e5a800]">
      
      {/* Facebook - Circular Standard */}
      <a 
        href="https://www.facebook.com/people/Adler-Remodeling/61584469210524/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-2.5 text-zinc-950 hover:bg-[#1877F2] hover:text-white rounded-xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Facebook"
      >
        <img src="/social/3.png" alt="Facebook Custom Icon" className="w-[22px] h-[22px] object-contain group-hover:brightness-0 group-hover:invert transition-all" />
      </a>

      {/* Instagram */}
      <a 
        href="https://www.instagram.com/adler_remodeling/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-2.5 text-zinc-950 hover:bg-gradient-to-tr hover:from-[#fd5949] hover:to-[#eb1c78] hover:text-white rounded-xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Instagram"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      </a>

      {/* Yelp - Standard Burst */}
      <a 
        href="https://www.yelp.com/biz/adler-remodeling-westlake-village" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="p-2.5 text-zinc-950 hover:bg-[#FF1A1A] hover:text-white rounded-xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Yelp"
      >
        <img src="/social/2.png" alt="Yelp Custom Icon" className="w-[22px] h-[22px] object-contain group-hover:brightness-0 group-hover:invert transition-all" />
      </a>


    </div>
  );
}
