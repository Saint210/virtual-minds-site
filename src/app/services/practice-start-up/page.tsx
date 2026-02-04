import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import PracticeStartupServiceSchema from "@/components/seo/PracticeStartupServiceSchema";
import RelatedInsights from "@/components/services/RelatedInsights";

export const metadata: Metadata = {
    title: "Psychiatry Practice Start-Up Services | California | Virtual Minds",
    description: "Comprehensive start-up support for California psychiatric practices. EHR implementation, contract negotiation, and HIPAA compliance setup.",
    alternates: {
        canonical: 'https://thevirtualminds.com/services/practice-start-up'
    },
    openGraph: {
        title: "Psychiatry Practice Start-Up Services | California",
        description: "Comprehensive start-up support for California psychiatric practices. EHR implementation, contract negotiation, and HIPAA compliance setup.",
        url: "https://thevirtualminds.com/services/practice-start-up",
        siteName: "Virtual Minds",
        images: [{
            url: "https://thevirtualminds.com/images/og-startup-guide.png",
            width: 1200,
            height: 630,
            alt: "Psychiatry Practice Start-Up Services"
        }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Psychiatry Practice Start-Up Services | California",
        description: "Comprehensive start-up support for California psychiatric practices. EHR implementation, contract negotiation, and HIPAA compliance.",
        images: ["https://thevirtualminds.com/images/og-startup-guide.png"],
    },
};

export default function PracticeStartUpPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white font-sans">
            <PracticeStartupServiceSchema />
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Practice Start-Up" }
                ]}
            />
            <main className="flex-grow">

                {/* EXECUTIVE START-UP HERO */}
                <section className="relative pt-4 md:pt-6 pb-12 md:pb-16 overflow-hidden bg-[#FAF8F3]">
                    {/* Immersive Background Tokens */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                            {/* LEFT: Copy & Authority (60%) */}
                            <div className="lg:w-[60%]">
                                <div className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-5 py-2 text-trust-navy text-xs font-black mb-4 shadow-sm">
                                    <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                                    <span className="tracking-[0.2em] uppercase text-primary">Operational Infrastructure</span>
                                </div>

                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy mb-4 leading-[1.1] tracking-tight">
                                    Psychiatric Practice <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                                        Start-Up Support.
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-4 max-w-2xl">
                                    Specialized operational setup for new California psychiatric practices.
                                    <span className="text-trust-navy font-bold border-b-2 border-primary/30 mx-1">EHR implementation, policy development,</span>
                                    and logistical support built for day-one readiness.
                                </p>

                                {/* Institutional Social Proof */}
                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-12 h-12 rounded-full bg-white border-[3px] border-[#FAF8F3] flex items-center justify-center overflow-hidden shadow-lg relative z-[10]">
                                                <Image
                                                    src={`https://i.pravatar.cc/150?u=${i + 170}`}
                                                    alt="Startup Specialist"
                                                    width={48}
                                                    height={48}
                                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm text-slate-500 font-medium leading-tight text-center sm:text-left">
                                        <p><strong className="text-trust-navy italic">Launching Private Practices across California</strong></p>
                                        <p className="text-slate-400">Comprehensive build-outs for specialized psychiatric clinics.</p>
                                    </div>
                                </div>

                                {/* PRACTICE ECONOMICS BAR - STARTUP SPECIFIC */}
                                <div className="flex flex-wrap items-center gap-x-12 gap-y-6 py-6 border-y border-slate-200/60 mb-8">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">Implementation</p>
                                        <p className="text-lg font-bold text-trust-navy">90-Day Setup</p>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-slate-200" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">Regulatory Health</p>
                                        <p className="text-lg font-bold text-trust-navy">CA-Compliance+</p>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-slate-200" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">Status</p>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                            <p className="text-lg font-bold text-trust-navy italic">Practice Ready</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-5">
                                    <Link href="/book-consultation" className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                                        <span className="material-symbols-outlined">schedule</span>
                                        See My Recovery Plan
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT: Visual System Card (40%) */}
                            <div className="lg:w-[40%] relative w-full">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-50"></div>
                                    <div className="relative aspect-[4/5] w-full rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-100 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
                                        <Image
                                            src="/images/practice-startup-blueprint-v4.png"
                                            alt="Psychiatry Practice Strategic Blueprint"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-trust-navy to-transparent h-1/2 flex items-end p-12">
                                            <div className="mb-4">
                                                <h3 className="text-3xl font-serif font-bold !text-white leading-tight">Start-Up <br />Strategic <br />Matrix</h3>
                                                <p className="!text-slate-100/70 text-sm leading-relaxed mt-4">
                                                    Phase-based implementation from business entity formation to clinical EHR customization and patient intake logic.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Floating badge */}
                                    <div className="absolute -top-6 -right-6 bg-white p-5 rounded-[2rem] shadow-2xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                                        <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined font-bold">verified_user</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Security Status</p>
                                            <p className="text-base font-bold text-trust-navy">Practice Ready</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HIGH-CONTRAST PAIN SECTION */}
                <section className="py-24 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] p-12 md:p-20 rounded-[40px] text-white relative overflow-hidden shadow-2xl border border-white/5">
                            <div className="max-w-3xl">
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight !text-white" style={{ color: 'white' }}>
                                    <span className="text-[#FFFFFF]">The "First Year" Reality Check</span>
                                </h2>
                                <p className="text-xl text-slate-300 mb-12 leading-relaxed">
                                    50% of new mental health practices struggle within the first year not because of clinical ability, but because of <span className="text-primary font-bold italic">administrative exhaustion.</span>
                                </p>
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <h4 className="text-xl font-bold !text-white italic">The Start-Up Gaps:</h4>
                                        <ul className="space-y-4 text-slate-300">
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-primary text-sm">warning</span>
                                                Manual, non-compliant intake forms
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-[#D2691E] text-sm">warning</span>
                                                EHR systems that hinder flow
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-[#D2691E] text-sm">warning</span>
                                                Poorly negotiated payer contracts
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p-8 bg-white/5 rounded-3xl border border-white/10 flex flex-col justify-center">
                                        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Our Solution</p>
                                        <p className="text-lg text-white font-medium italic">We install the "Practice Operating System" so you start profitable on Day 1.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TURNKEY START-UP SERVICES */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-serif font-bold text-trust-navy mb-4">Turnkey Start-Up Services</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto">Specific to the unique regulatory landscape of California Psychiatry.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Review Current Plans",
                                    desc: "Feasibility analysis and business plan refinement based on modern psychiatric demand data.",
                                    icon: "edit_document"
                                },
                                {
                                    title: "Office Set-Up",
                                    desc: "Physical or virtual location logistics, leasing guidance, and digital environment security.",
                                    icon: "apartment"
                                },
                                {
                                    title: "EHR Implementation",
                                    desc: "Selection and custom configuration of SimplePractice, Kareo, or Jane App for your clinical workflow.",
                                    icon: "monitor_heart"
                                },
                                {
                                    title: "Contract Review",
                                    desc: "Expert support in negotiating with payers and vendors to ensure baseline financial success.",
                                    icon: "gavel"
                                },
                                {
                                    title: "HIPAA Compliance",
                                    desc: "Establishing secure policies, BAA management, and California state privacy risk assessments.",
                                    icon: "shield_lock"
                                },
                                {
                                    title: "Experience Policies",
                                    desc: "Drafting intake procedures and patient experience protocols that reduce churn from the start.",
                                    icon: "history_edu"
                                }
                            ].map((service, i) => (
                                <div key={i} className="p-10 bg-[#FAF8F3] rounded-[40px] border border-primary/5 hover:border-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/5 group">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FEATURED RESOURCE SECTION */}
                <section className="py-24 bg-gradient-to-br from-[#FAF8F3] to-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="bg-white rounded-[40px] shadow-2xl border border-primary/10 overflow-hidden">
                            <div className="grid lg:grid-cols-2 gap-0">
                                {/* Left: Content */}
                                <div className="p-12 lg:p-16 flex flex-col justify-center">
                                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6 w-fit">
                                        <span className="material-symbols-outlined text-primary text-[16px]">school</span>
                                        Featured Authority Resource
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-trust-navy mb-6 leading-tight">
                                        Complete Practice Start-Up Guide
                                    </h3>
                                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                        Our <strong className="text-trust-navy">3,500-word comprehensive roadmap</strong> covers every phase of launching a California psychiatry practice—from licensing to your first patient. Used by 100+ psychiatrists statewide.
                                    </p>
                                    <div className="space-y-4 mb-8">
                                        <div className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                            <p className="text-slate-600"><strong className="text-trust-navy">12-Month Timeline</strong> with phase-based milestones</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                            <p className="text-slate-600"><strong className="text-trust-navy">California-Specific</strong> regulatory compliance</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                            <p className="text-slate-600"><strong className="text-trust-navy">EHR Selection Matrix</strong> for psychiatric workflows</p>
                                        </div>
                                    </div>
                                    <Link
                                        href="/resources/psychiatry-practice-startup-guide"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold text-lg rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 w-fit"
                                    >
                                        Read the Complete Guide
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </Link>
                                </div>
                                {/* Right: Visual */}
                                <div className="relative aspect-square lg:aspect-auto bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center p-12">
                                    <div className="relative w-full h-full max-w-md">
                                        <Image
                                            src="/images/practice-startup-blueprint-v4.png"
                                            alt="Psychiatry Practice Startup Strategic Blueprint"
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <RelatedInsights
                    title="Start-Up Intelligence"
                    subtitle="Critical data for the planning phase."
                    insights={[
                        {
                            title: "The Hidden Costs of Starting a Private Psychiatry Practice in CA (2025 Data)",
                            category: "Financial Planning",
                            excerpt: "Budgeting beyond rent: A breakdown of malpractice, software, and compliance costs you might miss.",
                            href: "/resources/startup-costs-breakdown",
                            readTime: "7 min read"
                        },
                        {
                            title: "Telehealth vs. Office: Which is More Profitable for New Psychiatrists?",
                            category: "Business Model",
                            excerpt: "Analyzing the overhead vs. reimbursement rates for hybrid models in California.",
                            href: "/resources/telehealth-vs-office-profitability",
                            readTime: "5 min read"
                        },
                        {
                            title: "Insurance Credentialing Timeline Reality Check",
                            category: "Payer Relations",
                            excerpt: "Why it takes 90-120 days to get paid, and how to survive the 'cash-flow gap'.",
                            href: "/resources/credentialing-timeline-guide",
                            readTime: "4 min read"
                        }
                    ]}
                />

                {/* FINAL CTA */}
                <section className="bg-gradient-to-br from-[#131313] to-[#252525] py-32 relative overflow-hidden text-center">
                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic !text-white leading-tight" style={{ color: 'white' }}>
                            <span className="text-[#FFFFFF]">Your Practice Starts Here.</span>
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium">
                            Ready to launch? Book your Strategy Call to define your launch timeline and roadmap.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="px-12 py-5 bg-primary text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform inline-block"
                        >
                            Book Your Start-Up Strategy Call
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    );
}
