"use client";

import Image from "next/image";

export default function ServiceArchitectureGraphic() {
    return (
        <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group/graphic bg-[#EDE8E0]">
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                    src="/images/service-architecture-3d.jpg"
                    alt="Psychiatric Practice Control Center 3D Architecture"
                    fill
                    className="object-contain scale-110 group-hover/graphic:scale-115 transition-transform duration-700"
                    priority
                />
            </div>

            {/* Subtle Overlay to ensure text readability if overlaid, though mainly for polish */}
            <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/20 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Badge - Metallic Plate */}
            <div className="absolute bottom-4 left-4 right-4 md:left-8 md:right-8 p-4 bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/50 shadow-xl z-30 flex items-center gap-4 group-hover/graphic:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-[#D2691E]/10 flex items-center justify-center border border-[#D2691E]/20 shrink-0">
                    <span className="material-symbols-outlined text-[#D2691E] text-xl">verified</span>
                </div>
                <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-[#D2691E] mb-1">Firm-Wide Standard</p>
                    <p className="text-xs md:text-sm font-medium text-slate-600 italic leading-snug">"Precision at every clinical touchpoint."</p>
                </div>
            </div>
        </div>
    );
}
