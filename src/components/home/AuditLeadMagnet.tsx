"use client";

import { motion } from "framer-motion";

export default function AuditLeadMagnet() {
    return (
        <section className="py-20 bg-trust-navy relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl flex flex-col lg:flex-row items-center gap-12 group transition-all duration-500 hover:border-white/20"
                >

                    <div className="lg:w-[60%] space-y-6">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full border border-primary/30"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-widest">New Resource</span>
                        </motion.div>
                        <h2 className="font-serif text-3xl md:text-[2.5rem] leading-tight text-white mb-4">
                            Download the <span className="text-primary italic">Psychiatric Operations</span> Audit Checklist
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                            The exactly internal tool we use to identify 15+ hours of weekly administrative leakage in California psychiatric practices.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "The 3-Minute Intake Filter Protocol",
                                "EHR Hardening Compliance Review",
                                "Insurance Verification Speed-Dial Map"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 + i * 0.1 }}
                                    className="flex items-center gap-3 text-slate-300 text-sm"
                                >
                                    <span className="material-symbols-outlined text-primary text-xl">verified</span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="lg:w-[40%] w-full"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-xl">
                            <h3 className="text-trust-navy font-bold text-lg mb-4 text-center">Get Instant Access</h3>
                            <form className="space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Work Email Address"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                                >
                                    <span>Download Free PDF</span>
                                    <span className="material-symbols-outlined text-sm">download</span>
                                </button>
                                <p className="text-[10px] text-slate-400 text-center">
                                    Join 40+ California Psychiatrists receiving our monthly ops intel.
                                </p>
                            </form>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
