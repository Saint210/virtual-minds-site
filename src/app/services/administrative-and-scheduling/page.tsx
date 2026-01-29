import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";

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
                {/* Hero Section */}
                <section className="bg-[#FAF8F3] w-full px-6 py-16 md:py-24">
                    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-6">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase italic">Administrative Excellence</span>
                                <h1 className="font-display text-trust-navy text-4xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                                    California Psychiatric <br />
                                    <span className="text-primary italic">Scheduling VAs</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                                    Complex scheduling shouldn&apos;t be your bottleneck. Our virtual assistants support California psychiatric practices with calendar management, patient communications, and the nuances of mental health session gaps.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/book-consultation" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                                    <span className="material-symbols-outlined">calendar_month</span>
                                    Get a Scheduling Audit
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl"></div>
                            <div className="relative aspect-video w-full rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-100 flex items-center justify-center">
                                <Image
                                    src="/images/scheduling-hero.png"
                                    alt="Administrative Calendar Workflow"
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 560px, 100vw"
                                    className="object-cover"
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10"></div>
                                <div className="pointer-events-none absolute inset-0 [box-shadow:inset_0_0_80px_rgba(0,0,0,0.25)]"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specific Services Grid */}
                <section className="bg-[#FAF8F3] border-y border-[#D2691E]/20 py-24">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl font-bold text-[#4A4A4A] mb-4">Complete Administrative Support</h2>
                            <p className="text-[#4A4A4A] max-w-xl mx-auto">Precision management of every provider, session, and document in your practice.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: 'calendar_month', title: 'Appointment Scheduling & Calendar Management', desc: 'Expert handling of complex recurring appointments, cancellations, and multi-provider views.' },
                                { icon: 'person_add', title: 'Client Intake & Onboarding', desc: 'Seamless processing of new patient paperwork, initial screening forms, and EHR profile creation.' },
                                { icon: 'contact_phone', title: 'Patient Communication & Correspondence', desc: 'Secure, empathetic handling of patient calls, emails, and portal messages.' },
                                { icon: 'folder_managed', title: 'Document Management & Record Keeping', desc: 'Organized filing of clinical notes, lab results, and external reports within your HIPAA-compliant system.' },
                                { icon: 'duo', title: 'Telehealth Support Services', desc: 'Troubleshooting connection issues and managing virtual waiting rooms for smooth sessions.' },
                                { icon: 'medication', title: 'Prescription Prior Authorizations', desc: 'Navigating insurance hurdles to ensure medication coverage for your patients.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-10 rounded-3xl border border-[#D2691E]/20 shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                                    <span className="material-symbols-outlined text-[#D2691E] text-4xl mb-6">{item.icon}</span>
                                    <h3 className="font-display text-xl font-bold text-[#4A4A4A] mb-4 leading-tight">{item.title}</h3>
                                    <p className="text-[#4A4A4A] leading-relaxed text-sm flex-grow">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Workflow section */}
                <section className="max-w-[1280px] mx-auto px-6 py-32">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <h2 className="font-display text-5xl font-bold text-[#4A4A4A] leading-tight italic">Engineered for <br />Psychiatry</h2>
                            <p className="text-lg text-[#4A4A4A] leading-relaxed">Mental health scheduling is inherently dynamic. Patients require recurring slots, medication titration follow-ups, and urgent rescheduling. Our VAs use a 'Clinical-First' logic to protect your time.</p>
                            <div className="space-y-4">
                                {[
                                    'Predictive Scheduling for Refill Cycles',
                                    'Provider Time-Blocking for Deep Work',
                                    'Managed EHR Documentation Windows',
                                    'Intelligent Queue Management'
                                ].map((bullet, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="material-symbols-outlined text-[#D2691E]">check_circle</span>
                                        <span className="font-bold text-[#4A4A4A]">{bullet}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-[#4A4A4A] rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E]/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                            <h3 className="font-display text-3xl font-bold mb-8 italic !text-white" style={{ color: 'white' }}>Practice Impact</h3>
                            <div className="space-y-12">
                                <div className="flex gap-8">
                                    <div className="text-5xl font-black text-[#D2691E]">40%</div>
                                    <div>
                                        <p className="font-bold text-xl">Reduction in Admin Load</p>
                                        <p className="text-slate-400 text-sm mt-1">Average reduction in weekly administrative tasks for solo practitioners.</p>
                                    </div>
                                </div>
                                <div className="flex gap-8">
                                    <div className="text-5xl font-black text-[#9CAF88]">15+</div>
                                    <div>
                                        <p className="font-bold text-xl">Hours Reclaimed Weekly</p>
                                        <p className="text-slate-400 text-sm mt-1">Time returned to providers for clinical care or personal wellness.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
