import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ServiceNavigationTray from "@/components/marketing/ServiceNavigationTray";

export const metadata = {
    title: "HIPAA Compliant Virtual Assistants for Psychiatrists | Virtual Minds",
    description: "HIPAA compliant virtual assistants for psychiatrists with BAA coverage, secure workflows, audit trails, and clinical-grade data security.",
};

export default function HIPAAPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#FAF8F3]">
            <Navbar />
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: "HIPAA Compliance Support" }
                ]}
            />
            <main className="flex-grow">
                {/* EXECUTIVE COMPLIANCE HERO */}
                <section className="relative pt-6 md:pt-10 pb-12 md:pb-20 overflow-hidden bg-[#FAF8F3]">
                    {/* Immersive Background Tokens */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1A2332]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-10 w-[300px] h-[300px] bg-[#D2691E]/10 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

                    <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                            {/* LEFT: Copy & Authority (60%) */}
                            <div className="lg:w-[60%]">
                                <div className="inline-flex items-center gap-2 bg-white border border-[#1A2332]/10 rounded-full px-5 py-2 text-trust-navy text-xs font-black mb-4 shadow-sm">
                                    <span className="material-symbols-outlined text-[#D2691E] text-[18px]">verified_user</span>
                                    <span className="tracking-[0.2em] uppercase">Clinical Security Protocol</span>
                                </div>

                                <h1 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-trust-navy mb-5 leading-[0.95] tracking-tight">
                                    HIPAA-Compliant <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                                        Clinical Support.
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-6 max-w-2xl">
                                    We don&apos;t just &quot;follow&quot; HIPAA—we implement hardened
                                    <span className="text-trust-navy font-bold border-b-2 border-[#D2691E]/30 mx-2">secure psychiatric workflows</span>
                                    that protect your liability and patient trust.
                                </p>
                                <p className="text-base text-slate-500 font-medium mb-8 max-w-2xl">
                                    Protecting practices in <Link href="/locations/los-angeles" className="text-primary hover:underline font-bold">Los Angeles</Link>, <Link href="/locations/san-francisco" className="text-primary hover:underline font-bold">San Francisco</Link>, <Link href="/locations/orange" className="text-primary hover:underline font-bold">Orange County</Link>, and <Link href="/locations" className="text-primary hover:underline font-bold">throughout California</Link>.
                                </p>

                                {/* Institutional Social Proof */}
                                <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div key={i} className="size-12 rounded-full bg-white border-[3px] border-[#FAF8F3] flex items-center justify-center overflow-hidden shadow-lg relative z-[10]">
                                                <Image
                                                    src={`https://i.pravatar.cc/150?u=${i + 140}`}
                                                    alt="Compliance Specialist"
                                                    width={48}
                                                    height={48}
                                                    className="grayscale hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-xs text-slate-500 font-medium leading-tight text-center sm:text-left">
                                        <p><strong className="text-trust-navy italic">Trusted by Multi-Provider Groups</strong></p>
                                        <p>Standardized BAA-covered operations for California compliance.</p>
                                    </div>
                                </div>

                                {/* PRACTICE ECONOMICS BAR - COMPLIANCE SPECIFIC */}
                                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-6 border-y border-[#1A2332]/10 mb-8">
                                    <div className="space-y-1">
                                        <p className="text-[9px] font-black text-[#D2691E] uppercase tracking-[0.2em] leading-none">Liability Protection</p>
                                        <p className="text-base font-bold text-trust-navy">Full BAA</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-trust-navy text-sm font-bold">verified_user</span>
                                            <span className="text-slate-600 font-medium">Bespoke psychiatric-specific HIPAA infrastructure</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-trust-navy text-sm font-bold">verified_user</span>
                                            <span className="text-slate-600 font-medium">Statewide California regulatory compliance</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link href="/book-consultation" className="bg-[#D2691E] hover:bg-[#B8860B] text-white px-8 py-4 rounded-xl font-bold text-base hover:shadow-xl hover:shadow-[#D2691E]/20 transition-all flex items-center justify-center gap-2.5">
                                        <span className="material-symbols-outlined text-[20px]">enhanced_encryption</span>
                                        Request Compliance Audit
                                    </Link>
                                </div>
                            </div>

                            {/* RIGHT: Visual System Card (40%) */}
                            <div className="lg:w-[40%] relative w-full">
                                <div className="relative group">
                                    <div className="absolute -inset-4 bg-[#1A2332]/5 rounded-3xl blur-3xl opacity-50"></div>
                                    <div className="relative aspect-[4/5] w-full rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-white bg-slate-100 flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-700">
                                        <Image
                                            src="/images/hipaa-security-matrix-v2.png"
                                            alt="Clinical Security Matrix Visualization"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1A2332]/90 to-transparent h-1/2 flex items-end p-8">
                                            <div className="mb-2">
                                                <p className="!text-slate-100 text-xs leading-relaxed max-w-xs font-medium border-t border-white/20 pt-4">
                                                    Encrypted tunnels, zero-knowledge machines, and HIPAA-audited protocols built for psychiatric liability mitigation.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Floating badge */}
                                    <div className="absolute -top-4 -right-4 bg-white p-4 rounded-[1.5rem] shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                                        <div className="size-10 bg-[#D2691E]/10 rounded-xl flex items-center justify-center text-[#D2691E]">
                                            <span className="material-symbols-outlined font-bold">verified</span>
                                        </div>
                                        <div>
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-0.5">Integrity Status</p>
                                            <p className="text-sm font-bold text-trust-navy">BAA Active</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Compliance Grid with Enhanced Background Layering */}
                <div className="bg-white border-y border-slate-100 py-24 md:py-32">
                    <section className="max-w-[1280px] mx-auto px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[
                                { icon: 'gavel', title: 'Full BAA Coverage', desc: 'Every Virtual Minds specialist is covered by a comprehensive Business Associate Agreement before their first day.' },
                                { icon: 'verified_user', title: 'Annual Certification', desc: 'Our VAs undergo mandatory annual HIPAA re-certification and regular phishing/security drills.' },
                                { icon: 'vpn_lock', title: 'Secure VPN Access', desc: 'All clinical work is performed through encrypted, dedicated VPNs with multi-factor authentication.' },
                                { icon: 'desktop_access_disabled', title: 'Data Sovereignty', desc: 'No patient data is ever stored on local machines. PHI remains strictly within your EHR environment.' },
                                { icon: 'policy', title: 'Secured Infrastructure', desc: 'Our administrative infrastructure is built on industry-standard security protocols for operational stability.' },
                                { icon: 'history', title: 'Audit Trail Logs', desc: 'Every action taken by a VA is logged and timestamped within our internal systems for full transparency.' }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-6 p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-[#D2691E]/10 transition-all duration-500 group">
                                    <div className="size-20 rounded-2xl bg-[#D2691E]/10 flex items-center justify-center text-[#D2691E] shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-2xl font-bold text-trust-navy mb-3">{item.title}</h3>
                                        <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Audit Checklist Section */}
                <section className="bg-[#FAF8F3] py-24 md:py-32">
                    <div className="max-w-[1280px] mx-auto px-6">
                        <div className="bg-white rounded-[3.5rem] p-12 md:p-24 shadow-2xl border border-slate-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2691E]/5 rounded-full -mr-32 -mt-32"></div>
                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <div>
                                    <h2 className="font-display text-4xl md:text-5xl font-black text-trust-navy mb-8 leading-tight">The 2026 Psychiatric <br /><span className="text-[#D2691E] italic">Compliance Matrix</span></h2>
                                    <p className="text-slate-500 text-lg mb-12">How we protect your practice from HIPAA liability and administrative errors.</p>
                                    <div className="space-y-6">
                                        {[
                                            'Encrypted End-to-End PHI Handling',
                                            'Dedicated Clinical Infrastructure',
                                            'Rigorous Background Screenings',
                                            'Ongoing Security Oversight'
                                        ].map((step, i) => (
                                            <div key={i} className="flex items-center gap-4">
                                                <div className="size-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                                    <span className="material-symbols-outlined text-sm">check</span>
                                                </div>
                                                <span className="font-black text-trust-navy uppercase tracking-widest text-xs">{step}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="bg-[#1A2332] rounded-[2.5rem] p-10 text-white shadow-2xl overflow-hidden border border-white/5 relative">
                                        {/* Subtle Glow inside monitor */}
                                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#D2691E]/10 blur-[60px] rounded-full"></div>

                                        <div className="flex justify-between items-center mb-10 relative z-10">
                                            <span className="text-xs font-black tracking-widest text-[#D2691E] uppercase">Security Monitor</span>
                                            <div className="flex gap-1.5">
                                                <div className="size-2 rounded-full bg-green-500 animate-[pulse_2s_infinite]"></div>
                                                <div className="size-2 rounded-full bg-green-500/50"></div>
                                                <div className="size-2 rounded-full bg-green-500/30"></div>
                                            </div>
                                        </div>
                                        <div className="space-y-8 relative z-10">
                                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                                <p className="text-[10px] font-black text-white/40 mb-3 uppercase tracking-widest">Active Status</p>
                                                <p className="font-black text-xl italic !text-white" style={{ color: 'white' }}>Clinical BAA Active</p>
                                            </div>
                                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                                <p className="text-[10px] font-black text-white/40 mb-3 uppercase tracking-widest">Encryption Level</p>
                                                <p className="font-black text-xl italic !text-white" style={{ color: 'white' }}>AES-256 Grade</p>
                                            </div>
                                            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                                                <p className="text-[10px] font-black text-white/40 mb-3 uppercase tracking-widest">Integrity Check</p>
                                                <p className="font-black text-xl italic !text-white" style={{ color: 'white' }}>Audit Ready</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <ServiceNavigationTray />
            </main>
            <Footer />
        </div>
    );
}
