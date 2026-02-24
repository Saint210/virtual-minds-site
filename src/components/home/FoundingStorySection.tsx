"use client";

import { motion } from "framer-motion";

export default function FoundingStorySection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden text-center md:text-left">
            {/* Background Texture/Blob */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">The Origin Story</span>
                    <h2 className="font-serif text-3xl md:text-5xl text-trust-navy leading-tight">
                        "I followed her to Virtual Minds <br className="hidden md:block" />
                        <span className="text-primary italic">without hesitation.</span>"
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-trust-navy p-8 md:p-12 rounded-3xl shadow-2xl shadow-trust-navy/20 border border-white/10 relative overflow-hidden group"
                >
                    {/* Background Decoration - Subtle Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        {/* Subtle Watermark Quote */}
                        <span className="text-8xl text-white/5 font-serif absolute -top-10 -left-6 md:-left-12 select-none pointer-events-none">"</span>

                        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-serif italic relative">
                            I was spending half my day on admin &mdash; prior auths, phone calls, insurance headaches. Cheryl&apos;s team took over and stabilized everything overnight. With that off my plate, I finally have time to scale &mdash; and I&apos;ve already commissioned Virtual Minds to build our new <strong className="text-white font-bold not-italic decoration-primary/50 underline underline-offset-4">high-conversion website</strong>.
                        </p>

                        <div className="mt-10 flex flex-col md:flex-row items-center gap-6 pt-8 md:justify-between border-t border-white/10">
                            {/* Signature Block */}
                            <div className="flex items-center gap-5">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="size-16 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white font-serif font-bold text-3xl shrink-0 backdrop-blur-sm"
                                >
                                    C
                                </motion.div>
                                <div className="text-center md:text-left">
                                    <p className="font-bold text-white text-lg">Founding Client</p>
                                    <p className="text-sm text-slate-400 font-medium">Board-Certified Reproductive Psychiatrist</p>
                                </div>
                            </div>

                            {/* Verified Badge - Glassmorphic Dark Mode */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-3 shadow-lg backdrop-blur-md hover:bg-white/10 transition-colors"
                            >
                                <div className="bg-primary/20 p-1.5 rounded-full">
                                    <span className="material-symbols-outlined text-primary text-[18px] block">verified_user</span>
                                </div>
                                <div className="flex flex-col items-start leading-none gap-0.5">
                                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Verified</span>
                                    <span className="text-xs font-bold text-white">100% Client Retention</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
