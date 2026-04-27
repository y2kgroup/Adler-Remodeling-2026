import WindowTypesCarousel from '@/components/WindowTypesCarousel';
import ContactForm from "@/components/ContactForm";
import WindowsHeroButtons from "@/components/WindowsHeroButtons";

export default function Windows() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[819px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Modern window view"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrmGCN6olce279b3mAC2Ie8rP9zbgJkZIUvoBn0Dn7AWtkeZZNx8ILsusAFbXhsi2faxmc_6X0Uv4x_L_JdPBTta4klrapDqQcoZoqcOLO7KfUSJ88sAsL3Um07m_hLQYpozcR7dvobH9_BVCqwzGQbu-kyCnT0cJgB5timX7m7f_bHI0rnLr6PvDs4plsiwH7i3tdIDoM9QK-PYbnnRjlKHGqRmDKd2ZIsO7hvt7ah-o56Lq6VXbrqTfW5h_PebNijOOWqnboS4c"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/90 via-surface-container-lowest/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-label text-sm font-bold tracking-widest uppercase mb-6 rounded">Architectural Excellence</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-8 leading-[1.1]">
              Energy efficient <br /> <span className="text-[#fcb900]">Windows</span> solution
            </h1>
            <p className="text-xl text-secondary max-w-lg mb-10 leading-relaxed">
              Precision engineered replacements that frame your world while keeping your home's climate exactly where it belongs.
            </p>
            <WindowsHeroButtons />
          </div>
        </div>
      </section>

      {/* Why Upgrade Section */}
      <section className="py-32 bg-surface">
        <div className="w-full mx-auto px-8 lg:px-16 2xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-end mb-24 max-w-7xl mx-auto">
            <div className="md:col-span-7">
              <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-8">Why Upgrade Your <span className="text-[#fcb900]">Windows</span>?</h2>
              <p className="text-xl text-secondary leading-relaxed">Old windows are the primary source of thermal loss in modern homes. Our advanced glass technologies transform your living space into a sanctuary of efficiency and quiet.</p>
            </div>
            <div className="md:col-span-5 flex justify-end">
              <div className="p-8 bg-surface-container-low rounded-xl border border-outline-variant/15 flex items-center gap-6">
                <span className="material-symbols-outlined text-5xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">eco</span>
                <div>
                  <p className="text-2xl font-headline font-bold">35% Average</p>
                  <p className="text-secondary">Reduction in energy costs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Feature Card 1 */}
            <div className="group p-6 lg:p-12 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 text-left">
              <div className="w-20 h-20 bg-[#fcb900]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#fcb900]/20 transition-colors">
                <span className="material-symbols-outlined text-[#fcb900] text-4xl" aria-hidden="true">home</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Transform Your Home with Premium Replacement Windows</h3>
              <p className="text-secondary leading-relaxed text-lg">Upgrading your home's windows is one of the most impactful investments you can make for your property's value, comfort, and curb appeal. Our premium replacement windows not only breathe new life into your exterior but also dramatically reduce your monthly energy bills by keeping your home perfectly insulated year round. Whether you want to modernize your aesthetic or restore historical charm, we provide tailor made solutions to fit your exact vision. Stop letting drafts hold your home back. Contact our expert team today to schedule your free, no obligation consultation and get started!</p>
            </div>
            {/* Feature Card 2 */}
            <div className="group p-6 lg:p-12 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 text-left">
              <div className="w-20 h-20 bg-[#fcb900]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#fcb900]/20 transition-colors">
                <span className="material-symbols-outlined text-[#fcb900] text-4xl" aria-hidden="true">light_mode</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Elevate Every Room with Beautiful, Natural Light</h3>
              <p className="text-secondary leading-relaxed text-lg">Imagine your kitchen, living room, and hallways bathed in gorgeous, natural sunlight. The right window design completely changes how a space feels, making dark areas feel expansive, welcoming, and vibrant. We specialize in custom window installations designed to maximize your view and optimize the light flowing into your most cherished living spaces. From sleek picture windows to elegant sliders, our high quality products are built to perform and designed to inspire. Ready to brighten up your everyday life? Reach out to our dedicated team today and let us bring your vision into reality!</p>
            </div>
            {/* Feature Card 3 */}
            <div className="group p-6 lg:p-12 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 text-left">
              <div className="w-20 h-20 bg-[#fcb900]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#fcb900]/20 transition-colors">
                <span className="material-symbols-outlined text-[#fcb900] text-4xl" aria-hidden="true">shield_lock</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Upgrade Your Security and Maximize Energy Savings</h3>
              <p className="text-secondary leading-relaxed text-lg">Beyond stunning aesthetics, modern replacement windows provide an essential shield against unpredictable weather and outside noise. Our industry leading window solutions are engineered with advanced glass technology to deliver superior thermal performance, keeping you cool in the summer and cozy in the winter. Additionally, advanced locking mechanisms ensure your family's safety and give you absolute peace of mind. Don't settle for underperforming windows that cost you money every single month. Connect with us today to discover how easy and affordable your home upgrades can actually be!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Windows: Asymmetric Bento Grid */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <span className="font-label font-bold text-primary tracking-widest uppercase mb-4 block">Our Collection</span>
            <h2 className="text-5xl font-headline font-bold tracking-tight">Curated Styles for Every Architectural Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[900px]">
            {/* Large Feature: Double-Hung */}
            <div className="md:col-span-8 relative rounded-xl overflow-hidden group">
              <img
                alt="Double-hung window"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ-wl0AmW1q22egeO_QeN2LAO6_vGVyE6-Imm2WE9mR0Sl8XH5yEn1HbiRxB5tJyIBGT8oqKFUbspMw3S3_S7IV-J65RK4lA5SQZl1RFcwbcsZM6Rr7ve26SivesYsWArCZAcNQ0EbvV3lmId5B0TQv0nSXUWh7R2cIwt1kcV_1wJnYmC50fas6HwhdCPaHIMdmZY15aDu6IFaGIGI21hRTbEdiaREgNpPisGgarF8DNr_TlIdZtA3xOnj97pSsrdxvlFqTjzsrDA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-10 drop-shadow-md">
                <h3 className="text-4xl font-headline font-bold text-white mb-2 drop-shadow-lg">Double-hung</h3>
                <p className="text-white/90 max-w-md text-lg drop-shadow-lg">The timeless standard of American architecture. Featuring two vertically movable sashes for maximum ventilation control and tilt-in designs for easy cleaning from the inside. Ideal for traditional and craftsman aesthetics.</p>
              </div>
            </div>
            {/* Side: Casement */}
            <div className="md:col-span-4 relative rounded-xl overflow-hidden group">
              <img
                alt="Casement window"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbqsVwiRXcZLob5Z_O_ZSZWtEET_B8ZVnxjaQb0DUG6MeYWIcpYq66SlWogEOl1oxx6C6sHc22D3PmlWiTkKb06T2l0dlJk14B0dIJJ4gXgUym5wkDEmp6UPI5dOxkj05qT9mXtIvZ9M75PawdCjHA-L39Hvo3lxcI4FqbylCauL_hjO9m4niSiLSwrrRJJ0DDq-XJpu_7t6nv6nOIwJwFSBX-kjWhZAhOoyy3MhHPmvbtmUJGouRYAgKltpVYO8ns3UTNiYKzBmo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 drop-shadow-md">
                <h3 className="text-3xl font-headline font-bold text-white mb-2 drop-shadow-lg">Casement</h3>
                <p className="text-white/90 text-sm drop-shadow-lg">Hinged at the side and opening outward like a door with a simple crank. These provide completely unobstructed views, superior energy efficiency with compression seals, and catch passing breezes for full airflow.</p>
              </div>
            </div>
            {/* Bottom Left: Picture */}
            <div className="md:col-span-4 relative rounded-xl overflow-hidden group">
              <img
                alt="Picture window"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpu3rNYlj7NcXXPVmBCyo4xFnHSZGdelxNfe51G8u4TjAyNsvh8TAFjwJW9ItDBO-lGskOnvuMJNFjIeugO5gwg8HwH0qb7jjpdNRNtgWgpbAqMLBw7bx2kdUJQirsIBop3VsBtD_YUxVz4FmGchwPe_hQ13wpZbu5ETKTk1Gls0rmOtSw4EKQbfzk612AMBEogu0VV3TPSg-9JPDyB3EWEOZdj4YbU08zfh67LbaiutH6fCTbpmL7vQGb7i98YO_KdGy4zhRFaKk"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 drop-shadow-md">
                <h3 className="text-3xl font-headline font-bold text-white mb-2 drop-shadow-lg">Picture</h3>
                <p className="text-white/90 text-sm drop-shadow-lg">Expansive stationary glass installations designed to frame views like a living piece of art. Picture windows flood your home with natural sunlight while offering the absolute highest level of thermal insulation since they do not open.</p>
              </div>
            </div>
            {/* Bottom Right: Custom Shapes */}
            <div className="md:col-span-8 relative rounded-xl overflow-hidden group">
              <img
                alt="Specialty shape window"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIn7_n5-RKXN0p1Hjrwv_QnELeMy6TCAmo3jYwF19c_bLioVhnzLGXnSe70G2ilqgJ-ptmsV00ZU2Rd90UOPsGnpDzRp_2GSe2WiBEKMi9eNLRHyeSYN7J0NGdH8MzbVWAXP9fLpaq3Wg1ckPSRS-7y0IeEuFpT7jBblX0c-IwARRGrxQiPGvGHwIZ_CqneIu2skr6luwOlwSQ218t373zVmVxf8-eJpzDG32WT62hM-RennW0pAImOUNCkyS_N3PCRS-cp8jg1hQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-10 drop-shadow-md">
                <h3 className="text-4xl font-headline font-bold text-white mb-2 drop-shadow-lg">Specialty Shapes</h3>
                <p className="text-white/90 max-w-md text-lg drop-shadow-lg">Custom geometric and architectural designs—from half-circles and transoms to dramatic floor-to-ceiling trapezoids—that add unique character and dramatic focal points to your home's exterior facade and interior spaces.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Window Types Carousel */}
      <WindowTypesCarousel />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary"></div>
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left text-white max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-headline font-extrabold tracking-tighter mb-6">Ready to see the <br />difference?</h2>
            <p className="text-xl text-white/80 leading-relaxed">Schedule a complimentary in-home consultation. Our specialists will help you select the perfect energy-efficient solution for your space.</p>
          </div>
          <ContactForm title="Schedule Your Consultation" className="bg-white p-6 md:p-10 rounded-2xl shadow-xl w-full max-w-lg border border-outline-variant/20 text-on-surface" />
        </div>
      </section>
    </>
  );
}
