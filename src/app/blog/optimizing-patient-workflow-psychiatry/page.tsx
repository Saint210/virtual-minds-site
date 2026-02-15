import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogSidebar from "@/components/blog/BlogSidebar";

export const metadata = {
    title: "Optimizing Patient Workflow in Psychiatry | Virtual Minds",
    description: "Streamline your patient journey from intake to follow-up. Learn how opportunities for automation can enhance patient experience and practice efficiency.",
    openGraph: {
        title: "Optimizing Patient Workflow in Psychiatry",
        description: "Streamline your patient journey from intake to follow-up.",
        url: "https://thevirtualminds.com/blog/optimizing-patient-workflow-psychiatry",
        siteName: "Virtual Minds",
        images: [
            {
                url: "https://thevirtualminds.com/images/hero-new.webp",
                width: 1200,
                height: 900,
                alt: "Patient Workflow Optimization",
            },
        ],
        locale: "en_US",
        type: "article",
    },
};

const tableOfContents = [
    { id: "introduction", title: "Why Workflow Matters" },
    { id: "pillars", title: "4 Pillars of Streamlined Workflow" },
    { id: "digital-intake", title: "Digital Intake Systems" },
    { id: "automation", title: "Automation Opportunities" }
];

const relatedArticles = [
    {
        title: "Implementing Efficiency Models in Mental Health Clinics",
        slug: "implementing-efficiency-models-mental-health",
        category: "Efficiency"
    },
    {
        title: "Operational Process Review for Mental Health Practices",
        slug: "operational-process-review-mental-health-practices",
        category: "Practice Growth"
    },
    {
        title: "How to Scale a Private Psychiatry Practice",
        slug: "how-to-scale-private-psychiatry-practice",
        category: "Practice Growth"
    }
];

const steps = [
    {
        step: "1. Digital Intake",
        description: "Replace PDF attachments with secure, mobile-friendly digital forms that sync directly to your EHR.",
    },
    {
        step: "2. Automated Scheduling",
        description: "Allow patients to book and reschedule via a controlled portal, reducing phone tag.",
    },
    {
        step: "3. Pre-Visit Prep",
        description: "Automate reminders and pre-visit questionnaires to ensure sessions start on time.",
    },
    {
        step: "4. Follow-Up Loops",
        description: "Trigger automated check-ins and refill reminders based on appointment outcomes.",
    },
];

import KeyTakeaways from "@/components/blog/KeyTakeaways";

export default function PatientWorkflowOptimization() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
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
                                <span className="text-trust-navy">Workflow Optimization</span>
                            </nav>

                            {/* Strategic Briefing Badge */}
                            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <span className="material-symbols-outlined text-primary text-[16px]">patient_list</span>
                                2026 Patient Experience Series
                            </div>

                            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                                Optimizing Patient <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-hover to-primary animate-gradient-x">
                                    Workflow In Psychiatry.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-12 max-w-2xl">
                                Standardizing the patient journey from digital intake to follow-up loops to maximize therapeutic alliance and practice efficiency.
                            </p>

                            {/* PRACTICE ECONOMICS BRIEFING BAR */}
                            <div className="flex flex-wrap items-center gap-x-12 gap-y-8 py-10 border-y border-slate-200/60">
                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Strategy Pillar</p>
                                    <p className="text-xl font-bold text-trust-navy">Patient Journey</p>
                                </div>

                                <div className="hidden md:block h-12 w-px bg-slate-200" />

                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Growth Multiplier</p>
                                    <p className="text-xl font-bold text-trust-navy">Treatment Adherence</p>
                                </div>

                                <div className="hidden md:block h-12 w-px bg-slate-200" />

                                <div className="space-y-2">
                                    <p className="text-[11px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Administrative Logic</p>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        <p className="text-xl font-bold text-trust-navy italic">Flow Optimization</p>
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
                                                point: "Seamless Intake",
                                                detail: "Replace PDF attachments with secure, mobile-friendly digital forms that sync directly to your EHR."
                                            },
                                            {
                                                point: "Automated Reminders",
                                                detail: "Reduce no-show rates by 30% with multi-channel appointment and refill reminder sequences."
                                            },
                                            {
                                                point: "Therapeutic Alliance",
                                                detail: "Standardize administrative touchpoints to allow more focus on patient connection during the session."
                                            },
                                            {
                                                point: "Feedback Loops",
                                                detail: "Trigger automated clinical outcome measures (PHQ-9/GAD-7) to demonstrate treatment efficacy."
                                            }
                                        ]}
                                    />
                                    {/* STRATEGIC BRIEFING INTRODUCTION (60/40) */}
                                    <div className="flex flex-col lg:flex-row gap-12 my-16 items-start">
                                        <div className="lg:w-[60%] order-2 lg:order-1">
                                            <h2 id="introduction" className="text-3xl font-bold text-trust-navy mt-0 mb-6">Why Workflow Optimization Matters</h2>
                                            <p className="text-xl text-slate-600 font-display leading-relaxed mb-6">
                                                A &quot;patient workflow&quot; encompasses every interaction a patient has with your practice, from the moment they land on your website to their ongoing treatment plan. When this workflow is disjointed, patients feel neglected and staff feel overwhelmed.
                                            </p>
                                            <p className="text-slate-600 leading-relaxed mb-0">
                                                Optimization isn&apos;t just about speed; it&apos;s about <strong>clarity and consistency</strong>. By standardizing these steps, you minimize errors and maximize the therapeutic alliance. This is a key component of <Link href="/blog/implementing-efficiency-models-mental-health" className="text-primary hover:underline font-bold">implementing efficiency models</Link> in your clinic.
                                            </p>
                                        </div>

                                        <div className="lg:w-[40%] order-1 lg:order-2 group w-full">
                                            <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-xl aspect-[4/5] bg-slate-50">
                                                <Image
                                                    src="/images/visual-intel-workflow.png"
                                                    alt="Optimizing Patient Workflow in Psychiatry"
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                    priority
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/20 via-transparent to-transparent pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 mb-12">
                                        <h3 className="text-2xl font-bold text-trust-navy mb-4">The Golden Rule of Workflow</h3>
                                        <p className="italic text-lg mb-0">"Never ask a human to do what a computer can do better. Never ask a computer to do what only a human can do."</p>
                                    </div>

                                    <h2 id="pillars" className="text-3xl font-bold text-trust-navy mt-12 mb-6">4 Pillars of a Streamlined Workflow</h2>
                                </article>
                            </div>

                            <BlogSidebar
                                tableOfContents={tableOfContents}
                                relatedArticles={relatedArticles}
                                currentUrl="https://thevirtualminds.com/blog/optimizing-patient-workflow-psychiatry"
                                articleTitle="Optimizing Patient Workflow in Psychiatry"
                            />
                        </div>
                    </div>

                    <div className="max-w-[1200px] mx-auto px-6 mt-12 bg-slate-50 py-12 rounded-2xl">
                        <h3 className="font-display text-2xl font-bold text-trust-navy mb-8 text-center">
                            4 Key Steps to Implement
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {steps.map((item, index) => (
                                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                    <h3 className="text-xl font-bold text-primary mb-3">{item.step}</h3>
                                    <p className="text-slate-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-[1200px] mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold text-trust-navy mb-6">Need a Workflow Makeover?</h2>
                        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                            We specialize in redesigning patient journeys for California psychiatric practices. Let's build a system that works for you.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center gap-2"
                        >
                            <span className="material-symbols-outlined">build</span>
                            Design My Workflow
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
