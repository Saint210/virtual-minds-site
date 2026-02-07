import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogSidebar from "@/components/blog/BlogSidebar";

export const metadata = {
    title: "Implementing Efficiency Models in Mental Health Clinics | Virtual Minds",
    description: "Apply Lean principles to your mental health clinic. Reduce waste, improve patient flow, and increase staff satisfaction with proven efficiency models.",
    openGraph: {
        title: "Efficiency Models in Mental Health Clinics",
        description: "Apply Lean principles to reduce waste and improve patient flow.",
        url: "https://thevirtualminds.com/blog/implementing-efficiency-models-mental-health",
        siteName: "Virtual Minds",
        images: [
            {
                url: "https://thevirtualminds.com/images/hero-new.png",
                width: 1200,
                height: 900,
                alt: "Clinic Efficiency",
            },
        ],
        locale: "en_US",
        type: "article",
    },
};

const tableOfContents = [
    { id: "lean-clinic", title: "The Lean Clinic Concept" },
    { id: "deadly-wastes", title: "The 4 Deadly Wastes" },
    { id: "streamline", title: "Streamline Operations" }
];

const relatedArticles = [
    {
        title: "Optimizing Patient Workflow in Psychiatry",
        slug: "optimizing-patient-workflow-psychiatry",
        category: "Workflow"
    },
    {
        title: "Operational Process Review for Mental Health Practices",
        slug: "operational-process-review-mental-health-practices",
        category: "Practice Growth"
    },
    {
        title: "Revenue Cycle Management vs. Billing",
        slug: "revenue-cycle-management-vs-billing",
        category: "Billing"
    }
];

const wastes = [
    { title: "Waiting", text: "Patients waiting for providers, or providers waiting for intake info." },
    { title: "Defects", text: "Billing errors requiring rework or incomplete charts." },
    { title: "Motion", text: "Clicking through 10 screens to find one piece of data." },
    { title: "Underutilized Talent", text: "MDs doing data entry instead of clinical work." },
];

import KeyTakeaways from "@/components/blog/KeyTakeaways";

export default function EfficiencyModels() {
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
                                <span className="text-trust-navy">Efficiency Models</span>
                            </nav>

                            {/* Strategic Briefing Badge */}
                            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <span className="material-symbols-outlined text-primary text-[16px]">speed</span>
                                2026 Operational Excellence
                            </div>

                            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                                Efficiency Models in <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                                    Mental Health.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-12 max-w-2xl">
                                Applying Lean principles to psychiatric operations to eliminate cognitive waste and reclaim clinical focus.
                            </p>

                            {/* PRACTICE ECONOMICS BRIEFING BAR */}
                            <div className="flex flex-wrap items-center gap-x-12 gap-y-8 py-10 border-y border-slate-200/60">
                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Strategy Pillar</p>
                                    <p className="text-xl font-bold text-trust-navy">Lean Methodology</p>
                                </div>

                                <div className="hidden md:block h-12 w-px bg-slate-200" />

                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Growth Multiplier</p>
                                    <p className="text-xl font-bold text-trust-navy">Cognitive Output</p>
                                </div>

                                <div className="hidden md:block h-12 w-px bg-slate-200" />

                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Administrative Logic</p>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <p className="text-xl font-bold text-trust-navy italic">Friction Removal</p>
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
                                    <KeyTakeaways
                                        takeaways={[
                                            {
                                                point: "Cognitive Waste",
                                                detail: "Eliminate context switching by removing the need for clinicians to hunt for data or forms."
                                            },
                                            {
                                                point: "Lean Methodology",
                                                detail: "Apply manufacturing efficiency principles to the clinical workflow to prioritize patient care over paperwork."
                                            },
                                            {
                                                point: "The 4 Wastes",
                                                detail: "Target Waiting, Defects, Motion, and Underutilized Talent as the primary enemies of clinic ROI."
                                            },
                                            {
                                                point: "System Logic",
                                                detail: "Standardize intake and documentation protocols to create a predictable, scalable practice foundation."
                                            }
                                        ]}
                                    />
                                    {/* STRATEGIC BRIEFING INTRODUCTION (60/40) */}
                                    <div className="flex flex-col lg:flex-row gap-12 my-16 items-start">
                                        <div className="lg:w-[60%] order-2 lg:order-1">
                                            <h2 id="introduction" className="text-3xl font-bold text-trust-navy mt-0 mb-6">The &quot;Lean&quot; Clinic Model</h2>
                                            <p className="text-xl text-slate-600 font-display leading-relaxed mb-6">
                                                Efficiency isn&apos;t about working harder; it&apos;s about removing friction. In mental health, we focus on removing <strong>cognitive waste</strong>—the context switching that occurs when a clinician has to hunt for a form or correct a billing code.
                                            </p>
                                            <p className="text-slate-600 leading-relaxed mb-0">
                                                Every redundant administrative task steals focus from quality care. By applying Lean principles to psychiatric operations, we create a predictable, scalable practice foundation that allows specialists to operate at their highest clinical capacity.
                                            </p>
                                        </div>

                                        <div className="lg:w-[40%] order-1 lg:order-2 group w-full">
                                            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-xl aspect-[4/5] bg-slate-50">
                                                <Image
                                                    src="/images/visual-intel-efficiency.png"
                                                    alt="Implementing Efficiency Models in Mental Health"
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    priority
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/20 via-transparent to-transparent pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>

                                    <h2 id="deadly-wastes" className="text-3xl font-bold text-trust-navy mt-12 mb-6">The 4 Deadly Wastes in Clinics</h2>
                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-8">
                                        <ul className="space-y-4">
                                            {wastes.map((item, i) => (
                                                <li key={i} className="flex gap-3">
                                                    <span className="material-symbols-outlined text-red-500">cancel</span>
                                                    <div>
                                                        <strong className="text-trust-navy">{item.title}:</strong>
                                                        <span className="text-slate-600 ml-1">{item.text}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <h2 id="streamline" className="text-3xl font-bold text-trust-navy mt-12 mb-6">Streamline Your Operations</h2>
                                </article>
                            </div>

                            <BlogSidebar
                                tableOfContents={tableOfContents}
                                relatedArticles={relatedArticles}
                                currentUrl="https://thevirtualminds.com/blog/implementing-efficiency-models-mental-health"
                                articleTitle="Implementing Efficiency Models in Mental Health Clinics"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white text-center">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <h2 className="text-3xl font-bold text-trust-navy mb-6">Ready to Optimize?</h2>
                        <p className="text-slate-600 mb-8">
                            Let Virtual Minds implement these efficiency models for you. We build the systems so you can focus on the patients.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="bg-primary hover:bg-[#C19F30] text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined">speed</span>
                            Boost Clinic Efficiency
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
