import React from 'react';

export const metadata = {
  title: 'Terms of Service | Adler Remodeling',
  description: 'Terms and Conditions regarding the use of Adler Remodeling services and website.',
};

export default function TermsOfService() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-4xl mx-auto min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-black text-on-surface tracking-tighter mb-4">Terms of Service</h1>
        <p className="text-secondary text-lg">Last Updated: March 2026</p>
      </div>
      <div className="space-y-8 text-secondary leading-relaxed">
        <section>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
        </section>
        
        <section>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">2. Services Provided</h2>
          <p>Adler Remodeling provides premium window and door replacement services. All estimates, timelines, and service descriptions discussed through the website are general outlines and subject to formal contracts following an in-person consultation.</p>
        </section>

        <section>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">3. Communication and TCPA Compliance</h2>
          <p>By submitting your contact information (such as via our free estimate request forms), you authorize Adler Remodeling to communicate with you via telephone, SMS text message, and email regarding your inquiry. Msg & data rates may apply. You may opt-out of these communications at any time. Consent is not a condition of purchase.</p>
        </section>

        <section>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">4. Intellectual Property</h2>
          <p>The Site and its original content, features, and functionality are owned by Adler Remodeling and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        </section>

        <section>
          <h2 className="text-2xl font-headline font-bold text-on-surface mb-4">5. Limitation of Liability</h2>
          <p>Adler Remodeling shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products unconditionally outside of explicit service warranties.</p>
        </section>
      </div>
    </main>
  );
}
