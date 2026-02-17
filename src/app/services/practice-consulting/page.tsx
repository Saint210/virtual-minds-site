import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";
import LocationTagline from "@/components/marketing/LocationTagline";
import PracticeLeaksCalculator from "@/components/tools/PracticeLeaksCalculator";
import TrackedLink from "@/components/ui/TrackedLink";
import BottomCTA from "@/components/marketing/BottomCTA";

export const metadata = {
    title: "Psychiatric Practice Management & Strategic Launch | California",
    description: "Specialized practice consulting for California psychiatrists. From launch logistics to operational audits and compliance-ready policy creation.",
    keywords: ["psychiatric practice management", "california mental health strategy", "practice start-up services", "EHR implementation", "HIPAA compliance support"],
};

export default function ConsultingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Practice Advisory" }
                ]}
            />
            <main className="flex-grow">
                {/* EXECUTIVE ADVISORY HERO */}
                <section className="relative pt-4 md:pt-6 pb-12 md:pb-16 overflow-hidden bg-[#FAF8F3]">
                    {/* Immersive Background Tokens */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                            {/* LEFT: Copy & Authority (60%) */}
                            <div className="lg:w-[60%]">
                                <div className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-5 py-2 text-trust-navy text-xs font-black mb-4 shadow-sm">
                                    <span className="material-symbols-outlined text-primary text-sm">diamond</span>
                                    <span className="tracking-[0.2em] uppercase">Practice Intelligence</span>
                                </div>

                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy mb-6 leading-[1.1] tracking-tight">
                                    Strategic Practice <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                                        Consulting.
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-6 max-w-2xl">
                                    We build the
                                    <span className="text-trust-navy font-bold border-b-2 border-primary/30 mx-2">operational systems</span>
                                    that let California psychiatrists scale without administrative friction.
                                </p>
                                <LocationTagline variant="service" serviceName="Practice Consulting" />

                                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                    <TrackedLink
                                        href="/book-consultation"
                                        ctaName="Request Operational Audit"
                                        source="service_consulting_hero"
                                        className="bg-[#D2691E] hover:bg-[#B8860B] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">calendar_add_on</span>
                                        Request Operational Audit
                                    </TrackedLink>
                                    <Link href="#calculator" className="px-8 py-4 rounded-xl border-2 border-slate-200 text-trust-navy font-bold text-lg hover:bg-white hover:border-primary/20 transition-all flex items-center justify-center">
                                        Calculate ROI
                                    </Link>
                                </div>

                                {/* Institutional Social Proof */}
                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-12 h-12 rounded-full bg-white border-[3px] border-[#FAF8F3] flex items-center justify-center overflow-hidden shadow-lg relative z-[10]">
                                                <Image
                                                    src={`https://i.pravatar.cc/150?u=${i + 200}`}
                                                    alt="Strategic Advisor"
                                                    width={48}
                                                    height={48}
                                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm text-slate-500 font-medium leading-tight text-center sm:text-left">
                                        <p><strong className="text-trust-navy">Trusted by California Psychiatrists</strong></p>
                                        <p>Hands-on operational consulting for group practices and solo providers.</p>
                                    </div>
                                </div>

                                {/* PRACTICE ECONOMICS BAR - ADVISORY SPECIFIC */}
                                <div className="flex flex-wrap items-center gap-x-12 gap-y-6 py-6 border-y border-slate-200/60 mb-8 bg-white/40 backdrop-blur-sm rounded-2xl px-6">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Practice Lifecycle</p>
                                        <p className="text-lg font-bold text-trust-navy">Start-Up to Growth</p>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-slate-200" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Operational Standard</p>
                                        <p className="text-lg font-bold text-trust-navy">Precision Management</p>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-slate-200" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black !text-cyan-600 uppercase tracking-[0.2em] leading-none">Compliance Ready</p>
                                        <div className="flex items-center gap-2">
                                            <span className="relative flex h-2.5 w-2.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                                            </span>
                                            <p className="text-lg font-bold text-trust-navy italic">Audit Prepared</p>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            {/* RIGHT: Visual System Card (40%) */}
                            <div className="lg:w-[40%] relative w-full">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-primary/10 rounded-[3.5rem] blur-3xl opacity-50"></div>
                                    <div className="relative aspect-[4/5] w-full rounded-[3rem] shadow-2xl overflow-hidden border border-white/60 bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
                                        <div className="absolute inset-2 rounded-[2.5rem] overflow-hidden bg-slate-100 z-10">
                                            <Image
                                                src="/images/practice-consulting-dashboard.png"
                                                alt="Strategic Practice Intelligence Dashboard"
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/90 via-trust-navy/20 to-transparent pointer-events-none" />
                                        </div>

                                        <div className="absolute inset-x-0 bottom-0 z-20 h-1/2 flex items-end p-12">
                                            <div className="mb-4">
                                                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 mb-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Live Metrics</span>
                                                </div>
                                                <h3 className="text-3xl font-serif font-bold !text-white leading-tight">Practice <br />Intelligence <br />Systems</h3>
                                                <p className="!text-slate-200 text-sm leading-relaxed mt-4 font-medium border-l-2 border-primary pl-4">
                                                    Comprehensive operational auditing and compliance oversight for California mental health practices.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Floating badge */}
                                    <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-xl p-5 rounded-[2rem] shadow-2xl border border-white/60 flex items-center gap-4 animate-bounce-slow z-30">
                                        <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                            <svg className="w-6 h-6 font-bold" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Growth Status</p>
                                            <p className="text-base font-bold text-trust-navy">Optimization Active</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. THE EXCELLENCE FRAMEWORK */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[11px]">Our Approach</span>
                                <span className="w-12 h-[2px] bg-gradient-to-r from-[#D2691E] to-transparent"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8">
                                We Solve for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Sustainable Excellence</span>.
                            </h2>
                            <p className="text-slate-600 max-w-3xl mx-auto text-lg font-medium">
                                Generic medical consulting fails psychiatrists because it ignores the unique nuances of mental health liability and medication management. We design for the <strong className="text-trust-navy">psychiatric-specific ecosystem</strong>.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Card 1: Start-Up */}
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-trust-navy transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="size-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-trust-navy mb-8 group-hover:bg-trust-navy group-hover:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4 group-hover:text-primary transition-colors">Practice Start-Up & Launch</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">Complete practice setup including clinical systems (physical or remote), EHR implementation, and operational roadmap development.</p>
                                </div>
                            </div>

                            {/* Card 2: Diagnostics */}
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-trust-navy transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="size-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-trust-navy mb-8 group-hover:bg-trust-navy group-hover:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined text-3xl">troubleshoot</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4 group-hover:text-primary transition-colors">Operational Diagnostics</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">A systematic review of your current systems and workflows to identify bottlenecks and implement new, efficient procedures.</p>
                                </div>
                            </div>

                            {/* Card 3: Policy */}
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-trust-navy transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="size-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-trust-navy mb-8 group-hover:bg-trust-navy group-hover:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined text-3xl">gavel</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4 group-hover:text-primary transition-colors">Policy & Compliance</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">Developing HIPAA-compliant SOPs, client management policies, and contract review to protect your practice's legal and ethical foundation.</p>
                                </div>
                            </div>

                            {/* Card 4: Automation */}
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-trust-navy transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="size-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-trust-navy mb-8 group-hover:bg-trust-navy group-hover:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined text-3xl">hub</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4 group-hover:text-primary transition-colors">Workflow Automation</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">Recommendations and implementation of procedures that reduce administrative friction and enhance patient outcomes.</p>
                                </div>
                            </div>

                            {/* Card 5: Architecture */}
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-trust-navy transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="size-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-trust-navy mb-8 group-hover:bg-trust-navy group-hover:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined text-3xl">settings_suggest</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4 group-hover:text-primary transition-colors">Systems Integration</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">Expert guidance on selecting and implementing the right software stack, from EMRs to patient portals.</p>
                                </div>
                            </div>

                            {/* Card 6: Strategy */}
                            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:border-trust-navy transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10">
                                    <div className="size-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-trust-navy mb-8 group-hover:bg-trust-navy group-hover:text-white transition-colors duration-300">
                                        <span className="material-symbols-outlined text-3xl">diamond</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4 group-hover:text-primary transition-colors">Strategic Development</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">Long-term operational planning to ensure your practice remains sustainable and scalable in the California market.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CALCULATOR SECTION */}
                <section className="py-24 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-navy mb-4">Calculate Your Practice ROI</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                See the financial impact of optimizing your practice operations.
                            </p>
                        </div>
                        <PracticeLeaksCalculator />
                    </div>
                </section>

                <BottomCTA />
                <ServiceNavigationTray />
            </main>
            <Footer />
        </div>
    );
}
