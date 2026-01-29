import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Mental Health Virtual Assistants for Private Practice | Virtual Minds",
    description: "Stop training generalists. Hire a specialized Mental Health VA who understands Intake, EHRs, and HIPAA from Day 1.",
};

export default function MentalHealthVAPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />

            <main className="flex-grow">
                {/* 1. HERO SECTION */}
                <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-[#FAF8F3]">
                    <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative z-10 flex flex-col gap-8 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-sm font-bold w-fit mx-auto lg:mx-0">
                                <span className="material-symbols-outlined text-[16px]">psychology</span>
                                <span>Clinically Aware Staffing</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-black text-trust-navy leading-[1.1] tracking-tight">
                                Would you hire a generic <span className="text-primary italic">medical assistant?</span>
                            </h1>

                            <h2 className="text-xl text-slate-600 leading-relaxed font-medium">
                                Then why trust your practice administration to a generic VA?
                                <br className="hidden md:block" />
                                Get a specialized <strong>Mental Health Virtual Assistant</strong> who knows the difference between an SSRI and a schedule conflict.
                            </h2>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <Link href="/book-consultation" className="px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-primary/25 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                                    Analyze My Staffing Needs
                                </Link>
                                <Link href="#difference" className="px-8 py-4 bg-white border border-slate-200 text-trust-navy font-bold text-lg rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                    See The Difference
                                </Link>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm font-bold text-slate-400 uppercase tracking-wider">
                                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check_circle</span> 100% HIPAA</span>
                                <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check_circle</span> EHR Ready</span>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[100px] opacity-60"></div>
                            {/* Visual Metaphor: Chaos vs Order */}
                            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-2xl relative z-10">
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-red-50 border border-red-100 opacity-60">
                                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                                            <span className="material-symbols-outlined">close</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-red-800 text-sm">Generic VA</p>
                                            <p className="text-xs text-red-600">"What is a 'prior auth'?"</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 opacity-80">
                                        <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                                            <span className="material-symbols-outlined">help</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 text-sm">General Medical VA</p>
                                            <p className="text-xs text-slate-500">"I don't know this specific EHR."</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-6 rounded-2xl bg-trust-navy text-white shadow-lg transform scale-105 border-l-4 border-primary">
                                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
                                            <span className="material-symbols-outlined text-2xl">verified</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-lg">Virtual Minds Specialist</p>
                                            <p className="text-sm text-slate-300">"Intake packet sent via Charm using CPT 90792."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. THE SPECIALIST DIFFERENCE */}
                <section id="difference" className="py-24 bg-white relative overflow-hidden">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-4xl font-display font-bold text-trust-navy mb-6">Stop Teaching "Psychiatry 101"</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Most practices burn 3-6 months training a newly hired admin. Our VAs arrive with the specialized knowledge your clinic needs to operate immediately.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-[#FAF8F3] p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 transition-all">
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
                                    <span className="material-symbols-outlined text-3xl">emergency</span>
                                </div>
                                <h3 className="font-display text-xl font-bold text-trust-navy mb-3">Crisis Awareness</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Our staff knows that a missed call from a suicidal patient isn't just a missed call. We understand urgency and triage protocols.
                                </p>
                            </div>
                            <div className="bg-[#FAF8F3] p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 transition-all">
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#9CAF88] mb-6 shadow-sm">
                                    <span className="material-symbols-outlined text-3xl">psychiatry</span>
                                </div>
                                <h3 className="font-display text-xl font-bold text-trust-navy mb-3">Medication Literacy</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Familiarity with common psychotropics (SSRIs, SNRIs, Stimulants) means fewer spelling errors in refills and better pharmacy communication.
                                </p>
                            </div>
                            <div className="bg-[#FAF8F3] p-8 rounded-[2rem] border border-slate-100 hover:border-primary/20 transition-all">
                                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#DAA520] mb-6 shadow-sm">
                                    <span className="material-symbols-outlined text-3xl">lock</span>
                                </div>
                                <h3 className="font-display text-xl font-bold text-trust-navy mb-3">Privacy First</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    We go beyond basic HIPAA. We understand the specific sensitivity of psychotherapy notes and mental health records in California.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. ROLES AND CAPABILITIES */}
                <section className="py-24 bg-trust-navy text-white">
                    <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-primary border border-white/5">
                                Scope of Practice
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                                What can a Mental Health VA handle?
                            </h2>
                            <p className="text-xl text-slate-300 leading-relaxed font-light">
                                From the moment a patient finds you online to their discharge summary, we handle the non-clinical friction.
                            </p>

                            <ul className="space-y-6 mt-8">
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary mt-1">contact_mail</span>
                                    <div>
                                        <h4 className="font-bold text-lg">Intake Coordination</h4>
                                        <p className="text-slate-400 text-sm mt-1">Screening forms, insurance verification, and consent packet collection before the first session.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary mt-1">event_available</span>
                                    <div>
                                        <h4 className="font-bold text-lg">Schedule Optimization</h4>
                                        <p className="text-slate-400 text-sm mt-1">Reducing gaps, managing cancellations, and ensuring you get your lunch break.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="material-symbols-outlined text-primary mt-1">description</span>
                                    <div>
                                        <h4 className="font-bold text-lg">EHR Management</h4>
                                        <p className="text-slate-400 text-sm mt-1">Uploading labs, managing faxes, and keeping patient charts audit-ready.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="relative h-[600px] w-full bg-white/5 rounded-[3rem] border border-white/10 p-8 flex flex-col">
                            <div className="flex-1 bg-slate-800/50 rounded-2xl border border-white/5 p-6 mb-4 relative overflow-hidden group">
                                <div className="absolute top-4 right-4 text-xs font-bold text-slate-500 uppercase">Incoming Task</div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">
                                        <span className="material-symbols-outlined">call_missed</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-200">Patient Inquiry: "Urgent Refill"</p>
                                        <p className="text-xs text-slate-500">2 mins ago</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                                    <p className="text-green-400 text-sm font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">check</span>
                                        Action Taken
                                    </p>
                                    <p className="text-slate-300 text-xs mt-2">
                                        Checked chart for last visit. Validated pharmacy on file. Drafted request for provider sign-off. Replied to patient to confirm receipt.
                                    </p>
                                </div>
                            </div>

                            <div className="flex-1 bg-slate-800/50 rounded-2xl border border-white/5 p-6 relative overflow-hidden group">
                                <div className="absolute top-4 right-4 text-xs font-bold text-slate-500 uppercase">Incoming Task</div>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center">
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-200">New Intake Request</p>
                                        <p className="text-xs text-slate-500">15 mins ago</p>
                                    </div>
                                </div>
                                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                                    <p className="text-green-400 text-sm font-bold flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">check</span>
                                        Action Taken
                                    </p>
                                    <p className="text-slate-300 text-xs mt-2">
                                        Sent welcome packet V2. Verified Aetna eligibility. Scheduled 60-min intake for next Tuesday.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. CTA SECTION */}
                <section className="py-32 bg-[#FAF8F3]">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-trust-navy mb-8">
                            Ready to stop doing standard <br />
                            <span className="text-primary italic">admin work?</span>
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
                            The freedom to focus on clinical care is one call away. Let's build your mental health support team.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/book-consultation" className="px-12 py-5 bg-primary text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-2">
                                Book Your Strategy Call
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
