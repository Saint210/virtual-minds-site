"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ClinicalPedigree() {
    const academicInstitutions = [
        "Harvard Medical School",
        "Stanford University",
        "UCSF",
        "Princeton",
        "UCLA Department of Psychiatry",
        "Duke University",
        "Baylor College of Medicine",
        "USC Keck School of Medicine",
    ];

    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest text-[11px] mb-4 block"
                    >
                        Why Hire A Specialist?
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-serif font-bold text-trust-navy mb-6"
                    >
                        Operations for <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-primary italic">Modern Psychiatry</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Generalist VAs require endless training and oversight. We arrive fully operational, with deep expertise in the specific demands of California psychiatry.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Card 1: Academic Pedigree */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 hover:border-trust-navy transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
                        <div className="relative z-10">
                            <div className="absolute top-0 right-0 bg-white/80 backdrop-blur-sm border-l border-b border-slate-200 rounded-tr-[2.5rem] px-4 py-2">
                                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">SYS_DNA_01</span>
                            </div>
                            <div className="size-14 bg-white rounded-2xl flex items-center justify-center text-trust-navy mb-6 shadow-sm border border-slate-100 group-hover:bg-trust-navy group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">school</span>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 group-hover:text-primary transition-colors">Academic DNA</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed font-medium text-sm">
                                Our protocols are designed to support faculty and alumni from California's top medical centers. We speak the language of academic medicine.
                            </p>
                            <div className="space-y-3 border-t border-slate-200 pt-6">
                                {academicInstitutions.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-trust-navy/80">
                                        <span className="material-symbols-outlined text-primary text-base">verified</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: High-Acuity Scope */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white p-8 rounded-[2.5rem] border border-slate-200 hover:border-trust-navy transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
                        <div className="relative z-10">
                            <div className="absolute top-0 right-0 bg-slate-50/80 backdrop-blur-sm border-l border-b border-slate-200 rounded-tr-[2.5rem] px-4 py-2">
                                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">SYS_SCOPE_02</span>
                            </div>
                            <div className="size-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">clinical_notes</span>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 group-hover:text-primary transition-colors">High-Acuity Scope</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed font-medium text-sm">
                                We go beyond basic scheduling. Our team is trained to handle the complex, sensitive workflows of advanced psychiatric care.
                            </p>
                            <div className="space-y-3 border-t border-slate-100 pt-6">
                                {[
                                    "Treatment-Resistant Mood Disorders",
                                    "Ketamine & TMS Coordination",
                                    "Forensic Psychiatry Cases",
                                    "Inpatient/Outpatient Transitions",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-trust-navy/80">
                                        <span className="material-symbols-outlined text-primary text-base">verified</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Executive Discretion */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-trust-navy p-8 rounded-[2.5rem] border border-trust-navy shadow-xl shadow-trust-navy/20 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
                        <div className="relative z-10 text-white">
                            <div className="absolute top-0 right-0 bg-white/5 backdrop-blur-sm border-l border-b border-white/10 rounded-tr-[2.5rem] px-4 py-2">
                                <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">SYS_EXEC_03</span>
                            </div>
                            <div className="size-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 backdrop-blur-sm border border-white/10 group-hover:bg-white group-hover:text-trust-navy transition-colors duration-300">
                                <span className="material-symbols-outlined text-3xl">verified_user</span>
                            </div>
                            <h3 className="font-serif text-2xl font-bold text-white mb-4">Executive Discretion</h3>
                            <p className="text-white/80 mb-6 leading-relaxed font-medium text-sm">
                                For practices serving high-profile clientele, standard VAs are a liability. We provide the "ironclad" discretion required by California's top-tier practitioners.
                            </p>
                            <div className="space-y-3 border-t border-white/10 pt-6">
                                {[
                                    "C-Suite Executives & Founders",
                                    "Public Figures & Entertainment",
                                    "High-Net-Worth Families",
                                    "Court-Involved Individuals",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-bold text-white/90">
                                        <span className="material-symbols-outlined text-accent text-base">check_circle</span>
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 text-center"
                >
                    <p className="text-slate-500 italic max-w-2xl mx-auto text-lg mb-8">
                        "We don't just answer phones. We protect the time, license, and reputation of physicians operating at the highest level of the field."
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        Upgrade Your Infrastructure <span className="material-symbols-outlined">arrow_forward</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
