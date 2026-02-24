"use client";

export default function BillingDashboardGraphic() {
    return (
        <div className="relative w-full h-full min-h-[420px] bg-[#1A2332] rounded-[2.5rem] shadow-2xl border-4 border-[#1A2332] overflow-hidden flex flex-col">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
            </div>

            {/* Main Dashboard Content */}
            <div className="relative z-10 p-8 md:p-10 flex-grow flex flex-col">

                {/* Header Bar */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <div className="size-12 rounded-2xl bg-white/10 flex items-center justify-center shadow-lg border border-white/10">
                            <span className="material-symbols-outlined text-[#D2691E] text-2xl">account_balance_wallet</span>
                        </div>
                        <div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D2691E]">Revenue Cycle Monitor</div>
                            <div className="text-xs text-slate-300 font-bold">Real-time Billing Intelligence</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 bg-green-500/20 px-3 py-1.5 rounded-full border border-green-500/30">
                        <div className="size-2 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-500/50" />
                        <span className="text-[10px] font-bold text-green-300 uppercase tracking-widest">Active System</span>
                    </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {/* Claims Approval */}
                    <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-12 h-12 bg-green-50 rounded-bl-2xl -mr-2 -mt-2 transition-transform group-hover:scale-110" />
                        <div className="flex items-center gap-2 mb-3 relative z-10">
                            <span className="material-symbols-outlined text-green-600 text-lg">check_circle</span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Claims Approval</span>
                        </div>
                        <div className="text-3xl font-serif font-bold text-[#1A2332] mb-1 relative z-10">98.4%</div>
                        <div className="text-[10px] text-slate-400 font-medium relative z-10">Industry Lead</div>
                    </div>

                    {/* Prior Auths */}
                    <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-12 h-12 bg-[#D2691E]/10 rounded-bl-2xl -mr-2 -mt-2 transition-transform group-hover:scale-110" />
                        <div className="flex items-center gap-2 mb-3 relative z-10">
                            <span className="material-symbols-outlined text-[#D2691E] text-lg">schedule</span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Auth Time</span>
                        </div>
                        <div className="text-3xl font-serif font-bold text-[#1A2332] mb-1 relative z-10">24hrs</div>
                        <div className="text-[10px] text-slate-400 font-medium relative z-10">Avg Turnaround</div>
                    </div>

                    {/* Revenue Recovery */}
                    <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-12 h-12 bg-[#D2691E]/10 rounded-bl-2xl -mr-2 -mt-2 transition-transform group-hover:scale-110" />
                        <div className="flex items-center gap-2 mb-3 relative z-10">
                            <span className="material-symbols-outlined text-[#D2691E] text-lg">trending_up</span>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Recovery</span>
                        </div>
                        <div className="text-3xl font-serif font-bold text-[#1A2332] mb-1 relative z-10">$26k</div>
                        <div className="text-[10px] text-slate-400 font-medium relative z-10">Annual Avg</div>
                    </div>
                </div>

                {/* Active Tasks List */}
                <div className="bg-white/5 rounded-3xl p-6 border border-white/10 shadow-lg flex-grow relative overflow-hidden backdrop-blur-sm">
                    {/* Vertical Accent Line */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#D2691E]" />

                    <div className="flex items-center justify-between mb-6">
                        <div className="text-xs font-black text-white uppercase tracking-widest opacity-90">Today's Billing Activity</div>
                        <div className="text-[10px] font-bold text-slate-400">Live Feed</div>
                    </div>

                    <div className="space-y-4">
                        {[
                            { task: 'Insurance Verification Complete', status: 'done', color: 'green' },
                            { task: 'Prior Auth Submitted - Blue Shield', status: 'pending', color: 'terracotta' },
                            { task: 'Superbills Generated (12 patients)', status: 'done', color: 'green' },
                            { task: 'Claim Resubmission - Anthem', status: 'in-progress', color: 'blue' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0 group">
                                <div className={`size-8 rounded-full flex items-center justify-center shrink-0 ${item.color === 'green' ? 'bg-green-500/20 text-green-300' :
                                    item.color === 'terracotta' ? 'bg-[#D2691E]/20 text-[#D2691E]' :
                                        'bg-blue-500/20 text-blue-300'
                                    }`}>
                                    <span className="material-symbols-outlined text-sm font-bold">
                                        {item.status === 'done' ? 'check' : item.status === 'pending' ? 'hourglass_top' : 'sync'}
                                    </span>
                                </div>

                                <span className="text-sm text-slate-300 font-medium flex-grow group-hover:text-white transition-colors">{item.task}</span>

                                <div className={`size-2 rounded-full shrink-0 ${item.color === 'green' ? 'bg-green-400' :
                                    item.color === 'terracotta' ? 'bg-[#D2691E]' :
                                        'bg-blue-400'
                                    }`} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Decorative Glow */}
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D2691E]/10 rounded-full blur-3xl -ml-24 -mb-24 pointer-events-none" />
        </div>
    );
}
