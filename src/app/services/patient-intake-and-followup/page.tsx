import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";
import LocationTagline from "@/components/marketing/LocationTagline";
import RelatedInsights from "@/components/services/RelatedInsights";
import PracticeLeaksCalculator from "@/components/tools/PracticeLeaksCalculator";
import TrackedLink from "@/components/ui/TrackedLink";

export const metadata = {
    title: "California Psychiatric Patient Intake Virtual Assistants | Virtual Minds",
    description: "California psychiatric patient intake and follow-up virtual assistants for screening, onboarding, refill coordination, and continuity workflows.",
};

export default function IntakePage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Patient Intake & Follow-up" }
                ]}
            />
            <main className="flex-grow">
                {/* EXECUTIVE INTAKE HERO */}
                <section className="relative pt-4 md:pt-6 pb-12 md:pb-16 overflow-hidden bg-[#FAF8F3]">
                    {/* Immersive Background Tokens */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                            {/* LEFT: Copy & Authority (60%) */}
                            <div className="lg:w-[60%]">
                                <div className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-5 py-2 text-trust-navy text-xs font-black mb-4 shadow-sm">
                                    <span className="material-symbols-outlined text-primary text-[18px]">psychology</span>
                                    <span className="tracking-[0.2em] uppercase">Continuity of Care Engine</span>
                                </div>

                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy mb-6 leading-[1.1] tracking-tight">
                                    Patient Intake <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                                        Optimization.
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-6 max-w-2xl">
                                    We handle the
                                    <span className="text-trust-navy font-bold border-b-2 border-primary/30 mx-2">onboarding, screening, and refill logistics</span>
                                    that ensure patients remain engaged and clinicians remain focused.
                                </p>
                                <LocationTagline variant="service" serviceName="Patient Intake & Follow-Up" />

                                {/* Institutional Social Proof */}
                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-12 h-12 rounded-full bg-white border-[3px] border-[#FAF8F3] flex items-center justify-center overflow-hidden shadow-lg relative z-[10]">
                                                <Image
                                                    src={`https://i.pravatar.cc/150?u=${i + 160}`}
                                                    alt="Intake Specialist"
                                                    width={48}
                                                    height={48}
                                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm text-slate-500 font-medium leading-tight text-center sm:text-left">
                                        <p><strong className="text-trust-navy">Streamlining Entry for California's Private Practices</strong></p>
                                        <p>Standardized patient onboarding and clinical continuity support.</p>
                                    </div>
                                </div>

                                {/* PRACTICE ECONOMICS BAR - INTAKE SPECIFIC */}
                                <div className="flex flex-wrap items-center gap-x-12 gap-y-6 py-6 border-y border-slate-200/60 mb-8">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Intake Completion</p>
                                        <p className="text-lg font-bold text-trust-navy">Standardized</p>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-slate-200" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Screening Integrity</p>
                                        <p className="text-lg font-bold text-trust-navy">Med-Board Ready</p>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-slate-200" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Refill Verification</p>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                            <p className="text-lg font-bold text-trust-navy italic">0 Gaps Policy</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-5">
                                    <TrackedLink
                                        href="/book-consultation"
                                        ctaName="Book Setup Call"
                                        source="service_intake_hero"
                                        className="bg-trust-navy hover:bg-trust-navy/90 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-trust-navy/20 flex items-center justify-center gap-3"
                                    >
                                        <span className="material-symbols-outlined">person_add</span>
                                        Book Setup Call
                                    </TrackedLink>
                                </div>
                            </div>

                            {/* RIGHT: Visual System Card (40%) */}
                            <div className="lg:w-[40%] relative w-full">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-50"></div>
                                    <div className="relative aspect-[4/5] w-full rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-100 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
                                        <Image
                                            src="/images/patient-intake-mockup-v2.png"
                                            alt="Patient Intake & Continuity Dashboard"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-trust-navy/80 to-transparent h-1/3 flex items-end p-12">
                                            <div className="mb-4">
                                                <h3 className="text-3xl font-serif font-bold !text-white leading-tight">Clinical <br />Onboarding <br />Matrix</h3>
                                                <p className="!text-slate-100 text-sm leading-relaxed mt-4">
                                                    Automated sync between patient portals and clinical EHR profiles with full BAA-covered administrative security.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Floating badge */}
                                    <div className="absolute -top-6 -right-6 bg-white p-5 rounded-[2rem] shadow-2xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                                        <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined font-bold">clinical_notes</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Onboarding Status</p>
                                            <p className="text-base font-bold text-trust-navy">Sync Active</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Workflow Simulation */}
                <div className="bg-white border-y border-slate-100 py-24">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            <div className="lg:col-span-2 space-y-10">
                                {/* Screening Section */}
                                <section className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                                    <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                                        <h2 className="text-xl font-bold text-trust-navy flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary">psychology_alt</span>
                                            Behavioral Health Screening
                                        </h2>
                                        <span className="text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2">
                                            <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                                            Auto-Sync Active
                                        </span>
                                    </div>
                                    <div className="p-10 space-y-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-4">
                                                <label className="block text-sm font-black text-trust-navy uppercase tracking-widest">Patient Wellness Baseline</label>
                                                <div className="h-4 bg-slate-100 rounded-full overflow-hidden relative">
                                                    <div className="absolute top-0 left-0 h-full bg-primary" style={{ width: '40%' }}></div>
                                                </div>
                                                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-tighter">
                                                    <span>Immediate Support Red</span>
                                                    <span>Stable Gold</span>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <label className="block text-sm font-black text-trust-navy uppercase tracking-widest">Action Priority</label>
                                                <div className="bg-amber-50 border border-amber-100 text-amber-800 p-4 rounded-xl text-sm font-bold flex items-center gap-3">
                                                    <span className="material-symbols-outlined">warning</span>
                                                    High Priority: Medication Titration Phase
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                                            <p className="text-slate-600 leading-relaxed italic">
                                                &ldquo;Intake VAs perform initial screenings to identify crisis indicators before the psychiatrist enters the room. We utilize PHQ-9 and GAD-7 standardized metrics.&rdquo;
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Refill Section */}
                                <section className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                                    <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                                        <h2 className="text-xl font-bold text-trust-navy flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary">medication_liquid</span>
                                            Refill Coordination Engine
                                        </h2>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left">
                                            <thead>
                                                <tr className="bg-slate-50/50">
                                                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Controlled Substance Logic</th>
                                                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Pharmacy Status</th>
                                                    <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-widest">Audit Trail</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-50">
                                                {[
                                                    { med: 'Stimulant Protocol', status: 'Verification Required', color: 'text-amber-600 bg-amber-50' },
                                                    { med: 'Maintenance SSRI', status: 'Validated', color: 'text-green-600 bg-green-50' }
                                                ].map((row, i) => (
                                                    <tr key={i} className="hover:bg-primary/5 cursor-default transition-all duration-300 group">
                                                        <td className="px-8 py-6 font-bold text-trust-navy group-hover:text-primary transition-colors">{row.med}</td>
                                                        <td className="px-8 py-6">
                                                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${row.color}`}>
                                                                {row.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-8 py-6 text-slate-400 text-xs font-mono italic">Logged by VA System</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </section>
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-10">
                                <section className="bg-trust-navy text-white rounded-[2rem] p-10 shadow-2xl relative overflow-hidden">
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
                                    <h3 className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-8">Continuity Logic</h3>
                                    <div className="space-y-8 relative z-10">
                                        <div className="flex gap-6 items-start">
                                            <div className="shrink-0 size-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                                                <span className="material-symbols-outlined">hub</span>
                                            </div>
                                            <div>
                                                <p className="font-black text-lg !text-white" style={{ color: 'white' }}>Next Action Logic</p>
                                                <p className="text-sm text-slate-300 mt-2 leading-relaxed">Predictive scheduling based on clinical titration schedules.</p>
                                            </div>
                                        </div>
                                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
                                            <div className="flex items-center gap-4 text-xs font-bold text-slate-300">
                                                <span className="size-2 rounded-full bg-primary"></span>
                                                Schedule Labs Day 14
                                            </div>
                                            <div className="flex items-center gap-4 text-xs font-bold text-slate-300">
                                                <span className="size-2 rounded-full bg-primary"></span>
                                                Auto-Check PMP Record
                                            </div>
                                        </div>
                                        <Link href="/book-consultation" className="w-full bg-white text-trust-navy font-black py-4 rounded-xl text-center block shadow-xl hover:scale-[1.02] transition-all">
                                            Apply Continuity Plan
                                        </Link>
                                    </div>
                                </section>

                                <section className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
                                    <h3 className="text-sm font-black text-trust-navy mb-6 flex items-center gap-3 uppercase tracking-widest">
                                        <span className="material-symbols-outlined text-primary">security</span>
                                        HIPAA Log
                                    </h3>
                                    <div className="space-y-5 text-xs text-slate-500 font-medium">
                                        <div className="flex justify-between">
                                            <span>Encryption</span>
                                            <span className="text-green-600 font-bold">AES-256 ACTIVE</span>
                                        </div>
                                        <div className="flex justify-between border-t border-slate-50 pt-5">
                                            <span>Session Integrity</span>
                                            <span className="text-trust-navy font-bold">100% SECURE</span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

                <RelatedInsights
                    title="Intake Optimization Briefings"
                    subtitle="Strategies to convert more inquiries into committed patients."
                    insights={[
                        {
                            title: "Why New Psychiatry Patient Leads May Not Convert",
                            category: "Patient Retention",
                            excerpt: "The psychological barriers new patients face and how a professional intake process removes them.",
                            href: "/resources/why-leads-ghost",
                            readTime: "4 min read"
                        },
                        {
                            title: "The 'Speed to Lead' Impact: Why Rapid Response Matters",
                            category: "practice growth",
                            excerpt: "Professional responsiveness can significantly increase conversion. Here is how to operationalize that.",
                            href: "/resources/speed-to-lead-psychiatry",
                            readTime: "3 min read"
                        },
                        {
                            title: "Scripts for High-Converting Patient Intake Calls",
                            category: "Operations",
                            excerpt: "Exact verbiage our Virtual Minds use to validate insurance, set expectations, and secure the booking.",
                            href: "/resources/intake-scripts",
                            readTime: "6 min read"
                        }
                    ]}
                />

                {/* INTAKE COST CALCULATOR */}
                <section className="py-32 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

                    <div className="max-w-5xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-20">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Calculate Your Intake Costs</span>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-8 leading-tight">
                                How Much Could You <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Save on Patient Intake?</span>
                            </h2>
                            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                                See exactly how much professional intake support could save your practice
                            </p>
                        </div>

                        <PracticeLeaksCalculator />

                        <div className="text-center mt-12">
                            <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]">
                                Schedule Intake Audit <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                <ServiceNavigationTray />
            </main >
            <Footer />
        </div >
    );
}
