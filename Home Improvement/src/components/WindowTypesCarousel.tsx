import React from 'react';

const WindowTypeCard = ({ title, Icon }: { title: string, Icon: React.FC }) => (
  <div className="flex-shrink-0 w-72 bg-surface-container-low border border-outline-variant/10 rounded-2xl p-10 flex flex-col items-center justify-center gap-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mx-4 cursor-pointer">
    <div className="w-32 h-32 flex items-center justify-center">
      <Icon />
    </div>
    <h4 className="font-headline font-extrabold text-center text-xl text-on-surface">{title}</h4>
  </div>
);

// Custom SVGs matching the requested screenshot style (clean grey borders, light blue glass)
const AwningIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="15" y="30" width="70" height="40" fill="#f8fafc" stroke="#64748b" />
    <path d="M20 30 L8 65 H92 L80 30 Z" fill="#e2e8f0" stroke="#64748b" strokeLinejoin="round" />
    <path d="M25 35 L15 60 H85 L75 35 Z" fill="#e0f2fe" stroke="#64748b" strokeLinejoin="round" />
  </svg>
);

const BayBowIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M15 35 L 30 20 H 70 L 85 35 V 65 L 70 80 H 30 L 15 65 Z" fill="#e0f2fe" stroke="#64748b" strokeLinejoin="round" />
    <path d="M30 20 V 80 M70 20 V 80" stroke="#64748b" />
    <path d="M19 36 L 27 28 V 72 L 19 64 Z" fill="#eff6ff" stroke="#64748b" />
    <rect x="33" y="24" width="34" height="52" fill="#eff6ff" stroke="#64748b" />
    <path d="M81 36 L 73 28 V 72 L 81 64 Z" fill="#eff6ff" stroke="#64748b" />
  </svg>
);

const CasementIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="30" y="10" width="40" height="80" fill="#f8fafc" stroke="#64748b" />
    <path d="M30 10 L 10 20 V 80 L 30 90 Z" fill="#e0f2fe" stroke="#64748b" strokeLinejoin="round" />
    <path d="M26 17 L 15 23 V 77 L 26 83 Z" fill="#eff6ff" stroke="#64748b" />
  </svg>
);

const DoubleHungIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="30" y="5" width="40" height="90" fill="#f8fafc" stroke="#64748b" />
    <rect x="34" y="9" width="32" height="42" fill="#e0f2fe" stroke="#64748b" />
    <rect x="32" y="47" width="36" height="44" fill="#e0f2fe" stroke="#64748b" />
    <path d="M50 9 V 47 M34 28 H 66" stroke="#cbd5e1" strokeWidth="2" />
    <path d="M50 47 V 91 M32 69 H 68" stroke="#cbd5e1" strokeWidth="2" />
  </svg>
);

const PictureIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="20" y="20" width="60" height="60" fill="#f8fafc" stroke="#64748b" />
    <rect x="25" y="25" width="50" height="50" fill="#e0f2fe" stroke="#64748b" />
    <path d="M25 25 L 75 75 M 75 25 L 25 75" stroke="#e2e8f0" strokeWidth="1" strokeOpacity="0.5" />
  </svg>
);

const SlidingIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="15" y="25" width="70" height="50" fill="#f8fafc" stroke="#64748b" />
    <rect x="18" y="28" width="34" height="44" fill="#e0f2fe" stroke="#64748b" />
    <rect x="49" y="28" width="33" height="44" fill="#e0f2fe" stroke="#64748b" />
    <path d="M44 40 V 60 M55 40 V 60" stroke="#64748b" strokeWidth="2" />
  </svg>
);

const SpecialtyIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M25 50 A 25 25 0 0 1 75 50 V 85 H 25 Z" fill="#f8fafc" stroke="#64748b" />
    <path d="M30 50 A 20 20 0 0 1 70 50 V 80 H 30 Z" fill="#e0f2fe" stroke="#64748b" />
    <path d="M50 30 V 80 M30 50 H 70" stroke="#cbd5e1" strokeWidth="2" />
    <path d="M50 50 L 36 36 M50 50 L 64 36" stroke="#cbd5e1" strokeWidth="2" />
  </svg>
);

const CoastalIcon = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md" fill="none" stroke="currentColor" strokeWidth="2.5">
    <rect x="20" y="20" width="60" height="60" fill="#f8fafc" stroke="#64748b" />
    <rect x="25" y="25" width="50" height="50" fill="#e0f2fe" stroke="#64748b" />
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
  { title: "Awning Window", Icon: AwningIcon },
  { title: "Bay/Bow Window", Icon: BayBowIcon },
  { title: "Casement Window", Icon: CasementIcon },
  { title: "Double Hung", Icon: DoubleHungIcon },
  { title: "Picture Window", Icon: PictureIcon },
  { title: "Sliding Window", Icon: SlidingIcon },
  { title: "Specialty Window", Icon: SpecialtyIcon },
  { title: "Coastal Impact Windows", Icon: CoastalIcon },
];

export default function WindowTypesCarousel() {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">Diverse Window Types</h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto">Explore our extensive selection of window structures. Each shape and opening mechanism brings unique airflow and lighting advantages to your space.</p>
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
            <WindowTypeCard key={'first-'+idx} title={card.title} Icon={card.Icon} />
          ))}
          {/* Cloned List for seamless loop */}
          {CARDS.map((card, idx) => (
            <WindowTypeCard key={'second-'+idx} title={card.title} Icon={card.Icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
