import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata = {
    title: "Los Angeles Psychiatric VA FAQ | Virtual Minds",
    description: "Find answers about our Los Angeles-based virtual assistants for California psychiatric practices. Compliance, pricing, and onboarding questions.",
};

export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-trust-navy">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "Do you provide a BAA (Business Associate Agreement)?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, we sign a comprehensive Business Associate Agreement (BAA) with every client to ensure full HIPAA compliance and liability coverage."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How is data encryption handled?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "All data is encrypted using AES-256 standards both at rest and in transit. Our VAs only access your systems through secure, authenticated portals."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What HIPAA training do VAs undergo?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Every Virtual Assistant completes a mandatory HIPAA certification program before being assigned to a client, including regular refresher courses."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How do you bill for VA services?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We offer transparent monthly retainer plans based on the number of hours required. Billing is processed automatically via ACH or credit card."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are your VAs familiar with California's telehealth laws?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. All our VAs are trained on California's Telehealth Act and understand telehealth parity requirements, reimbursement rules, and cross-state licensing considerations."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you support California's Mental Health Parity Act compliance?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. We help practices navigate MHPA requirements for insurance parity, documentation standards, and appeal processes for mental health services."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How do you handle California's 5150 consent requirements?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Our VAs are trained in California's specific consent procedures for minors, including dual consent requirements and documentation standards for psychiatric treatment."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you provide support for California's involuntary hold procedures?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Our VAs are trained in California's specific involuntary hold documentation, time-sensitive processing requirements, and patient notification procedures."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Do you support California's Medi-Cal billing?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, our VAs are experienced with Medi-Cal documentation requirements, superbills, credit card processing, and insurance company contact assistance."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Are your VAs familiar with California's scope of practice laws?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. We ensure compliance with California's specific scope of practice laws for psychiatric-mental health nurse practitioners and physician assistants."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What training do VAs receive for California's mental health documentation standards?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Our VAs receive specialized training in California's mental health documentation standards, including progress note formatting, treatment planning documentation, and compliance with state-specific reporting requirements."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How do you handle California's 5150 documentation requirements?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We assist with California's 5150 documentation requirements, including initial assessments, treatment plans, progress notes, and discharge summaries that meet state mental health documentation standards."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How quickly can I start with my VA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Typically, our matching process takes 48-72 hours. Once you approve your candidate, they can begin within 24 hours."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Can they integrate with my existing EHR?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Absolutely. Our VAs are trained on major psychiatric EHR platforms like CharmHealth, SimplePractice, and DrChrono."
                                }
                            }
                        ]
                    })
                }}
            />
            <Navbar />
            <main className="max-w-[1200px] mx-auto px-6 py-12 flex-grow">
                {/* Hero Title */}
                <div className="text-center mb-12">
                    <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-trust-navy">FAQ Library</h1>
                    <p className="text-calm-sage max-w-2xl mx-auto">
                        Find answers to common questions regarding our HIPAA-compliant Los Angeles-based virtual assistant services tailored for California psychiatric practices.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-16">
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-calm-sage">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <input
                            className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-base text-trust-navy placeholder:text-slate-400"
                            placeholder="Search compliance, pricing, or onboarding..."
                            type="text"
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar with HIPAA Seal & Navigation */}
                    <aside className="w-full lg:w-1/4 space-y-8 h-fit lg:sticky lg:top-24">
                        {/* HIPAA Seal Element */}
                        <div className="bg-white p-6 rounded-xl border-t-4 border-primary shadow-sm flex flex-col items-center text-center">
                            <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                                <span className="material-symbols-outlined text-4xl">verified_user</span>
                            </div>
                            <h3 className="font-bold text-lg mb-1 text-trust-navy">HIPAA Compliant</h3>
                            <p className="text-xs text-calm-sage uppercase tracking-widest mb-4">Secure & Encrypted</p>
                            <div className="text-[10px] text-calm-sage border border-slate-200 rounded p-2">
                                Verification ID: PVA-88291-SEC
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <nav className="hidden lg:block space-y-2">
                            <p className="text-xs font-bold text-primary uppercase tracking-wider px-4 mb-2">Sections</p>
                            <a href="#hipaa" className="block px-4 py-2 hover:bg-primary/5 rounded transition-colors font-medium text-trust-navy">HIPAA Compliance</a>
                            <a href="#pricing" className="block px-4 py-2 hover:bg-primary/5 rounded transition-colors font-medium text-calm-sage hover:text-trust-navy">Pricing & Plans</a>
                            <a href="#onboarding" className="block px-4 py-2 hover:bg-primary/5 rounded transition-colors font-medium text-calm-sage hover:text-trust-navy">Onboarding Speed</a>
                        </nav>
                    </aside>

                    {/* Main FAQ Content Area */}
                    <section className="flex-1 space-y-12">
                        {/* HIPAA Group */}
                        <div id="hipaa" className="scroll-mt-24">
                            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2 text-trust-navy">
                                <span className="material-symbols-outlined text-primary">security</span>
                                HIPAA Compliance
                            </h2>
                            <div className="space-y-3">
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden" open>
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">Do you provide a BAA (Business Associate Agreement)?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        Yes, we sign a comprehensive Business Associate Agreement (BAA) with every client to ensure full HIPAA compliance and liability coverage. This document outlines our commitment to protecting Protected Health Information (PHI) in accordance with federal regulations.
                                    </div>
                                </details>
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">How is data encryption handled?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        All data is encrypted using AES-256 standards both at rest and in transit. Our VAs only access your systems through secure, authenticated portals and are prohibited from storing any PHI on local devices.
                                    </div>
                                </details>
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">What HIPAA training do VAs undergo?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        Every Virtual Assistant completes a mandatory HIPAA certification program before being assigned to a client. This includes regular refresher courses and privacy audits to ensure ongoing compliance.
                                    </div>
                                </details>
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">Are your VAs familiar with California's telehealth laws?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        Yes. All our VAs are trained on California's Telehealth Act and understand telehealth parity requirements, reimbursement rules, and cross-state licensing considerations.
                                    </div>
                                </details>
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">Do you support California's Mental Health Parity Act compliance?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        Absolutely. We help practices navigate MHPA requirements for insurance parity, documentation standards, and appeal processes for mental health services.
                                    </div>
                                </details>
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">How do you handle California's 5150 consent requirements?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        Our VAs are trained in California's specific consent procedures for minors, including dual consent requirements and documentation standards for psychiatric treatment.
                                    </div>
                                </details>
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">Do you support California's Medi-Cal billing?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        Yes, our VAs are experienced with Medi-Cal documentation requirements, superbills, credit card processing, and insurance company contact assistance.
                                    </div>
                                </details>
                            </div>
                        </div>

                        {/* Pricing Group */}
                        <div id="pricing" className="scroll-mt-24">
                            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2 text-trust-navy">
                                <span className="material-symbols-outlined text-primary">payments</span>
                                Pricing & Billing
                            </h2>
                            <div className="space-y-3">
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">How do you bill for VA services?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        We offer transparent monthly retainer plans based on the number of hours required. Billing is processed automatically at the start of each month via ACH or credit card.
                                    </div>
                                </details>
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">Are there any setup or hidden fees?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        No. We believe in flat-rate pricing. There are no setup fees, recruitment fees, or termination penalties. What you see on our pricing page is what you pay.
                                    </div>
                                </details>
                            </div>
                        </div>

                        {/* Onboarding Group */}
                        <div id="onboarding" className="scroll-mt-24">
                            <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2 text-trust-navy">
                                <span className="material-symbols-outlined text-primary">bolt</span>
                                Onboarding Speed
                            </h2>
                            <div className="space-y-3">
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">Are your VAs familiar with California's scope of practice laws?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        Yes. We ensure compliance with California's specific scope of practice laws for psychiatric-mental health nurse practitioners and physician assistants.
                                    </div>
                                </details>
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">What training do VAs receive for California's mental health documentation standards?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        Our VAs receive specialized training in California's mental health documentation standards, including progress note formatting, treatment planning documentation, and compliance with state-specific reporting requirements.
                                    </div>
                                </details>
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">How do you handle California's involuntary hold procedures?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        Yes. Our VAs are trained in California's specific involuntary hold documentation, time-sensitive processing requirements, and patient notification procedures.
                                    </div>
                                </details>
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">How do you handle California's 5150 documentation requirements?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        We assist with California's 5150 documentation requirements, including initial assessments, treatment plans, progress notes, and discharge summaries that meet state mental health documentation standards.
                                    </div>
                                </details>
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">How quickly can I start with my VA?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        Typically, our matching process takes 48-72 hours. Once you approve your candidate, they can begin within 24 hours. Most practices are fully integrated within 5 business days.
                                    </div>
                                </details>
                                <details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
                                    <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 transition-colors">
                                        <p className="text-trust-navy font-semibold">Can they integrate with my existing EHR?</p>
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <div className="px-5 pb-5 text-calm-sage text-sm leading-relaxed border-t border-slate-100 mt-2 pt-4">
                                        Absolutely. Our VAs are trained on major psychiatric EHR platforms like CharmHealth, SimplePractice, and AdvancedMD. We handle technical permission setup during onboarding phase.
                                    </div>
                                </details>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Call to Action */}
                <div className="mt-24 bg-primary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
                    <h3 className="font-display text-3xl font-bold mb-4 text-trust-navy">Still have questions?</h3>
                    <p className="mb-8 text-calm-sage max-w-xl mx-auto">
                        Our team of compliance experts is available to discuss your practice's specific needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/book-consultation" className="bg-primary hover:bg-[#c19e2e] text-white px-8 py-3 rounded-lg font-bold transition-all shadow-sm">
                            Schedule a Call
                        </Link>
                        <Link href="/contact" className="bg-white border border-slate-200 px-8 py-3 rounded-lg font-bold hover:bg-slate-50 text-trust-navy transition-all">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
