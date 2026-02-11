import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import LocationTagline from "@/components/marketing/LocationTagline";
import PracticeLeaksCalculator from "@/components/tools/PracticeLeaksCalculator";

export const metadata = {
    title: "Psychiatric Website Design & SEO | Virtual Minds",
    description: "AI-optimized, HIPAA-aware website design for California psychiatrists. Rank on Google AND ChatGPT/Perplexity. Convert high-value patients with a digital presence that reflects your clinical expertise.",
};

export default function WebsiteDesignPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Website Design" }
                ]}
            />

            <main className="flex-grow">
                {/* 1. HERO SECTION */}
                <section className="relative pt-12 pb-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#B25A2A_1px,transparent_1px)] [background-size:40px_40px]" />
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                            {/* Left: Copy */}
                            <div className="flex flex-col gap-6">
                                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-primary text-[10px] font-black uppercase tracking-[0.2em] w-fit">
                                    <span className="material-symbols-outlined text-[16px]">web</span>
                                    Digital Patient Experience
                                </div>

                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-trust-navy leading-[0.95] tracking-tight">
                                    Your Digital <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                                        Front Office.
                                    </span>
                                </h1>

                                <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                                    Most psychiatric websites look 15 years old and scare away cash-pay patients. We build AI-optimized, HIPAA-aware digital environments that rank on Google AND ChatGPT/Perplexity.
                                </p>
                                <LocationTagline variant="service" serviceName="Website Design" className="mb-6" />

                                <div className="flex flex-col sm:flex-row gap-5 pt-4">
                                    <Link
                                        href="/book-consultation"
                                        className="px-8 py-4 bg-[#D2691E] hover:bg-[#B8860B] text-white font-bold text-lg rounded-xl shadow-xl shadow-[#D2691E]/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                                    >
                                        <span className="material-symbols-outlined">laptop_mac</span>
                                        Audit My Website
                                    </Link>
                                    <Link
                                        href="#portfolio"
                                        className="px-8 py-4 bg-white border border-slate-200 text-trust-navy font-bold text-lg rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                                    >
                                        See Examples
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Visual Mockup */}
                            <div className="relative">
                                {/* Abstract Device Frame */}
                                <div className="relative z-10 bg-white rounded-3xl border-8 border-trust-navy shadow-2xl overflow-hidden aspect-[16/10] group">
                                    <div className="absolute top-0 w-full h-8 bg-trust-navy flex items-center px-4 gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="mt-8 p-8 bg-slate-50 h-full flex flex-col items-center justify-center text-center">
                                        <span className="font-serif text-3xl font-bold text-trust-navy mb-2">Dr. Example Psychiatry</span>
                                        <span className="text-slate-400 text-sm mb-6 uppercase tracking-widest font-bold">Compassionate Care in Los Angeles</span>
                                        <div className="flex gap-4">
                                            <div className="h-32 w-48 bg-white shadow-sm rounded-lg animate-pulse"></div>
                                            <div className="h-32 w-48 bg-white shadow-sm rounded-lg animate-pulse delay-100"></div>
                                        </div>
                                        <div className="mt-8 px-6 py-3 bg-primary text-white rounded-full text-sm font-bold shadow-lg">Request Appointment</div>
                                    </div>

                                    {/* Hover Reveal */}
                                    <div className="absolute inset-0 bg-trust-navy/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <p className="text-white font-bold text-2xl">Modern. Fast. Converting.</p>
                                    </div>
                                </div>

                                {/* Decor */}
                                <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. THE PROBLEM */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">The Disconnect</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8">Stop Losing Patients to <br /> Bad Design.</h2>
                        <div className="grid md:grid-cols-3 gap-12 mt-16 text-left">
                            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                                <span className="material-symbols-outlined text-4xl text-red-400 mb-6">sentiment_dissatisfied</span>
                                <h3 className="text-xl font-bold text-trust-navy mb-4">The "1990s" Look</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Clunky navigation, broken mobile layouts, and generic stock photos signal "outdated practice" to prospective patients.
                                </p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                                <span className="material-symbols-outlined text-4xl text-red-400 mb-6">visibility_off</span>
                                <h3 className="text-xl font-bold text-trust-navy mb-4">Hidden from Google</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Without technical SEO for terms like "Psychiatrist in [City]," you are invisible to patients searching for help right now.
                                </p>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                                <span className="material-symbols-outlined text-4xl text-red-400 mb-6">lock_open</span>
                                <h3 className="text-xl font-bold text-trust-navy mb-4">Compliance Risks</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    Standard contact forms are not HIPAA compliant. We integrate secure, encrypted intake portals directly.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. FEATURES */}
                <section id="portfolio" className="py-24 bg-[#FAF8F3] relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row gap-20">
                            <div className="lg:w-1/2">
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Our Standard</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8">Specifically Built for <br /> Psychiatry.</h2>
                                <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                                    We don't build restaurant websites. We only build for mental health professionals. Every design choice supports the patient journey from "Awareness" to "Intake."
                                </p>

                                <ul className="space-y-6">
                                    {[
                                        { title: "AI Search Optimization (AIO)", desc: "Optimized for ChatGPT, Perplexity, and LLMs with semantic markup and structured data." },
                                        { title: "Psychology Today Integration", desc: "Seamlessly link your profile and website to unify your brand." },
                                        { title: "EHR Portal Matching", desc: "We style your intake buttons to match your SimplePractice/DrChrono portal." },
                                        { title: "SEO Writing", desc: "We write the copy: 'Board-certified,' 'Medication Management,' 'Telehealth.'" },
                                        { title: "Mobile-First Architecture", desc: "The vast majority of patients search on mobile. Your site will be lightning fast." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="size-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-primary">
                                                <span className="material-symbols-outlined text-sm font-bold">check</span>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-trust-navy">{item.title}</h4>
                                                <p className="text-sm text-slate-500">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="lg:w-1/2 relative">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] blur-xl"></div>
                                <div className="relative h-full bg-white rounded-[3rem] border border-slate-100 shadow-2xl p-10 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-8">
                                        <div className="size-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                                            <span className="material-symbols-outlined text-3xl">person</span>
                                        </div>
                                        <div>
                                            <div className="h-4 w-32 bg-slate-100 rounded mb-2"></div>
                                            <div className="h-3 w-24 bg-slate-50 rounded"></div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-4 w-full bg-slate-50 rounded"></div>
                                        <div className="h-4 w-5/6 bg-slate-50 rounded"></div>
                                        <div className="h-4 w-4/6 bg-slate-50 rounded"></div>
                                    </div>
                                    <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                        <div className="flex items-center gap-3 text-primary font-bold mb-2">
                                            <span className="material-symbols-outlined">verified_user</span>
                                            HIPAA Secure Form
                                        </div>
                                        <div className="h-10 bg-white rounded border border-primary/20 w-full mb-3"></div>
                                        <div className="h-10 bg-primary rounded w-full shadow-lg shadow-primary/20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI OPTIMIZATION CALLOUT */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="max-w-5xl mx-auto">
                            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-[2.5rem] p-12 border border-primary/20">
                                <div className="flex flex-col lg:flex-row items-start gap-8">
                                    <div className="size-20 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined text-5xl">neurology</span>
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-trust-navy mb-4">AI Search Optimization (AIO)</h2>
                                        <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                            Modern patients don't just Google—they ask AI agents and personal assistants: <em>"Who's the best psychiatrist in Los Angeles?"</em>
                                        </p>
                                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                            We optimize your site with <strong>semantic markup</strong>, <strong>structured data</strong>, and <strong>LLM-friendly content</strong> so AI models cite YOU as the authoritative source.
                                        </p>
                                        <div className="grid sm:grid-cols-3 gap-4">
                                            <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-primary/10">
                                                <span className="material-symbols-outlined text-primary text-2xl">smart_toy</span>
                                                <span className="font-bold text-sm text-trust-navy">ChatGPT Optimized</span>
                                            </div>
                                            <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-primary/10">
                                                <span className="material-symbols-outlined text-primary text-2xl">psychology</span>
                                                <span className="font-bold text-sm text-trust-navy">Perplexity Ready</span>
                                            </div>
                                            <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-primary/10">
                                                <span className="material-symbols-outlined text-primary text-2xl">schema</span>
                                                <span className="font-bold text-sm text-trust-navy">Semantic SEO</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPECIALTY PAGES */}
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="text-accent font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">Specialty-Specific Solutions</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-8">
                                We Know Your Niche.
                            </h2>
                            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
                                Different specialties need different messaging. An ADHD specialist's website should look nothing like a trauma therapist's site.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* ADHD Specialists - LIVE */}
                            <Link
                                href="/services/website-design/adhd-specialists"
                                className="group p-8 rounded-[2rem] bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 hover:border-primary hover:shadow-xl transition-all"
                            >
                                <div className="size-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-3xl">psychology</span>
                                </div>
                                <h3 className="text-xl font-bold text-trust-navy mb-3">ADHD Specialists</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Target "ADHD medication management," "Adderall prescriber," and "executive dysfunction" keywords.
                                </p>
                                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                    <span>View ADHD Page</span>
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </div>
                            </Link>

                            {/* Women's Mental Health - COMING SOON */}
                            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200 opacity-60">
                                <div className="size-14 rounded-xl bg-slate-200 flex items-center justify-center text-slate-400 mb-6">
                                    <span className="material-symbols-outlined text-3xl">pregnant_woman</span>
                                </div>
                                <h3 className="text-xl font-bold text-trust-navy mb-3">Women's Mental Health</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Perinatal, postpartum, and reproductive mental health specialist pages.
                                </p>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Coming Soon</div>
                            </div>

                            {/* Anxiety/OCD - COMING SOON */}
                            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200 opacity-60">
                                <div className="size-14 rounded-xl bg-slate-200 flex items-center justify-center text-slate-400 mb-6">
                                    <span className="material-symbols-outlined text-3xl">favorite</span>
                                </div>
                                <h3 className="text-xl font-bold text-trust-navy mb-3">Anxiety & OCD</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Target panic disorder, GAD, OCD, and exposure therapy keywords.
                                </p>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Coming Soon</div>
                            </div>

                            {/* Child/Adolescent - COMING SOON */}
                            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200 opacity-60">
                                <div className="size-14 rounded-xl bg-slate-200 flex items-center justify-center text-slate-400 mb-6">
                                    <span className="material-symbols-outlined text-3xl">child_care</span>
                                </div>
                                <h3 className="text-xl font-bold text-trust-navy mb-3">Child & Adolescent</h3>
                                <p className="text-sm text-slate-600 mb-4">
                                    Developmental struggles, transitional-aged youth, and family therapy.
                                </p>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Coming Soon</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. CTA */}
                <section className="py-24 bg-trust-navy text-white text-center relative overflow-hidden">
                    <div className="relative z-10 max-w-4xl mx-auto px-6">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 !text-white">
                            It's Time to Upgrade.
                        </h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Your website is often the first interaction a patient has with your practice. Make it count.
                        </p>
                        <Link
                            href="/book-consultation"
                            className="inline-flex px-12 py-5 bg-primary text-white font-black text-xl rounded-2xl shadow-2xl hover:bg-primary-hover hover:scale-105 transition-all items-center gap-3"
                        >
                            <span className="material-symbols-outlined">calendar_today</span>
                            Schedule Website Audit
                        </Link>
                    </div>
                </section>

                {/* CALCULATOR SECTION */}
                <section className="py-24 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-navy mb-4">Calculate Your Digital ROI</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                See how much revenue a professional website can generate for your practice.
                            </p>
                        </div>
                        <PracticeLeaksCalculator />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
