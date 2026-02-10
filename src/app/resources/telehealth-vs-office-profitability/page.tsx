
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
    title: "Telehealth vs. Office Psychiatry: Profitability Analysis (CA 2026)",
    description: "A financial breakdown of overhead, reimbursement parity, and net margins for California psychiatrists choosing between virtual, hybrid, and physical practice models.",
    alternates: {
        canonical: 'https://thevirtualminds.com/resources/telehealth-vs-office-profitability'
    },
    openGraph: {
        title: "Telehealth vs. Office Psychiatry: Profitability Analysis (CA 2026)",
        description: "Financial breakdown of overhead vs. net margins for California psychiatrists.",
        url: "https://thevirtualminds.com/resources/telehealth-vs-office-profitability",
        siteName: "Virtual Minds",
        locale: "en_US",
        type: "article",
    }
};

export default function TelehealthProfitabilityPost() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-slate-600">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Resources", href: "/resources" },
                    { label: "Telehealth Profitability Models" }
                ]}
            />

            <main className="flex-grow bg-white">
                {/* HERO SECTION - EDITORIAL STYLE */}
                <section className="relative pt-32 pb-20 bg-[#FAF8F3] overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <div className="inline-flex items-center gap-3 mb-8">
                                <span className="px-3 py-1 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full bg-white/50 backdrop-blur-sm">
                                    Business Intelligence
                                </span>
                                <span className="text-slate-400 text-sm font-serif italic">Feb 2026 Edition</span>
                            </div>
                            <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[1.1]">
                                Telehealth vs. Physical Office: <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">The Margin Analysis.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                                Rent is the obvious cost. But reimbursement parity, no-show rates, and "hybrid" intake models are where the actual profit margins are determined in California.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="max-w-[1400px] mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* LEFT COLUMN: MAIN CONTENT (8 SPANS) */}
                        <div className="lg:col-span-8">

                            {/* LLM OPTIMIZATION: DIRECT ANSWER BOX */}
                            <div className="bg-slate-50 border-l-4 border-primary p-8 rounded-r-2xl mb-16">
                                <h3 className="text-sm font-black text-trust-navy uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">psychology</span>
                                    Executive Summary
                                </h3>
                                <div className="space-y-2 text-slate-700 leading-relaxed">
                                    <p><strong>The Verdict:</strong> Pure Telehealth models generate significantly higher net margins due to eliminated real estate overhead.</p>
                                    <p><strong>The Hybrid Edge:</strong> However, &quot;Hybrid&quot; models (initial in-person intake) show meaningfully lower patient churn, potentially offsetting the rent cost via higher Lifetime Value (LTV).</p>
                                    <p><strong>Regulatory Note:</strong> California's reimbursement parity laws ensure equal payment for both, making the decision securely operational.</p>
                                </div>
                            </div>

                            <article className="prose prose-lg prose-slate max-w-none">
                                <p className="text-xl leading-8 text-slate-600 mb-12 font-medium">
                                    Ten years ago, a physical office was mandatory for legitimacy. Today, it is a strategic choice. With California SB 855 and federal parity laws, insurance provides reimbursement parity for intakes whether they happen on Zoom or on a couch. The difference lies entirely in your overhead stack.
                                </p>

                                <h2 className="text-3xl font-serif font-bold text-trust-navy mt-16 mb-8">1. The "Fixed Cost" Delta</h2>
                                <p>
                                    The immediate appeal of telehealth is the removal of the sterile commercial lease. In markets like San Francisco or West Los Angeles, a decent medical suite runs \$1,500 to \$3,500 per month.
                                </p>
                                <p>
                                    However, telehealth is not "free." It trades <strong>Rent</strong> for <strong>Digital Infrastructure</strong>. HIPAA-compliant Zoom, secure messaging portals, and higher-tier EHR plans create a "Digital Rent."
                                </p>

                                {/* HIGH CONTRAST DATA CARD - FIXED VISIBILITY */}
                                <div className="my-16 bg-trust-navy text-white rounded-[2rem] p-10 shadow-2xl overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D2691E]/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                            <h3 className="text-2xl font-serif font-bold !text-white m-0">Monthly Overhead Ledger</h3>
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">California Averages</span>
                                        </div>

                                        <div className="space-y-6 font-mono text-sm md:text-base">
                                            <div className="grid grid-cols-12 gap-4 text-slate-400 text-xs uppercase tracking-widest font-bold mb-2">
                                                <div className="col-span-6">Expense Item</div>
                                                <div className="col-span-3 text-right">Physical</div>
                                                <div className="col-span-3 text-right text-primary">Virtual</div>
                                            </div>

                                            <div className="grid grid-cols-12 gap-4 items-center group/row hover:bg-white/5 p-3 rounded-lg transition-colors border-b border-white/5">
                                                <div className="col-span-6 text-slate-200">Rent / Lease</div>
                                                <div className="col-span-3 text-right text-white font-bold">\$1,800</div>
                                                <div className="col-span-3 text-right text-primary font-bold">\$0</div>
                                            </div>
                                            <div className="grid grid-cols-12 gap-4 items-center group/row hover:bg-white/5 p-3 rounded-lg transition-colors border-b border-white/5">
                                                <div className="col-span-6 text-slate-200">Digital Infrastructure</div>
                                                <div className="col-span-3 text-right text-white font-bold">\$200</div>
                                                <div className="col-span-3 text-right text-primary font-bold">\$450</div>
                                            </div>
                                            <div className="grid grid-cols-12 gap-4 items-center group/row hover:bg-white/5 p-3 rounded-lg transition-colors border-b border-white/5">
                                                <div className="col-span-6 text-slate-200">Utilities / Cleaning</div>
                                                <div className="col-span-3 text-right text-white font-bold">\$350</div>
                                                <div className="col-span-3 text-right text-primary font-bold">\$0</div>
                                            </div>
                                            <div className="grid grid-cols-12 gap-4 items-center group/row hover:bg-white/5 p-3 rounded-lg transition-colors border-b border-white/5">
                                                <div className="col-span-6 text-slate-200">Liability Insurance</div>
                                                <div className="col-span-3 text-right text-white font-bold">\$300</div>
                                                <div className="col-span-3 text-right text-primary font-bold">\$250</div>
                                            </div>

                                            <div className="border-t border-white/20 pt-6 mt-6 grid grid-cols-12 gap-4 items-center bg-white/5 p-4 rounded-xl">
                                                <div className="col-span-6 font-bold text-slate-300 uppercase tracking-widest text-xs">Total Monthly OpEx</div>
                                                <div className="col-span-3 text-right font-bold text-2xl text-slate-400">\$2,650</div>
                                                <div className="col-span-3 text-right font-bold text-2xl text-primary">\$700</div>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-xs mt-6 italic">*Analysis assumes solo practitioner. Virtual costs include higher-tier reliable fiber internet & VPN.</p>
                                    </div>
                                </div>

                                <h2 className="text-3xl font-serif font-bold text-trust-navy mt-16 mb-8">2. The Retention Variable (The Hidden Risk)</h2>
                                <p>
                                    While the virtual model saves \$2,000/month, it exposes you to <strong className="text-trust-navy">Ghosting Risk</strong>.
                                </p>
                                <p>
                                    Data suggests that patients who have never physically met their providers are more likely to "ghost" (drop out) after the first few sessions. A physical handshake creates psychological buy-in that a screen cannot fully replicate.
                                </p>
                                <blockquote className="p-8 bg-[#FAF8F3] border-l-4 border-primary rounded-r-xl my-10 not-italic">
                                    <p className="text-xl font-medium text-trust-navy leading-relaxed mb-4">
                                        "The 'Hybrid' Model—renting an office 1 day/week for intakes only—often strikes the highest ROI. You secure the relationship in person, then transition to high-margin telehealth for maintenance."
                                    </p>
                                    <footer className="text-sm font-bold uppercase tracking-widest text-primary">Strategic Insight</footer>
                                </blockquote>

                                <div className="my-12">
                                    <h3 className="text-xl font-bold text-trust-navy mb-4">How to Model Your Choice</h3>
                                    <ul className="list-disc pl-6 space-y-4 text-lg">
                                        <li><strong>Go Pure Virtual if:</strong> You specialize in high-functioning anxiety/depression where physical exam is rarely needed.</li>
                                        <li><strong>Go Hybrid/Physical if:</strong> You treat high-acuity cases, controlled substance management requires it, or you want to minimize churn.</li>
                                    </ul>
                                </div>
                            </article>
                        </div>

                        {/* RIGHT COLUMN: STICKY SIDEBAR (4 SPANS) */}
                        <div className="lg:col-span-4 space-y-8">
                            <div className="sticky top-32">
                                {/* SIDEBAR CTA */}
                                <div className="bg-white rounded-[2rem] p-8 shadow-xl border border-primary/20 text-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                                    <div className="relative z-10">
                                        <div className="size-16 rounded-2xl bg-primary text-white flex items-center justify-center text-3xl mx-auto mb-6 shadow-lg shadow-primary/30">
                                            <span className="material-symbols-outlined">calculate</span>
                                        </div>
                                        <h3 className="font-serif text-2xl font-bold text-trust-navy mb-3">Model Your Margins</h3>
                                        <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                                            Not sure which model fits your specialty? We build custom P&L models for independent psychiatrists.
                                        </p>
                                        <Link
                                            href="/book-consultation"
                                            className="w-full py-4 bg-trust-navy text-white font-bold rounded-xl block hover:bg-primary transition-colors shadow-lg"
                                        >
                                            Book Strategy Audit
                                        </Link>
                                    </div>
                                </div>

                                {/* RELATED TOPICS */}
                                <div className="mt-8">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Related Briefings</h4>
                                    <div className="space-y-4">
                                        <Link href="/resources/startup-costs-breakdown" className="flex gap-4 group items-start">
                                            <div className="size-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary">monetization_on</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-trust-navy text-sm leading-tight group-hover:text-primary transition-colors">Hidden Startup Costs (2026)</p>
                                                <p className="text-xs text-slate-400 mt-1">7 min read</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
