import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";

export const metadata = {
    title: "Specialized Mental Health Virtual Assistants | Virtual Minds",
    description: "Highly trained psychiatric virtual assistants for California practices. specialized support for intake, scheduling, billing coordination, and EHR management.",
};

export default function VirtualAssistantPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Psychiatric Virtual Assistants" }
                ]}
            />
            <main className="flex-grow">
                {/* UPGRADED EXECUTIVE SERVICE HERO */}
                <section className="relative pt-4 md:pt-6 pb-16 md:pb-20 overflow-hidden bg-[#FAF8F3]">
                    {/* Immersive Background Tokens */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                            {/* LEFT: Copy & Authority (60%) */}
                            <div className="lg:w-[60%]">
                                <div className="inline-flex items-center gap-2 bg-white border border-primary/20 rounded-full px-5 py-2 text-trust-navy text-xs font-black mb-4 shadow-sm">
                                    <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                                    <span className="tracking-[0.2em] uppercase text-primary">Administrative Support</span>
                                </div>

                                <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-trust-navy mb-4 leading-[0.95] tracking-tight">
                                    Specialized <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                                        Psychiatric VAs.
                                    </span>
                                </h1>

                                <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed mb-6 max-w-2xl">
                                    Specialized virtual assistants for California psychiatrists. Handling
                                    <span className="text-trust-navy font-bold border-b-2 border-primary/30 mx-1">medication refills, prior authorizations,</span>
                                    and administrative workflows to reclaim your clinical focus.
                                </p>

                                {/* Institutional Social Proof */}
                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="w-12 h-12 rounded-full bg-white border-[3px] border-[#FAF8F3] flex items-center justify-center overflow-hidden shadow-lg relative z-[10]">
                                                <Image
                                                    src={`https://i.pravatar.cc/150?u=${i + 60}`}
                                                    alt="Specialized Assistant"
                                                    width={48}
                                                    height={48}
                                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-sm text-slate-500 font-medium leading-tight text-center sm:text-left">
                                        <p><strong className="text-trust-navy italic">Trusted by Leading California Psychiatric Practices</strong></p>
                                        <p className="text-slate-400">California-exclusive administrative coordination.</p>
                                    </div>
                                </div>

                                {/* PRACTICE ECONOMICS BAR */}
                                <div className="flex flex-wrap items-center gap-x-12 gap-y-6 py-8 border-y border-slate-200/60 mb-10">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">Time Recovered</p>
                                        <p className="text-lg font-bold text-trust-navy">20+ Hours / wk</p>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-slate-200" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">Specialization</p>
                                        <p className="text-lg font-bold text-trust-navy">Refill Logistics</p>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-slate-200" />
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">Compliance</p>
                                        <p className="text-lg font-bold text-trust-navy italic">HIPAA Certified</p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-5">
                                    <Link href="/book-consultation" className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group">
                                        <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">schedule</span>
                                        See My Recovery Plan
                                    </Link>
                                    <Link href="/services" className="bg-white border border-slate-200 text-trust-navy px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                                        Explore All Services
                                        <span className="material-symbols-outlined text-primary">arrow_forward</span>
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT: Visual Blueprint (40%) */}
                            <div className="lg:w-[40%] relative w-full">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl opacity-50"></div>
                                    <div className="relative aspect-[4/5] w-full rounded-[3rem] shadow-2xl overflow-hidden border-8 border-white bg-slate-100 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
                                        <Image
                                            src="/images/virtual-assistant-hero.png"
                                            alt="Professional psychiatric virtual assistant working in modern workspace"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                    {/* Small floating badge */}
                                    <div className="absolute -top-6 -right-6 bg-white p-5 rounded-[2rem] shadow-2xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                                        <div className="size-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                            <span className="material-symbols-outlined font-bold">verified</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Compliance</p>
                                            <p className="text-base font-bold text-trust-navy">HIPAA Mastered</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Complete Practice Support */}
                <section className="py-32 bg-white">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[11px]">Complete Practice Support</span>
                                <span className="w-12 h-[2px] bg-gradient-to-r from-[#D2691E] to-transparent"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-6 leading-tight">
                                <span className="relative inline-block">
                                    Specialized Support
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#D2691E]/20"></span>
                                </span>
                                {' '}for{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">
                                    Every Workflow.
                                </span>
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                                Our assistants handle the <strong className="text-trust-navy">entire patient lifecycle</strong>—from first inquiry to{' '}
                                <span className="relative inline-block text-[#D2691E] font-bold">
                                    ongoing care coordination
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D2691E]/30"></span>
                                </span>.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: 'manage_accounts',
                                    title: 'Start-to-Finish Intake',
                                    desc: 'From the first inquiry call to the signed consent form, we manage the entire new patient lifecycle.',
                                    descMarkup: (
                                        <>
                                            <strong className="text-trust-navy">Complete intake management</strong>—from first inquiry to signed consent.{' '}
                                            <span className="text-[#D2691E]">Zero missed opportunities</span>.
                                        </>
                                    )
                                },
                                {
                                    icon: 'calendar_apps_script',
                                    title: 'Smart Scheduling',
                                    desc: 'Optimizing your calendar to group similar session types and preserve your energy levels.',
                                    descMarkup: (
                                        <>
                                            <strong className="text-trust-navy">Intelligent calendar optimization</strong> that groups similar sessions and{' '}
                                            <span className="text-[#D2691E]">preserves your energy</span>.
                                        </>
                                    )
                                },
                                {
                                    icon: 'medical_services',
                                    title: 'Clinical Coordination',
                                    desc: 'Handling refill requests, pharmacy communications, and care team coordination protocols.',
                                    descMarkup: (
                                        <>
                                            <strong className="text-trust-navy">Seamless pharmacy coordination</strong>—refills, prior auths, and care team communication.{' '}
                                            <span className="text-[#D2691E]">90% faster processing</span>.
                                        </>
                                    )
                                },
                                {
                                    icon: 'verified_user',
                                    title: 'Compliance Monitoring',
                                    desc: 'Ensuring every patient file has updated consents, IDs, and insurance cards on file.',
                                    descMarkup: (
                                        <>
                                            <strong className="text-trust-navy">Audit-ready files</strong> with updated consents, IDs, and insurance cards.{' '}
                                            <span className="text-[#D2691E]">100% compliance</span>.
                                        </>
                                    )
                                },
                                {
                                    icon: 'receipt_long',
                                    title: 'Billing Liaison',
                                    desc: 'Acting as the bridge between your clinical notes and your billing team to ensure accurate claims.',
                                    descMarkup: (
                                        <>
                                            <strong className="text-trust-navy">Bridge to billing</strong>—ensuring clinical notes translate to{' '}
                                            <span className="text-[#D2691E]">accurate, timely claims</span>.
                                        </>
                                    )
                                },
                                {
                                    icon: 'psychology',
                                    title: 'Patient Relationship',
                                    desc: 'Providing a warm, consistent human touchpoint for your anxious or dispirited patients.',
                                    descMarkup: (
                                        <>
                                            <strong className="text-trust-navy">Warm, human touchpoint</strong> for anxious patients.{' '}
                                            <span className="text-[#D2691E]">Builds trust and continuity</span>.
                                        </>
                                    )
                                }
                            ].map((item, i) => (
                                <div key={i} className="group p-10 bg-[#FAF8F3] rounded-[3rem] border border-slate-100 hover:border-[#D2691E]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D2691E]/5 h-full flex flex-col hover:-translate-y-2">
                                    <span className="material-symbols-outlined text-[#D2691E] text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">{item.icon}</span>
                                    <h3 className="font-serif text-2xl font-bold text-trust-navy mb-4 leading-tight">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-base flex-grow font-medium">
                                        {item.descMarkup}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Workflow section */}
                <section className="max-w-[1280px] mx-auto px-6 py-32">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[11px]">The Difference</span>
                                <span className="w-12 h-[2px] bg-gradient-to-r from-[#D2691E] to-transparent"></span>
                            </div>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-trust-navy leading-tight">
                                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B] italic">Generalists</span><br />
                                Don't Work
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                                Generic virtual assistants often lack the <strong className="text-trust-navy">specific clinical knowledge</strong> required for psychiatry. Our assistants understand the difference between an{' '}
                                <span className="relative inline-block text-[#D2691E] font-bold">
                                    SSRI and an MAOI
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D2691E]/30"></span>
                                </span>. They know why tracking a 5150 hold history is critical and navigate the specific needs of California psychiatric patients.
                            </p>
                            <div className="space-y-4 pt-4">
                                {[
                                    { text: '100% HIPAA Certified Staff', metric: 'Zero Breaches' },
                                    { text: 'Trained on California Consent Laws', metric: 'State-Specific' },
                                    { text: 'Familiar with 50+ Psychiatric Medications', metric: 'Clinical Depth' },
                                    { text: 'Crisis De-escalation Protocol Aware', metric: 'Patient Safety' }
                                ].map((bullet, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="size-10 rounded-xl bg-[#D2691E]/10 flex items-center justify-center group-hover:bg-[#D2691E]/20 transition-colors">
                                            <span className="material-symbols-outlined text-[#D2691E] text-xl">check_circle</span>
                                        </div>
                                        <div className="flex-1">
                                            <span className="font-bold text-trust-navy text-base block">{bullet.text}</span>
                                            <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">{bullet.metric}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-[#D2691E]/10 rounded-[3rem] blur-3xl opacity-50"></div>
                            <div className="relative bg-trust-navy rounded-[3rem] p-12 text-white shadow-2xl overflow-hidden border border-white/10">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E]/20 blur-[100px] rounded-full -mr-32 -mt-32 group-hover:bg-[#D2691E]/30 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="size-16 rounded-2xl bg-[#D2691E]/20 flex items-center justify-center mb-6">
                                        <span className="material-symbols-outlined text-[#D2691E] text-3xl">touch_app</span>
                                    </div>
                                    <h3 className="font-serif text-3xl md:text-4xl font-bold mb-6 !text-white leading-tight">
                                        The <span className="italic text-[#D2691E]">"One-Touch"</span> Rule
                                    </h3>
                                    <div className="space-y-6">
                                        <p className="text-lg leading-relaxed text-slate-300 font-medium">
                                            We operate on the philosophy that you should only have to <strong className="text-white">"touch" a task once</strong>. If you send an instruction,{' '}
                                            <span className="text-[#D2691E] font-bold">consider it done</span>. We handle the follow-up, the documentation, and the closure.
                                        </p>
                                        <div className="border-t border-white/10 pt-6">
                                            <div className="flex items-start gap-4">
                                                <div className="size-12 rounded-xl bg-[#D2691E]/20 flex items-center justify-center flex-shrink-0">
                                                    <span className="material-symbols-outlined text-[#D2691E]">schedule</span>
                                                </div>
                                                <div>
                                                    <p className="font-bold text-xl text-[#D2691E] mb-2">Ready for Full Practice Support?</p>
                                                    <p className="text-base text-slate-400">
                                                        Most practices can fully onboard a dedicated psychiatric assistant within{' '}
                                                        <strong className="text-white">5 business days</strong>.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Competitive Landscape Section */}
                <section className="py-32 bg-[#FAF8F3]">
                    <div className="max-w-[1400px] mx-auto px-6">
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="text-[#D2691E] font-bold uppercase tracking-widest text-[11px]">Competitive Analysis</span>
                                <span className="w-12 h-[2px] bg-gradient-to-r from-[#D2691E] to-transparent"></span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-trust-navy mb-6">
                                How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] to-[#B8860B]">Compare</span>
                            </h2>
                            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium">
                                Understanding the difference between a <strong className="text-trust-navy">general assistant</strong> and{' '}
                                <span className="relative inline-block text-[#D2691E] font-bold">
                                    specialized psychiatric support
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D2691E]/30"></span>
                                </span>.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Generalist VA Card */}
                            <div className="p-10 rounded-[3rem] border-2 border-slate-200 bg-white hover:border-slate-300 transition-all">
                                <div className="mb-6">
                                    <div className="size-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-slate-400 text-3xl">person</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-700 mb-3 font-serif">Generalist VA Agencies</h3>
                                    <p className="text-base text-slate-500 font-bold">$1,200 - $2,500/mo</p>
                                </div>
                                <ul className="space-y-3 text-base mb-8">
                                    <li className="flex gap-3 items-start">
                                        <span className="text-red-400 text-xl flex-shrink-0">✕</span>
                                        <span className="text-slate-400">No medical specialization</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="text-red-400 text-xl flex-shrink-0">✕</span>
                                        <span className="text-slate-400">Basic HIPAA knowledge only</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="text-red-400 text-xl flex-shrink-0">✕</span>
                                        <span className="text-slate-400">High turnover / training burden</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="text-red-400 text-xl flex-shrink-0">✕</span>
                                        <span className="text-slate-400">Cannot handle prescriptions</span>
                                    </li>
                                </ul>
                                <div className="pt-6 border-t border-slate-200">
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Best For</p>
                                    <p className="text-sm text-slate-600">Basic calendar management and general email triage.</p>
                                </div>
                            </div>

                            {/* Mental Health VA Card */}
                            <div className="p-10 rounded-[3rem] border-2 border-slate-200 bg-white hover:border-slate-300 transition-all">
                                <div className="mb-6">
                                    <div className="size-14 rounded-2xl bg-green-100 flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-green-600 text-3xl">health_and_safety</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-700 mb-3 font-serif">Mental Health VA Agencies</h3>
                                    <p className="text-base text-slate-500 font-bold">$2,500 - $3,500/mo</p>
                                </div>
                                <ul className="space-y-3 text-base mb-8">
                                    <li className="flex gap-3 items-start">
                                        <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                                        <span className="text-slate-700 font-medium">Understand EMR/EHR systems</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="text-green-600 text-xl flex-shrink-0">✓</span>
                                        <span className="text-slate-700 font-medium">HIPAA certified training</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="text-red-400 text-xl flex-shrink-0">✕</span>
                                        <span className="text-slate-400">Limited psychiatric depth</span>
                                    </li>
                                    <li className="flex gap-3 items-start">
                                        <span className="text-red-400 text-xl flex-shrink-0">✕</span>
                                        <span className="text-slate-400">General clinical support</span>
                                    </li>
                                </ul>
                                <div className="pt-6 border-t border-slate-200">
                                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Best For</p>
                                    <p className="text-sm text-slate-600">Psychotherapists and low-complexity private practices.</p>
                                </div>
                            </div>

                            {/* Virtual Minds Card - PREMIUM FEATURED */}
                            <div className="relative group">
                                <div className="absolute -inset-2 bg-[#D2691E]/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                <div className="relative p-10 rounded-[3rem] bg-trust-navy text-white shadow-2xl overflow-hidden border-2 border-[#D2691E]/30 hover:-translate-y-2 transition-all duration-500">
                                    {/* Background Glow */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E]/20 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none group-hover:bg-[#D2691E]/30 transition-colors"></div>

                                    {/* Top Choice Badge */}
                                    <div className="absolute top-0 right-0 bg-[#D2691E] text-white px-4 py-2 text-xs font-black uppercase tracking-widest rounded-bl-2xl flex items-center gap-2">
                                        <span className="material-symbols-outlined text-sm">star</span>
                                        Top Choice
                                    </div>

                                    <div className="relative z-10">
                                        <div className="mb-6">
                                            <div className="size-14 rounded-2xl bg-[#D2691E]/20 flex items-center justify-center mb-4">
                                                <span className="material-symbols-outlined text-[#D2691E] text-3xl">psychology</span>
                                            </div>
                                            <h3 className="text-2xl font-bold !text-white mb-3 font-serif">Virtual Minds Specialized VA</h3>
                                            <p className="text-base text-[#D2691E] font-black uppercase tracking-widest">Premium: $5,000/mo+</p>
                                        </div>
                                        <ul className="space-y-3 text-base mb-8">
                                            <li className="flex gap-3 items-start">
                                                <div className="size-6 rounded-lg bg-[#D2691E]/20 flex items-center justify-center flex-shrink-0">
                                                    <span className="text-[#D2691E] text-sm">✓</span>
                                                </div>
                                                <span className="text-white font-bold">Specialized Psychiatric training</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <div className="size-6 rounded-lg bg-[#D2691E]/20 flex items-center justify-center flex-shrink-0">
                                                    <span className="text-[#D2691E] text-sm">✓</span>
                                                </div>
                                                <span className="text-white font-bold">California-specific regulation mastery</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <div className="size-6 rounded-lg bg-[#D2691E]/20 flex items-center justify-center flex-shrink-0">
                                                    <span className="text-[#D2691E] text-sm">✓</span>
                                                </div>
                                                <span className="text-white font-bold">Billing, Refills, & Priors Experts</span>
                                            </li>
                                            <li className="flex gap-3 items-start">
                                                <div className="size-6 rounded-lg bg-[#D2691E]/20 flex items-center justify-center flex-shrink-0">
                                                    <span className="text-[#D2691E] text-sm">✓</span>
                                                </div>
                                                <span className="text-white font-bold">Zero-friction practice takeover</span>
                                            </li>
                                        </ul>
                                        <div className="pt-6 border-t border-white/10">
                                            <p className="text-sm font-bold text-[#D2691E] uppercase tracking-widest mb-2">Best For</p>
                                            <p className="text-sm text-slate-300 font-medium">High-yield psychiatrists needing elite professional support.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration Section */}
                <section className="bg-white border-y border-slate-100 py-24">
                    <div className="max-w-[1280px] mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="text-primary font-bold uppercase tracking-widest text-[11px]">Platform Integration</span>
                            <span className="w-12 h-[2px] bg-gradient-to-r from-primary to-transparent"></span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-navy mb-4">
                            Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#B8860B]">Platform</span> Integration
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-12 font-medium">
                            Our assistants are trained on the platforms you already use—<strong className="text-trust-navy">no disruption</strong> to your workflow.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            {[
                                { name: 'SimplePractice', icon: 'clinical_notes' },
                                { name: 'CharmHealth', icon: 'health_and_safety' },
                                { name: 'Kareo', icon: 'medical_information' },
                                { name: 'AdvancedMD', icon: 'medication' },
                                { name: 'DrChrono', icon: 'stethoscope' },
                                { name: 'Google Workspace', icon: 'workspace_premium' }
                            ].map((platform) => (
                                <div key={platform.name} className="group bg-[#FAF8F3] px-8 py-4 rounded-2xl border-2 border-slate-200 hover:border-primary/30 font-bold text-slate-600 text-sm shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-xl group-hover:scale-110 transition-transform">{platform.icon}</span>
                                    {platform.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-[#FAF8F3]">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-navy mb-4">Common Questions</h2>
                            <p className="text-slate-600">Everything you need to know about our specialized VA service.</p>
                        </div>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Are your VAs HIPAA compliant?",
                                    a: "Absolutely. Every Virtual Minds assistant undergoes rigorous HIPAA certification and annual retraining. We sign a BAA (Business Associate Agreement) with your practice to ensure full legal compliance."
                                },
                                {
                                    q: "What time zone do they work in?",
                                    a: "They work in your time zone (Pacific Time). Our assistants align their schedule with your clinic hours to ensure real-time coordination for intakes and patient support."
                                },
                                {
                                    q: "Can they handle prior authorizations?",
                                    a: "Yes. This is a core specialization. They are trained to navigate insurance portals (CoverMyMeds, Availity) to process prior authorizations and handle pharmacy calls effectively."
                                },
                                {
                                    q: "How long is the contract?",
                                    a: "We operate on a month-to-month basis with no long-term lock-in. We believe we should earn your business every single month through high-performance support."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-primary/30 transition-colors shadow-sm">
                                    <h3 className="font-bold text-lg text-trust-navy mb-3 flex items-start gap-3">
                                        <span className="text-primary material-symbols-outlined mt-0.5">help</span>
                                        {item.q}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed ml-9">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <ServiceNavigationTray />
            </main>
            <Footer />
        </div>
    );
}
