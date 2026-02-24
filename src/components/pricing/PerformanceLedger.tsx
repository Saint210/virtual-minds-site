"use client";

import { motion } from "framer-motion";

interface PerformanceItem {
    metric: string;
    value: string;
    label: string;
}

interface PerformanceLedgerProps {
    items: PerformanceItem[];
}

export default function PerformanceLedger({ items }: PerformanceLedgerProps) {
    return (
        <section className="py-32 bg-[#FAF8F3] relative overflow-hidden border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                    <div className="lg:col-span-12 text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 mb-6"
                        >
                            <span className="text-primary font-bold uppercase tracking-widest text-[11px]">ROI Analysis</span>
                            <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-6"
                        >
                            Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Performance</span> Ledger
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed"
                        >
                            <strong className="text-trust-navy">Strategic investment</strong> is the catalyst for{' '}
                            <span className="text-primary font-bold">operational excellence</span>.
                        </motion.p>
                    </div>

                    {/* Performance Figures */}
                    <div className="lg:col-span-7 space-y-6">
                        {items.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-10 border border-slate-200 hover:border-primary/30 shadow-sm flex flex-col md:flex-row justify-between items-center group hover:shadow-xl transition-all"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-primary text-2xl">
                                            {idx === 0 ? 'schedule' : idx === 1 ? 'payments' : 'shield'}
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-trust-navy mb-1">{item.metric}</h4>
                                        <p className="text-sm md:text-base text-slate-600 font-medium">{item.label}</p>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 text-3xl md:text-4xl font-serif font-bold text-primary group-hover:scale-110 transition-transform">
                                    {item.value}
                                </div>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-trust-navy text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border-2 border-primary/30"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/30 transition-all" />
                            <div className="flex justify-between items-center relative z-10">
                                <div>
                                    <h4 className="text-2xl font-bold !text-primary mb-2">Monthly Efficiency Gain</h4>
                                    <p className="text-base text-slate-300 font-medium max-w-xs">Projected value created per psychiatrist through administrative offloading.</p>
                                </div>
                                <div className="text-5xl md:text-6xl font-serif font-bold text-white tracking-tight">Maximized</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Comparison Matrix */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 bg-white/80 backdrop-blur-xl p-12 rounded-[3.5rem] border border-slate-200 self-stretch shadow-2xl shadow-primary/5"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="material-symbols-outlined text-primary text-2xl">compare_arrows</span>
                            <h3 className="text-2xl font-serif font-bold text-trust-navy">Competitive Reality</h3>
                        </div>
                        <div className="space-y-10">
                            {[
                                { title: "Standard In-House Team", cost: "$12k-$18k / mo", note: "Salary, benefits, office rent, and direct management overhead.", icon: "person_off", color: "text-slate-400" },
                                { title: "Virtual Minds Support", cost: "$5k / mo", note: "Specialized, HIPAA-compliant, and fully managed clinical ops.", icon: "verified", color: "text-primary" }
                            ].map((comp, idx) => (
                                <div key={idx} className="space-y-3">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className={`size-10 rounded-xl ${comp.title.includes("Minds") ? 'bg-primary/10' : 'bg-slate-100'} flex items-center justify-center`}>
                                                <span className={`material-symbols-outlined ${comp.color}`}>{comp.icon}</span>
                                            </div>
                                            <span className="font-bold text-trust-navy">{comp.title}</span>
                                        </div>
                                        <span className={`text-sm font-bold uppercase tracking-widest ${comp.title.includes("Minds") ? 'text-primary' : 'text-slate-400'}`}>{comp.cost}</span>
                                    </div>
                                    <p className="text-base text-slate-600 pl-[52px] font-medium leading-relaxed">{comp.note}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
