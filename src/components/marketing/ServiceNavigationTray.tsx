import Link from "next/link";

export default function ServiceNavigationTray() {
    return (
        <section className="py-24 bg-[#FAF8F3]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col gap-8">
                    {/* Unified Premium Navigator */}
                    <div className="bg-white rounded-[44px] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                        <div className="grid lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">

                            {/* Left Side: Next Steps (3 cols) */}
                            <div className="lg:col-span-3 p-10 md:p-14">
                                <span className="text-[#D2691E] font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Practice Navigation</span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2A2A2A] mb-6 italic">Looking for something <br />specific?</h2>
                                <p className="text-slate-500 text-lg mb-10 max-w-xl leading-relaxed">
                                    Use our specialized resources to compare service models, review pricing, or architect your custom practice package.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link href="/pricing" className="group flex items-center gap-3 px-8 py-4 bg-[#FAF8F3] hover:bg-white border border-slate-200 hover:border-[#D2691E]/30 rounded-2xl transition-all hover:shadow-lg">
                                        <span className="material-symbols-outlined text-[#D2691E] group-hover:scale-110 transition-transform">payments</span>
                                        <span className="font-bold text-[#2A2A2A]">View Pricing</span>
                                    </Link>
                                    <Link href="/resources" className="group flex items-center gap-3 px-8 py-4 bg-[#FAF8F3] hover:bg-white border border-slate-200 hover:border-[#D2691E]/30 rounded-2xl transition-all hover:shadow-lg">
                                        <span className="material-symbols-outlined text-[#D2691E] group-hover:scale-110 transition-transform">library_books</span>
                                        <span className="font-bold text-[#2A2A2A]">Resources Hub</span>
                                    </Link>
                                    <Link href="/book-consultation" className="group flex items-center gap-3 px-8 py-4 bg-[#D2691E] text-white rounded-2xl transition-all shadow-xl shadow-[#D2691E]/20 hover:scale-105 active:scale-95">
                                        <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">calendar_today</span>
                                        <span className="font-bold">Book Strategy Call</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Side: Directory Callout (2 cols) */}
                            <div className="lg:col-span-2 bg-[#2A2A2A] p-10 md:p-14 relative overflow-hidden flex flex-col justify-center">
                                {/* Subtle Background Pattern or Glow */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E]/10 blur-[80px] rounded-full -mr-32 -mt-32"></div>

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2.5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm">
                                            <span className="material-symbols-outlined text-[#D2691E] text-3xl font-bold">workspace_premium</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl !text-white" style={{ color: 'white' }}>California Directory</h3>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-[#D2691E] mt-0.5">Elite Network</p>
                                        </div>
                                    </div>

                                    <p className="text-slate-300 text-sm leading-relaxed mb-8">
                                        Join California's premier psychiatrist directory. Gain elite listings, video SEO suites, and dominant map presence.
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                        {[
                                            { icon: 'star', label: 'Premium Listings' },
                                            { icon: 'videocam', label: 'Video SEO Suite' },
                                            { icon: 'map', label: 'Maps Dominance' },
                                            { icon: 'trending_up', label: 'Advanced SEO' }
                                        ].map((feat, i) => (
                                            <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-300">
                                                <span className="material-symbols-outlined !text-sm text-[#D2691E]">{feat.icon}</span>
                                                {feat.label}
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/california-psychiatrist-directory" className="inline-flex items-center gap-2 !text-white font-black uppercase tracking-[0.2em] text-xs group" style={{ color: 'white' }}>
                                        Learn More <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
