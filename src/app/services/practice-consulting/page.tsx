import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";

export const metadata = {
    title: "Psychiatric Practice Advisory & Strategic Engineering | California | Virtual Minds",
    description: "Strategic operational advisory for California psychiatric practices. From launch logistics to high-yield scaling and revenue engineering for elite practitioners.",
    keywords: ["psychiatric practice consulting", "california healthcare strategy", "medical operations engineering", "psychiatric practice scaling", "healthcare ROI optimization"],
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
                                    <span className="material-symbols-outlined text-primary text-[18px]">engineering</span>
                                    <span className="tracking-[0.2em] uppercase">Operational Engineering</span>
                                </div>

                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy mb-6 leading-[1.1] tracking-tight">
                                    Strategic Practice <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                                        Engineering.
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-slate-600 font-display leading-relaxed mb-6 max-w-2xl">
                                    We don't just "consult"—we engineer the
                                    <span className="text-trust-navy font-bold border-b-2 border-primary/30 mx-2">infrastructure, economics, and scaling logic</span>
                                    for elite California psychiatric practices.
                                </p>

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
                                        <p><strong className="text-trust-navy">Advising the Architects of Modern Psychiatry</strong></p>
                                        <p>High-yield operational strategy for clinic directors and solo innovators.</p>
                                    </div>
                                </div>

                                {/* PRACTICE ECONOMICS BAR - ADVISORY SPECIFIC */}
                                <div className="flex flex-wrap items-center gap-x-12 gap-y-6 py-6 border-y border-slate-200/60 mb-8">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Net Growth Yield</p>
                                        <p className="text-lg font-bold text-trust-navy">+22% Avg/Yr</p>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-slate-200" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Admin Efficiency</p>
                                        <p className="text-lg font-bold text-trust-navy">95% Systemized</p>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-slate-200" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black !text-primary uppercase tracking-[0.2em] leading-none">Practice Valuation</p>
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                            <p className="text-lg font-bold text-trust-navy italic">Ready-to-Scale</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-5">
                                    <Link href="/book-consultation" className="bg-[#D2691E] hover:bg-[#B8860B] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-[#D2691E]/20 flex items-center justify-center gap-3">
                                        <span className="material-symbols-outlined">analytics</span>
                                        See My Recovery Plan
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT: Visual System Card (40%) */}
                            <div className="lg:w-[40%] relative w-full">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-50"></div>
                                    <div className="relative aspect-[4/5] w-full rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-100 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
                                        <Image
                                            src="/images/practice-consulting-dashboard.png"
                                            alt="Strategic Practice Intelligence Dashboard"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-trust-navy to-transparent h-1/2 flex items-end p-12">
                                            <div className="mb-4">
                                                <h3 className="text-3xl font-serif font-bold !text-white leading-tight">Executive <br />Intelligence <br />Systems</h3>
                                                <p className="!text-slate-100/70 text-sm leading-relaxed mt-4">
                                                    Real-time operational auditing and revenue leakage detection for California mental health practices.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Floating badge */}
                                    <div className="absolute -top-6 -right-6 bg-white p-5 rounded-[2rem] shadow-2xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                                        <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined font-bold">insights</span>
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

                {/* 2. THE ENGINEERING FRAMEWORK */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[11px]">The Aurum Method</span>
                                <span className="w-12 h-[2px] bg-gradient-to-r from-[#D2691E] to-transparent"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8">
                                We Solve for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">Sustainable Scaling</span>.
                            </h2>
                            <p className="text-slate-600 max-w-3xl mx-auto text-lg font-medium">
                                Generic medical consulting fails psychiatrists because it ignores the unique nuances of mental health liability and medication management. We engineer for the <strong className="text-trust-navy">psychiatric-specific ROI</strong>.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Revenue Engineering", icon: "payments", desc: "Analyzing CPT weightings, clean-claim rates, and patient no-show economics to maximize net receipts without increasing caseload." },
                                { title: "Operational Auditing", icon: "fact_check", desc: "A 360° review of your current staffing, software stack, and workflows to identify exactly where your practice is leaking time." },
                                { title: "Scaling Architecture", icon: "architecture", desc: "Building the standard operating procedures (SOPs) required to bring on additional providers and expand into multi-location or hybrid models." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-[#FAF8F3] p-10 rounded-[2.5rem] border-2 border-slate-200 hover:border-[#D2691E]/30 group hover:shadow-2xl hover:shadow-[#D2691E]/5 transition-all duration-500 hover:-translate-y-2">
                                    <div className="size-16 rounded-2xl bg-[#D2691E]/10 flex items-center justify-center text-[#D2691E] mb-8 border border-[#D2691E]/20 group-hover:bg-[#D2691E] group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 3. CASE STUDY / IMPACT MATRIX */}
                <section className="py-32 bg-slate-50 border-y border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-8 leading-tight">
                                    Engineering Growth: <br />
                                    <span className="text-[#D2691E]">Real-World Metrics</span>.
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed mb-12">
                                    We recently refactored a solo psychiatric practice in Los Angeles that was struggling with 40% no-show rates and EHR documentation lag. After 90 days of operational engineering:
                                </p>
                                <div className="space-y-6">
                                    {[
                                        { label: 'Revenue Reclaimed', val: '$4,200/mo', sub: 'Found in billing errors' },
                                        { label: 'Patient Retention', val: '94%', sub: 'Up from 72%' },
                                        { label: 'Admin Overhead', val: '-60%', sub: 'Through automation' }
                                    ].map((stat, i) => (
                                        <div key={i} className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
                                            <div className="text-3xl font-black text-[#D2691E] min-w-[140px]">{stat.val}</div>
                                            <div>
                                                <p className="font-bold text-trust-navy">{stat.label}</p>
                                                <p className="text-sm text-slate-500">{stat.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-trust-navy rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden h-fit">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E]/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                                <h3 className="font-display text-3xl font-bold mb-8 italic !text-white">The Yield</h3>
                                <div className="space-y-12">
                                    <div className="flex gap-8">
                                        <div className="text-5xl font-black text-[#D2691E]">15+</div>
                                        <div>
                                            <p className="font-bold text-xl !text-white">Hours Reclaimed Weekly</p>
                                            <p className="text-slate-400 text-sm mt-1">Returned to providers for clinical deep work or personal rest.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-8">
                                        <div className="text-5xl font-black text-[#D2691E]">0</div>
                                        <div>
                                            <p className="font-bold text-xl !text-white">Infrastructure Gaps</p>
                                            <p className="text-slate-400 text-sm mt-1">Audit-ready documentation and backup staffing protocols.</p>
                                        </div>
                                    </div>
                                    <Link href="/book-consultation" className="w-full bg-white text-trust-navy font-black py-5 rounded-2xl text-center block shadow-xl hover:scale-[1.02] transition-all text-lg">
                                        Request Efficiency Audit
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ServiceNavigationTray />
            </main>
            <Footer />
        </div>
    );
}
