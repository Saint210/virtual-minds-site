"use client";

export default function RevenueDashboardGraphic() {
    return (
        <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-white to-slate-50 rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0 bg-[radial-gradient(#2A2A2A_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 p-6 md:p-10 h-full flex flex-col">

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Live Practice Metrics</span>
                    </div>
                    <div className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Q1 2026</div>
                </div>

                {/* Key Metric - Annual Recovery */}
                <div className="mb-6">
                    <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Annual Revenue Recovery</div>
                    <div className="text-5xl md:text-6xl font-serif font-black text-trust-navy mb-1 tracking-tight">
                        $300,000
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-600 text-lg">trending_up</span>
                        <span className="text-green-600 font-bold text-xs">+34% vs. Previous Year</span>
                    </div>
                </div>

                {/* Status Indicators */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-1">
                            <span className="material-symbols-outlined text-green-600 text-xl">check_circle</span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Claims</span>
                        </div>
                        <div className="text-2xl font-black text-trust-navy">98.4%</div>
                        <div className="text-[9px] text-slate-400 font-medium mt-0.5">Approval Rate</div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-1">
                            <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Time Saved</span>
                        </div>
                        <div className="text-2xl font-black text-trust-navy">20+ hrs</div>
                        <div className="text-[9px] text-slate-400 font-medium mt-0.5">Per Week</div>
                    </div>
                </div>

                {/* Mini Revenue Graph */}
                <div className="flex-grow flex flex-col justify-end min-h-0">
                    <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Monthly Revenue Trend</div>
                    <div className="flex items-end gap-1.5 h-16">
                        {[65, 70, 68, 75, 82, 88, 95, 100].map((height, i) => (
                            <div key={i} className="flex-1 bg-gradient-to-t from-primary to-[#B8860B] rounded-t-lg transition-all hover:opacity-80"
                                style={{ height: `${height}%` }} />
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[8px] text-slate-300 font-bold uppercase tracking-wider">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                        <span>Jul</span>
                        <span className="text-primary">Aug</span>
                    </div>
                </div>

            </div>

            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
        </div>
    );
}
