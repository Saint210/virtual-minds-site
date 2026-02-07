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
                <section className="relative pt-16 pb-24 overflow-hidden">
                    {/* Ambient Background */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-healthcare-cyan/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row gap-16 items-start">

                            {/* Text Content */}
                            <div className="lg:w-3/5">
                                <span className="text-healthcare-cyan font-bold tracking-widest uppercase text-sm mb-4 block">Clinical Operations for California Psychiatry</span>
                                <h1 className="font-serif text-5xl md:text-6xl text-trust-navy mb-8 leading-[1.05]">
                                    Precision Infrastructure for <br />
                                    <span className="text-terracotta italic">High-Complexity Practices.</span>
                                </h1>
                                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 border-l-4 border-healthcare-cyan pl-6">
                                    Virtual Minds provides the operational backbone for psychiatrists practicing at the highest clinical and academic levels.
                                </p>
                                <p className="text-lg text-slate-500 leading-relaxed max-w-2xl mb-12">
                                    Our systems are engineered for the realities of California psychiatry — high acuity, high liability, high expectations, and zero tolerance for operational drift.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                        <h3 className="font-serif text-lg text-trust-navy mb-2">The Standard VA</h3>
                                        <ul className="text-sm text-slate-500 space-y-2">
                                            <li className="flex items-center gap-2"><span className="text-red-400">×</span> Generic "Admin" tasks</li>
                                            <li className="flex items-center gap-2"><span className="text-red-400">×</span> Reactive communication</li>
                                            <li className="flex items-center gap-2"><span className="text-red-400">×</span> Misses clinical nuances</li>
                                        </ul>
                                    </div>
                                    <div className="bg-trust-navy p-6 rounded-2xl border border-trust-navy shadow-xl text-white relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-healthcare-cyan/10 rounded-full blur-2xl"></div>
                                        <h3 className="font-serif text-lg text-white mb-2">Virtual Minds Standard</h3>
                                        <ul className="text-sm text-slate-300 space-y-2 relative z-10">
                                            <li className="flex items-center gap-2"><span className="text-healthcare-cyan">✓</span> Clinical coordination</li>
                                            <li className="flex items-center gap-2"><span className="text-healthcare-cyan">✓</span> HIPAA-hardened workflows</li>
                                            <li className="flex items-center gap-2"><span className="text-healthcare-cyan">✓</span> Administrative intelligence</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Hero Image / Visual */}
                            <div className="lg:w-2/5 relative pt-12">
                                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                                    <Image
                                        src="/images/psychiatrist-startup-planning.png"
                                        alt="Strategic Psychiatric Planning"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-trust-navy/10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICES GRID */}
                <section className="py-24 bg-[#FAF8F3] relative">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="font-serif text-4xl text-trust-navy mb-6">Operational Capabilities</h2>
                            <p className="text-lg text-slate-500">
                                We support solo clinicians and multi-provider groups with structured operational excellence.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {serviceBlueprints.map((service, idx) => (
                                <div
                                    key={idx}
                                    className={`group bg-white rounded-[2.5rem] p-10 transition-all duration-300 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 flex flex-col relative overflow-hidden ${service.highlight ? "ring-2 ring-primary/20" : ""
                                        }`}
                                >
                                    {/* Highlight Badge */}
                                    {service.highlight && (
                                        <div className="absolute top-6 right-6 bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/10">
                                            Signature Audit
                                        </div>
                                    )}

                                    {/* Hover Top Border */}
                                    <div className={`absolute top-0 inset-x-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity ${service.highlight ? "bg-primary" : "bg-trust-navy"
                                        }`} />

                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-3xl transition-transform duration-300 group-hover:scale-110 ${service.highlight ? "bg-primary/5 text-primary" : "bg-trust-navy/5 text-trust-navy"
                                        }`}>
                                        <span className="material-symbols-outlined">{service.icon}</span>
                                    </div>

                                    <div className="mb-2">
                                        <p className="text-xs font-bold uppercase tracking-widest mb-2 text-slate-400">
                                            {service.subtitle}
                                        </p>
                                        <h3 className="font-serif text-3xl font-bold mb-4 text-trust-navy">
                                            {service.title}
                                        </h3>
                                        <p className="text-base leading-relaxed mb-8 text-slate-600 border-l-4 border-primary/20 pl-4 py-1">
                                            {service.desc}
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="pt-6 border-t border-slate-50 mb-6">
                                            <span className="text-[10px] font-black uppercase tracking-widest block mb-2 text-slate-400">Clinical Impact</span>
                                            <span className={`text-lg font-bold ${service.highlight ? "text-primary" : "text-trust-navy"
                                                }`}>
                                                {service.clinicalImpact}
                                            </span>
                                        </div>

                                        {/* Service Chips */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {service.features.map((feature, fIdx) => (
                                                <span key={fIdx} className="bg-slate-50 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-bold border border-slate-100 group-hover:border-slate-200 transition-colors">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            href={service.link}
                                            className={`inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider border-b-2 pb-1 transition-all ${service.highlight
                                                ? "text-primary border-primary/20 hover:border-primary hover:text-primary"
                                                : "text-trust-navy border-slate-200 hover:border-terracotta hover:text-terracotta"
                                                }`}
                                        >
                                            Explore Capabilities <span className="material-symbols-outlined text-lg">arrow_forward</span>
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
