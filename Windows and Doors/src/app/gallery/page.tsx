import GalleryCTA from "@/components/GalleryCTA";

const galleryItems = [
  {
    src: "/gallery/Screenshot 2026-03-24 141955.png",
    category: "Recent Projects",
    title: "Before & After Excellence",
    description: "A stunning before-and-after showcase of custom window replacements, featuring energy-efficient upgrades on a modern stucco exterior."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 142527.png",
    category: "Windows",
    title: "Contemporary Contrast",
    description: "Sleek, black-framed casement and sliding windows provide a high-contrast, contemporary look to this crisp white stucco home."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143120.png",
    category: "Windows",
    title: "Superior Craftsmanship",
    description: "A dramatic transformation highlighting the superior craftsmanship and clean lines of our premium window installation services."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143140.png",
    category: "Doors",
    title: "Backyard Oasis",
    description: "A beautiful backyard oasis featuring a crystal-clear pool perfectly framed by our custom sliding glass doors and white-trimmed windows."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143205.png",
    category: "Doors",
    title: "Seamless Transition",
    description: "Sophisticated black-framed sliding doors and matching windows create a seamless transition from this elegant interior to the outdoor living space."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143231.png",
    category: "Windows",
    title: "Architectural Focal Point",
    description: "An elegant green exterior is beautifully complemented by a large, classic white-framed bay window that serves as a stunning architectural focal point."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143258.png",
    category: "Windows",
    title: "Modern Aesthetic",
    description: "Our precision window installations offer a clean, modern aesthetic that instantly enhances the curb appeal of any residential property."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143440.png",
    category: "Windows",
    title: "Timeless Touch",
    description: "Superior craftsmanship is evident in these white-trimmed slider windows featuring elegant internal grids for a timeless touch."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143503.png",
    category: "Windows",
    title: "Durable Materials",
    description: "A close-up view of our high-quality window installation, showcasing the durable materials and smooth finish of our energy-efficient models."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143534.png",
    category: "Windows",
    title: "Warm Architecture",
    description: "A stunning residential exterior featuring a new window installation that perfectly complements the home's warm, sunlit architecture."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143554.png",
    category: "Doors",
    title: "Natural Light Invasion",
    description: "A stylish white French door with large glass panes provides a seamless connection to the outdoor patio while flooding the room with natural light."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143616.png",
    category: "Windows",
    title: "Clean Vinyl Aesthetics",
    description: "A close-up of our precision-installed white vinyl windows, showcasing the clean aesthetic and high-quality weatherproofing on a stucco home."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143644.png",
    category: "Windows",
    title: "Uniform Beauty",
    description: "This residential facade is transformed with multiple new, energy-efficient window units that provide uniform beauty and enhanced insulation."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143707.png",
    category: "Windows",
    title: "Expansive Views",
    description: "A multi-window installation on this modern home interior provides expansive views and a flood of natural light through crisp, white frames."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143727.png",
    category: "Windows",
    title: "Traditional Wood Siding",
    description: "These high-performance white vinyl windows offer both privacy and style, seamlessly integrated into a traditional wood-sided exterior."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143743.png",
    category: "Windows",
    title: "Vibrant Facade",
    description: "Multiple white-framed replacement windows provide a crisp, uniform look that elevates the curb appeal of this vibrant blue residential facade."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143756.png",
    category: "Windows",
    title: "Fresh Ventilation",
    description: "A row of new, high-efficiency sliding windows brings a fresh, modern aesthetic and improved ventilation to this sun-drenched home."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143811.png",
    category: "Doors",
    title: "Grand Entrance",
    description: "A stunning white French patio door with matching side windows creates a grand and functional entrance to the outdoor living area."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 143848.png",
    category: "Windows",
    title: "Functional Custom Update",
    description: "A single hung window with white trim provides a functional and clean update to this residential utility area."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 144122.png",
    category: "Windows",
    title: "Remodeled Profile",
    description: "A row of expertly installed white-trimmed windows provides a clean, modern aesthetic to the side profile of this beautifully remodeled home."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 144154.png",
    category: "Windows",
    title: "Superior Finishing",
    description: "A close-up of our precision-installed white vinyl windows, highlighting the seamless integration with the home's exterior and superior finish."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 144215.png",
    category: "Windows",
    title: "Enhanced Lighting",
    description: "A dramatic transformation illustrating the clean, modern look and enhanced natural lighting provided by our premium window replacement systems."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 144231.png",
    category: "Doors",
    title: "Effortless Operation",
    description: "This expansive sliding glass door with white trim offers effortless operation and a crystal-clear view of the outdoor patio space."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 144304.png",
    category: "Windows",
    title: "Contemporary Feel",
    description: "A beautifully balanced pair of white-trimmed horizontal slider windows brings a fresh and contemporary feel to this residential exterior."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 144330.png",
    category: "Windows",
    title: "Sharp Contrast",
    description: "A clean and efficient window replacement featuring high-quality white frames that provide a sharp contrast against this vibrant stucco exterior."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 144350.png",
    category: "Windows",
    title: "Architectural Character",
    description: "A stylish slider window with elegant internal grids, perfectly framed by a crisp stucco exterior to enhance the home's architectural character."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 144414.png",
    category: "Windows",
    title: "Polished Facade",
    description: "This comprehensive window replacement project features multiple new units that provide a cohesive and polished look to the entire residential facade."
  },
  {
    src: "/gallery/Screenshot 2026-03-24 144432.png",
    category: "Doors",
    title: "Sophisticated Security",
    description: "A stunning white French door with elegant internal grids provides a sophisticated and secure entrance to the patio."
  }
];

export default function Gallery() {
  return (
    <>
      {/* Hero Section */}
      <header className="w-full max-w-[90rem] mx-auto px-8 mb-24 pt-24 lg:pt-32">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start max-w-5xl mx-auto">
          <div className="pt-4 shrink-0">
            <span className="inline-block text-primary font-label text-sm font-bold uppercase tracking-widest text-[#fcb900]">Portfolio</span>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-tight mb-6">See the Difference <br />Our Project Portfolio</h1>
            <p className="text-xl text-secondary leading-relaxed font-body">Explore our gallery to see our commitment to premium craftsmanship firsthand. Every photo showcases our dedication to flawless installation, beautiful design, and elevating the curb appeal of homes just like yours. See what we can build for you!</p>
          </div>
        </div>
      </header>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="break-inside-avoid group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-surface-container-low shadow-sm hover:shadow-xl transition-shadow duration-500">
                <img
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  src={item.src}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[#fcb900] font-label text-xs font-bold uppercase tracking-wider mb-2">{item.category}</span>
                  <h3 className="text-white font-headline font-bold text-xl">{item.title}</h3>
                </div>
              </div>
              <div className="mt-4 px-2 pb-6 border-b border-outline-variant/10">
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <GalleryCTA />
    </>
  );
}
