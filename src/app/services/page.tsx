import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PsychiatristDirectoryBanner from "@/components/marketing/PsychiatristDirectoryBanner";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
    title: "California's Gold Standard Psychiatric Services | Virtual Minds",
    description: "Elite operational blueprints and specialized virtual assistants for California psychiatric practices. Turn administrative exhaustion into clinical freedom.",
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Psychiatric Virtual Assistant Services",
                        "provider": {
                            "@type": "MedicalOrganization",
                            "name": "Virtual Minds"
                        },
                        "areaServed": {
                            "@type": "State",
                            "name": "California"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Psychiatric Administration Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Psychiatric Scheduling",
                                        "description": "Complex calendaring for mental health professionals"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Medical Billing & RCM",
                                        "description": "California Psychiatric CPT Codes and Revenue Cycle Management"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "HIPAA Compliance Support",
                                        "description": "California CMIA and HIPAA regulation compliance"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services" }
                ]}
            />
            <main className="flex-grow">
                {/* 
                  1. HERO SECTION: The Gold Standard Services
                */}
                <section className="relative pt-24 pb-20 overflow-hidden bg-[#FAF8F3]">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D2691E]/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-20">
                            <div className="lg:w-1/2">
                                <div className="inline-flex items-center gap-2 bg-[#D2691E]/10 border border-[#D2691E]/20 rounded-full px-4 py-1.5 text-[#D2691E] text-sm font-bold mb-8">
                                    <span className="material-symbols-outlined text-[16px]">verified</span>
                                    <span>California's Elite Psychiatric Infrastructure</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#2A2A2A] leading-[1.1] mb-8">
                                    The Services of <br />
                                    <span className="text-[#D2691E]">Clinical Freedom.</span>
                                </h1>

                                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                                    Strategic operational support designed exclusively for California psychiatric practices. We handle the friction so you can focus on the art of medicine.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-5">
                                    <Link
                                        href="/book-consultation"
                                        className="px-8 py-4 bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-[#D2691E]/20 transition-all flex items-center justify-center gap-2"
                                    >
                                        Start Your Strategy Audit
                                    </Link>
                                    <Link
                                        href="/pricing"
                                        className="px-8 py-4 bg-white border border-slate-200 text-[#2A2A2A] font-bold text-lg rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
                                    >
                                        View Pricing
                                    </Link>
                                </div>
                            </div>

                            <div className="lg:w-1/2 hidden lg:block">
                                <div className="bg-white rounded-[40px] p-10 border border-slate-100 shadow-2xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-5">
                                        <span className="material-symbols-outlined text-6xl text-[#D2691E]">architecture</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold mb-8 italic text-[#2A2A2A] leading-tight">
                                        Architecting Your <br />
                                        <span className="text-[#D2691E]">Practice Performance</span>
                                    </h3>
                                    <div className="space-y-6">
                                        {[
                                            { label: "Compliance Integrity", icon: "shield_moon", color: "text-[#D2691E]", bgColor: "bg-[#D2691E]/5" },
                                            { label: "Revenue Recovery", icon: "payments", color: "text-green-600", bgColor: "bg-green-50" },
                                            { label: "Clinical Continuity", icon: "sync_saved_locally", color: "text-blue-600", bgColor: "bg-blue-50" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 group transition-colors shadow-sm bg-slate-50/50">
                                                <span className={`material-symbols-outlined ${item.color}`}>{item.icon}</span>
                                                <span className="font-bold text-slate-700">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* High-Performance Overview Header */}
                <section className="relative py-24 overflow-hidden bg-white">
                    <div className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <span className="text-[#D2691E] font-bold uppercase tracking-widest text-sm mb-4">Precision Support</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#2A2A2A] mb-8 leading-tight">
                                Supporting the Complete <br />
                                <span className="text-[#D2691E]">Practice Lifecycle.</span>
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed italic">
                                We leverage years of specialized experience in mental health management to provide a seamless environment for your clinical excellence.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Feature Grid */}
                <section className="relative py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Card 1: Administrative & Scheduling */}
                            <div className="group p-10 bg-[#FAF8F3] rounded-[40px] border border-[#D2691E]/5 hover:border-[#D2691E]/20 transition-all hover:shadow-2xl hover:shadow-[#D2691E]/5 flex flex-col justify-between">
                                <div>
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#D2691E] mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-4xl">calendar_month</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-[#2A2A2A] mb-4">Elite Scheduling & Care Coordination</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        Complex calendaring and multi-provider coordination designed to handle the specific nuances of California mental health workflows.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="text-[10px] font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">Intake Management</span>
                                        <span className="text-[10px] font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">Multi-Provider</span>
                                    </div>
                                </div>
                                <Link href="/services/administrative-and-scheduling" className="text-[#D2691E] font-bold hover:text-[#4A4A4A] transition-colors flex items-center gap-2 group/link">
                                    Explore Scheduling <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>

                            {/* Card 2: Billing Harmony */}
                            <div className="group p-10 bg-[#FAF8F3] rounded-[40px] border border-[#D2691E]/5 hover:border-[#D2691E]/20 transition-all hover:shadow-2xl hover:shadow-[#D2691E]/5 flex flex-col justify-between">
                                <div>
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#9CAF88] mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-4xl">receipt_long</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-[#2A2A2A] mb-4">Billing Harmony & RCM Support</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        Specialized support for California Psychiatric CPT Codes to ensure revenue capture and seamless insurance verification.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="text-[10px] font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">Prior Auths</span>
                                        <span className="text-[10px] font-bold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">99% Accuracy</span>
                                    </div>
                                </div>
                                <Link href="/services/billing-and-rcm" className="text-[#9CAF88] font-bold hover:text-[#4A4A4A] transition-colors flex items-center gap-2 group/link">
                                    Maximize Revenue <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>

                            {/* Card 3: Practice Start-Up */}
                            <div className="group p-10 bg-gradient-to-br from-[#1E1E1E] to-[#2D2D2D] text-white rounded-[40px] shadow-2xl shadow-black/20 hover:translate-y-[-8px] transition-all border border-white/5 flex flex-col justify-between">
                                <div>
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#D2691E] mb-8 group-hover:bg-white/20 transition-colors">
                                        <span className="material-symbols-outlined text-4xl">rocket_launch</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold mb-4 leading-tight !text-white" style={{ color: 'white' }}>
                                        <span className="text-[#FFFFFF]">Psychiatric Practice Start-Up</span>
                                    </h3>
                                    <p className="text-white/90 mb-8 leading-relaxed font-medium">
                                        The turnkey blueprint to take your practice from concept to opening day. EHR, HIPAA, and operational setup.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">Consulting</span>
                                        <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">Infrastructure</span>
                                    </div>
                                </div>
                                <Link href="/services/practice-start-up" className="text-[#D2691E] font-bold hover:text-white transition-colors flex items-center gap-2 group/link">
                                    Start Your Practice <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>

                            {/* Card 4: Patient Intake */}
                            <div className="group p-10 bg-[#FAF8F3] rounded-[40px] border border-[#D2691E]/5 hover:border-[#D2691E]/20 transition-all hover:shadow-2xl hover:shadow-[#D2691E]/5 flex flex-col justify-between">
                                <div>
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#DAA520] mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-4xl">person_add</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-[#2A2A2A] mb-4">Patient Intake & Follow-up</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        Seamless California patient intake, screening, and refill coordination to maintain continuity of care.
                                    </p>
                                </div>
                                <Link href="/services/patient-intake-and-followup" className="text-[#DAA520] font-bold hover:text-[#4A4A4A] transition-colors flex items-center gap-2 group/link">
                                    Explore Intake Flows <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>

                            {/* Card 5: HIPAA Compliance */}
                            <div className="group p-10 bg-[#FAF8F3] rounded-[40px] border border-[#D2691E]/5 hover:border-[#D2691E]/20 transition-all hover:shadow-2xl hover:shadow-[#D2691E]/5 flex flex-col justify-between">
                                <div>
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-4xl">shield_moon</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-[#2A2A2A] mb-4">HIPAA & CMIA Compliance</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        Unwavering dedication to California security standards. Professional data handling that protects your practice.
                                    </p>
                                </div>
                                <Link href="/services/hipaa-compliance-support" className="text-green-600 font-bold hover:text-[#4A4A4A] transition-colors flex items-center gap-2 group/link">
                                    Verify Compliance <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>

                            {/* Card 6: EHR Customization */}
                            <div className="group p-10 bg-[#FAF8F3] rounded-[40px] border border-[#D2691E]/5 hover:border-[#D2691E]/20 transition-all hover:shadow-2xl hover:shadow-[#D2691E]/5 flex flex-col justify-between">
                                <div>
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-4xl">computer</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-[#2A2A2A] mb-4">EHR/EMR Optimization</h3>
                                    <p className="text-slate-600 mb-8 leading-relaxed">
                                        Mastery of SimplePractice, Kareo, and CharmHealth. We configure the systems to fit your clinical flow.
                                    </p>
                                </div>
                                <Link href="/services/ehr-emr-management" className="text-blue-600 font-bold hover:text-[#4A4A4A] transition-colors flex items-center gap-2 group/link">
                                    Optimize Workflow <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Unified Next Steps & Directory Navigator */}
                <ServiceNavigationTray />

                {/* High-Contrast Final CTA */}
                <section className="bg-[#FAF8F3] py-32 relative overflow-hidden border-t border-slate-100">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D2691E]/10 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="max-w-4xl mx-auto px-6 text-center text-[#2A2A2A] relative z-10">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic leading-tight">
                            Architect Your Future Practice.
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                            Stop managing the chaos. Start leading your practice. Book your 15-minute Strategy Audit to define your infrastructure roadmap.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="/book-consultation"
                                className="px-12 py-5 bg-[#D2691E] text-white font-black text-xl rounded-2xl shadow-2xl hover:scale-105 transition-transform"
                            >
                                Book Your Strategy Audit
                            </Link>
                            <Link
                                href="/contact"
                                className="px-12 py-5 bg-white text-[#2A2A2A] border border-slate-200 font-bold text-xl rounded-2xl hover:bg-slate-50 transition-all font-serif shadow-sm"
                            >
                                Speak to an Expert
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
