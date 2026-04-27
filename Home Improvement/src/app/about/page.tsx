export default function About() {
  return (
    <>
      {/* Hero Section: Editorial Style */}
      <section className="relative px-8 py-16 lg:py-24 md:py-32 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-primary border-l-2 border-primary">Legacy of Craftsmanship</span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-[0.9] text-on-surface mb-8">
              Crafting Excellence <br className="hidden md:block"/>
              <span className="text-[#fcb900]">Since 2019</span>
            </h1>
            <p className="text-xl text-secondary max-w-xl leading-relaxed">
              For seven years, Adler Remodeling has been the trusted partner for premium home improvement solutions across the region, blending architectural precision with unmatched security, durability, and energy efficiency.
            </p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-outline-variant/20">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT2SgL03sC-gh17NCb7lS_I-d965gzfrVx56jZSYFkrhgH8h93LztpHR-CUSO4fZoj6TtqDYAZfDg3D26oUCjjcerSPS_8YLnOdKUtIG6PnR43pvS_bFQT6ABGPLloC8kpT-vgNI-ycs4dbMAN6DkS29A-It-3qVFJm5T5uUATp3LbyGwZ3oRaHzOXhjwMm2LTjnbKjSjZadKUWRQU7VTvwAS9WjCcNAGmsGWAicDUmRKViz9yvKQg294UmJqhM0k-WK4MvLJb2ko"
                alt="Modern architectural home interior with sunlight streaming through large windows"
              />
            </div>
            {/* Overlapping Floating Element */}
            <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-xl shadow-xl max-w-xs hidden md:block border border-outline-variant/20 bg-white/80 backdrop-blur-md">
              <div className="flex items-center gap-4 mb-4 text-primary">
                <span className="material-symbols-outlined text-4xl" aria-hidden="true">verified</span>
                <span className="font-headline font-bold text-lg">Fully Licensed &amp; Insured</span>
              </div>
              <p className="text-sm text-secondary">Peace of mind comes standard with every nail driven and every board cut.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Commitment Section */}
      <section className="bg-surface-container-low py-16 lg:py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight mb-8">The Adler Commitment</h2>
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              We don't just upgrade your house—we secure and elevate your home. Our journey began with a single vision to provide homeowners with a level of transparency and technical skill that was missing in the industry.
            </p>
            <p className="text-lg text-secondary mb-10 leading-relaxed">
              Every roofing installation, HVAC upgrade, and plumbing overhaul is approached with the same architectural rigor. We treat your home as a sanctuary, ensuring minimal disruption, maximum quality, and lasting comfort.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-headline font-extrabold text-primary mb-2">7+</div>
                <div className="text-sm font-bold uppercase tracking-widest text-secondary">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-headline font-extrabold text-primary mb-2">4k+</div>
                <div className="text-sm font-bold uppercase tracking-widest text-secondary">Projects Completed</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              className="rounded-lg shadow-md mt-12 h-64 w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrrOhzugrNyKqtmLzhLZxhkD6TLDD4MMlpo5lZ25ypi065m4XcYtRXhUjfQ6uAmZq3LwLOq4lM6B0BbcoRh1IIxERBBanO4nu6WRx-9wPwaNEqveM5bpdH-ihqekkPj5aTQ13DL55K0NWvZaY_vYL8yNRqVwHQMfRAAiv6mx7mpK0r27diTMO18AzeBDnbFf-MYuFZZEyw6sLsGfQKSae7FmzSdgxGvo_6QCJyfiSSj6p2VXqblEuHshzNhZMANJVaGqebSapJO0M"
              alt="Close up of a carpenter measuring a high quality wooden frame"
            />
            <img
              className="rounded-lg shadow-md h-64 w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsHcOmW3TK1qTAVuSkLt6hynksm7RyxkA6G7lc20bjo6W9Q9TXxQmasE_F0vq79eR92Mue9dDXilg72r0stp7jR7iITbOwvKLdhwUFlBRyNTY6s8zC2tT38xnflplfbVewF6XIzy2TODGwt_XuZFPKX1Ym5c1X1HlEeBdknU-4s8RIC-V4W-1rp5rfaRhmCeFnn7ZY4Dq2uSP5V1z7VtBx7n12vJK8EqcDOKEFVfPzslYjG27-rb31n2aw2S0MMalaaorHoK-eVdY"
              alt="Interior designer reviewing blueprints"
            />
          </div>
        </div>
      </section>

      {/* The Adler Way: Process Bento Grid */}
      <section className="py-16 lg:py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Our Process</span>
          <h2 className="text-5xl font-headline font-bold mt-4">The Adler Way</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1: 2-col wide */}
          <div className="md:col-span-2 bg-white p-6 md:p-10 rounded-2xl border border-outline-variant/30 flex flex-col justify-between group hover:border-primary/50 hover:shadow-md transition-all">
            <div>
              <span className="material-symbols-outlined text-primary text-5xl mb-6" aria-hidden="true">home_health</span>
              <h3 className="text-3xl font-headline font-bold mb-4">Phase 01: In-Home Consultation</h3>
              <p className="text-secondary text-lg leading-relaxed max-w-xl">We meet at your residence to discuss your vision, evaluate your existing systems, and provide expert recommendations tailored to your budget.</p>
            </div>
            <div className="mt-8 pt-8 border-t border-surface-container-high flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm font-bold uppercase text-primary">Discover Possibilities</span>
              <span className="material-symbols-outlined text-primary" aria-hidden="true">arrow_forward</span>
            </div>
          </div>

          {/* Step 2: 1-col */}
          <div className="bg-surface-container-highest p-6 md:p-10 rounded-2xl flex flex-col justify-center group hover:shadow-md transition-all border border-transparent hover:border-outline-variant/30">
            <span className="material-symbols-outlined text-primary text-5xl mb-6 flex-shrink-0" aria-hidden="true">square_foot</span>
            <h3 className="text-2xl font-headline font-bold mb-4">Phase 02: Precise Measurements</h3>
            <p className="text-secondary text-sm leading-relaxed">Our technicians use laser-precision equipment to ensure your new units fit perfectly, eliminating potential air leaks or structural issues.</p>
          </div>

          {/* Step 3: 1-col */}
          <div className="bg-primary-container p-6 md:p-10 rounded-2xl flex flex-col justify-center text-on-primary-container group hover:shadow-md transition-all">
            <span className="material-symbols-outlined text-5xl mb-6 flex-shrink-0" aria-hidden="true">construction</span>
            <h3 className="text-2xl font-headline font-bold mb-4">Phase 03: Expert Installation</h3>
            <p className="text-on-primary-container/80 text-sm leading-relaxed">Our certified crews handle the heavy lifting with surgical precision, maintaining a clean workspace and respecting your home environment.</p>
          </div>

          {/* Step 4: 2-col wide */}
          <div className="md:col-span-2 bg-on-surface p-6 md:p-10 rounded-2xl flex flex-col justify-between text-white group hover:shadow-xl transition-all">
            <div>
              <span className="material-symbols-outlined text-[#fcb900] text-5xl mb-6" aria-hidden="true">verified_user</span>
              <h3 className="text-3xl font-headline font-bold mb-4">Phase 04: Customer Care</h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-xl">We walk you through the final results, explain maintenance, and back our work with an industry-leading satisfaction guarantee.</p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 flex justify-between items-center">
              <span className="text-sm font-bold uppercase text-[#fcb900] tracking-widest">The Adler Standard</span>
              <span className="material-symbols-outlined text-[#fcb900]" aria-hidden="true">done_all</span>
            </div>
          </div>

          {/* Image */}
          <div className="md:col-span-3 relative rounded-2xl overflow-hidden min-h-[400px] mt-6">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMzO-vI2ELnugN7gmKpeqd7eDXVP7zy3bElzl8563DJDJXDGcY-4CDKqk1SXqPbHTPbOzfY6bqgoaEQsxeIcnSGoo5AtnCzbMMP4WW5pqMW0RHmC5h_Ms5k9gB8ZjTDj1mPV4PJRcShhB1MmGkqiEHZupHia5iZMVAzr1Hlev3o-pUa9APEAXQyOZY47iBuULyRrDDdU5h_-Eb_hiBp2c-IeVefsJ-Cge304eswIoygDnaJ9kVbBK8d6iHUmSazCbxMYrCXX1f-Fw"
              alt="Extreme close up of a high quality finished wood joint"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center p-6 md:p-10">
              <p className="text-white font-headline text-3xl md:text-5xl font-bold italic text-center max-w-4xl drop-shadow-lg">"Quality is never an accident; it is always the result of intelligent effort."</p>
            </div>
          </div>
        </div>
      </section>



      {/* Community & Trust Badges */}
      <section className="py-16 lg:py-24 px-8 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-headline font-bold mb-6">Why Choose Adler?</h2>
            <p className="text-lg text-white/80 mb-8">
              We fuse architectural precision with flawless execution. Our specialized teams deliver premium home improvement solutions designed for peak energy efficiency, robust security, and timeless aesthetics. When you choose Adler, you are investing in unquestionable quality and lasting peace of mind.
            </p>
            <div className="mt-12 space-y-6">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center justify-center shrink-0 shadow-lg group-hover:bg-white/20 group-hover:scale-105 transition-all">
                  <span className="material-symbols-outlined text-[#fcb900] text-3xl" aria-hidden="true">engineering</span>
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold text-white mb-1">Master Installers</h4>
                  <p className="text-white/70 leading-relaxed text-sm">Our in-house team of certified specialists guarantees a flawless, weather-tight installation on every project.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center justify-center shrink-0 shadow-lg group-hover:bg-white/20 group-hover:scale-105 transition-all">
                  <span className="material-symbols-outlined text-[#fcb900] text-3xl" aria-hidden="true">energy_savings_leaf</span>
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold text-white mb-1">Energy Efficient</h4>
                  <p className="text-white/70 leading-relaxed text-sm">Experience ultimate climate control with advanced materials designed to reduce your monthly utility footprint.</p>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex flex-col items-center justify-center shrink-0 shadow-lg group-hover:bg-white/20 group-hover:scale-105 transition-all">
                  <span className="material-symbols-outlined text-[#fcb900] text-3xl" aria-hidden="true">lock</span>
                </div>
                <div>
                  <h4 className="text-xl font-headline font-bold text-white mb-1">Maximum Security</h4>
                  <p className="text-white/70 leading-relaxed text-sm">Protect what matters most with impenetrable roofing systems, secure entryways, and flawlessly engineered plumbing.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white text-on-surface rounded-[2rem] p-6 md:p-10 shadow-2xl relative overflow-hidden border border-outline-variant/10">
            {/* Subtle background glow for the card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            
            <h3 className="text-3xl font-headline font-extrabold mb-8 text-center text-primary">Industry Recognition</h3>
            
            <div className="space-y-4 relative z-10 flex flex-col">
              
              {/* Badge 1 */}
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm hover:border-primary/30 transition-all">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">workspace_premium</span>
                </div>
                <div>
                  <h4 className="font-bold text-base text-on-surface">2023 Renovation Of The Year</h4>
                  <p className="text-xs text-secondary mt-0.5">Awarded for architectural excellence.</p>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm hover:border-primary/30 transition-all">
                <div className="w-14 h-14 rounded-full bg-[#fcb900]/10 flex items-center justify-center shrink-0 text-[#fcb900]">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">star</span>
                </div>
                <div>
                  <h4 className="font-bold text-base text-on-surface">5-Star Elite Pro Rated</h4>
                  <p className="text-xs text-secondary mt-0.5">Based on 200+ verified customer reviews.</p>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm hover:border-primary/30 transition-all">
                <div className="w-14 h-14 flex items-center justify-center shrink-0">
                  <img src="/social/1.png" alt="BBB Rating A+" className="w-10 h-10 object-contain saturate-0 grayscale opacity-80" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-on-surface">A+ BBB Accredited</h4>
                  <p className="text-xs text-secondary mt-0.5">Decades of unbroken trust and reliability.</p>
                </div>
              </div>
              
              {/* Badge 4 */}
              <div className="flex items-center gap-5 p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 shadow-sm hover:border-primary/30 transition-all">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">shield</span>
                </div>
                <div>
                  <h4 className="font-bold text-base text-on-surface">Fully Bonded &amp; Insured</h4>
                  <p className="text-xs text-secondary mt-0.5">Complete protection for your property.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
