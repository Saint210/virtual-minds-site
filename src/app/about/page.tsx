import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "About Virtual Minds | California Psychiatric Virtual Assistant Firm",
    description: "California's premier psychiatric virtual assistant firm. Specialized support for high-acuity practices with HIPAA-compliant workflows, clinical coordination, and practice management expertise.",
    keywords: ["psychiatric operations firm", "california psychiatric virtual assistant", "medical residency training VA", "mental health operations staff", "psychiatric practice management"],
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "The Firm" }
                ]}
            />

            <main className="flex-grow">
                {/* 1. HERO SECTION */}
                <section className="relative pt-4 md:pt-6 pb-16 overflow-hidden bg-[#FAF8F3]">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#B25A2A_1px,transparent_1px)] [background-size:40px_40px]" />
                    </div>

                    <div className="relative z-10 max-w-[1400px] mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">

                            {/* Left Column (60%) */}
                            <div className="lg:w-[60%]">
                                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                                    <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                                    Operational Excellence
                                </div>

                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy mb-6 leading-[0.95] tracking-tight">
                                    California's Premier <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                                        Psychiatric Virtual Assistant Firm
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-8 max-w-2xl">
                                    Virtual Minds offers <strong className="text-trust-navy">decades of specialized experience</strong> in mental health practice management. We provide top-tier administrative infrastructure designed to <span className="text-primary font-bold">streamline complexity</span> so you can focus entirely on patient care.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                                        <span className="material-symbols-outlined text-primary font-bold">corporate_fare</span>
                                        <span className="text-sm font-bold text-slate-600 whitespace-nowrap">Specialized Support</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100">
                                        <span className="material-symbols-outlined text-accent font-bold">psychology</span>
                                        <span className="text-sm font-bold text-slate-600 whitespace-nowrap">Psychiatric Expertise</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column (40%) */}
                            <div className="lg:w-[40%] group w-full">
                                <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl aspect-[4/5] bg-white group-hover:border-primary/20 transition-colors">
                                    <Image
                                        src="/images/about-hero-premium.png"
                                        alt="Virtual Minds Psychiatric Support Team"
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

                {/* 2. OUR SPECIALIZATION */}
                <section className="py-32 bg-slate-50/50 border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <span className="text-primary font-bold uppercase tracking-widest text-[11px]">Our Niche</span>
                                    <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8 leading-tight">
                                    Exclusively Focused on <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Psychiatric Workflows</span>.
                                </h2>
                                <div className="space-y-6 text-slate-500 text-lg font-medium leading-relaxed">
                                    <p>
                                        Unlike general healthcare virtual assistant services, we focus <strong className="text-trust-navy">solely on psychiatric practice workflows</strong>. Our team understands{' '}
                                        <span className="text-primary font-bold">medication management coordination, prior authorization processes</span>, pharmacy liaison, insurance verification, and the{' '}
                                        <strong className="text-trust-navy">unique administrative demands</strong> of psychiatric practices.
                                    </p>
                                    <p>
                                        We serve <span className="text-primary font-bold">only California psychiatrists</span>—from solo telehealth practices to multi-provider hybrid groups—giving us{' '}
                                        <strong className="text-trust-navy">deep expertise in state regulations</strong>, common EHR platforms, and psychiatric-specific administrative needs.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { label: "Target Market", value: "Psych", sub: "Psychiatry Exclusive", icon: "psychology" },
                                    { label: "Geographic Focus", value: "CA Only", sub: "State Regulation Experts", icon: "location_on" },
                                    { label: "Compliance", value: "HIPAA", sub: "Secure Data Handling", icon: "shield" },
                                    { label: "Model Type", value: "Custom", sub: "Insurance & Cash-Pay", icon: "tune" }
                                ].map((stat, idx) => (
                                    <div key={idx} className="relative bg-gradient-to-br from-[#FAF8F3] to-white p-8 rounded-[2rem] border-2 border-slate-200 hover:border-primary/30 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group overflow-hidden">
                                        {/* Decorative gradient overlay */}
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                        <div className="relative z-10">
                                            {/* Icon */}
                                            <div className="mb-4">
                                                <span className="material-symbols-outlined text-primary text-3xl">{stat.icon}</span>
                                            </div>

                                            {/* Value - Large and Bold */}
                                            <div className="text-4xl font-serif font-bold text-trust-navy mb-2 tracking-tight group-hover:text-primary transition-colors">
                                                {stat.value}
                                            </div>

                                            {/* Subtitle */}
                                            <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                                                {stat.sub}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. CORE MESSAGING */}
                <section className="py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="text-primary font-bold uppercase tracking-widest text-[11px]">Operational Value</span>
                                <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8">
                                Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">Administrative</span> Support.
                            </h2>
                            <p className="text-slate-600 max-w-3xl mx-auto text-lg font-medium">
                                We handle the workflows that <strong className="text-trust-navy">take you away from patient care</strong>, ensuring your practice runs{' '}
                                <span className="text-primary font-bold">smoothly while you focus on clinical excellence</span>.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Specialized Training", icon: "school", desc: "Our team is trained specifically in psychiatric-specific telehealth workflows, prescription authorization, and EHR management." },
                                { title: "California Privacy", icon: "security", desc: "Expertise in California patient privacy requirements and secure data handling protocols." },
                                { title: "Administrative Mastery", icon: "verified_user", desc: "Reliable support for intake, pharmacy liaison, and insurance verification for psychiatric practices." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-[#FAF8F3] p-10 rounded-[2.5rem] border-2 border-slate-200 hover:border-primary/30 group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                                    <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                                        <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-trust-navy mb-4">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. FINAL CTA */}
                <section className="bg-trust-navy py-32 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2" />
                    </div>

                    <div className="max-w-4xl mx-auto px-6 text-center relative z-10 text-white">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 italic leading-tight !text-white">
                            Return to <span className="text-primary">Patient Care</span>.
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                            Experience the difference of a <strong className="text-white">specialized psychiatric support team</strong>. Request your{' '}
                            <span className="text-primary font-bold">15-minute Recovery Plan</span> to get started.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="/book-consultation"
                                className="px-12 py-5 bg-primary hover:bg-[#B8860B] text-white font-bold text-xl rounded-2xl shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                            >
                                <span className="material-symbols-outlined">calendar_today</span>
                                See My Recovery Plan
                            </Link>
                        </div>
                    </div>
                </section>

                {/* OUR SERVICES */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">How We Support You</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-trust-navy mb-6">
                                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-primary italic">Services</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
                                Comprehensive psychiatric virtual assistant services for California practices
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Service 1 */}
                            <Link href="/services/virtual-assistant" className="group bg-gradient-to-br from-white via-white to-slate-50/30 rounded-2xl overflow-hidden border-2 border-slate-200/60 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300">
                                <div className="p-8">
                                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-2xl text-primary">support_agent</span>
                                    </div>
                                    <h3 className="font-serif text-2xl text-trust-navy mb-4 group-hover:text-primary transition-colors">
                                        Virtual Assistant Services
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Dedicated psychiatric assistants for intake, patient communication, and administrative support.
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                        Learn More <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>

                            {/* Service 2 */}
                            <Link href="/services/practice-consulting" className="group bg-gradient-to-br from-white via-white to-slate-50/30 rounded-2xl overflow-hidden border-2 border-slate-200/60 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300">
                                <div className="p-8">
                                    <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-2xl text-accent">analytics</span>
                                    </div>
                                    <h3 className="font-serif text-2xl text-trust-navy mb-4 group-hover:text-primary transition-colors">
                                        Practice Consulting
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Strategic operational review and practice optimization for established psychiatrists.
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                        Learn More <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>

                            {/* Service 3 */}
                            <Link href="/services/billing-and-rcm" className="group bg-gradient-to-br from-white via-white to-slate-50/30 rounded-2xl overflow-hidden border-2 border-slate-200/60 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300">
                                <div className="p-8">
                                    <div className="bg-trust-navy/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-2xl text-trust-navy">payments</span>
                                    </div>
                                    <h3 className="font-serif text-2xl text-trust-navy mb-4 group-hover:text-primary transition-colors">
                                        Billing & Revenue Cycle
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Revenue stabilization through verification, prior auths, and billing coordination.
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                        Learn More <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="text-center mt-12">
                            <Link href="/services" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-all hover:border-trust-navy/30 hover:scale-[1.02]">
                                View All Services <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CLIENT SUCCESS STORIES */}
                <section className="py-24 bg-[#FAF8F3]">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Trusted by California Psychiatrists</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-trust-navy mb-6">
                                Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-primary italic">Success Stories</span>
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Testimonial 1 */}
                            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200/60 shadow-lg">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-primary">person</span>
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl text-trust-navy font-bold">Dr. Sarah Chen</h3>
                                        <p className="text-slate-500 text-sm">Child & Adolescent Psychiatry, Los Angeles</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed italic mb-4">
                                    "Virtual Minds transformed my practice. I recovered 15+ hours weekly and my revenue increased by 30% through better billing coordination. The team understands psychiatric workflows at a level I've never seen before."
                                </p>
                                <div className="flex items-center gap-2 text-sm text-primary font-bold">
                                    <span className="material-symbols-outlined text-lg">verified</span>
                                    Verified Client
                                </div>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="bg-white rounded-2xl p-8 border-2 border-slate-200/60 shadow-lg">
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-accent">person</span>
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl text-trust-navy font-bold">Dr. Michael Rodriguez</h3>
                                        <p className="text-slate-500 text-sm">Adult Psychiatry, San Francisco</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed italic mb-4">
                                    "The ROI was immediate. Within 60 days, I was seeing more patients, spending less time on admin, and my practice was running smoother than ever. This is the gold standard for psychiatric practice support."
                                </p>
                                <div className="flex items-center gap-2 text-sm text-primary font-bold">
                                    <span className="material-symbols-outlined text-lg">verified</span>
                                    Verified Client
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-trust-navy hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all hover:scale-[1.02]">
                                Schedule Your Free Consultation <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* LATEST INSIGHTS */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Thought Leadership</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-trust-navy mb-6">
                                Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-primary italic">Insights</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
                                Expert guidance for California psychiatric practices
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8 mb-12">
                            {/* Blog Post 1 */}
                            <Link href="/blog/how-to-choose-california-psychiatric-virtual-assistant" className="group bg-gradient-to-br from-white via-white to-slate-50/30 rounded-2xl overflow-hidden border-2 border-slate-200/60 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300">
                                <div className="p-8">
                                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-2xl text-primary">psychology</span>
                                    </div>
                                    <h3 className="font-serif text-2xl text-trust-navy mb-4 group-hover:text-primary transition-colors">
                                        How to Choose a California Psychiatric Virtual Assistant
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Comprehensive framework for selecting the right psychiatric virtual assistant.
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                        Read Article <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>

                            {/* Blog Post 2 */}
                            <Link href="/blog/how-to-scale-private-psychiatry-practice" className="group bg-gradient-to-br from-white via-white to-slate-50/30 rounded-2xl overflow-hidden border-2 border-slate-200/60 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300">
                                <div className="p-8">
                                    <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-2xl text-accent">trending_up</span>
                                    </div>
                                    <h3 className="font-serif text-2xl text-trust-navy mb-4 group-hover:text-primary transition-colors">
                                        How to Scale Your Private Psychiatry Practice
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Strategic frameworks for sustainable growth without compromising quality.
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                        Read Article <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>

                            {/* Blog Post 3 */}
                            <Link href="/blog/psychiatrist-salary-california-private-practice" className="group bg-gradient-to-br from-white via-white to-slate-50/30 rounded-2xl overflow-hidden border-2 border-slate-200/60 shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300">
                                <div className="p-8">
                                    <div className="bg-trust-navy/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-2xl text-trust-navy">account_balance</span>
                                    </div>
                                    <h3 className="font-serif text-2xl text-trust-navy mb-4 group-hover:text-primary transition-colors">
                                        Psychiatrist Salary in California Private Practice
                                    </h3>
                                    <p className="text-slate-600 mb-6 leading-relaxed">
                                        Comprehensive analysis of earning potential and financial optimization.
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                        Read Article <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="text-center">
                            <Link href="/blog" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-all hover:border-trust-navy/30 hover:scale-[1.02]">
                                View All Articles <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
