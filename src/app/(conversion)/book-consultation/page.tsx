import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

import { Suspense } from "react";
import PracticeAuditWizard from "@/components/conversion/PracticeAuditWizard";
import ConsultationServiceSchema from "@/components/seo/ConsultationServiceSchema";

export const metadata: Metadata = {
    title: "Book California Psychiatric Virtual Assistant Consultation | Virtual Minds",
    description: "Schedule your free consultation with California's premier psychiatric virtual assistant service. 15-minute strategy call to analyze your workflow and match you with HIPAA-trained support.",
    alternates: {
        canonical: 'https://thevirtualminds.com/book-consultation'
    },
    openGraph: {
        title: "Book California Psychiatric Virtual Assistant Consultation | Virtual Minds",
        description: "Schedule your free 15-minute psychiatric strategy call for California practices.",
        url: "https://thevirtualminds.com/book-consultation",
        siteName: "Virtual Minds",
        images: [{
            url: "https://thevirtualminds.com/images/og-virtual-assistant.png",
            width: 1200,
            height: 630,
            alt: "Book Your Psychiatric Strategy Call"
        }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Book California Psychiatric Virtual Assistant Consultation | Virtual Minds",
        description: "Schedule your free 15-minute psychiatric strategy call for California practices.",
        images: ["https://thevirtualminds.com/images/og-virtual-assistant.png"],
    },
};

export default function BookConsultationPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <ConsultationServiceSchema />
            <Navbar />

            <main className="flex-grow flex flex-col items-center py-12 md:py-20 px-6">
                <div className="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Side: Content & Timeline */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-5">
                            {/* Breadcrumbs - Hidden on Mobile */}
                            <nav className="hidden md:flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span className="text-trust-navy">Book Consultation</span>
                            </nav>

                            {/* Trust Badges - Condensed on Mobile */}
                            <div className="flex flex-wrap items-center gap-2">
                                <div className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-4 py-1.5 text-trust-navy text-xs font-black shadow-sm">
                                    <span className="material-symbols-outlined text-primary text-base">analytics</span>
                                    <span className="tracking-wider uppercase">2026 Strategy</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-50 border border-green-100">
                                    <span className="material-symbols-outlined text-green-600 text-sm">verified_user</span>
                                    <span className="text-[10px] font-bold text-green-800">HIPAA</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
                                    <span className="material-symbols-outlined text-blue-600 text-sm">workspace_premium</span>
                                    <span className="text-[10px] font-bold text-blue-800">Licensed</span>
                                </div>
                            </div>

                            {/* Headline - Smaller on Mobile */}
                            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-trust-navy leading-tight tracking-tight">
                                Schedule Your Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Strategy Call</span>
                            </h1>

                            {/* Description - Condensed */}
                            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                                <strong className="text-trust-navy">15-minute</strong> psychiatric workflow analysis. We'll blueprint your <span className="text-primary font-bold">stable operational path</span>.
                            </p>

                            {/* CTA Buttons - Prominent Above-Fold */}
                            <div className="flex flex-col gap-3 mt-2">
                                {/* Phone CTA - Primary */}
                                <a
                                    href="tel:+13104006266"
                                    className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-3 group"
                                >
                                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>Call (310) 400-6266</span>
                                </a>

                                {/* OR Divider */}
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 h-px bg-slate-200"></div>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Or Schedule Online</span>
                                    <div className="flex-1 h-px bg-slate-200"></div>
                                </div>
                            </div>

                            {/* Elite Training Callout - Moved Below CTAs */}
                            <div className="hidden md:flex flex-col gap-2 p-4 bg-white/50 border border-slate-200 rounded-xl">
                                <div className="flex items-center gap-2 text-trust-navy font-bold">
                                    <span className="material-symbols-outlined text-primary text-xl">school</span>
                                    <span className="text-sm uppercase tracking-wider">UCLA, UCSF, Stanford-Trained?</span>
                                </div>
                                <p className="text-sm text-slate-600 font-medium">
                                    We speak your language. Our VAs are trained to support the high-complexity workflows of elite, board-certified practices.
                                </p>
                            </div>
                        </div>

                        {/* What to Expect Timeline - UPGRADED */}
                        <div className="bg-white/50 backdrop-blur-sm border border-slate-200 rounded-[32px] p-8 md:p-10 shadow-xl">
                            <h3 className="text-2xl font-serif font-bold mb-8 text-trust-navy">The Road to Clinical Freedom</h3>
                            <div className="space-y-10">
                                {/* Step 1 */}
                                <div className="flex gap-6 group">
                                    <div className="flex flex-col items-center">
                                        <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <span className="material-symbols-outlined text-2xl">call</span>
                                        </div>
                                        <div className="w-px h-full bg-slate-200 mt-4" />
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-lg font-bold text-trust-navy leading-none mb-2">Initial Assessment</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">A brief 15-minute call to audit your clinic&apos;s specific administrative hurdles.</p>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="flex gap-6 group">
                                    <div className="flex flex-col items-center">
                                        <div className="size-14 rounded-2xl bg-[#9CAF88]/10 flex items-center justify-center text-[#9CAF88] shadow-inner group-hover:bg-[#9CAF88] group-hover:text-white transition-all duration-300">
                                            <span className="material-symbols-outlined text-2xl">domain</span>
                                        </div>
                                        <div className="w-px h-full bg-slate-200 mt-4" />
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-lg font-bold text-trust-navy leading-none mb-2">Workflow Blueprinting</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">We review your EHR (Athena, Charm, etc.) and identify semantic automation opportunities.</p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="flex gap-6 group">
                                    <div className="flex flex-col items-center">
                                        <div className="size-14 rounded-2xl bg-trust-navy/10 flex items-center justify-center text-trust-navy shadow-inner group-hover:bg-trust-navy group-hover:text-white transition-all duration-300">
                                            <span className="material-symbols-outlined text-2xl">person_add</span>
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-lg font-bold text-trust-navy leading-none mb-2">VA Deployment</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">Get introduced to your specialized psychiatric virtual assistant within 72 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Institutional Social Proof */}
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full bg-white border-[3px] border-[#FAF8F3] flex items-center justify-center overflow-hidden shadow-lg relative z-[10]">
                                        <Image
                                            src={`https://i.pravatar.cc/150?u=${i + 95}`}
                                            alt="Board-Certified Specialist"
                                            width={48}
                                            height={48}
                                            className="grayscale hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm text-slate-500 font-medium leading-tight">
                                <p><strong className="text-trust-navy">Trusted by California Psychiatrists</strong></p>
                                <p>Specialized <span className="text-primary font-bold">psychiatric virtual assistants</span> for HIPAA-compliant practice management.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Lead Capture Form */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl opacity-30"></div>

                        {/* The Wizard */}
                        <Suspense fallback={<div className="h-[600px] w-full bg-white rounded-[2.5rem] shadow-2xl animate-pulse" />}>
                            <PracticeAuditWizard />
                        </Suspense>

                        {/* Security Footer */}
                        {/* Guarantee & Security Footer */}
                        <div className="mt-8 grid grid-cols-2 gap-4 opacity-90">
                            <div className="flex items-center gap-3 bg-white/50 p-3 rounded-xl border border-slate-100">
                                <div className="size-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                                    <span className="material-symbols-outlined font-bold text-lg">security</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-trust-navy uppercase tracking-wider">HIPAA Compliant</p>
                                    <p className="text-[10px] text-slate-500 font-medium leading-tight">100% Secure Data Audit</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-white/50 p-3 rounded-xl border border-slate-100">
                                <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <span className="material-symbols-outlined font-bold text-lg">verified</span>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-trust-navy uppercase tracking-wider">Zero Risk</p>
                                    <p className="text-[10px] text-slate-500 font-medium leading-tight">No Contracts. Cancel Anytime.</p>
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
