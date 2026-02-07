import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";
import RelatedInsights from "@/components/services/RelatedInsights";
import ROICalculator from "@/components/marketing/ROICalculator";


export const metadata = {
    title: "Psychiatric Clinical Operations Support | California",
    description: "More than a VA. Specialized clinical operations support for psychiatric intake, prior authorizations, and EHR management.",
};

export default function VirtualAssistantPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Clinical Operations Support" }
                ]}
            />
            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="relative pt-4 pb-20 overflow-hidden bg-[#FAF8F3]">
                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">

                            {/* Copy */}
                            <div className="lg:w-1/2">
                                <div className="inline-flex items-center gap-2 bg-trust-navy/5 border border-trust-navy/10 rounded-full px-4 py-1.5 text-trust-navy text-[11px] font-black uppercase tracking-widest mb-4">
                                    <span className="material-symbols-outlined text-sm">psychology</span>
                                    High-Acuity Operations
                                </div>
                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy mb-4 leading-[1.1]">
                                    Not a "Virtual Assistant."<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                        Clinical Ops Support.
                                    </span>
                                </h1>
                                <p className="text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-2xl">
                                    Stop training generalists on what an "intake" is. Our staff arrives fluent in <span className="text-trust-navy font-bold">SimplePractice, Prior Auths, and HIPAA protocols</span>—so you can focus on complex care.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/book-consultation" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined">schedule</span>
                                        Schedule Consult
                                    </Link>
                                    <Link href="#capabilities" className="px-8 py-4 rounded-xl border-2 border-slate-200 text-trust-navy font-bold text-lg hover:bg-white hover:border-primary/20 transition-all flex items-center justify-center">
                                        View Capabilities
                                    </Link>
                                </div>
                            </div>

                            {/* Visual */}
                            <div className="lg:w-1/2 relative">
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white">
                                    <div className="absolute inset-0 bg-slate-900/5 z-10"></div>
                                    <Image
                                        src="/images/virtual-assistant-hero.png"
                                        alt="Clinical Operations Specialist"
                                        width={800}
                                        height={600}
                                        className="object-cover"
                                        priority
                                    />
                                    {/* Overlay Card */}
                                    <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-100 z-20 max-w-sm">
                                        <div className="flex items-start gap-4">
                                            <div className="size-12 rounded-full bg-trust-navy flex items-center justify-center text-white shrink-0">
                                                <span className="material-symbols-outlined">verified_user</span>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-trust-navy text-lg">HIPAA Certified</h3>
                                                <p className="text-sm text-slate-600 mt-1">
                                                    Annual certification required. We sign BAAs and understand California privacy laws.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CAPABILITIES MATRIX */}
                <section id="capabilities" className="py-24 bg-white border-y border-slate-100">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl font-bold text-trust-navy mb-4">Specialized vs. Generalist</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                Why psychiatric practices fail with generic VAs: The learning curve is too steep. We start at the top.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Card 1: Intake */}
                            <div className="bg-[#FAF8F3] p-8 rounded-[2.5rem] border border-slate-200 hover:border-primary/30 transition-all group">
                                <div className="size-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">contact_mail</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-3">Intake Triage</h3>
                                <p className="text-slate-600 leading-relaxed font-medium mb-4">
                                    We don't just "schedule appointments." We screen for fit, collect insurance cards, and ensure intake packets are signed 24 hours before the session.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500">
                                    <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Verify Insurance Eligibility</li>
                                    <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Collect Credit Cards</li>
                                    <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Send Welcome Packets</li>
                                </ul>
                            </div>

                            {/* Card 2: Clinical Admin */}
                            <div className="bg-white p-8 rounded-[2.5rem] border-2 border-primary/10 shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest">Core Focus</div>
                                <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">medical_services</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-3">Clinical Coordination</h3>
                                <p className="text-slate-600 leading-relaxed font-medium mb-4">
                                    The "invisible work" that burns you out. We handle the logistics so you can handle the patients.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500">
                                    <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Prior Authorizations</li>
                                    <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Pharmacy Calls/Faxes</li>
                                    <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Lab Result Tracking</li>
                                </ul>
                            </div>

                            {/* Card 3: Retention */}
                            <div className="bg-[#FAF8F3] p-8 rounded-[2.5rem] border border-slate-200 hover:border-primary/30 transition-all group">
                                <div className="size-14 bg-white rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">psychology</span>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-trust-navy mb-3">Patient Retention</h3>
                                <p className="text-slate-600 leading-relaxed font-medium mb-4">
                                    A warm, competent human voice when patients are anxious. We reduce no-shows through compassionate consistency.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500">
                                    <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Rescheduling Calls</li>
                                    <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Waitlist Management</li>
                                    <li className="flex gap-2"><span className="text-primary font-bold">✓</span> Recall for Follow-ups</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ROI CALCULATOR SECTION */}
                <section className="py-24 bg-[#FAF8F3]">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-navy mb-4">Calculate Your Time Recovery</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                See exactly how much revenue you lose to administrative tasks every week.
                            </p>
                        </div>
                        <ROICalculator />
                    </div>
                </section>

                {/* PLATFORMS */}
                <section className="py-20 bg-white border-t border-slate-100">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h3 className="font-serif text-2xl font-bold text-trust-navy mb-8 opacity-80">Fluent In Your Software</h3>
                        <div className="flex flex-wrap justify-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
                            {['SimplePractice', 'Kareo', 'CharmHealth', 'AdvancedMD', 'DrChrono', 'Google Workspace'].map((tech) => (
                                <span key={tech} className="text-xl font-bold text-slate-400">{tech}</span>
                            ))}
                        </div>
                    </div>
                </section>

                <ServiceNavigationTray />
            </main>
            <Footer />
        </div>
    );
}
