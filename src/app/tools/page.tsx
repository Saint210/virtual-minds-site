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

export default function ToolsHub() {
    const tools = [
        {
            title: "Practice Leaks Calculator",
            description: "Identify administrative overhead and revenue leaks in your current clinical workflow. See exactly where your practice is losing efficiency.",
            href: "/#calculator", // Direct link to home anchor where the main calculator lives
            icon: "calculate",
            badge: "High Impact"
        },
        {
            title: "Social Rx Studio",
            description: "AI-powered creative engine for psychiatric professionals. Generate premium, high-fidelity social graphics and content in seconds.",
            href: "/tools/social-rx",
            icon: "auto_awesome",
            badge: "Creator Tool"
        },
        {
            title: "Embeddable ROI Tool",
            description: "Want to feature our clinical ROI technology on your own site? Access the sharing and embedding protocol here.",
            href: "/tools/calculator/share",
            icon: "share",
            badge: "Developer"
        },
        {
            title: "Preferred Tech Stack",
            description: "Curated clinical infrastructure for high-performance practices. Access our vetted EHR, Hardware, and Telephony partners.",
            href: "/tools/tech-stack",
            icon: "clinical_notes",
            badge: "Operational"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Tools" }
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
                                <span className="text-primary font-bold uppercase tracking-widest text-[11px]">The Operational Studio</span>
                                <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
                            </motion.div>
                            <motion.h1 {...fadeUp(0.08)} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-trust-navy leading-[1.1] mb-8">
                                Clinical <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Utility Suite</span>.
                            </motion.h1>
                            <motion.p {...fadeUp(0.16)} className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-medium">
                                Specialized technical tools designed to <strong className="text-trust-navy">quantify overhead</strong> and <strong className="text-trust-navy">amplify influence</strong>. Built exclusively for the modern psychiatric practice.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Tools Grid */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tools.map((tool, i) => (
                                <motion.div
                                    key={tool.title}
                                    {...fadeUp(0.1 * i)}
                                    className="group p-10 bg-slate-50 rounded-[40px] border-2 border-slate-200 hover:border-primary/30 transition-all duration-500 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2"
                                >
                                    <div>
                                        <div className="flex items-start justify-between mb-8">
                                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                                                <span className="material-symbols-outlined text-3xl font-bold">{tool.icon}</span>
                                            </div>
                                            <span className="bg-white border border-slate-200 text-slate-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                                                {tool.badge}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4">{tool.title}</h3>
                                        <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                                            {tool.description}
                                        </p>
                                    </div>
                                    <Link href={tool.href} className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                                        Launch Utility <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Integration Callout */}
                <section className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="bg-trust-navy rounded-[50px] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 p-20 opacity-5 scale-150">
                                <span className="material-symbols-outlined text-[300px]">construction</span>
                            </div>
                            <div className="relative z-10 max-w-2xl">
                                <h2 className="text-4xl font-serif font-bold mb-6 italic !text-white">
                                    Need a Custom <br />
                                    <span className="text-primary tracking-tight">Practice Dashboard?</span>
                                </h2>
                                <p className="text-lg text-slate-300 mb-10 leading-relaxed uppercase tracking-widest font-black text-xs">
                                    Operational Engineering Service
                                </p>
                                <p className="text-xl text-white/90 mb-12">
                                    We build proprietary internal tools, EHR automated integrations, and custom patient-intake dashboards for high-acuity behavioral health groups.
                                </p>
                                <Link href="/book-consultation" className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl hover:scale-105 inline-flex items-center gap-3">
                                    Request Technical Audit
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
