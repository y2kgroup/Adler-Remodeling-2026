import React from 'react';

export const metadata = {
  title: 'Privacy Policy | Adler Remodeling',
  description: 'Privacy Policy and data collection guidelines for Adler Remodeling.',
};

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-4xl mx-auto min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-black text-on-surface tracking-tighter mb-4">Privacy Policy</h1>
        <p className="text-secondary text-lg">Last Updated: March 2026</p>
      </div>
      <div className="space-y-8 text-secondary leading-relaxed">
        <section>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">1. Introduction</h2>
          <p>At Adler Remodeling, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">2. Information We Collect</h2>
          <p className="mb-2">We may collect several types of information from and about users of our Website, including information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number.</li>
            <li>That is about you but individually does not identify you.</li>
            <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">3. Use of Your Information</h2>
          <p className="mb-2">We use information that we collect about you or that you provide to us, including any personal information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To present our Website and its contents to you.</li>
            <li>To provide you with information, products, or services that you request from us.</li>
            <li>To fulfill any other purpose for which you provide it.</li>
            <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">4. Data Security</h2>
          <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depends on you.</p>
        </section>

        <section>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">5. Contact Information</h2>
          <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:info@adlerremodeling.com" className="text-primary font-bold hover:underline">info@adlerremodeling.com</a> or 805-232-5080.</p>
        </section>
      </div>
    </main>
  );
}
