"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PricingHero() {
    return (
        <section className="relative pt-4 md:pt-6 pb-24 overflow-hidden bg-[#FAF8F3]">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#B25A2A_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-[60%]">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8"
                        >
                            <span className="material-symbols-outlined text-primary text-[16px]">payments</span>
                            Operational ROI Framework
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight"
                        >
                            California Psychiatric Virtual Assistant <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                                Pricing & Investment
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-10 max-w-2xl"
                        >
                            Strategic pricing for California's leading psychiatric practices. High-fidelity systems designed to return clinical time and revenue.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/50 shadow-sm">
                                <span className="material-symbols-outlined text-primary font-bold">verified</span>
                                <span className="text-sm font-bold text-slate-600 whitespace-nowrap">HIPAA Compliant Ops</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/50 shadow-sm">
                                <span className="material-symbols-outlined text-accent font-bold">medical_services</span>
                                <span className="text-sm font-bold text-slate-600 whitespace-nowrap">Specialized Psychiatric Support</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="lg:w-[40%] group w-full"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl aspect-[4/5] bg-white group-hover:border-primary/20 transition-colors">
                            <Image
                                src="/images/pricing-hero-premium.png"
                                alt="California Psychiatrist Reviewing Practice ROI and Investment Strategy"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/30 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
