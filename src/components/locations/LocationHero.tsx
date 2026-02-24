"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LocationHero() {
    return (
        <section className="relative pt-12 pb-20 overflow-hidden bg-[#FAF8F3]">
            {/* Technical Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>

            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -mr-32 -mt-32" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-white border border-trust-navy/10 rounded-full px-4 py-1.5 text-trust-navy text-[11px] font-black uppercase tracking-widest mb-6 shadow-sm"
                    >
                        <span className="material-symbols-outlined text-primary text-sm">public</span>
                        Statewide Coverage
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight"
                    >
                        The California <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                            Psychiatric Network.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl"
                    >
                        Localized administrative intelligence for the modern private practice. Select your region to analyze specific overhead savings and compliance protocols.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
