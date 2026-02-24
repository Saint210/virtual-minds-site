"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function WhyVirtualMindsSection() {
    return (
        <section className="py-24 bg-[#FAF8F3] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Why Psychiatrists Switch to Us</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-trust-navy mb-8 leading-tight">
                            Generic VAs <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Can't Handle This</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Most VAs look good on paper but don't understand psychiatric billing, prior auth logic, or HIPAA. They miss intake details, fumble authorizations, and cost you revenue you'll never recover.
                        </p>
                        <div className="pl-6 border-l-4 border-primary relative">
                            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-primary rounded-full border-2 border-white shadow-sm" />
                            <div className="flex items-center gap-2 mb-4 opacity-80">
                                <span className="material-symbols-outlined text-primary text-lg">security</span>
                                <span className="text-xs font-bold text-trust-navy uppercase tracking-widest">From a Real Client</span>
                            </div>
                            <p className="text-xl font-serif text-trust-navy mb-2 italic">
                                "I just want to see my patients. Virtual Minds handles everything else."
                            </p>
                        </div>
                        <div className="mt-8">
                            <Link href="/services" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-6 py-3 rounded-xl font-bold text-lg shadow-sm transition-all hover:border-trust-navy/30 hover:scale-[1.02]">
                                See Our Protocols <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Premium Glass Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group rounded-[2.5rem] p-1 shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-trust-navy via-trust-navy/90 to-primary/20 rounded-[2.5rem] blur-xl opacity-50" />
                        <div className="bg-trust-navy rounded-[2.5rem] p-10 border border-white/10 shadow-2xl relative z-10 overflow-hidden">
                            {/* Decorative Abstract Shapes */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <div className="relative z-10">
                                <h3 className="text-sm font-bold text-white/60 uppercase tracking-widest mb-8 flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-primary/50"></span>
                                    The Virtual Minds Standard
                                </h3>
                                <ul className="space-y-5">
                                    {[
                                        "Flawless Patient Communication",
                                        "Detailed Document Management",
                                        "Reliable Refill & PA Workflows",
                                        "HIPAA-Verified Systems",
                                        "Zero Administrative Drift"
                                    ].map((req, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: 10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 + (i * 0.1) }}
                                            className="flex items-center gap-4 group/item hover:translate-x-1 transition-transform"
                                        >
                                            <div className="bg-white/10 text-primary p-2 rounded-full shadow-inner flex items-center justify-center border border-white/5">
                                                <span className="material-symbols-outlined text-sm">check</span>
                                            </div>
                                            <span className="text-lg font-bold text-white">{req}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
