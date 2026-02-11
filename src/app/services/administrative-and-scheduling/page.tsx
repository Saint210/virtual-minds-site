import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";
import LocationTagline from "@/components/marketing/LocationTagline";
import PracticeLeaksCalculator from "@/components/tools/PracticeLeaksCalculator";

export const metadata = {
    title: "California Psychiatric Scheduling Virtual Assistants | Virtual Minds",
    description: "California psychiatric scheduling and calendar management virtual assistants for intake coordination, reschedules, and multi-provider practice administration.",
};

export default function SchedulingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Administrative & Scheduling" }
                ]}
            />
            <main className="flex-grow">
                {/* EXECUTIVE SCHEDULING HERO */}
                <section className="relative pt-4 md:pt-6 pb-12 md:pb-16 overflow-hidden bg-[#FAF8F3]">
                    {/* Immersive Background Tokens */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                            {/* LEFT: Copy & Authority (60%) */}
                            <div className="lg:w-[60%]">
                                <div className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-5 py-2 text-trust-navy text-xs font-black mb-4 shadow-sm">
                                    <span className="material-symbols-outlined text-primary text-[18px]">calendar_month</span>
                                    <span className="tracking-[0.2em] uppercase">High-Acuity Calendar Logic</span>
                                </div>

                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy mb-6 leading-[1.1] tracking-tight">
                                    Administrative <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                                        Precision.
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-6 max-w-2xl">
                                    We manage the
                                    <span className="text-trust-navy font-bold border-b-2 border-primary/30 mx-2">waitlists, titration windows, and urgent reschedules</span>
                                    so you can focus exclusively on patient care.
                                </p>
                                <LocationTagline variant="service" serviceName="Administrative & Scheduling" />

                                {/* Institutional Social Proof */}
                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-12 h-12 rounded-full bg-white border-[3px] border-[#FAF8F3] flex items-center justify-center overflow-hidden shadow-lg relative z-[10]">
                                                <Image
                                                    src={`https://i.pravatar.cc/150?u=${i + 150}`}
                                                    alt="Administrative Specialist"
                                                    width={48}
                                                    height={48}
                                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm text-slate-500 font-medium leading-tight text-center sm:text-left">
                                        <p><strong className="text-trust-navy">Orchestrating Time for California's Elite Practices</strong></p>
                                        <p>Standardized workflow management for psychiatrists and clinical directors.</p>
                                    </div>
                                </div>

                                {/* PRACTICE ECONOMICS BAR - SCHEDULING SPECIFIC */}
                                <div className="flex flex-wrap items-center gap-x-12 gap-y-6 py-6 border-y border-slate-200/60 mb-8">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Schedule Saturation</p>
                                        <p className="text-lg font-bold text-trust-navy">Maximum Efficiency</p>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-slate-200" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black !text-primary uppercase tracking-[0.2em] leading-none">No-Show Mitigation</p>
                                        <p className="text-lg font-bold text-trust-navy">Engaged Retention</p>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-slate-200" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Provider Recovery</p>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                            <p className="text-lg font-bold text-trust-navy italic">High Impact</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-5">
                                    <Link href="/book-consultation" className="bg-trust-navy hover:bg-trust-navy/90 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-trust-navy/20 flex items-center justify-center gap-3">
                                        <span className="material-symbols-outlined">calendar_today</span>
                                        Get a Scheduling Audit
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT: Visual System Card (40%) */}
                            <div className="lg:w-[40%] relative w-full">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-50"></div>
                                    <div className="relative aspect-[4/5] w-full rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-100 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
                                        <Image
                                            src="/images/scheduling-hero.png"
                                            alt="Administrative Calendar Workflow"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-trust-navy to-transparent h-1/2 flex items-end p-12">
                                            <div className="mb-4">
                                                <h3 className="text-3xl font-serif font-bold !text-white leading-tight">Practice <br />Calendar <br />Logic</h3>
                                                <p className="!text-slate-100/70 text-sm leading-relaxed mt-4">
                                                    High-touch coordination for medication-heavy psychiatric schedules and follow-up titration cycles.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Floating badge */}
                                    <div className="absolute -top-6 -right-6 bg-white p-5 rounded-[2rem] shadow-2xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                                        <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined font-bold">schedule</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">System Status</p>
                                            <p className="text-base font-bold text-trust-navy">Calendar Optimized</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specific Services Grid */}
                <section className="bg-[#FAF8F3] border-y border-[#D2691E]/20 py-24">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold text-trust-navy mb-4">Complete Administrative Support</h2>
                            <p className="text-slate-600 max-w-xl mx-auto">Precision management of every provider, session, and document in your practice.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: 'calendar_month', title: 'Appointment Scheduling & Calendar Management', desc: 'Expert handling of complex recurring appointments, cancellations, and multi-provider views.' },
                                { icon: 'person_add', title: 'Client Intake & Onboarding', desc: 'Seamless processing of new patient paperwork, initial screening forms, and EHR profile creation.' },
                                { icon: 'contact_phone', title: 'Patient Communication & Correspondence', desc: 'Secure, empathetic handling of patient calls, emails, and portal messages.' },
                                { icon: 'folder_managed', title: 'Document Management & Record Keeping', desc: 'Organized filing of clinical notes, lab results, and external reports within your HIPAA-compliant system.' },
                                { icon: 'duo', title: 'Telehealth Support Services', desc: 'Troubleshooting connection issues and managing virtual waiting rooms for smooth sessions.' },
                                { icon: 'medication', title: 'Prescription Prior Authorizations', desc: 'Navigating insurance hurdles to ensure medication coverage for your patients.' },
                                { icon: 'payments', title: 'Billing & Payment Management', desc: 'Generating Superbills, processing credit card transactions, and contacting insurance companies on request.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-10 rounded-3xl border border-[#D2691E]/20 shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                                    <span className="material-symbols-outlined text-[#D2691E] text-4xl mb-6">{item.icon}</span>
                                    <h3 className="font-display text-xl font-bold text-trust-navy mb-4 leading-tight">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm flex-grow">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Workflow section */}
                <section className="max-w-[1280px] mx-auto px-6 py-32">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="font-display text-5xl font-bold text-trust-navy leading-tight italic">Engineered for <br />Psychiatry</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">Mental health scheduling is inherently dynamic. Patients require recurring slots, medication titration follow-ups, and urgent rescheduling. Our VAs use a 'Clinical-First' logic to protect your time.</p>
                            <div className="space-y-4">
                                {[
                                    'Predictive Scheduling for Refill Cycles',
                                    'Provider Time-Blocking for Deep Work',
                                    'Managed EHR Documentation Windows',
                                    'Intelligent Queue Management'
                                ].map((bullet, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-[#D2691E]">check_circle</span>
                                        <span className="font-bold text-trust-navy">{bullet}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-trust-navy rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E]/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                            <h3 className="font-display text-3xl font-bold mb-8 italic !text-white" style={{ color: 'white' }}>Practice Impact</h3>
                            <div className="space-y-12">
                                <div className="flex gap-8">
                                    <div className="text-5xl font-black text-[#D2691E] italic">Significant</div>
                                    <div>
                                        <p className="font-bold text-xl">Reduction in Admin Load</p>
                                        <p className="text-slate-400 text-sm mt-1">Freeing solo practitioners from the burden of daily administrative tasks.</p>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <div className="text-5xl font-black text-[#9CAF88] italic">Major</div>
                                    <div>
                                        <p className="font-bold text-xl">Time Reclaimed Weekly</p>
                                        <p className="text-slate-400 text-sm mt-1">Time returned to providers for clinical care or professional deep work.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CALCULATOR SECTION */}
                <section className="py-24 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-navy mb-4">Calculate Your Time Recovery</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                See exactly how much revenue you lose to administrative tasks every week.
                            </p>
                        </div>
                        <PracticeLeaksCalculator />
                    </div>
                </section>

                {/* Billing Link Section */}
                <section className="bg-primary/5 border-y border-primary/10 py-24">
                    <div className="max-w-[1000px] mx-auto px-6 text-center">
                        <h2 className="font-display text-3xl font-bold text-trust-navy mb-6">Need Billing & Revenue Support?</h2>
                        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                            We also offer specialized Billing Support. While we do not create claims or submit billing directly, we provide the essential administrative bridge between your practice and your billing entity.
                        </p>
                        <Link href="/services/billing-and-rcm" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest hover:text-trust-navy transition-colors">
                            Explore Billing Support
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </Link>
                    </div>
                </section>

                <ServiceNavigationTray />
            </main>
            <Footer />
        </div>
    );
}
