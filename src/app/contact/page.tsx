import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import LazyMapEmbed from "@/components/marketing/LazyMapEmbed";
import ProtectedEmail from "@/components/ui/ProtectedEmail";

export const metadata = {
    title: "Schedule Your Strategy Audit | Virtual Minds Psychiatric Ops",
    description: "Connect with California's elite psychiatric operational firm. Audit your EHR workflows, billing infrastructure, and compliance guardrails.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />

            <main className="flex-grow">
                <section className="max-w-[1400px] mx-auto px-6 py-20 md:py-32">
                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20 items-start">

                        {/* THE INTEL COLUMN (60%) */}
                        <div className="flex flex-col gap-12">
                            <div className="group relative">
                                <div className="relative aspect-[16/9] w-full rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 bg-white">
                                    <Image
                                        src="/images/contact-hero.png"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        alt="Psychiatric Operational Strategy Session"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/30 via-transparent to-transparent" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-xs italic">Direct Mission Access</span>
                                <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy leading-[1] tracking-tight">
                                    Build Your <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                                        Perfect Practice.
                                    </span>
                                </h1>
                                <p className="text-slate-500 text-xl font-display leading-relaxed max-w-xl italic">
                                    In 15 minutes, we'll identify exactly where your practice is leaking billable revenue and reclaim your clinical autonomy.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-3 p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                    <span className="material-symbols-outlined text-primary text-4xl mb-2 group-hover:scale-110 transition-transform">mail</span>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Secure Messaging</p>
                                    <p className="font-bold text-trust-navy">
                                        <ProtectedEmail
                                            localPart="Cheryl"
                                            domain="thevirtualminds.com"
                                            buttonClassName="rounded-md bg-slate-100 px-3 py-1 text-xs font-bold text-trust-navy hover:bg-primary hover:text-white transition-all"
                                            revealedClassName="underline underline-offset-4 decoration-primary/30 hover:decoration-primary"
                                            label="Reveal Protocol"
                                        />
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                    <span className="material-symbols-outlined text-primary text-4xl mb-2 group-hover:scale-110 transition-transform">call</span>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Encryption Line</p>
                                    <p className="font-bold text-trust-navy">(310) 400-6266</p>
                                </div>
                            </div>

                            <div className="bg-trust-navy text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary/20 transition-all" />
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="material-symbols-outlined text-primary text-4xl">inventory_2</span>
                                    <h3 className="font-serif text-2xl font-bold italic">The Operational Promise</h3>
                                </div>
                                <p className="text-slate-300 text-lg leading-relaxed italic mb-8">
                                    "We don't just 'send a person'. We deploy a hardened administrative layer that understands the difference between a 90791 and a 99214 on day one."
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-1 bg-primary rounded-full" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Firm Core Principles</span>
                                </div>
                            </div>
                        </div>

                        {/* THE DEPLOYMENT FORM (40%) */}
                        <div className="sticky top-12">
                            <div className="relative bg-white border border-slate-100 rounded-[3.5rem] p-10 md:p-14 shadow-2xl">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="size-3 bg-red-500 rounded-full animate-pulse" />
                                    <h2 className="text-2xl font-serif font-bold text-trust-navy italic">Book Strategy Audit</h2>
                                </div>

                                <form className="space-y-8">
                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Lead Practitioner</label>
                                            <input type="text" placeholder="Dr. Jane Doe" className="w-full h-16 px-8 rounded-2xl bg-[#FAF8F3] border border-transparent focus:bg-white focus:border-primary/30 focus:outline-none transition-all font-bold text-trust-navy placeholder:text-slate-300" required />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Secure Network Email</label>
                                            <input type="email" placeholder="jane@practice.com" className="w-full h-16 px-8 rounded-2xl bg-[#FAF8F3] border border-transparent focus:bg-white focus:border-primary/30 focus:outline-none transition-all font-bold text-trust-navy placeholder:text-slate-300" required />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Practice Scale</label>
                                            <div className="relative">
                                                <select className="w-full h-16 px-8 rounded-2xl bg-[#FAF8F3] border border-transparent focus:bg-white focus:border-primary/30 focus:outline-none transition-all font-bold text-trust-navy appearance-none">
                                                    <option>Solo Practice (1 Provider)</option>
                                                    <option>Group Practice (2-5 Providers)</option>
                                                    <option>Clinical Enterprise (6+ Providers)</option>
                                                </select>
                                                <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Operational Bottleneck</label>
                                            <textarea rows={4} placeholder="E.g. pharmacy coordination, insurance denials, intake lag..." className="w-full p-8 rounded-2xl bg-[#FAF8F3] border border-transparent focus:bg-white focus:border-primary/30 focus:outline-none transition-all font-bold text-trust-navy placeholder:text-slate-300 resize-none"></textarea>
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full h-20 rounded-2xl bg-primary text-white font-black text-xl shadow-xl shadow-primary/20 hover:scale-[1.02] hover:shadow-2xl transition-all flex items-center justify-center gap-4 group">
                                        Request Practice Audit
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">analytics</span>
                                    </button>

                                    <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                                        Standard Response Time: &lt; 24 Hours
                                    </p>
                                </form>
                            </div>

                            <div className="mt-8 bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="material-symbols-outlined text-primary font-bold">schedule</span>
                                    <h4 className="font-bold text-trust-navy">Firm Hours</h4>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-xs font-bold text-slate-500">
                                        <span>Mon — Fri</span>
                                        <span className="text-trust-navy">09:00 — 17:00 PT</span>
                                    </div>
                                    <div className="flex justify-between text-xs font-bold text-slate-500">
                                        <span>Sat — Sun</span>
                                        <span className="text-red-500 uppercase tracking-widest">Protocol Only</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LOCATIONAL AUTHORITY */}
                <section className="py-32 bg-white border-t border-slate-100">
                    <div className="max-w-[1400px] mx-auto px-6 text-center">
                        <div className="max-w-3xl mx-auto mb-20 text-center">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-6 italic leading-tight">
                                Serving California's Clinical Elite <br /> from Los Angeles.
                            </h2>
                            <p className="text-xl text-slate-500 italic">Our headquarters manage infrastructure for practices from San Diego to the Bay Area.</p>
                        </div>

                        <div className="bg-[#FAF8F3] rounded-[4rem] overflow-hidden shadow-2xl border border-slate-100 relative group">
                            <div className="aspect-[21/9] relative grayscale hover:grayscale-0 transition-all duration-700">
                                <LazyMapEmbed
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3383751.5955934543!2d-119.00754000000002!3d34.08374100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f462550a12ec479%3A0x82ef737d2ad2d6d9!2sVirtual%20Minds%2C%20LLC!5e0!3m2!1sen!2sus!4v1768762142031!5m2!1sen!2sus"
                                    height={500}
                                    title="Virtual Minds Locational Command"
                                    className="w-full h-full"
                                />
                                <div className="absolute inset-0 bg-primary/5 pointer-events-none group-hover:bg-transparent transition-all" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
