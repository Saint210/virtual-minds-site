
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServingCaliforniaSection from "@/components/home/ServingCaliforniaSection";

// Lazy load calculator to improve initial page load
const PracticeLeaksCalculator = dynamic(() => import("@/components/tools/PracticeLeaksCalculator"), {
    loading: () => (
        <div className="w-full max-w-5xl mx-auto h-96 rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200 animate-pulse">
            <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-1/2 p-12 bg-slate-50"></div>
                <div className="lg:w-1/2 p-12 bg-slate-200"></div>
            </div>
        </div>
    )
});


export const metadata = {
    title: "Executive Psychiatric Virtual Assistants | Private Practice Management",
    description: "The private operational partner for California's elite psychiatrists. Concierge-level Psychiatric Virtual Assistants and executive practice management.",
};

export default function HomeV2() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />

            <main className="flex-grow">
                {/* HERO SECTION - VERSION B: EXECUTIVE OFFICE */}
                <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
                    {/* Darker, more "Exclusive" Ambient Background */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-trust-navy/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-16">

                            {/* Copy (Left) */}
                            <div className="lg:w-[55%] space-y-8">

                                <div className="inline-block border border-trust-navy/20 bg-trust-navy/5 rounded-full px-4 py-1.5 backdrop-blur-sm">
                                    <span className="text-trust-navy font-bold uppercase tracking-widest text-xs">For Private Practice Founders</span>
                                </div>

                                <h1 className="font-serif text-5xl md:text-7xl font-medium text-trust-navy leading-[1.1] tracking-tight mb-6">
                                    The Private Office for <br />
                                    <span className="italic text-primary">Elite Psychiatry.</span>
                                </h1>

                                <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl">
                                    You treat the patient. We handle the business. <br />
                                    California&apos;s executive <strong className="font-bold text-trust-navy">Psychiatric Virtual Assistants</strong>
                                    for sophisticated <strong className="font-bold text-trust-navy">Practice Management</strong>.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Link href="/book-consultation" className="bg-trust-navy hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-trust-navy/20 transition-all hover:scale-[1.02] text-center inline-flex items-center justify-center gap-3">
                                        <span>Request Private Audit</span>
                                        <span className="material-symbols-outlined text-sm">lock</span>
                                    </Link>
                                    <Link href="/services" className="bg-white hover:bg-slate-50 text-trust-navy border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:border-trust-navy/30 items-center justify-center inline-flex">
                                        View Concierge Services
                                    </Link>
                                </div>

                                {/* Authority Signal - Stylized for Exclusivity */}
                                <div className="pt-8 border-t border-slate-200/60 mt-8 flex flex-col gap-4">
                                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Trusted By Faculty From</p>
                                    <div className="flex flex-wrap gap-x-8 gap-y-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                                        {["UCSF", "Stanford", "UCLA", "USC", "Harvard"].map(school => (
                                            <span key={school} className="font-serif text-xl text-trust-navy">{school}</span>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Hero Image (Right) - More minimalist/architectural if possible, or same image with different framing */}
                            <div className="lg:w-[45%] relative">
                                <div
                                    className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 bg-slate-100 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                    style={{ aspectRatio: '4/5' }}
                                >
                                    <Image
                                        src="/images/virtual-assistant-hero.png"
                                        alt="Executive Psychiatric Virtual Office"
                                        width={800}
                                        height={1000}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                                        priority
                                        quality={90}
                                        className="object-cover w-full h-full"
                                    />

                                    {/* Executive Badge */}
                                    <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md rounded-full px-6 py-2 border border-white/40 shadow-xl z-20">
                                        <span className="text-xs font-bold text-trust-navy tracking-widest uppercase">Members Only</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* FOUNDER'S LETTER (Replacing Founding Story with "A Letter from the Office") */}
                <section className="py-20 bg-white border-y border-slate-100">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-6 block">The Virtual Minds Standard</span>
                        <h2 className="font-serif text-3xl md:text-4xl text-trust-navy leading-relaxed mb-8">
                            "We don't just answer phones. We protect the <span className="italic">time, license, and reputation</span> of physicians operating at the highest level of the field."
                        </h2>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-12 bg-slate-200"></div>
                            <p className="font-serif italic text-slate-500 text-lg">Cheryl, Founder</p>
                            <div className="h-px w-12 bg-slate-200"></div>
                        </div>
                    </div>
                </section>

                {/* EXECUTIVE SPECIALIZATION (Subspecialty Silos) - SEO Parity */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <span className="text-trust-navy font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Scope of Practice</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-trust-navy mb-6">
                                Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-primary italic">Specialization</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-light">
                                Operational protocols engineered for specific high-acuity clinical profiles.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {[
                                { name: "Neuropsychiatry", slug: "neuropsychiatry", preview: "Neurological testing & specialized assessments" },
                                { name: "Child & Adolescent", slug: "child-adolescent-psychiatry", preview: "School coordination & family communication" },
                                { name: "Women's Mental Health", slug: "womens-mental-health", preview: "Reproductive psychiatry & perinatal care" },
                                { name: "Integrative Psychiatry", slug: "integrative-psychiatry", preview: "Functional labs & holistic coordination" },
                                { name: "Sleep Medicine", slug: "sleep-medicine", preview: "Sleep study coordination & scheduling" },
                                { name: "ADHD & Executive Function", slug: "adhd-neuropsychiatry", preview: "Prior authorizations & testing coordination" },
                                { name: "OCD & Anxiety Disorders", slug: "ocd-anxiety-disorders", preview: "ERP protocols & intensive treatment support" },
                                { name: "Eating Disorders", slug: "eating-disorders", preview: "Multidisciplinary team coordination" },
                                { name: "Consult-Liaison", slug: "consult-liaison", preview: "Hospital consultation & medical team liaison" }
                            ].map((spec) => (
                                <Link
                                    key={spec.slug}
                                    href={`/specialties/${spec.slug}`}
                                    className="group relative bg-[#FAF8F3] rounded-2xl p-6 border border-slate-200 hover:border-trust-navy/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-serif text-lg font-bold text-trust-navy group-hover:text-primary transition-colors">{spec.name}</span>
                                        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_forward</span>
                                    </div>
                                    <p className="text-sm text-slate-500 leading-relaxed group-hover:text-trust-navy/70 transition-colors">
                                        {spec.preview}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>


                {/* LIFESTYLE / FREEDOM EMPHASIS (Who We Serve) */}
                <section className="py-24 bg-[#FAF8F3] relative overflow-hidden">
                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">Reclaim Your Practice</span>
                            <h2 className="font-serif text-4xl md:text-5xl text-trust-navy mb-6">
                                Psychiatry, <span className="text-transparent bg-clip-text bg-gradient-to-r from-trust-navy to-primary italic">Unburdened.</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-light">
                                Our members don't worry about billing queues or intake calls. They focus on their patients, their research, and their lives.
                            </p>
                        </div>

                        {/* Lifestyle Benefits Grid */}
                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all">
                                <span className="material-symbols-outlined text-4xl text-trust-navy mb-6">verified_user</span>
                                <h3 className="font-serif text-2xl text-trust-navy font-bold mb-4">Total Liability Protection</h3>
                                <p className="text-slate-600 leading-relaxed">Never worry about a missed prior auth or a dropped patient inquiry again. Our protocols are ironclad.</p>
                            </div>
                            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all">
                                <span className="material-symbols-outlined text-4xl text-trust-navy mb-6">schedule</span>
                                <h3 className="font-serif text-2xl text-trust-navy font-bold mb-4">15+ Hours Returned</h3>
                                <p className="text-slate-600 leading-relaxed">What would you do with an extra day every week? Our members use it for research, family, or rest.</p>
                            </div>
                            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl hover:shadow-2xl transition-all">
                                <span className="material-symbols-outlined text-4xl text-trust-navy mb-6">diamond</span>
                                <h3 className="font-serif text-2xl text-trust-navy font-bold mb-4">Concierge Patient Experience</h3>
                                <p className="text-slate-600 leading-relaxed">Your patients receive white-glove service from the first call. We represent your brand with absolute polish.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVING CALIFORNIA (Location Silos) - SEO Parity */}
                <ServingCaliforniaSection />

                {/* PRACTICE OVERHEAD CALCULATOR (Kept for conversion) */}
                <section className="py-32 bg-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
                    <div className="max-w-5xl mx-auto px-6 relative z-10">
                        <div className="text-center mb-20">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Cost of Chaos</span>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy mb-8 leading-tight">
                                What is Administrative Drift <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Costing You?</span>
                            </h2>
                        </div>
                        <PracticeLeaksCalculator />
                        <div className="text-center mt-12">
                            <Link href="/book-consultation" className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02]">
                                Audit Your Practice <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* ABOUT & CONTACT (Streamlined) */}
                <section className="py-24 bg-[#032640] border-t border-slate-100 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-20">
                            <div className="lg:w-1/2">
                                <h2 className="font-serif text-4xl md:text-6xl text-white mb-8 leading-tight">
                                    Ready to Upgrade Your <br /><span className="text-primary italic">Infrastructure?</span>
                                </h2>
                                <p className="text-xl text-slate-300 leading-relaxed font-light mb-8 max-w-xl">
                                    We accept a limited number of new practices each quarter to maintain our high service standards.
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <span className="bg-white/10 p-2 rounded-full material-symbols-outlined text-primary">check</span>
                                        <span className="text-lg">Full Operational Takeover</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="bg-white/10 p-2 rounded-full material-symbols-outlined text-primary">check</span>
                                        <span className="text-lg">HIPAA & Liability Shielding</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="bg-white/10 p-2 rounded-full material-symbols-outlined text-primary">check</span>
                                        <span className="text-lg">Executive-Level Discretion</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/2 w-full">
                                <div className="bg-white/5 backdrop-blur-md rounded-[2.5rem] p-12 border border-white/10 text-center">
                                    <h3 className="font-serif text-3xl text-white mb-4">Request Membership</h3>
                                    <p className="text-slate-400 mb-8">Speak with our Clinical Director about your practice needs.</p>
                                    <Link href="/book-consultation" className="block w-full bg-primary hover:bg-primary-hover text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)] transition-all hover:scale-[1.02]">
                                        Schedule Private Audit
                                    </Link>
                                    <p className="mt-6 text-sm text-slate-500 font-mono">CONFIDENTIAL CONSULTATION</p>
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
