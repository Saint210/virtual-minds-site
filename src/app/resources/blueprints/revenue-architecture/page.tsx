import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Revenue Optimization for California Psychiatrists | Virtual Minds",
    description: "Maximize practice revenue through optimized documentation, proper CPT coding guidance, and seamless billing company coordination.",
    keywords: ["psychiatric billing", "90833 add-on codes", "revenue cycle management", "psychiatry documentation", "cpt optimization"],
};

export default function RevenueBlueprint() {
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
                                    <span className="text-trust-navy">Revenue Optimization</span>
                                </nav>

                                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                    <span className="material-symbols-outlined text-primary text-[16px]">account_balance_wallet</span>
                                    Strategic Blueprint #02
                                </div>

                                <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                                    Revenue <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                                        Optimization.
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-8 max-w-2xl">
                                    Stop the leakage. Master documentation that supports 99214+90833 optimization and streamlines your billing company's entire workflow.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                                        <span className="material-symbols-outlined text-green-500">trending_up</span>
                                        <span className="text-sm font-bold text-trust-navy">+22% Yield Increase</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                                        <span className="material-symbols-outlined text-blue-500">description</span>
                                        <span className="text-sm font-bold text-trust-navy">90833 Mastery</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Visual Intel (40%) */}
                            <div className="lg:w-[40%] group w-full">
                                <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-2xl aspect-[4/5] bg-white group-hover:border-primary/30 transition-colors">
                                    <Image
                                        src="/images/blueprint-revenue.png"
                                        alt="Psychiatric Revenue and CPT Optimization System"
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
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-trust-navy">The CPT Optimization Opportunity</h2>
                                    <div className="prose prose-slate prose-lg max-w-none">
                                        <p>
                                            Most California psychiatrists are either under-coding their sessions or failing to document properly for "Add-on" codes that accurately reflect clinical depth. Transitioning from simple med-management to integrated therapy + med-management (99214 + 90833) can increase per-hour revenue by <strong>22-35%</strong>.
                                        </p>
                                        <blockquote className="border-l-4 border-primary bg-primary/5 p-8 rounded-r-3xl my-8">
                                            <p className="font-serif italic text-trust-navy text-xl leading-relaxed">
                                                "Precision Documentation is the bridge between clinical excellence and financial sustainability. If your templates aren't audit-proof, you're leaving thousands on the table every month."
                                            </p>
                                            <cite className="block mt-4 text-xs font-black uppercase tracking-widest text-slate-400">— Revenue Director, Virtual Minds</cite>
                                        </blockquote>
                                    </div>
                                </div>

                                {/* 2. The 5 Pillars of Revenue Protection */}
                                <div className="space-y-12">
                                    <h2 className="text-3xl font-serif font-bold text-trust-navy">The Revenue Infrastructure</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {[
                                            {
                                                icon: "call",
                                                title: "Intake Conversion",
                                                desc: "Convert 95%+ of initial psychiatric inquiries into booked evaluations through empathetic, professional coordination."
                                            },
                                            {
                                                icon: "fact_check",
                                                title: "Doc Quality Control",
                                                desc: "Prepare accurate superbills that your billing company needs for clean first-pass submissions, reducing rejection rates to <2%."
                                            },
                                            {
                                                icon: "handshake",
                                                title: "Billing Liaison",
                                                desc: "Direct coordination with your third-party biller to resolve documentation issues and track outstanding claims proactivey."
                                            },
                                            {
                                                icon: "payments",
                                                title: "Payment Recovery",
                                                desc: "Automated collection workflows for patient copays and balances, managed by your VA without awkward clinical conversations."
                                            },
                                            {
                                                icon: "analytics",
                                                title: "Yield Analysis",
                                                desc: "Monthly auditing of your per-patient yield to identify coding opportunities and insurance payer trends."
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

                                {/* 3. The Efficiency Table */}
                                <div className="space-y-8">
                                    <h2 className="text-3xl font-serif font-bold text-trust-navy">Financial Comparison</h2>
                                    <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-sm">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-slate-50">
                                                    <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400">Metric</th>
                                                    <th className="p-6 text-xs font-black uppercase tracking-widest text-trust-navy">Standard Coding</th>
                                                    <th className="p-6 text-xs font-black uppercase tracking-widest text-primary">VM Optimized Model</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                <tr>
                                                    <td className="p-6 text-sm font-bold text-trust-navy">Avg. Visit Value</td>
                                                    <td className="p-6 text-sm text-slate-500">$180 - $220</td>
                                                    <td className="p-6 text-sm font-bold text-green-600">$275 - $340</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-6 text-sm font-bold text-trust-navy">Claim Rejection Rate</td>
                                                    <td className="p-6 text-sm text-slate-500">8 - 12%</td>
                                                    <td className="p-6 text-sm font-bold text-green-600">&lt; 2%</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-6 text-sm font-bold text-trust-navy">Patient Bad Debt</td>
                                                    <td className="p-6 text-sm text-slate-500">Significant</td>
                                                    <td className="p-6 text-sm font-bold text-primary italic">Automated Collection</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>

                            {/* Right Sidebar (4 columns) */}
                            <div className="lg:col-span-4 space-y-8">
                                <div className="sticky top-12 space-y-8">

                                    {/* Strategic Download Card */}
                                    <div className="bg-trust-navy rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/40 transition-all" />
                                        <h3 className="font-serif text-2xl font-bold mb-6 italic !text-white">Analyze Revenue Leakage</h3>
                                        <p className="text-slate-300 text-sm leading-relaxed mb-8">
                                            In 15 minutes, we can identify exactly where your practice is losing billable revenue through administrative friction.
                                        </p>
                                        <Link href="/book-consultation" className="block w-full text-center bg-primary text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-xl hover:scale-[1.02] transition-all hover:shadow-xl hover:shadow-primary/20">
                                            Book Revenue Audit
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
