import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "California Privacy Compliant Virtual Assistants for Psychiatrists | Virtual Minds",
    description: "California's leading privacy and HIPAA compliant virtual assistants for psychiatric practices. Specialized in Medi-Cal billing, telehealth regulations, and state-specific compliance.",
};

export default function CaliforniaCompliancePage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-cream/30 dark:bg-sage/10 rounded-2xl p-8 mb-12 border border-cream dark:border-slate-800 relative overflow-hidden mx-6 lg:mx-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="absolute top-4 right-4">
                            <span className="bg-blue-600 text-white text-[10px] font-black px-2 py-1 rounded flex items-center gap-1 animate-pulse shadow-sm">
                                <span className="material-symbols-outlined text-[12px]">verified</span> PRIVACY SPECIALISTS
                            </span>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="max-w-2xl">
                                <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy dark:text-white leading-tight mb-4">
                                    California Privacy Compliant Virtual Assistants
                                    <br />
                                    <span className="text-terracotta">California Psychiatric Practices</span>
                                </h1>
                                <p className="text-lg text-slate-600 dark:text-slate-300 font-display">
                                    Specialized virtual assistant services focused on California privacy standards, Medi-Cal billing, and state-specific psychiatric regulations. Protect your practice while serving industry leaders, public figures, and families who rely on exceptional care.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Link href="/book-consultation" className="flex items-center justify-center gap-2 px-8 py-4 bg-terracotta text-white rounded-lg font-black hover:scale-105 transition-all shadow-lg">
                                    <span className="material-symbols-outlined">security</span>
                                    Schedule Compliance Review
                                </Link>
                                <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">Free 30-minute assessment</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance Expertise Grid */}
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-cream dark:border-slate-800 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="material-symbols-outlined text-terracotta text-2xl">gavel</span>
                                <h3 className="font-bold text-navy dark:text-white">California Privacy</h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">
                                Full California medical privacy training, including patient confidentiality, data sharing restrictions, and state-specific documentation requirements.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-cream dark:border-slate-800 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="material-symbols-outlined text-terracotta text-2xl">medical_services</span>
                                <h3 className="font-bold text-navy dark:text-white">Medi-Cal Expertise</h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">
                                Specialized Medi-Cal billing, documentation, and prior authorization support for psychiatric services, including CPT codes specific to mental health.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-cream dark:border-slate-800 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="material-symbols-outlined text-terracotta text-2xl">video_call</span>
                                <h3 className="font-bold text-navy dark:text-white">Telehealth Regulations</h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">
                                California telehealth compliance for psychiatric practices, including cross-state licensing, consent requirements, and platform security standards.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-cream dark:border-slate-800 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="material-symbols-outlined text-terracotta text-2xl">description</span>
                                <h3 className="font-bold text-navy dark:text-white">Documentation Standards</h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">
                                California-specific psychiatric documentation requirements, including progress notes, treatment plans, and mandated reporting protocols.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-cream dark:border-slate-800 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="material-symbols-outlined text-terracotta text-2xl">shield</span>
                                <h3 className="font-bold text-navy dark:text-white">BAA Coverage</h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">
                                Comprehensive Business Associate Agreements covering all California psychiatric compliance requirements, including HIPAA and state privacy laws.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-cream dark:border-slate-800 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="material-symbols-outlined text-terracotta text-2xl">school</span>
                                <h3 className="font-bold text-navy dark:text-white">Ongoing Training</h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">
                                Regular updates on California psychiatric regulations, including new telehealth laws, billing changes, and compliance requirements.
                            </p>
                        </div>
                    </div>
                </div>

                {/* California vs Federal Comparison */}
                <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
                    <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
                        <h2 className="text-3xl font-bold text-navy dark:text-white mb-8">California vs Federal Requirements</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold text-terracotta mb-4">California-Specific Requirements</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-terracotta text-sm mt-1">check_circle</span>
                                        <span className="text-slate-600 dark:text-slate-300">California privacy protections stricter than HIPAA</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-terracotta text-sm mt-1">check_circle</span>
                                        <span className="text-slate-600 dark:text-slate-300">Medi-Cal specific documentation requirements</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-terracotta text-sm mt-1">check_circle</span>
                                        <span className="text-slate-600 dark:text-slate-300">California telehealth consent standards</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-terracotta text-sm mt-1">check_circle</span>
                                        <span className="text-slate-600 dark:text-slate-300">State-mandated reporting protocols</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-600 dark:text-slate-400 mb-4">Federal Requirements</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-slate-400 text-sm mt-1">check_circle</span>
                                        <span className="text-slate-600 dark:text-slate-300">HIPAA privacy and security rules</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-slate-400 text-sm mt-1">check_circle</span>
                                        <span className="text-slate-600 dark:text-slate-300">Medicare billing standards</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-slate-400 text-sm mt-1">check_circle</span>
                                        <span className="text-slate-600 dark:text-slate-300">Federal telehealth regulations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="material-symbols-outlined text-slate-400 text-sm mt-1">check_circle</span>
                                        <span className="text-slate-600 dark:text-slate-300">General medical documentation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16">
                    <div className="bg-terracotta rounded-2xl p-8 text-center">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Protect Your Practice with California Compliance Experts
                        </h2>
                        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                            Don't risk non-compliance with California's complex psychiatric regulations. Our virtual assistants are trained specifically for California privacy, Medi-Cal, and state-specific requirements.
                        </p>
                        <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-terracotta rounded-lg font-black hover:scale-105 transition-all shadow-lg">
                            <span className="material-symbols-outlined">calendar_today</span>
                            Schedule Free Compliance Assessment
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
