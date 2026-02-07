import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogSidebar from "@/components/blog/BlogSidebar";
import KeyTakeaways from "@/components/blog/KeyTakeaways";

export const metadata = {
    title: "Revenue Cycle Management (RCM) vs. Billing for Psychiatrists",
    description: "Understand the critical difference between simple billing and true Revenue Cycle Management (RCM) to maximize your psychiatric practice's financial health.",
    keywords: ["psychiatric revenue cycle management", "RCM vs billing psychiatry", "mental health billing optimization", "psychiatrist financial health", "private practice revenue growth"],
    openGraph: {
        title: "Revenue Cycle Management vs. Billing",
        description: "Maximize your psychiatric practice's financial health with RCM.",
        url: "https://thevirtualminds.com/blog/revenue-cycle-management-vs-billing",
        siteName: "Virtual Minds",
        images: [
            {
                url: "https://thevirtualminds.com/images/hero-new.png",
                width: 1200,
                height: 900,
                alt: "Revenue Cycle Management vs Billing",
            },
        ],
        locale: "en_US",
        type: "article",
    },
};

const rcmTakeaways = [
    {
        point: "RCM is Strategic, Billing is Tactical",
        detail: "Billing is merely submitting claims; RCM is the holistic process of ensuring every dollar earned is collected, starting from patient intake."
    },
    {
        point: "Proactive Eligibility Verification",
        detail: "80% of psychiatric claim denials are preventable by verifying eligibility before the encounter—a core pillar of modern RCM."
    },
    {
        point: "The EHR Integration Factor",
        detail: "Effective RCM requires deep integration between your clinical EHR and billing workflows to eliminate 'admin leakage'."
    },
    {
        point: "Denial Management vs. Prevention",
        detail: "Reactive billing handles denials as they happen. 2026-standard RCM builds bridges to prevent them from occurring in the first place."
    }
];

const tableOfContents = [
    { id: "introduction", title: "Understanding the Difference" },
    { id: "hidden-leaks", title: "The Hidden Revenue Leaks" },
    { id: "comparison", title: "Billing vs. RCM Comparison" },
    { id: "implementation", title: "Implementing Full RCM" }
];

const relatedArticles = [
    {
        title: "Operational Process Review for Mental Health Practices",
        slug: "operational-process-review-mental-health-practices",
        category: "Practice Growth"
    },
    {
        title: "How to Scale a Private Psychiatry Practice",
        slug: "how-to-scale-private-psychiatry-practice",
        category: "Practice Growth"
    },
    {
        title: "Psychiatrist Salary California Private Practice: 2026 Reality Check",
        slug: "psychiatrist-salary-california-private-practice",
        category: "Practice Growth"
    }
];

const comparison = [
    {
        feature: "Focus",
        billing: "Submitting claims",
        rcm: "Holistic financial health"
    },
    {
        feature: "Timing",
        billing: "Reactive (After appointment)",
        rcm: "Proactive (Starts at scheduling)"
    },
    {
        feature: "Denial Management",
        billing: "Resubmitting errors",
        rcm: "Preventing errors before submission"
    },
    {
        feature: "Patient Responsibility",
        billing: "Send invoice",
        rcm: "Transparent upfront verification"
    }
];

export default function RCMvsBilling() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />

            <main className="flex-grow">
                {/* EXECUTIVE BRIEFING HERO */}
                <section className="relative pt-8 md:pt-12 pb-16 overflow-hidden">
                    <div className="relative z-10 max-w-[1400px] mx-auto px-6">
                        <div className="max-w-4xl">
                            {/* Breadcrumbs Integrated */}
                            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <Link href="/blog" className="hover:text-primary transition-colors">Intelligence</Link>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span className="text-trust-navy">Fiscal Strategy</span>
                            </nav>

                            {/* Strategic Briefing Badge */}
                            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <span className="material-symbols-outlined text-primary text-[16px]">account_balance_wallet</span>
                                2026 Fiscal Strategy Series
                            </div>

                            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                                RCM vs. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                                    Simple Billing.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-12 max-w-2xl">
                                Why simple billing is a tactical tool, but Revenue Cycle Management (RCM) is the strategic engine of high-performance psychiatric practices.
                            </p>

                            {/* PRACTICE ECONOMICS BRIEFING BAR */}
                            <div className="flex flex-wrap items-center gap-x-12 gap-y-8 py-10 border-y border-slate-200/60">
                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Strategy Pillar</p>
                                    <p className="text-xl font-bold text-trust-navy">Revenue Integrity</p>
                                </div>

                                <div className="hidden md:block h-12 w-px bg-slate-200" />

                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Growth Multiplier</p>
                                    <p className="text-xl font-bold text-trust-navy">Cash Flow Velocity</p>
                                </div>

                                <div className="hidden md:block h-12 w-px bg-slate-200" />

                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Administrative Logic</p>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <p className="text-xl font-bold text-trust-navy italic">Leakage Prevention</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="flex gap-12">
                            <div className="flex-1 min-w-0">
                                <article className="prose prose-lg prose-slate max-w-none">
                                    <KeyTakeaways takeaways={rcmTakeaways} />

                                    {/* STRATEGIC BRIEFING INTRODUCTION (60/40) */}
                                    <div className="flex flex-col lg:flex-row gap-12 my-16 items-start">
                                        <div className="lg:w-[60%] order-2 lg:order-1">
                                            <h2 id="introduction" className="text-3xl font-bold text-trust-navy mt-0 mb-6">Financial Strategy Infrastructure</h2>
                                            <p className="text-xl text-slate-600 font-display leading-relaxed mb-6">
                                                Many psychiatrists use the terms &quot;billing&quot; and &quot;Revenue Cycle Management&quot; (RCM) interchangeably. However, treating them as synonyms is a costly mistake that leads to revenue leakage and administrative burnout.
                                            </p>
                                            <p className="text-slate-600 leading-relaxed mb-0">
                                                <strong>Billing</strong> is a clerical task—filling a form and hitting send. <strong>RCM</strong> is a strategic financial process that begins the moment a patient calls and ends when the final dollar is in your bank account, ensuring every clinical hour is accurately captured and processed.
                                            </p>
                                        </div>

                                        <div className="lg:w-[40%] order-1 lg:order-2 group w-full">
                                            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-xl aspect-[4/5] bg-slate-50">
                                                <Image
                                                    src="/images/visual-intel-rcm.png"
                                                    alt="Revenue Cycle Management vs Billing"
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    priority
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/20 via-transparent to-transparent pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mb-6">
                                        For practitioners using high-performance systems like <strong>DrChrono</strong> or <strong>SimplePractice</strong>, understanding this distinction is the first step toward <Link href="/services/ehr-emr-management" className="text-primary font-bold hover:underline">EHR workflow optimization</Link>.
                                    </p>

                                    <h2 id="hidden-leaks" className="text-3xl font-bold text-trust-navy mt-12 mb-6">The Hidden Revenue Leaks</h2>
                                    <p className="mb-6">
                                        Without a robust RCM strategy, practices often lose 5-10% of revenue to:
                                    </p>
                                    <ul className="list-disc pl-6 space-y-2 mb-8">
                                        <li>Unverified insurance eligibility prior to visits.</li>
                                        <li>Incorrect coding that leads to lower reimbursement rates.</li>
                                        <li>Write-offs of "small" balances that add up over time.</li>
                                    </ul>

                                    <h2 id="comparison" className="text-3xl font-bold text-trust-navy mt-12 mb-6">Billing vs. RCM: Side-by-Side Comparison</h2>
                                </article>
                            </div>

                            <BlogSidebar
                                tableOfContents={tableOfContents}
                                relatedArticles={relatedArticles}
                                currentUrl="https://thevirtualminds.com/blog/revenue-cycle-management-vs-billing"
                                articleTitle="Revenue Cycle Management vs. Billing: What You Need"
                            />
                        </div>
                    </div>

                    <div className="max-w-[1200px] mx-auto px-6 mt-12">
                        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-primary text-white">
                                        <th className="px-6 py-4 text-left font-bold">Aspect</th>
                                        <th className="px-6 py-4 text-left font-bold">Standard Billing</th>
                                        <th className="px-6 py-4 text-left font-bold">Strategic RCM</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparison.map((row, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                                            <td className="px-6 py-4 font-bold text-trust-navy">{row.feature}</td>
                                            <td className="px-6 py-4 text-slate-600">{row.billing}</td>
                                            <td className="px-6 py-4 text-green-700 font-semibold">{row.rcm}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white text-center">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <h2 className="text-3xl font-bold text-trust-navy mb-6">Upgrade Your Financial Strategy</h2>
                        <p className="text-slate-600 mb-8">
                            Virtual Minds doesn't just do data entry. We partner with your billing team to implement full-cycle revenue management.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined">trending_up</span>
                            Analyze My Revenue Cycle
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
