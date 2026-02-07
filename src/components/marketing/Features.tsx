import React from 'react';
import Link from 'next/link';

export default function Features() {
    return (
        <section className="relative py-24 overflow-hidden bg-[#FAF8F3]">
            <div className="relative z-10 max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-5 py-2 text-trust-navy text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
                        <span className="material-symbols-outlined text-primary text-base">psychiatry</span>
                        Clinical Infrastructure
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-trust-navy mb-6 leading-tight">
                        Curated for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">Subspecialty Excellence.</span>
                    </h2>
                    <p className="text-slate-600 text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                        We don't just "answer phones." We are a clinical operations team fluent in the nuances of complex psychiatric care, from UCLA to Stanford.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Feature 1: Clinical Intake */}
                    <Link href="/services/patient-intake-and-followup" className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group block cursor-pointer">
                        <div className="w-16 h-16 rounded-2xl bg-[#FAF8F3] flex items-center justify-center text-[#D2691E] mb-8 group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-4xl">clinical_notes</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4">Subspecialty Intake</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Our team speaks the language of OCD, Eating Disorders, and Neuropsychiatry. We screen for acuity and fit before they ever reach your calendar.
                        </p>
                    </Link>

                    {/* Feature 2: Concierge Coordination */}
                    <Link href="/services/virtual-assistant" className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group block cursor-pointer">
                        <div className="w-16 h-16 rounded-2xl bg-[#FAF8F3] flex items-center justify-center text-[#B8860B] mb-8 group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-4xl">diamond</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4">Concierge Care</h3>
                        <p className="text-slate-600 leading-relaxed">
                            White-glove scheduling for high-net-worth patients in Beverly Hills and Pacific Heights. We manage waitlists and VIP coordination with discretion.
                        </p>
                    </Link>

                    {/* Feature 3: Complex Billing */}
                    <Link href="/services/billing-and-rcm" className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group block cursor-pointer">
                        <div className="w-16 h-16 rounded-2xl bg-[#FAF8F3] flex items-center justify-center text-[#D2691E] mb-8 group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-4xl">account_balance</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4">Revenue Cycle</h3>
                        <p className="text-slate-600 leading-relaxed">
                            From navigating Prior Authorizations for TMS/Spravato to managing Superbills and private pay collections. We fight for every dollar, insurance or cash.
                        </p>
                    </Link>

                    {/* Feature 4: Practice Launch */}
                    <Link href="/services/practice-start-up" className="bg-trust-navy rounded-[2.5rem] p-10 border border-trust-navy shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group relative overflow-hidden block cursor-pointer">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <span className="material-symbols-outlined text-[150px] text-white">rocket_launch</span>
                        </div>
                        <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
                            <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                        </div>
                        <h3 className="text-2xl font-serif font-bold !text-white mb-4 relative z-10">Fellowship to Founder</h3>
                        <p className="text-slate-300 leading-relaxed relative z-10">
                            Complete launch support for graduating fellows. Credentialing, EHR setup, and brand formation to get your private practice live in 30 days.
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
}
