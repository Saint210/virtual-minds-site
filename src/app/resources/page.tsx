import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

import specialties from "@/data/specialties.json";

export const metadata = {
    title: "California Psychiatric Practice Resource Hub | Virtual Minds",
    description: "Elite operational blueprints, HIPAA compliance guides, and practice scaling resources for California mental health professionals.",
};

export default function ResourcesHub() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Resources" }
                ]}
            />

            <main className="flex-grow">
                {/* Elite Hero Section with Social Proof */}
                <section className="relative pt-4 md:pt-6 pb-20 overflow-hidden bg-[#FAF8F3]">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className="max-w-4xl">

                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[11px]">The Operational Library</span>
                                <span className="w-12 h-[2px] bg-gradient-to-r from-[#D2691E] to-transparent"></span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-trust-navy leading-[1.1] mb-8">
                                Protocols for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Clinical Excellence</span>.
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-medium">
                                Our specialized guides and technical resources are built on <strong className="text-trust-navy">deep experience in California's mental health landscape</strong>. Reclaim your practice, <span className="text-[#D2691E] font-bold">one protocol at a time</span>.
                            </p>

                            {/* Social Proof Badges */}
                            <div className="flex flex-wrap items-center gap-6 mb-8">
                                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-sm">
                                    <span className="material-symbols-outlined text-primary">verified</span>
                                    <div className="text-sm">
                                        <p className="font-bold text-[#2A2A2A]">Trusted by CA Psychiatrists</p>
                                        <p className="text-slate-500 text-xs">Using These Protocols</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-slate-100 shadow-sm">
                                    <span className="material-symbols-outlined text-green-600">security</span>
                                    <div className="text-sm">
                                        <p className="font-bold text-[#2A2A2A]">100% HIPAA Compliant</p>
                                        <p className="text-slate-500 text-xs">California Privacy Standards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Psychiatrist's Specialty Matrix */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-20">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 mb-4">
                                        <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[11px]">Resource Hub</span>
                                        <span className="w-12 h-[2px] bg-gradient-to-r from-[#D2691E] to-transparent"></span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-trust-navy mb-4">
                                        The Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">Matrix</span>.
                                    </h2>
                                    <p className="text-base md:text-lg text-slate-600 max-w-2xl font-medium">
                                        <strong className="text-trust-navy">Specialized toolkits</strong> designed exclusively for the <span className="text-[#D2691E] font-bold">modern psychiatrist</span>.
                                    </p>
                                </div>
                                {/* Urgency Indicator */}
                                <div className="hidden lg:flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </span>
                                    <span className="text-sm font-bold text-red-800">Live Resources</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* 1. Medication Management Hub - HERO CARD */}
                            <Link href="/resources/blueprints/medication-management" className="group relative overflow-hidden rounded-[40px] bg-[#1A1A1A] border border-white/10 hover:border-[#D2691E]/40 transition-all shadow-2xl hover:shadow-[#D2691E]/10 lg:col-span-2">
                                <div className="aspect-[21/9] bg-cover bg-center transition-transform group-hover:scale-105 duration-700" style={{ backgroundImage: 'url("/images/medication-management-hero.png")' }}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]/50"></div>
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-end p-12 text-white z-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D2691E] drop-shadow-md">Elite Blueprint</span>
                                        <span className="bg-[#D2691E] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-serif font-bold italic mb-6 leading-tight !text-white drop-shadow-xl" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.9)' }}>
                                        Medication Management <br />
                                        & Refill Infrastructure
                                    </h3>
                                    <p className="text-slate-100 max-w-xl mb-8 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <strong className="text-white">Stop losing 8+ hours/week</strong> on pharmacy calls and refill chaos. Master the pharmacy liaison workflow with our automated refill system.
                                    </p>
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] group-hover:gap-5 transition-all text-white">
                                            Explore the Blueprint <span className="material-symbols-outlined text-sm font-bold bg-[#D2691E] p-1.5 rounded-full shadow-lg group-hover:rotate-45 transition-transform">arrow_forward</span>
                                        </div>
                                        {/* Engagement indicator */}
                                        <div className="flex items-center gap-2 text-slate-400 text-sm">
                                            <span className="material-symbols-outlined text-sm">visibility</span>
                                            <span>2.3k views</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            {/* 2. Revenue Optimization */}
                            <div className="group p-10 bg-[#FAF8F3] rounded-[40px] border-2 border-slate-200 hover:border-[#D2691E]/30 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-[#D2691E]/5 hover:-translate-y-2 min-h-[320px]">
                                <div>
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-14 h-14 bg-[#D2691E]/10 rounded-2xl flex items-center justify-center text-[#D2691E] border border-[#D2691E]/20 group-hover:bg-[#D2691E] group-hover:text-white transition-all">
                                            <span className="material-symbols-outlined text-3xl">payments</span>
                                        </div>
                                        <span className="bg-green-100 text-green-800 text-[10px] font-black px-3 py-1 rounded-full uppercase">ROI Focused</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4">Revenue Optimization</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                        <strong className="text-trust-navy">Capture $18K+ annually</strong> in missed billing opportunities. Optimize CPT coding for <span className="text-[#D2691E] font-bold">med-management + therapy add-ons</span> (99214 + 90833).
                                    </p>
                                    {/* Value indicator */}
                                    <div className="bg-white border border-green-100 rounded-xl p-3 mb-6">
                                        <p className="text-xs text-slate-500 mb-1">Avg. Revenue Increase</p>
                                        <p className="text-2xl font-black text-green-600">+23%</p>
                                    </div>
                                </div>
                                <Link href="/resources/blueprints/revenue-architecture" className="text-[#D2691E] font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Analyze Your ROI <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>

                            {/* 3. ADHD Stimulant Ops */}
                            <div className="group p-10 bg-[#FAF8F3] rounded-[40px] border-2 border-slate-200 hover:border-[#67927A]/30 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-[#67927A]/5 hover:-translate-y-2 overflow-hidden min-h-[320px]">
                                <div>
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-14 h-14 bg-[#67927A]/10 rounded-2xl flex items-center justify-center text-[#67927A] border border-[#67927A]/20 group-hover:bg-[#67927A] group-hover:text-white transition-all">
                                            <span className="material-symbols-outlined text-3xl font-bold">medication</span>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-3 py-1 rounded-full uppercase">Compliance</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4">Controlled Substance Ops</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                        <strong className="text-trust-navy">Protect your DEA license.</strong> A specialized guide to managing <span className="text-[#67927A] font-bold">stimulant prescribing workflows</span> and California compliance for remote practices.
                                    </p>
                                </div>
                                <Link href="/resources/blueprints/controlled-substance-ops" className="text-[#67927A] font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Secure Your Workflow <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>

                            {/* 4. Modern Practice Start-Up */}
                            <div className="group p-10 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-[40px] text-white shadow-2xl transition-all border border-white/5 hover:scale-105 flex flex-col justify-between min-h-[320px]">
                                <div>
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-14 h-14 bg-[#D2691E] rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                                            <span className="material-symbols-outlined text-3xl font-bold">foundation</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold mb-4 italic leading-tight !text-white">
                                        Psychiatrist <br />
                                        Start-Up Blueprint
                                    </h3>
                                    <p className="text-slate-100 mb-8 leading-relaxed font-medium">
                                        <strong className="text-white">Transitioning from hospital to solo?</strong> The exact operational roadmap for setting up your private practice in 90 days.
                                    </p>
                                </div>
                                <Link href="/resources/blueprints/start-up-roadmap" className="text-[#D2691E] font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:text-white transition-colors">
                                    View Roadmap <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>

                            {/* 5. EHR Hardening */}
                            <div className="group p-10 bg-[#FAF8F3] rounded-[40px] border-2 border-slate-200 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-2 min-h-[320px]">
                                <div>
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <span className="material-symbols-outlined text-3xl">database</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4">EHR Hardening</h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                                        <strong className="text-trust-navy">Cut documentation time by 40%.</strong> Custom templates for <span className="text-blue-600 font-bold">DrChrono, CharmHealth, and AdvancedMD</span> built specifically for psychiatric evaluations and MSEs.
                                    </p>
                                    {/* Time savings indicator */}
                                    <div className="bg-white border border-blue-100 rounded-xl p-3 mb-6">
                                        <p className="text-xs text-slate-500 mb-1">Time Saved / Month</p>
                                        <p className="text-2xl font-black text-blue-600">~32 Hours</p>
                                    </div>
                                </div>
                                <Link href="/resources/blueprints/ehr-hardening" className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Optimize Your EHR <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance & Security Callout - Now with Benefits */}
                <section className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] rounded-[50px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 p-20 opacity-5 scale-150">
                                <span className="material-symbols-outlined text-[300px]">verified_user</span>
                            </div>

                            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                                        <span className="material-symbols-outlined text-green-400 text-sm">verified</span>
                                        <span className="text-green-300 font-bold text-sm uppercase tracking-wider">Audit-Ready Guarantee</span>
                                    </div>
                                    <h2 className="text-4xl font-serif font-bold mb-8 italic leading-tight !text-white">
                                        California HIPAA <br />
                                        <span className="text-[#D2691E]">Compliance Standard.</span>
                                    </h2>
                                    <p className="text-lg text-slate-100 mb-8 leading-relaxed !text-slate-100">
                                        Every resource in our library is vetted by California medical regulatory specialists. We ensure our frameworks meet both HIPAA and California privacy standards.
                                    </p>
                                    {/* Benefit-driven CTA */}
                                    <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-8">
                                        <p className="text-slate-100 text-sm mb-4">
                                            <strong className="text-white">Free Compliance Audit Included:</strong> Get a 15-minute review of your current HIPAA setup when you book a strategy call.
                                        </p>
                                        <p className="text-[#D2691E] font-bold text-sm">Value: $350 • Limited Availability</p>
                                    </div>
                                    <div className="flex flex-wrap gap-4">
                                        <Link href="/book-consultation" className="bg-[#D2691E] hover:bg-[#B8860B] text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-all hover:scale-105 flex items-center gap-2">
                                            <span className="material-symbols-outlined">calendar_today</span>
                                            Claim Your Free Audit
                                        </Link>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-6">
                                    {[
                                        { title: "BAA Protection", desc: "Business Associate Agreements for all personnel.", icon: "gavel", stat: "100%" },
                                        { title: "256-bit Security", desc: "Military-grade encryption for all data handling.", icon: "lock", stat: "Secure" },
                                        { title: "Training Logs", desc: "Quarterly re-certification for all staff.", icon: "school", stat: "4x/year" },
                                        { title: "Protocol Audits", desc: "Regular stress testing of operational flows.", icon: "fact_check", stat: "Monthly" }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/20 border border-white/30 p-6 rounded-2xl hover:bg-white/25 transition-all group/item hover:scale-105">
                                            <div className="flex items-start justify-between mb-4">
                                                <span className="material-symbols-outlined text-[#FF8C42] text-3xl font-bold">{item.icon}</span>
                                                <span className="text-xs font-black text-green-300 bg-green-500/30 px-2 py-1 rounded">{item.stat}</span>
                                            </div>
                                            <h4 className="font-bold mb-2 !text-white text-lg drop-shadow-lg">{item.title}</h4>
                                            <p className="text-sm text-white/90 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA - Premium Upgrade */}
                <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#FAF8F3] to-white">
                    {/* Terracotta Glow Effect */}
                    <div className="absolute -inset-2 bg-[#D2691E]/10 blur-3xl opacity-30"></div>
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#B25A2A_1px,transparent_1px)] [background-size:40px_40px]" />
                    </div>

                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                        {/* Scarcity indicator */}
                        <div className="inline-flex items-center gap-3 bg-white border border-red-200 rounded-full px-6 py-3 mb-8 shadow-lg">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            <span className="text-sm font-bold text-red-800">Only 3 Recovery Plan Slots Left This Week</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight text-trust-navy">
                            Design Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">Future Practice</span>.
                        </h2>
                        <p className="text-lg md:text-xl text-slate-600 mb-6 max-w-2xl mx-auto font-medium leading-relaxed">
                            <strong className="text-trust-navy">Stop managing the chaos.</strong> Start <span className="text-[#D2691E] font-bold">leading your practice</span>.
                        </p>
                        <p className="text-base md:text-lg text-slate-600 mb-12 max-w-xl mx-auto leading-relaxed">
                            Book your <strong className="text-trust-navy">15-minute Recovery Plan</strong> to define your infrastructure roadmap and claim your <strong className="text-[#D2691E]">free compliance review</strong>.
                        </p>

                        {/* Benefit list */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-3xl mx-auto">
                            {[
                                { icon: "fact_check", text: "Practice Workflow Analysis" },
                                { icon: "shield", text: "HIPAA Compliance Check" },
                                { icon: "lightbulb", text: "Custom Resource Roadmap" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white border-2 border-slate-200 rounded-xl p-4 shadow-sm hover:border-[#D2691E]/30 hover:shadow-lg hover:shadow-[#D2691E]/5 transition-all">
                                    <span className="material-symbols-outlined text-[#D2691E]">{item.icon}</span>
                                    <span className="text-sm font-bold text-trust-navy">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/book-consultation"
                                className="group relative overflow-hidden px-10 md:px-12 py-4 md:py-5 bg-[#D2691E] hover:bg-[#B8860B] text-white font-black text-lg md:text-xl rounded-2xl shadow-2xl shadow-[#D2691E]/20 hover:shadow-[#D2691E]/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                            >
                                <span className="material-symbols-outlined">calendar_today</span>
                                <span>See My Recovery Plan</span>
                            </Link>
                            <Link
                                href="/pricing"
                                className="px-10 md:px-12 py-4 md:py-5 bg-white border-2 border-slate-200 hover:border-[#D2691E]/30 text-trust-navy font-bold text-lg md:text-xl rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                            >
                                View Pricing
                            </Link>
                        </div>

                        {/* Trust signals */}
                        <p className="text-sm text-slate-400 mt-8">
                            <span className="material-symbols-outlined text-green-500 text-sm align-middle mr-1">check_circle</span>
                            No commitment required • Cancel anytime • HIPAA-compliant
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    );
}
