import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";
import LocationTagline from "@/components/marketing/LocationTagline";
import BillingServiceSchema from "@/components/seo/BillingServiceSchema";
import PracticeLeaksCalculator from "@/components/tools/PracticeLeaksCalculator";

export const metadata: Metadata = {
    title: "Psychiatric Billing Liaison & RCM Support | California",
    description: "We are the bridge between your clinical notes and your billing company. Specialized support for prior authorizations, superbills, and denial liaison.",
};

export default function BillingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <BillingServiceSchema />
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Revenue Cycle Liaison" }
                ]}
            />
            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="relative pt-4 pb-20 overflow-hidden bg-[#FAF8F3]">
                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">

                            {/* Copy */}
                            <div className="lg:w-1/2">
                                <div className="inline-flex items-center gap-2 bg-trust-navy/5 border border-trust-navy/10 rounded-full px-4 py-1.5 text-trust-navy text-[11px] font-black uppercase tracking-widest mb-4">
                                    <span className="material-symbols-outlined text-sm">verified</span>
                                    Verified Liaison Service
                                </div>
                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy mb-4 leading-[1.1]">
                                    We Don't Submit Claims.<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                        We Ensure They Get Paid.
                                    </span>
                                </h1>
                                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-2xl">
                                    The gap between your clinical notes and your billing company is where revenue is lost. We act as your <span className="text-trust-navy font-bold">Revenue Cycle Liaison</span>, managing prior auths, superbills, and billing inquiries so you don't have to.
                                </p>
                                <LocationTagline variant="service" serviceName="Billing & RCM" />

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/book-consultation" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined">calendar_add_on</span>
                                        Schedule Usage Audit
                                    </Link>
                                    <Link href="#scope" className="px-8 py-4 rounded-xl border-2 border-slate-200 text-trust-navy font-bold text-lg hover:bg-white hover:border-primary/20 transition-all flex items-center justify-center">
                                        View Scope of Work
                                    </Link>
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="lg:w-1/2 relative">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                                    <div className="absolute inset-0 bg-slate-900/5 z-10"></div>
                                    <Image
                                        src="/images/visual-intel-rcm.png"
                                        alt="Revenue Cycle Management Dashboard"
                                        width={800}
                                        height={600}
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Overlay Card */}
                                    <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-100 z-20">
                                        <div className="flex items-start gap-4">
                                            <div className="size-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                                                <span className="material-symbols-outlined">check_circle</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-trust-navy text-lg">Clean Handoff Protocol</h3>
                                                <p className="text-sm text-slate-600 mt-1">
                                                    We verify eligibility and prior auths <strong>before</strong> the patient is seen, ensuring your billing team receives clean, actionable data.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* STRICT SCOPE DEFINITION */}
                <section id="scope" className="py-24 bg-white border-y border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl font-bold text-trust-navy mb-4">The "Liaison" Difference</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                We are strictly administrative coordinators. We do NOT replace your biller; we make them effective.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* WHAT WE DO */}
                            <div className="bg-[#F0FDF4] rounded-[2rem] p-10 border border-green-100">
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
                                    <h3 className="font-serif text-2xl font-bold text-trust-navy">In Scope (The Liaison)</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Prior Authorization Management (CoverMyMeds/Availity)",
                                        "Detailed Benefits Verification & Eligibility Checks",
                                        "Creating & Sending Superbills to Patients",
                                        "Credit Card Processing & Payment Plans",
                                        "Coordinating directly with your Billing Company",
                                        "Resolving Patient Billing Inquiries"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-green-600 text-lg mt-0.5">check</span>
                                            <span className="text-slate-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* WHAT WE DON'T DO */}
                            <div className="bg-[#FEF2F2] rounded-[2rem] p-10 border border-red-100">
                                <div className="flex items-center gap-3 mb-8">
                                    <span className="material-symbols-outlined text-red-500 text-3xl">cancel</span>
                                    <h3 className="font-serif text-2xl font-bold text-trust-navy">Out of Scope (The Biller)</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Creating CMS-1500 Claims",
                                        "Submitting Claims to Clearinghouses",
                                        "Coding Diagnoses or CPT Codes",
                                        "Direct Accounts Receivable Collections",
                                        "Credentialing Applications (unless contracted separately)",
                                        "Appealing Denied Claims (Clinical)"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="material-symbols-outlined text-red-400 text-lg mt-0.5">close</span>
                                            <span className="text-slate-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURE BLOCKS */}
                <section className="py-24 bg-[#FAF8F3]">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Prior Auth Defense",
                                    desc: "We track authorization expirations in your EHR and initiate renewals before you get denied.",
                                    icon: "shield"
                                },
                                {
                                    title: "Patient Advocacy",
                                    desc: "When patients are confused about a bill, they call us, not you. We explain their EOBs and payment responsibility.",
                                    icon: "support_agent"
                                },
                                {
                                    title: "Biller Accountability",
                                    desc: "We track the 'Days in AR' and hold your third-party billing company accountable for their speed.",
                                    icon: "leaderboard"
                                }
                            ].map((feature, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                                    <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                        <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="font-serif text-xl font-bold text-trust-navy mb-3">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BILLING COST CALCULATOR */}
                <section className="py-32 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

                    <div className="max-w-5xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-20">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Calculate Your Billing Costs</span>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-8 leading-tight">
                                How Much Could You <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Save on Billing?</span>
                            </h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                                See exactly how much expert billing support could save your practice
                            </p>
                        </div>

                        <PracticeLeaksCalculator />

                        <div className="text-center mt-12">
                            <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]">
                                Schedule Billing Audit <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                <ServiceNavigationTray />
            </main>
            <Footer />
        </div>
    );
}
