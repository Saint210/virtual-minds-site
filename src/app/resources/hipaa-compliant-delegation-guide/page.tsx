
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
    title: "HIPAA Guide for Virtual Assistants in Psychiatry (CA Standards)",
    description: "Legal guide for delegating to psychiatric virtual assistants. Covers Business Associate Agreements (BAA), secure 2FA access, and California-specific privacy laws.",
    alternates: {
        canonical: 'https://thevirtualminds.com/resources/hipaa-compliant-delegation-guide'
    },
    openGraph: {
        title: "HIPAA Guide for Virtual Assistants in Psychiatry (CA Standards)",
        description: "How to hire offshore VAs without violating federal privacy laws.",
        url: "https://thevirtualminds.com/resources/hipaa-compliant-delegation-guide",
        siteName: "Virtual Minds",
        locale: "en_US",
        type: "article",
    }
};

export default function HipaaDelegationPost() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-slate-600">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Resources", href: "/resources" },
                    { label: "HIPAA Delegation Guide" }
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
                                    Legal & Compliance
                                </span>
                                <span className="text-slate-400 text-sm font-serif italic">Feb 2026 Edition</span>
                            </div>
                            <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[1.1]">
                                Delegating Without Risk: <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">The HIPAA Playbook.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium max-w-3xl">
                                Can an offshore VA legally access your EHR? Yes, but only if you follow the "BAA + Least Privilege" framework.
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
                                    <span className="material-symbols-outlined text-primary">gavel</span>
                                    Executive Summary
                                </h3>
                                <div className="space-y-2 text-slate-700 leading-relaxed">
                                    <p><strong>The Law:</strong> HIPAA applies to <em>any</em> entity accessing PHI, regardless of location. Offshore VAs are legal "Business Associates."</p>
                                    <p><strong>The Contract:</strong> You MUST have a signed Business Associate Agreement (BAA) directly with the agency or the VA.</p>
                                    <p><strong>The Tech:</strong> Never share passwords. Use "User provisioning" in your EHR with scoped permissions (e.g., "Scheduler" role only).</p>
                                </div>
                            </div>

                            <article className="prose prose-lg prose-slate max-w-none">
                                <p className="text-xl leading-8 text-slate-600 mb-12 font-medium">
                                    A common myth in psychiatry is that offshore assistants cannot legally handle patient data. This is false. HIPAA assumes you will delegate work; it effectively mandates <strong>how</strong> that delegation happens.
                                </p>

                                <h2 className="text-3xl font-serif font-bold text-trust-navy mt-16 mb-8">The "Business Associate" Rule</h2>
                                <p>
                                    Under HIPAA, your Virtual Assistant is defined as a <strong>Business Associate (BA)</strong>. This means they are legally liable for protecting Protected Health Information (PHI) just like you are.
                                </p>

                                <div className="my-12 bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl">
                                    <h3 className="text-red-900 font-bold text-lg mb-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined">warning</span>
                                        The "Freelancer" Trap
                                    </h3>
                                    <p className="text-red-800">
                                        Hiring a generic VA from Upwork who uses their personal Gmail to email your patients is a <strong>Tier 3 HIPAA Violation</strong>. Fines start at \$10,000 per incident. Never use a VA who does not operate on an encrypted, managed device.
                                    </p>
                                </div>

                                <h2 className="text-3xl font-serif font-bold text-trust-navy mt-16 mb-8">The "5-Point" Compliance Checklist</h2>
                                <p>Before giving a VA access to your practice, verify these five layers of security:</p>

                                {/* HIGH CONTRAST CHECKLIST CARD */}
                                <div className="my-16 bg-trust-navy text-white rounded-[2rem] p-10 shadow-2xl overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D2691E]/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                                            <h3 className="text-2xl font-serif font-bold !text-white m-0">The Secure Access Protocol</h3>
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Audit Standards</span>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="flex gap-6 items-start group/item">
                                                <div className="size-8 rounded-full bg-primary text-trust-navy flex items-center justify-center font-bold shrink-0 mt-1">1</div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-white mb-1">Signed BAA</h4>
                                                    <p className="text-slate-400 text-sm">A legal contract specifically designating them as a Business Associate, accepting liability for data handling.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 items-start group/item">
                                                <div className="size-8 rounded-full bg-primary text-trust-navy flex items-center justify-center font-bold shrink-0 mt-1">2</div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-white mb-1">Scoped EHR Access</h4>
                                                    <p className="text-slate-400 text-sm">They have their <em>own</em> login (e.g., "Jane.Doe"). You never share your admin password. Access is restricted to "Scheduling/Billing" only.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 items-start group/item">
                                                <div className="size-8 rounded-full bg-primary text-trust-navy flex items-center justify-center font-bold shrink-0 mt-1">3</div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-white mb-1">Encrypted End-Points</h4>
                                                    <p className="text-slate-400 text-sm">The VA's computer must have disk encryption (BitLocker/FileVault) and active commercial-grade antivirus.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 items-start group/item">
                                                <div className="size-8 rounded-full bg-primary text-trust-navy flex items-center justify-center font-bold shrink-0 mt-1">4</div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-white mb-1">Zero-Trust VPN</h4>
                                                    <p className="text-slate-400 text-sm">All connection to your systems happens through a secure, monitored VPN tunnel.</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-6 items-start group/item">
                                                <div className="size-8 rounded-full bg-primary text-trust-navy flex items-center justify-center font-bold shrink-0 mt-1">5</div>
                                                <div>
                                                    <h4 className="font-bold text-lg text-white mb-1">No Local Storage</h4>
                                                    <p className="text-slate-400 text-sm">Strict policy: No patient files are ever downloaded to the VA's local desktop. Everything stays in the cloud (Box/Google Workspace/EHR).</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="my-12">
                                    <h3 className="text-xl font-bold text-trust-navy mb-4">How Virtual Minds Solves This</h3>
                                    <p className="text-lg">
                                        We don't just find you a VA. We act as the <strong className="text-trust-navy">Compliance Shield</strong>. We hold the primary BAA, manage the device security, and conduct quarterly HIPAA audits on all our staff. You delegate; we defend.
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
                                            <span className="material-symbols-outlined">shield</span>
                                        </div>
                                        <h3 className="font-serif text-2xl font-bold text-trust-navy mb-3">Secure Your Practice</h3>
                                        <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                                            Don't risk a breach. Hire VAs that come with enterprise-grade security pre-installed.
                                        </p>
                                        <Link
                                            href="/book-consultation?ref=compliance"
                                            className="w-full py-4 bg-trust-navy text-white font-bold rounded-xl block hover:bg-primary transition-colors shadow-lg"
                                        >
                                            Get Compliant Help
                                        </Link>
                                    </div>
                                </div>

                                {/* RELATED TOPICS */}
                                <div className="mt-8">
                                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Related Briefings</h4>
                                    <div className="space-y-4">
                                        <Link href="/resources/psychiatric-va-roi-calculator" className="flex gap-4 group items-start">
                                            <div className="size-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <span className="material-symbols-outlined text-slate-400 text-lg group-hover:text-primary">calculate</span>
                                            </div>
                                            <div>
                                                <p className="font-bold text-trust-navy text-sm leading-tight group-hover:text-primary transition-colors">VA ROI Calculator</p>
                                                <p className="text-xs text-slate-400 mt-1">Financial Analysis</p>
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
