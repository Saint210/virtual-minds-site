"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function MarketIntelligence() {
    return (
        <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden border-t border-white/5">
            {/* Background Detail */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-start">
                    {/* Left Column: Narrative & Stats */}
                    <div className="lg:w-5/12 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"></span>
                                Market Intelligence
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-[1.1] text-white mb-6">
                                Why Local  <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Knowledge Matters.</span>
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-primary/30 pl-6">
                                A VA in Manila doesn't know that Kaiser predominates in Sacramento or how SB 525 impacts your overhead. <strong className="text-white font-medium">We build our systems with deep local intelligence.</strong>
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="group relative bg-[#0F172A] border border-white/5 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg. Psych Salary (CA)</span>
                                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-xl">payments</span>
                                    </div>
                                </div>
                                <div className="text-3xl font-mono font-bold text-white tracking-tight">$278k - $355k</div>
                                <div className="mt-2 text-xs text-slate-500 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    Market Rate Benchmark
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="group relative bg-[#0F172A] border border-white/5 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Regulatory Load</span>
                                    <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-xl">warning</span>
                                    </div>
                                </div>
                                <div className="text-3xl font-serif font-bold text-white flex items-center gap-3">
                                    Critical
                                    <span className="text-xs font-sans font-normal px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">Human Capital</span>
                                </div>
                                <div className="mt-2 text-xs text-slate-500 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                    SB 525, AB 5, CARE Court
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column: Timeline & Action */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:w-7/12 relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-[2.5rem] blur opacity-20 pointer-events-none"></div>
                        <div className="bg-[#0F172A]/80 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 md:p-10 relative overflow-hidden">
                            <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-lg">history_edu</span>
                                    </span>
                                    Compliance Timeline
                                </h3>
                                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">REF: CA_LABOR_CODE</span>
                            </div>

                            <div className="space-y-8 relative pl-2">
                                {/* Timeline Line */}
                                <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-slate-700 to-transparent"></div>

                                <div className="relative pl-12 group">
                                    <div className="absolute left-3 top-1.5 w-6 h-6 -ml-3 rounded-full bg-[#0B1120] border-2 border-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.4)] z-10 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                        <span className="text-lg font-bold text-white group-hover:text-primary transition-colors">SB 525 Enacted</span>
                                        <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">2024</span>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                                        Minimum wage increase for healthcare workers. <span className="text-slate-300">Direct impact on overhead</span> for private practices with support staff.
                                    </p>
                                </div>

                                <div className="relative pl-12 group">
                                    <div className="absolute left-3 top-1.5 w-6 h-6 -ml-3 rounded-full bg-[#0B1120] border-2 border-slate-700 group-hover:border-slate-500 transition-colors z-10"></div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                        <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">CARE Court</span>
                                        <span className="text-xs font-mono font-bold text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">2023</span>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed max-w-lg group-hover:text-slate-400 transition-colors">
                                        New frameworks for severe mental illness treatment and county-level coordination requirements.
                                    </p>
                                </div>

                                <div className="relative pl-12 group">
                                    <div className="absolute left-3 top-1.5 w-6 h-6 -ml-3 rounded-full bg-[#0B1120] border-2 border-slate-700 group-hover:border-slate-500 transition-colors z-10"></div>
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                        <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">AB 5 Finalization</span>
                                        <span className="text-xs font-mono font-bold text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">2020</span>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed max-w-lg group-hover:text-slate-400 transition-colors">
                                        Strict independent contractor vs. employee classification. <span className="text-slate-400">Critical risk factor</span> for hiring unmanaged support staff.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5 flex justify-end">
                                <Link href="/book-consultation" className="group inline-flex items-center gap-3 bg-white text-[#0F172A] hover:bg-slate-200 px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                    Schedule Compliance Audit
                                    <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
