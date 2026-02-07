import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import AdminLeakageCalculator from "@/components/conversion/AdminLeakageCalculator";
import StartupGuideSchema from "@/components/seo/StartupGuideSchema";

export const metadata: Metadata = {
    title: "Complete Guide to Starting a Psychiatry Practice in California | Virtual Minds",
    description: "Step-by-step roadmap for starting a psychiatry practice in California. Covers licensing, business setup, EHR selection, HIPAA compliance, credentialing, and more. Used by 100+ California psychiatrists.",
    alternates: {
        canonical: 'https://thevirtualminds.com/resources/psychiatry-practice-startup-guide'
    },
    openGraph: {
        title: "Complete Guide to Starting a Psychiatry Practice in California",
        description: "Step-by-step roadmap for starting a psychiatry practice in California. Covers licensing, business setup, EHR selection, HIPAA compliance, credentialing, and more.",
        url: "https://thevirtualminds.com/resources/psychiatry-practice-startup-guide",
        siteName: "Virtual Minds",
        images: [{
            url: "https://thevirtualminds.com/images/og-startup-guide.png",
            width: 1200,
            height: 630,
            alt: "Complete Guide to Starting a Psychiatry Practice in California"
        }],
        locale: "en_US",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Complete Guide to Starting a Psychiatry Practice in California",
        description: "Step-by-step roadmap for starting a psychiatry practice in California. Covers licensing, business setup, credentialing, and more.",
        images: ["https://thevirtualminds.com/images/og-startup-guide.png"],
    },
};

export default function PsychiatryPracticeStartupGuidePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <StartupGuideSchema />
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Resources", href: "/resources" },
                    { label: "Psychiatry Practice Startup Guide" }
                ]}
            />
            <main className="flex-grow">
                {/* PREMIUM BENTO HERO SECTION */}
                <section className="relative pt-12 md:pt-20 pb-24 overflow-hidden bg-[#FAF8F3]">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                            {/* Left Text Column: The Vision (5 Cols) */}
                            <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-12">
                                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8 w-fit shadow-sm">
                                    <span className="material-symbols-outlined text-[16px]">menu_book</span>
                                    The Executive Blueprint
                                </div>
                                <h1 className="font-serif text-5xl md:text-7xl font-black text-trust-navy mb-8 leading-[1.15] tracking-tight">
                                    Strategic Practice <br />
                                    <span className="text-primary">Architecture.</span>
                                </h1>
                                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-lg">
                                    A professional-grade <strong className="text-trust-navy">3,500-word roadmap</strong> for psychiatrists ready to engineer an elite private practice in California.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="#guide-intro"
                                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary border border-primary hover:bg-[#B8860B] text-white font-bold text-lg rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] justify-center"
                                    >
                                        Read The Blueprint
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Bento Grid (7 Cols) */}
                            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-full min-h-[550px]">

                                {/* Main Visual (Large) */}
                                <div className="md:col-span-4 md:row-span-1 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden relative group">
                                    <Image
                                        src="/images/practice-startup-blueprint-v4.png"
                                        alt="Psychiatry Practice Startup Blueprint Physical"
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        priority
                                    />
                                    {/* Glassmorphism Overlay Pill */}
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl overflow-hidden group/pill">
                                            <div className="absolute inset-0 bg-gradient-to-r from-trust-navy/20 to-transparent pointer-events-none" />
                                            <div className="relative z-10 flex items-center justify-between">
                                                <div>
                                                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-1">Module Alpha</div>
                                                    <div className="text-xl md:text-2xl font-serif font-bold text-white leading-none">12-Month Operational Timeline</div>
                                                </div>
                                                <div className="size-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover/pill:bg-white/20 transition-colors">
                                                    <span className="material-symbols-outlined">explore</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Feature: CA Compliance */}
                                <div className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl flex flex-col items-start gap-12 group hover:border-primary/20 transition-all duration-300">
                                    <div className="size-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center text-primary shadow-inner group-hover:bg-primary/10 transition-colors">
                                        <span className="material-symbols-outlined text-3xl font-light">verified</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-serif font-bold text-trust-navy mb-3">CA Regulatory Compliance</h3>
                                        <p className="text-sm text-slate-500 font-medium leading-relaxed">Full CPOM and Medical Board credentialing checklists tailored for California.</p>
                                    </div>
                                </div>

                                {/* Feature: EHR Matrix */}
                                <div className="md:col-span-2 bg-trust-navy rounded-[2.5rem] p-10 shadow-2xl flex flex-col items-start gap-10 group hover:shadow-primary/5 transition-all duration-300 border border-white/5">
                                    <div className="size-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-primary shadow-inner group-hover:bg-white/20 transition-all">
                                        <span className="material-symbols-outlined text-3xl font-light">analytics</span>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-2xl font-serif font-bold mb-3 !text-white">EHR Selection Matrix</h3>
                                        <p className="text-base !text-slate-300 font-medium leading-relaxed">Head-to-head operational comparison of psychiatric-specific systems.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* INTRODUCTION & OVERVIEW */}
                <section className="py-32 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-8">
                                Why Start a Private Psychiatry Practice in California?
                            </h2>

                            <p className="text-xl text-slate-700 leading-relaxed mb-6">
                                California faces a <strong>critical shortage of psychiatrists</strong>, with demand far outpacing supply. The state's 39 million residents need mental health services more than ever, creating an unprecedented opportunity for private practice psychiatrists.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 my-12">
                                <div className="bg-[#FAF8F3] p-8 rounded-[2rem] border border-slate-100">
                                    <div className="text-4xl font-black text-primary mb-2">$300K+</div>
                                    <div className="text-sm font-bold text-slate-600">Average Annual Income</div>
                                </div>
                                <div className="bg-[#FAF8F3] p-8 rounded-[2rem] border border-slate-100">
                                    <div className="text-4xl font-black text-primary mb-2">6-12</div>
                                    <div className="text-sm font-bold text-slate-600">Months to Launch</div>
                                </div>
                                <div className="bg-[#FAF8F3] p-8 rounded-[2rem] border border-slate-100">
                                    <div className="text-4xl font-black text-primary mb-2">$75K+</div>
                                    <div className="text-sm font-bold text-slate-600">Startup Investment</div>
                                </div>
                            </div>

                            <p className="text-xl text-slate-700 leading-relaxed mb-6">
                                This comprehensive guide covers everything from California licensing requirements to your first patient appointment. Whether you're finishing residency or transitioning from hospital work, this roadmap will help you navigate the complex process of launching your own practice.
                            </p>

                            <div className="bg-gradient-to-br from-[#FAF8F3] to-white border-2 border-primary/20 rounded-[2rem] p-8 my-12">
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4">What This Guide Covers:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700"><strong>California Licensing & Credentialing</strong> - Medical Board requirements, DEA registration, insurance panels</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700"><strong>Business Structure & Legal Setup</strong> - Professional Corporation formation, tax setup, insurance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700"><strong>Location & Office Setup</strong> - Traditional vs. telehealth vs. hybrid models</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700"><strong>EHR/EMR Selection</strong> - Top systems for psychiatry, HIPAA compliance, implementation</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700"><strong>Financial Planning & Budgeting</strong> - Startup costs, revenue projections, break-even analysis</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700"><strong>Insurance Credentialing & Billing</strong> - Top California panels, superbills, revenue cycle management</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700"><strong>HIPAA & CMIA Compliance</strong> - California-specific privacy requirements</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700"><strong>Staffing & Administrative Support</strong> - When to hire, <Link href="/services/virtual-assistant" className="text-primary hover:text-[#B8860B] underline font-semibold">virtual assistants for psychiatrists</Link> vs. in-house staff</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700"><strong>Marketing & Patient Acquisition</strong> - Building your online presence, referral networks</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <span className="text-slate-700"><strong>Common Pitfalls to Avoid</strong> - Learn from others' mistakes</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 1: CALIFORNIA LICENSING & CREDENTIALING */}
                <section className="py-32 bg-[#EDE8E0]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                            <span className="material-symbols-outlined text-primary text-[16px]">badge</span>
                            Step 1
                        </div>

                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-8">
                            California Licensing & Credentialing
                        </h2>

                        <p className="text-xl text-slate-700 leading-relaxed mb-8">
                            Before you can see your first patient, you must obtain proper licensing and credentialing. California has specific requirements that differ from other states, and the process can take <strong>3-6 months</strong>.
                        </p>

                        <div className="space-y-8">
                            {/* Medical Board License */}
                            <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-200">
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">medical_information</span>
                                    Physician & Surgeon's License
                                </h3>
                                <p className="text-slate-700 mb-4">
                                    Issued by the <strong>Medical Board of California</strong>, this is your primary license to practice medicine in the state.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Education:</strong> Graduation from an accredited medical school (LCME or AOA)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Postgraduate Training:</strong> 36 months of ACGME-accredited residency (24 months minimum for initial license, 36 months for renewal)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Examinations:</strong> USMLE Steps 1, 2, and 3 (or COMLEX equivalent)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Background Check:</strong> Criminal history review (certain felonies may disqualify)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Renewal:</strong> Every 2 years with 50 hours of CME</span>
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-[#FAF8F3] rounded-xl border border-primary/20">
                                    <p className="text-sm text-slate-600"><strong>Timeline:</strong> 4-8 weeks for application processing</p>
                                    <p className="text-sm text-slate-600"><strong>Cost:</strong> $842 application fee + $790 initial license fee</p>
                                </div>
                            </div>

                            {/* Board Certification */}
                            <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-200">
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
                                    Psychiatry Board Certification
                                </h3>
                                <p className="text-slate-700 mb-4">
                                    While not legally required, <strong>board certification by the American Board of Psychiatry and Neurology (ABPN)</strong> is essential for insurance credentialing and patient trust.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">Completion of ACGME-accredited psychiatry residency</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">Pass Part 1 (written exam) and Part 2 (oral exam)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">Recertification every 10 years via MOC program</span>
                                    </li>
                                </ul>
                            </div>

                            {/* DEA Registration */}
                            <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-200">
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">medication</span>
                                    DEA Registration
                                </h3>
                                <p className="text-slate-700 mb-4">
                                    Required to prescribe controlled substances (Schedules II-V), which is essential for psychiatric practice.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">Apply online at <a href="https://www.deadiversion.usdoj.gov/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">DEA.gov</a></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">Separate registration for each practice location</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">California CURES database enrollment (controlled substance monitoring)</span>
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-[#FAF8F3] rounded-xl border border-primary/20">
                                    <p className="text-sm text-slate-600"><strong>Timeline:</strong> 4-6 weeks</p>
                                    <p className="text-sm text-slate-600"><strong>Cost:</strong> $888 for 3 years</p>
                                </div>
                            </div>

                            {/* CAQH & NPI */}
                            <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-200">
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">badge</span>
                                    CAQH & NPI Enrollment
                                </h3>
                                <p className="text-slate-700 mb-4">
                                    Required for insurance credentialing and billing.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>NPI (National Provider Identifier):</strong> Free 10-digit number from NPPES</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>CAQH ProView:</strong> Universal credentialing database used by most insurers</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">Update CAQH profile quarterly to maintain active status</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Insurance Credentialing */}
                            <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-200">
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">health_and_safety</span>
                                    Insurance Panel Credentialing
                                </h3>
                                <p className="text-slate-700 mb-4">
                                    If you plan to accept insurance (vs. cash-only), start credentialing <strong>immediately</strong>. This is the longest part of the process.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Top California Panels:</strong> Blue Shield CA, Anthem Blue Cross, Aetna, UnitedHealthcare, Cigna</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Timeline:</strong> 90-180 days per panel (start early!)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Requirements:</strong> Active CA license, board certification, malpractice insurance, completed CAQH</span>
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                                    <p className="text-sm text-amber-900"><strong>⚠️ Pro Tip:</strong> Consider hiring a credentialing specialist or <Link href="/services/practice-start-up" className="text-primary hover:underline">Virtual Minds' startup service</Link> to handle this complex process.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: BUSINESS STRUCTURE & LEGAL SETUP */}
                <section className="py-32 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                            <span className="material-symbols-outlined text-primary text-[16px]">business</span>
                            Step 2
                        </div>

                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-8">
                            Business Structure & Legal Setup
                        </h2>

                        <p className="text-xl text-slate-700 leading-relaxed mb-8">
                            California's <strong>Corporate Practice of Medicine (CPOM) doctrine</strong> requires physicians to form a <strong>Professional Corporation (PC)</strong> to offer medical services. This is a critical legal requirement unique to California.
                        </p>

                        <div className="space-y-8">
                            {/* Professional Corporation */}
                            <div className="bg-gradient-to-br from-[#FAF8F3] to-white p-8 rounded-[2rem] border-2 border-primary/30">
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">corporate_fare</span>
                                    Professional Corporation (PC) Formation
                                </h3>
                                <p className="text-slate-700 mb-4">
                                    <strong>Why PC?</strong> California law prohibits general business corporations and LLCs from owning medical practices. A PC ensures compliance with CPOM regulations.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">File Articles of Incorporation with California Secretary of State</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">All shareholders must be licensed physicians</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">Adopt corporate bylaws and issue stock certificates</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">File Statement of Information (Form SI-550) within 90 days</span>
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-white rounded-xl border border-slate-200">
                                    <p className="text-sm text-slate-600"><strong>Cost:</strong> $100 filing fee + $800 annual franchise tax</p>
                                    <p className="text-sm text-slate-600"><strong>Recommendation:</strong> Hire a healthcare attorney ($1,500-$3,000)</p>
                                </div>
                            </div>

                            {/* EIN & Tax Setup */}
                            <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-200">
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">receipt_long</span>
                                    EIN & Tax Setup
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Federal EIN:</strong> Apply free at <a href="https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">IRS.gov</a></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>S-Corp Election:</strong> File Form 2553 within 75 days to reduce self-employment tax</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>California Tax Registration:</strong> Register with CA Franchise Tax Board and EDD</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Business Bank Account */}
                            <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-200">
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
                                    Business Bank Account
                                </h3>
                                <p className="text-slate-700 mb-4">
                                    Separate your personal and business finances from day one.
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">Open business checking and savings accounts</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">Get business credit card for expenses (build credit history)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">Consider merchant services for patient payments</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Insurance */}
                            <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-200">
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">shield</span>
                                    Professional & Business Insurance
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Malpractice Insurance:</strong> $1M/$3M coverage required for credentialing ($8K-$15K/year)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>General Liability:</strong> Covers slip-and-fall, property damage ($500-$1,500/year)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Cyber Liability:</strong> HIPAA breach protection ($1,000-$3,000/year)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Workers' Comp:</strong> Required if you have employees (varies by payroll)</span>
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                                    <p className="text-sm text-amber-900"><strong>⚠️ Important:</strong> Incorporation does NOT protect you from malpractice liability. Always maintain adequate coverage.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ROI CALCULATOR SECTION */}
                <section className="py-32 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <span className="material-symbols-outlined text-primary text-[16px]">calculate</span>
                                ROI Calculator
                            </div>

                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-6">
                                Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Administrative ROI</span>
                            </h2>

                            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                                During your startup phase, <strong>every hour counts</strong>. See how much revenue you're losing to administrative tasks like credentialing, billing, and scheduling—and how Virtual Minds can help you reclaim that time.
                            </p>
                        </div>

                        {/* Calculator Component */}
                        <AdminLeakageCalculator />

                        {/* Context Box */}
                        <div className="mt-12 p-8 bg-gradient-to-br from-[#FAF8F3] to-white rounded-[2rem] border-2 border-primary/20">
                            <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4">Why This Matters for New Practices</h3>
                            <p className="text-slate-700 mb-4">
                                As you're launching your practice, you'll face a critical choice: <strong>spend 15-20 hours per week on administrative tasks</strong>, or invest in support that lets you focus on patient care and revenue generation.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mt-6">
                                <div className="bg-white p-6 rounded-2xl border border-slate-200">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="material-symbols-outlined text-red-500 text-3xl">close</span>
                                        <h4 className="font-bold text-trust-navy">Without Support</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• 20+ hours/week on credentialing, billing, scheduling</li>
                                        <li>• Delayed insurance panel approvals (6+ months)</li>
                                        <li>• Billing errors costing 10-15% of revenue</li>
                                        <li>• Burnout before you even launch</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-6 rounded-2xl border border-primary/30">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
                                        <h4 className="font-bold text-trust-navy">With Virtual Minds</h4>
                                    </div>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        <li>• Focus 100% on patient care and clinical excellence</li>
                                        <li>• Expert credentialing (3-4 months to approval)</li>
                                        <li>• High clean claim rate, maximized reimbursements</li>
                                        <li>• Launch faster, scale sustainably</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <Link
                                    href="/services/practice-start-up"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-[#B8860B] text-white font-bold text-lg rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1"
                                >
                                    <span className="material-symbols-outlined">rocket_launch</span>
                                    Explore Practice Startup Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: LOCATION & OFFICE SETUP */}
                <section className="py-32 bg-[#EDE8E0]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                            <span className="material-symbols-outlined text-primary text-[16px]">location_on</span>
                            Step 3
                        </div>

                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-8">
                            Location & Office Setup
                        </h2>

                        <p className="text-xl text-slate-700 leading-relaxed mb-8">
                            One of your biggest decisions: <strong>traditional office, telehealth-only, or hybrid?</strong> Each model has distinct advantages, costs, and regulatory requirements in California.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-white p-6 rounded-[2rem] border-2 border-slate-200">
                                <div className="text-3xl font-black text-primary mb-2">Traditional</div>
                                <div className="text-sm text-slate-600 mb-4">Physical Office</div>
                                <div className="text-2xl font-bold text-trust-navy">$3K-$8K/mo</div>
                            </div>
                            <div className="bg-gradient-to-br from-primary/10 to-white p-6 rounded-[2rem] border-2 border-primary/30">
                                <div className="text-3xl font-black text-primary mb-2">Hybrid</div>
                                <div className="text-sm text-slate-600 mb-4">Best of Both</div>
                                <div className="text-2xl font-bold text-trust-navy">$1K-$4K/mo</div>
                            </div>
                            <div className="bg-white p-6 rounded-[2rem] border-2 border-slate-200">
                                <div className="text-3xl font-black text-primary mb-2">Telehealth</div>
                                <div className="text-sm text-slate-600 mb-4">100% Virtual</div>
                                <div className="text-2xl font-bold text-trust-navy">$200-$500/mo</div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-200">
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4">California Telehealth Regulations (AB 744)</h3>
                                <p className="text-slate-700 mb-4">
                                    California <strong>allows psychiatrists to provide telehealth services</strong> to patients anywhere in the state, but with specific requirements:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">Must be licensed in California to treat CA patients</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">HIPAA-compliant video platform required (Zoom Healthcare, Doxy.me, SimplePractice)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">Informed consent for telehealth required</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700">Must have emergency protocol for crisis situations</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-200">
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4">Traditional Office Considerations</h3>
                                <p className="text-slate-700 mb-4">If you choose a physical location:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Location:</strong> Accessible, parking, professional building</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Size:</strong> 200-400 sq ft per office (waiting room, bathroom, private office)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>HIPAA Compliance:</strong> Soundproofing, secure file storage, private entrance</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary mt-1 text-xl">arrow_right</span>
                                        <span className="text-slate-700"><strong>Lease:</strong> 3-5 year commitment typical ($3K-$8K/month in major CA cities)</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-[#FAF8F3] to-white p-8 rounded-[2rem] border-2 border-primary/30">
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4">💡 Recommended: Hybrid Model</h3>
                                <p className="text-slate-700 mb-4">
                                    Start with <strong>telehealth + shared office space</strong> for flexibility:
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-green-600 mt-1 text-xl">check_circle</span>
                                        <span className="text-slate-700">Lower overhead ($1K-$2K/month for part-time office)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-green-600 mt-1 text-xl">check_circle</span>
                                        <span className="text-slate-700">Flexibility to scale up or down</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-green-600 mt-1 text-xl">check_circle</span>
                                        <span className="text-slate-700">Accommodate patients who prefer in-person</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-green-600 mt-1 text-xl">check_circle</span>
                                        <span className="text-slate-700">Professional address for credentialing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: COMMON PITFALLS */}
                <section className="py-32 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-8">
                            Common Pitfalls to Avoid
                        </h2>

                        <div className="space-y-6">
                            {[
                                {
                                    title: "Underestimating Startup Timeline",
                                    risk_level: "High",
                                    problem: "Expecting to see patients in 3 months",
                                    solution: "Plan for 6-12 months from license to first patient. Insurance credentialing alone takes 90-180 days."
                                },
                                {
                                    title: "Skipping Insurance Credentialing",
                                    risk_level: "Critical",
                                    problem: "Going cash-only without market research",
                                    solution: "Most CA patients expect insurance. Start credentialing early, even if you plan to be cash-heavy."
                                },
                                {
                                    title: "Poor Financial Planning",
                                    risk_level: "Critical",
                                    problem: "Running out of capital before break-even",
                                    solution: "Budget for 12 months of expenses. Most practices take 6-9 months to reach profitability."
                                },
                                {
                                    title: "HIPAA Violations",
                                    risk_level: "Severe",
                                    problem: "Using non-compliant tools (regular Zoom, Gmail)",
                                    solution: "Invest in HIPAA-compliant EHR, email, and video from day one. Violations can cost $50K+."
                                },
                                {
                                    title: "Doing Everything Yourself",
                                    risk_level: "Moderate",
                                    problem: "Spending 20+ hours/week on admin instead of patients",
                                    solution: "Hire a virtual assistant early. Your time is worth $400/hour seeing patients, not $25/hour doing billing."
                                }
                            ].map((pitfall, i) => (
                                <div key={i} className="group relative bg-[#FAF8F3] p-8 rounded-[2rem] border border-slate-200 hover:border-red-200 hover:shadow-xl hover:shadow-red-500/5 transition-all">
                                    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span className="material-symbols-outlined text-6xl text-red-500">warning</span>
                                    </div>
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 bg-red-100 text-red-700 text-[10px] font-black uppercase tracking-[0.2em] rounded-full">
                                                Risk Level: {pitfall.risk_level}
                                            </span>
                                            <h3 className="font-serif text-2xl font-bold text-trust-navy">{pitfall.title}</h3>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">The Trap</div>
                                                <p className="text-slate-600 font-medium leading-relaxed">{pitfall.problem}</p>
                                            </div>
                                            <div>
                                                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-2">The Mitigation</div>
                                                <p className="text-trust-navy font-bold leading-relaxed">{pitfall.solution}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-white rounded-[2rem] border-2 border-primary/30">
                            <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4">How Virtual Minds Helps You Avoid These Pitfalls</h3>
                            <p className="text-slate-700 mb-4">
                                Our <Link href="/services/practice-start-up" className="text-primary hover:underline font-bold">Practice Startup Service</Link> handles:
                            </p>
                            <ul className="grid md:grid-cols-2 gap-3">
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-slate-700">Insurance credentialing (all panels)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-slate-700">HIPAA compliance setup</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-slate-700">EHR implementation</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-slate-700">Billing & RCM setup</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-slate-700"><Link href="/services/virtual-assistant" className="text-primary hover:text-[#B8860B] underline font-semibold">Administrative support</Link> from day one</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                    <span className="text-slate-700">Financial planning guidance</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* SECTION 5: 12-MONTH STARTUP TIMELINE */}
                <section className="py-32 bg-[#EDE8E0]">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-8">
                            Your 12-Month Startup Timeline
                        </h2>

                        <p className="text-xl text-slate-700 leading-relaxed mb-12">
                            A realistic month-by-month roadmap from <strong>license application to your first patient</strong>. Adjust based on your specific situation, but this timeline accounts for typical California processing times.
                        </p>

                        <div className="space-y-6">
                            {/* Months 1-2 */}
                            <div className="bg-white p-8 rounded-[2rem] border-l-4 border-primary">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-primary text-white font-black text-xl px-6 py-3 rounded-2xl">Months 1-2</div>
                                    <h3 className="font-serif text-2xl font-bold text-trust-navy">Licensing & Legal Foundation</h3>
                                </div>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Apply for CA Medical Board license</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Apply for DEA registration</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Form Professional Corporation with attorney</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Get EIN, open business bank account</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Purchase malpractice insurance</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Months 3-4 */}
                            <div className="bg-white p-8 rounded-[2rem] border-l-4 border-primary">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-primary text-white font-black text-xl px-6 py-3 rounded-2xl">Months 3-4</div>
                                    <h3 className="font-serif text-2xl font-bold text-trust-navy">Credentialing & Infrastructure</h3>
                                </div>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Get NPI number and complete CAQH profile</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Submit insurance credentialing applications (all panels)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Select and implement EHR system</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Set up HIPAA-compliant email, video, and file storage</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Decide on office model (telehealth/traditional/hybrid)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Months 5-6 */}
                            <div className="bg-white p-8 rounded-[2rem] border-l-4 border-primary">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-primary text-white font-black text-xl px-6 py-3 rounded-2xl">Months 5-6</div>
                                    <h3 className="font-serif text-2xl font-bold text-trust-navy">Office Setup & Branding</h3>
                                </div>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Secure office space or virtual office address</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Purchase furniture, equipment, supplies</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Create professional website with SEO optimization</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Set up Google Business Profile, Psychology Today listing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Design logo, business cards, intake forms</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Months 7-8 */}
                            <div className="bg-white p-8 rounded-[2rem] border-l-4 border-primary">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-primary text-white font-black text-xl px-6 py-3 rounded-2xl">Months 7-8</div>
                                    <h3 className="font-serif text-2xl font-bold text-trust-navy">Billing & Administrative Systems</h3>
                                </div>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Set up billing and revenue cycle management</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Create fee schedule and payment policies</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Hire virtual assistant or administrative support</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Set up phone system, scheduling software</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Complete HIPAA risk assessment and compliance documentation</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Months 9-10 */}
                            <div className="bg-white p-8 rounded-[2rem] border-l-4 border-primary">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-primary text-white font-black text-xl px-6 py-3 rounded-2xl">Months 9-10</div>
                                    <h3 className="font-serif text-2xl font-bold text-trust-navy">Marketing & Referral Network</h3>
                                </div>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Launch website and social media presence</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Network with PCPs, therapists, hospitals for referrals</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Join local medical associations and networking groups</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Start Google Ads or local SEO campaign</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Monitor insurance credentialing status (follow up!)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Months 11-12 */}
                            <div className="bg-gradient-to-br from-primary/10 to-white p-8 rounded-[2rem] border-2 border-primary/30">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="bg-primary text-white font-black text-xl px-6 py-3 rounded-2xl">Months 11-12</div>
                                    <h3 className="font-serif text-2xl font-bold text-trust-navy">Launch & First Patients! 🎉</h3>
                                </div>
                                <ul className="space-y-2 ml-4">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-green-600 text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700"><strong>Insurance panels approved</strong> - start accepting insurance patients</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-green-600 text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700"><strong>Begin accepting new patients</strong> - telehealth and/or in-person</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-green-600 text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Conduct initial patient appointments and intakes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-green-600 text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Submit first insurance claims and track reimbursements</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-green-600 text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Refine workflows based on real-world experience</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-green-600 text-sm mt-1">check_circle</span>
                                        <span className="text-slate-700">Celebrate your first month of revenue! 🥳</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Downloadable Checklist CTA */}
                        <div className="mt-12 p-8 bg-white rounded-[2rem] border-2 border-primary/30 text-center">
                            <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4">Want a Printable Checklist?</h3>
                            <p className="text-slate-700 mb-6">
                                Get our comprehensive <strong>Psychiatry Practice Startup Checklist</strong> with every task, deadline, and resource you need.
                            </p>
                            <Link
                                href="/book-consultation"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-[#B8860B] text-white font-bold text-lg rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1"
                            >
                                <span className="material-symbols-outlined">download</span>
                                Get Free Startup Checklist
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-32 bg-gradient-to-br from-trust-navy to-[#0F1419] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay"></div>
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D2691E]/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-white">Ready to </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">Launch Your Practice?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-medium">
                            Virtual Minds handles <strong className="text-primary">licensing, credentialing, billing setup, and administrative infrastructure</strong> so you can focus on patient care.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                            <Link
                                href="/book-consultation"
                                className="inline-flex items-center gap-3 px-12 py-6 bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold text-xl rounded-2xl shadow-xl shadow-[#D2691E]/20 transition-all hover:-translate-y-1 justify-center"
                            >
                                <span className="material-symbols-outlined">calendar_today</span>
                                See My Recovery Plan
                            </Link>
                            <a
                                href="tel:+13104006266"
                                className="inline-flex items-center gap-3 px-12 py-6 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold text-xl rounded-2xl hover:bg-white/20 transition-all justify-center"
                            >
                                <span className="material-symbols-outlined">phone</span>
                                (310) 400-6266
                            </a>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">verified</span>
                                <span>HIPAA Compliant</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                <span>California Exclusive</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">schedule</span>
                                <span>30-Day Guarantee</span>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
