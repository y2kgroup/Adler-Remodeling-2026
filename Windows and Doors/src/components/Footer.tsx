import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 font-body text-sm tonal-shift">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 py-16 max-w-7xl mx-auto">
        <div className="space-y-6">
          <Link href="/" className="inline-block">
            <img src="/logo.svg" alt="Adler Remodeling Logo" className="h-16 md:h-24 w-auto drop-shadow-sm" />
          </Link>
          <p className="text-zinc-500 leading-relaxed">
            Crafting high-performance living spaces through expert window and door engineering since 1998.
          </p>

        </div>
        <div>
          <h5 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs font-headline">Contact Details</h5>
          <ul className="space-y-4 text-zinc-500">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-sm font-light shrink-0 mt-0.5" aria-hidden="true">location_on</span> 
              <span>30700 Russell Ranch Road, Suite 250, Office 210, Westlake Village, California</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-sm font-light shrink-0" aria-hidden="true">phone</span> 805-232-5080
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-sm font-light shrink-0" aria-hidden="true">mail</span> info@adlerremodeling.com
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-sm font-light shrink-0" aria-hidden="true">badge</span> Licence # 1051596
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs font-headline">Menu</h5>
          <ul className="space-y-4 text-zinc-500">
            <li>
              <Link className="hover:text-primary transition-colors" href="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/windows">Windows</Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/doors">Doors</Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link className="hover:text-primary transition-colors" href="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-bold text-on-surface mb-6 uppercase tracking-widest text-xs font-headline">Legal</h5>
          <Link className="text-zinc-500 hover:underline decoration-primary-container underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="/privacy">Privacy Policy</Link>
          <Link className="text-zinc-500 hover:underline decoration-primary-container underline-offset-4 opacity-80 hover:opacity-100 transition-opacity" href="/terms">Terms of Service</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 py-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-500">© {new Date().getFullYear()} Adler Remodeling. All rights reserved.</p>
        <div className="flex items-center gap-2 text-primary dark:text-primary-container font-bold">
          <span className="material-symbols-outlined" aria-hidden="true">energy_savings_leaf</span>
          Energy Star Certified Partner
        </div>
      </div>
    </footer>
  );
}
