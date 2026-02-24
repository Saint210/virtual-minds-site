"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ProtectedEmail from "@/components/ui/ProtectedEmail";

export default function ContactHero() {
    return (
        <div className="flex flex-col gap-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="group relative"
            >
                <div className="relative aspect-[16/9] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 bg-white">
                    <Image
                        src="/images/contact-hero.png"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        alt="Psychiatric Operational Strategy Session"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/30 via-transparent to-transparent" />
                </div>
            </motion.div>

            <div className="flex flex-col gap-6">
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-primary font-black uppercase tracking-[0.4em] text-xs italic"
                >
                    Direct Mission Access
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-serif text-5xl md:text-7xl font-bold text-trust-navy leading-[1] tracking-tight"
                >
                    Build Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-x">
                        Perfect Practice.
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl italic"
                >
                    In 15 minutes, we'll identify exactly where your practice is leaking billable revenue and reclaim your clinical autonomy.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col gap-3 p-10 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:border-trust-navy hover:shadow-xl transition-all group hover:-translate-y-1"
                >
                    <span className="material-symbols-outlined text-primary text-4xl mb-2 group-hover:scale-110 transition-transform">mail</span>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Secure Messaging</p>
                    <div className="font-bold text-trust-navy">
                        <ProtectedEmail
                            localPart="cheryl"
                            domain="thevirtualminds.com"
                            buttonClassName="rounded-md bg-slate-100 px-4 py-3 md:px-3 md:py-1 text-xs font-bold text-trust-navy hover:bg-primary hover:text-white transition-all"
                            revealedClassName="underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
                            label="Reveal Protocol"
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col gap-3 p-10 rounded-[2rem] bg-white border border-slate-200 shadow-sm hover:border-trust-navy hover:shadow-xl transition-all group hover:-translate-y-1"
                >
                    <span className="material-symbols-outlined text-primary text-4xl mb-2 group-hover:scale-110 transition-transform">call</span>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Encryption Line</p>
                    <p className="font-bold text-trust-navy text-xl">(310) 400-6266</p>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-trust-navy text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary/20 transition-all" />
                <div className="flex items-center gap-4 mb-8">
                    <span className="material-symbols-outlined text-primary text-4xl">inventory_2</span>
                    <h3 className="font-serif text-2xl font-bold italic">The Operational Promise</h3>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed italic mb-8">
                    "We don't just 'send a person'. We deploy a hardened administrative layer that understands the specialized documentation and billing requirements of California psychiatry on day one."
                </p>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-1 bg-primary rounded-full" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Firm Core Principles</span>
                </div>
            </motion.div>
        </div>
    );
}
