import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
    title: "California Psychiatric Virtual Assistant Services | Virtual Minds",
    description: "Specialized psychiatric virtual assistant services for California practices. HIPAA-compliant support for billing, intake, EHR management, and practice consulting. Engineered for complex care.",
};

const serviceBlueprints = [
    {
        id: "SYS_CLINICAL_01",
        title: "Psychiatric-Trained Assistants",
        subtitle: "Clinical Operations",
        desc: "Specialized support for intake, refills, and high-acuity patient communication. Our assistants are fluent in psychiatric workflows and terminology.",
        features: ["Intake Triage", "Refill Routing", "Crisis Protocols", "Care Coordination"],
        clinicalImpact: "Recover $25k/year in overhead.",
        icon: "monitor_heart",
        link: "/services/virtual-assistant"
    },
    {
        id: "SYS_AUDIT_02",
        title: "Strategic Practice Consulting",
        subtitle: "Operational Diagnostics",
        desc: "A comprehensive diagnostic for established psychiatric practices. We identify friction points, compliance vulnerabilities, and operational inefficiencies.",
        features: ["Workflow Analysis", "Policy Refinement", "Risk Mitigation", "System Architecture"],
        clinicalImpact: "Achieve firm-wide clarity.",
        icon: "analytics",
        link: "/services/practice-consulting",
        highlight: true
    },
    {
        id: "SYS_RCM_03",
        title: "Billing & Revenue Cycle",
        subtitle: "Revenue Stabilization",
        desc: "We don’t replace your biller — we ensure they perform. Dedicated verification, prior auths, and superbill generation to stabilize cash flow.",
        features: ["Benefit Verification", "Prior Authorizations", "Claims Liaison", "Denial Management"],
        clinicalImpact: "Recover 4–7% in lost revenue.",
        icon: "receipt_long",
        link: "/services/billing-and-rcm"
    },
    {
        id: "SYS_LAUNCH_04",
        title: "Practice Start-Up",
        subtitle: "Turnkey Infrastructure",
        desc: "Turnkey operational launch for new California practices. We build the compliant foundation required for a successful private practice launch.",
        features: ["EHR Configuration", "Credentialing", "SOP Development", "Telehealth Setup"],
        clinicalImpact: "Launch $15k under budget.",
        icon: "rocket_launch",
        link: "/services/practice-start-up"
    },
    {
        id: "SYS_HIPAA_05",
        title: "HIPAA & Compliance",
        subtitle: "Risk Mitigation",
        desc: "Audit-ready infrastructure designed for California’s privacy landscape. We build secure systems that protect your license and your patients.",
        features: ["BAA Execution", "Secure Workflows", "Audit Prep", "Data Governance"],
        clinicalImpact: "Eliminate regulatory risk.",
        icon: "shield_moon",
        link: "/services/hipaa-compliance-support"
    },
    {
        id: "SYS_RX_06",
        title: "Medication Coordination",
        subtitle: "Pharmacy Liaison",
        desc: "Streamlined pharmacy workflows. We handle the high-volume logistics of medication management so you can focus on clinical decision-making.",
        features: ["Refill Triage", "Pharmacy Calls", "Auth Documentation", "Patient Updates"],
        clinicalImpact: "Recover 8+ hours/month.",
        icon: "medication",
        link: "/services/patient-intake-and-followup"
    },
    {
        id: "SYS_EHR_07",
        title: "EHR Optimization",
        subtitle: "Digital Architecture",
        desc: "Expert configuration for SimplePractice, Kareo, and intake platforms. We make your software work for you, not against you.",
        features: ["Template Design", "Automation Rules", "Portal Setup", "Integration Logic"],
        clinicalImpact: "Reduce screen time by 30%.",
        icon: "computer",
        link: "/services/ehr-emr-management"
    },
    {
        id: "SYS_ADMIN_08",
        title: "Executive Administration",
        subtitle: "Professional Support",
        desc: "Precision management for scheduling and correspondence. We handle the administrative load with the discretion high-profile patients expect.",
        features: ["Calendar Ops", "Secure Messaging", "Document Control", "Referral Mgmt"],
        clinicalImpact: "Operational precision.",
        icon: "calendar_month",
        link: "/services/administrative-and-scheduling"
    }
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Clinical Operations" }
                ]}
            />

            <main className="flex-grow">
                {/* 1. HERO SECTION */}
                <section className="relative pt-6 pb-20 md:pt-12 md:pb-32 overflow-hidden bg-[#FAF8F3]">
                    {/* Technical Background Grid */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]" />
                    </div>

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                            {/* Text Content */}
                            <div className="lg:w-[55%] pt-4">
                                <div className="inline-flex items-center gap-2 bg-white border border-trust-navy/10 rounded-full px-4 py-1.5 text-trust-navy text-[11px] font-black uppercase tracking-widest mb-6 shadow-sm">
                                    <span className="material-symbols-outlined text-primary text-sm">verified</span>
                                    Operational Infrastructure
                                </div>

                                <h1 className="font-serif text-4xl md:text-6xl text-trust-navy mb-6 leading-[1.05] tracking-tight">
                                    California Psychiatric <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">
                                        Operations Suite
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 font-medium">
                                    Virtual Minds provides the <strong className="text-trust-navy">operational backbone</strong> for psychiatrists practicing at the highest clinical and academic levels.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    {/* System Status Indicators */}
                                    <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm">
                                        <div className="size-2 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-xs font-bold text-trust-navy uppercase tracking-wider">Systems Active</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm">
                                        <span className="material-symbols-outlined text-primary text-lg">public</span>
                                        <span className="text-xs font-bold text-trust-navy uppercase tracking-wider">California Only</span>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Visual */}
                            <div className="lg:w-[45%] w-full relative">
                                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 group">
                                    <Image
                                        src="/images/psychiatrist-startup-planning.webp"
                                        alt="Strategic Psychiatric Planning"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-trust-navy/10 mix-blend-multiply" />

                                    {/* Glass Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/80 via-transparent to-transparent opacity-60" />

                                    {/* Floating Data Card */}
                                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-lg">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-primary/10 p-2 rounded-lg">
                                                    <span className="material-symbols-outlined text-primary">analytics</span>
                                                </div>
                                                <span className="text-xs font-bold text-trust-navy uppercase tracking-widest">Efficiency Metric</span>
                                            </div>
                                            <span className="text-green-600 font-bold text-xs bg-green-50 px-2 py-1 rounded-md border border-green-100">+35% Yield</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary w-[85%] rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. SERVICE ECOSYSTEM - GROUPED BY SILO */}
                <section className="py-24 bg-white border-t border-slate-100 relative">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">The Ecosystem</span>
                            <h2 className="font-serif text-4xl text-trust-navy leading-tight mb-4">Operational <span className="italic text-slate-400">Architecture</span></h2>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                Our services are organized into three integrated systems designed to stabilize, operate, and protect your practice.
                            </p>
                        </div>

                        {/* SILO 1: CLINICAL OPERATIONS */}
                        <div className="mb-24">
                            <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-4">
                                <div className="size-10 rounded-lg bg-trust-navy/5 flex items-center justify-center text-trust-navy">
                                    <span className="material-symbols-outlined">engineering</span>
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl text-trust-navy">Clinical Operations Systems</h3>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Infrastructure & Compliance</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {serviceBlueprints.filter(s => ["SYS_AUDIT_02", "SYS_LAUNCH_04", "SYS_HIPAA_05", "SYS_EHR_07"].includes(s.id)).map((service, idx) => (
                                    <Link
                                        key={idx}
                                        href={service.link}
                                        className={`group relative flex flex-col bg-white rounded-[2rem] p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden
                                            ${service.highlight
                                                ? "border-2 border-primary/20 shadow-xl shadow-primary/5 ring-1 ring-primary/10"
                                                : "border border-slate-200 hover:border-trust-navy hover:shadow-xl hover:shadow-trust-navy/5"
                                            }`}
                                    >
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="flex justify-between items-start mb-6 relative z-10">
                                            <div className={`size-12 rounded-xl flex items-center justify-center transition-colors duration-300 
                                                ${service.highlight ? "bg-primary text-white" : "bg-slate-50 text-trust-navy group-hover:bg-trust-navy group-hover:text-white"}`}>
                                                <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                                            </div>
                                            <span className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-widest group-hover:text-primary transition-colors">
                                                {service.id}
                                            </span>
                                        </div>
                                        <div className="mb-6 relative z-10">
                                            <h3 className="font-serif text-xl font-bold text-trust-navy mb-2 leading-tight group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                                                {service.subtitle}
                                            </p>
                                            <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                                                {service.desc}
                                            </p>
                                        </div>
                                        <div className="mt-auto pt-6 border-t border-slate-100 relative z-10">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                                                <span className="text-[10px] font-bold text-trust-navy uppercase tracking-wide">Impact</span>
                                            </div>
                                            <p className="text-xs text-slate-500 font-medium">{service.clinicalImpact}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* SILO 2: VIRTUAL SUPPORT */}
                        <div className="mb-24">
                            <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-4">
                                <div className="size-10 rounded-lg bg-trust-navy/5 flex items-center justify-center text-trust-navy">
                                    <span className="material-symbols-outlined">support_agent</span>
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl text-trust-navy">Virtual Support Systems</h3>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Execution & Administration</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {serviceBlueprints.filter(s => ["SYS_CLINICAL_01", "SYS_RX_06", "SYS_ADMIN_08"].includes(s.id)).map((service, idx) => (
                                    <Link
                                        key={idx}
                                        href={service.link}
                                        className="group relative flex flex-col bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-trust-navy hover:shadow-xl hover:shadow-trust-navy/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="flex justify-between items-start mb-6 relative z-10">
                                            <div className="size-12 rounded-xl bg-slate-50 text-trust-navy group-hover:bg-trust-navy group-hover:text-white flex items-center justify-center transition-colors duration-300">
                                                <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                                            </div>
                                            <span className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-widest group-hover:text-primary transition-colors">
                                                {service.id}
                                            </span>
                                        </div>
                                        <div className="mb-6 relative z-10">
                                            <h3 className="font-serif text-xl font-bold text-trust-navy mb-2 leading-tight group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                                                {service.subtitle}
                                            </p>
                                            <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                                                {service.desc}
                                            </p>
                                        </div>
                                        <div className="mt-auto pt-6 border-t border-slate-100 relative z-10">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                                                <span className="text-[10px] font-bold text-trust-navy uppercase tracking-wide">Impact</span>
                                            </div>
                                            <p className="text-xs text-slate-500 font-medium">{service.clinicalImpact}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* SILO 3: REVENUE PROTECTION */}
                        <div>
                            <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-4">
                                <div className="size-10 rounded-lg bg-trust-navy/5 flex items-center justify-center text-trust-navy">
                                    <span className="material-symbols-outlined">payments</span>
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl text-trust-navy">Revenue Protection</h3>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Financial Stabilization</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {serviceBlueprints.filter(s => ["SYS_RCM_03"].includes(s.id)).map((service, idx) => (
                                    <Link
                                        key={idx}
                                        href={service.link}
                                        className="group relative flex flex-col bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-trust-navy hover:shadow-xl hover:shadow-trust-navy/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:16px_16px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="flex justify-between items-start mb-6 relative z-10">
                                            <div className="size-12 rounded-xl bg-slate-50 text-trust-navy group-hover:bg-trust-navy group-hover:text-white flex items-center justify-center transition-colors duration-300">
                                                <span className="material-symbols-outlined text-2xl">{service.icon}</span>
                                            </div>
                                            <span className="text-[9px] font-mono font-bold text-slate-300 uppercase tracking-widest group-hover:text-primary transition-colors">
                                                {service.id}
                                            </span>
                                        </div>
                                        <div className="mb-6 relative z-10">
                                            <h3 className="font-serif text-xl font-bold text-trust-navy mb-2 leading-tight group-hover:text-primary transition-colors">
                                                {service.title}
                                            </h3>
                                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                                                {service.subtitle}
                                            </p>
                                            <p className="text-sm text-slate-600 leading-relaxed font-medium line-clamp-3">
                                                {service.desc}
                                            </p>
                                        </div>
                                        <div className="mt-auto pt-6 border-t border-slate-100 relative z-10">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="material-symbols-outlined text-primary text-sm">verified_user</span>
                                                <span className="text-[10px] font-bold text-trust-navy uppercase tracking-wide">Impact</span>
                                            </div>
                                            <p className="text-xs text-slate-500 font-medium">{service.clinicalImpact}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* 3. CTA SECTION */}
                <section className="bg-[#FAF8F3] py-24 border-t border-slate-200">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="bg-trust-navy rounded-[3rem] p-10 md:p-14 relative overflow-hidden text-center shadow-2xl group">
                            {/* Animated Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-trust-navy via-[#1e293b] to-trust-navy z-0" />
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-all duration-1000" />

                            <div className="relative z-10">
                                <h2 className="font-serif text-3xl md:text-5xl text-white mb-6 leading-tight">
                                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold italic">Upgrade</span> Your Infrastructure?
                                </h2>
                                <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                                    Stop managing administrative chaos. Implement a clinical-grade operating system designed for the specific demands of your practice.
                                </p>

                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <Link
                                        href="/book-consultation"
                                        className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-[#B8860B] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1"
                                    >
                                        <span className="material-symbols-outlined">calendar_today</span>
                                        Schedule Consultation
                                    </Link>
                                    <Link
                                        href="/pricing"
                                        className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1"
                                    >
                                        View Pricing Models
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
