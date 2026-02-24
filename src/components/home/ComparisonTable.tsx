"use client";

import { motion } from "framer-motion";

export default function ComparisonTable() {
    const comparisons = [
        { feature: "Psychiatric Nuance", standard: "General admin skills only", minds: "Specialized clinical training" },
        { feature: "HIPAA Compliance", standard: "Generic data handling", minds: "Audited psychiatric protocols" },
        { feature: "EHR Mastery", standard: "Needs significant training", minds: "Day 1 proficiency (Full slate)" },
        { feature: "Prior Authorizations", standard: "Frequently fumbled", minds: "Insurance logic experts" },
        { feature: "Billing Liaison", standard: "Rarely included", minds: "Integrated revenue protection" },
        { feature: "Retention", standard: "High turnover (90 days)", minds: "Long-term partnership focus" },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        The Critical Difference
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl text-trust-navy mb-8"
                    >
                        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Standard VAs Fail</span> Psychiatrists
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        Genetic virtual assistants are built for email and spreadsheets. Psychiatric care requires a higher level of operational intelligence.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl"
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="py-6 px-8 text-sm font-bold text-slate-400 uppercase tracking-widest">Capabilities</th>
                                <th className="py-6 px-8 text-sm font-bold text-slate-500 uppercase tracking-widest text-center">Standard VAs</th>
                                <th className="py-6 px-8 text-sm font-bold text-primary uppercase tracking-widest text-center bg-primary/5">Virtual Minds</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisons.map((item, i) => (
                                <motion.tr
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors"
                                >
                                    <td className="py-5 px-8">
                                        <span className="font-bold text-trust-navy">{item.feature}</span>
                                    </td>
                                    <td className="py-5 px-8 text-slate-500 text-center italic">
                                        {item.standard}
                                    </td>
                                    <td className="py-5 px-8 text-trust-navy font-medium text-center bg-primary/5">
                                        <div className="flex items-center justify-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                            {item.minds}
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="bg-trust-navy p-8 text-center text-white">
                        <p className="text-lg font-serif italic mb-4">"The cost of a generic VA isn't their hourly rate—it's the revenue lost to errors."</p>
                        <div className="flex items-center justify-center gap-2">
                            <span className="w-12 h-[1px] bg-primary/50"></span>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Cheryl, Founder of Virtual Minds</span>
                            <span className="w-12 h-[1px] bg-primary/50"></span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
