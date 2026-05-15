import SlidingDoorTypesCarousel from '@/components/SlidingDoorTypesCarousel';
import ContactForm from "@/components/ContactForm";
import SlidingDoorsHeroButtons from "@/components/SlidingDoorsHeroButtons";

export default function SlidingDoors() {
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
              Seamless Indoor-Outdoor <br /> <span className="text-[#fcb900]">Sliding Doors</span>
            </h1>
            <p className="text-xl text-secondary max-w-lg mb-10 leading-relaxed">
              Precision engineered sliding doors that frame your world, maximize natural light, and keep your home's climate perfectly regulated.
            </p>
            <SlidingDoorsHeroButtons />
          </div>
        </div>
      </section>

      {/* Why Upgrade Section */}
      <section className="py-32 bg-surface">
        <div className="w-full mx-auto px-8 lg:px-16 2xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-end mb-24 max-w-7xl mx-auto">
            <div className="md:col-span-7">
              <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-8">Why Upgrade Your <span className="text-[#fcb900]">Sliding Doors</span>?</h2>
              <p className="text-xl text-secondary leading-relaxed">Old sliding doors are often drafty, difficult to open, and compromise your home's security. Our advanced glass and track technologies transform your entryways into smooth, secure, and highly efficient architectural features.</p>
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
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Transform Your Home with Premium Sliding Doors</h3>
              <p className="text-secondary leading-relaxed text-lg">Upgrading your sliding doors is one of the most impactful investments you can make for your property's value, comfort, and functionality. Our premium sliding doors not only breathe new life into your living spaces but also dramatically reduce your monthly energy bills. Whether you want to modernize your aesthetic or completely open up a wall for indoor-outdoor living, we provide tailor made solutions to fit your exact vision.</p>
            </div>
            {/* Feature Card 2 */}
            <div className="group p-6 lg:p-12 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 text-left">
              <div className="w-20 h-20 bg-[#fcb900]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#fcb900]/20 transition-colors">
                <span className="material-symbols-outlined text-[#fcb900] text-4xl" aria-hidden="true">light_mode</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Effortless Operation and Expansive Views</h3>
              <p className="text-secondary leading-relaxed text-lg">Imagine your kitchen, living room, and patios seamlessly connected with gorgeous, natural sunlight. The right sliding door completely changes how a space feels, making areas feel expansive, welcoming, and vibrant. We specialize in custom door installations designed to maximize your view and optimize the light flowing into your most cherished living spaces. From smooth-gliding standard doors to dramatic multi-slide systems, our products are built to perform and designed to inspire.</p>
            </div>
            {/* Feature Card 3 */}
            <div className="group p-6 lg:p-12 bg-surface-container-lowest rounded-xl hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 text-left">
              <div className="w-20 h-20 bg-[#fcb900]/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#fcb900]/20 transition-colors">
                <span className="material-symbols-outlined text-[#fcb900] text-4xl" aria-hidden="true">shield_lock</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-6 leading-tight">Upgrade Your Security and Durability</h3>
              <p className="text-secondary leading-relaxed text-lg">Beyond stunning aesthetics, modern sliding doors provide an essential shield against unpredictable weather and outside noise. Our industry leading door solutions are engineered with advanced glass technology to deliver superior thermal performance, keeping you cool in the summer and cozy in the winter. Additionally, heavy-duty locking mechanisms ensure your family's safety and give you absolute peace of mind.</p>
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
            {/* Large Feature: Standard Sliding */}
            <div className="md:col-span-8 relative rounded-xl overflow-hidden group">
              <img
                alt="Standard 2-Panel Sliding Door"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2070&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-10 drop-shadow-md">
                <h3 className="text-4xl font-headline font-bold text-white mb-2 drop-shadow-lg">Standard 2-Panel</h3>
                <p className="text-white/90 max-w-md text-lg drop-shadow-lg">The classic, reliable choice for patios and decks. One fixed panel and one operable panel provide an excellent balance of ventilation, natural light, and space-saving efficiency.</p>
              </div>
            </div>
            {/* Side: French-Style Sliding */}
            <div className="md:col-span-4 relative rounded-xl overflow-hidden group">
              <img
                alt="French-Style Sliding Door"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 drop-shadow-md">
                <h3 className="text-3xl font-headline font-bold text-white mb-2 drop-shadow-lg">French-Style</h3>
                <p className="text-white/90 text-sm drop-shadow-lg">Combining the traditional elegance of French doors with the space-saving functionality of a slider. Featuring wider profiles and beautiful grid patterns.</p>
              </div>
            </div>
            {/* Bottom Left: Pocket Sliding */}
            <div className="md:col-span-4 relative rounded-xl overflow-hidden group">
              <img
                alt="Pocket Sliding Door"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1600607688969-a5bfcd64bd28?q=80&w=2070&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-8 drop-shadow-md">
                <h3 className="text-3xl font-headline font-bold text-white mb-2 drop-shadow-lg">Pocket Sliders</h3>
                <p className="text-white/90 text-sm drop-shadow-lg">The ultimate space maximizer. These doors glide completely into the adjacent wall, creating an entirely unobstructed, seamless opening to your outdoor living area.</p>
              </div>
            </div>
            {/* Bottom Right: Multi-Slide */}
            <div className="md:col-span-8 relative rounded-xl overflow-hidden group">
              <img
                alt="Multi-Slide Door"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-10 drop-shadow-md">
                <h3 className="text-4xl font-headline font-bold text-white mb-2 drop-shadow-lg">Multi-Slide Systems</h3>
                <p className="text-white/90 max-w-md text-lg drop-shadow-lg">Engineered for massive openings, these 3, 4, or 5-panel systems stack neatly on one side or part in the middle, completely transforming your living room into an open-air pavilion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Window Types Carousel */}
      <SlidingDoorTypesCarousel />

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
