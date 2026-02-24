import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceEcosystem from "@/components/services/ServiceEcosystem";

export const metadata = {
    title: "California Psychiatric Virtual Assistant Services | Virtual Minds",
    description: "The admin support psychiatrists actually need — prior auths, intake, EHR, and billing coordination. Built by people who understand psychiatric practice.",
};

const serviceCategories = [
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
        features: ["Workflow Analysis", "Policy Refinement", "Risk Mitigation", "System Optimization"],
        clinicalImpact: "Achieve firm-wide clarity.",
        icon: "analytics",
        link: "/services/practice-consulting",
        highlight: true
    },
    {
        id: "SYS_RCM_03",
        title: "Billing & Revenue Cycle Support",
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
        subtitle: "Turnkey Setup",
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
        desc: "Audit-ready systems built for California’s privacy landscape. We build secure systems that protect your license and your patients.",
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
        subtitle: "Digital Optimization",
        desc: "Expert configuration for SimplePractice, Kareo, and intake platforms. We make your software work for you, not against you.",
        features: ["Template Design", "Automation Rules", "Portal Setup", "Integration Logic"],
        clinicalImpact: "Reduce screen time by 30%.",
        icon: "computer",
        link: "/services/ehr-emr-management"
    },
    {
        id: "SYS_ADMIN_08",
        title: "Practice Administration",
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
                <ServiceHero />
                <ServiceEcosystem services={serviceCategories} />

                {/* 3. CTA SECTION */}
                <section className="bg-[#FAF8F3] py-24 border-t border-slate-200">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="bg-trust-navy rounded-[3rem] p-10 md:p-14 relative overflow-hidden text-center shadow-2xl group">
                            {/* Animated Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-trust-navy via-[#1e293b] to-trust-navy z-0" />
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-all duration-1000" />

                            <div className="relative z-10 text-white">
                                <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight !text-white">
                                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold italic">Upgrade</span> Your Operations?
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
