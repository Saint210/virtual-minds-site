"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function TechStackHub() {
    const partners = [
        {
            title: "DrChrono",
            description: "The gold standard for high-automation psychiatry. Features robust macro support and deep API integration for custom intakes.",
            benefit: "Save 12+ hrs/week",
            icon: "clinical_notes",
            category: "Operational Powerhouse",
            href: "#", // To be replaced with affiliate link
            badge: "Top Tier"
        },
        {
            title: "Tebra (Kareo)",
            description: "The multi-tool for solo practitioners. Integrated billing, EHR, and patient marketing in one clinical engine.",
            benefit: "Fastest Setup",
            icon: "rocket_launch",
            category: "Solo Starter",
            href: "#", // To be replaced with affiliate link
            badge: "Easy Button"
        },
        {
            title: "Osmind",
            description: "Specialized infrastructure for Interventional Psychiatry. Built-in outcome tracking for Ketamine, TMS, and Spravato.",
            benefit: "Outcomes Focused",
            icon: "psychology",
            category: "Interventional",
            href: "#", // To be replaced with affiliate link
            badge: "Clinical Niche"
        },
        {
            title: "RingCentral",
            description: "Enterprise-grade HIPAA telephony. Ensure your patient communication is secure, recorded, and compliant.",
            benefit: "Secure Comms",
            icon: "enhanced_encryption",
            category: "Infrastructure",
            href: "#", // To be replaced with affiliate link
            badge: "Standard"
        },
        {
            title: "ScanSnap",
            description: "The essential hardware for the paperless transition. One-touch scanning directly into your preferred EHR.",
            benefit: "One-Touch Digital",
            icon: "scanner",
            category: "Hardware",
            href: "#", // To be replaced with affiliate link
            badge: "Essential"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Tools", href: "/tools" },
                    { label: "Preferred Tech Stack" }
                ]}
            />

            <main className="flex-grow">
                {/* Elite Hero Section */}
                <section className="relative pt-12 pb-24 overflow-hidden bg-slate-50">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className="max-w-4xl">
                            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-6">
                                <span className="text-primary font-bold uppercase tracking-widest text-[11px]">The Clinical Engine Room</span>
                                <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
                            </motion.div>
                            <motion.h1 {...fadeUp(0.08)} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-trust-navy leading-[1.1] mb-8">
                                Preferred <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Tech Stack</span>.
                            </motion.h1>
                            <motion.p {...fadeUp(0.16)} className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-medium">
                                We&apos;ve vetted every major platform in the psychiatric ecosystem. These are the <strong className="text-trust-navy">only tools</strong> we trust to run high-performance, automated clinical operations.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* EHR Matchmaker Teaser */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="bg-trust-navy rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-b-8 border-primary shadow-2xl">
                            <div className="max-w-xl">
                                <h2 className="text-3xl font-serif font-bold text-white mb-4 italic">Not sure which clinical engine you need?</h2>
                                <p className="text-slate-300">Take our 60-second Matchmaker Quiz to find your ideal EHR and automation setup.</p>
                            </div>
                            <Link href="/tools/ehr-matchmaker" className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl hover:scale-105 whitespace-nowrap">
                                Start Matchmaker Quiz
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Partners Grid */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {partners.map((partner, i) => (
                                <motion.div
                                    key={partner.title}
                                    {...fadeUp(0.1 * i)}
                                    className="group p-10 bg-slate-50 rounded-[40px] border-2 border-slate-200 hover:border-primary/30 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2"
                                >
                                    <div>
                                        <div className="flex items-start justify-between mb-8">
                                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                                                <span className="material-symbols-outlined text-3xl font-bold">{partner.icon}</span>
                                            </div>
                                            <span className="bg-white border border-slate-200 text-slate-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                                                {partner.badge}
                                            </span>
                                        </div>
                                        <div className="mb-6">
                                            <span className="text-primary font-black text-[10px] uppercase tracking-widest">{partner.category}</span>
                                            <h3 className="text-2xl font-serif font-bold text-trust-navy mt-1">{partner.title}</h3>
                                        </div>
                                        <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                            {partner.description}
                                        </p>
                                        <div className="bg-white/50 border border-slate-200 rounded-2xl p-4 mb-8">
                                            <p className="text-xs text-slate-500 uppercase font-black tracking-widest mb-1">Key Impact</p>
                                            <p className="text-lg font-bold text-primary">{partner.benefit}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <Link href={partner.href} className="bg-trust-navy text-white text-center py-4 rounded-xl font-bold text-sm hover:bg-slate-800 transition-all">
                                            Get Partner Rate
                                        </Link>
                                        <Link href="/book-consultation" className="text-slate-500 text-center text-[10px] font-black uppercase tracking-widest hover:text-primary transition-colors">
                                            Request Implementation Guide
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final Trust Callout */}
                <section className="py-24 bg-slate-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-3xl font-serif font-bold text-trust-navy mb-8">Why the &quot;Virtual Minds&quot; Stack?</h2>
                        <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                            We don&apos;t accept every partner. We only recommend tools that allow us to build <strong className="text-trust-navy">enterprise-grade automation</strong> for our clients. By using our referral links, you get access to our proprietary <strong className="text-primary">Macro Libraries</strong> for free.
                        </p>
                        <div className="flex justify-center gap-6">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">verified</span>
                                <span className="text-xs font-black uppercase tracking-widest text-trust-navy">HIPAA Ready</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">bolt</span>
                                <span className="text-xs font-black uppercase tracking-widest text-trust-navy">Automation First</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

