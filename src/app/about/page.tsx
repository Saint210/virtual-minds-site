import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import LazyMapEmbed from "@/components/marketing/LazyMapEmbed";

export const metadata = {
    title: "Los Angeles Psychiatric Virtual Assistants | Virtual Minds",
    description: "Los Angeles-based virtual assistants for California psychiatrists. Local experts trained in psychiatric workflows, HIPAA compliance, and California mental health regulations.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "About" }
                ]}
            />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex flex-col gap-6 w-full lg:w-1/2">
                            <div className="flex flex-col gap-4">
                                <span className="text-primary font-bold tracking-widest text-xs uppercase">Our Los Angeles Expertise</span>
                                <h1 className="font-display text-trust-navy text-4xl md:text-6xl font-bold leading-[1.15]">
                                    Los Angeles-Based California Psychiatric VA Specialists
                                </h1>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    With our Los Angeles headquarters and many years of specialized experience in California mental health practice management, our LA-based team provides top-tier administrative support to psychiatric professionals. We understand California's unique regulatory landscape and are dedicated to helping you focus primarily on patient care.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <Link href="/contact" className="bg-primary text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:scale-[1.02] transition-all">
                                    Meet Our Team
                                </Link>
                                <Link href="/services/hipaa-compliance-support" className="bg-white border border-slate-200 text-trust-navy font-bold py-4 px-8 rounded-xl shadow-sm hover:bg-slate-50 transition-all">
                                    View Compliance
                                </Link>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="aspect-video w-full rounded-2xl shadow-2xl overflow-hidden bg-slate-100 relative group">
                                <Image
                                    alt="California Clinical Team"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    src="/images/about-hero.png"
                                    width={800}
                                    height={600}
                                />
                                <div className="absolute inset-0 bg-primary/5"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Credibility Grid */}
                <section className="w-full bg-slate-50 border-y border-slate-100 py-16">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: 'shield', title: 'California HIPAA Compliant', sub: 'Full BAA \u0026 State Regulations' },
                                { icon: 'verified_user', title: 'SOC 2 Certified', sub: 'California Security Standards' },
                                { icon: 'psychology', title: 'California Psychiatry Expertise', sub: 'Specialized State Knowledge' },
                                { icon: 'support_agent', title: '24/7 California Support', sub: 'State-Specific Monitoring' }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-8 rounded-2xl border border-white bg-white shadow-sm hover:shadow-md transition-all group">
                                    <span className="material-symbols-outlined text-primary text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</span>
                                    <h3 className="text-trust-navy font-bold text-lg">{item.title}</h3>
                                    <p className="text-sm text-slate-500 mt-2">{item.sub}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Training Process Section */}
                <section className="max-w-[1200px] mx-auto px-6 py-24">
                    <div className="mb-16">
                        <h2 className="font-display text-trust-navy text-3xl md:text-5xl font-bold mb-6">Our Los Angeles-Specialized Training Process</h2>
                        <div className="h-1.5 w-24 bg-primary rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-24">
                        {/* Timeline */}
                        <div className="flex flex-col">
                            {[
                                { icon: 'search', title: 'California Vetting Process', desc: 'Week 1: Comprehensive background checks, psychological screening, and California-specific administrative skills assessment. We only hire the top 1% of applicants with California mental health experience.' },
                                { icon: 'medical_information', title: 'California Psychiatric Mastery', desc: 'Week 2-3: Intensive training on California psychiatric terminology, medications, and state-specific workflows including Medi-Cal, 5150 procedures, and telehealth regulations.' },
                                { icon: 'gpp_maybe', title: 'California HIPAA Compliance', desc: 'Week 4: Advanced security protocols, California-specific data handling, and emergency escalation drills to ensure zero compliance breaches in the California regulatory environment.' },
                                { icon: 'check_circle', title: 'California Clinical Integration', desc: 'Week 5-6: Live simulation in California EHR environments (DrChrono, CharmHealth, etc.) and direct shadowing under California clinical supervision.' }
                            ].map((step, i, arr) => (
                                <div key={i} className="grid grid-cols-[48px_1fr] gap-x-8 group">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-primary/10 p-3 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <span className="material-symbols-outlined">{step.icon}</span>
                                        </div>
                                        {i !== arr.length - 1 && <div className="w-0.5 bg-slate-100 flex-grow my-3"></div>}
                                    </div>
                                    <div className="pb-12">
                                        <h4 className="text-xl font-bold text-trust-navy mb-3">{step.title}</h4>
                                        <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Info Card */}
                        <div className="bg-trust-navy text-white p-10 rounded-3xl flex flex-col justify-center h-fit sticky top-28 shadow-2xl">
                            <span className="material-symbols-outlined text-primary text-5xl mb-6">format_quote</span>
                            <h3 className="font-display text-2xl font-bold mb-6 italic leading-relaxed text-white">
                                "The Virtual Minds LA training is equivalent to a California medical administrative residency."
                            </h3>
                            <p className="text-white/90 mb-10 leading-relaxed">
                                Our Los Angeles-based curriculum is designed by California board-certified psychiatrists to ensure that every assistant understands the nuances of California mental health care and regulatory compliance.
                            </p>
                            <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                                <div className="size-14 rounded-full overflow-hidden ring-4 ring-white/5 shadow-inner">
                                    <Image alt="Dr. Sarah Chen" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLPBjNjm9av-Vdbt38sfyVVHzGzWioe9pdpTWoRcUhkxEnKo5L4g9SRV5Ps0Iodg42SQcHAfNn-Ni0MybuIEMl5dwp1DTJLzt_tdssMPEpPs6OArnJa2MR35ajb8wuXbu7c4Bt4rGXokzbopyVA3UUdlCbjxBzNuJrQJVpgZnQ8B37w6gvW1Z0GJSSNy1zBiEbSg_AgTz3Ld1ei2Pz3LVoP7rCqtbv9twqDsMjYYeCM6NVwSZGqjdcJAiOyxJTGkQDa6mes8wzOnE" width={56} height={56} />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Dr. Sarah Chen</p>
                                    <p className="text-sm text-primary/80 font-bold uppercase tracking-wider">Chief Clinical Officer</p>
                                    <p className="text-xs text-calm-sage mt-1">California Board-Certified Psychiatrist</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Leadership Section */}
                <section className="w-full bg-slate-50 py-24">
                    <div className="max-w-[1200px] mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20 items-center">
                            <div className="w-full lg:w-1/2 order-2 lg:order-1">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                                        <div className="rounded-2xl overflow-hidden h-80 shadow-xl">
                                            <Image alt="California Office" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsFNeYeWnCXI3ODmqpKKSyq3q_LSS3dt4YphkC0-ezz1kdZ37sZ_RLHwuVjT3u8TcmZpJ4KWPPv1Yq_wiaWYCylIKNr068KN-D088zk2ZuaK8YljzdEdtDEiHbB7Yb2Zni2MHlktYoXMUbJ-J5M6gkq26DXl9UoRKGzcn0zrZUlUQAyK2IHlg9fEXMYbn7fUPyl3Qg5EMw5iKLcxup6aXaTRQfsXH2mpvPeYLe57aoNWeGaJBp0KtOtYELvT8n1OGfqvjPqUXuQLw" width={320} height={180} />
                                        </div>
                                        <div className="rounded-2xl overflow-hidden h-80 shadow-xl">
                                            <Image alt="California Team Collaboration" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC64Jxa7tPlfB1SgGFwWa7fI287PWye42OJ0bAibqMFmtJPUdifuuC4zxVxmwvfI0z4jW0EKkm2_4rO9sLGAabMW8oLx7-vq2zOh4Oh0LcGrH2AraljlNoohwDRK2PUPo3Bn9C7DsNsWkPv5q_jFAnxvQiYEoLRWQ2i_ndKBDcU7Y1dBUxPQ40DGv0ry3FeKBEZjkqIvDu7PPwhxJFt2iVzdYzSHAPlXi7e1UYwFZ_sKtA437E5j61rmugtdVED5eIzYYx0P7rkBWE" width={320} height={180} />
                                        </div>
                                    </div>
                                </div>

                                {/* About Page Map for Local SEO */}
                                <div className="mt-8 bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                                    <div className="aspect-video relative">
                                        <LazyMapEmbed
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3383751.5955934543!2d-119.00754000000002!3d34.08374100000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f462550a12ec479%3A0x82ef737d2ad2d6d9!2sVirtual%20Minds%2C%20LLC!5e0!3m2!1sen!2sus!4v1768762142031!5m2!1sen!2sus"
                                            height={300}
                                            title="Virtual Minds, LLC - California Psychiatric Virtual Assistant Services"
                                            className="w-full h-full"
                                        />
                                    </div>
                                    <div className="p-6 bg-slate-50">
                                        <h3 className="font-bold text-trust-navy text-lg mb-3">Los Angeles Service Headquarters</h3>
                                        <p className="text-slate-600 text-sm">
                                            Virtual Minds, LLC operates from our Los Angeles headquarters, serving psychiatric practices throughout California with specialized expertise in state regulations,
                                            Medi-Cal billing, and HIPAA compliance. Our LA-based team understands the unique needs
                                            of mental health practices in the Golden State.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 order-1 lg:order-2">
                                <span className="text-primary font-bold uppercase text-xs tracking-[0.2em] block mb-4">Elite Clientele</span>
                                <h2 className="font-display text-4xl md:text-5xl font-bold text-trust-navy mb-8 leading-tight italic">Trusted by High-Profile Mental Health Leaders</h2>
                                <div className="space-y-8">
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        Virtual Minds is the choice of California's leading psychiatrists whose practices serve industry leaders, public figures, and families who rely on their exceptional care. Our reputation for excellence and confidentiality makes us the preferred partner for psychiatric professionals serving discerning clientele.
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            { icon: 'health_and_safety', text: 'Led by California Board-Certified MDs and Administrative PhDs with deep understanding of state regulations.' },
                                            { icon: 'hub', text: 'Proprietary California clinical-support software infrastructure designed for state compliance.' },
                                            { icon: 'verified', text: 'Active members of California Psychiatric Association and state compliance committees.' }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                                                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                                    <span className="material-symbols-outlined">{item.icon}</span>
                                                </div>
                                                <p className="font-semibold text-trust-navy">{item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trust Section */}
                <section className="max-w-[1200px] mx-auto px-6 py-24">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-trust-navy mb-4">Why Clinicians Trust Us</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">We provide the administrative backbone so you can focus on what matters most: patient outcomes.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: 'encrypted', title: 'California Secure-Link Protocol', desc: 'Every VA works through an encrypted, monitored tunnel compliant with California data privacy laws, ensuring patient data never leaves your secure ecosystem.' },
                            { icon: 'diversity_3', title: 'California Cultural Competency', desc: 'Training includes empathy-based communication tailored specifically for California\'s diverse patient populations and cultural sensitivity in crisis situations.' },
                            { icon: 'update', title: 'California Continuous Oversight', desc: 'Random quality audits and monthly clinical reviews ensure compliance with California\'s evolving healthcare standards and regulations.' }
                        ].map((trust, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                                    <span className="material-symbols-outlined text-primary text-3xl">{trust.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-trust-navy">{trust.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{trust.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
