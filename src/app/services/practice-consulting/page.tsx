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
    title: "Psychiatric Practice Consulting & Management | California",
    description: "Expert psychiatric practice consulting in California. We optimize workflows, ensure HIPAA compliance, and scale mental health practices.",
    keywords: ["psychiatric practice consulting", "mental health practice management", "psychiatry business consultant", "private practice scaling", "California mental health operations"],
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

                                <h1 className="font-serif text-4xl md:text-6xl font-bold text-trust-navy mb-4 leading-[1.1] tracking-tight">
                                    Psychiatric Practice <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-gradient-x">
                                        Management & Consulting.
                                    </span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 font-display leading-relaxed mb-6 max-w-2xl">
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

                {/* 2. CONSULTING SERVICES LIST */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8">
                                Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Consulting Services</span>
                            </h2>
                            <p className="text-slate-600 max-w-3xl mx-auto text-lg font-medium">
                                Expert guidance designed to stabilize and scale your psychiatric practice.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 mb-24">
                            {/* CORE CONSULTING */}
                            <div className="space-y-8">
                                <h3 className="font-serif text-3xl font-bold text-trust-navy border-b border-primary/20 pb-4">
                                    Practice Operations
                                </h3>
                                <div className="grid gap-6">
                                    {[
                                        {
                                            title: "Practice Start-Up Services",
                                            link: "/services/practice-start-up",
                                            icon: "rocket_launch",
                                            desc: "A turnkey launch system for new practices."
                                        },
                                        {
                                            title: "Review Current Plans",
                                            icon: "plagiarism",
                                            desc: "Audit of existing operational and business models."
                                        },
                                        {
                                            title: "Office Set-Up",
                                            icon: "desk",
                                            desc: "Physical or digital workspace configuration logistics."
                                        },
                                        {
                                            title: "EHR Implementation",
                                            link: "/services/ehr-emr-management",
                                            icon: "computer",
                                            desc: "Selection, configuration, and migration support."
                                        },
                                        {
                                            title: "Contract Review & Negotiation",
                                            icon: "history_edu",
                                            desc: "Payer and vendor contract analysis (Non-legal)."
                                        },
                                        {
                                            title: "HIPAA Compliance",
                                            link: "/services/hipaa-compliance-support",
                                            icon: "shield_lock",
                                            desc: "Risk assessments and BAA management."
                                        },
                                        {
                                            title: "Client Management Policies",
                                            icon: "policy",
                                            desc: "Creating experience policies and standard operating procedures."
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-trust-navy hover:shadow-lg transition-all group">
                                            <div className="mt-1 p-2 bg-white rounded-lg shadow-sm text-trust-navy group-hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined">{item.icon}</span>
                                            </div>
                                            <div className="flex-grow">
                                                {item.link ? (
                                                    <Link href={item.link} className="font-bold text-lg text-trust-navy hover:text-primary transition-colors flex items-center gap-2">
                                                        {item.title}
                                                        <span className="material-symbols-outlined text-sm opacity-50">arrow_forward</span>
                                                    </Link>
                                                ) : (
                                                    <h4 className="font-bold text-lg text-trust-navy">{item.title}</h4>
                                                )}
                                                <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* GROWING YOUR PRACTICE */}
                            <div className="bg-trust-navy rounded-[2.5rem] p-10 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                                <h3 className="font-serif text-3xl font-bold mb-8 relative z-10 border-b border-white/20 pb-4">
                                    Growing Your Practice
                                </h3>

                                <div className="space-y-8 relative z-10">
                                    <p className="text-lg text-slate-300">
                                        For established practices looking to scale efficiency and patient volume.
                                    </p>

                                    <ul className="space-y-6">
                                        <li className="flex gap-4">
                                            <div className="p-2 bg-white/10 rounded-xl text-primary">
                                                <span className="material-symbols-outlined">analytics</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-xl mb-1">Review Systems</h4>
                                                <p className="text-slate-300 text-sm">Deep-dive audit of current processes and bottlenecks.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="p-2 bg-white/10 rounded-xl text-primary">
                                                <span className="material-symbols-outlined">recommend</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-xl mb-1">Make Recommendations</h4>
                                                <p className="text-slate-300 text-sm">Actionable intelligence to improve clinical yield.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="p-2 bg-white/10 rounded-xl text-primary">
                                                <span className="material-symbols-outlined">build</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-xl mb-1">Implement Procedures</h4>
                                                <p className="text-slate-300 text-sm">Hands-on installation of new operating procedures.</p>
                                            </div>
                                        </li>
                                    </ul>

                                    <div className="pt-8 mt-8 border-t border-white/10">
                                        <TrackedLink
                                            href="/book-consultation"
                                            ctaName="Scale Your Practice"
                                            source="service_consulting_growth"
                                            className="w-full bg-white text-trust-navy hover:bg-slate-100 px-6 py-4 rounded-xl font-bold text-center block transition-colors"
                                        >
                                            Start Growth Audit
                                        </TrackedLink>
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
