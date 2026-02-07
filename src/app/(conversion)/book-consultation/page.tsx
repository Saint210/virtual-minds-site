import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

import PracticeAuditWizard from "@/components/conversion/PracticeAuditWizard";
import ConsultationServiceSchema from "@/components/seo/ConsultationServiceSchema";

export const metadata: Metadata = {
    title: "Book Your Strategy Call | Virtual Minds",
    description: "Schedule your 15-minute psychiatric strategy call. We'll analyze your workflow and match you with a specialized, HIPAA-trained VA.",
    alternates: {
        canonical: 'https://thevirtualminds.com/book-consultation'
    },
    openGraph: {
        title: "Book Your Strategy Call | Virtual Minds",
        description: "Schedule your 15-minute psychiatric strategy call for California practices.",
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
        title: "Book Your Strategy Call | Virtual Minds",
        description: "Schedule your 15-minute psychiatric strategy call for California practices.",
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
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-6">
                            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span className="text-trust-navy">Book Consultation</span>
                            </nav>

                            {/* Trust Badges - High Conversion */}
                            <div className="flex items-center gap-3">
                                <div className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-5 py-2 text-trust-navy text-xs font-black w-fit shadow-sm">
                                    <span className="material-symbols-outlined text-primary text-[18px]">analytics</span>
                                    <span className="tracking-[0.2em] uppercase">2026 Strategy</span>
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

                            <h1 className="font-serif text-5xl lg:text-[5rem] font-bold text-trust-navy leading-[0.95] tracking-tight">
                                Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Gold Standard</span> <br />
                                Recovery Plan.
                            </h1>

                            <p className="text-xl text-slate-600 font-display leading-relaxed max-w-xl">
                                Schedule your <strong className="text-trust-navy">15-minute</strong> California psychiatric strategy call. We'll{' '}
                                <span className="text-primary font-bold">analyze your clinical administrative load</span> and blueprint a{' '}
                                <strong className="text-trust-navy">stable operational path</strong>.
                            </p>

                            <div className="flex flex-col gap-2 mt-2 p-4 bg-white/50 border border-slate-200 rounded-xl">
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
                        <PracticeAuditWizard />

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
