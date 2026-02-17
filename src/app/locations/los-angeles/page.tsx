import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import PracticeLeaksCalculator from "@/components/tools/PracticeLeaksCalculator";
import TrackedLink from "@/components/ui/TrackedLink";

export const metadata: Metadata = {
    title: "Virtual Assistant for Psychiatrists in Los Angeles | Medical Admin & Billing",
    description: "Virtual assistant services for Los Angeles psychiatrists. HIPAA-compliant medical billing, patient intake, and EHR management. Save $65,000/year vs. in-office staff. Serving Beverly Hills & Santa Monica.",
};

export default function LosAngelesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />

            <main className="flex-grow">
                {/* EXECUTIVE STRATEGIC HERO */}
                <section className="relative pt-8 md:pt-16 pb-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:40px_40px]" />
                    </div>

                    <div className="relative z-10 max-w-[1400px] mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">

                            {/* Left Column (60%) */}
                            <div className="lg:w-[60%]">
                                <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">
                                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                    <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
                                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                    <span className="text-trust-navy">Los Angeles</span>
                                </nav>

                                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                    <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
                                    Direct Deployment: Los Angeles County
                                </div>

                                <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-6 leading-[0.95] tracking-tight">
                                    Virtual Receptionist & Admin Support <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                                        for Los Angeles Psychiatrists
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-8 max-w-2xl">
                                    Augment your practice with administrative intelligence—whether you operate in-office or via telehealth. We provide high-performance virtual staff ensuring boutique-level perception with remote-optimized economics.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <TrackedLink
                                        href="/book-consultation"
                                        ctaName="Audit Your Los Angeles Practice"
                                        source="location_la_hero"
                                        className="px-8 py-5 bg-trust-navy hover:bg-trust-navy/90 text-white font-bold text-lg rounded-2xl shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                                    >
                                        <span className="material-symbols-outlined">analytics</span>
                                        Audit Your Los Angeles Practice
                                    </TrackedLink>
                                </div>
                            </div>

                            {/* Right Column: Visual Intel (40%) */}
                            <div className="lg:w-[40%] group w-full">
                                <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/60 shadow-2xl aspect-[4/5] bg-white group-hover:border-primary/30 transition-colors">
                                    <Image
                                        src="/images/virtual-assistant-hero.png"
                                        alt="Los Angeles Psychiatric Virtual Assistant - Professional support managing practice workflows"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/30 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* THE COST CALCULATOR ARCHITECTURE */}
                <section className="py-32 bg-white border-t border-slate-100" id="calculator">
                    <div className="max-w-5xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs mb-6 block italic">Regional Economic Analysis</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8 italic leading-tight">Quantify the Administrative <br /> Drag in the L.A. Market.</h2>
                        </div>
                        <PracticeLeaksCalculator cityName="Los Angeles" />
                    </div>
                </section>

                {/* LOCATIONAL PROBLEM ARCHITECTURE */}
                <section className="py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div className="space-y-12">
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block italic">Metro Specificity</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy leading-tight italic">Engineered for the <br /> L.A. Clinician.</h2>
                                <div className="space-y-8">
                                    {[
                                        { icon: "commute", title: "Zero Commute Latency", desc: "405 gridlock and Metro delays don't affect our synchronized task force. Your practice operations start on time, every time." },
                                        { icon: "local_hospital", title: "Hospital Nexus", desc: "Native understanding of regional medical referral pathways and intake logic." },
                                        { icon: "policy", title: "California Privacy Guardrails", desc: "Full compliance with Californian patient data laws that exceed federal HIPAA baselines." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 items-start">
                                            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-primary shrink-0 shadow-sm">
                                                <span className="material-symbols-outlined">{item.icon}</span>
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-trust-navy mb-2">{item.title}</h4>
                                                <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-trust-navy rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform">
                                    <span className="material-symbols-outlined text-[120px]">map</span>
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-8 italic !text-white" style={{ color: 'white' }}>Serving the Entire <br /> Los Angeles Region</h3>
                                <div className="flex flex-wrap gap-2 mb-12">
                                    {[
                                        "Beverly Hills", "Santa Monica", "West Hollywood",
                                        "Downtown LA", "Pasadena", "Sherman Oaks",
                                        "Encino", "Brentwood", "Venice", "Malibu"
                                    ].map((hood) => (
                                        <span key={hood} className="px-3 py-1 bg-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-primary hover:bg-white/20 transition-colors">
                                            {hood}
                                        </span>
                                    ))}
                                </div>
                                <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 italic text-slate-300 text-sm">
                                    "We scaled our practice from 2 to 6 practitioners without increasing our physical office footprint in Sherman Oaks. Virtual Minds provided the administrative engine."
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE REGIONAL FAQ BLOCK */}
                <section className="py-32 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-serif font-bold text-trust-navy mb-6 italic">Regional Analysis & FAQ</h2>
                        </div>
                        <div className="space-y-6">
                            {[
                                { q: "Are your assistants synchronized with Pacific Time?", a: "Yes. Our task force operates on strict PST hours to ensure real-time coordination with your Los Angeles practice. No lag, no latency." },
                                { q: "Do you handle high-profile client privacy?", a: "Exclusively. We understand the specific privacy needs of Hollywood and Beverly Hills practitioners serving public figures and industry leaders." },
                                { q: "Can you coordinate with local LA pharmacies?", a: "Directly. From specialty compounding hubs in Beverly Hills to Valley-based chains, we bridge the gap between your EHR and the pharmacy." }
                            ].map((faq, i) => (
                                <details key={i} className="group bg-[#FAF8F3] rounded-[2rem] border border-slate-100 p-2 overflow-hidden">
                                    <summary className="flex items-center justify-between p-8 cursor-pointer font-bold text-trust-navy list-none">
                                        {faq.q}
                                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform text-primary">expand_more</span>
                                    </summary>
                                    <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed italic text-sm">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL STRATEGIC CTA */}
                <section className="bg-trust-navy py-32 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
                    </div>

                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic leading-tight !text-white">
                            Secure Your <br /> L.A. Perimeter.
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-display leading-relaxed">
                            Join the leading psychiatric practitioners in Los Angeles who have transitioned to the Virtual Minds operational standard.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="/book-consultation"
                                className="px-12 py-5 bg-primary text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-all hover:bg-primary-hover flex items-center justify-center gap-3"
                            >
                                <span className="material-symbols-outlined">calendar_today</span>
                                Schedule L.A. Audit
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
