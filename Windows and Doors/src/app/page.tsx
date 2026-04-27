import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Modern Luxury Home"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP2uyh2eD4Gc-JIcxZeuSoVwK10pEzmcnX0VmwTcOvjihsZaTg_Zs-9MB4BDEVvPWAGB37w-G8XLRjqSeuRKQRWNL5URBi6h6EX9lwk1CTU5mK1o4kER4Qj1Dbv8uMY_P1679qKLrgdxGW3aVk8aw2EcCY6k4t-EPywN3xKZSL68Bfne5wysnzSfuQIJb6hKdFaJ0hoouddNLDABoJIMPxpSMCKGt4W0x7DNgVfzj5Mp63blS89QqUeQSIpNSiY4ZGQRdCMnrTJAY"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-primary font-headline font-bold tracking-widest text-xs uppercase mb-4 tracking-[0.2em]">
              Crafting Excellence
            </span>
            <h1 className="text-6xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tighter mb-6">
              Let the <span className="text-[#fcb900] bg-on-surface px-4 py-1 italic">Sunshine</span> In.
            </h1>
            <p className="text-xl text-secondary font-body leading-relaxed mb-10 max-w-xl">
              Upgrade your home with durable, stylish, and highly insulated windows and doors. Save on energy bills while enhancing your home's curb appeal.
            </p>

          </div>
        </div>
      </section>

      {/* Services Section: Symmetrical Layout */}
      <section className="py-16 lg:py-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Windows Block */}
          <div className="group cursor-pointer">
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-sm bg-surface-container-low">
              <img
                alt="Premium Window Installation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZivK1z528ePjmTaELFHE9Te32BVIxX3zGpNWoadxoo3ncE-8A8U2fm83pV8acqYk67RTAhw2s08h25O36iu_a5psd6mX8M-aZZ1phZb1qY-pzsQ6w8wRYmaBhuzrio_gnc6eEqZYzxl2NJ4nSNAhdux9sm_Miztt8Ca8pK30rv0LBMFL7lmp4SxhOZQyeZglz4qKVTjIswh8-ru1GVlofihAuj6rCT6wpwBtXq5D9JYS5uIIUGCWXHJeyK1KpAhjcMtXzbUZpJRo"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 pt-32 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
                <h3 className="text-4xl font-headline font-bold mb-4">Windows</h3>
                <p className="text-zinc-200 mb-6 max-w-md">Eliminate drafts and maximize energy savings with premium retrofit solutions. Engineered for total thermal efficiency.</p>
                <Link href="/windows" className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-headline font-bold text-sm uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-colors">
                  Explore Windows
                </Link>
              </div>
            </div>
          </div>

          {/* Doors Block */}
          <div className="group cursor-pointer">
            <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-sm bg-surface-container-low">
              <img
                alt="Luxury Front Door"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-9Xjyvl5QQ2C-x4cZ_LmeF18MzCASATWaLAk6o03gaUQM79LdBQL81jRqotj09jeHxj8RLEpf3JfwFyaBlq8pSc3JqetUHEGVO691XsxJmJsfV9v9to2A3ZOv04a5nPZGk8kgbTs4BUlCHHwXgs4lz2LMBadfG_nt4qFez-M81PejnyNo8TIc14k3bDwpaaYlDnXuH_qcoxyQrGEPF6_nXMqkk43STRmTGcEmOWma8B9mQrFVcmziLhkd2O3LIqAV2jERQDhZfPI"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 pt-32 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
                <h3 className="text-4xl font-headline font-bold mb-4">Doors</h3>
                <p className="text-zinc-200 mb-6 max-w-md">Enhance home security and stop energy loss with high performance custom doors. Designed for total thermal insulation.</p>
                <Link href="/doors" className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-headline font-bold text-sm uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-colors">
                  Explore Doors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-headline font-bold tracking-widest text-xs uppercase mb-2 block">Visual Proof</span>
            <h2 className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface">Before & After Transformations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Comparison 1 */}
            <div className="space-y-6">
              <BeforeAfterSlider 
                beforeImage="/transformations/before-2.jpeg" 
                afterImage="/transformations/after-2.png" 
              />
              <div className="px-2">
                <h4 className="text-xl font-headline font-bold text-on-surface">Classic Grid Window Upgrade</h4>
                <p className="text-secondary text-sm mt-2">Upgraded failing, foggy panes to crisp white vinyl grid units, instantly boosting the home’s curb appeal while maximizing year-round thermal insulation.</p>
              </div>
            </div>

            {/* Comparison 2 */}
            <div className="space-y-6">
              <BeforeAfterSlider 
                beforeImage="/transformations/before-1.jpeg" 
                afterImage="/transformations/after-1.png" 
              />
              <div className="px-2">
                <h4 className="text-xl font-headline font-bold text-on-surface">Premium Patio Door Retrofit</h4>
                <p className="text-secondary text-sm mt-2">Replaced a decaying, drafty wooden slider with a high-efficiency white vinyl patio door and durable screen, eliminating air leaks and upgrading everyday functionality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Hassle-Free Process */}
      <section className="bg-surface-container-low py-16 lg:py-24 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-primary font-headline font-bold tracking-widest text-xs uppercase mb-2 block">The Adler Way</span>
              <h2 className="text-5xl font-headline font-extrabold tracking-tighter text-on-surface">Our Hassle-Free Process</h2>
            </div>
            <p className="text-secondary max-w-xs font-body italic border-l-4 border-primary-container pl-6 py-2">
              Professionalism at every turn, from first call to final clean-up.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Step 1 */}
            <div className="relative group cursor-default">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl font-headline font-black text-primary/80 select-none transition-colors duration-300 group-hover:text-primary">01</div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-primary text-3xl transition-colors duration-300 group-hover:text-white" aria-hidden="true">home_health</span>
                </div>
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-headline font-bold mb-3 transition-colors duration-300 group-hover:text-primary">In-Home Consultation</h4>
                <p className="text-secondary leading-relaxed">We meet at your residence to discuss your vision, evaluate your existing windows, and provide expert recommendations tailored to your budget.</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="relative group cursor-default">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl font-headline font-black text-primary/80 select-none transition-colors duration-300 group-hover:text-primary">02</div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-primary text-3xl transition-colors duration-300 group-hover:text-white" aria-hidden="true">square_foot</span>
                </div>
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-headline font-bold mb-3 transition-colors duration-300 group-hover:text-primary">Precise Measurements</h4>
                <p className="text-secondary leading-relaxed">Our technicians use laser-precision equipment to ensure your new units fit perfectly, eliminating potential air leaks or structural issues.</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="relative group cursor-default">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl font-headline font-black text-primary/80 select-none transition-colors duration-300 group-hover:text-primary">03</div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-primary text-3xl transition-colors duration-300 group-hover:text-white" aria-hidden="true">construction</span>
                </div>
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-headline font-bold mb-3 transition-colors duration-300 group-hover:text-primary">Expert Installation</h4>
                <p className="text-secondary leading-relaxed">Our certified crews handle the heavy lifting with surgical precision, maintaining a clean workspace and respecting your home environment.</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="relative group cursor-default">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl font-headline font-black text-primary/80 select-none transition-colors duration-300 group-hover:text-primary">04</div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:shadow-lg group-hover:-translate-y-1">
                  <span className="material-symbols-outlined text-primary text-3xl transition-colors duration-300 group-hover:text-white" aria-hidden="true">verified_user</span>
                </div>
              </div>
              <div className="relative z-10">
                <h4 className="text-xl font-headline font-bold mb-3 transition-colors duration-300 group-hover:text-primary">Customer Care</h4>
                <p className="text-secondary leading-relaxed">We walk you through the final results, explain maintenance, and back our work with an industry-leading satisfaction guarantee.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners Carousel */}
      <section className="py-20 px-0 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto text-center px-8 mb-12">
          <h3 className="text-on-surface font-headline font-black uppercase tracking-widest text-xl md:text-2xl">We install top quality products from renowned brands.</h3>
        </div>
        
        <div className="relative w-full max-w-[100vw] overflow-hidden flex pt-4 pb-8">
          {/* Fading Edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
          
          {/* Sliding Track */}
          <div className="flex w-max animate-carousel hover:[animation-play-state:paused]">
            {/* First Set */}
            <div className="flex items-center justify-around w-max gap-16 md:gap-24 px-4 md:px-10">
              {[
                { name: "Milgard Windows & Doors", file: "milgard.png" },
                { name: "Anlin Window Systems", file: "anlin.png" },
                { name: "Fleetwood Windows & Doors", file: "fleetwood.png" },
                { name: "Renewal by Andersen", file: "andersen.png" },
                { name: "Marvin", file: "marvin.png" },
                { name: "Pella", file: "pella.png" },
                { name: "California Deluxe Windows", file: "cdw.png" },
                { name: "Simonton Windows & Doors", file: "simonton.png" },
                { name: "Ply Gem", file: "plygem.png" }
              ].map((brand, i) => (
                <div key={`brand-1-${i}`} className="flex flex-col items-center justify-center cursor-default min-w-[160px] gap-4">
                  <img src={`/brands/logos/${brand.file}`} alt={`${brand.name} Logo`} className="h-16 md:h-20 w-auto object-contain transition-all duration-300 transform hover:scale-110 drop-shadow-sm" />
                  <span className="text-sm font-bold text-on-surface text-center font-headline tracking-tight">{brand.name}</span>
                </div>
              ))}
            </div>
            {/* Duplicate Set for Infinite Scroll */}
            <div className="flex items-center justify-around w-max gap-16 md:gap-24 px-4 md:px-10">
              {[
                { name: "Milgard Windows & Doors", file: "milgard.png" },
                { name: "Anlin Window Systems", file: "anlin.png" },
                { name: "Fleetwood Windows & Doors", file: "fleetwood.png" },
                { name: "Renewal by Andersen", file: "andersen.png" },
                { name: "Marvin", file: "marvin.png" },
                { name: "Pella", file: "pella.png" },
                { name: "California Deluxe Windows", file: "cdw.png" },
                { name: "Simonton Windows & Doors", file: "simonton.png" },
                { name: "Ply Gem", file: "plygem.png" }
              ].map((brand, i) => (
                <div key={`brand-2-${i}`} className="flex flex-col items-center justify-center cursor-default min-w-[160px] gap-4">
                  <img src={`/brands/logos/${brand.file}`} alt={`${brand.name} Logo`} className="h-16 md:h-20 w-auto object-contain transition-all duration-300 transform hover:scale-110 drop-shadow-sm" />
                  <span className="text-sm font-bold text-on-surface text-center font-headline tracking-tight">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 px-8 bg-on-surface text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter mb-6 leading-tight">
              Ready to <span className="text-[#fcb900]">Upgrade?</span><br />Get Your Free Estimate!
            </h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-lg">
              Transforming your home starts with a simple conversation. Fill out the form, and our project specialist will contact you within 24 business hours.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#fcb900]" aria-hidden="true">support_agent</span>
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase font-bold tracking-widest">Immediate Support</p>
                  <p className="text-xl font-headline font-bold">805-232-5080</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm className="bg-white p-6 md:p-10 rounded-2xl text-on-surface shadow-2xl w-full max-w-lg mx-auto" />
        </div>
      </section>
    </>
  );
}
