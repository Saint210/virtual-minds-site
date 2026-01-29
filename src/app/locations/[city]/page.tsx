
import { locations, LocationData } from "@/data/locations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import PracticeLeaksCalculator from "@/components/tools/PracticeLeaksCalculator";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// 1. Generate Static Params for SSG
export async function generateStaticParams() {
    return locations.map((location) => ({
        city: location.slug,
    }));
}

// 2. Dynamic Metadata
export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
    const { city } = await params;
    const location = locations.find((l) => l.slug === city);

    if (!location) {
        return {
            title: "Location Not Found",
        };
    }

    return {
        title: location.metaTitle,
        description: location.metaDesc,
    };
}

// 3. Page Component
export default async function LocationPage({ params }: { params: Promise<{ city: string }> }) {
    const { city } = await params;
    const location = locations.find((l) => l.slug === city);

    if (!location) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <main className="flex-grow">
                {/* 
                  LOCALIZED HERO SECTION 
                */}
                <section className="relative pt-20 pb-32 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-orange-50/50 z-0" />
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2 space-y-8">
                                <div className="inline-flex items-center gap-2 bg-[#D2691E]/10 border border-[#D2691E]/20 text-[#D2691E] px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                                    <span>Serving {location.name} & Surrounding Areas</span>
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-serif font-bold text-[#2A2A2A] leading-[1.1]">
                                    {location.name} Psychiatry, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">Without the Overhead</span>
                                </h1>

                                <p className="text-xl text-slate-600 font-display leading-relaxed">
                                    <span className="font-bold text-[#D2691E]">Lease Talent, Not Overhead.</span> High-performance virtual staff for in-office and telehealth practices. Whether you're managing {location.name} office space or running fully remote—eliminate administrative drag.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/book-consultation"
                                        className="px-8 py-4 bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">calendar_month</span>
                                        Schedule Strategy Call
                                    </Link>
                                    <Link
                                        href="#calculator"
                                        className="px-8 py-4 bg-white border-2 border-[#D2691E]/20 text-[#2A2A2A] font-bold rounded-xl hover:bg-orange-50 transition-all flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">calculate</span>
                                        Compare {location.name} Costs
                                    </Link>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-slate-500 font-medium">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                                        ))}
                                    </div>
                                    <p>The Dedicated Administrative Partner for {location.name} Psychiatrists</p>
                                </div>
                            </div>

                            <div className="lg:w-1/2 relative">
                                <div className="absolute -inset-4 bg-gradient-to-tr from-[#D2691E]/20 to-transparent rounded-[2rem] blur-2xl" />
                                <div className="relative bg-white/60 backdrop-blur-xl border border-white/40 p-2 rounded-[2rem] shadow-2xl">
                                    <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-slate-100">
                                        <Image
                                            src={location.heroImage || "/images/elite_psychiatry_hub.png"}
                                            alt={location.heroImageAlt}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>

                                    {/* Floating Local Card */}
                                    <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 bg-green-100 rounded-lg text-green-700">
                                                <span className="material-symbols-outlined">payments</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-slate-500 uppercase font-bold">Avg. {location.name} Savings</p>
                                                <p className="text-xl font-black text-[#2A2A2A]">{location.rentSavings}</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-500 leading-tight">
                                            Compared to hiring full-time admin staff in the {location.name} area.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 
                  HYPER-LOCAL PROBLEM SECTION 
                */}
                <section className="py-24 bg-white" id="calculator">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl font-serif font-bold text-[#2A2A2A] mb-6">
                                Why {location.name} Psychiatrists Are Switching to Virtual Staff
                            </h2>
                            <p className="text-lg text-slate-600">
                                Whether you're in-office, hybrid, or fully telehealth—administrative overhead drains your time and profit. See exactly how much admin costs are impacting your {location.name} practice.
                            </p>
                        </div>

                        <div className="mb-16">
                            <PracticeLeaksCalculator />
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 opacity-80">
                            <div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="material-symbols-outlined text-[#D2691E]">savings</span>
                                    <h3 className="font-bold text-[#2A2A2A]">Cut Administrative Costs</h3>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Whether you're paying {location.name} office rents or running telehealth—don't overpay for admin. Virtual staff = 60% cost savings.
                                </p>
                            </div>

                            <div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="material-symbols-outlined text-[#D2691E]">schedule</span>
                                    <h3 className="font-bold text-[#2A2A2A]">Always Available</h3>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    No sick days, no commute delays, no scheduling conflicts. Your virtual staff is always ready—whether you're seeing patients in-office or online.
                                </p>
                            </div>

                            <div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="material-symbols-outlined text-[#D2691E]">workspace_premium</span>
                                    <h3 className="font-bold text-[#2A2A2A]">Top 1% Talent</h3>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    Don't limit yourself to local hiring pools. Access elite psychiatric VAs trained for both in-person and telehealth workflows.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 
                  LOCAL SEO CONTENT BLOCK
                */}
                <section className="py-24 bg-[#2A2A2A] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-serif font-bold !text-white" style={{ color: 'white' }}>
                                Specialized for the <br /><span className="text-[#D2691E]">{location.name} Market</span>
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#D2691E]/20 flex items-center justify-center text-[#D2691E] shrink-0">
                                        <span className="material-symbols-outlined">verified</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1 !text-[#D2691E]">High-Profile Client Discretion</h4>
                                        <p className="text-slate-200">We understand the privacy needs of celebrity and high-profile clients common in {location.name} practices.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#D2691E]/20 flex items-center justify-center text-[#D2691E] shrink-0">
                                        <span className="material-symbols-outlined">local_hospital</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1 !text-[#D2691E]">Local Hospital Coordination</h4>
                                        <p className="text-slate-200">Familiarity with {location.hospitals} referral workflows and intake procedures.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#D2691E]/20 flex items-center justify-center text-[#D2691E] shrink-0">
                                        <span className="material-symbols-outlined">attach_money</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1 !text-[#D2691E]">Maximize Billable Hours</h4>
                                        <p className="text-slate-200">In a high-cost city, your time is your most valuable asset. Offload 90% of admin tasks to focus on billable clinical hours.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 !text-white" style={{ color: 'white' }}>
                                <span className="material-symbols-outlined text-[#D2691E]">map</span>
                                Serving Practices In:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {location.neighborhoods.map((hood) => (
                                    <span key={hood} className="px-3 py-1 bg-white/20 rounded-lg text-sm text-white hover:bg-[#D2691E] transition-colors cursor-default font-medium">
                                        {hood}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-sm text-slate-300 italic">
                                    "Virtual Minds helped us scale our {location.neighborhoods[0]} group practice without having to lease the suite next door. Huge savings."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 
                  FAQ Section (Localized)
                */}
                <section className="py-20 bg-[#FAF8F3]">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-serif font-bold text-center text-[#2A2A2A] mb-12">
                            {location.name} FAQ
                        </h2>
                        <div className="space-y-4">
                            <details className="group bg-white rounded-xl border border-slate-200 open:border-[#D2691E] shadow-sm overflow-hidden transition-all">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-[#2A2A2A]">
                                    Are your VAs in the {location.faqZone}?
                                    <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600">
                                    Yes. Our team works {location.faqZone} hours to seamlessly integrate with your {location.name} practice schedule, ensuring phones are answered and patients are scheduled in real-time.
                                </div>
                            </details>
                            <details className="group bg-white rounded-xl border border-slate-200 open:border-[#D2691E] shadow-sm overflow-hidden transition-all">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-[#2A2A2A]">
                                    Do they understand California specific regulations?
                                    <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600">
                                    Absolutely. Every VA is trained on HIPAA and California's specific CMIA (Confidentiality of Medical Information Act) requirements, which are stricter than federal standards.
                                </div>
                            </details>
                            <details className="group bg-white rounded-xl border border-slate-200 open:border-[#D2691E] shadow-sm overflow-hidden transition-all">
                                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-[#2A2A2A]">
                                    Can they coordinate with local {location.name} pharmacies?
                                    <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600">
                                    Yes. Whether it's a specialty pharmacy in {location.neighborhoods[0]} or a chain in the area, our VAs handle refill requests, prior authorizations, and pharmacy coordination efficiently.
                                </div>
                            </details>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-gradient-to-r from-[#D2691E] to-[#B8860B] py-20 text-white text-center">
                    <div className="max-w-4xl mx-auto px-6 space-y-8">
                        <h2 className="text-4xl font-serif font-bold">Ready to streamline your {location.name} practice?</h2>
                        <p className="text-xl opacity-90">Get a specialized VA who understands {location.name} regulations, insurance networks, and workflows—for in-office or telehealth.</p>
                        <Link
                            href="/book-consultation"
                            className="inline-flex px-10 py-5 bg-white text-[#D2691E] font-black text-xl rounded-xl shadow-xl hover:scale-105 transition-transform"
                        >
                            Book Your Strategy Call
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
