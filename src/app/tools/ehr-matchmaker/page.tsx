"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import EhrMatchmaker from "@/components/tools/EhrMatchmaker";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function EhrMatchmakerPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Tools", href: "/tools" },
                    { label: "EHR Matchmaker" }
                ]}
            />

            <main className="flex-grow py-12 md:py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 lg:mb-24">
                        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-6">
                            <span className="text-primary font-bold uppercase tracking-widest text-[11px]">Clinical Systems Engineering</span>
                            <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
                        </motion.div>
                        <motion.h1 {...fadeUp(0.08)} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-trust-navy leading-[1.1] mb-8 italic">
                            The EHR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Matchmaker</span>.
                        </motion.h1>
                        <motion.p {...fadeUp(0.16)} className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                            Don&apos;t choose your clinical engine based on sales calls. Use our data-driven engine to find the exact stack that fits your specific practice DNA.
                        </motion.p>
                    </div>

                    <motion.section
                        {...fadeUp(0.24)}
                        className="relative z-10"
                    >
                        <EhrMatchmaker />
                    </motion.section>

                    {/* Trust Signals */}
                    <section className="mt-24 pt-24 border-t border-slate-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <div className="size-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-primary mx-auto mb-6">
                                    <span className="material-symbols-outlined text-2xl font-bold">verified</span>
                                </div>
                                <h4 className="text-trust-navy font-bold mb-2">Independent Research</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">We are not owned by any EHR. Our recommendations are based on 1,000+ hours of clinical implementation.</p>
                            </div>
                            <div className="text-center">
                                <div className="size-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-primary mx-auto mb-6">
                                    <span className="material-symbols-outlined text-2xl font-bold">lock_open</span>
                                </div>
                                <h4 className="text-trust-navy font-bold mb-2">No Gated Access</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">Get your result instantly. We only request contact info if you want us to handle the technical setup for you.</p>
                            </div>
                            <div className="text-center">
                                <div className="size-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-primary mx-auto mb-6">
                                    <span className="material-symbols-outlined text-2xl font-bold">auto_awesome</span>
                                </div>
                                <h4 className="text-trust-navy font-bold mb-2">Automation First</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">Every matching result includes a list of pre-built macros and automation flows available for that platform.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}
