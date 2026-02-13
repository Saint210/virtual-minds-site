import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";
import LocationTagline from "@/components/marketing/LocationTagline";
import PracticeLeaksCalculator from "@/components/tools/PracticeLeaksCalculator";
import TrackedLink from "@/components/ui/TrackedLink";

export const metadata: Metadata = {
    title: "Psychiatric Practice Start-Up Consulting | California",
    description: "Launch your private practice with confidence. Specialized consulting for EHR implementation, payer contract analysis, and HIPAA compliance.",
};

export default function PracticeStartUpPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Practice Launch Consulting" }
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
                                    <span className="material-symbols-outlined text-sm">rocket_launch</span>
                                    30-Day Launch System
                                </div>
                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy mb-4 leading-[1.1]">
                                    The Private Practice <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                        Operating System.
                                    </span>
                                </h1>
                                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-2xl">
                                    Don't waste 6 months Googling "how to start a practice." We deploy a turnkey <span className="text-trust-navy font-bold">Executive Infrastructure</span>—EHR, credentialing, and compliance—so you open your doors in 30 days.
                                </p>
                                <LocationTagline variant="service" serviceName="Practice Start-Up" />

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <TrackedLink
                                        href="/book-consultation"
                                        ctaName="Book Launch Strategy"
                                        source="service_startup_hero"
                                        className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">calendar_add_on</span>
                                        Book Launch Strategy
                                    </TrackedLink>
                                    <Link href="#roadmap" className="px-8 py-4 rounded-xl border-2 border-slate-200 text-trust-navy font-bold text-lg hover:bg-white hover:border-primary/20 transition-all flex items-center justify-center">
                                        View Roadmap
                                    </Link>
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="lg:w-1/2 relative">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                                    <div className="absolute inset-0 bg-slate-900/5 z-10"></div>
                                    <Image
                                        src="/images/practice-startup-blueprint-v4.png"
                                        alt="Psychiatric Practice Launch Blueprint"
                                        width={800}
                                        height={600}
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Overlay Card */}
                                    <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-100 z-20">
                                        <div className="flex items-start gap-4">
                                            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                <span className="material-symbols-outlined">checklist</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-trust-navy text-lg">90-Day Launch Protocol</h3>
                                                <p className="text-sm text-slate-600 mt-1">
                                                    A structured timeline from entity formation to your first reimbursement check.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE LAUNCH ROADMAP */}
                <section id="roadmap" className="py-24 bg-white border-y border-slate-100">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl font-bold text-trust-navy mb-4">The "Turnkey" Difference</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                We don't just give you advice. We log in and configure your systems.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* OPERATIONAL SETUP */}
                            <div className="bg-[#FAF8F3] rounded-[2rem] p-10 border border-slate-200">
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <span className="text-primary font-bold uppercase tracking-widest text-[11px]">Infrastructure</span>
                                    <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-6">Systems Configuration</h3>
                                <ul className="space-y-6">
                                    {[
                                        { title: "EHR Implementation", desc: "Customizing SimplePractice/Kareo templates for psychiatric workflows." },
                                        { title: "Intake Automation", desc: "Setting up digital intake packets so patients can self-onboard." },
                                        { title: "Telehealth Logistics", desc: "Ensuring HIPAA-compliant video platforms are tested and ready." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 group">
                                            <span className="material-symbols-outlined text-primary mt-1 group-hover:scale-110 transition-transform">settings_suggest</span>
                                            <div>
                                                <strong className="block text-trust-navy">{item.title}</strong>
                                                <span className="text-slate-600 text-sm">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* BUSINESS STRATEGY */}
                            <div className="bg-[#FAF8F3] rounded-[2rem] p-10 border border-slate-200">
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <span className="text-trust-navy font-bold uppercase tracking-widest text-[11px]">Strategy</span>
                                    <span className="w-12 h-[2px] bg-gradient-to-r from-trust-navy to-transparent"></span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-6">Business Health</h3>
                                <ul className="space-y-6">
                                    {[
                                        { title: "Payer Contract Analysis", desc: "We review proposed rates to help you understand your revenue potential (Non-Legal Consulting)." },
                                        { title: "Compliance Framework", desc: "Providing the templates for HIPAA policies and BAAs." },
                                        { title: "Workflow Design", desc: "Mapping out exactly what happens when a patient calls, so you never miss a lead." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 group">
                                            <span className="material-symbols-outlined text-trust-navy mt-1 group-hover:scale-110 transition-transform">analytics</span>
                                            <div>
                                                <strong className="block text-trust-navy">{item.title}</strong>
                                                <span className="text-slate-600 text-sm">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CALCULATOR SECTION */}
                <section className="py-24 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-navy mb-4">Calculate Your Launch ROI</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                See the financial impact of launching your practice the right way.
                            </p>
                        </div>
                        <PracticeLeaksCalculator />
                    </div>
                </section>

                <ServiceNavigationTray />
            </main>
            <Footer />
        </div>
    );
}
