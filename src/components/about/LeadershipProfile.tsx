"use client";

import { motion } from "framer-motion";

export default function LeadershipProfile() {
    return (
        <section className="py-24 bg-white border-y border-slate-100">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 mb-6"
                >
                    <span className="text-primary font-bold uppercase tracking-widest text-[11px]">Leadership Profile</span>
                    <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8 leading-tight"
                >
                    Battle-Tested <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Operational Leadership</span>.
                </motion.h2>

                <div className="space-y-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-lg text-slate-600 leading-relaxed"
                    >
                        Virtual Minds wasn't built by generalist administrators. It was forged in the fires of crisis management. When a major California psychiatric network faced a <strong className="text-trust-navy">critical leadership transition</strong>, dozens of practices were at risk of immediate operational disruption.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-slate-600 leading-relaxed"
                    >
                        <strong className="text-trust-navy">Cheryl</strong>, serving as the Director of Operations, took command of the operations. She didn't just manage the transition—she <span className="text-primary font-bold">guaranteed the continuity of care</span> for hundreds of patients, stabilizing the network when it mattered most.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg text-slate-600 leading-relaxed"
                    >
                        She rebuilt the operations from the ground up, ensuring that <strong className="text-trust-navy">her partner practices didn't miss a single patient interaction</strong>. That level of reliability—the kind that holds firm when everything else falls apart—is the foundation of Virtual Minds.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg text-slate-600 leading-relaxed"
                    >
                        Today, for the first time, this exclusive operational system is open to select new partners.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="bg-slate-50 border-l-4 border-primary p-6 rounded-r-2xl mt-8 shadow-sm"
                    >
                        <p className="text-base text-slate-600 italic leading-relaxed">
                            "I learned exactly what breaks when a practice faces a crisis, and I built systems to prevent it. We don't just answer phones; we protect the operational integrity of your medical practice."
                        </p>
                        <p className="text-sm font-bold text-slate-500 mt-3">— Cheryl, Founder & Director of Operations</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
