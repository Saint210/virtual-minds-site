"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
    return (
        <div className="sticky top-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative bg-white border border-slate-200 rounded-[2.5rem] p-10 md:p-14 shadow-2xl"
            >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-trust-navy via-primary to-trust-navy" />
                <div className="flex items-center gap-3 mb-10">
                    <div className="size-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                    <h2 className="text-2xl font-serif font-bold text-trust-navy">Secure Terminal Access</h2>
                </div>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Lead Practitioner</label>
                            <input type="text" placeholder="Dr. Jane Doe" className="w-full h-16 px-8 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-trust-navy focus:ring-1 focus:ring-trust-navy focus:outline-none transition-all font-bold text-trust-navy placeholder:text-slate-300" required />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Secure Network Email</label>
                            <input type="email" placeholder="jane@practice.com" className="w-full h-16 px-8 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-trust-navy focus:ring-1 focus:ring-trust-navy focus:outline-none transition-all font-bold text-trust-navy placeholder:text-slate-300" required />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Practice Scale</label>
                            <div className="relative">
                                <select className="w-full h-16 px-8 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-trust-navy focus:ring-1 focus:ring-trust-navy focus:outline-none transition-all font-bold text-trust-navy appearance-none">
                                    <option>Solo Practice (1 Provider)</option>
                                    <option>Group Practice (2-5 Providers)</option>
                                    <option>Clinical Enterprise (6+ Providers)</option>
                                </select>
                                <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Operational Bottleneck</label>
                            <textarea rows={4} placeholder="E.g. pharmacy coordination, insurance denials, intake lag..." className="w-full p-8 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-trust-navy focus:ring-1 focus:ring-trust-navy focus:outline-none transition-all font-bold text-trust-navy placeholder:text-slate-300 resize-none font-medium"></textarea>
                        </div>
                    </div>

                    <button type="submit" className="w-full h-20 rounded-2xl bg-primary text-white font-black text-xl shadow-xl shadow-primary/20 hover:scale-[1.02] hover:shadow-2xl transition-all flex items-center justify-center gap-4 group">
                        Request Practice Audit
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">analytics</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                        <span className="material-symbols-outlined text-sm">lock</span>
                        Encrypted Transmission
                    </div>
                </form>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-8 bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-lg"
            >
                <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary font-bold">schedule</span>
                    <h4 className="font-bold text-trust-navy">Firm Hours</h4>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between text-xs font-bold text-slate-500">
                        <span>Mon — Fri</span>
                        <span className="text-trust-navy">09:00 — 17:00 PT</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold text-slate-500">
                        <span>Sat — Sun</span>
                        <span className="text-red-500 uppercase tracking-widest">Protocol Only</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
