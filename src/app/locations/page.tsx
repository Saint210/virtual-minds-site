import { locations } from "@/data/locations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "California Psychiatric Service Area | Virtual Minds Network",
    description: "Virtual Minds provides specialized administrative support to psychiatric practices across California. Viewing our coverage map and regional economic analysis.",
    alternates: {
        canonical: 'https://thevirtualminds.com/locations'
    },
    openGraph: {
        title: "California Psychiatric Service Area | Virtual Minds Network",
        description: "From San Diego to Sacramento, we provide localized administrative intelligence for California's mental health sector.",
        url: "https://thevirtualminds.com/locations",
        siteName: "Virtual Minds",
        locale: "en_US",
        type: "website",
    }
};

export default function LocationsIndexPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3] font-sans text-slate-600">
            <Navbar />

            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="relative pt-32 pb-20 overflow-hidden">
                    {/* Technical Grid Background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]" />
                    </div>

                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -mr-32 -mt-32" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
                                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                <span className="text-trust-navy">Network Map</span>
                            </nav>

                            <div className="inline-flex items-center gap-2 bg-white border border-trust-navy/10 rounded-full px-4 py-1.5 text-trust-navy text-[11px] font-black uppercase tracking-widest mb-6 shadow-sm">
                                <span className="material-symbols-outlined text-primary text-sm">public</span>
                                Statewide Coverage
                            </div>

                            <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                                The California <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                                    Psychiatric Network.
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium max-w-2xl">
                                Localized administrative intelligence for the modern private practice. Select your region to analyze specific overhead savings and compliance protocols.
                            </p>
                        </div>
                    </div>
                </section>

                {/* LOCATIONS GRID - SYSTEM MODULE STYLE */}
                <section className="pb-32 px-6 border-t border-slate-100 pt-24 bg-white relative">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Active Nodes</span>
                                <h2 className="font-serif text-4xl text-trust-navy leading-tight">Service <span className="italic text-slate-400">Territories</span></h2>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-px w-12 bg-slate-200"></div>
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{locations.length} Markets Activated</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {locations.map((location, idx) => (
                                <Link
                                    key={location.slug}
                                    href={`/locations/${location.slug}`}
                                    className="group relative flex flex-col bg-white rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-slate-200 hover:border-trust-navy hover:shadow-xl hover:shadow-trust-navy/5"
                                >
                                    {/* Technical Grid Background */}
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* ID Tag */}
                                    <div className="flex justify-between items-start mb-6 relative z-10">
                                        <div className="size-12 rounded-xl flex items-center justify-center transition-colors duration-300 bg-slate-50 text-trust-navy group-hover:bg-trust-navy group-hover:text-white">
                                            <span className="material-symbols-outlined text-2xl">location_city</span>
                                        </div>
                                        <span className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-widest group-hover:text-primary transition-colors">
                                            SYS_LOC_{String(idx + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="mb-6 relative z-10">
                                        <h3 className="font-serif text-xl font-bold text-trust-navy mb-2 leading-tight group-hover:text-primary transition-colors">
                                            {location.name}
                                        </h3>
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider"> Avg Savings:</span>
                                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                                                {location.rentSavings}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                                            {location.metaDesc}
                                        </p>
                                    </div>

                                    {/* Footer */}
                                    <div className="mt-auto pt-6 border-t border-slate-100 relative z-10">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="material-symbols-outlined text-primary text-sm">verified</span>
                                            <span className="text-[10px] font-bold text-trust-navy uppercase tracking-wide">
                                                Coverage Active
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <p className="text-[10px] text-slate-400 font-mono">
                                                {location.faqZone}
                                            </p>
                                            <span className="material-symbols-outlined text-slate-300 text-sm group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                                        </div>
                                    </div>

                                    {/* Active State Indicator */}
                                    <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NETWORK VALUE PROP */}
                <section className="py-24 bg-trust-navy text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                        <span className="inline-block p-4 rounded-2xl bg-white/10 text-primary mb-8 animate-pulse">
                            <span className="material-symbols-outlined text-4xl">travel_explore</span>
                        </span>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Why Location Matters <br /> for Virtual Staffing.</h2>

                        <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-12">
                            A VA in Manila doesn't know that Kaiser predominates in Sacramento or that Cedars-Sinai has specific referral loops in Beverly Hills.
                            <strong className="text-white block mt-4">Our systems are engineered with local intelligence.</strong>
                        </p>

                        <Link href="/book-consultation" className="inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-[#B8860B] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                            Find a California Specialist
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
