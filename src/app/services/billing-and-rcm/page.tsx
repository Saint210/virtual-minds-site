import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";
import BillingDashboardGraphic from "@/components/services/BillingDashboardGraphic";

export const metadata = {
    title: "California Psychiatric Billing Support Virtual Assistants | Virtual Minds",
    description: "California psychiatric billing support virtual assistants for insurance verification, prior authorizations, and revenue cycle admin coordination.",
};

export default function BillingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "Billing & RCM" }
                ]}
            />
            <main className="flex-grow">
                {/* EXECUTIVE BILLING SUPPORT HERO */}
                <section className="relative pt-6 md:pt-10 pb-12 md:pb-20 bg-[#FAF8F3]">
                    {/* Immersive Background Tokens - Wrapped to prevent page overflow but allow section overlap */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A2332]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-[#D2691E]/10 rounded-full blur-[100px] translate-y-1/2" />
                    </div>

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                            {/* LEFT: Copy & Authority (55%) */}
                            <div className="lg:w-[55%]">
                                <div className="inline-flex items-center gap-2 bg-white border border-[#1A2332]/10 rounded-full px-4 py-1.5 text-trust-navy text-[10px] font-black mb-5 shadow-sm group hover:shadow-md transition-all">
                                    <span className="material-symbols-outlined text-[#D2691E] text-[16px]">verified</span>
                                    <span className="tracking-[0.2em] uppercase text-trust-navy">Administrative Infrastructure</span>
                                </div>

                                <h1 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-trust-navy mb-5 leading-[0.95] tracking-tight">
                                    Psychiatric Billing <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D2691E] via-[#B8860B] to-[#D2691E] animate-shimmer bg-[length:200%_auto]">
                                        & RCM Support.
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-2xl">
                                    Specialized administrative support for
                                    <span className="text-trust-navy font-bold border-b-2 border-[#D2691E]/30 mx-2 pb-0.5">eligibility, prior authorizations,</span>
                                    and revenue cycle coordination built exclusively for California psychiatric practices.
                                </p>

                                {/* Institutional Social Proof */}
                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="size-12 rounded-full bg-white border-[3px] border-[#FAF8F3] flex items-center justify-center overflow-hidden shadow-lg relative z-[10] hover:scale-110 transition-transform duration-300">
                                                <Image
                                                    src={`https://i.pravatar.cc/150?u=${i + 120}`}
                                                    alt="Billing Specialist"
                                                    width={48}
                                                    height={48}
                                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-xs text-slate-500 font-medium leading-tight text-center sm:text-left">
                                        <p className="mb-0.5"><strong className="text-trust-navy italic text-sm">Stabilizing Revenue</strong></p>
                                        <p className="text-slate-400">for California psychiatric clinics.</p>
                                    </div>
                                </div>

                                {/* PREMIUM PRACTICE ECONOMICS BAR */}
                                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-6 border-y border-[#1A2332]/10 mb-8">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-[#D2691E] uppercase tracking-[0.2em] leading-none">Yield</p>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-trust-navy text-lg">account_balance</span>
                                            <p className="text-base font-bold text-trust-navy">Revenue Continuity</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-[#1A2332]/10" />
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-[#D2691E] uppercase tracking-[0.2em] leading-none">Verification</p>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-trust-navy text-lg">fact_check</span>
                                            <p className="text-base font-bold text-trust-navy">Prior Auth Support</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block h-10 w-px bg-[#1A2332]/10" />
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-[#D2691E] uppercase tracking-[0.2em] leading-none">Security</p>
                                        <div className="flex items-center gap-2">
                                            <span className="size-2 rounded-full bg-green-500 animate-pulse box-shadow-lg shadow-green-500/50" />
                                            <p className="text-base font-bold text-trust-navy italic">CCPA Secure</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/book-consultation" className="bg-[#D2691E] hover:bg-[#B8860B] text-white px-8 py-4 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-[#D2691E]/20 transition-all flex items-center justify-center gap-2.5">
                                        <span className="material-symbols-outlined text-[20px]">schedule</span>
                                        Schedule Strategy Audit
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT: Visual System Card (45%) - OPTIMIZED FOR COMPACTNESS */}
                            <div className="lg:w-[45%] w-full h-full min-h-[420px] flex flex-col pt-6 lg:pt-0">
                                <div className="relative group w-full flex-grow h-full">
                                    <div className="absolute -inset-4 bg-[#1A2332]/5 rounded-[3rem] blur-3xl opacity-50"></div>
                                    <div className="relative w-full h-full rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-white flex items-center justify-center group-hover:scale-[1.005] transition-transform duration-700">
                                        <BillingDashboardGraphic />
                                    </div>

                                    {/* Floating Premium Badge - Adjusted position */}
                                    <div className="absolute -top-4 -right-4 bg-white p-4 rounded-[1.5rem] shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce-slow z-20 scale-90 origin-top-right">
                                        <div className="size-10 bg-[#D2691E]/10 rounded-xl flex items-center justify-center text-[#D2691E]">
                                            <span className="material-symbols-outlined font-bold text-xl">payments</span>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Direct Impact</p>
                                            <p className="text-sm font-bold text-trust-navy">Revenue Optimized</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SCOPE OF SERVICE - PREMIUM REDESIGN */}
                <section className="bg-white border-y border-slate-100 py-32 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(#1A2332_1px,transparent_1px)] [background-size:32px_32px]" />
                    </div>

                    <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                        <div className="bg-[#FAF8F3] rounded-[3rem] p-12 md:p-24 shadow-2xl border border-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E]/5 rounded-full -mr-32 -mt-32"></div>

                            <div className="max-w-4xl mx-auto">
                                <div className="text-center mb-16">
                                    <span className="inline-block py-1 px-3 rounded-full bg-[#1A2332]/5 text-[#1A2332] text-xs font-black uppercase tracking-widest mb-4">
                                        Operational Clarification
                                    </span>
                                    <h2 className="font-display text-4xl md:text-5xl font-black text-trust-navy mb-8">Our Role in Your Billing</h2>
                                    <p className="text-2xl text-slate-600 italic font-serif leading-relaxed">
                                        &ldquo;Virtual Minds does not create claims or submit billing on behalf of a practice. We work together with your existing billing team or software to provide necessary administrative data.&rdquo;
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                                    <div className="space-y-8">
                                        <h3 className="font-display text-2xl font-bold text-trust-navy flex items-center gap-3">
                                            <span className="size-8 rounded-full bg-[#D2691E] text-white flex items-center justify-center text-sm">1</span>
                                            What We Handle
                                        </h3>
                                        <ul className="space-y-6">
                                            {[
                                                'Insurance Verification & Eligibility Checks',
                                                'Obtaining Prior Authorizations',
                                                'Collecting Patient Copays & Balances',
                                                'Coordinating with External Billing Agencies',
                                                'Ensuring CPT Code Accuracy in EHR',
                                                'Resubmitting Missing Provider Documentation'
                                            ].map((item, i) => (
                                                <li key={i} className="flex gap-4 items-start group">
                                                    <span className="material-symbols-outlined text-[#D2691E] mt-0.5 group-hover:scale-110 transition-transform">check_circle</span>
                                                    <span className="font-medium text-slate-700 text-lg">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="bg-white p-10 rounded-[2.5rem] border border-[#1A2332]/5 shadow-xl transition-transform hover:-translate-y-1 duration-500">
                                            <div className="size-12 rounded-xl bg-[#1A2332] flex items-center justify-center mb-6 shadow-lg shadow-[#1A2332]/20">
                                                <span className="material-symbols-outlined text-white">psychology</span>
                                            </div>
                                            <h3 className="font-display font-bold text-2xl text-trust-navy mb-4">Why This Model Works</h3>
                                            <p className="text-slate-600 leading-relaxed text-lg">
                                                By separating clinical data gathering from actual claim submission, we provide a layer of verification that significantly reduces denials. Your VA becomes the &ldquo;bridge&rdquo; between the provider and the billing software, ensuring clean data entry every time.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PREMIUM TECHNICAL FUNCTIONS */}
                <section className="max-w-[1280px] mx-auto px-6 py-32">
                    <div className="text-center mb-16">
                        <h2 className="font-display text-4xl font-bold text-trust-navy mb-4">Technical Competencies</h2>
                        <p className="text-slate-500 max-w-xl mx-auto">Our assistants are trained in the specific workflows that keep revenue moving.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { icon: 'receipt_long', title: 'Superbill Generation', desc: 'Timely creation and distribution of superbills for your out-of-network patients.' },
                            { icon: 'schedule', title: 'Prior Auth Tracking', desc: 'Meticulous tracking of authorization windows to prevent unpaid sessions.' },
                            { icon: 'credit_card', title: 'Payment Processing', desc: 'Secure processing of credit card transactions and recurring payment setups.' }
                        ].map((benefit, i) => (
                            <div key={i} className="flex flex-col gap-6 p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl hover:shadow-[#D2691E]/10 transition-all duration-500 group relative overflow-hidden">

                                <div className="size-20 rounded-2xl bg-[#D2691E]/10 flex items-center justify-center text-[#D2691E] group-hover:bg-[#D2691E] group-hover:text-white transition-all duration-300 shadow-sm">
                                    <span className="material-symbols-outlined text-4xl">{benefit.icon}</span>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-display font-bold text-trust-navy mb-3">{benefit.title}</h3>
                                    <p className="text-slate-500 leading-relaxed font-medium">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <ServiceNavigationTray />
            </main>
            <Footer />
        </div>
    );
}
