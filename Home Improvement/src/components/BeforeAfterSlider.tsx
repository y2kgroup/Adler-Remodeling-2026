"use client";
import { useState, useRef } from "react";

export default function BeforeAfterSlider({ beforeImage, afterImage }: { beforeImage: string; afterImage: string }) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    // Support both mouse and touch events
    const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setPosition(percent);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-[350px] overflow-hidden rounded-2xl shadow-xl cursor-${isDragging ? "grabbing" : "grab"} select-none`}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleMove}
    >
      {/* Background (After) Image */}
      <div className="absolute inset-0 w-full h-full">
        <img src={afterImage} alt="After" className="w-full h-full object-cover pointer-events-none" draggable={false} />
        <div className="absolute top-4 right-4 bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider pointer-events-none drop-shadow-md">After</div>
      </div>
      
      {/* Overlay (Before) Image - Clipped */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none border-r border-white/50"
        style={{ clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)` }}
      >
        <img src={beforeImage} alt="Before" className="w-full h-full object-cover pointer-events-none" draggable={false} />
        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm drop-shadow-md">Before</div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none z-20 transition-transform duration-75"
        style={{ left: `calc(${position}% - 2px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-2 border-zinc-200 rounded-full flex items-center justify-center shadow-xl pointer-events-auto hover:bg-zinc-50 transition-colors">
          <span className="material-symbols-outlined text-primary text-xl font-bold select-none" aria-hidden="true" style={{ transform: "rotate(90deg)" }}>unfold_more</span>
        </div>
      </div>
    </div>
  );
}
