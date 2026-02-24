export default function EHRTrustBar() {
    const ehrs = [
        "SimplePractice",
        "DrChrono",
        "CharmHealth",
        "Luminello",
        "AdvancedMD",
        "Kareo"
    ];

    return (
        <div className="py-16 bg-white border-y border-slate-50 relative overflow-hidden">
            {/* Subtle Gradient Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/50 to-transparent pointer-events-none" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                    <div className="flex flex-col items-center lg:items-start">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 whitespace-nowrap bg-slate-50 px-3 py-1 rounded-full border border-slate-100 mb-2">
                            Platform Native
                        </span>
                        <h3 className="text-trust-navy font-serif font-bold text-sm italic opacity-60">Full EHR Fluency</h3>
                    </div>

                    <div className="h-px w-12 bg-slate-200 hidden lg:block" />

                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                        {ehrs.map((ehr) => (
                            <div
                                key={ehr}
                                className="text-xl md:text-2xl font-serif font-semibold text-trust-navy/30 hover:text-trust-navy transition-all duration-700 cursor-default select-none hover:scale-110"
                            >
                                {ehr}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
