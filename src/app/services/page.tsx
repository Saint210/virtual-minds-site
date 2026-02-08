import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export const metadata = {
    title: "Clinical Operations for California Psychiatry | Virtual Minds",
    description: "Precision infrastructure for high-complexity psychiatric practices. Operational backbone for psychiatrists practicing at the highest clinical levels.",
};

const serviceBlueprints = [
    {
        title: "Psychiatric-Trained Assistants",
        subtitle: "Specialized Clinical Support",
        desc: "Specialized support for intake, refills, and high-acuity patient communication. Your patients are complex; their needs are nuanced. Our assistants are trained specifically in psychiatric workflows — not generic medical admin.",
        features: ["Intake management and triage", "Telehealth coordination", "Medication-related communication", "Refill routing and pharmacy liaison", "High-acuity patient correspondence"],
        clinicalImpact: "Recover $25k/year in administrative overhead.",
        icon: "monitor_heart",
        link: "/services/virtual-assistant"
    },
    {
        title: "Strategic Operational Review",
        subtitle: "Practice Diagnostics",
        desc: "A comprehensive diagnostic for established psychiatric practices. We conduct a full-scale evaluation of your systems, policies, and workflows to identify friction points, compliance vulnerabilities, and operational inefficiencies.",
        features: ["Process and workflow analysis", "Management policy refinement", "Operational restructuring"],
        clinicalImpact: "Achieve firm-wide operational clarity.",
        icon: "analytics",
        link: "/services/practice-consulting",
        highlight: true
    },
    {
        title: "Billing & Revenue Cycle Coordination",
        subtitle: "Revenue Stabilization",
        desc: "Stabilize revenue with dedicated verification, prior auths, and superbills. We don’t replace your billing company — we ensure they perform at their highest level. Our team manages the administrative components that directly impact revenue reliability.",
        features: ["Insurance verification", "Prior authorizations", "Superbills", "Claims coordination and issue resolution"],
        clinicalImpact: "Recover 4–7% in lost revenue.",
        icon: "receipt_long",
        link: "/services/billing-and-rcm"
    },
    {
        title: "Practice Start-Up (California-Specific)",
        subtitle: "Turnkey Launch",
        desc: "Turnkey operational launch for new psychiatric practices. We build the operational foundation required for a compliant, efficient, California-ready practice. From EHR implementation to policy development, we ensure your launch is seamless.",
        features: ["EHR setup and configuration", "Credentialing support", "Policy and SOP development", "Telepsychiatry infrastructure"],
        clinicalImpact: "Launch $15k under budget.",
        icon: "rocket_launch",
        link: "/services/practice-start-up"
    },
    {
        title: "HIPAA & Privacy Compliance",
        subtitle: "Audit-Ready Infrastructure",
        desc: "Audit-ready infrastructure designed for California’s privacy landscape. We build and maintain secure, compliant systems that protect your practice, your license, and your patients. Our protocols exceed baseline HIPAA requirements.",
        features: ["Privacy protocols", "HIPAA audits", "Secure data workflows", "Documentation standards"],
        clinicalImpact: "Eliminate $50k in audit risk.",
        icon: "shield_moon",
        link: "/services/hipaa-compliance-support"
    },
    {
        title: "Medication Management Coordination",
        subtitle: "Streamlined Pharmacy Ops",
        desc: "Streamlined pharmacy workflows — 90% faster. Medication management is one of the highest-risk, highest-volume components of psychiatric care. We handle the logistics so you can focus on clinical decision-making.",
        features: ["Refill coordination", "Pharmacy communication", "Prior authorization documentation", "Medication workflow optimization"],
        clinicalImpact: "Recover 8+ billable hours/month.",
        icon: "medication",
        link: "/services/patient-intake-and-followup"
    },
    {
        title: "EHR Optimization",
        subtitle: "System Configuration",
        desc: "Expert configuration for SimplePractice, Kareo, and more. Your EHR should support your clinical flow — not slow it down. We configure your system to match the way you practice, ensuring efficiency, accuracy, and ease of use.",
        features: ["Workflow automation", "Template optimization", "System support and troubleshooting"],
        clinicalImpact: "Save $12k/year in clinician time.",
        icon: "computer",
        link: "/services/ehr-emr-management"
    },
    {
        title: "Administrative Support",
        subtitle: "Professional Precision",
        desc: "Professional precision for scheduling, documentation, and correspondence. We manage the administrative load with the level of professionalism your patients expect and your practice requires. Every touchpoint is handled with discretion.",
        features: ["Scheduling and calendar management", "Document management", "Patient correspondence", "Practice communication systems"],
        clinicalImpact: "Achieve operational precision across the practice.",
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
                    { label: "Clinical Operations", href: "/services" }
                ]}
            />

            <main className="flex-grow">
                {/* HERO */}
                {/* HERO */}
                <section className="relative pt-6 pb-12 md:pt-12 md:pb-20 overflow-hidden bg-[#FAF8F3]">
                    {/* Ambient Background */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">

                            {/* Text Content */}
                            <div className="lg:w-3/5 pt-4">
                                <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block border-l-2 border-primary pl-3">Clinical Operations for California Psychiatry</span>
                                <h1 className="font-serif text-4xl md:text-6xl text-trust-navy mb-6 leading-[1.1]">
                                    Precision Infrastructure for <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-secondary italic">High-Complexity Practices.</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-6 font-light">
                                    Virtual Minds provides the operational backbone for psychiatrists practicing at the highest clinical and academic levels.
                                </p>
                                <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl mb-8">
                                    Our systems are engineered for the realities of California psychiatry—high acuity, high liability, high expectations, and zero tolerance for operational drift.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm relative group overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-red-400 transition-colors" />
                                        <h3 className="font-serif text-xl text-trust-navy mb-4">The Standard VA</h3>
                                        <ul className="text-sm text-slate-500 space-y-3">
                                            <li className="flex items-center gap-3"><span className="text-red-400 font-bold">×</span> Generic "Admin" tasks</li>
                                            <li className="flex items-center gap-3"><span className="text-red-400 font-bold">×</span> Reactive communication</li>
                                            <li className="flex items-center gap-3"><span className="text-red-400 font-bold">×</span> Misses clinical nuances</li>
                                        </ul>
                                    </div>
                                    <div className="bg-trust-navy p-8 rounded-2xl border border-trust-navy shadow-2xl relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-30" />
                                        <div className="absolute top-0 left-0 w-1 h-full bg-primary" />

                                        <h3 className="font-serif text-xl text-white mb-4 relative z-10">Virtual Minds Standard</h3>
                                        <ul className="text-sm text-white space-y-3 relative z-10 font-medium">
                                            <li className="flex items-center gap-3"><span className="text-primary">✓</span> Clinical coordination</li>
                                            <li className="flex items-center gap-3"><span className="text-primary">✓</span> HIPAA-hardened workflows</li>
                                            <li className="flex items-center gap-3"><span className="text-primary">✓</span> Administrative intelligence</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image / Visual */}
                            <div className="lg:w-2/5 relative">
                                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative border border-white/10 group">
                                    <Image
                                        src="/images/psychiatrist-startup-planning.png"
                                        alt="Strategic Psychiatric Planning"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-trust-navy/20 mix-blend-multiply transition-opacity group-hover:opacity-0" />

                                    {/* Floating Glass Badge */}
                                    <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-accent/20 p-3 rounded-xl">
                                                <span className="material-symbols-outlined text-accent">verified</span>
                                            </div>
                                            <div>
                                                <p className="text-xs text-white/60 uppercase tracking-widest">System Status</p>
                                                <p className="text-white font-serif text-lg">Operational Excellence</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES GRID */}
                <section className="py-32 bg-slate-50 relative">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-24">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Expertise</span>
                            <h2 className="font-serif text-5xl text-trust-navy mb-6">Operational Capabilities</h2>
                            <p className="text-xl text-slate-600 font-light leading-relaxed">
                                We support solo clinicians and multi-provider groups with structured operational excellence.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {serviceBlueprints.map((service, idx) => (
                                <div
                                    key={idx}
                                    className={`group bg-white rounded-[2rem] p-8 transition-all duration-300 border flex flex-col relative overflow-hidden hover:-translate-y-1 ${service.highlight
                                        ? "border-primary/20 shadow-lg shadow-primary/5 ring-1 ring-primary/10"
                                        : "border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200"
                                        }`}
                                >
                                    {/* Highlight Badge */}
                                    {service.highlight && (
                                        <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 rounded-bl-xl text-[10px] font-bold uppercase tracking-widest shadow-sm z-20">
                                            Signature Audit
                                        </div>
                                    )}

                                    {/* Hover Top Border */}
                                    <div className="absolute top-0 inset-x-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity bg-primary" />

                                    {/* Header: Icon + Title */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-105 bg-primary/5 text-primary">
                                            <span className="material-symbols-outlined">{service.icon}</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest mb-1 text-slate-400">
                                                {service.subtitle}
                                            </p>
                                            <h3 className="font-serif text-2xl font-bold text-primary leading-tight">
                                                {service.title}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="mb-6 flex-grow">
                                        <p className="text-sm leading-relaxed text-slate-600">
                                            {service.desc}
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="border-t border-slate-100 pt-4 mt-auto">
                                        {/* Compact Impact Row (Minimalist) */}
                                        <div className="flex items-center gap-3 mb-4 pl-1">
                                            <div className="text-primary">
                                                <span className="material-symbols-outlined text-xl">trending_up</span>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Clinical Impact</p>
                                                <p className="text-sm font-bold leading-none text-trust-navy">
                                                    {service.clinicalImpact}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Compact Chips */}
                                        <div className="flex flex-wrap gap-1.5 mb-6">
                                            {service.features.slice(0, 4).map((feature, fIdx) => (
                                                <span key={fIdx} className="bg-slate-50 text-slate-500 px-2.5 py-1 rounded-md text-[10px] font-bold border border-slate-100 group-hover:border-primary/20 transition-colors uppercase tracking-wide">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            href={service.link}
                                            className="group/btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-trust-navy transition-colors"
                                        >
                                            View Details <span className="material-symbols-outlined text-base transform group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TARGET AUDIENCE / CREDIBILITY */}
                <section className="py-24 bg-trust-navy text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
                    <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-center">
                        <h2 className="font-serif text-3xl md:text-5xl mb-8">
                            California’s Premier <br />
                            <span className="text-healthcare-cyan">Psychiatric Operations Firm.</span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
                            We deliver HIPAA‑compliant automation, billing coordination, and clinical‑grade administrative support for mental‑health providers statewide.
                        </p>

                        <div className="flex justify-center gap-4 flex-wrap">
                            <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium">Solo Clinicians</span>
                            <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium">Multi-Provider Groups</span>
                            <span className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium">Academic Practices</span>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24 bg-[#FAF8F3]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="bg-white rounded-[3rem] p-12 lg:p-16 border border-slate-100 shadow-xl text-center">
                            <h2 className="font-serif text-4xl text-trust-navy mb-6">Ready to Operationalize Your Practice?</h2>
                            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
                                If you are a psychiatrist who views your practice as a high-performance vehicle, we are your pit crew.
                            </p>
                            <Link href="/book-consultation" className="bg-terracotta hover:bg-[#964A22] text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl shadow-terracotta/20 transition-all inline-block hover:scale-[1.02]">
                                Request an Executive Consultation
                            </Link>
                            <p className="text-xs text-slate-400 mt-6 uppercase tracking-widest font-bold">Limited Engagement Availability</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
