
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
    title: "The Financial ROI of a Psychiatric Virtual Assistant (2026 Data)",
    description: "Calculate the real return on investment of hiring a psychiatric VA. Compare offshore vs. US-based costs and see how reclaiming 15 admin hours increases clinical revenue.",
    alternates: {
        canonical: 'https://thevirtualminds.com/resources/psychiatric-va-roi-calculator'
    },
    openGraph: {
        title: "The Financial ROI of a Psychiatric Virtual Assistant (2026 Data)",
        description: "Why a $12/hr VA is actually worth $300/hr in reclaimed clinical time.",
        url: "https://thevirtualminds.com/resources/psychiatric-va-roi-calculator",
        siteName: "Virtual Minds",
        locale: "en_US",
        type: "article",
    }
};

export default function VaRoiPost() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-slate-600">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Resources", href: "/resources" },
                    { label: "VA ROI Calculator" }
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
                                    Financial Analysis
                                </span>
                                <span className="text-slate-400 text-sm font-serif italic">Feb 2026 Edition</span>
                            </div>
                            <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[1.1]">
                                The "Unfair Advantage" of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">The 15-Hour Workweek.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                                How reclaiming administrative time creates a 78% reduction in overhead and unlocks \$6,000/mo in additional clinical revenue.
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
                                    <span className="material-symbols-outlined text-primary">trending_up</span>
                                    Executive Summary
                                </h3>
                                <div className="space-y-2 text-slate-700 leading-relaxed">
                                    <p><strong>The Opportunity:</strong> 61% of psychiatrists report burnout due to non-clinical tasks (billing, scheduling, faxing).</p>
                                    <p><strong>The Math:</strong> Delegating 15 hours of admin/week @ \$300/hr clinical rate = \$4,500/week in reclaimed capacity.</p>
                                    <p><strong>The Cost:</strong> A medical-grade VA costs ~70% less than a US-based in-person employee (burdened cost).</p>
                                </div>
                            </div>

                            <article className="prose prose-lg prose-slate max-w-none">
                                <p className="text-xl leading-8 text-slate-600 mb-12 font-medium">
                                    In private practice, you do not sell healthcare; you sell <strong>time</strong>. Every hour you spend verifying insurance benefits or chasing prior authorizations is an inventory unit you just threw in the trash.
                                </p>

                                <h2 className="text-3xl font-serif font-bold text-trust-navy mt-16 mb-8">The Arbitrage of Skill</h2>
                                <p>
                                    A highly trained psychiatrist in California bills \$300–\$500 per hour. An expert medical virtual assistant costs a fraction of that. The "ROI" isn't just about saving money on staff; it's about <strong className="text-trust-navy">Asset Repositioning</strong>.
                                </p>
                                <p>
                                    When you perform a \$20/hr task, you are not saving money. You are <strong>losing \$280/hr</strong>.
                                </p>

                                {/* HIGH CONTRAST FINANCIAL COMPARISON CARD */}
                                <div className="my-16 bg-trust-navy text-white rounded-[2rem] p-10 shadow-2xl overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D2691E]/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                            <h3 className="text-2xl font-serif font-bold !text-white m-0">Cost of Operations Ledger</h3>
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Monthly Expense (40hrs/mo)</span>
                                        </div>

                                        <div className="space-y-6 font-mono text-sm md:text-base">
                                            <div className="grid grid-cols-12 gap-4 text-slate-400 text-xs uppercase tracking-widest font-bold mb-2">
                                                <div className="col-span-6">Staff Type</div>
                                                <div className="col-span-3 text-right">In-Person (CA)</div>
                                                <div className="col-span-3 text-right text-primary">Virtual Mind</div>
                                            </div>

                                            <div className="grid grid-cols-12 gap-4 items-center group/row hover:bg-white/5 p-3 rounded-lg transition-colors border-b border-white/5">
                                                <div className="col-span-6 text-slate-200">Base Salary / Rate</div>
                                                <div className="col-span-3 text-right text-white font-bold">\$3,200</div>
                                                <div className="col-span-3 text-right text-primary font-bold">\$600 - \$900</div>
                                            </div>
                                            <div className="grid grid-cols-12 gap-4 items-center group/row hover:bg-white/5 p-3 rounded-lg transition-colors border-b border-white/5">
                                                <div className="col-span-6 text-slate-200">Payroll Tax / Benefits</div>
                                                <div className="col-span-3 text-right text-white font-bold">Significant Efficiency Gain</div>
                                                <div className="col-span-3 text-right text-primary font-bold">\$0</div>
                                            </div>
                                            <div className="grid grid-cols-12 gap-4 items-center group/row hover:bg-white/5 p-3 rounded-lg transition-colors border-b border-white/5">
                                                <div className="col-span-6 text-slate-200">Office Equipment/Space</div>
                                                <div className="col-span-3 text-right text-white font-bold">+\$400</div>
                                                <div className="col-span-3 text-right text-primary font-bold">\$0</div>
                                            </div>

                                            <div className="border-t border-white/20 pt-6 mt-6 grid grid-cols-12 gap-4 items-center bg-white/5 p-4 rounded-xl">
                                                <div className="col-span-6 font-bold text-slate-300 uppercase tracking-widest text-xs">Total Monthly Cost</div>
                                                <div className="col-span-3 text-right font-bold text-2xl text-slate-400">\$4,560</div>
                                                <div className="col-span-3 text-right font-bold text-2xl text-primary">~\$800</div>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 text-xs mt-6 italic">*Comparison based on part-time (10hrs/week) coverage in a California metro area.</p>
                                    </div>
                                </div>

                                <h2 className="text-3xl font-serif font-bold text-trust-navy mt-16 mb-8">The "15-Hour Asset" Effect</h2>
                                <p>
                                    Most solo practitioners spend ~15 hours a week on tasks that require <strong>zero clinical judgment</strong>:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-8 text-lg">
                                    <li>Calling insurance to check eligibility (2 hrs)</li>
                                    <li>Rescheduling patients (3 hrs)</li>
                                    <li>Faxing pharmacies (2 hrs)</li>
                                    <li>Entering data into EHR (5 hrs)</li>
                                </ul>
                                <p>
                                    If you delegate these 15 hours to a VA, you don't just "save time." You open 15 hours of calendar inventory. Even if you fill only <strong>half</strong> of that (7.5 hours) with clinical work at \$300/hr, that is <strong>\$2,250/week</strong> in <em>new profit</em>.
                                </p>

                                <div className="my-12">
                                    <h3 className="text-xl font-bold text-trust-navy mb-4">Bottom Line</h3>
                                    <p className="text-lg">
                                        The ROI isn't 2x or 3x. For a solo psychiatrist, the ROI of a Virtual Assistant is often <strong>10x your monthly spend</strong> in recovered billing capacity.
                                    </p>
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
                                            <span className="material-symbols-outlined">person_add</span>
                                        </div>
                                        <h3 className="font-serif text-2xl font-bold text-trust-navy mb-3">Hire a Virtual Mind</h3>
                                        <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                                            Pre-trained, HIPAA-certified, and ready to reclaim your time.
                                        </p>
                                        <Link
                                            href="/book-consultation?ref=roi"
                                            className="w-full py-4 bg-trust-navy text-white font-bold rounded-xl block hover:bg-primary transition-colors shadow-lg"
                                        >
                                            Find Your Assistant
                                        </Link>
                                    </div>
                                </div>

                                {/* RELATED TOPICS */}
                                <div className="mt-8">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Related Briefings</h4>
                                    <div className="space-y-4">
                                        <Link href="/services/virtual-assistant" className="flex gap-4 group items-start">
                                            <div className="size-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary">psychology</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-trust-navy text-sm leading-tight group-hover:text-primary transition-colors">Virtual Assistant Services</p>
                                                <p className="text-xs text-slate-400 mt-1">Service Overview</p>
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
