import Link from "next/link";

const services = [
  {
    id: "windows",
    title: "Premium Windows",
    subtitle: "Energy Efficiency",
    description: "Eliminate drafts and maximize energy savings with our premium retrofit solutions. Engineered for total thermal efficiency, our window installations not only lower your utility bills but also elevate the aesthetic of your entire home. We offer a wide range of styles and materials to match your exact architectural needs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZivK1z528ePjmTaELFHE9Te32BVIxX3zGpNWoadxoo3ncE-8A8U2fm83pV8acqYk67RTAhw2s08h25O36iu_a5psd6mX8M-aZZ1phZb1qY-pzsQ6w8wRYmaBhuzrio_gnc6eEqZYzxl2NJ4nSNAhdux9sm_Miztt8Ca8pK30rv0LBMFL7lmp4SxhOZQyeZglz4qKVTjIswh8-ru1GVlofihAuj6rCT6wpwBtXq5D9JYS5uIIUGCWXHJeyK1KpAhjcMtXzbUZpJRo"
  },
  {
    id: "doors",
    title: "Luxury Doors",
    subtitle: "Security & Style",
    description: "Enhance home security and stop energy loss with high-performance custom doors. Designed for total thermal insulation, our custom entry and patio doors provide a stunning focal point for your home while keeping the elements out. Experience smooth operation and unmatched durability.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-9Xjyvl5QQ2C-x4cZ_LmeF18MzCASATWaLAk6o03gaUQM79LdBQL81jRqotj09jeHxj8RLEpf3JfwFyaBlq8pSc3JqetUHEGVO691XsxJmJsfV9v9to2A3ZOv04a5nPZGk8kgbTs4BUlCHHwXgs4lz2LMBadfG_nt4qFez-M81PejnyNo8TIc14k3bDwpaaYlDnXuH_qcoxyQrGEPF6_nXMqkk43STRmTGcEmOWma8B9mQrFVcmziLhkd2O3LIqAV2jERQDhZfPI"
  },
  {
    id: "roofing",
    title: "Durable Roofing",
    subtitle: "Weather Protection",
    description: "Protect your home with premium, weather-resistant roofing systems built for absolute durability and peace of mind. Our certified roofing experts ensure precision installation that withstands extreme weather conditions, preventing leaks and extending the lifespan of your property.",
    image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80"
  },
  {
    id: "hvac",
    title: "Advanced HVAC",
    subtitle: "Ultimate Comfort",
    description: "Experience ultimate indoor comfort and superior energy efficiency with advanced heating and cooling installations. Whether you need a smart thermostat upgrade or a complete system replacement, our high-end HVAC solutions guarantee perfectly climate-controlled living spaces year-round.",
    image: "/hvac-slider.png"
  },
  {
    id: "plumbing",
    title: "Modern Plumbing",
    subtitle: "Reliable Infrastructure",
    description: "Upgrade your home's infrastructure with state-of-the-art repiping and high-quality fixture replacements. From elegant bathroom upgrades to complete home repiping, we provide meticulous plumbing services that ensure flawless water flow and completely eliminate hidden leaks.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <header className="w-full max-w-[90rem] mx-auto px-8 mb-24 pt-24 lg:pt-32">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start max-w-5xl mx-auto">
          <div className="pt-4 shrink-0">
            <span className="inline-block text-primary font-label text-sm font-bold uppercase tracking-widest text-[#fcb900]">Our Expertise</span>
          </div>
          <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface leading-tight mb-6">Comprehensive <br />Home Improvement</h1>
            <p className="text-xl text-secondary leading-relaxed font-body">
              Explore our full range of premium remodeling services. From flawless window installations to advanced HVAC systems, we provide comprehensive, end-to-end solutions designed to elevate your home's value, comfort, and aesthetic appeal.
            </p>
          </div>
        </div>
      </header>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-8 mb-32 space-y-24 lg:space-y-32">
        {services.map((service, idx) => (
          <div 
            key={service.id} 
            className={`flex flex-col gap-12 lg:gap-20 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-3xl shadow-lg bg-surface-container-low">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={service.image}
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
              {/* Decorative Accent */}
              <div className={`absolute -bottom-6 ${idx % 2 === 1 ? '-left-6' : '-right-6'} w-48 h-48 bg-primary-container/30 rounded-full -z-10 blur-3xl`}></div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <span className="inline-block text-[#fcb900] font-headline font-bold tracking-widest text-sm uppercase mb-4 tracking-[0.2em]">
                {service.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-6">
                {service.title}
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-10">
                {service.description}
              </p>
              
              <Link 
                href={`/${service.id}`} 
                className="inline-block w-max bg-primary text-white px-8 py-4 rounded-xl font-headline font-bold text-sm uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container hover:-translate-y-1 transition-all shadow-md hover:shadow-lg"
              >
                Learn More About {service.title.split(' ').pop()}
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-24 px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tighter mb-8 text-white">Ready to Start Your Project?</h2>
          <p className="text-xl text-primary-container/80 mb-10">
            Contact us today for a free, zero-pressure in-home consultation. Let's build something beautiful together.
          </p>
          <button className="bg-white text-primary px-10 py-4 rounded-xl font-headline font-black text-sm uppercase tracking-widest hover:bg-surface-container-lowest transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Get Your Free Quote
          </button>
        </div>
      </section>
    </>
  );
}
