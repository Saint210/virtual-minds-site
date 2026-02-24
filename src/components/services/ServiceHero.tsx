"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ServiceHero() {
    return (
        <section className="relative pt-6 pb-20 md:pt-12 md:pb-32 overflow-hidden bg-[#FAF8F3]">
            {/* Technical Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <div className="lg:w-[55%] pt-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-white border border-trust-navy/10 rounded-full px-4 py-1.5 text-trust-navy text-[11px] font-black uppercase tracking-widest mb-6 shadow-sm"
                        >
                            <span className="material-symbols-outlined text-primary text-sm">verified</span>
                            Practice Operations
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="font-serif text-4xl md:text-6xl text-trust-navy mb-6 leading-[1.05] tracking-tight"
                        >
                            California Psychiatric <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">
                                Virtual Assistant & Operations Suite
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 font-medium"
                        >
                            Virtual Minds provides the <strong className="text-trust-navy">virtual assistant & operational backbone</strong> for psychiatrists practicing at the highest clinical and academic levels.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            {/* System Status Indicators */}
                            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm">
                                <div className="size-2 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-xs font-bold text-trust-navy uppercase tracking-wider">Systems Active</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-lg">public</span>
                                <span className="text-xs font-bold text-trust-navy uppercase tracking-wider">California Only</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hero Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="lg:w-[45%] w-full relative"
                    >
                        <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 group">
                            <Image
                                src="/images/psychiatrist-startup-planning.webp"
                                alt="Strategic Psychiatric Planning"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-trust-navy/10 mix-blend-multiply" />
                            {/* Glass Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/80 via-transparent to-transparent opacity-60" />

                            {/* Floating Data Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-lg"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-primary/10 p-2 rounded-lg">
                                            <span className="material-symbols-outlined text-primary">analytics</span>
                                        </div>
                                        <span className="text-xs font-bold text-trust-navy uppercase tracking-widest">Efficiency Metric</span>
                                    </div>
                                    <span className="text-green-600 font-bold text-xs bg-green-50 px-2 py-1 rounded-md border border-green-100">+35% Yield</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "85%" }}
                                        transition={{ duration: 1, delay: 1 }}
                                        className="h-full bg-primary rounded-full"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
