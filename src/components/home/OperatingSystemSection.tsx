"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
    {
        id: "01",
        icon: "inventory",
        title: "Diagnostic Review",
        description: "We audit your current processes, identify bottlenecks, and review your practice goals to build a custom roadmap."
    },
    {
        id: "02",
        icon: "engineering",
        title: "Implementation",
        description: "We deploy EHR optimization, set up HIPAA-compliant workflows, and establish clear client management policies."
    },
    {
        id: "03",
        icon: "verified",
        title: "Ongoing Management",
        description: "Daily administrative management, billing liaison support, and ongoing operational refinement to prevent drift."
    }
];

export default function OperatingSystemSection() {
    return (
        <section className="py-24 bg-gradient-to-br from-slate-100 via-slate-50 to-white relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/80 backdrop-blur-sm rounded-[3rem] p-12 lg:p-20 shadow-2xl border-2 border-slate-200 text-center relative overflow-hidden group"
                >
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-70" />

                    <h2 className="font-serif text-5xl text-trust-navy mb-6">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Virtual Minds OS</span></h2>
                    <p className="text-slate-600 font-bold uppercase tracking-widest text-sm mb-16">Our Proven Process for Operational Excellence</p>

                    <div className="grid md:grid-cols-3 gap-8 mb-16 text-left max-w-6xl mx-auto">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 relative group hover:border-trust-navy transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
                            >
                                {/* Technical Grid Background */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

                                <div className="relative z-10">
                                    <div className="absolute -top-5 -left-5 bg-trust-navy text-white p-4 rounded-br-2xl shadow-lg group-hover:bg-primary transition-colors border-r border-b border-white/20">
                                        <span className="material-symbols-outlined text-2xl relative top-1 left-1">{step.icon}</span>
                                    </div>
                                    <div className="flex justify-end mb-10">
                                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest border border-slate-200 px-2 py-1 rounded bg-white/80 backdrop-blur-sm">STEP {step.id}</span>
                                    </div>
                                    <h3 className="font-serif text-2xl text-trust-navy mb-4 mt-2 font-bold">{step.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed font-medium">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <Link href="/book-consultation" className="inline-block bg-trust-navy hover:bg-slate-800 text-white px-6 py-4 md:px-10 md:py-5 rounded-xl font-bold text-lg shadow-xl shadow-trust-navy/20 transition-all max-w-full">
                        Start Diagnostic Review
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
