import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";

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
                {/* Hero Section */}
                <section className="bg-[#FAF8F3] w-full px-6 py-16 md:py-24">
                    <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-6">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase italic">Patient Excellence</span>
                                <h1 className="font-display text-trust-navy text-4xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                                    California Psychiatric <br />
                                    <span className="text-primary italic">Patient Intake VAs</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                                    California psychiatric patient intake and follow-up virtual assistants for screening, onboarding, refill coordination, and continuity workflows.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Link href="/book-consultation" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-primary/20 flex items-center gap-3">
                                    <span className="material-symbols-outlined">person_add</span>
                                    Book Setup Call
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl"></div>
                            <div className="relative aspect-video w-full rounded-[2rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-100 flex items-center justify-center">
                                <Image
                                    src="/images/patient-intake-workflow.png"
                                    className="w-full h-full object-cover"
                                    alt="Patient Intake Workflow Dashboard"
                                    fill
                                    priority
                                />
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

                <ServiceNavigationTray />
            </main>
            <Footer />
        </div>
    );
}
