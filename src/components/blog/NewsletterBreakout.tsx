"use client";

import React from 'react';

export default function NewsletterBreakout() {
    return (
        <div className="my-24 relative rounded-[2.5rem] overflow-hidden bg-[#2A2A2A] shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] z-0"></div>
            {/* Subtle ambient heavy glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D2691E]/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 p-12 lg:p-20 items-center">
                <div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold !text-white mb-6 leading-tight">
                        The Private Practice <br />
                        <span className="text-[#D2691E]">Growth Kit</span>
                    </h2>
                    <p className="text-slate-300 text-lg mb-10 leading-relaxed font-light opacity-90">
                        Stop moonlighting as an office manager. Get the exact blueprints used to build a scalable, high-revenue practice—without the burnout.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {['Scaling Roadmap PDF', 'Hiring Checklist', 'ROI Calculator Template'].map((item, i) => (
                            <li key={i} className="flex items-center gap-4 text-white font-medium">
                                <div className="w-6 h-6 rounded-full bg-[#D2691E]/20 flex items-center justify-center border border-[#D2691E]/50">
                                    <span className="material-symbols-outlined text-[#D2691E] text-sm font-bold">check</span>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col gap-5">
                        <div>
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block ml-1">Email Address</label>
                            <input
                                type="email"
                                placeholder="doctor@example.com"
                                className="w-full px-6 py-4 rounded-xl bg-[#1A1A1A]/80 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#D2691E] focus:ring-1 focus:ring-[#D2691E] transition-all"
                            />
                        </div>
                        <button className="w-full bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold py-4 rounded-xl transition-all shadow-xl hover:shadow-[#D2691E]/20 hover:scale-[1.02] active:scale-[0.98]">
                            Send Me The Kit
                        </button>
                        <p className="text-slate-500 text-xs text-center mt-2 italic">No spam, unsubscribe anytime.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
