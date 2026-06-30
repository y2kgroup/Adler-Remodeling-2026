import React from 'react';

const SlidingDoorTypeCard = ({ title, Icon }: { title: string, Icon: React.FC }) => (
  <div className="flex-shrink-0 w-72 bg-surface-container-low border border-outline-variant/10 rounded-2xl p-10 flex flex-col items-center justify-center gap-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mx-4 cursor-pointer">
    <div className="w-32 h-32 flex items-center justify-center">
      <Icon />
    </div>
    <h4 className="font-headline font-extrabold text-center text-xl text-on-surface">{title}</h4>
  </div>
);

// Custom SVGs for Sliding Door Types
const TwoPanelIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="15" y="15" width="70" height="70" fill="#f8fafc" stroke="#64748b" />
    <rect x="18" y="18" width="33" height="64" fill="#e0f2fe" stroke="#64748b" />
    <rect x="49" y="18" width="33" height="64" fill="#e0f2fe" stroke="#64748b" />
    <path d="M40 50 V 60 M60 50 V 60" stroke="#64748b" strokeWidth="2" />
  </svg>
);

const ThreePanelIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="10" y="15" width="80" height="70" fill="#f8fafc" stroke="#64748b" />
    <rect x="13" y="18" width="24" height="64" fill="#e0f2fe" stroke="#64748b" />
    <rect x="37" y="18" width="26" height="64" fill="#e0f2fe" stroke="#64748b" />
    <rect x="63" y="18" width="24" height="64" fill="#e0f2fe" stroke="#64748b" />
    <path d="M30 50 V 60 M46 50 V 60 M70 50 V 60" stroke="#64748b" strokeWidth="2" />
  </svg>
);

const MultiSlideIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="5" y="15" width="90" height="70" fill="#f8fafc" stroke="#64748b" />
    <rect x="8" y="18" width="20" height="64" fill="#e0f2fe" stroke="#64748b" />
    <rect x="28" y="18" width="22" height="64" fill="#e0f2fe" stroke="#64748b" />
    <rect x="50" y="18" width="22" height="64" fill="#e0f2fe" stroke="#64748b" />
    <rect x="72" y="18" width="20" height="64" fill="#e0f2fe" stroke="#64748b" />
  </svg>
);

const PocketSliderIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="25" y="15" width="50" height="70" fill="#f8fafc" stroke="#64748b" strokeDasharray="4 2" />
    <rect x="30" y="18" width="40" height="64" fill="#e0f2fe" stroke="#64748b" />
    <path d="M10 15 V 85 M90 15 V 85" stroke="#cbd5e1" strokeWidth="4" />
    <path d="M70 50 L 80 50 M 75 45 L 80 50 L 75 55" stroke="#64748b" strokeWidth="2" />
  </svg>
);

const FrenchSliderIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="15" y="15" width="70" height="70" fill="#f8fafc" stroke="#64748b" />
    <rect x="18" y="18" width="33" height="64" fill="#e0f2fe" stroke="#64748b" strokeWidth="4" />
    <rect x="49" y="18" width="33" height="64" fill="#e0f2fe" stroke="#64748b" strokeWidth="4" />
    <path d="M18 40 H 51 M 18 62 H 51 M 49 40 H 82 M 49 62 H 82" stroke="#64748b" />
    <path d="M46 50 V 60 M54 50 V 60" stroke="#64748b" strokeWidth="2" />
  </svg>
);

const CoastalIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="15" y="15" width="70" height="70" fill="#f8fafc" stroke="#64748b" />
    <rect x="18" y="18" width="64" height="64" fill="#e0f2fe" stroke="#64748b" />
    {/* Wind / Hurricane symbols */}
    <path d="M35 45 C 50 25, 60 45, 45 60" stroke="#64748b" fill="none" strokeWidth="2" />
    <path d="M55 40 C 40 55, 60 70, 65 55" stroke="#64748b" fill="none" strokeWidth="2" />
    <path d="M35 65 L 40 60 L 45 68 Z" fill="#cbd5e1" stroke="none" />
    <path d="M60 35 L 55 40 L 65 42 Z" fill="#cbd5e1" stroke="none" />
    {/* Impact star */}
    <path d="M50 45 L 53 48 L 58 46 L 55 51 L 58 56 L 53 54 L 50 58 L 47 54 L 42 56 L 45 51 L 42 46 L 47 48 Z" fill="#fcb900" stroke="#fcb900" strokeWidth="1" />
  </svg>
);

const CARDS = [
  { title: "Standard 2-Panel", Icon: TwoPanelIcon },
  { title: "3-Panel Stacking", Icon: ThreePanelIcon },
  { title: "Multi-Slide Doors", Icon: MultiSlideIcon },
  { title: "Pocket Sliders", Icon: PocketSliderIcon },
  { title: "French-Style Sliders", Icon: FrenchSliderIcon },
  { title: "Coastal Impact Sliders", Icon: CoastalIcon },
];

export default function SlidingDoorTypesCarousel() {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">Diverse Sliding Door Configurations</h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">Explore our extensive selection of sliding door structures. From standard entries to expansive wall-to-wall views, we have the perfect fit for your home.</p>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 40s linear infinite;
            width: max-content;
          }
          .group:hover .animate-infinite-scroll {
            animation-play-state: paused;
          }
        `}} />
        
        {/* Fading Edges for the carousel */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-infinite-scroll py-8">
          {/* Main List */}
          {CARDS.map((card, idx) => (
            <SlidingDoorTypeCard key={'first-'+idx} title={card.title} Icon={card.Icon} />
          ))}
          {/* Cloned List for seamless loop */}
          {CARDS.map((card, idx) => (
            <SlidingDoorTypeCard key={'second-'+idx} title={card.title} Icon={card.Icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
