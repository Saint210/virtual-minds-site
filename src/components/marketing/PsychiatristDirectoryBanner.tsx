import Link from "next/link";

export default function PsychiatristDirectoryBanner() {
    return (
        <div className="relative bg-white border-b border-gray-200 text-trust-navy py-6 px-4 overflow-hidden">
            <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <span className="material-symbols-outlined text-3xl text-primary drop-shadow-lg">workspace_premium</span>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                    </div>
                    <div>
                        <p className="font-bold text-xl text-trust-navy">California Psychiatrist Directory</p>
                        <p className="text-sm text-slate-600 font-medium">Exclusive Network • Premium SEO Tools • Video Optimization</p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
                        <span className="material-symbols-outlined text-sm">workspace_premium</span>
                        <span className="font-semibold">Featured Listings</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
                        <span className="material-symbols-outlined text-sm">workspace_premium</span>
                        <span className="font-semibold">Video SEO Suite</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600">
                        <span className="material-symbols-outlined text-sm">workspace_premium</span>
                        <span className="font-semibold">Maps Dominance</span>
                    </div>
                    <Link
                        href="/california-psychiatrist-directory"
                        className="relative bg-primary text-white px-8 py-3.5 rounded-full text-sm font-bold hover:bg-primary/90 transition-all transform hover:scale-105 flex items-center gap-2 shadow-xl"
                    >
                        <span className="material-symbols-outlined !text-sm font-bold">diamond</span>
                        Learn More
                    </Link>
                </div>
            </div>
        </div>
    );
}
