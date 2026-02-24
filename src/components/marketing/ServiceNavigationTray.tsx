"use client";

import Link from "next/link";
import { useTracking } from "@/hooks/useTracking";

export default function ServiceNavigationTray() {
    const { trackCTAClick } = useTracking();
    return (
        <section className="py-24 bg-[#FAF8F3]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col gap-8">
                    {/* Centered Premium Navigator */}
                    <div className="max-w-4xl mx-auto w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                        <div className="p-10 md:p-16 text-center">
                            <span className="text-[#D2691E] font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Practice Intelligence Hub</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-trust-navy mb-6 italic">Looking for a <br />specific protocol?</h2>
                            <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-display">
                                Access our specialized practice resources to compare management models, verify clinical yield, or plan your practice roadmap.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/pricing" className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FAF8F3] to-white hover:from-white hover:to-[#FAF8F3] border border-slate-200 hover:border-[#D2691E]/30 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-1">
                                    <span className="material-symbols-outlined text-[#D2691E] group-hover:scale-110 transition-transform">payments</span>
                                    <span className="font-bold text-trust-navy">Investment Ledger</span>
                                </Link>
                                <Link href="/case-studies" className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FAF8F3] to-white hover:from-white hover:to-[#FAF8F3] border border-slate-200 hover:border-[#D2691E]/30 rounded-2xl transition-all hover:shadow-lg hover:-translate-y-1">
                                    <span className="material-symbols-outlined text-[#D2691E] group-hover:scale-110 transition-transform">analytics</span>
                                    <span className="font-bold text-trust-navy">Yield Analysis</span>
                                </Link>
                                <Link
                                    href="/book-consultation"
                                    onClick={() => trackCTAClick('See My Recovery Plan', '/book-consultation', 'service_navigation_tray')}
                                    className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-2xl transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
                                >
                                    <span className="material-symbols-outlined group-hover:rotate-12 transition-transform text-white">calendar_today</span>
                                    <span className="font-bold">See My Recovery Plan</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
