import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function HVAC() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury HVAC"
            className="w-full h-full object-cover"
            src="/hvac_hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-surface/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-primary-container font-bold tracking-[0.2em] uppercase text-sm mb-4 font-label">Create Your Perfect Climate</span>
            <h1 className="text-white font-headline text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-tighter mb-8">
              High-Efficiency <span className="text-[#fcb900]">HVAC</span> Systems
            </h1>
            <p className="text-zinc-200 text-xl font-medium leading-relaxed mb-10 border-l-4 border-primary px-6">
              Engineering the perfect climate for your home. Adler HVAC solutions combine whisper-quiet operation with maximum energy savings.
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
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mt-2 leading-tight">Mastering Your Comfort</h2>
            </div>
            <p className="text-on-surface-variant max-w-md text-lg italic">"True comfort is invisible, whisper-quiet, and flawlessly efficient."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* AC Units */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
                <img
                  alt="Modern AC Unit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/ac_condenser.png"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-on-surface text-sm font-medium">Smart-thermostat integration, multi-stage cooling, and ultra-quiet fans.</p>
                </div>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-2">High-SEER Air Conditioning</h3>
              <p className="text-on-surface-variant">Beat the summer heat with rapid cooling systems that dramatically lower your utility bills.</p>
            </div>
            {/* Heating */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
                <img
                  alt="Modern Furnace"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/heating_thermostat.png"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-on-surface text-sm font-medium">Variable speed blowers, precise humidity control, and rapid heating.</p>
                </div>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-2">Advanced Heating Systems</h3>
              <p className="text-on-surface-variant">Stay cozy all winter long with reliable, energy-efficient furnaces and heat pumps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence Section */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="w-full mx-auto px-8 lg:px-16 2xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-8 uppercase">The <span className="text-[#fcb900]">Adler</span> Standard</h2>
            <p className="text-xl text-secondary leading-relaxed">The Adler Standard means never compromising on your home's safety or style. Every Adler HVAC unit is meticulously engineered as a multi-layered system to effortlessly withstand time, harsh weather, and deliver pure air. Experience unmatched durability and ultimate peace of mind. Contact us today for a quote!</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Security Card */}
            <div className="group p-6 lg:p-12 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 text-left flex flex-col">
              <div className="w-20 h-20 bg-[#fcb900]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#fcb900]/20 transition-colors">
                <span className="material-symbols-outlined text-[#fcb900] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">shield</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Breathe Cleaner, Healthier Air</h3>
              <p className="text-secondary leading-relaxed text-lg">Your HVAC system is the lungs of your home. Upgrading to a premium system instantly elevates your indoor air quality while providing unmatched energy efficiency. Whether you need a stunning smart thermostat setup or advanced air filtration, our expert installation ensures a perfect, draft-free fit every single time. Stop struggling with allergies, dust, and outdated designs that drag down your comfort. Please contact our team today for a free consultation and let us transform your climate!</p>
            </div>

            {/* Insulation Card */}
            <div className="group p-6 lg:p-12 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 text-left flex flex-col">
              <div className="w-20 h-20 bg-[#fcb900]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#fcb900]/20 transition-colors">
                <span className="material-symbols-outlined text-[#fcb900] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">thermostat</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Master Your Temperature</h3>
              <p className="text-secondary leading-relaxed text-lg">Nothing compares to the natural warmth and perfectly balanced cooling of a modern HVAC system. Designed for homeowners who refuse to compromise on comfort, our premium systems offer incredible climate control and endless customization options to match your exact schedule. A solid HVAC unit not only creates a breathtakingly comfortable environment but also provides excellent durability and natural insulation against extreme weather. Don't let an outdated unit disrupt your peace. Please contact our dedicated team today to explore all your options and request a custom quote!</p>
            </div>

            {/* Durability Card */}
            <div className="group p-6 lg:p-12 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 text-left flex flex-col">
              <div className="w-20 h-20 bg-[#fcb900]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#fcb900]/20 transition-colors">
                <span className="material-symbols-outlined text-[#fcb900] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">diamond</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Unwavering Reliability Year-Round</h3>
              <p className="text-secondary leading-relaxed text-lg">If you are looking for the ultimate combination of high-end performance, unwavering durability, and zero-maintenance convenience, our HVAC solutions are the perfect choice. Engineered to operate flawlessly, your new system will never let you down, no matter how harsh the seasons get. They also offer superior energy efficiency, keeping your interior climate perfectly balanced and your utility bills remarkably low. Stop worrying about constant upkeep and unexpected breakdowns. Please contact our experts today to schedule your free consultation and upgrade your house!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Estimate Form Section */}
      <section className="py-16 lg:py-24 bg-white px-8" id="estimate">
        <div className="max-w-7xl mx-auto bg-on-surface text-white rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-6 md:p-6 lg:p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 leading-tight">Ready to upgrade your climate?</h2>
            <p className="text-zinc-400 text-lg mb-8">Schedule a free design consultation. Our specialists will help you select the perfect system, efficiency features, and smart thermostats for your home.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#fcb900]" aria-hidden="true">verified</span>
                <span>Expert on-site load calculations</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#fcb900]" aria-hidden="true">palette</span>
                <span>Custom ductwork and system matching</span>
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
