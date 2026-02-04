
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
    title: "Psychiatry Credentialing Timeline Reality Check (CA 2026)",
    description: "Why it takes 120 days to get paid: A breakdown of Anthem, Blue Shield, and Aetna credentialing timelines for new California practices.",
    alternates: {
        canonical: 'https://thevirtualminds.com/resources/credentialing-timeline-guide'
    },
    openGraph: {
        title: "Psychiatry Credentialing Timeline Reality Check (CA 2026)",
        description: "The 90-120 day cash flow gap explained for new psychiatrists.",
        url: "https://thevirtualminds.com/resources/credentialing-timeline-guide",
        siteName: "Virtual Minds",
        locale: "en_US",
        type: "article",
    }
};

export default function CredentialingTimelinePost() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-slate-600">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Resources", href: "/resources" },
                    { label: "Credentialing Reality Check" }
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
                                    Operational Reality
                                </span>
                                <span className="text-slate-400 text-sm font-serif italic">Feb 2026 Edition</span>
                            </div>
                            <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[1.1]">
                                The "No-Revenue" Window: <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#B8860B]">Insurance Credentialing Timelines.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                                Why new practices in California face a 120-day cash flow drought, and why "retroactive billing" is rarely a safety net.
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
                                    <span className="material-symbols-outlined text-primary">timer</span>
                                    Executive Summary
                                </h3>
                                <div className="space-y-2 text-slate-700 leading-relaxed">
                                    <p><strong>Anthem Blue Cross:</strong> 30-45 days (Best Case). Often requires CAQH pre-population.</p>
                                    <p><strong>Blue Shield of CA:</strong> 60-90 days. Known for "closed panel" warnings in saturated metros.</p>
                                    <p><strong>Aetna:</strong> 90-120 days. Includes a 60-day "pre-review" before they even send the contract.</p>
                                    <p><strong>The Strategy:</strong> Do not rely on "retroactive billing." Most California payers no longer honor it for standard contracts.</p>
                                </div>
                            </div>

                            <article className="prose prose-lg prose-slate max-w-none">
                                <p className="text-xl leading-8 text-slate-600 mb-12 font-medium">
                                    The single most common reason new private practices fail in Year 1 is not a lack of patients—it is a lack of liquidity. Expecting an insurance reimbursement check in Month 2 is a mathematical impossibility in the California payer market.
                                </p>

                                <h2 className="text-3xl font-serif font-bold text-trust-navy mt-16 mb-8">The "Dead Time" Timeline</h2>
                                <p>
                                    Most psychiatrists confuse "contracting" with "credentialing." They are separate hells. Here is the actual progression of time for a standard practice launch.
                                </p>

                                {/* HIGH CONTRAST TIMELINE CARD */}
                                <div className="my-16 bg-trust-navy text-white rounded-[2rem] p-10 shadow-2xl overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D2691E]/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-12 border-b border-white/10 pb-6">
                                            <h3 className="text-2xl font-serif font-bold text-white m-0">The 4-Month Revenue Lag</h3>
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Typical CA Startup Flow</span>
                                        </div>

                                        <div className="space-y-8 relative pl-4">
                                            {/* Vertical Line */}
                                            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary to-transparent"></div>

                                            {/* MONTH 1 */}
                                            <div className="relative flex items-start gap-8 group/item">
                                                <div className="size-14 rounded-full bg-white text-trust-navy font-bold flex items-center justify-center shrink-0 z-10 border-4 border-trust-navy shadow-[0_0_0_4px_rgba(255,255,255,0.2)]">
                                                    M1
                                                </div>
                                                <div className="pt-2">
                                                    <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-1">Application</h4>
                                                    <p className="text-slate-300 text-sm">You submit CAQH + Individual Applications. Payer acknowledges receipt (Days 1-14).</p>
                                                </div>
                                            </div>

                                            {/* MONTH 2 */}
                                            <div className="relative flex items-start gap-8 group/item">
                                                <div className="size-14 rounded-full bg-white/10 text-slate-400 font-bold flex items-center justify-center shrink-0 z-10 border-4 border-trust-navy backdrop-blur-sm">
                                                    M2
                                                </div>
                                                <div className="pt-2">
                                                    <h4 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-1">The "Black Hole"</h4>
                                                    <p className="text-slate-400 text-sm">Primary Source Verification occurs. They call your med school and verify your board cert. <strong className="text-white">Zero communication happens here.</strong></p>
                                                </div>
                                            </div>

                                            {/* MONTH 3 */}
                                            <div className="relative flex items-start gap-8 group/item">
                                                <div className="size-14 rounded-full bg-white/10 text-slate-400 font-bold flex items-center justify-center shrink-0 z-10 border-4 border-trust-navy backdrop-blur-sm">
                                                    M3
                                                </div>
                                                <div className="pt-2">
                                                    <h4 className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-1">Contract Loads</h4>
                                                    <p className="text-slate-400 text-sm">Credentialing is approved, but "Load Date" is pending. You are technically in-network, but their claims system doesn't know you exist yet.</p>
                                                </div>
                                            </div>

                                            {/* MONTH 4 */}
                                            <div className="relative flex items-start gap-8 group/item">
                                                <div className="size-14 rounded-full bg-primary text-trust-navy font-bold flex items-center justify-center shrink-0 z-10 border-4 border-trust-navy shadow-[0_0_20px_rgba(210,105,30,0.5)]">
                                                    M4
                                                </div>
                                                <div className="pt-2">
                                                    <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-1">First Payment</h4>
                                                    <p className="text-whitetext-sm">Contracts are live. You see a patient. Submit a claim. Get paid 21 days later via EFT.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h2 className="text-3xl font-serif font-bold text-trust-navy mt-16 mb-8">The "Pending" Danger Zone</h2>
                                <p>
                                    Many doctors think, <em>"I'll just see patients for cash now and back-bill insurance later when I'm approved."</em>
                                </p>
                                <p>
                                    <strong>Do not do this.</strong> Most California managed care contracts clearly state they are not liable for claims with dates of service prior to the "Effective Date" of the contract. You will be forced to refund your patients their cash payments while the insurance company denies your retro-claim. You lose twice.
                                </p>

                                <div className="my-12">
                                    <h3 className="text-xl font-bold text-trust-navy mb-4">Survival Tactics</h3>
                                    <ul className="list-disc pl-6 space-y-4 text-lg">
                                        <li><strong>Start 6 Months Early:</strong> You can often begin credentialing using your home address while still employed.</li>
                                        <li><strong>Negotiate "Case Rates":</strong> Sometimes Single Case Agreements (SCAs) can bridge the gap for specific patients.</li>
                                        <li><strong>Hire a Credentialing Specialist:</strong> Trying to DIY this saves \$2,000 but costs you \$20,000 in delayed revenue.</li>
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
                                            <span className="material-symbols-outlined">contract</span>
                                        </div>
                                        <h3 className="font-serif text-2xl font-bold text-trust-navy mb-3">Fast-Track Your Panels</h3>
                                        <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                                            Our credentialing team handles the paperwork so you can focus on clinical planning.
                                        </p>
                                        <Link
                                            href="/book-consultation"
                                            className="w-full py-4 bg-trust-navy text-white font-bold rounded-xl block hover:bg-primary transition-colors shadow-lg"
                                        >
                                            Get Credentialed
                                        </Link>
                                    </div>
                                </div>

                                {/* RELATED TOPICS */}
                                <div className="mt-8">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Related Briefings</h4>
                                    <div className="space-y-4">
                                        <Link href="/resources/telehealth-vs-office-profitability" className="flex gap-4 group items-start">
                                            <div className="size-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary">monitor_heart</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-trust-navy text-sm leading-tight group-hover:text-primary transition-colors">Telehealth Profitability</p>
                                                <p className="text-xs text-slate-400 mt-1">5 min read</p>
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
