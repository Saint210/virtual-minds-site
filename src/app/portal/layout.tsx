import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
        },
    },
};

export default function PortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-[#F8FAFC]">
            {/* 
        SIDEBAR 
      */}
            <aside className="w-72 bg-[#1E1E1E] text-white flex flex-col shrink-0">
                <div className="p-8 border-b border-white/5">
                    <Link href="/portal" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-[#D2691E] rounded-xl flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform shadow-lg shadow-[#D2691E]/20">
                            V
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif font-bold tracking-tight text-xl leading-none">Virtual Minds</span>
                            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">Practitioner OS</span>
                        </div>
                    </Link>
                </div>

                <nav className="flex-grow p-6 space-y-2">
                    {[
                        { name: "Overview", icon: "dashboard", href: "/portal", active: true },
                        { name: "Migration Hub", icon: "auto_fix", href: "/portal/onboarding" },
                        { name: "Brand Voice", icon: "fingerprint", href: "/portal/brand" },
                        { name: "Practice Site", icon: "public", href: "/portal/site" },
                        { name: "Add-on Store", icon: "shopping_bag", href: "/portal/store" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 ${item.active
                                ? "bg-[#D2691E] text-white shadow-xl shadow-[#D2691E]/20"
                                : "text-slate-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <span className="material-symbols-outlined">
                                {item.icon}
                            </span>
                            <span className="font-semibold text-sm">{item.name}</span>
                        </Link>
                    ))}
                </nav>

                <div className="p-6 border-t border-white/5 space-y-6">
                    <div className="bg-gradient-to-br from-white/10 to-transparent rounded-3xl p-5 border border-white/10">
                        <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-3">Service Tier</p>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-bold">Premium Concierge</span>
                            <span className="material-symbols-outlined text-[#D2691E] text-lg">verified</span>
                        </div>
                    </div>

                    <button className="flex items-center gap-3 px-5 py-2 w-full text-slate-500 hover:text-white transition-colors group">
                        <span className="material-symbols-outlined group-hover:rotate-45 transition-transform">settings</span>
                        <span className="text-sm font-bold">Settings</span>
                    </button>
                </div>
            </aside>

            {/* 
        MAIN CONTENT 
      */}
            <main className="flex-grow flex flex-col overflow-hidden bg-white">
                {/* Top Header */}
                <header className="h-24 flex items-center justify-between px-10 shrink-0">
                    <div>
                        <h1 className="text-2xl font-serif font-bold text-slate-900">Dashboard</h1>
                        <p className="text-sm text-slate-400">Manage your practice digital ecosystem</p>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full border border-slate-100">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-xs font-bold text-slate-600 tracking-tight">VIRTUAL MINDS AI ONLINE</span>
                        </div>

                        <div className="flex items-center gap-4 pl-8 border-l border-slate-100">
                            <div className="text-right">
                                <p className="text-sm font-black text-slate-900 leading-none">Sarah Chen, MD</p>
                                <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold">Account Owner</p>
                            </div>
                            <div className="w-12 h-12 rounded-2xl bg-slate-200 flex items-center justify-center overflow-hidden border-2 border-slate-50 shadow-sm">
                                <span className="material-symbols-outlined text-slate-400">person</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Scrollable Page Wrapper */}
                <div className="flex-grow overflow-y-auto p-10 bg-slate-50/50">
                    {children}
                </div>
            </main>
        </div>
    );
}
