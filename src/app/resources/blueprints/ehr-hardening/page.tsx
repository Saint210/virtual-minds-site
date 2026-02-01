import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Psychiatric EHR Hardening & Template Optimization | Virtual Minds",
    description: "Turn your basic EMR into an automated EHR engine. Custom templates, macros, and decision trees for SimplePractice, Kareo, and DrChrono.",
    keywords: ["psychiatric EHR", "EMR optimization", "SimplePractice templates", "psychiatry automation", "clinical macros"],
};

export default function EHRHardeningBlueprint() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />

            <main className="flex-grow">
                {/* EXECUTIVE STRATEGIC HERO */}
                <section className="relative pt-12 md:pt-20 pb-20 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:40px_40px]" />
                    </div>

                    <div className="relative z-10 max-w-[1400px] mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">

                            {/* Left Column: Strategic Context (60%) */}
                            <div className="lg:w-[60%]">
                                <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
                                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                    <Link href="/resources" className="hover:text-primary transition-colors">Blueprints</Link>
                                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                    <span className="text-trust-navy">EHR Hardening</span>
                                </nav>

                                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                    <span className="material-symbols-outlined text-primary text-[16px]">terminal</span>
                                    Strategic Blueprint #04
                                </div>

                                <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                                    EHR <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                                        Hardening.
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-8 max-w-2xl">
                                    Stop fighting your software. Transform your passive "digital filing cabinet" into an active clinical partner through protocol enforcement and macro-automation.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                                        <span className="material-symbols-outlined text-green-500">bolt</span>
                                        <span className="text-sm font-bold text-trust-navy">Macro Optimization</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                                        <span className="material-symbols-outlined text-blue-500">security_update_good</span>
                                        <span className="text-sm font-bold text-trust-navy">Liability Guardrails</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Visual Intel (40%) */}
                            <div className="lg:w-[40%] group w-full">
                                <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-2xl aspect-[4/5] bg-white group-hover:border-primary/30 transition-colors">
                                    <Image
                                        src="/images/hero-dashboard.png"
                                        alt="Psychiatric EHR Security and Workflow Matrix"
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

                {/* CORE BLUEPRINT CONTENT */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                            {/* Left Content Area (8 columns) */}
                            <div className="lg:col-span-8 space-y-20">

                                {/* 1. The Operational Friction */}
                                <div className="space-y-6">
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-trust-navy">The EMR vs. EHR Reality Gap</h2>
                                    <div className="prose prose-slate prose-lg max-w-none">
                                        <p>
                                            In the psychiatric landscape, most providers use their software as an <strong>EMR (Electronic Medical Record)</strong>—a passive digital repository. To scale, you must upgrade to an <strong>EHR (Electronic Health Record)</strong> mindset where the system enforces clinical safety and automates routine data entry.
                                        </p>
                                        <blockquote className="border-l-4 border-primary bg-primary/5 p-8 rounded-r-3xl my-8">
                                            <p className="font-serif italic text-trust-navy text-xl leading-relaxed">
                                                "If you spend more than 5 minutes documenting a 30-minute session, your EHR is physically broken. Hardening isn't just about features; it's about engineering the friction out of the clinical encounter."
                                            </p>
                                            <cite className="block mt-4 text-xs font-black uppercase tracking-widest text-slate-400">— Head of Systems, Virtual Minds</cite>
                                        </blockquote>
                                    </div>
                                </div>

                                {/* 2. The 5 Pillars of EHR Optimization */}
                                <div className="space-y-12">
                                    <h2 className="text-3xl font-serif font-bold text-trust-navy">The Hardening Framework</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            {
                                                icon: "keyboard_command_key",
                                                title: "Macro Integration",
                                                desc: "Program advanced text expanders for MSE findings and risk assessments. Type 4 letters; get 3 paragraphs of compliant documentation."
                                            },
                                            {
                                                icon: "account_tree",
                                                title: "Decision Trees",
                                                desc: "Configure intake templates with 'Hard Stops' on suicide risk assessments and pharmacy details to ensure zero liability gaps."
                                            },
                                            {
                                                icon: "filter_alt",
                                                title: "Portal Triaging",
                                                desc: "Route refill requests and clinical questions to your VA first, keeping your inbox focused exclusively on complex care."
                                            },
                                            {
                                                icon: "sync",
                                                title: "Zero-Click Billing",
                                                desc: "Mapping your Note Templates directly to CPT-code auto-filing, ensuring your claims are generated the moment you sign the note."
                                            },
                                            {
                                                icon: "monitoring",
                                                title: "Outcome Tracking",
                                                desc: "Automated delivery of PHQ-9 and GAD-7 assessments before the visit, with scores pre-populated in your clinical encounter screen."
                                            }
                                        ].map((step, idx) => (
                                            <div key={idx} className="bg-[#FAF8F3] p-8 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                                    <span className="material-symbols-outlined">{step.icon}</span>
                                                </div>
                                                <h4 className="font-bold text-xl text-trust-navy mb-3">{step.title}</h4>
                                                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3. Platform Expertise */}
                                <div className="space-y-8">
                                    <h2 className="text-3xl font-serif font-bold text-trust-navy">Optimized Platforms</h2>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {["SimplePractice", "Kareo (Tebra)", "DrChrono", "AdvancedMD", "CharmHealth", "Valant", "AthenaHealth", "TheraNest"].map((ehr) => (
                                            <div key={ehr} className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-center font-bold text-slate-400 text-xs uppercase tracking-widest hover:border-primary/40 hover:text-trust-navy transition-all shadow-sm">
                                                {ehr}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Right Sidebar (4 columns) */}
                            <div className="lg:col-span-4 space-y-8">
                                <div className="sticky top-12 space-y-8">

                                    {/* Strategic Download Card */}
                                    <div className="bg-trust-navy rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/40 transition-all" />
                                        <h3 className="font-serif text-2xl font-bold mb-6 italic !text-white">Optimize Your Dashboard</h3>
                                        <p className="text-slate-300 text-sm leading-relaxed mb-8">
                                            Turn your software from a burden into a clinical force multiplier. Let us audit your configuration for free.
                                        </p>
                                        <Link href="/book-consultation" className="block w-full text-center bg-primary text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-xl hover:scale-[1.02] transition-all hover:shadow-xl hover:shadow-primary/20">
                                            Audit My EHR Config
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
