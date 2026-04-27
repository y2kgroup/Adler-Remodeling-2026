import DoorsHeroCTA from "@/components/DoorsHeroCTA";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Doors() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury double entry doors"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWN0mc2E3KTTOZ20oTjmCLojEojVd6aAjdOQJ2PQz2EFo1VovvzTEs5xmGUDC34ofWY7Kp_CV1Ql9wZwB7RmupDBw7WVIijKROcY4EL9ENpxFY9SKricNQ16sEiC380FO9s87sw1AryNywYA-eLZXn56Gdx6zq6g2vnpefr17NX93C8te6HrPhyTuX3fI7Sxvwqo1vX3PyuQ-S_Vk5yp58SgLfFSZV8W1PItKlE1bPs4HS18DDSDBf7302jK7WOjvUEQvaZBkoLVE"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-on-surface/60 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block text-primary-container font-bold tracking-[0.2em] uppercase text-sm mb-4 font-label">Create Your Perfect Door</span>
            <h1 className="text-white font-headline text-6xl md:text-8xl font-extrabold leading-[1.1] tracking-tighter mb-8">
              Secure & Stylish Exterior <span className="text-[#fcb900]">Doors</span>
            </h1>
            <p className="text-zinc-200 text-xl font-medium leading-relaxed mb-10 border-l-4 border-primary px-6">
              Engineering the perfect transition between your sanctuary and the world. Adler doors combine impenetrable security with high design aesthetics.
            </p>
            <DoorsHeroCTA />
          </div>
        </div>
      </section>

      {/* Featured Collections: Entry vs Patio */}
      <section className="py-16 lg:py-24 bg-surface px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-primary font-bold text-sm tracking-widest uppercase font-label">The Collection</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mt-2 leading-tight">Mastering Every Entrance</h2>
            </div>
            <p className="text-on-surface-variant max-w-md text-lg italic">"A door is more than an entry point; it's the first handshake of your home's personality."</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Entry Doors */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
                <img
                  alt="Modern grand entry door"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKL4Y6bu_TUTPjwEXSsI0SCiFQuV-zTDlTq2hPd49ttCxY6Z6EIXRbXpEMhVTmRyRvLPQeWcXYstLjBzTbw9iM4fu1sjJSLaA9YHt4YhmLD_sJ_29ab0ChS0rO-PbZtIBj1n1w6xaL5nQ44yo9gnGzy8hVshnvKa_-OFhpudkvbrKW3xEkf94PWCoL-z8_KE-5PM9ggtFEWlpxXXXp-lHR_YgdAQ923WVSiJcu8RIh2Y5499h4y_cNctUe8Sugaepa23QvHdrJJ1E"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-on-surface text-sm font-medium">Custom hardware, smart-lock integration, and reinforced steel cores.</p>
                </div>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-2">Grand Entry Doors</h3>
              <p className="text-on-surface-variant">Make a lasting first impression with architectural statement pieces designed for longevity.</p>
            </div>
            {/* Patio Doors */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low mb-6">
                <img
                  alt="Sleek sliding glass doors"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkWd7HBSAECze4GU6iWYoz4pkEz1qL7qHfMrN_EYNfAvixP4o93l2ZelShl75wZ_VTepfW84KMymnh5Qxpl9hjxeBrJbTvw2LUrUPrtmj0bqH_O2zToZmNnbiAGFyNt6Azoln7zBBmTyXv44Sctqw7zByTBI3yWz0Qzt-vvohLn8sWajl6SlMT8nMGi5fGFtgnPeZNOfogXaONVqmTBkQNvwZYuq_MBuHMOzsjNm2HgPRI6s9pqOHR01gEOIHvLd6S-4ywc4eYCxI"
                />
                <div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-on-surface text-sm font-medium">Ultra-slim frames with high-performance thermal breaks and panoramic views.</p>
                </div>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-2">Panoramic Patio Doors</h3>
              <p className="text-on-surface-variant">Dissolve the boundaries between your interior living space and the natural beauty of the outdoors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence Section */}
      <section className="py-32 bg-surface-container-low overflow-hidden">
        <div className="w-full mx-auto px-8 lg:px-16 2xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-8 uppercase">The <span className="text-[#fcb900]">Adler</span> Standard</h2>
            <p className="text-xl text-secondary leading-relaxed">The Adler Standard means never compromising on your home's safety or style. Every Adler door is meticulously engineered as a multi-layered system to effortlessly withstand time, harsh weather, and intruders. Experience unmatched durability and ultimate peace of mind. Contact us today for a quote!</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Security Card */}
            <div className="group p-6 lg:p-12 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 text-left flex flex-col">
              <div className="w-20 h-20 bg-[#fcb900]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#fcb900]/20 transition-colors">
                <span className="material-symbols-outlined text-[#fcb900] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">shield</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Secure Your Home with Premium Door Installation</h3>
              <p className="text-secondary leading-relaxed text-lg">Your front door is the centerpiece of your home's exterior and your first line of defense against the elements and intruders. Upgrading to a premium residential door instantly elevates your curb appeal while providing unmatched security and energy efficiency. Whether you need a stunning entry door or a smooth-gliding patio door, our expert installation ensures a perfect, draft-free fit every single time. Stop struggling with sticking hinges, drafts, and outdated designs that drag down your property value. Please contact our team today for a free consultation and let us transform your entryway!</p>
            </div>

            {/* Insulation Card */}
            <div className="group p-6 lg:p-12 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 text-left flex flex-col">
              <div className="w-20 h-20 bg-[#fcb900]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#fcb900]/20 transition-colors">
                <span className="material-symbols-outlined text-[#fcb900] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">thermostat</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Add Timeless Elegance with Custom Wood Doors</h3>
              <p className="text-secondary leading-relaxed text-lg">Nothing compares to the natural warmth, rich texture, and historical charm of a beautifully crafted wooden door. Designed for homeowners who refuse to compromise on aesthetics, our premium wood doors offer incredible architectural detail and endless customization options to match your exact style. A solid wood entryway not only creates a breathtaking first impression but also provides excellent durability and natural insulation. Don't let a generic, uninspired door dull your home's unique character. Please contact our dedicated team today to explore all your options and request a custom quote!</p>
            </div>

            {/* Durability Card */}
            <div className="group p-6 lg:p-12 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 text-left flex flex-col">
              <div className="w-20 h-20 bg-[#fcb900]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#fcb900]/20 transition-colors">
                <span className="material-symbols-outlined text-[#fcb900] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">diamond</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Enjoy Maximum Durability with Fiberglass Doors</h3>
              <p className="text-secondary leading-relaxed text-lg">If you are looking for the ultimate combination of high-end aesthetics, unwavering durability, and zero-maintenance convenience, our fiberglass doors are the perfect solution. Engineered to mimic the stunning appearance of real wood grain, fiberglass will never warp, rot, dent, or rust, no matter how harsh the elements get. They also offer superior energy efficiency, keeping your interior climate perfectly balanced and your utility bills remarkably low. Stop worrying about constant upkeep and repainting. Please contact our experts today to schedule your free consultation and upgrade your house!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Estimate Form Section */}
      <section className="py-16 lg:py-24 bg-white px-8" id="estimate">
        <div className="max-w-7xl mx-auto bg-on-surface text-white rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-6 md:p-6 lg:p-12 lg:p-20 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-6 leading-tight">Ready to transform your entrance?</h2>
            <p className="text-zinc-400 text-lg mb-8">Schedule a free design consultation. Our specialists will help you select the perfect materials, security features, and finishes for your home.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#fcb900]" aria-hidden="true">verified</span>
                <span>Expert on-site measurements</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#fcb900]" aria-hidden="true">palette</span>
                <span>Custom finish and hardware matching</span>
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
