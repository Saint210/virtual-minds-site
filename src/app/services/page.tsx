import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceArchitectureGraphic from "@/components/services/ServiceArchitectureGraphic";

export const metadata = {
    title: "Psychiatric Practice Support Services | Virtual Minds",
    description: "Specialized virtual assistant and practice management support for California psychiatrists. From practice start-ups to medication management workflows.",
};

const serviceBlueprints = [
    {
        title: "Virtual Assistants",
        desc: "Specialized assistants trained in psychiatric-specific workflows, medication refill coordination, and professional patient communication.",
        descMarkup: (
            <>
                <strong className="text-trust-navy">Psychiatric-trained assistants</strong> who handle intake, refills, and patient communication—
                <span className="text-[#D2691E]"> so you can focus on clinical care</span>.
            </>
        ),
        icon: "person_search",
        color: "text-primary",
        link: "/services/virtual-assistant",
        tags: ["Intake Management", "Telehealth Comms"],
        yield: "Recover 10-20+ Hours Weekly"
    },
    {
        title: "Billing & RCM",
        desc: "Dedicated support for insurance verification, superbill creation, and revenue cycle management to ensure practice stability.",
        descMarkup: (
            <>
                <strong className="text-trust-navy">Maximize revenue</strong> with dedicated insurance verification, prior auths, and claims management—
                <span className="text-[#D2691E]"> ensuring practice stability</span>.
            </>
        ),
        icon: "receipt_long",
        color: "text-accent",
        link: "/services/billing-and-rcm",
        tags: ["Prior Auths", "Superbills"],
        yield: "Ensure Revenue Stability"
    },
    {
        title: "Practice Start-Up",
        desc: "Turnkey operational setup for new California psychiatric practices. EHR implementation, policy development, and logistical support.",
        descMarkup: (
            <>
                <strong className="text-trust-navy">Turnkey setup</strong> for new practices—EHR, credentialing, policies, and telehealth infrastructure.{' '}
                <span className="text-[#D2691E]">Launch in 30 days</span>.
            </>
        ),
        icon: "rocket_launch",
        color: "text-primary",
        link: "/services/practice-start-up",
        tags: ["Credentialing", "Telepsych Setup"],
        yield: "Launch with Confidence"
    },
    {
        title: "HIPAA Compliance",
        desc: "Secure data handling protocols and HIPAA compliance auditing designed specifically for California patient privacy requirements.",
        descMarkup: (
            <>
                <strong className="text-trust-navy">Secure infrastructure</strong> with audit-ready protocols designed for{' '}
                <span className="text-[#D2691E]">California privacy compliance</span>.
            </>
        ),
        icon: "shield_moon",
        color: "text-accent",
        link: "/services/hipaa-compliance-support",
        tags: ["Privacy Protected", "Audit Ready"],
        yield: "Secure Infrastructure"
    },
    {
        title: "Medication Management",
        desc: "Streamlined coordination between your practice and pharmacies. Handling refill requests and prior authorization documentation.",
        descMarkup: (
            <>
                <strong className="text-trust-navy">Streamlined pharmacy coordination</strong>—handling refills and prior auths{' '}
                <span className="text-[#D2691E]">90% faster</span>.
            </>
        ),
        icon: "medication",
        color: "text-primary",
        link: "/services/patient-intake-and-followup",
        tags: ["Refill Logistics", "Pharmacy Liaison"],
        yield: "Clinical Workflow Efficiency"
    },
    {
        title: "EHR Optimization",
        desc: "Expert configuration of SimplePractice, Kareo, and other leading EHR platforms to match your practice's unique clinical workflow.",
        descMarkup: (
            <>
                <strong className="text-trust-navy">Expert EHR configuration</strong> for SimplePractice, Kareo, and more—
                <span className="text-[#D2691E]"> reduce clicks by 50%</span>.
            </>
        ),
        icon: "computer",
        color: "text-accent",
        link: "/services/ehr-emr-management",
        tags: ["Automation", "Workflow Support"],
        yield: "Reduce Administrative Burden"
    },
    {
        title: "Website Design",
        desc: "Medical-grade, HIPAA-aware website design covering SEO, patient intake portals, and mobile responsiveness.",
        descMarkup: (
            <>
                <strong className="text-trust-navy">AI-optimized websites</strong> that rank on Google <em>and</em> ChatGPT—
                <span className="text-[#D2691E]"> 300% more patient inquiries</span>.
            </>
        ),
        icon: "web",
        color: "text-primary",
        link: "/services/website-design",
        tags: ["SEO", "Patient Experience"],
        yield: "Increase Patient Inquiries"
    }
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services" }
                ]}
            />

            <main className="flex-grow">
                {/* 1. HERO SECTION */}
                <section className="relative pt-4 md:pt-6 pb-10 overflow-hidden bg-[#FAF8F3]">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#B25A2A_1px,transparent_1px)] [background-size:40px_40px]" />
                    </div>

                    <div className="relative z-10 max-w-[1400px] mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">

                            {/* Left Column: The Proposition (60%) */}
                            <div className="lg:w-[60%]">

                                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-2">
                                    <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                                    California Psychiatric Support
                                </div>

                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy mb-4 leading-[0.95] tracking-tight">
                                    Specialized <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                                        Practice Support.
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-6 max-w-2xl">
                                    Functional administrative infrastructure and clinical coordination built exclusively for California psychiatric practices.
                                </p>

                                {/* Institutional Social Proof */}
                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-12 h-12 rounded-full bg-white border-[3px] border-white flex items-center justify-center overflow-hidden shadow-lg relative z-[10]">
                                                <Image
                                                    src={`https://i.pravatar.cc/150?u=${i + 85}`}
                                                    alt="Board-Certified Specialist"
                                                    width={48}
                                                    height={48}
                                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm text-slate-500 font-medium leading-tight text-center sm:text-left">
                                        <p><strong className="text-trust-navy">The Authority in California Psychiatric Ops</strong></p>
                                        <p>Trusted by Solo Practices and Multi-Provider Groups.</p>
                                    </div>
                                </div>

                                {/* FIRM-WIDE IMPACT BAR */}
                                <div className="flex flex-wrap items-center gap-x-12 gap-y-6 py-6 border-y border-slate-200/60 mb-8">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">Firm-Wide Impact</p>
                                        <p className="text-lg font-bold text-trust-navy">Recover 20+ Hours/wk</p>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-slate-200" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">Regional Focus</p>
                                        <p className="text-lg font-bold text-trust-navy">California Specialized</p>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-slate-200" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">Status</p>
                                        <p className="text-lg font-bold text-trust-navy italic">HIPAA Infrastructure</p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-5">
                                    <Link
                                        href="/book-consultation"
                                        className="px-10 py-5 bg-primary hover:bg-primary-hover text-white font-bold text-lg rounded-2xl shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
                                    >
                                        <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">schedule</span>
                                        Start Strategy Audit
                                    </Link>
                                    <Link
                                        href="/pricing"
                                        className="px-10 py-5 bg-white border border-slate-200 text-trust-navy font-bold text-lg rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
                                    >
                                        View All Solutions
                                        <span className="material-symbols-outlined text-primary">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column: Visual (40%) */}
                            <div className="lg:w-[40%] group w-full">
                                <ServiceArchitectureGraphic />
                            </div>

                        </div>
                    </div>
                </section>

                {/* 2. THE SERVICES GRID - PREMIUM REDESIGN */}
                <section className="py-32 bg-white relative">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[11px]">Service Solutions</span>
                                <span className="w-12 h-[2px] bg-gradient-to-r from-[#D2691E] to-transparent"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-trust-navy mt-4 mb-6 tracking-tight leading-[1.1]">
                                <span className="relative inline-block">
                                    Professional Support
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#D2691E]/20"></span>
                                </span>
                                {' '}for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">
                                    Every Practice Need.
                                </span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
                                <strong className="text-trust-navy">Comprehensive administrative support</strong> designed specifically for the unique needs of{' '}
                                <span className="relative inline-block text-[#D2691E] font-bold">
                                    California psychiatric practices
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D2691E]/30"></span>
                                </span>.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                            {serviceBlueprints.map((service, idx) => {
                                // Featured cards (navy background): Virtual Assistants, Website Design
                                const isFeatured = idx === 0 || idx === 6;

                                if (isFeatured) {
                                    return (
                                        <div key={idx} className="group relative p-10 bg-trust-navy rounded-[3rem] text-white shadow-2xl shadow-trust-navy/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col border border-white/10">
                                            {/* Background Glow */}
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E]/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none group-hover:bg-[#D2691E]/30 transition-colors" />

                                            <div className="relative z-10 mb-8">
                                                {idx === 0 && (
                                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D2691E] text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                                                        <span className="material-symbols-outlined text-sm">star</span>
                                                        Most Popular
                                                    </div>
                                                )}
                                                {idx === 6 && (
                                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#67927A] text-white text-[10px] font-bold uppercase tracking-widest mb-6">
                                                        <span className="material-symbols-outlined text-sm">auto_awesome</span>
                                                        AI-Optimized
                                                    </div>
                                                )}
                                                <span className={`material-symbols-outlined text-5xl text-[#D2691E] block mb-4`}>{service.icon}</span>
                                                <h3 className="text-3xl font-serif font-bold !text-white mb-4">{service.title}</h3>
                                                <p className="text-slate-300 font-medium leading-relaxed text-base">
                                                    {service.descMarkup}
                                                </p>
                                            </div>

                                            <div className="mt-auto relative z-10">
                                                <div className="flex flex-wrap gap-2 mb-8">
                                                    {service.tags.map((tag, tIdx) => (
                                                        <span key={tIdx} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-slate-200">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="pt-6 border-t border-white/10 mb-6">
                                                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-2">Clinical Impact</span>
                                                    <span className="text-xl font-bold text-[#D2691E]">{service.yield}</span>
                                                </div>
                                                <Link href={service.link} className="w-full py-4 bg-[#D2691E] hover:bg-[#B8860B] text-white rounded-xl font-bold transition-all shadow-lg shadow-[#D2691E]/20 flex items-center justify-center gap-2 group/btn">
                                                    View Service Details <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                }

                                // Standard cards (cream background)
                                return (
                                    <div key={idx} className="group p-10 bg-[#FAF8F3] rounded-[3rem] border border-slate-100 hover:border-[#D2691E]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D2691E]/5 flex flex-col hover:-translate-y-2">
                                        <div className="mb-8">
                                            <span className={`material-symbols-outlined text-5xl text-[#D2691E] block mb-6 group-hover:scale-110 transition-transform origin-left`}>{service.icon}</span>
                                            <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4">{service.title}</h3>
                                            <p className="text-slate-600 font-medium leading-relaxed text-base">
                                                {service.descMarkup}
                                            </p>
                                        </div>

                                        <div className="mt-auto">
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {service.tags.map((tag, tIdx) => (
                                                    <span key={tIdx} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-500">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="pt-6 border-t border-slate-200 mb-6">
                                                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block mb-2">Clinical Impact</span>
                                                <span className="text-lg font-bold text-trust-navy">{service.yield}</span>
                                            </div>
                                            <Link href={service.link} className="w-full py-4 bg-white border border-slate-200 text-trust-navy font-bold rounded-xl hover:border-[#D2691E] hover:text-[#D2691E] transition-all shadow-sm flex items-center justify-center gap-2 group/btn">
                                                Learn More <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* 3. FINAL CTA */}
                <section className="bg-trust-navy py-32 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
                    </div>

                    <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic leading-tight !text-white">
                            Recover Your <br /> Clinical Focus.
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                            Handle medication management, prior authorizations, and administrative workflows with specialized support.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="/book-consultation"
                                className="px-12 py-5 bg-primary text-white font-black text-xl rounded-2xl shadow-2xl shadow-primary/20 hover:bg-primary-hover transition-all hover:scale-105"
                            >
                                Schedule Strategy Audit
                            </Link>
                            <Link
                                href="/contact"
                                className="px-12 py-5 bg-transparent border border-white/20 text-white font-bold text-xl rounded-2xl hover:bg-white/5 transition-all"
                            >
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
