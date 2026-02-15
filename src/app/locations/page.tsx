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

                {/* LOCATIONS GRID - PREMIUM DIGITAL MAP INTERFACE */}
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

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {locations.map((location, idx) => (
                                <Link
                                    key={location.slug}
                                    href={`/locations/${location.slug}`}
                                    className="group relative flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
                                >
                                    {/* 1. DIGITAL MAP HEADER (Image Replacement) */}
                                    <div className="relative h-48 w-full overflow-hidden bg-[#0F172A]">
                                        <Image
                                            src={location.heroImage}
                                            alt={location.heroImageAlt || location.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-90" />

                                        {/* Technical Grid Overlay (Subtle) */}
                                        <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)] [background-size:24px_24px]" />

                                        {/* City Abbreviation Monogram */}
                                        <div className="absolute bottom-[-1rem] right-[-1rem] text-[8rem] font-serif font-bold text-white/10 leading-none select-none pointer-events-none group-hover:text-white/20 transition-colors duration-500">
                                            {location.name.substring(0, 1)}
                                        </div>
                                    </div>

                                    {/* 2. CARD CONTENT */}
                                    <div className="p-8 pb-6 flex flex-col flex-grow relative">
                                        {/* Decorative Sidebar Line */}
                                        <div className="absolute left-0 top-10 bottom-10 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="font-serif text-3xl text-trust-navy group-hover:text-primary transition-colors duration-300">
                                                    {location.name}
                                                </h3>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <span className="material-symbols-outlined text-slate-300 text-sm">location_on</span>
                                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">California Market</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Metrics Grid */}
                                        <div className="grid grid-cols-2 gap-4 my-6 p-4 rounded-xl bg-slate-50 border border-slate-100 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors duration-300">
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Avg Savings</p>
                                                <p className="text-lg font-bold text-emerald-600">{location.rentSavings}</p>
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Impact</p>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-trust-navy font-bold">15+ Hrs</span>
                                                    <span className="text-[9px] text-slate-400">/wk</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                            {location.metaDesc}
                                        </p>

                                        {/* Footer */}
                                        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between group/footer">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-mono font-bold text-slate-300 group-hover:text-primary transition-colors">
                                                    SYS_ID_{String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-trust-navy text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                                                Market Data
                                                <span className="material-symbols-outlined text-sm text-primary">arrow_forward</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CALIFORNIA MARKET INTELLIGENCE */}
                <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden border-t border-white/5">
                    {/* Background Detail */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 lg:items-start">

                            {/* Left Column: Narrative & Stats */}
                            <div className="lg:w-5/12 space-y-8">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"></span>
                                        Market Intelligence
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-serif font-bold leading-[1.1] text-white mb-6">
                                        Why Local  <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Knowledge Matters.</span>
                                    </h2>
                                    <p className="text-lg text-slate-400 leading-relaxed border-l-2 border-primary/30 pl-6">
                                        A VA in Manila doesn't know that Kaiser predominates in Sacramento or how SB 525 impacts your overhead. <strong className="text-white font-medium">We engineer our systems with deep local intelligence.</strong>
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                                    <div className="group relative bg-[#0F172A] border border-white/5 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Avg. Psych Salary (CA)</span>
                                            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-xl">payments</span>
                                            </div>
                                        </div>
                                        <div className="text-3xl font-mono font-bold text-white tracking-tight">$278k - $355k</div>
                                        <div className="mt-2 text-xs text-slate-500 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Market Rate Benchmark
                                        </div>
                                    </div>

                                    <div className="group relative bg-[#0F172A] border border-white/5 hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Regulatory Load</span>
                                            <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 group-hover:scale-110 transition-transform">
                                                <span className="material-symbols-outlined text-xl">warning</span>
                                            </div>
                                        </div>
                                        <div className="text-3xl font-serif font-bold text-white flex items-center gap-3">
                                            Critical
                                            <span className="text-xs font-sans font-normal px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400">Human Capital</span>
                                        </div>
                                        <div className="mt-2 text-xs text-slate-500 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                            SB 525, AB 5, CARE Court
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Timeline & Action */}
                            <div className="lg:w-7/12 relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-[2.5rem] blur opacity-20 pointer-events-none"></div>
                                <div className="bg-[#0F172A]/80 backdrop-blur-xl rounded-[2rem] border border-white/10 p-8 md:p-10 relative overflow-hidden">
                                    <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
                                        <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                                                <span className="material-symbols-outlined text-lg">history_edu</span>
                                            </span>
                                            Compliance Timeline
                                        </h3>
                                        <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">REF: CA_LABOR_CODE</span>
                                    </div>

                                    <div className="space-y-8 relative pl-2">
                                        {/* Timeline Line */}
                                        <div className="absolute left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-slate-700 to-transparent"></div>

                                        <div className="relative pl-12 group">
                                            <div className="absolute left-3 top-1.5 w-6 h-6 -ml-3 rounded-full bg-[#0B1120] border-2 border-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.4)] z-10 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                                <span className="text-lg font-bold text-white group-hover:text-primary transition-colors">SB 525 Enacted</span>
                                                <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">2024</span>
                                            </div>
                                            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                                                Minimum wage increase for healthcare workers. <span className="text-slate-300">Direct impact on overhead</span> for private practices with support staff.
                                            </p>
                                        </div>

                                        <div className="relative pl-12 group">
                                            <div className="absolute left-3 top-1.5 w-6 h-6 -ml-3 rounded-full bg-[#0B1120] border-2 border-slate-700 group-hover:border-slate-500 transition-colors z-10"></div>
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                                <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">CARE Court</span>
                                                <span className="text-xs font-mono font-bold text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">2023</span>
                                            </div>
                                            <p className="text-slate-500 text-sm leading-relaxed max-w-lg group-hover:text-slate-400 transition-colors">
                                                New frameworks for severe mental illness treatment and county-level coordination requirements.
                                            </p>
                                        </div>

                                        <div className="relative pl-12 group">
                                            <div className="absolute left-3 top-1.5 w-6 h-6 -ml-3 rounded-full bg-[#0B1120] border-2 border-slate-700 group-hover:border-slate-500 transition-colors z-10"></div>
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                                <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">AB 5 Finalization</span>
                                                <span className="text-xs font-mono font-bold text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">2020</span>
                                            </div>
                                            <p className="text-slate-500 text-sm leading-relaxed max-w-lg group-hover:text-slate-400 transition-colors">
                                                Strict independent contractor vs. employee classification. <span className="text-slate-400">Critical risk factor</span> for hiring unmanaged support staff.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-white/5 flex justify-end">
                                        <Link href="/book-consultation" className="group inline-flex items-center gap-3 bg-white text-[#0F172A] hover:bg-slate-200 px-6 py-3.5 rounded-xl font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                            Schedule Compliance Audit
                                            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
