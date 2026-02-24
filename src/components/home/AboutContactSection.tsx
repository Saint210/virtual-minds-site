"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutContactSection() {
    return (
        <section className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* About */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Our Commitment</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-trust-navy leading-tight">
                                Dedicated to the Psychiatrists Who Shape <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-primary italic">California’s Future</span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                                We support clinicians whose work demands the <strong className="font-medium text-trust-navy">highest level of precision</strong>. Our team brings years of specialized experience in psychiatric practice management.
                            </p>

                            <div className="relative pl-6 md:pl-8 py-2">
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "100%" }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent rounded-full"
                                />
                                <p className="text-xl md:text-2xl font-serif text-trust-navy italic leading-relaxed">
                                    "We understand the unique challenges of complex care. We build systems that match them."
                                </p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <Link href="/about" className="group inline-flex items-center gap-3 text-trust-navy font-bold text-lg hover:text-primary transition-colors">
                                <span className="border-b-2 border-primary/20 pb-1 group-hover:border-primary transition-all">Meet the Team</span>
                                <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group rounded-[2.5rem] p-12 md:p-14 overflow-hidden border border-white/10 shadow-2xl bg-[#032640]"
                    >
                        {/* Premium Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-trust-navy via-[#0B1C2E] to-black z-0" />

                        {/* Decorative Glow */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full justify-between gap-10">
                            <div>
                                <motion.div
                                    initial={{ x: -10, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6"
                                >
                                    <span className="text-accent font-bold uppercase tracking-widest text-xs">Limited Availability</span>
                                </motion.div>
                                <h3 className="font-serif text-4xl md:text-5xl text-white mb-6 leading-tight">Let's Talk About Your Practice</h3>
                                <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-2 border-primary/30 pl-6">
                                    We partner with a limited number of psychiatrists to ensure the highest level of service.
                                </p>

                                <div className="space-y-1 text-sm text-slate-400 font-medium">
                                    <p className="uppercase tracking-widest text-xs opacity-50 mb-2">Private Practice Operations</p>
                                    <p className="text-white text-base">Virtual Minds, LLC</p>
                                    <p className="text-white/80 font-mono">(310) 400-6266</p>
                                </div>
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link href="/book-consultation" className="w-full block bg-[#C05621] hover:bg-[#A0451A] text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-[0_10px_40px_-10px_rgba(192,86,33,0.5)] text-center transition-all hover:shadow-[0_20px_60px_-15px_rgba(192,86,33,0.6)] border-t border-white/20">
                                    Request a Consultation
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
