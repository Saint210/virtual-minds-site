import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
    title: "Psychiatrist Practice Start-Up Guide | Virtual Minds",
    description: "The complete operational roadmap for transitioning from hospital group to solo private practice in California.",
    keywords: ["psychiatry startup", "solo practice roadmap", "starting a private practice", "psychiatrist business plan", "private practice california"],
    alternates: {
        canonical: "https://thevirtualminds.com/resources/guides/start-up-roadmap",
    },
    openGraph: {
        title: "Psychiatrist Practice Start-Up Guide",
        description: "The complete operational roadmap for transitioning from hospital group to solo private practice in California.",
        url: "https://thevirtualminds.com/resources/guides/start-up-roadmap",
        siteName: "Virtual Minds",
        locale: "en_US",
        type: "article",
    },
};

export default function StartUpGuide() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />

            <main className="flex-grow">
                {/* EXECUTIVE STRATEGIC HERO */}
                <section className="relative pt-12 md:pt-20 pb-20 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:40px_40px]" />
                    </div>

                    <div className="relative z-10 max-w-[1400px] mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">

                            {/* Left Column: Strategic Context (60%) */}
                            <div className="lg:w-[60%]">
                                <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-8">
                                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                    <Link href="/resources" className="hover:text-primary transition-colors">Guides</Link>
                                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                                    <span className="text-trust-navy">Start-Up Roadmap</span>
                                </nav>

                                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                    <span className="material-symbols-outlined text-primary text-[16px]">rocket_launch</span>
                                    Guide 03
                                </div>

                                <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                                    The Independence <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy via-primary to-trust-navy animate-gradient-x">
                                        Roadmap.
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-8 max-w-2xl">
                                    The exact 90-day operational sprint designed for hospital-based psychiatrists transitioning to a thriving, solo private practice in California.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                                        <span className="material-symbols-outlined text-green-500">schedule</span>
                                        <span className="text-sm font-bold text-trust-navy">90-Day Deployment</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                                        <span className="material-symbols-outlined text-blue-500">apartment</span>
                                        <span className="text-sm font-bold text-trust-navy">Foundation Ready</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Visual Intel (40%) */}
                            <div className="lg:w-[40%] group w-full">
                                <div className="relative rounded-[2rem] overflow-hidden border border-slate-200/60 shadow-2xl aspect-[4/5] bg-white group-hover:border-primary/30 transition-colors">
                                    <Image
                                        src="/images/blueprint-startup.png"
                                        alt="Solo Practice Launch Roadmap and Checklist"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/30 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* CORE GUIDE CONTENT */}
                <section className="py-24 bg-white border-t border-slate-100">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                            {/* Left Content Area (8 columns) */}
                            <div className="lg:col-span-8 space-y-20">

                                {/* 1. The Operational Friction */}
                                <div className="space-y-6">
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-trust-navy">The "W2 to CEO" Transition</h2>
                                    <div className="prose prose-slate prose-lg max-w-none">
                                        <p>
                                            Most psychiatrists stay in restrictive hospital systems (W2) far longer than intended because the "business of medicine" feels like a liability-filled black box. The reality? A tech-enabled solo practice requires significantly less overhead than a traditional office—provided you have a solid operational foundation.
                                        </p>
                                        <blockquote className="border-l-4 border-primary bg-primary/5 p-8 rounded-r-3xl my-8">
                                            <p className="font-serif italic text-trust-navy text-xl leading-relaxed">
                                                "Your clinical license is your greatest asset. Don't let administrative fear be the reason you trade your time for a hospital group's profit margin. We build the engine; you drive the care."
                                            </p>
                                            <cite className="block mt-4 text-xs font-black uppercase tracking-widest text-slate-400">— Founder, Virtual Minds</cite>
                                        </blockquote>
                                    </div>
                                </div>

                                {/* 2. The 90-Day Sprint Phases */}
                                <div className="space-y-12">
                                    <h2 className="text-3xl font-serif font-bold text-trust-navy">The 90-Day Sprint Protocol</h2>
                                    <div className="space-y-6">
                                        {[
                                            {
                                                phase: "Days 1-30",
                                                title: "Foundation Setup",
                                                desc: "LLC/PLLC selection, Malpractice tail coverage, and selecting the 'Golden Triangle' of psychiatric tech: EMR, Secure Telehealth, and HIPAA-Compliant Voice/Fax."
                                            },
                                            {
                                                phase: "Days 31-60",
                                                title: "Credentialing & Policy Design",
                                                desc: "CAQH profile optimization, drafting California-compliant Informed Consents, and defining your DEA-proof Controlled Substance Prescribing Policy."
                                            },
                                            {
                                                phase: "Days 61-90",
                                                title: "Deployment & VA Integration",
                                                desc: "Integrating your Executive VA into your EHR, launching your authority marketing site, and opening your calendar to the California market for the first intake."
                                            }
                                        ].map((item, idx) => (
                                            <div key={idx} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-xl transition-all group">
                                                <div className="bg-white px-6 py-3 rounded-2xl shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                                    <span className="text-lg font-black uppercase tracking-widest whitespace-nowrap">{item.phase}</span>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-2xl text-trust-navy mb-3">{item.title}</h4>
                                                    <p className="text-slate-500 leading-relaxed text-base">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 3. The Efficiency Table */}
                                <div className="space-y-8">
                                    <h2 className="text-3xl font-serif font-bold text-trust-navy">The Freedom Matrix</h2>
                                    <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 shadow-sm">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="bg-slate-50">
                                                    <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400">Metric</th>
                                                    <th className="p-6 text-xs font-black uppercase tracking-widest text-trust-navy">Hospital Group (W2)</th>
                                                    <th className="p-6 text-xs font-black uppercase tracking-widest text-primary">Solo Practice (CEO)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-100">
                                                <tr>
                                                    <td className="p-6 text-sm font-bold text-trust-navy">Net Margin Per Visit</td>
                                                    <td className="p-6 text-sm text-slate-500">25 - 40%</td>
                                                    <td className="p-6 text-sm font-bold text-green-600">85 - 92%</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-6 text-sm font-bold text-trust-navy">Clinical Autonomy</td>
                                                    <td className="p-6 text-sm text-slate-500">Restricted (System KPI)</td>
                                                    <td className="p-6 text-sm font-bold text-green-600">Absolute</td>
                                                </tr>
                                                <tr>
                                                    <td className="p-6 text-sm font-bold text-trust-navy">Admin Overhead</td>
                                                    <td className="p-6 text-sm text-slate-500">Hidden / High</td>
                                                    <td className="p-6 text-sm font-bold text-primary italic">VA-Automated</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>

                            {/* Right Sidebar (4 columns) */}
                            <div className="lg:col-span-4 space-y-8">
                                <div className="sticky top-12 space-y-8">

                                    {/* Strategic Download Card */}
                                    <div className="bg-trust-navy rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/40 transition-all" />
                                        <h3 className="font-serif text-2xl font-bold mb-6 italic !text-white">Start Your 90-Day Sprint</h3>
                                        <p className="text-slate-300 text-sm leading-relaxed mb-8">
                                            We've helped dozens of psychiatrists transition from burnout to autonomy. Let us handle the operations while you focus on the medicine.
                                        </p>
                                        <Link href="/book-consultation" className="block w-full text-center bg-primary text-white font-black uppercase tracking-widest text-xs px-8 py-4 rounded-xl hover:scale-[1.02] transition-all hover:shadow-xl hover:shadow-primary/20">
                                            Request Launch Roadmap
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* REVERSE SILO: Back to Hub CTA */}
                <section className="py-16 bg-[#FAF8F3] border-t border-slate-100">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <Link
                            href="/resources"
                            className="inline-flex items-center gap-3 text-trust-navy hover:text-primary font-bold text-lg transition-colors group"
                        >
                            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            Explore All Practice Guides & Resources
                        </Link>
                        <p className="text-slate-400 text-sm mt-3">Return to the full resource library for California psychiatric practices.</p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
