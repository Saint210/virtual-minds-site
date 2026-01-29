import Link from "next/link";

export default function PortalDashboard() {
    return (
        <div className="max-w-6xl mx-auto space-y-10">

            {/* 
        WELCOME & PRIMARY CTA 
      */}
            <section className="bg-white rounded-[40px] p-10 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Start Your Digital Migration.</h2>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        Our AI engine is ready to transform your existing marketing into an
                        <span className="text-[#D2691E] font-bold"> Elite Practice </span> ecosystem.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <Link
                            href="/portal/onboarding"
                            className="px-8 py-4 bg-[#D2691E] text-white font-bold rounded-2xl hover:bg-[#B8860B] transition-all hover:scale-105 shadow-lg shadow-[#D2691E]/20"
                        >
                            Launch AI Migration
                        </Link>
                        <Link
                            href="/portal/store"
                            className="px-8 py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl hover:bg-slate-200 transition-all"
                        >
                            View Add-ons
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-64 aspect-square bg-slate-50 rounded-3xl flex items-center justify-center relative group overflow-hidden border border-slate-100 italic text-slate-300">
                    <span className="material-symbols-outlined text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">auto_fix</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D2691E]/10 to-transparent"></div>
                </div>
            </section>

            {/* 
        GRID STATS 
      */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Site Status */}
                <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 font-bold italic">
                            <span className="material-symbols-outlined">public</span>
                        </div>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-[10px] font-black uppercase tracking-widest rounded-full">In Construction</span>
                    </div>
                    <h3 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Production Site</h3>
                    <p className="text-xl font-bold text-slate-900">Wait for Migration</p>
                    <div className="mt-6 pt-6 border-t border-slate-50 text-xs text-slate-400">
                        Primary domain: <span className="text-slate-900 font-bold">Pending...</span>
                    </div>
                </div>

                {/* Leads Stat */}
                <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600">
                            <span className="material-symbols-outlined">trending_up</span>
                        </div>
                    </div>
                    <h3 className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-1">Total Leads Captured</h3>
                    <p className="text-3xl font-black text-slate-900">0</p>
                    <div className="mt-6 pt-6 border-t border-slate-50 text-xs text-slate-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-slate-200"></span> No active calculators detected.
                    </div>
                </div>

                {/* Efficiency Gains */}
                <div className="bg-[#1E1E1E] p-8 rounded-[32px] text-white shadow-2xl shadow-black/10">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-[#D2691E]">
                            <span className="material-symbols-outlined">bolt</span>
                        </div>
                    </div>
                    <h3 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-1">Admin Savings (est.)</h3>
                    <p className="text-3xl font-black text-white">$0.00</p>
                    <div className="mt-6 pt-6 border-t border-white/5 text-xs text-slate-500 italic">
                        Complete onboarding to see projected savings.
                    </div>
                </div>
            </div>

            {/* 
        MODULES / GROWTH SHOP 
      */}
            <div>
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-serif font-bold text-slate-900">Practice Ecosystem</h3>
                    <Link href="/portal/store" className="text-[#D2691E] font-bold text-sm hover:underline">Customize Modules →</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { id: 'cms', name: 'Elite Website', status: 'Inactive', icon: 'web' },
                        { id: 'seo', name: 'pSEO Locations', status: 'Inactive', icon: 'map' },
                        { id: 'calc', name: 'Patient Calculator', status: 'Inactive', icon: 'calculate' },
                        { id: 'auth', name: 'Patient Portal', status: 'Coming Soon', icon: 'login' },
                    ].map((mod) => (
                        <div key={mod.id} className="bg-white p-6 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:border-[#D2691E]/20 transition-all cursor-pointer">
                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-[#FAF8F3] group-hover:text-[#D2691E] transition-all mb-4">
                                <span className="material-symbols-outlined text-2xl">{mod.icon}</span>
                            </div>
                            <h4 className="font-bold text-slate-900 mb-1">{mod.name}</h4>
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{mod.status}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
