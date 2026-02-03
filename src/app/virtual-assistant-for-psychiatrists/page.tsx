import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ROICalculator from "@/components/marketing/ROICalculator";

import VirtualAssistantSchema from "@/components/seo/VirtualAssistantSchema";

export const metadata: Metadata = {
    title: "Executive Virtual Assistants for California Psychiatrists | ROI-Driven Support",
    description: "Expert psychiatric virtual assistants. HIPAA-compliant administrative infrastructure recovering 20+ hours weekly and $300K+ annually for California practitioners.",
    alternates: {
        canonical: 'https://thevirtualminds.com/virtual-assistant-for-psychiatrists'
    },
    openGraph: {
        title: "Virtual Assistant for Psychiatrists | California Practice Support",
        description: "Expert virtual assistants for California psychiatrists. HIPAA-compliant administrative support, billing, and practice management. Recover 20+ hours weekly and $300K+ annually.",
        url: "https://thevirtualminds.com/virtual-assistant-for-psychiatrists",
        siteName: "Virtual Minds",
        images: [{
            url: "https://thevirtualminds.com/images/og-virtual-assistant.png",
            width: 1200,
            height: 630,
            alt: "Virtual Assistant for Psychiatrists - California Practice Support"
        }],
        locale: "en_US",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Virtual Assistant for Psychiatrists | California Practice Support",
        description: "Expert virtual assistants for California psychiatrists. HIPAA-compliant administrative support, billing, and practice management.",
        images: ["https://thevirtualminds.com/images/og-virtual-assistant.png"],
    },
};

export default function VirtualAssistantForPsychiatristsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <VirtualAssistantSchema />
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Virtual Assistant for Psychiatrists" }
                ]}
            />
            <main className="flex-grow">
                {/* PREMIUM HERO SECTION */}
                <section className="relative pt-4 md:pt-6 pb-24 overflow-hidden bg-[#FAF8F3]">
                    {/* Subtle Dot Pattern Background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#B25A2A_1px,transparent_1px)] [background-size:40px_40px]" />
                    </div>

                    <div className="relative z-10 max-w-[1400px] mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">

                            {/* Left Column (60%) */}
                            <div className="lg:w-[60%]">
                                {/* Trust Badge */}
                                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                                    <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                                    California's #1 Psychiatric VA Service
                                </div>

                                {/* Main Headline */}
                                <h1 className="font-serif text-5xl md:text-7xl font-bold text-trust-navy mb-8 leading-[0.95] tracking-tight">
                                    Virtual Assistants for <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                                        California Psychiatrists
                                    </span>
                                </h1>

                                {/* Value Proposition */}
                                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-10 max-w-2xl">
                                    <strong className="text-trust-navy">HIPAA-compliant administrative infrastructure</strong> for Telehealth & Hybrid Psychiatric Practices.
                                    <span className="text-[#D2691E] font-bold"> Specialized clinical support</span> that recovers 20+ hours weekly and $300K+ annually.
                                </p>

                                {/* Trust Badges */}
                                <div className="flex flex-wrap gap-4 mb-10">
                                    <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                                        <span className="material-symbols-outlined text-primary font-bold">verified</span>
                                        <span className="text-sm font-bold text-slate-600 whitespace-nowrap">HIPAA Compliant</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                                        <span className="material-symbols-outlined text-[#D2691E] font-bold">medical_services</span>
                                        <span className="text-sm font-bold text-slate-600 whitespace-nowrap">Psychiatry-Specialized</span>
                                    </div>
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/book-consultation"
                                        className="inline-flex items-center gap-3 px-8 py-5 bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold text-lg rounded-2xl shadow-xl shadow-[#D2691E]/20 transition-all hover:-translate-y-1 justify-center"
                                    >
                                        See My Recovery Plan
                                        <span className="material-symbols-outlined">arrow_forward</span>
                                    </Link>
                                    <a
                                        href="#roi-calculator"
                                        className="inline-flex items-center gap-3 px-8 py-5 bg-white border-2 border-slate-200 text-trust-navy font-bold text-lg rounded-2xl hover:border-[#D2691E] hover:text-[#D2691E] transition-all justify-center"
                                    >
                                        Calculate Your ROI
                                        <span className="material-symbols-outlined">calculate</span>
                                    </a>
                                </div>
                            </div>

                            {/* Right Column: Premium Visual (40%) */}
                            <div className="lg:w-[40%] group w-full">
                                <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl aspect-[4/5] bg-white group-hover:border-primary/20 transition-colors">
                                    <Image
                                        src="/images/psychiatrist-va-hero.png"
                                        alt="California Psychiatrist with Virtual Assistant Support"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/30 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* PLATFORM CLOUD */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-12">Trusted Integration with Leading Platforms</p>
                            <div className="flex flex-wrap justify-center items-center gap-6">
                                {[
                                    { name: 'SimplePractice', icon: 'clinical_notes' },
                                    { name: 'Kareo', icon: 'medical_information' },
                                    { name: 'Jane App', icon: 'health_and_safety' },
                                    { name: 'AdvancedMD', icon: 'medication' },
                                    { name: 'TherapyNotes', icon: 'psychology' }
                                ].map((platform) => (
                                    <div key={platform.name} className="group bg-[#FAF8F3] px-6 py-3 rounded-xl border-2 border-slate-200 hover:border-[#D2691E]/30 font-bold text-slate-600 text-sm shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[#D2691E] text-lg group-hover:scale-110 transition-transform">{platform.icon}</span>
                                        {platform.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* METRICS GRID - HIGH CONTRAST DARK SECTION */}
                <section className="py-32 bg-trust-navy relative overflow-hidden">
                    {/* Background Accents */}
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D2691E]/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#B8860B]/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                            {[
                                { label: 'Compliance', val: 'HIPAA', sub: 'Secure Data Protocols' },
                                { label: 'Time Saved', val: '20+ Hrs', sub: 'Weekly Admin Savings' },
                                { label: 'Market Focus', val: '100%', sub: 'California Psychiatrists' },
                                { label: 'Avg Recovery', val: '$300k', sub: 'Annual Revenue' }
                            ].map((metric) => (
                                <div key={metric.label} className="group p-4">
                                    <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight group-hover:text-[#D2691E] transition-colors">{metric.val}</div>
                                    <div className="text-[11px] font-bold text-[#D2691E] uppercase tracking-widest mb-2">{metric.label}</div>
                                    <div className="text-sm text-slate-400 font-medium">{metric.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>



                {/* WHAT WE DO - EXECUTIVE INSIGHTS */}
                <section className="py-32 bg-[#EDE8E0] relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 opacity-50 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid lg:grid-cols-2 gap-20 items-end mb-24">
                            <div>
                                <div className="inline-flex items-center gap-2 bg-white/80 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                    <span className="material-symbols-outlined text-primary text-[16px]">verified_user</span>
                                    Operational Precision
                                </div>
                                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-black text-trust-navy mb-8 leading-[1.1]">
                                    Executive <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#B8860B]">Advisory Functions.</span>
                                </h2>
                            </div>
                            <div className="pb-4">
                                <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
                                    Our assistants aren't just "helpers." They are <strong className="text-trust-navy">trained operational assets</strong> integrated into the unique regulatory and clinical landscape of California psychiatry.
                                </p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "analytics",
                                    title: "Clinical Onboarding",
                                    desc: "Standardizing the patient bridge from initial inquiry to clinical documentation, ensuring 100% data fidelity in your EHR."
                                },
                                {
                                    icon: "medication",
                                    title: "Medication Coordination",
                                    desc: "Handling the 'refill-auth loop' with pharmacies and insurance, reclaiming up to 12 hours of provider time monthly."
                                },
                                {
                                    icon: "receipt_long",
                                    title: "Revenue Integrity",
                                    desc: "Superbill auditing and eligiblity verification that identifies and prevents administrative revenue leakage before it occurs."
                                },
                                {
                                    icon: "psychology",
                                    title: "Telehealth Operations",
                                    desc: "Managing the digital patient corridor—links, technical troubleshooting, and pre-session documentation collection."
                                },
                                {
                                    icon: "event_note",
                                    title: "Capacity Planning",
                                    desc: "Strategic calendar engineering to maximize billable hours while protecting the provider from documentation burnout."
                                },
                                {
                                    icon: "history_edu",
                                    title: "Document Custody",
                                    desc: "Ensuring all records requests and legal documentation meet California's stringent psychiatric privacy requirements."
                                }
                            ].map((service, i) => (
                                <div key={i} className="group bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm relative overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                                    <div className="relative size-14 rounded-xl bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all mb-8">
                                        <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white transition-colors">{service.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-trust-navy mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium text-sm">{service.desc}</p>
                                    <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">
                                        <span className="w-4 h-[1px] bg-slate-200 group-hover:bg-primary transition-colors"></span>
                                        Executive Module 0{i + 1}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ROI ANALYSIS SECTION */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-6">
                                The Real Cost of Administrative Burden
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                                California psychiatrists lose an average of <strong className="text-primary">$300K+ annually</strong> to administrative inefficiency
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-20 items-center mb-16">
                            {/* Left: The Problem */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-serif font-bold text-trust-navy mb-6">Without Virtual Minds:</h3>
                                {[
                                    { label: "Admin Time", value: "20-25 hours/week", cost: "Lost clinical revenue" },
                                    { label: "Billing Errors", value: "15-20% claim denial rate", cost: "$50K-$100K lost" },
                                    { label: "No-Shows", value: "25-30% no-show rate", cost: "$75K-$150K lost" },
                                    { label: "Burnout Risk", value: "High stress, low satisfaction", cost: "Priceless" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-6 bg-red-50/80 border-2 border-red-300 rounded-2xl shadow-sm">
                                        <span className="material-symbols-outlined text-red-600 text-2xl font-bold">close</span>
                                        <div className="flex-1">
                                            <div className="font-bold text-trust-navy text-lg">{item.label}</div>
                                            <div className="text-red-600 font-semibold text-base">{item.value}</div>
                                            <div className="text-sm text-slate-600 font-medium">{item.cost}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right: The Solution */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-serif font-bold text-trust-navy mb-6">With Virtual Minds:</h3>
                                {[
                                    { label: "Admin Time", value: "5 hours/week", gain: "15+ hours for patient care" },
                                    { label: "Billing Accuracy", value: "95%+ clean claim rate", gain: "$100K+ recovered" },
                                    { label: "No-Shows", value: "10-15% no-show rate", gain: "$100K+ recovered" },
                                    { label: "Burnout Risk", value: "Reduced stress, focus on care", gain: "Sustainable practice" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-6 bg-green-50/80 border-2 border-green-300 rounded-2xl shadow-sm">
                                        <span className="material-symbols-outlined text-green-600 text-2xl font-bold">check_circle</span>
                                        <div className="flex-1">
                                            <div className="font-bold text-trust-navy text-lg">{item.label}</div>
                                            <div className="text-green-600 font-semibold text-base">{item.value}</div>
                                            <div className="text-sm text-slate-600 font-medium">{item.gain}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ROI Summary */}
                        <div className="bg-gradient-to-br from-primary/10 to-[#B8860B]/10 border-2 border-primary/30 rounded-[3rem] p-12 md:p-20 text-center">
                            <h3 className="font-serif text-3xl font-bold text-trust-navy mb-4">Average Annual ROI</h3>
                            <div className="text-6xl md:text-7xl font-serif font-black text-primary mb-4">$300K+</div>
                            <p className="text-xl text-slate-700 max-w-2xl mx-auto font-medium">
                                Between recovered revenue, reduced no-shows, and reclaimed clinical time, our clients see an average return of <strong>8-10x their investment</strong> in the first year.
                            </p>
                        </div>
                    </div>
                </section>

                {/* COMPETITOR COMPARISON */}
                <section className="py-32 bg-[#FAF8F3]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-6">
                                Why Psychiatrists Choose Virtual Minds
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                                Not all virtual assistant services are created equal. Here's how we compare to general medical VAs.
                            </p>
                        </div>

                        {/* Mobile: Stacked Cards */}
                        <div className="space-y-4 md:hidden">
                            {[
                                { feature: "Psychiatry-Specific Training", vm: true, other: false },
                                { feature: "California Telehealth Expertise", vm: true, other: false },
                                { feature: "Psychiatric Medication Prior Auths", vm: true, other: false },
                                { feature: "HIPAA Compliance", vm: true, other: true },
                                { feature: "Mental Health Crisis Protocols", vm: true, other: false },
                                { feature: "SimplePractice/Kareo Experts", vm: true, other: "Basic" },
                                { feature: "California-Based Team", vm: true, other: false },
                                { feature: "Dedicated Account Manager", vm: true, other: false }
                            ].map((row, i) => (
                                <div key={i} className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
                                    <h4 className="font-bold text-trust-navy text-base mb-4 pb-3 border-b border-slate-200">
                                        {row.feature}
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-bold text-slate-700">Virtual Minds</span>
                                            <div>
                                                {row.vm === true ? (
                                                    <span className="material-symbols-outlined text-green-600 text-2xl">check_circle</span>
                                                ) : (
                                                    <span className="text-slate-600 font-semibold text-sm">{row.vm}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-slate-500">General Medical VAs</span>
                                            <div>
                                                {row.other === true ? (
                                                    <span className="material-symbols-outlined text-green-600 text-2xl">check_circle</span>
                                                ) : row.other === false ? (
                                                    <span className="material-symbols-outlined text-red-400 text-2xl">cancel</span>
                                                ) : (
                                                    <span className="text-slate-400 font-semibold text-sm">{row.other}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop: Table */}
                        <div className="hidden md:block overflow-x-auto relative">
                            <table className="w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden">
                                <thead className="bg-trust-navy text-white">
                                    <tr>
                                        <th className="px-8 py-6 text-left font-bold text-lg">Feature</th>
                                        <th className="px-8 py-6 text-center font-bold text-lg">Virtual Minds</th>
                                        <th className="px-8 py-6 text-center font-bold text-lg text-slate-300">General Medical VAs</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {[
                                        { feature: "Psychiatry-Specific Training", vm: true, other: false },
                                        { feature: "California Telehealth Expertise", vm: true, other: false },
                                        { feature: "Psychiatric Medication Prior Auths", vm: true, other: false },
                                        { feature: "HIPAA Compliance", vm: true, other: true },
                                        { feature: "Mental Health Crisis Protocols", vm: true, other: false },
                                        { feature: "SimplePractice/Kareo Experts", vm: true, other: "Basic" },
                                        { feature: "California-Based Team", vm: true, other: false },
                                        { feature: "Dedicated Account Manager", vm: true, other: false }
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                                            <td className="px-8 py-5 font-bold text-trust-navy text-base">{row.feature}</td>
                                            <td className="px-8 py-5 text-center">
                                                {row.vm === true ? (
                                                    <span className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
                                                ) : (
                                                    <span className="text-slate-600 font-semibold">{row.vm}</span>
                                                )}
                                            </td>
                                            <td className="px-8 py-5 text-center">
                                                {row.other === true ? (
                                                    <span className="material-symbols-outlined text-green-600 text-3xl">check_circle</span>
                                                ) : row.other === false ? (
                                                    <span className="material-symbols-outlined text-red-400 text-3xl">cancel</span>
                                                ) : (
                                                    <span className="text-slate-400 font-semibold">{row.other}</span>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ROI CALCULATOR SECTION - Strategically placed after comparison table */}
                <div id="roi-calculator" className="scroll-mt-24">
                    <ROICalculator />
                </div>

                {/* PREMIUM PRICING SECTION */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <span className="material-symbols-outlined text-primary text-[16px]">payments</span>
                                Operational ROI Framework
                            </div>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-6">
                                Transparent Pricing, Predictable ROI
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                                Choose the support level that matches your practice needs
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Essential Plan */}
                            <div className="group p-12 bg-[#FAF8F3] rounded-[3rem] border-2 border-slate-200 hover:border-[#D2691E]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D2691E]/5 flex flex-col justify-between hover:-translate-y-2">
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-2xl font-serif font-bold text-trust-navy">Essential</h3>
                                        <span className="material-symbols-outlined text-5xl text-[#D2691E]/20 group-hover:text-[#D2691E]/40 transition-colors">foundation</span>
                                    </div>

                                    <div className="mb-8">
                                        <p className="text-base leading-relaxed mb-6 font-medium text-slate-600">
                                            <strong className="text-trust-navy">Complete administrative foundation</strong> for solo psychiatrists wanting to{' '}
                                            <span className="text-[#D2691E] font-bold">focus exclusively on patient care</span>.
                                        </p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-6xl font-serif font-bold text-trust-navy">$2,500</span>
                                            <span className="text-sm font-black uppercase tracking-widest text-slate-400">/month</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-12">
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-slate-400">Infrastructure Includes:</p>
                                        {[
                                            "20 hours/month VA support",
                                            "Patient intake & scheduling",
                                            "Basic billing support",
                                            "Email & phone management",
                                            "HIPAA-compliant systems"
                                        ].map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-[18px] text-[#D2691E]">check_circle</span>
                                                <span className="text-base font-bold text-slate-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    href="/book-consultation"
                                    className="w-full py-4 bg-white border-2 border-slate-200 text-trust-navy font-bold rounded-xl hover:border-[#D2691E] hover:text-[#D2691E] transition-all shadow-sm flex items-center justify-center gap-2 group/btn"
                                >
                                    Get Started
                                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>

                            {/* Professional Plan (Highlighted) */}
                            <div className="relative pt-6 md:pt-0">
                                {/* "Most Popular" Badge */}
                                <div className="absolute -top-4 md:-top-4 left-1/2 -translate-x-1/2 z-20 bg-[#D2691E] text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                                    Most Popular
                                </div>

                                <div className="bg-gradient-to-br from-trust-navy to-[#1A2332] rounded-[3rem] p-12 shadow-2xl transform scale-105 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex items-center justify-between mb-8">
                                            <h3 className="text-3xl font-serif font-bold !text-white">Professional</h3>
                                            <span className="material-symbols-outlined text-5xl text-[#D2691E]/30">hub</span>
                                        </div>

                                        <div className="mb-8">
                                            <p className="text-base leading-relaxed mb-6 font-medium text-slate-300">
                                                <strong className="text-white">Scaled support for high-volume practices</strong>—
                                                <span className="text-[#D2691E]"> multi-provider teams</span> requiring{' '}
                                                <strong className="text-white">full administrative management</strong>.
                                            </p>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-6xl font-serif font-bold text-white">$4,500</span>
                                                <span className="text-sm font-black uppercase tracking-widest text-slate-400">/month</span>
                                            </div>
                                        </div>

                                        <div className="space-y-4 mb-12">
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-[#D2691E]">Infrastructure Includes:</p>
                                            {[
                                                "40 hours/month VA support",
                                                "Full billing & RCM",
                                                "Prior authorization management",
                                                "Telehealth coordination",
                                                "EHR optimization",
                                                "Dedicated account manager"
                                            ].map((feature, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="size-6 rounded-lg bg-[#D2691E]/20 flex items-center justify-center flex-shrink-0">
                                                        <span className="material-symbols-outlined text-[#D2691E] text-sm">check_circle</span>
                                                    </div>
                                                    <span className="text-base font-bold text-white">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href="/book-consultation"
                                        className="relative z-10 w-full py-4 bg-[#D2691E] hover:bg-[#B8860B] text-white rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2 group/btn"
                                    >
                                        Get Started
                                        <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Enterprise Plan */}
                            <div className="group p-12 bg-[#FAF8F3] rounded-[3rem] border-2 border-slate-200 hover:border-[#D2691E]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D2691E]/5 flex flex-col justify-between hover:-translate-y-2">
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <h3 className="text-2xl font-serif font-bold text-trust-navy">Enterprise</h3>
                                        <span className="material-symbols-outlined text-5xl text-[#D2691E]/20 group-hover:text-[#D2691E]/40 transition-colors">business_center</span>
                                    </div>

                                    <div className="mb-8">
                                        <p className="text-base leading-relaxed mb-6 font-medium text-slate-600">
                                            <strong className="text-trust-navy">Bespoke operational design</strong> for large health systems and{' '}
                                            <span className="text-[#D2691E] font-bold">specialized psychiatric networks</span>.
                                        </p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-6xl font-serif font-bold text-trust-navy">Custom</span>
                                            <span className="text-sm font-black uppercase tracking-widest text-slate-400">/quote</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-12">
                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-slate-400">Infrastructure Includes:</p>
                                        {[
                                            "Unlimited VA support",
                                            "Multi-provider coordination",
                                            "Advanced reporting & analytics",
                                            "Custom workflow automation",
                                            "Practice growth consulting",
                                            "Priority support"
                                        ].map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-[18px] text-[#D2691E]">check_circle</span>
                                                <span className="text-base font-bold text-slate-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link
                                    href="/book-consultation"
                                    className="w-full py-4 bg-white border-2 border-slate-200 text-trust-navy font-bold rounded-xl hover:border-[#D2691E] hover:text-[#D2691E] transition-all shadow-sm flex items-center justify-center gap-2 group/btn"
                                >
                                    Contact Sales
                                    <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                </Link>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-slate-600 text-lg font-medium">
                                <strong className="text-trust-navy">All plans include:</strong> HIPAA compliance, California telehealth expertise, and 30-day money-back guarantee
                            </p>
                        </div>
                    </div>
                </section>

                {/* CASE STUDIES WITH PREMIUM VISUALS */}
                <section className="py-32 bg-[#EDE8E0]">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-6">
                                Real Results from California Psychiatrists
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                                See how Virtual Minds transformed these psychiatric practices
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Case Study 1 */}
                            <div className="bg-white/60 backdrop-blur-xl rounded-[3rem] p-12 shadow-2xl border border-white/40 hover:bg-white/80 transition-all duration-500">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0">
                                        <Image
                                            src="/images/case-study-dr-chen.png"
                                            alt="Dr. Sarah Chen"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-bold text-trust-navy text-2xl">Dr. Sarah Chen, MD</h3>
                                        <p className="text-slate-600 font-medium">Solo Practitioner, San Francisco</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-slate-50 rounded-2xl p-6">
                                        <div className="text-sm text-slate-600 mb-2 font-bold uppercase tracking-wider">Challenge</div>
                                        <p className="text-trust-navy font-semibold text-lg">Spending 25+ hours/week on admin, considering closing practice due to burnout</p>
                                    </div>
                                    <div className="bg-green-50 rounded-2xl p-6">
                                        <div className="text-sm text-slate-600 mb-3 font-bold uppercase tracking-wider">Results After 6 Months</div>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-green-600 text-xl">check_circle</span>
                                                <span className="text-trust-navy font-medium"><strong className="font-bold">18 hours/week</strong> reclaimed for patient care</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-green-600 text-xl">check_circle</span>
                                                <span className="text-trust-navy font-medium"><strong className="font-bold">$180K</strong> additional revenue from increased capacity</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-green-600 text-xl">check_circle</span>
                                                <span className="text-trust-navy font-medium">No-show rate reduced from <strong className="font-bold">30% to 12%</strong></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <blockquote className="relative italic text-slate-700 border-l-4 border-primary pl-6 text-lg font-medium">
                                        <span className="absolute -left-4 -top-2 text-6xl text-primary/20 font-serif leading-none">"</span>
                                        Virtual Minds didn't just save my practice—they gave me my life back. I actually enjoy being a psychiatrist again.
                                    </blockquote>
                                </div>
                            </div>

                            {/* Case Study 2 */}
                            <div className="bg-white/60 backdrop-blur-xl rounded-[3rem] p-12 shadow-2xl border border-white/40 hover:bg-white/80 transition-all duration-500">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 flex-shrink-0">
                                        <Image
                                            src="/images/case-study-dr-patel.png"
                                            alt="Dr. Michael Patel"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-serif font-bold text-trust-navy text-2xl">Dr. Michael Patel, MD</h3>
                                        <p className="text-slate-600 font-medium">Group Practice (3 providers), Los Angeles</p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="bg-slate-50 rounded-2xl p-6">
                                        <div className="text-sm text-slate-600 mb-2 font-bold uppercase tracking-wider">Challenge</div>
                                        <p className="text-trust-navy font-semibold text-lg">20% billing error rate, prior auth backlog causing patient treatment delays</p>
                                    </div>
                                    <div className="bg-green-50 rounded-2xl p-6">
                                        <div className="text-sm text-slate-600 mb-3 font-bold uppercase tracking-wider">Results After 12 Months</div>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-green-600 text-xl">check_circle</span>
                                                <span className="text-trust-navy font-medium">Billing accuracy improved to <strong className="font-bold">96%</strong></span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-green-600 text-xl">check_circle</span>
                                                <span className="text-trust-navy font-medium"><strong className="font-bold">$420K</strong> recovered from denied claims</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <span className="material-symbols-outlined text-green-600 text-xl">check_circle</span>
                                                <span className="text-trust-navy font-medium">Prior auth turnaround: <strong className="font-bold">14 days → 3 days</strong></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <blockquote className="relative italic text-slate-700 border-l-4 border-primary pl-6 text-lg font-medium">
                                        <span className="absolute -left-4 -top-2 text-6xl text-primary/20 font-serif leading-none">"</span>
                                        The ROI was immediate. We recovered more in denied claims in the first 3 months than we paid for the entire year.
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CALIFORNIA REGULATIONS */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <span className="material-symbols-outlined text-primary text-[16px]">gavel</span>
                                California Compliance
                            </div>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-6">
                                California-Specific Expertise
                            </h2>
                            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                                California has unique mental health regulations. We're experts in navigating them.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                {
                                    icon: "security",
                                    iconColor: "text-primary",
                                    title: "HIPAA & CMIA Compliance",
                                    items: [
                                        "California Confidentiality of Medical Information Act (CMIA) compliance",
                                        "Stricter-than-federal privacy requirements",
                                        "Secure telehealth platforms (AB 744 compliant)",
                                        "Patient consent documentation",
                                        "Breach notification protocols"
                                    ]
                                },
                                {
                                    icon: "videocam",
                                    iconColor: "text-accent",
                                    title: "Telehealth Regulations",
                                    items: [
                                        "AB 744 telehealth consent requirements",
                                        "Medi-Cal telehealth billing compliance",
                                        "Out-of-state patient restrictions",
                                        "Synchronous vs. asynchronous care rules",
                                        "Platform security requirements"
                                    ]
                                },
                                {
                                    icon: "local_pharmacy",
                                    iconColor: "text-[#B8860B]",
                                    title: "Medication Management",
                                    items: [
                                        "CURES database monitoring (controlled substances)",
                                        "California prescription requirements",
                                        "Prior authorization for psychiatric meds",
                                        "Pharmacy benefit coordination",
                                        "Formulary navigation"
                                    ]
                                },
                                {
                                    icon: "health_and_safety",
                                    iconColor: "text-primary",
                                    title: "Mental Health Parity",
                                    items: [
                                        "SB 855 mental health parity compliance",
                                        "Insurance coverage verification",
                                        "Out-of-network billing expertise",
                                        "Timely access requirements",
                                        "Parity violation documentation"
                                    ]
                                }
                            ].map((section, i) => (
                                <div key={i} className="bg-gradient-to-br from-[#FAF8F3] to-white border-2 border-slate-200 rounded-[2rem] p-10 hover:border-primary/30 transition-all hover:shadow-xl">
                                    <h3 className="text-2xl font-serif font-bold text-trust-navy mb-6 flex items-center gap-3">
                                        <span className={`material-symbols-outlined ${section.iconColor} text-3xl`}>{section.icon}</span>
                                        {section.title}
                                    </h3>
                                    <ul className="space-y-4">
                                        {section.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <span className="material-symbols-outlined text-primary text-xl mt-0.5">verified</span>
                                                <span className="text-slate-700 font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-primary/10 border-2 border-primary/30 rounded-[2rem] p-10 text-center">
                            <p className="text-lg text-trust-navy font-medium">
                                <strong className="font-bold">Our California-based team</strong> stays current with all state regulations, so you can focus on patient care without compliance worries.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-32 bg-[#FAF8F3]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-6">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-xl text-slate-600 font-medium">
                                Everything you need to know about Virtual Minds
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "How quickly can you onboard my practice?",
                                    a: "Most practices are fully operational within 7-10 business days. For urgent needs, we offer expedited onboarding (2-3 days) at no additional cost."
                                },
                                {
                                    q: "Are your virtual assistants HIPAA-trained?",
                                    a: "Yes. All team members complete comprehensive HIPAA training, sign Business Associate Agreements (BAAs), and undergo annual compliance recertification. We also maintain cyber liability insurance."
                                },
                                {
                                    q: "What EHR systems do you support?",
                                    a: "We're experts in SimplePractice, Kareo, TherapyNotes, AdvancedMD, and Jane App. We can also work with custom or less common systems—just ask during your consultation."
                                },
                                {
                                    q: "Do you handle prior authorizations for psychiatric medications?",
                                    a: "Absolutely. This is one of our specialties. We manage the entire prior auth process: documentation gathering, submission, follow-up, and appeals if needed. Average turnaround: 3-5 days."
                                },
                                {
                                    q: "What if I'm not satisfied with the service?",
                                    a: "We offer a 30-day money-back guarantee. If you're not completely satisfied in the first month, we'll refund your payment—no questions asked."
                                },
                                {
                                    q: "Can you help with telehealth setup?",
                                    a: "Yes. We help you select compliant platforms, configure workflows, train staff, and ensure you meet all California AB 744 requirements for telehealth consent and documentation."
                                },
                                {
                                    q: "Do you work with group practices?",
                                    a: "Definitely. Our Professional and Enterprise plans are designed for multi-provider practices. We coordinate across multiple psychiatrists, manage complex scheduling, and provide centralized billing and reporting."
                                },
                                {
                                    q: "How do you ensure quality and consistency?",
                                    a: "Every client has a dedicated account manager who oversees your team. We conduct weekly quality audits, monthly performance reviews, and quarterly strategy sessions to ensure continuous improvement."
                                },
                                {
                                    q: "What's included in billing & RCM support?",
                                    a: "Full revenue cycle management: insurance verification, superbill creation, claims submission, denial management, patient billing, payment posting, and monthly financial reporting."
                                },
                                {
                                    q: "Can I scale up or down as my practice changes?",
                                    a: "Yes. All plans are flexible. You can upgrade, downgrade, or pause service with 30 days' notice. We want to grow with your practice, not lock you into rigid contracts."
                                }
                            ].map((faq, i) => (
                                <details key={i} className="bg-white border-2 border-slate-200 rounded-[2rem] p-8 group hover:border-primary/30 transition-all duration-300 open:pb-4">
                                    <summary className="font-bold text-trust-navy text-lg cursor-pointer flex items-center justify-between">
                                        {faq.q}
                                        <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform">expand_more</span>
                                    </summary>
                                    <p className="mt-6 text-slate-700 leading-relaxed font-medium">{faq.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-32 bg-gradient-to-br from-trust-navy to-[#0F1419] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')] mix-blend-overlay"></div>
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D2691E]/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-white">Ready to </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">Reclaim Your Time?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-medium">
                            Join the California psychiatrists recovering <strong className="text-primary">$300K+ annually</strong> and <strong className="text-primary">20+ hours weekly</strong> with Virtual Minds.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                            <Link
                                href="/book-consultation"
                                className="inline-flex items-center gap-3 px-12 py-6 bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold text-xl rounded-2xl shadow-xl shadow-[#D2691E]/20 transition-all hover:-translate-y-1 justify-center"
                            >
                                <span className="material-symbols-outlined">calendar_today</span>
                                See My Recovery Plan
                            </Link>
                            <a
                                href="tel:+14243302700"
                                className="inline-flex items-center gap-3 px-12 py-6 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold text-xl rounded-2xl hover:bg-white/20 transition-all justify-center"
                            >
                                <span className="material-symbols-outlined">phone</span>
                                (424) 330-2700
                            </a>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400 font-medium">
                            <span className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">verified_user</span>
                                HIPAA Compliant
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                California Exclusive
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">workspace_premium</span>
                                30-Day Guarantee
                            </span>
                        </div>

                        <div className="mt-8 p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl max-w-2xl mx-auto">
                            <p className="text-slate-300 text-center">
                                <span className="material-symbols-outlined text-primary inline-block mr-2 align-middle">info</span>
                                Planning to launch a new practice? Check out our comprehensive <Link href="/resources/psychiatry-practice-startup-guide" className="text-primary hover:text-[#B8860B] underline font-semibold">Psychiatry Practice Startup Guide for California</Link> covering licensing, business setup, and credentialing.
                            </p>
                        </div>
                    </div>
                </section>


            </main>
            <Footer />
        </div>
    );
}
