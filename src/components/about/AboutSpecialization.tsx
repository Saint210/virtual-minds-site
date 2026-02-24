"use client";

import { motion } from "framer-motion";

export default function AboutSpecialization() {
    const stats = [
        { label: "Target Market", value: "Psych", sub: "Psychiatry Exclusive", icon: "psychology" },
        { label: "Geographic Focus", value: "CA Only", sub: "State Regulation Experts", icon: "location_on" },
        { label: "Compliance", value: "HIPAA", sub: "Secure Data Handling", icon: "shield" },
        { label: "Model Type", value: "Custom", sub: "Insurance & Cash-Pay", icon: "tune" }
    ];

    return (
        <section className="py-32 bg-slate-50/50 border-t border-slate-100" >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <span className="text-primary font-bold uppercase tracking-widest text-[11px]">Our Niche</span>
                            <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8 leading-tight"
                        >
                            Exclusively Focused on <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Psychiatric Workflows</span>.
                        </motion.h2>
                        <div className="space-y-6 text-slate-500 text-lg font-medium leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                            >
                                Unlike general healthcare virtual assistant services, we focus <strong className="text-trust-navy">solely on psychiatric practice workflows</strong>. Our team understands{' '}
                                <span className="text-primary font-bold">medication management coordination, prior authorization processes</span>, pharmacy liaison, insurance verification, and the{' '}
                                <strong className="text-trust-navy">unique administrative demands</strong> of psychiatric practices.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                We serve <span className="text-primary font-bold">only California psychiatrists</span>—from solo telehealth practices to multi-provider hybrid groups—giving us{' '}
                                <strong className="text-trust-navy">deep expertise in state regulations</strong>, common EHR platforms, and psychiatric-specific administrative needs.
                            </motion.p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="relative bg-gradient-to-br from-[#FAF8F3] to-white p-8 rounded-[2rem] border-2 border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group overflow-hidden"
                            >
                                {/* Decorative gradient overlay */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="mb-4">
                                        <span className="material-symbols-outlined text-primary text-3xl">{stat.icon}</span>
                                    </div>

                                    {/* Value - Large and Bold */}
                                    <div className="text-4xl font-serif font-bold text-trust-navy mb-2 tracking-tight group-hover:text-primary transition-colors">
                                        {stat.value}
                                    </div>

                                    {/* Subtitle */}
                                    <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                                        {stat.sub}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
