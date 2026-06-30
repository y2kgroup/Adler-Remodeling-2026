import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Roofing() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury Roofing"
            className="w-full h-full object-cover"
            src="/roofing_hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-surface/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-primary-container font-bold tracking-[0.2em] uppercase text-sm mb-4 font-label">Create Your Perfect Shelter</span>
            <h1 className="text-white font-headline text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-tighter mb-8">
              Durable & Protective <span className="text-[#fcb900]">Roofing</span>
            </h1>
            <p className="text-zinc-200 text-xl font-medium leading-relaxed mb-10 border-l-4 border-primary px-6">
              Engineering the perfect shelter for your home. Adler roofing systems combine impenetrable weather resistance with high design aesthetics.
            </p>
            <Link href="#estimate" className="inline-block bg-primary hover:bg-primary-container hover:text-on-primary-container text-white px-8 py-4 rounded-xl font-headline font-bold uppercase tracking-widest text-sm shadow-xl hover:shadow-2xl transition-all">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 lg:py-24 bg-surface px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-primary font-bold text-sm tracking-widest uppercase font-label">The Collection</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mt-2 leading-tight">Mastering Every Roof</h2>
            </div>
            <p className="text-on-surface-variant max-w-md text-lg italic">"A roof is more than just cover; it's the ultimate protector of your family and your investment."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Asphalt Shingles */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
                <img
                  alt="Architectural Shingles"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/roofing_shingles.png"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-on-surface text-sm font-medium">Dimensional shingles, high wind resistance, and algae protection.</p>
                </div>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-2">Architectural Shingles</h3>
              <p className="text-on-surface-variant">Make a lasting impression with rich textures and striking color options designed for longevity.</p>
            </div>
            {/* Tile Roofing */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
                <img
                  alt="Clay Tile Roof"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/roofing_tiles.png"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-on-surface text-sm font-medium">Exceptional thermal capacity and century-spanning durability.</p>
                </div>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-2">Premium Tile Roofing</h3>
              <p className="text-on-surface-variant">Elevate your home's architecture with classic clay or concrete tiles that withstand the harshest elements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence Section */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="w-full mx-auto px-8 lg:px-16 2xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-8 uppercase">The <span className="text-[#fcb900]">Adler</span> Standard</h2>
            <p className="text-xl text-secondary leading-relaxed">The Adler Standard means never compromising on your home's safety or style. Every Adler roof is meticulously engineered as a multi-layered system to effortlessly withstand time, harsh weather, and leaks. Experience unmatched durability and ultimate peace of mind. Contact us today for a quote!</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Security Card */}
            <div className="group p-6 lg:p-12 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 text-left flex flex-col">
              <div className="w-20 h-20 bg-[#fcb900]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#fcb900]/20 transition-colors">
                <span className="material-symbols-outlined text-[#fcb900] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">shield</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Total Weather Defense System</h3>
              <p className="text-secondary leading-relaxed text-lg">Your roof is your home's first line of defense against the elements. Upgrading to a premium roofing system instantly elevates your curb appeal while providing unmatched security and energy efficiency. Whether you need a stunning tile roof or durable architectural shingles, our expert installation ensures a perfect, leak-free fit every single time. Stop struggling with constant repairs and hidden water damage that drag down your property value. Please contact our team today for a free consultation and let us transform your roof!</p>
            </div>

            {/* Insulation Card */}
            <div className="group p-6 lg:p-12 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 text-left flex flex-col">
              <div className="w-20 h-20 bg-[#fcb900]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#fcb900]/20 transition-colors">
                <span className="material-symbols-outlined text-[#fcb900] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">thermostat</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Maximize Energy Efficiency</h3>
              <p className="text-secondary leading-relaxed text-lg">A failing roof doesn't just leak water—it leaks your hard-earned money in the form of wasted heating and cooling. Our modern roofing systems incorporate advanced ventilation and thermal reflection technology to keep your attic cooler in the summer and warmer in the winter. A properly engineered roof creates a breathtaking first impression while dramatically lowering your utility bills. Please contact our dedicated team today to explore all your options and request a custom quote!</p>
            </div>

            {/* Durability Card */}
            <div className="group p-6 lg:p-12 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 text-left flex flex-col">
              <div className="w-20 h-20 bg-[#fcb900]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#fcb900]/20 transition-colors">
                <span className="material-symbols-outlined text-[#fcb900] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">diamond</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Decades of Proven Durability</h3>
              <p className="text-secondary leading-relaxed text-lg">If you are looking for the ultimate combination of high-end aesthetics, unwavering durability, and zero-maintenance convenience, our premium roofing materials are the perfect solution. Engineered to withstand high winds, heavy rain, and extreme UV exposure, your new roof will never let you down, no matter how harsh the elements get. Stop worrying about constant upkeep and storm damage. Please contact our experts today to schedule your free consultation and secure your house!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Estimate Form Section */}
      <section className="py-16 lg:py-24 bg-white px-8" id="estimate">
        <div className="max-w-7xl mx-auto bg-on-surface text-white rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-6 md:p-6 lg:p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 leading-tight">Ready to secure your roof?</h2>
            <p className="text-zinc-400 text-lg mb-8">Schedule a free design consultation. Our specialists will help you select the perfect materials, security features, and finishes for your home.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#fcb900]" aria-hidden="true">verified</span>
                <span>Expert on-site inspection</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#fcb900]" aria-hidden="true">palette</span>
                <span>Custom color and material matching</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#fcb900]" aria-hidden="true">calendar_today</span>
                <span>Project timeline and cost analysis</span>
              </div>
            </div>
          </div>
          <ContactForm 
            title="Schedule Your Consultation"
            className="lg:w-1/2 bg-surface-container-highest/10 p-6 md:p-6 lg:p-12 lg:p-20 text-on-surface"
            inputClassName="w-full bg-zinc-900 border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-white outline-none"
          />
        </div>
      </section>
    </>
  );
}
